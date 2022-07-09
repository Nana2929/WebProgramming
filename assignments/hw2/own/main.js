let piclinks = [
    "https://www.ghibli.jp/gallery/chihiro001.jpg",
    "https://www.ghibli.jp/gallery/chihiro002.jpg",
    "https://www.ghibli.jp/gallery/chihiro004.jpg",
    "https://www.ghibli.jp/gallery/chihiro005.jpg",
    "https://www.ghibli.jp/gallery/chihiro007.jpg",
    "https://www.ghibli.jp/gallery/chihiro011.jpg",
    "https://www.ghibli.jp/gallery/chihiro012.jpg",
    "https://www.ghibli.jp/gallery/chihiro015.jpg",
    "https://www.ghibli.jp/gallery/chihiro025.jpg",
    "https://www.ghibli.jp/gallery/chihiro027.jpg",
    "https://www.ghibli.jp/gallery/chihiro029.jpg",
    "https://www.ghibli.jp/gallery/chihiro032.jpg",
    "https://www.ghibli.jp/gallery/chihiro036.jpg",
    "https://www.ghibli.jp/gallery/chihiro038.jpg",
    "https://www.ghibli.jp/gallery/chihiro040.jpg",
    "https://www.ghibli.jp/gallery/chihiro045.jpg",
    "https://www.ghibli.jp/gallery/chihiro049.jpg",
    "https://www.ghibli.jp/gallery/chihiro050.jpg",
]
/*CORS: https://blog.huli.tw/2021/02/19/cors-guide-1/ */
/*圖片不會被以cross-origin擋住*/
/* display source*/
var curimg = document.getElementById("display");
observer = new MutationObserver((changes) => {
    changes.forEach(change => {
        if(change.attributeName.includes('src')){
        var atag = document.getElementById('srcdisplayer');
        atag.href = curimg.src;
        atag.innerHTML = curimg.src;
        }
    console.log(atag) // https://stackoverflow.com/questions/10655531/detect-a-img-src-change

  });
});
observer.observe(curimg, {attributes : true});

var backbutton = document.getElementById("back");
var nextbutton = document.getElementById("next");
backbutton.addEventListener("click", getprevimg);
nextbutton.addEventListener("click", getnextimg);

function getprevimg(e){
    cur = document.getElementById("display");
    curlink = cur.src; curid = Number(cur.alt);
    if (curid > 0){
        prevlink = piclinks[curid - 1];
        previd = curid - 1;
        cur.src = prevlink;
        cur.alt = String(previd);
        console.log(`Getting image ${previd}: ${prevlink}`);
        document.getElementById("next").setAttribute("class", "");
    }
    else{
        e.target.disabled = true;
        e.target.setAttribute("class", "disabled");
        console.log("First image!`Back` button is disabled.")
    }
}
function getnextimg(e){
    cur = document.getElementById("display");
    curlink = cur.src; curid = Number(cur.alt);
    if (curid < piclinks.length-1){
        nextlink = piclinks[curid + 1];
        nextid = curid + 1;
        cur.src = nextlink;
        cur.alt = String(nextid);
        console.log(`Getting image ${nextid}: ${nextlink}`);
        document.getElementById("back").setAttribute("class", "");
    }
    else{
        e.target.disabled = true;
        e.target.setAttribute("class", "disabled");
        console.log("Last image!`Next` button is disabled.")
    }
}


