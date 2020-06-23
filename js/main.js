const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    // -25 is minus half of height and width of cursor to center mouse
    cursor.setAttribute('style', "top: " +(e.pageY -25) + "px; left: " + (e.pageX -25) + "px;")
})


// document.addEventListener('click', () => {
//     cursor.classList.add("cursor-clicked")
//
//     // remove class after .5s
//     setTimeout(() => {
//         cursor.classList.remove("cursor-clicked")
//     }, 500)
// })


const projectImg = document.getElementById('projectImg');
const projectTitle = document.getElementById('projectTitle');
const projectDesc = document.getElementById('projectDesc');

const nextBtn = document.getElementById('project-next');
const prevBtn = document.getElementById('project-back');

const projects = {
    one: {
        img: 'url("../../img/vest.png")',
        title: 'VestHQ',
        description: 'Created the website for a fin-tech startup to showcase the features of the company.'
    },
    two: {
        img: 'url("../../img/harborhq.png")',
        title: 'HarborHQ',
        description: 'Created the website for a fin-tech startup to serve as a client login portal.'
    },
    three: {
        img: 'url("../../img/perfectionpainting.png")',
        title: 'Perfection Painting',
        description: 'Designed and developed website for a commercial painting company to showcase work and send work inquires.'
    },
    four: {
        img: 'url("../../img/ust.png")',
        title: 'UST Aviation',
        description: 'Recreated old site from Flash, changed hosting and email routing'
    }
}

const projectValesArr = [];
Object.entries(projects).forEach((entry) => {
    projectValesArr.push(entry[1])
});

const updateProjectValues = () => {
    projectImg.style.backgroundImage = projectValesArr[count].img;
    projectTitle.innerText = projectValesArr[count].title;
    projectDesc.innerText = projectValesArr[count].description;
}

let count = 0;

nextBtn.addEventListener('click', () => {
    count++;
    if (count >= projectValesArr.length) count = 0;
    updateProjectValues();
})

prevBtn.addEventListener('click', () => {
    count--;
    if (count < 0) count = 0;
    updateProjectValues();
})




// const updateProject = () => {
//     Object.entries(projects).forEach((entry) => {
//         projectImg.style.backgroundImage = entry[1].img;
//         projectTitle.innerText = entry[1].title;
//         projectDesc.innerText = entry[1].description;
//     })
// }
