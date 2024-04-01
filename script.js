const ratings = document.querySelectorAll(".rating")
const submit = document.querySelector(".submit-button");
const thanks = document.querySelector(".thanks-content");
const ratingContent = document.querySelector('.rating-content')

var clickedRating = 0;

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        ratings.forEach(r => {
            r.style.backgroundColor = "hsl(213deg, 20%, 22%)"
        })

        rating.style.backgroundColor = "hsl(25, 97%, 53%)"
        clickedRating = rating.innerText;
        console.log(clickedRating);
    })
})

submit.addEventListener("click", () => {
    ratingContent.style.display = "none";
    thanks.style.display = "block";
    choice = document.querySelector('.rating-choice');
    choice.innerText = `You chose a rating of ${clickedRating} out of 5`
})

