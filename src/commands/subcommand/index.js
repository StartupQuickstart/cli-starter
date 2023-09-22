import { Command } from 'commander';
import { cmd as add } from './add';

export const cmd = new Command();
cmd.name('subcommand').description('subcommand for the cli').addCommand(add);

export default cmd;
