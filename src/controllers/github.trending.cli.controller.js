import { getTrendingReposService } from "../services/github.trending.cli.service.js";

export async function getTrendingReposController(_year , _month , _date , _week) {
    try {

        const repositories = await getTrendingReposService(_year , _month , _date , _week);

        console.log(repositories);
    } catch (error) {
        console.log(error);
    }
}