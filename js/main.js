console.log("connected");

// gets the elements will be using and manipulating
var zodiac = document.getElementById("userInput");
var zImg = document.getElementById("zodiacImg");
var pText = document.getElementById("pText");
var allZodiacs = ["aries", "taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"]

// this function checks the user userInput
function searchZodiac(zodiacNum){
  for(var i = 0; i < allZodiacs.length; i++){
    if (allZodiacs[i] == zodiac.value){
      console.log("true");
      switch (i+1) {
        case 1:console.log('1');
                zImg.src="img/1.png";
                pText.innerText="When you know yourself, you're empowered. When you accept yourself, you're invincible.";
                break;
        case 2:console.log('2');
                zImg.src="img/2.png";
                pText.innerText="Nothing worth having comes easy";
                break;
        case 3:console.log('3');
                zImg.src="img/3.png";
                pText.innerText="I manifest my reality";
                break;
        case 4:console.log('4');
                zImg.src="img/4.png";
                pText.innerText="I feel, therefore I am.";
                break;
        case 5:console.log('5');
                zImg.src="img/5.png";
                pText.innerText="If you know the way, go the way and show the way—you're a leader";
                break;
        case 6:console.log('6');
                zImg.src="img/6.png";
                pText.innerText="My best can always be better.";
                break;
        case 7:console.log('7');
                zImg.src="img/7.png";
                pText.innerText="No person is an island.";
                break;
        case 8:console.log('8');
                zImg.src="img/8.png";
                pText.innerText="You never know what you are capable of until you try.";
                break;
        case 9:console.log('9');
                zImg.src="img/9.png";
                pText.innerText="Towering genius disdains a beaten path.";
                break;
        case 10:console.log('10');
                zImg.src="img/10.png";
                pText.innerText="I can succeed at anything I put my mind to.";
                break;
        case 11:console.log('11');
                zImg.src="img/11.png";
                pText.innerText="I balance";
                break;
        case 12:console.log('12');
                zImg.src="img/12.png";
                pText.innerText="I believe";
                break;
      }

    }
  }
}
// this functions sets changes the page accordanrly
// function searchZodiac(zodiacNum){

// }
