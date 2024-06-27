// Your personal information
const personalInfo = {
    name: "Salako lateef Olatunbosun",
    username: "Enzorx",
    email: "Salakolateef331@gmail.com"
};

// Function to display personal information
function displayInfo() {
    document.getElementById('name').innerText = personalInfo.name;
    document.getElementById('username').innerText = personalInfo.username;
    document.getElementById('email').innerText = personalInfo.email;
}

// Call the function to display information on page load
displayInfo();
