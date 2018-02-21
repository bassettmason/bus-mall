'use strict';


//global variables
var pictureArray = [];
var sixPic = [];
var totalClicks = 0;

// domstuff
var container = document.getElementById('container');

var pics = [document.getElementById('pic1'), document.getElementById('pic2'), document.getElementById('pic3')];

var productList = document.getElementById('productList');

// Constructor

function picture(displayName, filePath) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.timesShown = 0;
    this.clicks = 0;
    pictureArray.push(this);
    
}

// Instances creating objects

new picture('bag', 'img/bag.jpg')
new picture('banana', 'img/banana.jpg')
new picture('bathroom', 'img/bathroom.jpg')
new picture('boots', 'img/boots.jpg')
new picture('breakfast', 'img/breakfast.jpg')
new picture('bubblegum', 'img/bubblegum.jpg')
new picture('chair', 'img/bag.jpg')
new picture('cthulhu', 'img/cthulhu.jpg')
new picture('dog-duck', 'img/dog-duck.jpg')
new picture('dragon', 'img/dragon.jpg')
new picture('pen', 'img/pen.jpg')
new picture('pet-sweep', 'img/pet-sweep.jpg')
new picture('scissors', 'img/scissors.jpg')
new picture('shark', 'img/shark.jpg')
new picture('sweep', 'img/sweep.png')
new picture('tauntaun', 'img/tauntaun.jpg')
new picture('unicorn', 'img/unicorn.jpg')
new picture('usb', 'img/usb.gif')
new picture('water-can', 'img/water-can.jpg')
new picture('wine-glass', 'img/wine-glass.jpg')



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
        pics[i].alt = pictureArray[temp].displayName;
        
        pictureArray[temp].timesShown += 1;
    }
          
}

//click event

function handleClick(event){
    if (event.target === container) {
    return alert('Please Pick a Pic');
    }
    // console.log(totalClicks)
    if (totalClicks > 24) {
        container.removeEventListener('click', handleClick);
        container.style.display = 'none';
        
    }
    totalClicks += 1;
    for (var i = 0; i < pictureArray.length; i++) {
      if (event.target.alt === pictureArray[i].displayName) {
        pictureArray[i].clicks += 1;
        console.log(event.target);
        console.log(pictureArray[i].clicks + ' clicks.')
      }
    }
    getSixPic();
}

getSixPic();

console.table(pictureArray)
container.addEventListener('click', handleClick);






    
