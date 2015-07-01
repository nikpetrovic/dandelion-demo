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

	var hot1 = MyProject.Commons.initTable(colHeaders1, colDefs1, {}, "table1");

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

	var hot2 = MyProject.Commons.initTable(colHeaders2, colDefs2, {}, "table2", function(row, col, prop) {
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
		datumTokenizer : Bloodhound.tokenizers.obj.whitespace('rf', 'hersteller', 'haupttyp', 'baumuster'),
		queryTokenizer : Bloodhound.tokenizers.whitespace,
		prefetch : '../json/typen.json'
	});

	 function fetchDataWithDefaults(q, sync) {
		if (q === '') {
			sync(types.all());
		} else {
			types.search(q, sync);
		}
	}

	$("#prefetch .typeahead")
			.typeahead(
					{
						hint : true,
						highlight : true,
						minLength : 0
					},
					{
						name : 'types',
						source : fetchDataWithDefaults,
						limit : 10,
						display : Handlebars.compile('{{rf}} {{hersteller}} {{haupttyp}} {{baumuster}}'),
						templates : {
							empty : [ '<div class="empty-message">', 'Unable to find any results that match the current query',
									'</div>' ].join('\n'),
							suggestion : Handlebars.compile('<div>{{rf}} {{hersteller}} {{haupttyp}} {{baumuster}}</div>')
						}
					});
	
	
	$("#typeAdministrationMenuItem").on("click", function(e) {
		$("#typeAdministrationModal").modal("show");
	});
	$("#typeAdministrationModal").on("shown.bs.modal", function(e) {
		hot3 = MyProject.Commons.initTable(colHeaders3, colDefs3, {}, "tblSubmodelsDetails");
	});
	$("#typeAdministrationModal").on("hidden.bs.modal", function(e) {
		hot3.destroy();
		hot3 = {};
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