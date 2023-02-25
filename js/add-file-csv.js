const csvFileInput = document.getElementById('file');

csvFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const lines = reader.result.split('\n');
        const headers = lines[0].split(',');
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const row = {};

            for (let j = 0; j < headers.length; j++) {
                row[headers[j]] = values[j];
            }

            data.push(row);
        }

        const table = document.createElement('table');
        const tableHeader = table.createTHead();
        const tableRow = tableHeader.insertRow();

        for (let i = 0; i < headers.length; i++) {
            const th = document.createElement('td');
            th.innerText = headers[i];
            tableRow.appendChild(th);
        }

        for (let i = 0; i < data.length; i++) {
            const tableRow = table.insertRow();
            for (let j = 0; j < headers.length; j++) {
                const tableCell = tableRow.insertCell();
                tableCell.innerText = data[i][headers[j]];
            }
        }

        const tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    };

    reader.readAsText(file);
});