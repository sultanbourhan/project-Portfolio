let mood = document.querySelector(".home .moods .mood")

let body = document.querySelector("body")

mood.onclick = function(){
    body.classList.toggle("color-fff")

}



// =================================


let mneu = document.querySelector(".menu")

let header = document.querySelector("header")

let nav = document.querySelectorAll("header ul li")


mneu.onclick = function(){
    header.classList.toggle("block")
}


nav.forEach(li => {
    li.onclick = function(){
        header.classList.remove("block")
    } 
});
