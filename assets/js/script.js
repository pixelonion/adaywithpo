$(document).ready(function(){
    //alert("I am here.");
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
		  //bind header
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
		//alert(html);
		$('#table_display').append(html);
	  }
	}


/**
 * //bind header
		  if(index == 0) {
			html += '<thead>';
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<th>';
				html += colData;
				html += '</th>';
			});
			html += '</tr>';
			html += '</thead>';
			html += '<tbody>';
		  } else {
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<td>';
				html += colData;
				html += '</td>';
			});
			html += '</tr>';
		  }
 */