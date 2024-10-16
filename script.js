document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('records').classList.add('hidden');
});

document.getElementById('recordsLink').addEventListener('click', function() {
    document.getElementById('records').classList.remove('hidden');
    document.getElementById('register').classList.add('hidden');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById('condition').value;
    
    const record = document.createElement('div');
    record.innerHTML = `<strong>Name:</strong> ${name} <br> <strong>Age:</strong> ${age} <br> <strong>Condition:</strong> ${condition}`;
    document.getElementById('patientRecords').appendChild(record);
    
    document.getElementById('registerForm').reset();
    alert('Patient registered successfully!');
});
