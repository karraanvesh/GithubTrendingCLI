**Steps to setup the project**

1. Clone the project

`git clone https://github.com/karraanvesh/GithubTrendingCLI.git <ProjectName>`

2. Move in to the folder structure 

`cd <ProjectName>`

3. Install npm dependencies

`npm install`

4. Create a .env file in the root directory of the project and add the below environment variable in the .env file

`githubTrendingUrl=https://api.github.com/search/repositories?`

5. Run the index.js

`Below are the list of commands to run the project`

`node src/index.js --month "provide month" --limit <Number of repositories to retrieve and display>`

`node src/index.js --year "provide year" --limit <Number of repositories to retrieve and display>`

`node src/index.js --date "provide date" --limit <Number of repositories to retrieve and display>`

`node src/index.js --week --limit <Number of repositories to retrieve and display>`

## Project URL

https://roadmap.sh/projects/github-trending-cli