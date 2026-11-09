import { Command } from "commander";
import { getTrendingReposController } from "../controllers/github.trending.cli.controller.js";

export default function githubTrendingCLIRouter() {
    const program = new Command();

    program
    .requiredOption('--month <duration in months , years , date>' , 'duration in months , years , date')
    .action(options => {

        console.log(options);
        const _year = Number(options.year) || undefined;
        const _month = Number(options.month) || undefined;
        const _date = Number(options.date) || undefined;
        const _week =Number(options.week) || undefined;

        getTrendingReposController(_year , _month , _date , _week);
    });

    program.parse(process.argv);
}

