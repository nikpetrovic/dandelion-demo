$(function() {
	var colHeaders1 = [ "Type", "Ident", "Submodel", "HTC", "Nav-ID", "UT" ];
	var colDefs1 = [ {
		data : "type"
	}, {
		data : "ident"
	}, {
		data : "submodel"
	}, {
		data : "htc"
	}, {
		data : "navId"
	}, {
		data : "ut"
	} ];
	var data1 = [ {
		type : "",
		ident : "",
		submodel : "",
		htc : "",
		navId : "",
		ut : ""
	} ];

	var hot1 = initTable(colHeaders1, colDefs1, {}, "table1");
	
	$.getJSON('../json/ut_for_auflage_id_eq_3182.json', function(data) {
		hot1.loadData(data);
	});

	var colHeaders2 = [ "ISO", "", "HTC", "CC" ];
	var colDefs2 = [ {
		data : "iso"
	}, {
		data : "availability"
	}, {
		data : "htc"
	}, {
		data : "cc"
	} ];
	var data2 = [ {
		iso : "INT",
		availability : "X",
		htc : "",
		cc : ""
	}, {
		iso : "AGO",
		availability : "",
		htc : "",
		cc : ""
	} ];

	var hot2 = initTable(colHeaders2, colDefs2, data2, "table2", function(row,
			col, prop) {
		if (col === 1) {
			return {
				className : "htCenter"
			};
		}
	});

});

function headerRendererBlue(instance, td, row, col, prop, value, cellPropertis) {
	Handsontable.renderers.TextRenderer.apply(this, arguments);
	td.style.fontWeight = 'bold';
	td.style.color = 'white';
	td.style.background = '#045ab0';
}

function headerRendererGreen(instance, td, row, col, prop, value, cellPropertis) {
	Handsontable.renderers.TextRenderer.apply(this, arguments);
	td.style.fontWeight = 'bold';
	td.style.color = 'green';
	td.style.background = '#CEC';
}

function initTable(colHeaders, colDefs, data, elementId, cellsCallback) {
	var container = document.getElementById(elementId);
	var hot = new Handsontable(container, {
		data : data,
		columnSorting : true,
		stretchH : 'all',
		colHeaders : colHeaders,
		columns : colDefs,
		contextMenu : true,
		currentRowClassName : 'currentRow',
		currentColClassName : 'currentCol',
		cells : cellsCallback,
		afterSelectionEnd : afterSelection
	});

	return hot;
}

function afterSelection(startRow, startColumn, endRow, endColumn) {
	$("#table1Selected").text("Selected: " + startRow);
	console.log(startRow)
}