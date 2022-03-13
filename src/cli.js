#!/usr/bin/env babel-node --

import cli from 'commander';
import commands from './commands';
import pkg from '../package.json';

cli
  .name(Object.keys(pkg.bin)[0])
  .description(pkg.description)
  .version(pkg.version)
  .option('-e, --env [env]', 'Environment to use', 'dev');

commands(cli);

cli.parse(process.argv);

if (process.argv.length === 2) {
  cli.outputHelp();
}

cli.showHelpAfterError(cli.outputHelp());
