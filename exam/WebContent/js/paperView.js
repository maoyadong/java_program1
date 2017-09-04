	function paperViewInit(){
		//初始化加载考卷名字
		var str=$("input[name='examPaper.title']").val();
		if(str==null||str.trim()==""){
			$(".Previewpagebox").text("请输入试卷名字！");
		}else{
			$(".Previewpagebox").text(str);
		}
		//初始化加载考试范围
		$(".departmentOfPaper").text($(".paperDepartment").find('option:selected').text());
		//初始化加载考试时间
		str=$("input[name='examPaper.answerQuestionTime']").val();
		if(str==null||str.trim()==""||str.trim()=="0"){
			$(".totalTimeOfExamPaper").text("90");
		}else{
			$(".totalTimeOfExamPaper").text(str);
		}
		//初始化加载试卷总分
		str=$("input[name='examPaper.totalPoints']").val();
		if(str==null||str.trim()==""){
			$(".totalScoreOfExamPaper").text("0");
		}else{
			$(".totalScoreOfExamPaper").text(str);
		}
		//初始化加载题目  排序序号
		var index1=1;
		var index2=1;
		var index3=1;
		
		$("#danXuanTi").html("");
		$("#duoXuanTi").html("");
		$("#jianDaTi").html("");
		
		$(".paperSubjects").find("tr").each(function(){
			var typeStr=$(this).find(".type").text();
			if(typeStr!=null&&typeStr.trim()!=""){
				var $subjectContent=$(this).find(".Catalogcontentup").clone();
				var $subject=$($(".quesdiv")[0]).clone();
				$subject.show();
				$subjectContent.show();
				switch(typeStr){
					case "单选":
						$subject.find(".quesindex").text(index1+".");
						index1=index1+1;
						$subject.find(".tiMuTigan").text($subjectContent.find(".stem").text());
						$subject.find(".xuanXiangDiv").append($subjectContent.find("ul").clone());
						$("#danXuanTi").append($subject);
						break;
					case "多选":
						$subject.find(".quesindex").text(index2+".");
						index2=index2+1;
						$subject.find(".tiMuTigan").text($subjectContent.find(".stem").text());
						$subject.find(".xuanXiangDiv").append($subjectContent.find("ul").clone());
						$("#duoXuanTi").append($subject);
						break;
					case "简答":
						$subject.find(".quesindex").text(index3+".");
						index3=index3+1;
						$subject.find(".tiMuTigan").text($subjectContent.find(".stem").text());
						$subject.css("margin-bottom","100px")
						$("#jianDaTi").append($subject);
						break;
				}
			}
		})
	}
	
	$(function(){
		paperViewInit();
	})