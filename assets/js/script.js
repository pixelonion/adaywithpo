window.onload = populateTable();

function populateTable() {
    fetch("../../data/data.csv", { method: 'GET' })
    .then(res => res.text())
        .then(string => {
    
            const rows = string.split('\r\n'); //split by newline

            rows.sort(); //sort in alphabetical order

            for (item of rows) {
                let rowValue = item.split(",");

                //populate table
                //create elements and set text of each cell
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");

                td1.innerText = rowValue[0];
                td2.innerText = rowValue[1];
                td3.innerText = rowValue[2];

                //append child cells to row
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);

                //append the row to the table
                document.getElementById("names-table").appendChild(tr);
            }
            
        })
        .catch(errorMsg => { console.log(errorMsg); });
}