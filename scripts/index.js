// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/export.js";
document.getElementById("navbar").innerHTML = navbar();


let getData = async () => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
        let data = await res.json();
        console.log("data: ",data);
        append(data.articles);
    } catch (err) {
        console.log(err);
    }
}

getData();

let append = async (data) => {
    

    data.forEach((el) => {
        let singleNews = document.createElement("div");
        singleNews.setAttribute("class","news");

        let newsImg = document.createElement("img");
        newsImg.setAttribute("id","newsImage");
        newsImg.src = el.urlToImage;

        let desDiv = document.createElement("div");
        desDiv.setAttribute("id","description");

        let title = document.createElement("h3");
        title.innerText = el.title;

        let des = document.createElement("p");
        des.innerText = el.description;

        desDiv.append(title,des);

        singleNews.append(newsImg, desDiv);

        document.getElementById("results").append(singleNews);
    });
}

document.getElementById("in").addEventListener("click",showNews)

function showNews() {
    getData(code).then((res) => {
        append(res,container);
    })
}

