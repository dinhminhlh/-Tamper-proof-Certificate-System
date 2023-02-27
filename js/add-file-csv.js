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
            const th = document.createElement('th');
            th.innerText = headers[i];
            tableRow.appendChild(th);
        }

        //Thêm cột cuối cùng
        const lastHeader = document.createElement('th');
        lastHeader.innerText = '';
        tableRow.appendChild(lastHeader);

        for (let i = 0; i < data.length - 1; i++) {
            const tableRow = table.insertRow();
            for (let j = 0; j < headers.length + 1; j++) {
                if (j === headers.length) {
                    const tableCell = tableRow.insertCell();
                    const span = document.createElement('span');
                    span.classList.add('sub-menu');
                    const icon = document.createElement('i');
                    icon.classList.add('fa-solid', 'fa-ellipsis');
                    span.appendChild(icon);
                    tableCell.appendChild(span);
                } else {
                    const tableCell = tableRow.insertCell();
                    if (j === 3) {
                        const span = document.createElement('span');
                        span.innerText = data[i][headers[j]] ? data[i][headers[j]] : '';
                        span.classList.add('contact__status');
                        span.classList.add('contact__status--pending');
                        tableCell.appendChild(span);
                    } else {
                        tableCell.innerText = data[i][headers[j]] ? data[i][headers[j]] : '';
                    }
                }
            }
        }

        const tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    };

    reader.readAsText(file);
});