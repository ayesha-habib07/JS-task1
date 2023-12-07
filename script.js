let newsfeedBtn = document.getElementById("newsfeed");
let lifestoryBtn = document.getElementById("lifestory");
let newsfeedContent = document.getElementById("newsfeedContent");
let lifestoryContent = document.getElementById("lifestoryContent");
let createBtn = document.getElementById("create");
let createContent = document.getElementById("createContent");
let cancelBtn = document.getElementById("cancel");

let inside_newfeedBtn= document.getElementById("insideNewfeed");
let inside_lifestoryBtn = document.getElementById("insideLifestory");
let inside_newfeedContent = document.getElementById("inside_newfeed");
let inside_LifestoryContent= document.getElementById("inside-lifestory");

let cancel_lifestory = document.getElementById("cancel_lifestory");
let cancel_Newfeed = document.getElementById("cancel_Newfeed"); 
let isLiked=false;
let likedButton = document.querySelectorAll("#likeButton");
console.log(likedButton+"djkfjdf")
let likesCount = document.getElementById("likeCount");
likedButton.forEach(element => {
    element.addEventListener('click', ()=>{
        console.log(element)
        let liked = localStorage.getItem("likes") === "true";
        liked = !liked;
         let likes = parseInt(localStorage.getItem("likes") || 0);
         console.log(likes)
         isLiked?likes-=1:likes+=1
        //  Save the updated like count and status
        localStorage.setItem("likes", likes);
        localStorage.setItem("liked" , liked);
        isLiked=!isLiked
        updateLikeCount(likes);
        // updateLikeStatus(liked);
     
    });
});

function updateLikeCount(likes){
    document.querySelectorAll("#likeCount").forEach((elem)=>elem.innerHTML=likes);
}
let likeState = null;

const toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function(liked) {
    likeState = (likeState === "solid-icon" ? "regular-icon" : "solid-icon");
    if (likeState === "solid-icon") {
        toggleIcon.classList.add("solid-icon");
        toggleIcon.classList.remove("regular-icon");
    } else {
        toggleIcon.classList.add("regular-icon");
        toggleIcon.classList.remove("solid-icon");
    }
});

   

window.onload= function(){
    let likes = parseInt(localStorage.getItem("likes") || 0);
    let liked = localStorage.getItem("liked" === "true");
    updateLikeCount(likes);
    updateLikeStatus(liked);
};
window.addEventListener("load",()=>{
    lifestoryContent.style.display="none";
    createContent.style.display="none";
    inside_LifestoryContent.style.display="none";
    inside_newfeedContent.style.display="none";
});
newsfeedBtn.addEventListener("click" , ()=>{
    newsfeedContent.style.display= "block";
    lifestoryContent.style.display= "none";
});

function toggleStyle(clickedButton){
    const buttons = document.querySelectorAll(".activeButton");
    buttons.forEach(button => button.classList.remove("activeButton"));
    clickedButton.classList.add("activeButton");
}

lifestoryBtn.addEventListener("click",()=>{
    lifestoryContent.style.display= "block";
    newsfeedContent.style.display="none";
});
createBtn.addEventListener("click",()=>{
    createContent.style.display="block";
    lifestoryContent.style.display= "none";
    newsfeedContent.style.display="none";
    inside_LifestoryContent.style.display="none";
    inside_newfeedContent.style.display="none";


});
cancelBtn.addEventListener("click",()=>{
    createContent.style.display= "none";
    lifestoryContent.style.display= "none";
    newsfeedContent.style.display="block";
});
inside_newfeedBtn.addEventListener("click",()=>{
    inside_newfeedContent.style.display="block";
    createContent.style.display= "none";
    lifestoryContent.style.display= "none";
    newsfeedContent.style.display="none";
    inside_LifestoryContent.style.display="none";

});
inside_lifestoryBtn.addEventListener("click", ()=>{
    inside_LifestoryContent.style.display="block";
    inside_newfeedContent.style.display="none";
    createContent.style.display= "none";
    lifestoryContent.style.display= "none";
    newsfeedContent.style.display="none";
});
cancel_lifestory.addEventListener("click",()=>{
    createContent.style.display="block";
    lifestoryContent.style.display= "none";
    newsfeedContent.style.display="none";
    inside_LifestoryContent.style.display= "none";
});
cancel_Newfeed.addEventListener("click",()=>{
    createContent.style.display="block";
    lifestoryContent.style.display= "none";
    newsfeedContent.style.display="none";
    inside_newfeedContent.style.display="none";
});







