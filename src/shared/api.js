import fetch from 'isomorphic-fetch';


export function fetchPopularRepos(language) {
    const url = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    console.log(url);
    return fetch(url)
        .then(data => data.json())
        .then(repos => repos.items)
        .catch(err=>{
            console.warn(err);
            return null;
        })
}