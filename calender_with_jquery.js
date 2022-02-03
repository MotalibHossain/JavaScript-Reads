$(function(){
    $('#datepicker').datepicker({
        direction: true,
        dateFormat: 'dd-mm-yy',
        dateFormat:"dd-mm-yyyy",
        changeMonth: true,
        changeYear:true,
        
        maxDate:'+2Y',
        minDate: '-4W'
    })
    // Next and previous remove 
    // $("#datepicker").datepicker({
    //     changeMonth: false,
    //     changeYear: false,
    //     dateFormat: 'dd/mm/yy',
    //     duration: 'fast'
    //   }).focus(function() {
    //       $(".ui-datepicker-prev, .ui-datepicker-next").remove();
    //   });
})