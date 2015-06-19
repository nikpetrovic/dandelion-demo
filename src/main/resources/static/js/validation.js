$(function() {
	var data = [ [ 'Matija', 'Vukomanovic', 'matija.v@live.com' ] ];

	var container = $('#table1')[0];
	var hot = new Handsontable(container, {
		data : data,
		colHeaders : ['First Name', 'Last Name', 'Email'],
		minSpareRows : 1,
		stretchH : 'all',
		columnSorting : true,
		sortIndicator : true
	});
});