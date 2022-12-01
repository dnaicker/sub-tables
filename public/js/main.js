
$(document).ready(function () { 
	$('#table').bootstrapTable('destroy').bootstrapTable({
		data: [
			{id: '1', name: 'test1'},
			{id: '2', name: 'test2'},
			{id: '3', name: 'test3'},
			{id: '4', name: 'test4'},
			{id: '5', name: 'test5'}
		],
		detailView: "true",
		detailViewByClick:"true",
		detailFormatter: function (index, row) {
			var arr = []

			// process fields from credential
			
			arr.push('<div class="form-check form-switch">');
			arr.push('<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">');
			arr.push('<label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>');
			arr.push('</div>');

			return arr.join("");
		},
		columns: [
			{field: 'id', title: 'ID'},
			{field: 'name', title: 'Name'},
			{field: 'sendTo', title: 'Send Credential Proof To', formatter: function(index, row) {
				let arr = [];
				arr.push("<input type='text' class='form-control' id='sendTo' name='sendTo' placeholder='URL'/>");
				return arr.join("");
			}},
			{field: 'proof', title: 'Send Proof', width: '200px', formatter: function(index, row) {
				let arr = [];
				arr.push("<button type='button' class='btn btn-primary' id='send'>Send Credential Proof</button>");
				return arr.join("");
			}},
		],
		toggle: "table"
	});
});
