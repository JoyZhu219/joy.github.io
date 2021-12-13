var mouseX, mouseY;
let eyeballbackground = document.getElementById('eyeballbackground');
let eyebackground = document.getElementsByClassName('eyebackground')[0];
let eyeballcontainer = document.getElementsByClassName('eyeballcontainer')[0];

//Eyeball Movement
window.addEventListener('DOMContentLoaded', (event) => {


  document.addEventListener('mousemove', function (event) {
    eyebackgroundW = eyebackground.clientWidth;
    eyebackgroundH = eyebackground.clientHeight;

    eyeballcontainerW = eyeballcontainer.clientWidth;
    eyeballcontainerH = eyeballcontainer.clientHeight;

    mouseX = event.screenX;

    var spaceLeft = (eyebackgroundW - eyeballcontainerW) / 2;

    var portion = mouseX / eyebackgroundW;
    horizontal = (portion * (eyeballcontainerW - 91.13));

    eyeballbackground.style.left = horizontal + 'px';
  });

});

//Tools Gallery
let toolselement = document.getElementById("content");
let toolJSON = [
  {
    "name": "Brave Browser",
    "img": "assets/brave.png",
    "intro": "Brave is a more-or-less standard browser that lets users navigate to websites, run web apps, and display online content. Like other browsers, it is free to download and use, remembers site authentication information, and can block online ads from appearing on sites.",
    "link": "https://brave.com/"
  },
  {
    "name": "ProtonMail",
    "img": "assets/proton.png",
    "intro": "ProtonMail is an end-to-end encrypted email service founded in 2013 in Geneva, Switzerland by scientists who spent time at the CERN research facility. It is the world's largest secure email service.",
    "link": "https://protonmail.com/"
  },
  {
    "name": "DuckDuckGo",
    "img": "assets/duckduckgo.png",
    "intro": "DuckDuckGo is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. DuckDuckGo distinguishes itself from other search engines by not profiling its users and by showing all users the same search results for a given search term.",
    "link": "https://duckduckgo.com/"
  },
  {
    "name": "Decentraleyes",
    "img": "assets/Decentraleyes.svg",
    "intro": "Decentraleyes is a free and open-source browser extension used for local content delivery network emulation. Its primary task is to block connections to major CDNs such as Cloudflare and Google, and serve popular web libraries locally on the users machine. Decentraleyes is available for the Microsoft Edge, Mozilla Firefox + Firefox ESR, Google Chrome, Pale Moon and Opera web browsers.",
    "link": "https://decentraleyes.org/"
  },
  {
    "name": "Tutanota",
    "img": "assets/Tutanota.png",
    "intro": "Tutanota is an end-to-end encrypted email software and freemium hosted secure email service. Tutanota also encrypts all emails and contacts stored in their servers. ",
    "link": "https://tutanota.com/"
  },
  {
    "name": "VeraCrypt",
    "img": "assets/VeraCrypt.png",
    "intro": "VeraCrypt is an open-source utility for on-the-fly encryption. The software can create a virtual encrypted disk that works just like a regular disk but within a file. It can also encrypt a partition or the entire storage device with pre-boot authentication.",
    "link": "https://veracrypt.fr/en/Home.html"
  }
];

for (let i = 0; i < toolJSON.length; i++) {
  createSection(toolJSON[i]);
}

function createSection(incomingtool) {
  let newtool = document.createElement("DIV");
  newtool.style.backgroundColor = incomingtool['bgColor'];
  newtool.style.backgroundImage = incomingtool['imgUrl'];
  newtool.classList.add('toolcontainer');

  let newname = document.createElement("H3");
  newname.innerText = incomingtool['name'];
  newname.classList.add('name');
  newtool.appendChild(newname);

  let newimg = document.createElement("IMG");
  newimg.src = incomingtool['img'];
  newimg.classList.add('toolImg');
  newtool.appendChild(newimg);

  let newintro = document.createElement("P");
  newintro.innerText = incomingtool['intro'];
  newintro.classList.add('toolIntro');
  newtool.appendChild(newintro);

  let newlink = document.createElement('a');
  newlink.text = "Find more about it.";
  newlink.href = incomingtool['link'];
  newlink.classList.add('links');
  newtool.appendChild(newlink);

  toolselement.appendChild(newtool);
}
