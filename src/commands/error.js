export default (cli) => {
  cli
    .command('error')
    .description('Example of how an error is handled')
    .action(async () => {
      throw new Error('Sample Error');
    });
};
