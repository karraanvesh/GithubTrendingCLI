import { getTrendingRepos } from "../repository/github.trending.cli.repository.js";

export async function getTrendingReposService(_year , _month , _date , _week , limit) {
    try {

        const repos = await getTrendingRepos(_year , _month , _date , _week , limit);

        return repos;
    } catch (error) {
        console.log(error);
    }
}