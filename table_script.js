let selectedRow = null;

document.addEventListener("DOMContentLoaded", () => {
    loadTableData();
});

function loadTableData() {
    const tableBody = document.querySelector("#chemicalTable tbody");
    const storedData = JSON.parse(localStorage.getItem("chemicalTableData")) || defaultData();
    tableBody.innerHTML = '';

    storedData.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
             <td onclick="selectCRow(this)">
                <input type="checkbox" style='display:none;'>
                <span class="checkmark" onclick="toggleSelect(this)">
                    <span class="material-symbols-outlined">check</span>
                </span>
             </td>
            <td>${row.id}</td>
            <td contenteditable="true">${row.chemicalName}</td>
            <td contenteditable="true">${row.vendor}</td>
            <td contenteditable="true">${row.density}</td>
            <td contenteditable="true">${row.viscosity}</td>
            <td contenteditable="true">${row.packaging}</td>
            <td contenteditable="true">${row.packSize}</td>
            <td contenteditable="true">${row.unit}</td>
            <td contenteditable="true">${row.quantity}</td>
        `;
        tableBody.appendChild(tr);
        saveTable();
        // row.querySelector('.checkmark').addEventListener('click', function() {
        //     toggleSelect(this);
        // });
    });

    
}

function selectCRow(element) {
    const row = element.parentElement;
    element.childNodes[1].checked = !element.childNodes[1].checked
    if (element.childNodes[1].checked) {
        if (selectedRow) selectedRow.querySelector("input[type='checkbox']").checked = false;
        selectedRow = row;
    } else {
        selectedRow = null;
    }
   
}

function toggleSelect(element) {
    const row = element.parentNode.parentNode; // Get the row
    console.log(row.classList)
    if (row.classList.contains('selected')) {
        row.classList.remove('selected');
        element.style.color = ''; // Reset color
    } else {
        row.classList.add('selected');
        element.style.color = 'blue'; // Change color for selected checkmark
    }
}

function defaultData() {
    return [
        {id: 1, chemicalName: 'Ammonium Persulfate', vendor: 'LG Chem', density: '3525.92', viscosity: '60.63', packaging: 'Bag', packSize: '100.00', unit: 'kg', quantity: '6495.18'},
        {id: 2, chemicalName: 'Caustic Potash', vendor: 'Formosa', density: '3172.15', viscosity: '48.22', packaging: 'Bag', packSize: '100.00', unit: 'kg', quantity: '8751.90'},
        {id: 3, chemicalName: 'Dimethylaminopropylamino', vendor: 'LG Chem', density: '8435.37', viscosity: '12.62', packaging: 'Barrel', packSize: '75.00', unit: 'L', quantity: '5964.61'},
        {id: 4, chemicalName: 'Mono Ammonium Phosphate', vendor: 'Sinopec', density: '1597.65', viscosity: '76.51', packaging: 'Bag', packSize: '105.00', unit: 'kg', quantity: '8183.73'},
        {id: 5, chemicalName: 'Ferric Nitrate', vendor: 'DowDuPont', density: '364.04', viscosity: '14.90', packaging: 'Bag', packSize: '105.00', unit: 'kg', quantity: '4154.33'},
        {id: 6, chemicalName: 'n-Pentane', vendor: 'Sinopec', density: '4535.26', viscosity: '66.76', packaging: 'N/A', packSize: 'N/A', unit: 't', quantity: '6272.34'},
        {id: 7, chemicalName: 'Glycol Ether PM', vendor: 'LG Chem', density: '6495.18', viscosity: '72.12', packaging: 'Bag', packSize: '250.00', unit: 'kg', quantity: '8749.54'},
        {id: 8, chemicalName: 'Sodium Chloride', vendor: 'BASF', density: '2165.14', viscosity: '28.34', packaging: 'Bag', packSize: '50.00', unit: 'kg', quantity: '4827.92'},
        {id: 9, chemicalName: 'Acetic Acid', vendor: 'Celanese', density: '1943.29', viscosity: '38.29', packaging: 'Drum', packSize: '200.00', unit: 'L', quantity: '7194.56'},
        {id: 10, chemicalName: 'Sulfuric Acid', vendor: 'INEOS', density: '3578.14', viscosity: '90.34', packaging: 'Tank', packSize: '500.00', unit: 'L', quantity: '9821.74'},
        {id: 11, chemicalName: 'Ethylene Glycol', vendor: 'SABIC', density: '3652.93', viscosity: '62.45', packaging: 'Drum', packSize: '250.00', unit: 'L', quantity: '8652.43'},
        {id: 12, chemicalName: 'Sodium Hydroxide', vendor: 'Dow Chemical', density: '4312.84', viscosity: '22.74', packaging: 'Bag', packSize: '100.00', unit: 'kg', quantity: '5624.31'},
        {id: 13, chemicalName: 'Nitric Acid', vendor: 'Yara', density: '3275.32', viscosity: '58.92', packaging: 'Drum', packSize: '200.00', unit: 'L', quantity: '7524.88'},
        {id: 14, chemicalName: 'Benzene', vendor: 'ExxonMobil', density: '2912.53', viscosity: '74.61', packaging: 'Barrel', packSize: '150.00', unit: 'L', quantity: '8421.67'},
        {id: 15, chemicalName: 'Methanol', vendor: 'Mitsubishi Chemical', density: '4251.18', viscosity: '32.48', packaging: 'Drum', packSize: '100.00', unit: 'L', quantity: '6932.54'}
    ];
    
}

function saveTable() {
    const tableData = [];
    const rows = document.querySelectorAll("#chemicalTable tbody tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        tableData.push({
            id: cells[1].textContent,
            chemicalName: cells[2].textContent,
            vendor: cells[3].textContent,
            density: cells[4].textContent,
            viscosity: cells[5].textContent,
            packaging: cells[6].textContent,
            packSize: cells[7].textContent,
            unit: cells[8].textContent,
            quantity: cells[9].textContent
        });
    });
    localStorage.setItem("chemicalTableData", JSON.stringify(tableData));
}

function selectRow(checkbox) {
    const row = checkbox.parentElement.parentElement;
    console.log("checkbox is :" , row)
    if (checkbox.checked) {
        if (selectedRow) selectedRow.querySelector("input[type='checkbox']").checked = false;
        selectedRow = row;
    } else {
        selectedRow = null;
    }
}

function addRow() {
    const tableBody = document.querySelector("#chemicalTable tbody");
    const rows = tableBody.querySelectorAll("tr");
    const lastRow = rows[rows.length - 1];
    const lastId = lastRow ? parseInt(lastRow.cells[1].textContent) : 0;
    const newId = lastId + 1;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><input type="checkbox" onchange="selectRow(this)"></td>
        <td>${newId}</td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
    `;
    tableBody.appendChild(newRow);
}

