
$(function(){
	     //获取数据  
		$.get("/exam/manager/getAllSubjectTypes.action", function(data) {
			$(".subjecttype").html("");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".subjecttype").append(
						"<tr>"+
						"<td class='tc'><input type='checkbox' name='subjectTypeIds' value='"+json[i].id+"'></td>"+
		                "<td class='tc'><input type='text' class='inputshow' disabled='true' value='"+json[i].name+"'></td>"+
		                "<td class='tc'><input type='text' class='inputshow' disabled='true' value='"+json[i].realName+"'></td>"
		                +"<td class='tc'><input type='button' class='modify' value='修改'></td>"
		                +"</tr>");
			}
})
		Init();
	
})

function Init(){
	        
	        //删除按钮
			$("#btndelete").click(function(){
				$.post(  $("#deleteForm").attr("action"),$("#deleteForm").serialize(),function(data){
					var json = eval("(" + data + ")");
					if(json.msg=="success"){
						$(".editingarea").parents("#right").load("/exam/manager/subjectTypeManagerPage.action");
					}else{
						alert(json.msg);
					}
					
					return false;
				}) 
			})
			
			//添加按钮
			$("#btnadd").click(function(){
				$(".subjecttype").append(
						   "<tr>"+
						   "<td class='tc'><input type='checkbox'></td>"+
			                "<td class='tc'><input type='text' name='subjecttype.name' class='inputshow'></td>"+
			                "<td class='tc'><input type='text' name='subjecttype.realName' class='inputshow'></td>"
			                +"<td class='tc'><input type='button' class='modify' value='修改'></td>"
			                +"</tr>"
						);
				$("#btnadd").hide();
				$("#btndelete").hide();
				$("#btncancel").show();
				$("#btnsave").show();
				//禁用
				$(".modify").parents("td").children(".modify").attr("disabled",true);
				
			})
			
			//修改按钮
			$(".editingarea").on('click',".modify",function(){
				
				$(".modify").parents("td").children(".modify").attr("disabled",true);
				
				$(this).parent("td").prev().children("input").attr("disabled",false).attr("name","subjecttype.realName");
				$(this).parent("td").prev().prev().children("input").attr("disabled",false).attr("name","subjecttype.name")
				$(this).parent("td").prev().prev().prev().children("input").attr("name","subjecttype.id");	
				$("#btnadd").hide();
				$("#btndelete").hide();
				$("#btncancel").show();
				$("#btnsave").show();
			})
			
			//保存按钮
			$("#btnsave").click(function(){
				var obj = {};
				
				//获取输入，去掉空格
				obj['subjectType.id']=$("input[name='subjecttype.id']").val();
				obj['subjectType.name']=$("input[name='subjecttype.name']").val().trim();
				obj['subjectType.realName']=$("input[name='subjecttype.realName']").val().trim();
			    
				//判断输入是否合法
				if(obj['subjectType.name']==""||obj['subjectType.realName']==""){
					alert("输入为空！请重新输入");
				}else{
				
				$.post("/exam/manager/saveSubjectType.action",obj,function(event){
					$(".editingarea").parents("#right").load(
					           "/exam/manager/subjectTypeManagerPage.action");
				})
				
				$(".modify").parents("td").children(".modify").attr("disabled",false);
				}
				
			})
			
			//取消按钮
			$("#btncancel").click(function(){
					$(".editingarea").parents("#right").load(
					           "/exam/manager/subjectTypeManagerPage.action");
				
			})	
}
			
