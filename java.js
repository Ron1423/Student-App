
// Add Student validation form
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()


const form = document.querySelector('#student-form');
const tbodyEL = document.querySelector('tbody');
const tableEL = document.getElementById('myTable');

form.addEventListener('submit',insertStudent);
tableEL.addEventListener('click',onDeleteRow);


//Add student event
function insertStudent(event) {
  event.preventDefault()

  const studentId = document.getElementById("student-id").value;
  const studentName = document.getElementById("student-name").value;
  const studentGender = document.querySelector('.form-check-input').value;
  const studentFaculty = document.getElementById('add-faculty').value;
  const studentProgramFaculty = document.getElementById('add-prodi').value;

  tbodyEL.innerHTML += `
    <tr>
        <td>${studentId}</td>
        <td>${studentName}</td>
        <td>${studentGender}</td>
        <td>${studentFaculty}</td>
        <td>${studentProgramFaculty}</td>
        <td><button class="btn-danger"><i class="bi bi-person-dash-fill"></i></button></td>
    </tr>
  `;
}    

//delete student
function onDeleteRow(event){
  if(!event.target.classList.contains('btn-danger')){
     return;
  }
   const btn = event.target;
   btn.closest("tr").remove();
}

//search name
function searchFun(){
  let filter = document.getElementById('search-input').value.toUpperCase();
  let myTable = document.getElementById('myTable');
  let tr = myTable.getElementsByTagName('tr');
  for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[1];
    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display="";
      }else{
        tr[i].style.display = "none";
      }
    }
  }

}

//filter by faculty
function getFacultyValue(){
  let filter = document.getElementById('filter-faculty').value.toUpperCase();
  let myTable = document.getElementById('myTable');
  let tr = myTable.getElementsByTagName('tr');
  for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[3];
    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display="";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}

//filter by prodi
function getProdiValue(){
  let filter = document.getElementById('filter-prodi').value.toUpperCase();
  let myTable = document.getElementById('myTable');
  let tr = myTable.getElementsByTagName('tr');
  for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[4];
    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display="";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}
