const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Codice HTML dentro in main
let codeHTML = "";
for(let i = 0; i < items.length; i++){
    codeHTML += `
    <div class="main-item hide">
        <img class="main-img" src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <span class="nazione">${title[i]}</span>
            <span class="descrizione">${text[i]}</span>
        </div>
    </div>
    `;
}
let indexHTMLCode = document.querySelector('main');
indexHTMLCode.innerHTML = codeHTML;


// Codice HTML dentro aside
codeHTML = "";
for(let i = 0; i < items.length; i++){
    codeHTML += `
    <div>
        <img class="aside-img" src="${items[i]}" alt="${title[i]}">
    </div>
    `;
    if(i == 4){
        codeHTML += `
        <div class="frecce">
        </div>
        `
    }
}
indexHTMLCode = document.querySelector('aside');
indexHTMLCode.innerHTML = codeHTML;
    // Codice HTML frecce dentro aside (non so perché elimina il codice dentro il file index.html)
    codeHTML = "";
    for(let i = 0; i < 1; i++){
        codeHTML += `
        <div class="arrows arrow-top">
            <i class="fas fa-chevron-up"></i>
        </div>
        <div class="arrows arrow-bottom">
            <i class="fas fa-chevron-down"></i>
        </div>
        `;
    }
    indexHTMLCode = document.querySelector('.frecce');
    indexHTMLCode.innerHTML = codeHTML;


let indexItem = 0;
const mainItem = document.getElementsByClassName("main-item");
    mainItem[indexItem].classList.remove("hide");

const asideImg = document.getElementsByClassName("aside-img");
    asideImg[indexItem].classList.add("selected");


const arrowBottom = document.querySelector(".arrow-bottom");
    arrowBottom.addEventListener("click", function(){
        if(indexItem < items.length - 1){
            mainItem[indexItem].classList.add("hide");
            asideImg[indexItem].classList.remove("selected");

            indexItem++;

            mainItem[indexItem].classList.remove("hide");
            asideImg[indexItem].classList.add("selected")
        }
    });

const arrowTop = document.querySelector(".arrow-top");
    arrowTop.addEventListener("click", function(){
        if(indexItem > 0){
            mainItem[indexItem].classList.add("hide");
            asideImg[indexItem].classList.remove("selected");

            indexItem--;

            mainItem[indexItem].classList.remove("hide");
            asideImg[indexItem].classList.add("selected")
        }
    });