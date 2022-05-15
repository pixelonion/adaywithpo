$(document).ready(function(){
    var data;
	$.ajax({
	  type: "GET",  
	  url: "https://raw.githubusercontent.com/eybirdy/adaywithpo/master/data/data.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		generateHtmlTable(data);
	  }   
	});
});

function generateHtmlTable(data) {
    var html = '<table class="display">';
    html += '<tr><th>Name</th><th>Gender</th><th>ID</th></tr>';
      if(typeof(data[0]) === 'undefined') {
        return null;
      } else {
		$.each(data, function( index, row ) {
			//For each data row, append based on values
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<td>';
				html += colData;
				html += '</td>';
			});
			html += '</tr>';
		});
		html += '</tbody>';
		html += '</table>';
		$('#table_display').append(html);
	  }
}