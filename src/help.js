import chalk from 'chalk';

const menus = {
    help:`
${chalk.greenBright('clinntp [options]')}

    ${chalk.blueBright('-l, --limit')} ${chalk.redBright('<news limit>')}
        Limit the number of news you load when choosing a newsgroup.
        ${chalk.blackBright('Default:')} Loads ${chalk.yellowBright('all')} of the news in the selected newsgroup

    ${chalk.blueBright('-p, --port')} ${chalk.redBright('<port number>')}
        Sets the port number to use when connecting to the host
        ${chalk.blackBright('Default:')} Set to ${chalk.yellowBright('119')}

    ${chalk.blueBright('-h, --host')} ${chalk.redBright('<host address>')}
        Sets the address to use when connecting to the host
        ${chalk.blackBright('Default:')} Set to ${chalk.yellowBright('\'news.epita.fr\'')}

    ${chalk.blueBright('-n, --newsgroups')} ${chalk.redBright('<match regex>')}
        Sets the regex to use when looking up newsgroups
        ${chalk.blackBright('Default:')} Set to ${chalk.yellowBright('\'*\'')}

    ${chalk.blueBright('-H, --help')}
        Prints clinntp help menu with options info
`
}

export function help() {
    console.log(menus.help);
}