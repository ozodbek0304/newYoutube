let news = [
  {
    title: "Messi, Ronaldo, Neymar & Mbappe Showing Their Class in 2023",
    categories: "Sport",
    link: "https://youtu.be/0fcwmBQloas",
    iframe: "https://www.youtube.com/embed/0fcwmBQloas",
  },
  {
    title: "Lionel Messi vs Croatia | World Cup Qatar 2022 Semi-Final HD 1080i",
    categories: "Sport",
    link: "https://youtu.be/n6FhH6fHRPc",
    iframe: "https://www.youtube.com/embed/n6FhH6fHRPc",
  },
  {
    title: "Neymar Jr vs Argentina (Copa America Final) 2021 | HD 1080",
    categories: "Sport",
    link: "https://youtu.be/R7tJkVvGyyg",
    iframe: "https://www.youtube.com/embed/R7tJkVvGyyg",
  },
  {
    title: "How To Learn Programming for BEGINNERS! (2022/2023)",
    categories: "IT",
    link: "https://youtu.be/bJzb-RuUcMU",
    iframe: "https://www.youtube.com/embed/bJzb-RuUcMU",
  },
  {
    title: "HTML Full Course for free 🌎 (2023)",
    categories: "IT",
    link: "https://youtu.be/HD13eq_Pmp8",
    iframe: "https://www.youtube.com/embed/HD13eq_Pmp8",
  },
  {
    title:
      "Build a Complete Responsive Personal Portfolio Website using HTML CSS Javascript",
    categories: "IT",
    link: "https://youtu.be/bJzb-RuUcMU",
    iframe: "https://www.youtube.com/embed/bJzb-RuUcMU",
  },
  {
    title:
      "Build a Complete Personal Portfolio Website Using Only HTML And CSS | Pure HTML And CSS",
    categories: "IT",
    link: "https://youtu.be/lgeoAUvoRJU",
    iframe: "https://www.youtube.com/embed/lgeoAUvoRJU",
  },
  {
    title:
      "Build a Complete Responsive Personal Portfolio Website using HTML CSS Javascript | Dark/Light Mode",
    categories: "IT",
    link: "https://youtu.be/h5I8LB4N5UA",
    iframe: "https://www.youtube.com/embed/h5I8LB4N5UA",
  },
  {
    title:
      "Complete Responsive Website Using HTML CSS | Responsive web design tutorial",
    categories: "IT",
    link: "https://youtu.be/ZdJSHEczi_0",
    iframe: "https://www.youtube.com/embed/ZdJSHEczi_0",
  },
  {
    title:
      "Music Mix 2023 🎧 EDM Remixes of Popular Songs 🎧 EDM Best Gaming Music Mix",
    categories: "Music",
    link: "https://youtu.be/sAgRLtFOHYw",
    iframe: "https://www.youtube.com/embed/sAgRLtFOHYw",
  },
  {
    title:
      "BASS BOOSTED MUSIC MIX 2023 🔈 BEST CAR MUSIC 2023 🔈 REMIXES OF POPULAR SONGS",
    categories: "Music",
    link: "https://youtu.be/mKtB05EF6eA",
    iframe: "https://www.youtube.com/embed/mKtB05EF6eA",
  },
  {
    title:
      "Phonk that make you dance in your bed ※ Aggressive Drift Phonk ※ Phonk Mix 2023 ※ Фонк ※",
    categories: "Music",
    link: "https://youtu.be/Rtq3rThX8bg",
    iframe: "https://www.youtube.com/embed/Rtq3rThX8bg",
  },
];
let row = document.querySelector(".row");

function render(youTube) {
  row.innerHTML = "";
  let index = 0;
  youTube.forEach((item) => {
    let iframe = document.createElement("iframe");
    iframe.classList.add("card");
    iframe.style.height = "250px";
    let p1 = document.createElement("p");
    p1.classList.add("px-2");
    let p = document.createElement("p");
    p.classList.add("px-2", "pt-2");
    let btn = document.createElement("button");
    let btn1 = document.createElement("button");
    btn1.innerText = "Tahrirlash";
    btn1.classList.add("btn", "btn-success", "mt-2",);
    btn1.setAttribute("data-bs-target", "#navbarToggleExternalContent");
    btn1.setAttribute("data-bs-toggle", "offcanvas");

    btn.classList.add("btn", "btn-primary");
    btn.setAttribute("onclick", `indexById(${index})`);
    btn1.setAttribute("onclick", `etidLink(${index})`);
    btn.innerText="O'chirish"

    let card = document.createElement("div");
    card.classList.add("card","h-100");

    let col = document.createElement("div");
    col.classList.add("col-4");


    iframe.src = item.iframe;
    iframe.alt = item.title;
    p1.innerText = item.title;
    p.innerText = item.categories;
    card.appendChild(iframe);
    card.appendChild(p);
    card.appendChild(p1);
    card.appendChild(btn); 
    card.appendChild(btn1); 
    col.appendChild(card);
    row.appendChild(col);
     index++;
     
    });
} render(news);
  
  function indexById(index) {
    news.splice(index, 1);
    render(news);
  }

let youTubelink = document.querySelector(".youTubelink").value;
let youTubetitle = document.querySelector(".youTubetitle").value;
let tahrirlash = document.querySelector(".tahrirlash").value;
let tahrir = document.querySelector("#tahrirlash");
let qushish = document.querySelector("#qushish");
  
qushish.addEventListener("click", function (e) {
  e.preventDefault();
  news.push({
    title: document.querySelector(".youTubetitle").value,
    categories: document.querySelector(".tahrirlash").value,
    link: null,
    iframe: document.querySelector(".youTubelink").value,
  });
  render(news);
  document.querySelector(".youTubelink").value = "";
  document.querySelector(".youTubetitle").value = "";
  document.querySelector(".tahrirlash").value = "";
})

 
let editingIndex;

function etidLink(index) {
  editingIndex = index;
  document.querySelector(".youTubelink").value = news[index].iframe;
  document.querySelector(".youTubetitle").value = news[index].title;
  document.querySelector(".tahrirlash").value = news[index].categories;
}
tahrir.addEventListener("click", function (e) {
  e.preventDefault();
   let youTubelink = document.querySelector(".youTubelink").value;
   let youTubetitle = document.querySelector(".youTubetitle").value;
  let tahrirlash = document.querySelector(".tahrirlash").value;

  news[editingIndex].iframe = youTubelink;
   news[editingIndex].title = youTubetitle;
  news[editingIndex].categories = tahrirlash;
  render(news);

  document.querySelector(".youTubelink").value = "";
  document.querySelector(".youTubetitle").value = "";
  document.querySelector(".tahrirlash").value = "";
})


let form = document.querySelector("#search");
let input = document.querySelector("#searchValue");

input.addEventListener("input",(e)=>{
 let text= e.target.value;
  let filtir = news.filter(item => {
    return item.title.toLowerCase().includes(text.toLowerCase()) ||
    item.categories.toLowerCase().includes(text.toLowerCase())
  })
  render(filtir);
})
let filtir = document.querySelector(".filtir");
filtir.addEventListener("change", function (e) {
  let optionValue = e.target.value;
  let fill = news.filter(item => {
    return item.categories.toLowerCase().includes(optionValue.toLowerCase());
  })
  render(fill)
});

