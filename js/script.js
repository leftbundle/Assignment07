// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form=document.getElementById('addForm')
let table=document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount=0;
let countDisplay=document.getElementById('empCount')

countDisplay.textContent=`(${employeeCount})`;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId=document.getElementById('id').value
    let employeeName=document.getElementById ('name').value;
    let employeeExtension=document.getElementById('extension').value;
    let employeeEmail=document. getElementById('email').value;
    let employeeDepartment=document. getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row=table.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell=row.insertCell(0);
    let nameCell=row.insertCell(1);
    let extensionCell=row.insertCell(2);
    let emailCell=row.insertCell(3);
    let departmentCell=row.insertCell(4);
    let deleteCell=row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(employeeId));
    nameCell.appendChild(document.createTextNode(employeeName));
    extensionCell.appendChild(document.createTextNode(employeeExtension));
    emailCell.appendChild(document.createTextNode(employeeEmail));
    departmentCell.appendChild(document.createTextNode(employeeDepartment));

    // CREATE THE DELETE BUTTON
    let deleteBtn=document.createElement('button')
    deleteBtn.type='button';
    deleteBtn.className='btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode ('Delete'))
    deleteCell.appendChild(deleteBtn);

    // DELETE EMPLOYEE
    deleteBtn.addEventListener('click', (e)=> {
        let confirmDelete=confirm(
            "Are you sure you want to delete this employee?"
        );

        if (confirmDelete) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
    
            employeeCount--;
            countDisplay.textContent=`(${employeeCount})`;
        }
    });

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    countDisplay.textContent=`(${employeeCount})`;

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    
});
