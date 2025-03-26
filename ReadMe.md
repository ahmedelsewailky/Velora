# Gulp Project Setup

## 📌 Features
- HTML processing with `gulp-file-include` and beautification
- SCSS compilation with sourcemaps, autoprefixing, and minification
- JavaScript concatenation and minification
- Copying library files and images
- Live server with BrowserSync for real-time development

## 🛠 Installation
1. Clone the repository:
   ```sh
   git clone git@github.com:ahmedelsewailky/Velora.git
   cd Velora
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## 📂 Project Structure
```
project-folder/
│── src/
│   ├── html/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── includes/
│   │   ├── sections/
│   ├── scss/
│   ├── js/
│   ├── libs/
│   ├── images/
│── docs/ (Generated output)
│── gulpfile.js
│── package.json
│── README.md
```

## 🚀 Usage
### Run Development Server
```sh
gulp
```
This will process all assets and generates optimized HTML, CSS, JS, and assets in the `docs` directory.

## 🏗 Gulp Tasks
- `html` - Process and beautify HTML files.
- `style` - Compile SCSS, autoprefix, minify, and generate sourcemaps.
- `scripts` - Concatenate and minify JavaScript files.
- `libs` - Copy library files to output.
- `images` - Copy images to output.
- `serve` - Start development server and watch for changes.

## 📦 Dependencies
| Package               | Version  |
|-----------------------|----------|
| browser-sync         | ^3.0.3   |
| cross-env           | ^7.0.3   |
| gulp               | ^5.0.0   |
| gulp-autoprefixer  | ^9.0.0   |
| gulp-clean-css     | ^4.3.0   |
| gulp-concat        | ^2.6.1   |
| gulp-file-include  | ^2.3.0   |
| gulp-html-beautify | ^1.0.1   |
| gulp-sass          | ^6.0.1   |
| gulp-sourcemaps    | ^3.0.0   |
| gulp-uglify        | ^3.0.2   |
| sass               | ^1.85.1  |

## 🤝 Contributing
Feel free to submit issues and pull requests to improve this project.

## 📜 License
This project is licensed under the MIT License.

