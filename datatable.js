$(document).ready(function () {
    $("#jtable").DataTable({
        // order: [[orderNo, "desc"]],
        // paging: false,
        // info: false,
        // searching: false,
        dom: "Bfrtip",
        // colReorder: true,
        // autoFill: {
        //     editor: editor
        // }
        // "pagingType": "scrolling",
        
        // ----------------for scrolling table -----------------
        deferRender:    true,
        scrollY:        200,
        scrollCollapse: true,
        scroller:       true,

        buttons: [
            {
                extend: 'copy',
                text: '<i class="far fa-copy fa-2x"></i>',
                "className": 'all_button'
            },{
                extend:'pdf',
                text:'<i class="far fa-file-pdf fa-2x"></i>',
                "className": 'all_button'
            },
            {
                extend:'csv',
                text:'<i class="fas fa-file-csv fa-2x"></i>',
                "className": 'all_button'
            },
            {
                extend:'print',
                text:'<i class="fas fa-print fa-2x"></i>',
                "className": 'all_button'
            },
            
        ]
    });
});
