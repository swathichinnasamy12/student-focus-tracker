let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const attendance = document.getElementById("attendance").value;
    const marks = document.getElementById("marks").value;

    let status = "Good";
    if (attendance < 75 || marks < 50) {
        status = "Average";
    }
    if (attendance < 60 || marks < 40) {
        status = "Poor";
    }

    const student = { name, roll, attendance, marks, status };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function displayStudents() {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.roll}</td>
                <td>${s.attendance}%</td>
                <td>${s.marks}</td>
                <td>${s.status}</td>
            </tr>
        `;
    });
}

displayStudents();
