
const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/ays/runtime-es5.js",
    //"./dist/ays/runtime-es2015.js",
    "./dist/ays/polyfills-es5.js",
    //"./dist/ays/polyfills-es2015.js",
    "./dist/ays/scripts.js",
    "./dist/ays/main-es5.js",
    //"./dist/ays/main-es2015.js"
  ];
  await fs.ensureDir("ays");
  await concat(files, "ays/elements.js");
})();