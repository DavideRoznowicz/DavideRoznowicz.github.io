// $(document).ready(function(){
//     $('#searchButton').click(function(){
//         $.ajax({
//             url:"data_front.csv",
//             dataType:"text",
//             success:function(data){
//                 var employee_data = data.split(/\r?\n|\r/);
//                 var table_data = '<table class="table table-bordered table-striped">';
//                 for(var count = 0; count<employee_data.length; count++){
//                     var cell_data = employee_data[count].split(";");
//                     table_data += '<tr>';
//                     for(var cell_count=0; cell_count<cell_data.length; cell_count++){
//                         if(count === 0){
//                             table_data += '<th>'+cell_data[cell_count]+'</th>';
//                         } else{
//                             table_data += '<td>'+cell_data[cell_count]+'</td>';
//                         }
//                     }
//                     table_data += '</tr>';
//                 }
//                 table_data += '</table>';
//                 $('#tabletest').html(table_data);
//             }
//         });
//     });
// });

// $(document).ready(function(){
//     $('#searchButton').click(function(){
//         // Show spinner
//         $('#spinner').removeClass('uk-hidden');
        
//         $.ajax({
//             url:"data_front.csv",
//             dataType:"text",
//             success:function(data){
//                 var employee_data = data.split(/\r?\n|\r/);
//                 var table_data = '<table class="table table-bordered table-striped">';
//                 for(var count = 0; count<employee_data.length; count++){
//                     var cell_data = employee_data[count].split(";");
//                     table_data += '<tr>';
//                     for(var cell_count=0; cell_count<cell_data.length; cell_count++){
//                         if(count === 0){
//                             table_data += '<th>'+cell_data[cell_count]+'</th>';
//                         } else{
//                             table_data += '<td>'+cell_data[cell_count]+'</td>';
//                         }
//                     }
//                     table_data += '</tr>';
//                 }
//                 table_data += '</table>';
                

//                 $('#spinner').addClass('uk-hidden');
                
//                 $('#tabletest').html(table_data);
                
//                 // Hide spinner after data is loaded

//             },
//             error:function(xhr, status, error){
//                 // Handle error
//                 console.error(error);
//                 // Hide spinner in case of error
//                 $('#spinner').addClass('hidden');
//             }
//         });
//     });
// });


$(document).ready(function(){
    $('#searchButton').click(function(){
        // Show spinner
        $('#spinner').removeClass('uk-hidden');

        // Simulate 3 seconds delay
        setTimeout(function() {
            // Generate table
            $.ajax({
                url:"table-file.csv",
                dataType:"text",
                success:function(data){
                    var employee_data = data.split(/\r?\n|\r/);
                    var table_data = '<table class="uk-table uk-table-striped">';
                    for(var count = 0; count<employee_data.length; count++){
                        var cell_data = employee_data[count].split(",");
                        table_data += '<tr>';
                        for(var cell_count=0; cell_count<cell_data.length; cell_count++){
                            if(count === 0){
                                table_data += '<th>'+cell_data[cell_count]+'</th>';
                            } else{
                                table_data += '<td>'+cell_data[cell_count]+'</td>';
                            }
                        }
                        table_data += '</tr>';
                    }
                    table_data += '</table>';

                    $('#spinner').addClass('uk-hidden');
                    $('#buttonResources').removeClass('uk-hidden');

                    // Display table
                    $('#tabletest').html(table_data);
                }
            });
        }, 3000); // 3 seconds delay
    });
});

document.getElementById("#resources").addEventListener("click", function() {
    var windowContainer = document.getElementById("#windowContainer");
    if (windowContainer.style.display === "none") {
        windowContainer.style.display = "block"; // Show the window
    } else {
        windowContainer.style.display = "none"; // Hide the window
    }
});

