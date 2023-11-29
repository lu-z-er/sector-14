function showResults(category) {
    const data = [
        "Result 1",
        "Result 2",
        "Result 3",
        "Result 4",
        "Result 5",
    ];

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h2>${category}</h2>`;

    if (data.length > 0) {
        const resultList = document.createElement('ul');
        data.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            resultList.appendChild(listItem);
        });
        resultsContainer.appendChild(resultList);
    } else {
        resultsContainer.innerHTML += "<p>No results found.</p>";
    }
}
