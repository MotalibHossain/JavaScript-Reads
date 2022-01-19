$('#SubmitForm').submit(function(event){
    // alert("Enter submit")
    event.preventDefault();
    SaveFormData()
    $(this).trigger("reset");
    $("#staticBackdrop").modal('hide');
})


function SaveFormData(){
    let All_data=GetFormData()
    console.log(All_data)
}

function GetFormData(){
    let All_data={}
    All_data['To_do']=$('#To_do').val();
    All_data['status']=$('#status').val();
    return All_data;
}
function InsertFormData(){
    
}

