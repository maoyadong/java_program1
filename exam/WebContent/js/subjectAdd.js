
	$(function() {
		$.get("/exam/manager/getAllSubjectTypes.action", function(data) {
			$(".subjectType").html("");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".subjectType").append(
						"<option value='"+json[i].id+"'>" + json[i].realName
								+ "</option>");
			}
		})
		$.get("/exam/manager/getAllSubjectLevels.action", function(data) {
			$(".subjectLevel").html("");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".subjectLevel").append(
						"<option value='"+json[i].id+"'>" + json[i].realName
								+ "</option>");
			}
		})
		$.get("/exam/manager/getAllDepartments.action", function(data) {
			$(".department").html("");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".department").append(
						"<option value='"+json[i].id+"'>" + json[i].name
								+ "</option>");
			}
			$.get("/exam/manager/getTopicsbyDepartmentId.action?departmentId="
					+ $(".department option:selected").val(), function(
					data) {
				$(".subjectTopic").html("");
				var json = eval("(" + data + ")");
				for (var i = 0; i < json.length; i++) {
					$(".subjectTopic").append(
							"<option value='"+json[i].id+"'>" + json[i].title
									+ "</option>");
				}
			})
		})

		$(".department").click(
				function() {
					$.get(
							"/exam/manager/getTopicsbyDepartmentId.action?departmentId="
									+ $(".department option:selected").val(), function(data) {
								$(".subjectTopic").html("");
								var json = eval("(" + data + ")");
								for (var i = 0; i < json.length; i++) {
									$(".subjectTopic").append(
											"<option value='"+json[i].id+"'>"
													+ json[i].title
													+ "</option>");
								}
							})
				})

		$("#multiSelect").hide();
		$("#SingleSelect").show();
		$("#shortAnswerQuestion").hide()

		$(".subjectType").click(function() {
			var id = $(this).find("option:selected").val();

			if (Number(id) == 1) {
				$("#multiSelect").hide();
				$("#SingleSelect").show();
				$("#shortAnswerQuestion").hide()
			} else if (Number(id) == 2) {
				$("#multiSelect").show();
				$("#SingleSelect").hide();
				$("#shortAnswerQuestion").hide()
			} else {
				$("#multiSelect").hide();
				$("#SingleSelect").hide();
				$("#shortAnswerQuestion").show()
			}
		})

		$(".btnR").click(
				function() {
					var text=$(this).text();
					//题目题干不能为空
					if($("#stem").val().trim()==""){
						alert("题目题干为空！");
						return;
					}
					//对于选择题，选项不能为空
					switch($(".subjectType").find("option:selected").text().trim()){
						case "单选":
							var $answers = $("#SingleSelect").find("textarea");
							for (var i = 0; i < $answers.length; i++) {
								if($($answers[i]).val().trim()=="") {
									alert("有选项为空！");
									return;
								}
							}
							var $corrects = $("#SingleSelect").find("input[name='singleCorrect']:checked");
							if($corrects.length<=0) {
								alert("没有选项被选中");
								return;
							}
							break;
						case "多选":
							var $answers = $("textarea[name='multiContent']");
							for (var i = 0; i < $answers.length; i++) {
								if($($answers[i]).val().trim()=="") {
									alert("有选项为空！");
									return;
								}
							}
							var $corrects = $("#multiSelect").find("input[name='multiCorrect']:checked");
							if($corrects.length<=0) {
								alert("没有选项被选中");
								return;
							}
							break;
						case "简答":
							//标准答案不能为空
							if($("textarea[name='subject.answer']").val().trim()==""){
								alert("标准答案为空！")
								return;
							}
					}
					//解析不能为空
					if($("textarea[name='subject.analysis']").val().trim()==""){
						alert("解析为空！")
						return;
					}
					 $.post("/exam/manager/saveSubject.action", $("form").serialize(), function(data) {
							var json=eval("("+data+")");
							if(json.msg=="success"){
								if (text == "保存并继续") {
									$(".editingarea").parents("#right").load(
											"/exam/subject/subjectAddPage.action");
								} else {
									$(".editingarea").parents("#right").load(
											"/exam/subject/subjectListPage.action");
								}
							}else{
								alert(json.msg);
							}
						})
					 
				})
					

	})
	
	
	var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var singleNow=3;
	var multiNow=3;
	$(function(){
		$("#SingleSelect .icon_add").click(function(){
			
			if(singleNow==25){
				return false;
			}
			singleNow++;
			
			var $option=$(this).parents(".Answeroptions").find(".Answercontent").find(".Answerpart:first").clone();
			$option.find("p").text(str.substring(singleNow,singleNow+1));
			$option.find("span>input").val(singleNow);
			$(this).parents(".Answeroptions").find(".Answercontent").append($option);
		})
		
		
		$("#multiSelect .icon_add").click(function(){
			
			if(multiNow==25){
				return false;
			}
			multiNow++;
			
			var $option=$(this).parents(".Answeroptions").find(".Answercontent").find(".Answerpart:first").clone();
			$option.find("p").text(str.substring(multiNow,multiNow+1));
			$option.find("span>input").val(multiNow);
			$(this).parents(".Answeroptions").find(".Answercontent").append($option);
		})
		
		$("#SingleSelect .icon_del").click(function(){
			if(singleNow==1){
				return false;
			}
			singleNow--;
			
			$(this).parents(".Answeroptions").find(".Answercontent").find(".Answerpart:last").remove();
		})
		
		$("#multiSelect .icon_del").click(function(){
			if(multiNow==1){
				return false;
			}
			multiNow--;
			
			$(this).parents(".Answeroptions").find(".Answercontent").find(".Answerpart:last").remove();
		})
		$(".icon_del").trigger("click");
		$(".icon_del").trigger("click");
		$(".icon_add").trigger("click");
		$(".icon_add").trigger("click");
	});
	
