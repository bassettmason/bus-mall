'use strict';


//global variables
var pictureArray = [];
var threePic = [];


//functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
//the first three pictures
function renderStart(){

    document.getElementById('pic1').src = pictureArray[threePic[0]].filePath;
    document.getElementById('pic2').src = pictureArray[threePic[1]].filePath;
    document.getElementById('pic3').src = pictureArray[threePic[2]].filePath;


}

function getThreePic(){           

    // while (repeatTest > -1) {
        
        threePic = []
        for (var i = 0; i < 3; i++) {
            
            var picNumb = getRandomInt(0, 3);
                        
            threePic.push(picNumb);
            var repeatTest = threePic.indexOf(threePic[i]);
        }
    // }   
       
    
    for (var i = 0; i < 3; i++) {   
        
        pictureArray[threePic[i]].timesShown = pictureArray[threePic[i]].timesShown + 1;
    }
}
    

//object constructor of pictures
function picture(displayName, filePath, idName) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.idName = idName;
    this.timesShown = 0;
    this.timesClicked = 0;
    pictureArray.push(this);
    
}
//creating objects into the array
new picture('bag', 'img/bag.jpg', 'pic1' )
new picture('banana', 'img/banana.jpg', 'pic2' )
new picture('bathroom', 'img/bathroom.jpg', 'pic3' )
new picture('boots', 'img/boots.jpg', 'pic4' )
new picture('breakfast', 'img/breakfast.jpg', 'pic5' )
new picture('bubblegum', 'img/bubblegum.jpg', 'pic6' )

//3 random numbers that pic the picture
getThreePic();

//the first three pictures
renderStart();

//IDing the three picture slots
document.getElementById("pic1").addEventListener("click", render);
document.getElementById("pic2").addEventListener("click", render);
document.getElementById("pic3").addEventListener("click", render);

//handeler for the click event
function render(){
    getThreePic();
    document.getElementById("test").innerHTML = threePic;

    document.getElementById('pic1').src = pictureArray[threePic[0]].filePath;
    document.getElementById('pic2').src = pictureArray[threePic[1]].filePath;
    document.getElementById('pic3').src = pictureArray[threePic[2]].filePath;


}


console.log (threePic);
    




