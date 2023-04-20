// ITCS227 Source Code Template for 2T AY 2022-2023
/*
    Program: Computation of Grades using Function
    Programmer: Mayolito C. Waje
    Section: BCS24
    Start Date: April 17, 2023
    End Date: April 20, 2023
*/

function getLetterGrade(grade) {
  switch (true) {
    case grade >= 90:
      return 'A';
    case grade >= 80:
      return 'B';
    case grade >= 70:
      return 'C';
    case grade >= 60:
      return 'D';
    default:
      return 'F';
  }
}

function getClassParticipation(name) {
  const enablingAssessments = [];

  for (let i = 1; i <= 5; i++) {
    const score = prompt(`(${name}) Enter enabling assessment ${i}:`);
    enablingAssessments.push(parseInt(score));
  }

  return Math.round(
    enablingAssessments.reduce((sum, grade) => sum + grade) /
      enablingAssessments.length
  );
}

function getSummativeAssessments(name) {
  const summativeAssessments = [];

  for (let i = 1; i <= 3; i++) {
    const score = prompt(`(${name}) Enter summative assessment ${i}:`);
    summativeAssessments.push(parseInt(score));
  }

  return Math.round(
    summativeAssessments.reduce((sum, grade) => sum + grade) /
      summativeAssessments.length
  );
}

function getGrades() {
  const name = prompt('Enter the name of the student:');
  const classParticipation = getClassParticipation(name);
  const summativeAssessment = getSummativeAssessments(name);
  const examGrade = parseInt(prompt(`(${name}) Enter major exam grade:`));

  const gradeScore = Math.round(
    classParticipation * 0.3 + summativeAssessment * 0.3 + examGrade * 0.4
  );
  const letterGrade = getLetterGrade(gradeScore);

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${classParticipation}</td>
    <td>${summativeAssessment}</td>
    <td>${examGrade}</td>
    <th>${gradeScore}</th>
    <th>${letterGrade}</th>
  `;
  document.querySelector('table').appendChild(tr);
}

for (let i = 0; i < 5; i++) {
  getGrades();
}