function activeFilters(add , remove){
    remove.classList.remove("active_filter");
    add.classList.add("active_filter");
}

function moveRowUp() {
    if (selectedRow && selectedRow.previousElementSibling) {
        var add = document.getElementById("moveUp");
        var remove = document.getElementById("moveDown");
        activeFilters(add , remove)

        selectedRow.parentElement.insertBefore(selectedRow, selectedRow.previousElementSibling);
    }
}

function moveRowDown() {
    if (selectedRow && selectedRow.nextElementSibling) {
        var add = document.getElementById("moveDown");
        var remove = document.getElementById("moveUp");
        activeFilters(add , remove)
        selectedRow.parentElement.insertBefore(selectedRow.nextElementSibling, selectedRow);
    }
}


function refreshTable() {
    loadTableData();
}

// Function to sort the table by column index
function sortTable(columnIndex) {
    const table = document.getElementById("chemicalTable");
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    dir = "asc"; // Start sorting in ascending order

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            if (dir == "asc") {
                if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


function deleteRow() {
    if (selectedRow) {
        const rowId = selectedRow.cells[1].textContent; 
        selectedRow.remove();
        selectedRow = null; 

        // Update local storage by removing the deleted row's data
        let storedData = JSON.parse(localStorage.getItem("chemicalTableData")) || [];
        storedData = storedData.filter(row => row.id !== rowId); 
        localStorage.setItem("chemicalTableData", JSON.stringify(storedData)); 
    }
}
