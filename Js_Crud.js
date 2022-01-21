// Form submit event 
sl_no=1;
let eachSelectRow=null;

let dataArray=[]

let formSubmit=document.getElementById('formSubmit')
formSubmit.addEventListener('submit', function(event){
    event.preventDefault();
    SaveFormData()

    $('#myModal').modal('hide')
    return false;
})

// Crud main 
function SaveFormData(){
    let All_Form_Data= GetFormData();
    // console.log(All_Form_Data)

    if(eachSelectRow === null){
        dataArray.push(All_Form_Data);
        printArraytoTable();
        // console.log(dataArray);
        // console.log(dataArray.length);
    }
    else{
        updataData(eachSelectRow)
    }
    resetForm();
}


// Get data from html form 
function GetFormData(){
    let All_Form_Data={};

    All_Form_Data["sl_no"]=sl_no++
    All_Form_Data["To_Do"]=document.getElementById("To_Do").value;
    All_Form_Data["status"]=document.getElementById("status").value;
    return All_Form_Data;
}

// console.log(GetFormData())

// Render table
function printArraytoTable(){
    let table=document.getElementById('To_Do_List').getElementsByTagName('tbody')[0];
    table.innerHTML = ''
    for (let i=0; i<dataArray.length; i++) {
        let newRow=table.insertRow(table.length);

        row1=newRow.insertCell(0);
            row1.innerHTML=i+1

        row2=newRow.insertCell(1);
            row2.innerHTML=dataArray[i].To_Do

        row3=newRow.insertCell(2);
            row3.innerHTML=dataArray[i].status

        row4=newRow.insertCell(3);
            row4.innerHTML=`<button class="btn btn-success" onClick="editForm(${i})" 
                            data-bs-toggle="modal" data-bs-target="#myModal">edit</button>
                            <button class="btn btn-danger ms-3" onClick="delateData(${i})">Delate</button>`
    }
    console.log(dataArray)
}

// Edit form data 
function editForm(tid){
    eachSelectRow=tid
    document.getElementById('To_Do').value=dataArray[tid].To_Do
    document.getElementById('status').value=dataArray[tid].status
}
// Update data 
function updataData(tid){
    dataArray[tid].To_Do=document.getElementById('To_Do').value
    dataArray[tid].status=document.getElementById('status').value
    printArraytoTable()
}
// Delate formData 
function delateData(tid){
    dataArray.splice(tid,1)
    printArraytoTable()
}

// reset form 
function resetForm(){
    document.getElementById('To_Do').value="";
    document.getElementById('status').value="";
    eachSelectRow=null
}

