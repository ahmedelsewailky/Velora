# Gulp Project

## Live Preview

🔗 **[Velora GitHub Pages Preview](https://ahmedelsewailky.github.io/Velora)**

## 🚀 Features
- **HTML Processing:** Uses `gulp-file-include` for modular HTML and `gulp-html-beautify` for formatting.
- **SCSS Compilation:** Compiles SCSS to CSS with `gulp-sass` and `dart-sass`, adds prefixes using `gulp-autoprefixer`, and generates source maps.
- **JavaScript Bundling:** Concatenates JavaScript files using `gulp-concat`.
- **File Watching & Live Reload:** Uses `browser-sync` for automatic reloading during development.
- **Asset Handling:** Moves library files to the distribution folder.

## 📂 Project Structure
```
project-root/
│── src/
│   ├── html/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── includes/
│   ├── scss/
│   ├── js/
│   ├── libs/
│── dist/ (Generated output)
│── gulpfile.js
│── package.json
│── README.md
```

## 🛠 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project:
   ```sh
   gulp
   ```

## 🔧 Gulp Tasks
| Task    | Description |
|---------|-------------|
| `gulp`  | Runs the default task (compiles SCSS, processes HTML, bundles JS, and starts a live server). |
| `gulp html`  | Processes HTML files and includes components. |
| `gulp pages` | Processes pages separately. |
| `gulp style` | Compiles SCSS, applies autoprefixer, and generates source maps. |
| `gulp scripts` | Concatenates JavaScript files. |
| `gulp libs` | Moves library files. |

## 📜 License
This project is licensed under the MIT License.

