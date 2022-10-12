
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    let scroll = window.pageYOffset;

    if (scroll > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

window.scrollTo({ behavior: "smooth" });

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  const carouselText = [
    {text: "Web Dev", color: "white"},
    {text: "Freelancer", color: "white"},
    {text: "Listener", color: "white"}
  ]
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }

$(document).ready(async function(){
await carousel(carouselText,"#sentence")
  await waitForMs(2000);
  deleteSentence("#sentence");
})

