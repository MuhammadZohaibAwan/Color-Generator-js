const colors = ["green", "red", "rgba(133,122,200)", "purple","pink","yellow","grey","orange","HotPink"];
// "#3772ff",
// "#df2935",
// "#fdca40",
// "#f8961e",
// "#43aa8b",
// "#277da1",
// "#001233",
// "#660708",
// "#a4161a",
// "#3f37c9",
// "#4cc9f0",
// "#05668d",
// "#02c39a",
// "#602437"];
// we can use any color type 

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click',function (){

    //get random numb between 0-3 

    const randomNumber = getRandomNumber  ();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber]; color.textContent = colors[randomNumber];


});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}