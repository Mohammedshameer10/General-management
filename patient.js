window.addEventListener('load', function() {
    // Check if the user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    } else {
        const username = sessionStorage.getItem('username');
        document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
    }

    // Add event listener to the patient form
    const patientForm = document.getElementById('patient-form');
    patientForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const illness = document.getElementById('illness').value;

        addPatient(name, age, illness);

        // Clear form inputs after adding patient
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('illness').value = '';
    });

    // Load patients when the page loads
    loadPatients();
});

function addPatient(name, age, illness) {
    // Retrieve existing patients from localStorage or initialize empty array
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push({ name, age, illness });
    localStorage.setItem('patients', JSON.stringify(patients)); // Store updated patients
    displayPatients(); // Update displayed patient list

    // Notify user of successful addition (for demonstration purposes)
    alert('Patient added successfully');
}

function displayPatients() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patientList = document.getElementById('patient-list');

    // Clear existing list items
    patientList.innerHTML = '';

    // Add each patient as a list item to the ul
    patients.forEach(patient => {
        const li = document.createElement('li');
        li.textContent = `${patient.name}, ${patient.age}, ${patient.illness}`;
        patientList.appendChild(li);
    });
}