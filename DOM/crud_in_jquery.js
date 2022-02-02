$(document).ready(function(){
    sl_no=1;
    let eachSelectRow=null;
    let dataArray=[]

    $('#formSubmit').submit(function(event){
        event.preventDefault();
        SaveFormData()

        $(this).trigger("reset");
        $('#myModal').modal('hide')
        return false;
    })
    // Crud main function 
    function SaveFormData(){
        let All_Form_Data= GetFormData();
    
        if(eachSelectRow === null){
            dataArray.push(All_Form_Data);
            printArraytoTable();
        }
        else{
            updataData(eachSelectRow)
            eachSelectRow=null;
        }
        $(this).trigger("reset");
    }
    // Get data from html form 
    function GetFormData(){
        let All_Form_Data={};

        All_Form_Data["sl_no"]=sl_no++
        All_Form_Data["To_Do"]=document.getElementById("To_Do").value;
        All_Form_Data["status"]=document.getElementById("status").value;
        return All_Form_Data;
    }
    // Render table
    function printArraytoTable(){
     
        let table=$('table tbody')[0];
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

                row4.innerHTML=`<button class="btn btn-success btnEdit" onClick="editForm(${i})" data-bs-toggle="modal" data-bs-target="#myModal" 
                                >edit</button>
                                <button class="btn btn-danger ms-3 delateBtn" >Delate</button>`
        }
    }
    // Edit form data 
    // $('#tbody').on('click','.btnEdit', function(){
    //     let currentRow=$(this).closest("tr");
    //     let tid=currentRow.find("td:eq(0)").text();
    //     let tid1 = parseInt(tid);
    //     tid2=tid1 - 1
    //     eachSelectRow=tid2

    //     console.log(tid)
    //     $('#To_Do').val(dataArray[tid2]["To_Do"])
    //     $('#status').val(dataArray[tid2]["status"])
    // })
    function editForm(tid){
        alert(tid)
        eachSelectRow=tid
        console.log(eachSelectRow)

        $('#To_Do').val(dataArray[tid]["To_Do"])
        $('#status').val(dataArray[tid]["status"])
    }
    // Update data 
    function updataData(tid){
        dataArray[tid]["To_Do"]=$('#To_Do').val()
        dataArray[tid]["status"]=$('#status').val()
        printArraytoTable()

    }
    
    $('#tbody').on('click','.delateBtn', function(){
        let currentRow=$(this).closest("tr");
        let tid=currentRow.find("td:eq(0)").text();
        let tid1 = parseInt(tid);
        tid2=tid1 - 1

        dataArray.splice(tid2,1)
        console.log(dataArray)
        printArraytoTable()
        alert("Are you want to delate this List." +tid)
    })

})
