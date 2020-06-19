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
