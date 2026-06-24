const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'icon.ico'),
        frame: false, // Custom titlebar için çerçeveyi kaldırdık
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Menüyü güvenli bir şekilde fonksiyon içinde kaldırıyoruz
    mainWindow.setMenu(null);
    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// 🎛️ Frontend'den (index.html) gelen Pencere Buton Kontrolleri
ipcMain.on('window-minimize', () => {
    if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
    if (mainWindow) {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    }
});

ipcMain.on('window-close', () => {
    if (mainWindow) mainWindow.close();
});

// 🎹 Uygulama hazır olduğunda tetiklenen alan
app.whenReady().then(() => {
    createWindow();

    // Global Kısayol Kaydı (Ctrl + Shift + S)
    globalShortcut.register('CommandOrControl+Shift+S', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.show();
            mainWindow.focus();

            // Frontend sürecine spotlight sinyali gönder
            mainWindow.webContents.send('global-spotlight-trigger');
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Tüm pencereler kapandığında uygulamayı kapat
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// Uygulama tamamen kapatılırken kısayolları hafızadan temizle
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});