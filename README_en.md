# CodeSnip — Next-Generation Code & Prompt Manager

<p align="center">
  <img src="https://img.shields.io/badge/Version-2.0-00adb5?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Built%20With-Electron-47848F?style=for-the-badge" alt="Electron">
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/Dil-T%C3%BCrk%C3%A7e-red?style=flat-flat" alt="TR"></a>
  <a href="README.en.md"><img src="https://img.shields.io/badge/Language-English-blue?style=flat-flat" alt="EN"></a>
</p>

<p align="center">
  A modern, fast, and fully offline desktop application for managing code snippets and AI prompts.<br>
  Organize, search, and share your code snippets, terminal commands, and prompts—all in one place.
</p>

---

## About

CodeSnip is a modern Electron application built for developers, designers, and AI users.
Organize your code snippets into categories, search them instantly, copy them with a single click, and generate Base64-based sharing links.
All your data is stored locally on your device, allowing the application to work without an internet connection.

> [!NOTE]
> Since the application works entirely offline, your data always stays on your device.

---

## Features

- Liquid Glass (Frosted Glass) user interface
- Global Spotlight search (`Ctrl + Space`)
- Base64-based sharing system
- English and Turkish language support
- Fully offline operation
- Local data storage
- Built-in category system
- Fast search and filtering
- Electron-based desktop application

---

## Installation

### Requirements

- Node.js (version 18 or later recommended)
- npm

### Clone the repository

```bash
git clone https://github.com/MstfSlm38/CodeSnip.git
cd CodeSnip
```

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm start
```

### Build the production version

```bash
npm run build
```

---

## Screenshots

<p align="center">
<img src="screenshot_1.png" width="900">
<br><br>
<img src="screenshot_2.png" width="900">
</p>

---

## Keyboard Shortcuts

| Shortcut | Description |
|----------|-------------|
| `Ctrl + Space` | Open or close Spotlight Search |
| `Esc` | Close the currently open window |

---

## Technologies Used

- Electron
- JavaScript
- HTML5
- CSS3

---

## Roadmap

- [x] v2.0 — Spotlight Search, Sharing System, and redesigned Liquid Glass UI
- [ ] v2.5 — JSON import/export
- [ ] v3.0 — Optional end-to-end encrypted cloud synchronization
- [ ] v3.5 — Visual Studio Code extension
- [ ] v4.0 — Plugin system