console.log("Page is loading...");

var likes = [9, 12, 9];
var likeCountSpans = [
    document.querySelector("#like-count-1"),
    document.querySelector("#like-count-2"),
    document.querySelector("#like-count-3")
];

//? likePost( index of post ) increments the like value based on the index; i.e., likePost(1) will like the 1st post only.
function likePost( id ) {
    likes[id]++; //? like value
    likeCountSpans[id].innerHTML = likes[id]; // + "likes(s)"
    //? the hardcoded value in the span will = the `likes[id]` value
}