var mark;
    var grade;
    grade = "Not Yet Graded";
    
    
    mark = prompt("100(%)");
        
    if (mark >= 0 && mark <= 100) {
        if (mark >= 70 && mark <= 100) {
            grade = "A";
        } else if (mark>= 60 && mark <=50) {
            grade = "C";
               } else if (mark >= 0 && mark <= 40) {
            grade = "F";
        } else {
            grade = "UNKNOWN";
        }
    
    
        alert("Mark: " + mark + "% - Grade: " + grade);
    } 

