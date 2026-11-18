import { exec } from "node:child_process";
import chalk from "chalk";

export function runUserCommand(command: string): void {
  exec(command);
  console.log(chalk.green(command));
}
