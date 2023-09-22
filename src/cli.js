#!/usr/bin/env babel-node --

import cli from 'commander';
import * as commands from './commands';
import pkg from '../package.json';

cli
  .name(Object.keys(pkg.bin)[0])
  .description(pkg.description)
  .version(pkg.version)
  .option('-e, --env [env]', 'Environment to use', 'dev')
  .addCommand(commands.subcommand)
  .addCommand(commands.add)
  .addCommand(commands.error)
  // Root commands
  .addCommand(commands.update);

cli.parse(process.argv);
