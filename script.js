$(document).ready(function(){
    $('#searchButton').click(function(){
        $.ajax({
            url:"data_front.csv",
            dataType:"text",
            success:function(data){
                var employee_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-bordered table-striped">';
                for(var count = 0; count<employee_data.length; count++){
                    var cell_data = employee_data[count].split(";");
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
                $('#tabletest').html(table_data);
            }
        });
    });
});
