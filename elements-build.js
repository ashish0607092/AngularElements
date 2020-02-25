const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-elements/runtime-es2015.js",
    "./dist/angular-elements/polyfills-es2015.js",
    "./dist/angular-elements/main-es2015.js",
  ];
  await fs.ensureDir("JsApp/angular-elements");
  await concat(files, "JsApp/angular-elements/elements.js");
  await fs.copyFile("./dist/angular-elements/styles.css", "JsApp/angular-elements/styles.css");
})();
