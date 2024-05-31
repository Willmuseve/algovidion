// index.js
const algorithmList = document.getElementById('algorithm-list');
const visualizationArea = document.querySelector('.visualization');

// Function to fetch and display algorithm options
async function fetchAlgorithms() {
    const response = await fetch('/api/algorithms');
    const algorithms = await response.json();

    algorithms.forEach(algorithm => {
        const listItem = document.createElement('li');
        listItem.textContent = algorithm.name;
        algorithmList.appendChild(listItem);
    });
}

// Call the function to fetch and display algorithms on page load
fetchAlgorithms();