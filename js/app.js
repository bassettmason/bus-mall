'use strict';


//global variables
var pictureArray = [];
var sixPic = [];
var totalClics = 0;

// domstuff
var container = document.getElementById('image_container');

var pics = [document.getElementById('pic1'), document.getElementById('pic2'), document.getElementById('pic3')];

var productList = document.getElementById('productList');

// Constructor

function picture(displayName, filePath, idName) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.idName = idName;
    this.timesShown = 0;
    this.timesClicked = 0;
    pictureArray.push(this);
    
}

// Instances creating objects

new picture('bag', 'img/bag.jpg', 'pic1' )
new picture('banana', 'img/banana.jpg', 'pic2' )
new picture('bathroom', 'img/bathroom.jpg', 'pic3' )
new picture('boots', 'img/boots.jpg', 'pic4' )
new picture('breakfast', 'img/breakfast.jpg', 'pic5' )
new picture('bubblegum', 'img/bubblegum.jpg', 'pic6' )

//functions
function getRandomInt() {
    return Math.floor(Math.random() * pictureArray.length);

}

function getSixPic(){           

    while(sixPic.length < 6) {
        var rand = getRandomInt();
        
        while(!sixPic.includes(rand)) {
            sixPic.push(rand);
        }
    
    }

    for (var i = 0; i < 3; i++) {
        var temp = sixPic.shift();
        pics[i].src = pictureArray[temp].filePath;
        pics[i].alt = pictureArray[temp].idName;
        pics[i].title = pictureArray[temp].displayName;
        pictureArray[temp].timesShown += 1;
    }
        
        
    

}

getSixPic();
console.table(pictureArray)







// // renderStart();

// //IDing the three picture slots
// document.getElementById("pic1").addEventListener("click", render);
// document.getElementById("pic2").addEventListener("click", render);
// document.getElementById("pic3").addEventListener("click", render);

// //handeler for the click event
// function render(){
//     getThreePic();
//     document.getElementById("test").innerHTML = threePic;

//     document.getElementById('pic1').src = pictureArray[threePic[0]].filePath;
//     document.getElementById('pic2').src = pictureArray[threePic[1]].filePath;
//     document.getElementById('pic3').src = pictureArray[threePic[2]].filePath;


// }



    
