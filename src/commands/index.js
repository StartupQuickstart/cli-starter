import fs from 'fs';
import path from 'path';

export default function add(cli) {
  fs.readdirSync(path.resolve(__dirname)).forEach(function (file) {
    if (file === 'index.js') {
      return;
    }

    const exportName = file
      .replace(/\.js$/, '')
      .split('-')
      .map((part, index) => (index > 0 ? part[0].toUpperCase() + part.slice(1) : part))
      .join('');

    const command = require('./' + file).default;
    command(cli);
  });
}
