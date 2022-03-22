import chalk from "chalk";

export const infoLog = (...args) => {
    return chalk.blue(`[INFO] :: ${args}`)
}


export const warnLog = (...args) => {
    return chalk.yellow(`[WARN] :: ${args}`)
}


export const errorLog = (...args) => {
    return chalk.red(`[ERROR] :: ${args}`)
}