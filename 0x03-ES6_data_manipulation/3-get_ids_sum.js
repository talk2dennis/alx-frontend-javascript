export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  return students.reduce((total, student) => total + student.id, 0);
}
