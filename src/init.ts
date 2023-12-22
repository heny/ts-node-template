import { Argv } from './constants.js'
import chalk from 'chalk';
import prompt from './prompt.js';

class Init {
  async test(argv: Argv) {
    console.log(chalk.green('成功'), argv)
    await prompt.getTitle();
  }
}

export default new Init()