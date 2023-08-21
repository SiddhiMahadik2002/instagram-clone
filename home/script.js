let common = document.querySelectorAll(".common")
let displayStories = document.querySelector("#displaystories")

common.forEach((item) => {
    item.addEventListener("click", () => {
        common.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
    })
})


const storiesData = [
    {
        userName: "Rahul",
        img: "../imgs/stories.jpg"
    },
    {
        userName: "Siddhi Mahadik",
        img: "../imgs/stories.jpg"
    },
    {
        userName: "Nilesh Saini",
        img: "../imgs/stories.jpg"
    },
    {
        userName: "Nilesh Saini",
        img: "../imgs/stories.jpg"
    },
    {
        userName: "Nilesh Saini",
        img: "../imgs/stories.jpg"
    },
    {
        userName: "Nilesh Saini",
        img: "../imgs/stories.jpg"
    },
    {
        userName: "Nilesh Saini",
        img: "../imgs/stories.jpg"
    },{
        userName: "Nilesh Saini",
        img: "../imgs/stories.jpg"
    }
]


function displayAllStories(){
    let html="";
    for(let i=0;i<storiesData.length;i++){
        html=html+`<div class="mainStoryDiv">
        <div class="innerdiv storyBg">
            <div class="mainStory">
                <img src="${storiesData[i].img}" alt="">
            </div>
        </div>
        <p>${storiesData[i].userName.length>=10?storiesData[i].userName.substring(0,10)+"...":storiesData[i].userName}</p>
    </div>`
    }
    displayStories.innerHTML =html;
}

displayAllStories();