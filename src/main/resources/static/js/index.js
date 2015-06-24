$(function() {
	var container = document.getElementById('table1');
	var hot = new Handsontable(container, {
		colHeaders : [ 'Car', 'Year', 'Price ($)', 'Price (€)' ],
		columns : [ {
			data : 'car'
		}, {
			data : 'year',
			type : 'numeric'
		}, {
			data : 'price_usd',
			type : 'numeric',
			format : '$0,0.00',
			language : 'en' // this is the default locale, set up for USD
		}, {
			data : 'price_eur',
			type : 'numeric',
			format : '0,0.00 $',
			language : 'de' // more locales available on numeraljs.com
		} ],
		page : {
			limit : 2
		},
		columnSorting : true,
		manualColumnResize : true,
		stretchH : 'all',
		minSpareRows : 1,
		rowHeaders : true,
		colHeaders : true,
		contextMenu : true,
		currentRowClassName : 'currentRow',
		currentColClassName : 'currentCol'
	});

	
	$.getJSON("/json/cars.json", function(data) {
		hot.loadData(data);
	});
});