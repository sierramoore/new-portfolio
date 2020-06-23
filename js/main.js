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

const nextProject = document.getElementById('project-next');
const prevProject = document.getElementById('project-back');

const projectImgs = [
    'url("../../img/vest.png")',
    'url("../../img/harborhq.png")',
    'url("../../img/perfectionpainting.png")',
    'url("../../img/ust.png")'
];
const projectTitles = [
    'VestHQ',
    'HarborHQ',
    'Perfection Painting',
    'UST Aviation'
];


const projectDescriptions = [
    'Created the website for a fin-tech startup to showcase the features of the company.',
    'Created the website for a fin-tech startup to serve as a client login portal.',
    'Designed and developed website for a commercial painting company to showcase work and send work inquires.',
    'Recreated old site from Flash, changed hosting and email routing'
];

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

let bgCount = 0;
nextProject.addEventListener('click', (e) => {
    if (bgCount <= 0) { bgCount = 1 }
    bgCount++;
    if (bgCount > projectImgs.length - 1) bgCount = 0;
    projectImg.style.backgroundImage = projectImgs[bgCount];
    console.log(bgCount, 'next')

    console.log(projectTitles.innerText)
    projectTitles.innerText = projectTitles[bgCount];
    projectDescriptions.innerText = projectTitles[bgCount];
})

prevProject.addEventListener('click', (e) => {

    if (bgCount <= 0) { bgCount = 0 }
    console.log(bgCount, 'back')
    projectImg.style.backgroundImage = projectImgs[bgCount - 1];
    bgCount--;

    projectTitles.innerText = projectTitles[bgCount - 1];
    projectDescriptions.innerText = projectTitles[bgCount -1];

})

// = projectImgs[]


