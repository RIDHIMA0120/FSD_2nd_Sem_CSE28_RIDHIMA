let employees =[];
function addEmployee() {
    let name = document.getElementById("name").value ;
    let empId = document .getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dep = document.getElementById("dept").value;
    if (name === "" || isNaN(salary))
        alert("Please fill all fields properly");
    return 0;
    

}