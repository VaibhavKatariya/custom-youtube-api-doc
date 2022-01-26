    const latestimg = document.getElementById('latestimage');
    const view = document.getElementById('view');
    const latestlink = document.getElementById('latestlink');
    const latesttit = document.getElementById('latestvidtit');
    const latestdes = document.getElementById('latestdes');
    const latestdesc = document.getElementById('latestdesc');
    let getdata = () => {
        var url = "https://kailywebapi-default-rtdb.firebaseio.com/videos.json";
        fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let de = data[0];
        let vidId = de.videoId;
        let vidlink = `https://www.youtube.com/watch?v=${vidId}`;
        console.log("Go watch Latest Video Here :) => " +vidlink);
        let thumlink = de.snippet.thumbnails.maxres.url;
        latestimg.innerHTML = `<a target="_blank" href=${vidlink}><img src=${thumlink} class="celebrate__img" alt="Latest YouTube Video"></img></a><h6>publishedAt: ${de.snippet.publishedAt} </h6>`;
        let chlink = `https://www.youtube.com/channel/${de.snippet.channelId}?sub_confirmation=1`;
        console.log("Subscribe Here :) => " +chlink);
        latesttit.innerHTML = `${de.title}`;
        view.innerHTML = `<a href="/latestvideo.html" class="button">See more</a>`;
        latestlink.innerHTML = `<a href=${vidlink} class="button">View On YouTube</a>`;
        latestdesc.innerHTML = `${de.snippet.description}`;
        latestdes.innerHTML = `Number Of Likes :- ${de.statistics.likeCount}<br> Number of Dislikes:- ${de.statistics.dislikeCount}<br> Number of Comments:- ${de.statistics.commentCount} <br> Number of Views:-  ${de.statistics.viewCount}`;
        console.log("API url => " +url)
    });
    }
   getdata();