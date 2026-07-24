//1. Create a function that takes a student's score as a parameter.
//2. Declare and initialize the variable.
//3. Use `switch` statement inside the function.
//4. Return the corresponding grade.
//5. Call the function and print the result.

function gradeCalc(score){
  
let grade = ""
switch(true) {
    case(score>=90 && score <=100):
    grade = "A"
    break
    case(score>=80 && score<90):
    grade = "B"
    break
    case(score>=70 && score<80):
    grade = "C"
    break;
    case(score>=60 && score<70):
    grade = "D"
    break;
    case(score>=50 && score<60):
    grade = "E"
    break
    case (score>=0 && score<50):
    grade="F"
    break
}    
return grade
}
//let score = 40;
//let grade = gradeCalc(score);
//console.log(`score is:`,score, ` and grade is:`,grade)
for(score = 40; score<=100; score++){
    let grade = gradeCalc(score);
console.log(`score is:`,score, ` and grade is:`,grade)
}