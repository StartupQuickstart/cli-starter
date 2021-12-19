#!/usr/bin/env babel-node --

import cli from 'commander';
import commands from './commands';
import pkg from '../package.json';

cli.version(pkg.version).option('-e, --env [env]', 'Environment to use', 'dev');

commands(cli);

cli.parse(process.argv);

if (process.argv.length === 2) {
  cli.outputHelp();
}
