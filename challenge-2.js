const marks = [100, 70, 40];


function calculateGrade(marks) {

  let summ = 0;

  for (let i = 0; i < marks.length; i++) {
    summ += marks[i];
  }
  const avg = summ / marks.length;
  let grade = '100';
  if (avg < 59) {
    grade = 'F';
  } else if (avg <= 69) {
    grade = 'D';
  } else if (avg <= 79) {
    grade = 'C';
  } else if (avg <= 89) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return grade;
}

console.log(calculateGrade(marks));