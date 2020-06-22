// const folded = new-portfolio OriDomi('.paper',
//     {
//         // ripple: true // to stagger effect
//     });
// folded.accordion(20).wait(1000).accordion(-20);


const elem = document.getElementsByClassName('paper')[0]

const folded = new OriDomi(elem);

elem.addEventListener('mouseover',function(){
    folded.accordion(-60, 0);
},false);

elem.addEventListener('mouseout',function(){
    folded.reset();
},false);


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    // -25 is minus half of height and width of cursor to center mouse
    cursor.setAttribute('style', "top: " +(e.pageY -25) + "px; left: " + (e.pageX -25) + "px;")
})


document.addEventListener('click', () => {
    cursor.classList.add("cursor-clicked")

    // remove class after .5s
    setTimeout(() => {
        cursor.classList.remove("cursor-clicked")
    }, 500)
})
