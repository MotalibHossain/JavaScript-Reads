$(document).ready(function () {
    moment();
    var table=$("#jtable").DataTable({
        // ----------------------options---------------------- 
        // order: [[orderNo, "desc"]],
        // paging: false,
        // info: false,
        // searching: false,
        
        // "pagingType": "scrolling",
        language: {
            "paginate": {
                "next": ">",
                "previous": "<"
            }
        },
        // pageLength:30,
        // For custom search functionality 
        // dom: 'Qlfrtip',
        // columnDefs: [
        //     {
        //         render: (d) => parseInt(d, 10),
        //         targets: 3
        //     }
        // ],

        // ----------------for scrolling table -----------------
        // deferRender:    true,
        // scrollY:        200,
        // scrollCollapse: true,
        // scroller:       true,

        // --------------Hidden any column in table--------------
        // "columnDefs": [
        //     {
        //         "targets": [ 4 ],
        //         "visible": false,
        //         "searchable": false 
        //     },
        // ],
        // -------------Button for copy,csv,pdf,print------------- 
        dom: "Bfrtip",
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
    // -------------------All events-------------------
    // table.on( 'draw', function () {
    //     alert( 'Are you want to go this page' );
    // } );
});
