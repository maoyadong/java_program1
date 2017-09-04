$(function() {

	$(".icon_add").click(function() {
		// $(this).hide();
		// var $aWithHref=$(this).find("a");
		// $(".subjectList").load($aWithHref.attr('href'));

		switch ($(this).find("a").text()) {
		case "添加题目":
			// alert("添加题目");
			$(".subjectList").show();
			$(".shijuanyulan").hide();
			break;
		case "试卷预览":
			// alert("试卷预览");
			$(".subjectList").hide();
			$(".shijuanyulan").show();
			paperViewInit();
			break;
		}
		return false;
	})

	$.get("/exam/manager/getAllDepartments.action", function(data) {
		$(".paperDepartment").html("");
		var json = eval("(" + data + ")");
		for (var i = 0; i < json.length; i++) {
			$(".paperDepartment").append(
					"<option value='" + json[i].id + "'>" + json[i].name
							+ "</option>");
		}

	})

	paperSubjectBtnInit();
	paperViewBtnInit();
});

function sumScores() {

	var totalScores = 0;
	$inputScores = $("input[name='scores']");
	var subjectCount = $inputScores.length;

	//因为这里已经有了一个测试模块
	if (subjectCount <= 1) {
		$(".emptyInfo").show();
	} else {
		$(".emptyInfo").hide();
	}

	$inputScores.each(function() {

		totalScores = totalScores + Number($(this).val());
	});
	// 添加总分
	$("input[name='examPaper.totalPoints']").val(totalScores);
	// 试卷预览里的总分
	$(".totalScoreOfExamPaper").text(totalScores);
}

var oldValue = 0;

function paperSubjectBtnInit() {
	$("#savePaperBtn").click(
			function() {
				if ($("input[name='examPaper.title']").val().trim() == ""
						|| $("textarea[name='examPaper.description']").val()
								.trim() == "") {
					alert("试卷名称或试卷说明为空！");
				} else if ($("input[name='examPaper.answerQuestionTime']")
						.val().trim() == "0"
						|| $("input[name='examPaper.answerQuestionTime']")
								.val().trim() == "") {
					alert("请设置考试时间！");
				} else {
					$.post($("#saveForm").attr("action"), $("#saveForm")
							.serialize(), function(data, status) {
						var json = eval("(" + data + ")");
						if (json.msg.trim() == "success") {
							alert("添加成功！");
							$(".editingarea").parents("#right").load(
									"/exam/paper/paperAddPage.action");
						} else {
							alert("添加失败，有必要数据为空！")
						}
					})
				}
			})

	$(".yioan").click(function() {
		$(this).parents(".paperSubjectModel").remove();
		paperViewInit();
		sumScores();
	});
	inputOnlyNumber("scores");
	inputOnlyNumber("examPaper.answerQuestionTime");
}


//对数字进行统一处理
function inputOnlyNumber(inputName) {

	$("input[name='" + inputName + "']").bind("keyup", function() {
		// 特殊字符不能输入，否则一直为0
		if (!$(this).val().match(/^(\d+(\.\d+)?)?$/)) {
			$(this).val(oldValue);
		} else {
			oldValue = $(this).val();
			sumScores();
		}

	})
	
	//获取焦点时文本框的值是上次输入的值
	$("input[name='" + inputName + "']").focus(function() {
		oldValue = $(this).val();
	});

	//失去焦点时判断文本框中是否是空的，如果为空的则输入有一个0
	$("input[name='" + inputName + "']").blur(function() {
		if ($(this).val().trim() == '') {
			$(this).val(0);
		}
	});
}

// 以下为关于试卷预览的功能的js

function paperViewBtnInit() {
	// 动态修改试卷名称
	$("input[name='examPaper.title']").focus();
	// 失去焦点的事件...
	$("input[name='examPaper.title']").blur(function() {
		var str = $(this).val();
		if (str == null || str.trim() == "") {
			$(".Previewpagebox").text("请输入试卷名字！");
		} else {
			$(".Previewpagebox").text(str);
		}
	})
	$("input[name='examPaper.title']").bind("keyup", function() {
		var str = $(this).val();
		if (str == null || str.trim() == "") {
			$(".Previewpagebox").text("请输入试卷名字！");
		} else {
			$(".Previewpagebox").text(str);
		}
	})
	
	// 动态修改考试范围
	$(".paperDepartment").click(function() {
		$(".departmentOfPaper").text($(this).find('option:selected').text());
	})

	// 动态修改考试时间
	//如果失去焦点，且输入框中没有数字或者数字为0 则自动给输入框中赋值为90
	$("input[name='examPaper.answerQuestionTime']").blur(function() {
		var str = $(this).val();
		if (str == null || str.trim() == "" || str.trim() == "0") {
			$(".totalTimeOfExamPaper").text("90");
		} else {
			$(".totalTimeOfExamPaper").text(str);
		}
	})
	$("input[name='examPaper.answerQuestionTime']").bind("keyup", function() {
		var str = $(this).val();
		if (str == null || str.trim() == "" || str.trim() == "0") {
			$(".totalTimeOfExamPaper").text("90");
		} else {
			$(".totalTimeOfExamPaper").text(str);
		}
	})
	// 动态修改考试总分
	// 在计算总分刷新时候同步刷新
}
