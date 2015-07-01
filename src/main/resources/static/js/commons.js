if (typeof MyProject == 'undefined') {
	var MyProject = {};
}

MyProject.Commons = new function() {
	return {
		initTable : function(colHeaders, colDefs, data, elementId, cellsCallback, afterSelection) {
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
				cells : cellsCallback,
				afterSelectionEnd : afterSelection
			});

			return hot;
		}
	}
}