import dotenv from "dotenv";
import path from "path";

const envFilePath = path.join(import.meta.dirname , "../../.env");

// loads the environment variables from the .env file into process.env
dotenv.config({
    path  : envFilePath, // we need to specify the path of the .env file 
    debug : true // provides additional information regarding the env variables
});

export const urlConfig = {
    trendingUrl : process.env.githubTrendingUrl || "undefined"
};