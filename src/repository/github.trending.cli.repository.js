import getDate from "../config/date.js";

export async function getTrendingRepos(_year , _month , _date , _week) {
    try {

        const url = `https://api.github.com/search/repositories?`;

        const date = getDate(_year , _month , _date , _week);

        console.log(date);

        const trendingUrl = url + `q=created:>${date}&sort=stars&order=desc`;

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