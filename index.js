// loadXMLFeed = () => {
//     // const token = getToken();
//     const headers = {
//         // 'Content-Type': "application/json",
//         'Access-Control-Allow-Origin':'*',
//         // Authorization: token ? `token ${token}` : "",
//     };

//     const RSS_URL = `http://www.yonhapnewstv.co.kr/category/news/culture/feed/`;
//     // fetch(RSS_URL, {headers})
//     window.fetch(RSS_URL, {
//         method: "GET",
//         headers: headers,
//         mode: 'no-cors',
//     })
//     .then(response=>{
//         // console.log(response);
//         // console.log(response.text());
//         // console.log(response.json());
//         // console.log(response.body);
//     });

//     // .then(response=>response.body())
//     // .then(data=>console.log(data))
//     // .then(data=>{
//     //     let parser = new DOMParser();
//     //     let xml = parser.parseFromString(data, "text/xml");
//     //     console.log(data);
//     //     console.log(xml);
//     //     displayNewsInfo(xml);
//     // });
// }

// document.addEventListener("DOMContentLoaded", loadXMLFeed);

// function displayNewsInfo(x){
//     let list = document.getElementById('item');
//     let item = x.getElementsByTagName('item');
//     console.log(item);

//     let li = document.createElement('li');
//     li.className = "NewsItem";
    
//     li.innerHTML = 
//     `
//         <h2>${item[0]}</h2>
//         <h3>${item[0].getElementsByTagName('description')[0].innerHTML}</h3>
//     `;
    
//     list.appendChild(li);
    
// }

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let parser = new RSSParser();
parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
  if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
})


// const RSS_URL = `https://jsonplaceholder.typicode.com/todos/`;
// $.ajax(RSS_URL, {
//     accepts: {
//         xml: "application/rss+xml"
//     },

//     dataType: "xml",

//     success: function(data) {
//         $(data)
//         .find("item")
//         .each(function() {
//             const el = $(this);

//             const template = `
//             <article>
//                 <img src="${el.find("link").text()}/image/large.png" alt="">
//                 <h2>
//                 <a href="${el
//                     .find("link")
//                     .text()}" target="_blank" rel="noopener">
//                     ${el.find("title").text()}
//                 </a>
//                 </h2>
//             </article>
//             `;

//             document.body.insertAdjacentHTML("beforeend", template);
//         });
//     }
// });