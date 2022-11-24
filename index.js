const submitButton = document.querySelector(".cta");
const container = document.querySelector(".container");
const thankyou = document.querySelector(".thankyou");
const error = document.getElementById("error-msg");
const ratingBtn = document.querySelectorAll(".btn");
const resultRating = document.querySelector(".result");
let set_rating = 0;

submitButton.addEventListener("click", onSubmit);
ratingBtn.forEach(btn => {
    btn.addEventListener("click",numberRating);
});

function onSubmit (){
    if(set_rating === 0){
        errorMessage()
        setTimeout(()=>{
            removeError()
        }, 3000);
        return
    }
    
    container.classList.add("hidden");
    thankyou.classList.remove("hidden");
}

function numberRating(event){
    ratingBtn.forEach(btn =>{
        btn.classList.remove("active");
    });

    if(event.target.classList.contains("btn")){
        event.target.classList.add("active");
    }else{
        event.target.parentElement.classList.add("active");
    }
    set_rating = event.target.textContent;
    
    document.getElementById("result").innerHTML= set_rating;
}

function errorMessage(){
    error.classList.remove("hidden"); 
    ratingBtn.forEach(btn =>{
        btn.classList.add("error");
    }); 
}
function removeError(){
    error.classList.add("hidden");
    ratingBtn.forEach(btn =>{
        btn.classList.remove("error");
    }); 
}