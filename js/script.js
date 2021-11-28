const app = new Vue({
    el: "#root",
    data: {
        elementi: [
            {
                img: "img/01.jpg",
                titolo: "Svezia",
                testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },
            {
                img: "img/02.jpg",
                titolo: "Svizzera",
                testo: "Lorem ipsum"
            },
            {
                img: "img/03.jpg",
                titolo: "Gran Bretagna",
                testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                img: "img/04.jpg",
                titolo: "Germania",
                testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
            },
            {
                img: "img/05.jpg",
                titolo: "Paradise",
                testo: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
            },
        ],
        i: 0
    },
    // Inizio METODI
    methods: {
        nextImg: function(){
            if(this.i == this.elementi.length - 1){
                this.i = 0;
            }else{
                this.i++;
            }
        },
        prevImg: function(){
            if(this.i == 0){
                this.i = 4;
            }else{
                this.i--;
            }
        },
        clickImg: function(index){
            this.i = index;
        },
    },
});

// // Codice HTML dentro in main
// let codeHTML = "";
// for(let i = 0; i < items.length; i++){
//     codeHTML += `
//     <div class="main-item hide">
//         <img class="main-img" src="${items[i]}" alt="${title[i]}">
//         <div class="text">
//             <span class="nazione">${title[i]}</span>
//             <span class="descrizione">${text[i]}</span>
//         </div>
//     </div>
//     `;
// }
// let indexHTMLCode = document.querySelector('main');
// indexHTMLCode.innerHTML = codeHTML;


// // Codice HTML dentro aside
// codeHTML = "";
// for(let i = 0; i < items.length; i++){
//     codeHTML += `
//     <div>
//         <img class="aside-img" src="${items[i]}" alt="${title[i]}">
//     </div>
//     `;
//     if(i == 4){
//         codeHTML += `
//         <div class="frecce">
//         </div>
//         `
//     }
// }
// indexHTMLCode = document.querySelector('aside');
// indexHTMLCode.innerHTML = codeHTML;
//     // Codice HTML frecce dentro aside (non so perché elimina il codice dentro il file index.html)
//     codeHTML = "";
//     for(let i = 0; i < 1; i++){
//         codeHTML += `
//         <div class="arrows arrow-top">
//             <i class="fas fa-chevron-up"></i>
//         </div>
//         <div class="arrows arrow-bottom">
//             <i class="fas fa-chevron-down"></i>
//         </div>
//         `;
//     }
//     indexHTMLCode = document.querySelector('.frecce');
//     indexHTMLCode.innerHTML = codeHTML;


// let indexItem = 0;
// const mainItem = document.getElementsByClassName("main-item");
//     mainItem[indexItem].classList.remove("hide");

// const asideImg = document.getElementsByClassName("aside-img");
//     asideImg[indexItem].classList.add("selected");


// const arrowBottom = document.querySelector(".arrow-bottom");
//     arrowBottom.addEventListener("click", function(){
//         if(indexItem < items.length - 1){
//             mainItem[indexItem].classList.add("hide");
//             asideImg[indexItem].classList.remove("selected");

//             indexItem++;

//             mainItem[indexItem].classList.remove("hide");
//             asideImg[indexItem].classList.add("selected")
//         }
//     });

// const arrowTop = document.querySelector(".arrow-top");
//     arrowTop.addEventListener("click", function(){
//         if(indexItem > 0){
//             mainItem[indexItem].classList.add("hide");
//             asideImg[indexItem].classList.remove("selected");

//             indexItem--;

//             mainItem[indexItem].classList.remove("hide");
//             asideImg[indexItem].classList.add("selected")
//         }
//     });