import getDate from "../config/date.js";
import {urlConfig} from "../config/url.config.js";

export async function getTrendingRepos(_year , _month , _date , _week , limit) {
    try {

        const url = urlConfig.trendingUrl;

        const date = getDate(_year , _month , _date , _week);

        console.log(date);

        const trendingUrl = url + `q=created:>${date}&sort=stars&order=desc&per_page=${limit}`;

        const response = await fetch(trendingUrl , {
            method : "GET"
        });

        console.log(trendingUrl);

        if(!response.ok) {
            throw new Error(`HTTP status error : ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}