import { Command } from "commander";
import { getTrendingReposController } from "../controllers/github.trending.cli.controller.js";

export default function githubTrendingCLIRouter() {
    const program = new Command();

    program
    .option('--year <duration in year>' , 'duration in year')
    .option('--month <duration in month>' , 'duration in month')
    .option('--date <duration in date>' , 'duration in date')
    .option('--week' , 'weekly duration')
    .requiredOption('--limit <Count of repositories to retrieve>' , 'Count of repositories to retrieve')
    .action(options => {

        // console.log(options);
        
        const _year = Number(options.year) || undefined;
        const _month = Number(options.month) || undefined;
        const _date = Number(options.date) || undefined;
        const _week = Boolean(options.week) || undefined;
        const limit = Number(options.limit) || 10;

        getTrendingReposController(_year , _month , _date , _week , limit);
    });

    program.parse(process.argv);
}

