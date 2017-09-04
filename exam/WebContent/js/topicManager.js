
	$(function() {
		$
		.get(
			"/exam/manager/getAllTopics.action",
			function(data) {
				$(".topic").html("");
				var json = eval("(" + data + ")");
				for (var i = 0; i < json.length; i++) {
					$(".topic")
							.append(
					"<tr>"
					+ "<td class='tc'><input type='checkbox' name='topicIds' value='"+json[i].id+"'></td>"
					+ "<td class='tc'>"
					+ json[i].title
					+ "</td>"
					+ "<td class='tc'>"
					+ json[i].department.name
					+ "</td>"
					+ "<td class='tc'><span class='btnL'><em class='btnR updateBtn'>修改</em></span></td>"
					+ "</tr>");
					}
					btnInit();
			});
	});
	
	$.get("/exam/manager/getAllDepartments.action", function(data) {
		$(".department").html("");
		var json = eval("(" + data + ")");
		for (var i = 0; i < json.length; i++) {
			$(".department").append(
					"<option value='"+json[i].id+"'>" + json[i].name
							+ "</option>");
		}
	});
	
	

	//此处代码请对照修改jsp页面而不要修改js代码部分
	//按键绑定初始化。

	function btnInit() {
		//修改表单，默认隐藏
		$("#updateForm").hide();
		//保存表单，默认隐藏
		$("#saveForm").hide();
		//取消按钮，默认隐藏
		$(".celBtn").hide();

		//点击修改按钮，修改表单show();
		$(".updateBtn").click(function() {
			clearForm();
			var id = $(this).parents("tr").find("input").val();
			$("#updateForm").find("input:hidden").val(id);
			$("#saveForm").hide();
			$("#updateForm").show();
			$(".celBtn").show();
		});

		//点击添加按钮，添加表单show();

		$(".addBtn").click(function() {
			clearForm();
			$("#updateForm").hide();
			$("#saveForm").show();
			$(".celBtn").show();
		});
		//点击取消按钮，相应表单隐藏

		$(".celBtn").click(function() {
			hideAll();
			clearForm();
		})

		//点击删除按钮时提交将要删除的departmentId数组 departmentIds,服务器端应该用long[] departmentIds数组接受;

		$(".delBtn").click(
				function() {
	
					$.post($("#deleteForm").attr("action"), $("#deleteForm")
							.serialize(), function(data) {
						hideAll();
						var json = eval("(" + data + ")");
						if(json.msg=="success") {
							$(".editingarea").parents("#right").load(
							"/exam/manager/topicManagerPage.action"); 
						}else{
							alert(json.msg);
						}
					});

				});

		$(".toUpdateBtn").click(
				function() {

					$.post($("#updateForm").attr("action"), $("#updateForm")
							.serialize(), function(data) {
						hideAll();
						var json = eval("("+data+")");
						if(json.msg=="success") {
							$(".editingarea").parents("#right").load(
							"/exam/manager/topicManagerPage.action"); 
						}else{
							alert(json.msg);
						}
						
					});
				});

		$(".toSaveBtn").click(function() {
			/* 第一种方法
			var obj = {};
			obj['topic.title'] = $(".ti").val();
			obj['topic.department.name'] = $(".dn").val();
			$.post("/exam/manager/saveTopic.action", obj, function() {
				hideAll();
			}); */
			
			
			$.post($("#saveForm").attr("action"),$("#saveForm").serialize(), function(data,status) {
				/* alert(status);
				if(status=="success"){
					data={
							  "id":1,
							  "title":"HTML",
							  "department":{
							    "id":1,
							    "name":"WebUI"
							  }};
				$(".topic")
								.append(
						"<tr>"
						+ "<td class='tc'><input type='checkbox' value='"+data.id+"'></td>"
						+ "<td class='tc'>"
						+ data.title
						+ "</td>"
						+ "<td class='tc'>"
						+ data.department.name
						+ "</td>"
						+ "<td class='tc'><span class='btnL'><em class='btnR updateBtn'>修改</em></span></td>"
						+ "</tr>");
					
					
				hideAll();
				} */
				hideAll();
				
				var json = eval("("+data+")");
				if(json.msg=="success") {
					$(".editingarea").parents("#right").load(
					"/exam/manager/topicManagerPage.action"); 
				}else{
					alert(json.msg);
				}
			});
			
		});
	}

	//清除updateForm与saveForm表单数据
	function clearForm() {
		$("#updateForm").find("textarea").val("");
		$("#updateForm").find("input:hidden").val("");
		$("#saveForm").find("textarea").val("");

	}
	//隐藏updateForm与saveForm
	function hideAll() {
		$("#updateForm").hide();
		$("#saveForm").hide();
		$(".celBtn").hide();
	}

