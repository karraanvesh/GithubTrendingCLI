import { getTrendingReposService } from "../services/github.trending.cli.service.js";

export async function getTrendingReposController(_year , _month , _date , _week , limit) {
    try {

        const repositories = await getTrendingReposService(_year , _month , _date , _week , limit);

        // console.log(repositories);

        const repos = repositories.items;
        const numberOfRepos = repos.length;

        for(let i = 0 ; i < numberOfRepos ; i++) {
            const currentRepo = repos[i];

            console.log(`Repository ${i + 1} details : \n`);

            console.log(`Name of the repository ; ${currentRepo.name}`);
            console.log(`description of the project : ${currentRepo.description}`);
            console.log(`Star count : ${currentRepo.stargazers_count}`);
            console.log(`language used : ${currentRepo.language}`);

            console.log("\n\n");
        }
    } catch (error) {
        console.log(error);
    }
}