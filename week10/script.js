const imageArray =[
    "https://static.zerochan.net/Izumi.Kei.full.3509166.jpg",
    "https://static.zerochan.net/Izumi.Kei.full.3509085.jpg",
    //"https://static.zerochan.net/Izumi.Kei.full.3401757.png",//
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3509081.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3509031.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3508750.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3508749.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3508748.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3508728.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3508727.jpg",
    "https://static.zerochan.net/Ayn.%28For.All.Time%29.full.3503588.jpg"
]

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);


button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
    let num = Math.floor (Math.random()*array.length);
    image.setAttribute("src",array[num]);

}
