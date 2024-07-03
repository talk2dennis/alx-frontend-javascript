/// <reference path="js/subjects/Teacher.ts" />
/// <reference path="js/subjects/Subject.ts" />
/// <reference path="js/subjects/Cpp.ts" />
/// <reference path="js/subjects/React.ts" />
/// <reference path="js/subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const Java = new Subjects.Java();
const react = new Subjects.React();

export const cteacher: Subjects.Teacher = {
    firstName: 'Dennis',
    lastName: 'Chiedu',
    experienceTeachingC: 10
};

cpp.setTeacher(cteacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
Java.setTeacher(cteacher);
console.log(Java.getRequirements());
console.log(Java.getAvailableTeacher());

console.log('React');
react.setTeacher(cteacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

