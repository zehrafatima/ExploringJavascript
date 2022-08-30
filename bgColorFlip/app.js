let colorArray = ["red", "purple", "blue", "green", "#f15025", "rgba(133,122,200)"]
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);
    document.body.style.backgroundColor= colorArray[randomNumber];
    color.textContent = colorArray[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colorArray.length);
}