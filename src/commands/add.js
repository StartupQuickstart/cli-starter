import { Command } from 'commander';

export const cmd = new Command();

cmd
  .name('add')
  .description('Adds 2 or an optional 3rd number together')
  .argument('<param1>', 'First number to add')
  .argument('<param2>', 'Second number to add')
  .argument('[param3]', 'Optional third number to add')
  .action(async (param1, param2, param3 = 0) => {
    try {
      const options = cmd.opts();
      param1 = parseFloat(param1);
      param2 = parseFloat(param2);
      param3 = parseFloat(param3);

      console.log(param1, '+', param2, '+', param3, '=', param1 + param2 + param3);
    } catch (err) {
      console.log(err);
    }

    process.exit();
  });

export default cmd;
