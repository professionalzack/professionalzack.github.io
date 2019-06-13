let filmMargin = 0; //front of the reel
let currentSlide = 0;
const clipLengths = []; //array to put responsive slide widths in 
const clipObj = [{name:'quake'}, {name:'zelda'}, {name:'race'}, {name:"airport"}, {name:"magnus"}, {name:"firemen"}, {name:"quake-end"}];
// const clipObj = [{project: 'rocks', margin: 0}, {project: 'night sky', margin: 0}, {project: 'something else', margin: 0}, {project: 'self-aggrandizing', margin: 0}];
const arrowWrap = document.querySelector('.slider');
const filmReel = document.getElementById('filmReel');
const slideScreen = document.getElementById('slideScreen');
const modalButton = document.querySelectorAll('.modal-button');
const balls = document.querySelector('.thumbnails');
let slideWatch; // the setInterval
let vh;
let vw;

balls.addEventListener('click', ballHandler);
arrowWrap.addEventListener('click', arrowHandler);


function getScreen(){ //defining vh and vw, and setting slide-widths
    vh = slideScreen.clientHeight;
    console.log('vh = ' + vh);
    vw = slideScreen.clientWidth;
    console.log('vw = ' + vw);
    clipLengths.length = 0;
    clipObj.forEach((clip, i)=> clip.margin = vw * i)
    clipLengths.push(0, vw, vw*2, vw*3, vw*4, vw*5, vw*6);
    console.log(clipLengths)
    console.log(clipObj);
}
getScreen()
//////////NEED RESIZE EVENT LISTENER



function arrowHandler(event){
    event.preventDefault();
    console.log(event.target);

    if(event.target.id){
        if(event.target.id.slice(0,5) === "arrow"){
            console.log('got em !')
            destination = filmMargin +(event.target.id.slice(5) * vw)
            console.log(destination)
        }
        // filmMargin -= vw;
        // console.log(filmMargin)
        // filmReel.setAttribute('style', `left: ${filmMargin}px`);
        // reachDestination(event.target.id * vw)
        // destination = filmMargin + (event.target.id * vw);
        reachDestination(destination)
    }
}

function ballHandler(event){
    event.preventDefault();
    console.log(event.target.parentNode);
    if(event.target.parentNode.id.length){
        const newNum = (event.target.parentNode.id).slice(5);
        console.log(newNum)
        const destination = -(clipLengths[newNum]);
        console.log(destination)
        // const newMargin = filmMargin - destination;
        reachDestination(destination)
    }
}



function reachDestination(newMargin){

    // const stepSize = -(newMargin / 100);
    const stepSize = -((filmMargin - newMargin) / 100);
    console.log("newMargin= " + newMargin)
    console.log("stepsize= " + stepSize);
    const nextSlide = Math.round(-(newMargin / vw));
    const thisSlide = Math.round(-(filmMargin / vw))
    console.log("next!  " + nextSlide)
    console.log(`slide number: ${thisSlide}`);
    // lightenButton(slideNumber);
    // console.log(modalButton[slideNumber])
    let counter = 0;
    // let buttonPosition = 80;
    slideWatch = setInterval(function () {
        // console.log(counter > 100)
        if(counter < 100) {
            filmMargin += stepSize;
            filmReel.setAttribute('style', `left: ${filmMargin}px`)



            // if(counter < 4){console.log('style', `left: ${80 - (stepSize / 10) * counter}vw `)}

            // if(counter < 100){modalButton[thisSlide].setAttribute('style', `left: ${80 + counter}vw `)}
          
            counter++
        } else {
            // stopDude();
            clearInterval(slideWatch)
            modalButton[thisSlide].setAttribute('style', `left: 80vw `)

            // filmMargin = newMargin;
            // filmReel.setAttribute('style', `left: ${filmMargin}px`)
        }
    }, 10)
}

function w(){
    clearInterval(slideWatch)
}

function moveBad(num){
    // filmMargin =+ num;
    // filmReel.setAttribute('style', `left: ${filmMargin}px`);
    reachDestination(-num)
}


function lightenButton(button){
    console.log(balls.childNodes)
    // dogCircListeners.childNodes.forEach(circle => {
    //     if(circle.nodeName === 'DIV'){
    //         console.log('yeah! ' + circle.id)
    //         circle.removeAttribute('class')
    //     }        
    // });
    // document.getElementById(circButtonArray[button]).className = 'active'
}





