window.addEventListener('load', function() {
    // Check if the user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    } else {
        const username = sessionStorage.getItem('username');
        document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
    }

    // Load patients when the page loads
    displayPatients();
});

function displayPatients() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patientList = document.getElementById('patient-list');

    // Clear existing list items
    patientList.innerHTML = '';

    // Add each patient as a list item to the ul
    patients.forEach((patient, index) => {
        const li = document.createElement('li');
        li.textContent = `${patient.name}, ${patient.age}, ${patient.illness}`;

        // Create Update button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.classList.add('update-button');
        updateButton.addEventListener('click', function() {
            updatePatient(index);
        });

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            deletePatient(index);
        });

        li.appendChild(updateButton);
        li.appendChild(deleteButton);
        patientList.appendChild(li);
    });
}

function updatePatient(index) {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patient = patients[index];

    // Simulate an update process (could be a modal, form, etc.)
    const updatedName = prompt(`Update name for ${patient.name}:`, patient.name);
    const updatedAge = prompt(`Update age for ${patient.name}:`, patient.age);
    const updatedIllness = prompt(`Update illness for ${patient.name}:`, patient.illness);

    // Update patient object
    patient.name = updatedName;
    patient.age = updatedAge;
    patient.illness = updatedIllness;

    // Update localStorage
    localStorage.setItem('patients', JSON.stringify(patients));

    // Re-display updated patient list
    displayPatients();
}

function deletePatient(index) {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(patients)); // Update localStorage
    displayPatients(); // Re-display updated patient list
}