// const mainImage = document.querySelector('.main-img img')

// const images = document.querySelectorAll('.images ul li img')

// images.forEach(function(element) {
//     element.addEventListener('click', e => {
//     //  console.log(e.target)
//         console.log(element.getAttribute('src'))
//         mainImage.setAttribute('src' , e.target.getAttribute('src'))
//     })
// })

const container = document.getElementsByClassName("container")[0];
const mainImage = document.querySelector(".main-img img");

container.addEventListener("click", (e) => {
  if (e.target.className == "image") {
    mainImage.setAttribute("src", e.target.getAttribute("src"));
    //    bisa juga
    // mainImage.src = e.target.src

    // memberikan animasi fade
    mainImage.classList.add("fade");
    setTimeout(() => {
      mainImage.classList.remove("fade");
    }, 300);

    // memberikan animasi active
    let penelusuranList = document.querySelectorAll("ul li img");
    Array.from(penelusuranList).forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
        element.parentElement.classList.remove("border");
      }
    });

    e.target.classList.add("active");
    e.target.parentElement.classList.add("border");
  }
});
