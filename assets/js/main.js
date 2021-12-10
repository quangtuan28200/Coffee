//check header scrolled
var header = document.querySelector("#header");

window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");

    }
}




