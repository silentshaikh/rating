let myStars = document.querySelectorAll(".star");
let myRating = document.getElementById("para");
let myBtn = document.querySelector(".btn");
Array.from(myStars).forEach((element,index) => {
     myStars[index].starValue = index+1;
    // console.log(starValue);
    let myEvents = ["click","mouseover","mouseout"];
    myEvents.forEach((e) => {
        myStars[index].addEventListener(e,ratingShow);
    })
});
function ratingShow(e){
    let myType = e.type;
    // console.log(myType);
    let starValue = this.starValue;
    // console.log(starValue);
    if(myType === "click"){
        if(starValue > 1){
            myRating.innerHTML = `You Rate ${starValue} Stars for this Image`;
        }
    };
    myStars.forEach((elem,ind) => {
        if(myType === "click"){
            if(ind < starValue){
                elem.style.color = "#55E6C1";
            }else{
                elem.style.color = "azure";
            }
        }
        if(myType === "mouseover"){
            if(ind < starValue){
                elem.style.color = "yellow";
            }else{
                elem.style.color = "azure";
            }
        }
        if(myType === "mouseout"){
            elem.style.color = "azure";
        }
    })
};
myBtn.addEventListener("click",() => {
    window.location.reload();
});
