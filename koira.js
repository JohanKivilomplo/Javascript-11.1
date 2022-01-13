let btn = document.getElementById("btnClick");
let image = document.getElementById("image");

btn.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err=>console.log(err))
})

let husky = document.getElementById("husky");

husky.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breed/husky/images/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err=>console.log(err))
})

let labrador = document.getElementById("labrador");

labrador.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breed/labrador/images/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err=>console.log(err))
})