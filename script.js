let sRow = null;

function onFormSubmit(){
    let formData = readFormData();
    if(sRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["item"] = document.getElementById("item").value;
    formData["numberOfItem"] = document.getElementById("numberOfItem").value;
    formData["unitPrice"] = document.getElementById("unitPrice").value;
    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.item;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.numberOfItem;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.unitPrice;
    let total = parseInt(cell2.textContent)* parseInt(cell3.textContent);
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = total;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("item").value = "";
    document.getElementById("numberOfItem").value = "";
    document.getElementById("unitPrice").value = "";
    sRow = null;
}

function onEdit(td){
    sRow = td.parentElement.parentElement;
    document.getElementById("item").value = sRow.cells[0].innerHTML;
    document.getElementById("numberOfItem").value = sRow.cells[1].innerHTML;
    document.getElementById("unitPrice").value = sRow.cells[2].innerHTML;
}

function updateRecord(formData){
    sRow.cells[0].innerHTML = formData.item;
    sRow.cells[1].innerHTML = formData.numberOfItem;
    sRow.cells[2].innerHTML = formData.unitPrice;
    sRow.cells[3].innerHTML = (parseInt(formData.numberOfItem)*parseInt(formData.unitPrice))
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}