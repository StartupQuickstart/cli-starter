import { Command } from 'commander';

export const cmd = new Command();

cmd
  .name('error')
  .description('Example of how an error is handled')
  .action(async () => {
    throw new Error('Sample Error');
  });

export default cmd;
