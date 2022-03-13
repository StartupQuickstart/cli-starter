import path from 'path';
import glob from 'glob';

export default function add(cli) {
  const dirpath = path.resolve(__dirname) + '/**/*';
  glob(dirpath, (err, files) => {
    if (err) {
      throw err;
    }

    if (!files) {
      throw new Error('Failed to find files at ' + dirpath);
    }

    files.forEach(function (file) {
      if (file.endsWith('index.js')) {
        return;
      }

      if (file.endsWith('.js')) {
        const exportName = file
          .replace(/\.js$/, '')
          .split('-')
          .map((part, index) => (index > 0 ? part[0].toUpperCase() + part.slice(1) : part))
          .join('');

        const command = require(file).default;
        command(cli);
      }
    });
  });
}
