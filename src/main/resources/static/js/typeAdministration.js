var hot3 = {};
var colHeaders3 = {};
var colDefs3 = {};

$(function() {
	$("#startDate").datetimepicker({
		locale : 'en',
		widgetPositioning : {
			horizontal : 'right'
		}
	});

	$("#endDate").datetimepicker({
		locale : 'en',
		widgetPositioning : {
			horizontal : 'right'
		}
	});

	$("#startDate").on("dp.change", function(e) {
		$('#endDate').data("DateTimePicker").minDate(e.date);
	});
	$("#endDate").on("dp.change", function(e) {
		$('#startDate').data("DateTimePicker").maxDate(e.date);
	});

	colHeaders3 = [ "Edition", "Completion Date", "Parts Data Source", "DDC", "Different Model Code", "Dev Parts 1",
			"Dev Parts 2", "Dev Parts 3", "Dev Labour 1", "Dev Labour 2", "Dev Labour 3" ];
	colDefs3 = [ {
		data : "edition"
	}, {
		data : "completionDate"
	}, {
		data : "partsDataSource"
	}, {
		data : "ddc"
	}, {
		data : "differentModelCode"
	}, {
		data : "devParts1"
	}, {
		data : "devParts2"
	}, {
		data : "devParts3"
	}, {
		data : "devLabour1"
	}, {
		data : "devLabour2"
	}, {
		data : "devLabour3"
	} ];

	// hot3 = MyProject.Commons.initTable(colHeaders3, colDefs3, {},
	// "tblSubmodelsDetails");

});