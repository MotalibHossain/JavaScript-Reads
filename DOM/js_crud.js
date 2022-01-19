$('#SubmitForm').submit(function(event){
    // alert("Enter submit")
    event.preventDefault();
    GetFormData()
    $(this).trigger("reset");
    $("#staticBackdrop").modal('hide');
})

let sl_no=1
function GetFormData(){
    sl_no=sl_no
    To_do=$('#To_do').val();
    To_status=$('#status').val();
    let Create_row='<tr><td>'+sl_no+'</td>  <td>'+To_do+'</td> <td>'+To_status+'</td> <td><button class="btn btn-success">Edit</button><button  class="btn_delate btn btn-danger ms-3">Delate</button></td></tr>'
    $('tbody').append(Create_row);
    sl_no++
}
function InsertFormData(){

}
$(document).on('click', '.btn_delate', function(){
    $(this).closest('tr').remove();
    sl_no--
})

