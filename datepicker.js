$(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();
    var dateToday = new Date();
    var NowMonth=dateToday.getMonth()
    var NowYear=dateToday.getFullYear()

    $('#reportrange').daterangepicker({
        
        // date picker
        //---------- For auto size applying needed minDate.
        "changeMonth": true,
        "changeYear":true,
        "autoSize": true,
        "showDropdowns": true,
        "autoApply": true,
        "linkedCalendars": false,
        "alwaysShowCalendars":true,
        // How calender opens 
        "opens": "right",
        "drops": "auto",

        //------------disable privious date 
        // numberOfMonths: 3,
        // minDate: dateToday,
        // onclose:function(selectedDate){
        //     $('#reportrange span').daterangepicker("option", "minDate", selectedDate)
        // },
        //----------Next and privious month disable  just set maxdate or min date
        // minDate: moment(),
        // "datelimit":{
        //     "month": 1,
        // },


        //--------- After 8 month no one can select any date 
        maxSpan: {
            months: NowMonth+12,
        },
        // select year or month 
        // -------when dropdown year set limit of select year
        minYear:NowYear-3,
        maxYear:NowYear+4,
        //------------specific date disable
        isInvalidDate: function(ele) {
            var currDate = moment(ele._d).format('YY-MM-DD');
            return ["22-09-09","22-02-03"].indexOf(currDate) != -1;
        } ,

        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Last 3 Months': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            // 'Last 6 Months': [moment().subtract(6, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            // 'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
            // 'This Year': [moment().startOf('year'), moment().endOf('year')],
        },
    },
    // callback function 
    function(start, end) {
        $('#reportrange span').html(start.format('YYYY-MM-DD') + '&nbsp; - &nbsp; ' + end.format('YYYY-MM-DD'));
        
    });
    $('#reportrange span').html(start.format('YYYY,MM D') + '&nbsp; - &nbsp; ' + moment().format('YYYY,MM D'));

});


// Events 
// when you want to pick value from input box 
// $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
//     var startDate = picker.startDate;
//     var endDate = picker.endDate;
//     alert("New date range selected: '" + startDate.format('YYYY-MM-DD') + "' to '" + endDate.format('YYYY-MM-DD') + "'");
// });
$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
    $("#inp1").val(picker.startDate.format('DD/MM/YYYY'));
    $("#inp2").val(picker.endDate.format('DD/MM/YYYY'));
    $('#show').html(picker.startDate.format('DD/MM/YYYY') + " - " + picker.endDate.format('DD/MM/YYYY'));
});