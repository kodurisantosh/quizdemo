
const correctans=['A','A','A','A','A']
const form=document.querySelector(".quiz-form")
const result=document.querySelector(".result")
const questions=document.querySelectorAll(".question")
let score=0;
form.addEventListener("submit",event=>{
    event.preventDefault();
    // console.log(form.q1.value)
    const useranswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,];
    useranswers.forEach((answer,index) => { 
        if (answer==correctans[index]){
            console.log('correct')
            score+=1
            questions[index].style.backgroundColor="green";
            // or otherwise we can add class and define it
       
            
         }
         
    })
    scrollTo(0,0)
    result.classList.remove("hide")
result.querySelector("p").textContent=`you scored ${score}/5`;
}
)