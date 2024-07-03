interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const std1: Student = {
  firstName: 'Dennis',
  lastName: 'Chiedu',
  age: 37,
  location: 'Canada',
};

const std2: Student = {
  firstName: 'Pretty',
  lastName: 'Dennis',
  age: 33,
  location: 'Canada',
};

const studentsList: Student[] = [std1, std2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.map((student) => {
    const tr = document.createElement('row');
    const tdStudent = document.createElement('td');
    const tdLocation = document.createElement('td');
    tdLocation.style.border = '1px solid black';
    tdStudent.style.border = '1px solid black';
    tdStudent.textContent = student.firstName;
    tdLocation.textContent = student.location;
    tr.appendChild(tdStudent);
    tr.appendChild(tdLocation);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
}
