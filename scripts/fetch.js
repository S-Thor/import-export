let getData = async (code) => {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`);
        let data = await res.json();
        // console.log("data: ",data);
        return data;
}

let append = async (data,container) => {
    

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

        container.append(singleNews);
    });
}

export {getData, append};