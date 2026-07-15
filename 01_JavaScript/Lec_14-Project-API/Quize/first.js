
const answers = {
      q1:  "Sachin Tendulkar",
      q2:  "11",
      q3:  "West Indies",
      q4:  "50",
      q5:  "Brian Lara",
      q6:  "6",
      q7:  "MS Dhoni",
      q8:  "Leg Before Wicket",
      q9:  "Muttiah Muralitharan",
      q10: "6"
    };


const form = document.getElementById("quizForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;

    for(let question in answers){

        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );
        console.log(selected);
        console.log(selected.value);
        console.log(answers[question]);

        if(selected && selected.value === answers[question]){
            score++;
        }
    }

    // console.log("Your score:", score);
    const result = document.getElementById('result');

    result.textContent = `Your score: ${score}/10`;
    result.style.display = "block";
});