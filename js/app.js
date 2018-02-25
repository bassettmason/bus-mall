'use strict';


//global variables
var pictureArray = [];
var sixPic = [];
var totalClicks = 0;
var nameList = [];
var clicksList = [];
var newClicksList = []
var ctx = document.getElementById('product-chart')
var toLocal = [];
var fromLocal = [];
var inputData = [];



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

    while(sixPic.length < 7) {
        var rand = getRandomInt();
        console.log(rand)
        console.log(sixPic)
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
        // showList();
        getNameList();
        store();
        makeChart();
        
        

    }
    totalClicks += 1;
    for (var i = 0; i < pictureArray.length; i++) {
        if (event.target.alt === pictureArray[i].displayName) {
            pictureArray[i].clicks += 1;

            if(fromLocal.length != 0){
                fromLocal[i] += 1;
            }
        }

    }
        

      
    getSixPic();
}

function showList() {
    for (var i = 0; i < pictureArray.length; i++) {
      var liEl = document.createElement('li');
      var conversion = (pictureArray[i].clicks / pictureArray[i].timesShown * 100).toFixed(1);
      if (pictureArray[i].timesShown === 0){
          conversion = 0
      }
      liEl.textContent = pictureArray[i].displayName + ' has ' + pictureArray[i].clicks + ' clicks in ' + pictureArray[i].timesShown + ' times shown for a click-through conversion rate of ' + conversion + '%';
  
  
      productList.appendChild(liEl);
    }
}
function getNameList () {
    for (var i = 0; i < pictureArray.length; i++){
        var name = pictureArray[i].displayName
        nameList.push(name);
        var clickstot = pictureArray[i].clicks
        clicksList.push(clickstot);
        newClicksList.push(clickstot);
    }
    // getSixPic();
}

// Local storage functions
var store = function(){
    if(fromLocal.length === 0){
        localStorage.setItem('clicksLocal', JSON.stringify(clicksList));
        console.log('storing clickslist')
    }
    else{
        localStorage.setItem('clicksLocal', JSON.stringify(fromLocal));
        console.log('storing clicklist + from Local')
    }
    
}
var getLocal = function(){

    if (localStorage.length > 0){
    var local = [];   
    local = localStorage.getItem('clicksLocal')
    
    fromLocal = JSON.parse(local)
        
    }
    
}


var makeChart = function(){

    if (fromLocal.length === 0){

        inputData= clicksList;
        console.log("clicks list = inputdata" + inputData);
    }else {
        inputData = fromLocal;
        console.log("fromLocal = inputdata" + inputData);
    }
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameList,
            datasets: [{
                label: '# of Clicks',
                data: inputData,
                backgroundColor: ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'
                ],
                borderColor: ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'
                ],
                borderWidth: 1,
                barPercentage: .5,
                categoryPercentage: .5,
                hoverBackgroundColor: '#FFFFFF'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}
getLocal();
getSixPic();

// console.table(pictureArray)
container.addEventListener('click', handleClick);






    
