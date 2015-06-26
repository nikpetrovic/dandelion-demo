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

	var hot1 = initTable(colHeaders1, colDefs1, {}, "table1");

	$.getJSON('../json/ut_for_auflage_id_eq_3182.json', function(data) {
		hot1.loadData(data);
	});

	var colHeaders2 = [ "ISO", "", "HTC", "CC" ];
	var colDefs2 = [ {
		data : "iso_3stellig"
	}, {
		data : "selektiert"
	}, {
		data : "htc_yn"
	}, {
		data : "cc"
	} ];

	var hot2 = initTable(colHeaders2, colDefs2, {}, "table2", function(row,
			col, prop) {
		if (col === 1) {
			return {
				className : "htCenter"
			};
		}
	});

	$.getJSON('../json/ut_landcode_for_utId_eq_66900.json', function(data) {
		hot2.loadData(data);
	});

	var types = new Bloodhound({
		datumTokenizer : Bloodhound.tokenizers.whitespace,
		queryTokenizer : Bloodhound.tokenizers.whitespace,
		prefetch : '../json/typen.json'
	});

	// $("#prefetch .typeahead").typeahead(null, {
	// name : 'types',
	// display : 'hersteller',
	// source : types
	// });
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
		readOnly : true,
		fixedRowsBottom : 1,
		cells : cellsCallback,
		afterSelectionEnd : afterSelection
	});

	return hot;
}

function afterSelection(startRow, startColumn, endRow, endColumn) {
	$("#table1Selected").text("Selected: " + startRow);
}