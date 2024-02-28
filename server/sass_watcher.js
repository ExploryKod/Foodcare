const chokidar = require('chokidar');
const sass = require('sass');
const fs = require('fs');

const watcher = chokidar.watch('./static/style/*.scss');

watcher.on('change', (filePath) => {
  console.log(`File ${filePath} has changed. Recompiling Sass...`);

  const result = sass.renderSync({
    file: filePath,
  });

  const cssFilePath = filePath.replace('.scss', '.css');
  fs.writeFileSync(cssFilePath, result.css);

  console.log(`Sass successfully compiled to CSS: ${cssFilePath}`);
});
