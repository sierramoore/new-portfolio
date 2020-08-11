// const folded = new-portfolio OriDomi('.paper',
//     {
//         // ripple: true // to stagger effect
//     });

const elem = document.getElementById('projectImg');
let folded = new OriDomi(elem);

nextBtn.onclick = () => {
    folded.destroy();
    createFoldedElem(elem, folded);
}

const createFoldedElem = (elem, folded) =>{
    folded = new OriDomi(elem);

    elem.addEventListener('mouseover',function(e){
        folded.accordion(-60, 0);
    },false);

    elem.addEventListener('mouseout',function(e){
        folded.reset();
        folded.emptyQueue();
    },false);
}

createFoldedElem(elem, folded);


