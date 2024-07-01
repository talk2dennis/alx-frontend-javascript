export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const ids = [];
  for (const student of students) {
    ids.push(student.id);
  }
  return ids;
}
