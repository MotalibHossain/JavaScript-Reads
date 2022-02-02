$(function() {
    
    var start = moment().subtract(29, 'days');
    var end = moment();
    
    $('#reportrange').daterangepicker({
        
        "showDropdowns": true,
        "autoApply": true,
        "linkedCalendars": false,

        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Last 3 Months': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            // 'Last 6 Months': [moment().subtract(6, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            // 'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
            // 'This Year': [moment().startOf('year'), moment().endOf('year')],
        },
        "opens": "right",
        "drops": "auto"
    },function(start, end) {
        $('#reportrange span').html(start.format('YYYY-MM-DD') + '&nbsp; - &nbsp; ' + end.format('YYYY-MM-DD'));
    })
    $('#reportrange span').html(start.format('YYYY,MM D') + '&nbsp; - &nbsp; ' + moment().format('YYYY,MM D'));

});