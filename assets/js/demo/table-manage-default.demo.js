/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 5
Version: 5.2.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var handleDataTableDefault = function() {
	"use strict";
    
	if ($('#data-table-default').length !== 0) {
		$('#data-table-default').DataTable({
			responsive: true
		});
	};
	if ($('#data-table-default2').length !== 0) {
		$('#data-table-default2').DataTable({
			responsive: true
		});
	};
	if ($('#data-table-default3').length !== 0) {
		$('#data-table-default3').DataTable({
			responsive: true
		});
	};
	if ($('#data-table-default4').length !== 0) {
		$('#data-table-default4').DataTable({
			responsive: true
		});
	}
};

var TableManageDefault = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleDataTableDefault();
		}
	};
}();


$(document).ready(function() {
	TableManageDefault.init();
});