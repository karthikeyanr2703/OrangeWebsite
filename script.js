
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let socialLinks = document.querySelectorAll('.footSocialLink');
let fixedImage = document.querySelector('#photoList');
let listTitles = document.querySelectorAll('.conList');
listTitles.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        let image = element.getAttribute("img-url")
        
        fixedImage.style.display = "block";
        fixedImage.style.backgroundImage = `url(${image})`;
        fixedImage.style.backgroundSize =  "cover"
        fixedImage.style.backgroundPosition = "center"
        
    })
    element.addEventListener("mouseleave", function(){
        fixedImage.style.display = "none";

    })
})
// console.log(socialLinks)
// socialLinks.forEach(function(element){
//     element.addEventListener("mouseenter", function(){
//         element.style.borderBottom = "2px solid white";
//     })
//     element.addEventListener("mouseleave", function(){
//         element.style.borderBottom = "none";
//     })
// })


// listTitles.forEach(function(element){
  
// })
