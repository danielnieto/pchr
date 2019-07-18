import { watch, FSWatcher } from 'chokidar';
import { spawn } from 'child_process';
import chalk from 'chalk';

export class Watcher {

    watcher: FSWatcher;

    constructor(private location: string) {
        this.watcher = watch(`${location}/app/assets/stylesheets/`, {
            ignored: /^\./,
            persistent: true
        });

        this.watcher.on('change', this.onFileChange.bind(this));
        this.watcher.on('error', error => { console.error(chalk.redBright(`An error ocurred while watching for file changes: ${error}`)); });

    }

    refreshBrowserStyles() {

        console.log(chalk.white('Refreshing browser'));
        const osa = spawn('osascript', [`${__dirname}/chrome-refresh.scpt`]);

        osa.stdout.on('data', (data) => {
            console.log(chalk.white(data));
        });

        osa.stderr.on('data', (data) => {
            console.error(chalk.red(data));
        });

        osa.on('close', (code) => {
            if (code === 0) {
                console.log(chalk.greenBright(`Styles were refreshed!`));
            } else {
                console.error(chalk.redBright(`something failed while refreshing the browser`));
            }

        });

    }

    onFileChange(path: string) {
        console.log(chalk.cyan(`File ${path} has been changed`));
        this.refreshBrowserStyles();
    }

}