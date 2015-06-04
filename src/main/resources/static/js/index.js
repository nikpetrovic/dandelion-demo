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
		data : getCarData(),
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

	function getCarData() {
		return [ {
			car : "Mercedes A 160",
			price_eur : 7000,
			price_usd : 7000,
			year : 2011
		}, {
			car : "Citroen C4 Coupe",
			price_eur : 8330,
			price_usd : 8330,
			year : 2012
		}, {
			car : "Audi A4 Avant",
			price_eur : 33900,
			price_usd : 33900,
			year : 2013
		}, {
			car : "Audi A4 Avant",
			price_eur : 5000,
			price_usd : 5000,
			year : 2014
		}, {
			car : "BMW 320i Coupe",
			price_eur : 30500,
			price_usd : 30500,
			year : 2015
		} ];
	}
});