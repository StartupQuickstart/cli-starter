import shelljs from 'shelljs';
import path from 'path';
import { Command } from 'commander';

export const cmd = new Command();

cmd
  .name('update')
  .description('Updates the cli')
  .action(async () => {
    console.log('Updating cli...');
    try {
      shelljs.exec(`cd ${__dirname} && git pull origin master && npm install`, {
        silent: true
      });
      console.log('Update Completed!');
    } catch (err) {
      console.log(err);
    }

    process.exit();
  });

export default cmd;
