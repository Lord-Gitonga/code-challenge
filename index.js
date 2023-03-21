// Challenge 1 : Student Grade Generator.

// prompt the user to input student marks


       function calculateGrade () {
        let marks = parseInt(document.getElementById("marks").value);
        let grade;
        if(marks<0||marks>100){
          grade = `Invalid input please enter a number between 0 and 100`;
        } else if(marks>79){
            grade = 'A';
        } else if (marks>=60 && marks<=79){
             grade = 'B';
        } else if (marks>=50 && marks<=59){
                 grade = 'C';
        } else if(marks>=40 && marks<=49){
                grade = 'D';
       }  else {
             grade = 'E';
       }
         document.getElementById("grade").textContent = `Your Grade: ${grade}`;
     }
       
// console.log(studentsMarks()); // Since the output is a number between 0-100 you get a positive feedback.




