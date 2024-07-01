export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const stdGrade = grades.find((grade) => grade.studentId === student.id);
      const grade = stdGrade ? stdGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
