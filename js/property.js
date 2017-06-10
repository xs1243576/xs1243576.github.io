$(function() {
	var rows = [
        { "name": "姓名", "group": "帐号", "value": "", "editor": "text" },
        { "name": "帐号", "group": "帐号", "value": "", "field": "id", "editor": "text" },
        { "name": "职位", "value": "", "group": "其它", "field": "Role", "editor": { "type": 'combobox', "options": { "valueField": 'value', "textField": 'name', "url": '../../home/GetSelectItems_Role', "required": true}} },
        { "name": "办公电话", "value": "", "group": "其它", "field": "officePhone", "editor": "text" },
        { "name": "移动电话", "group": "其它", "value": "", "field": "mobilePhone", "editor": { "type": 'validatebox', "options": { "required": true}} },
        { "name": "集团短号", "group": "其它", "editor": "text", "value": "", "field": "mobilePhoneShort" },
        { "name": "第二联系方式", "group": "其它", "value": "", "field": "phoneSecond", "editor": { "type": 'validatebox', "options": { "required": true}} },
        { "name": "备注", "group": "其它", "editor": "text", "value": "", "field": "remark" }
    ];
    
	
	$('#dddd').propertygrid({
		width: 298,
        height: 'auto',
        showGroup: true,
        scrollbarSize: 0,
        columns: [[
                { field: 'name', title: 'Name', width: 100, resizable: true },
                { field: 'value', title: 'Value', width: 100, resizable: false }
        ]]

	});
   
	$('#dddd').propertygrid('loadData', rows);
	
	 var s=new Array();
    var ss=new Map();
    ss.push("dd");
    s.add(ss);
    console.log(s);
});
