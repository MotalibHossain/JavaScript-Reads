$(document).ready(function () {
    moment();
    var data=[
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Atilur Rahman",
            "Age":24,
            "Designations":"Developer",
            "Company":"Brain Station-23",
            "phone":"0179124587"
        },
        {
            "Name":"Kamruzzaman Sarker",
            "Age":24,
            "Designations":"Developer",
            "Company":"QNTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Atilur Rahman",
            "Age":24,
            "Designations":"Developer",
            "Company":"Brain Station-23",
            "phone":"0179124587"
        },
        {
            "Name":"Kamruzzaman Sarker",
            "Age":24,
            "Designations":"Developer",
            "Company":"QNTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        },
        {
            "Name":"Motalib Hossain",
            "Age":24,
            "Designations":"Developer",
            "Company":"TravnetTech",
            "phone":"0179124587"
        }
    ]
    var table=$("#jtable").DataTable({
        data:data,
        columns:[
            {data:'Name'},
            {data:"Age"},
            {data:'Designations'},
            {data:'Company'},
            {data:'phone'},
        ],
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
