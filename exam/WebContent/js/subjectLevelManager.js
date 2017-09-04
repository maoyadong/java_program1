
    $(function(){
    	$.get("/exam/manager/getAllSubjectLevels.action",function(data){
    		$(".subjectLevel").html("");
    		var json=eval("(" + data + ")");
    		for(var i = 0; i < json.length; i++){
    			$(".subjectLevel").append(
    			"<tr>"+
    			"<td class='tc'><input type='checkbox' name='subjectLevelIds' value='"+json[i].id+"'></td>"+
    			"<td class='tc'>"+json[i].name+"</td>"+
    			"<td class='tc'>"+json[i].realName+"</td>"+
    			"<td class='tc'>"+
    			"<span class='btnL'><em class='btnR updateBtn'>修改</em></span>"+
    			"</td>"+
    			"</tr>");
    		}
    		btnInit();
    	})
    })
    
    
function btnInit(){
		//修改表单，默认隐藏
		$("#updateForm").hide();
		//保存表单，默认隐藏
		$("#saveForm").hide();
		//取消按钮，默认隐藏
		$(".celBtn").hide();
		
		//点击修改按钮，修改表单show();
		$(".updateBtn").click(function(){
			clearForm();
			var id=$(this).parents("tr").find("input").val();
		    $("#updateForm").find("input:hidden").val(id);
		    $("#saveForm").hide();
			$("#updateForm").show();
			$(".celBtn").show();
		})
		
		//点击添加按钮，添加表单show();
		$(".addBtn").click(function(){
			clearForm();
			$("#updateForm").hide();
			$("#saveForm").show();
			$(".celBtn").show();
		})
		
		//点击取消按钮，相应表单隐藏
		$(".celBtn").click(function(){
			hideAll();
			clearForm();
		})
		
		//点击删除按钮时提交将要删除的subjectLevel数组 subjectLevel,服务器端应该用long[] subjectLevelId数组接受;
		$(".delBtn").click(function(){
			$.post(  $("#deleteForm").attr("action"),$("#deleteForm").serialize(),function(data){
				hideAll();
				var json = eval("(" + data + ")");
				if(json.msg=="success") {
					$(".editingarea").parents("#right").load("/exam/manager/subjectLevelManagerPage.action");
				}else{
					alert(json.msg);
				}
				
				return false;
			})
			
		})
		
		
		//点击修改按钮时提交将要更新的subjectLevel.id与subjectLevel.name,realName...,
		//服务器端应该用SubjectLevel subjectLevel对象接受;
		$(".toUpdateBtn").click(function(){
			$.post(  $("#updateForm").attr("action"),$("#updateForm").serialize(),function(data){
				hideAll();
				var json = eval("("+data+")");
				
				if(json.msg=="success") {
					$(".editingarea").parents("#right").load("/exam/manager/subjectLevelManagerPage.action");
				}else{
					alert(json.msg);
				}
				
				return false;
			})
		})
		
		//点击修改按钮时提交将要添加的subjectLevel.nama,realName
		//服务器端应该用Department department对象接受;
		$(".toSaveBtn").click(function(){
			$.post(  $("#saveForm").attr("action"),$("#saveForm").serialize(),function(data){
				hideAll();
				var json = eval("("+data+")")
				if(json.msg=="success") {
					$(".editingarea").parents("#right").load("/exam/manager/subjectLevelManagerPage.action");
				}else{
					alert(json.msg);
				}
				
				return false;
			})
		})
		
	}
	
	//清除updateForm与saveForm表单数据
     function clearForm(){
    	 	$("#updateForm").find("textarea").val("");
    	 	$("#updateForm").find("input:hidden").val("");
			$("#saveForm").find("textarea").val("");
			
     }
	//隐藏updateForm与saveForm
     function hideAll(){
    	 $("#updateForm").hide();
		 $("#saveForm").hide();
		 $(".celBtn").hide();
     }
