
	
		$(function(){
			$.get("/exam/paper/getAllPapers.action",function(data){
				$(".examPaper").html("");
				var json=eval("( "+data+" )") ;
				for(var i = 0; i < json.length; i++)
					$(".examPaper").append(
					  "<tr>"+
					  "<td class='tc'><input type='checkbox' name='examPaperIds' value='"+json[i].id+"'></td>"+
					  "<td class='tc'>"+json[i].title+"</td>"+
					  "<td class='tc'>"+json[i].description+"</td>"+
					  "<td class='tc'>"+json[i].department.name+"</td>"+
					  "<td class='tc'>"+json[i].createTime+"</td>"+
					  "<td class='tc'>"+json[i].answerQuestionTime+"</td>"+
					  "<td class='tc'>"+json[i].totalPoints+"</td>"+
					  "<td class='tc'><input type='button' class='yulanshijuan' value='试卷预览'></td>"+
					  "</tr>");
				btnInit();
				
			})
		})
		
		
		function btnInit(){
			$(".delBtn").click(function(){
				$.post( $("#deleteForm").attr("action"),$("#deleteForm").serialize(),function(data){
					$(".editingarea").parents("#right").load("/exam/paper/paperManagerPage.action");
					return false;
				})
			})
			
			$(".cancelShowBtn").click(function(){
				$(".shiJuanRongQi").hide();
				$(".cancelShowBtn").hide();
			})
			
			$(".yulanshijuan").click(function(){
				$(".shiJuanRongQi").show();
				$(".cancelShowBtn").show();
				$.getJSON("/exam/paper/getSubjectsByPaperId.action",{"examPaperId":$(this).parents("tr").find("input").eq(0).val()},function(data){
					//初始化考试试卷题目
					$(".Previewpagebox").text(data.title);
					//初始化考试方向
					$(".departmentOfPaper").text(data.department.name);
					//初始化考试时间
					$(".totalTimeOfExamPaper").text(data.answerQuestionTime);
					//初始化考试总分
					$(".totalScoreOfExamPaper").text(data.totalPoints);
					//初始化加载题目
					var index1=1;
					var index2=1;
					var index3=1;
					$("#danXuanTi").html("");
					$("#duoXuanTi").html("");
					$("#jianDaTi").html("");
					var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					//遍历题目
					var paperSubjects=data.paperSubjects;
					for(var i=0;i<paperSubjects.length;i++){
						//获取题目
						var subject=paperSubjects[i].subject;
						//获取模板
						var $subject=$($(".quesdiv")[0]).clone();
						$subject.show();
						//先获取题目类型
						var typeId=subject.subjectType.id;
						switch(Number(typeId)){
							case 1:
								//题目序号
								$subject.find(".quesindex").text(index1+".");
								index1=index1+1;
								//题目题干
								$subject.find(".tiMuTigan").text(subject.stem);
								//添加选项
								var choices=subject.choices;
								var $choices=$subject.find(".choices");
								for(var j=0;j<choices.length;j++){
									$choices.append("<li>"+str.substring(j,j+1)+". "+choices[j].content+"</li>");
								}
								$("#danXuanTi").append($subject);
								break;
							case 2:
								$subject.find(".quesindex").text(index2+".");
								index2=index2+1;
								$subject.find(".tiMuTigan").text(subject.stem);
								//添加选项
								var choices=subject.choices;
								var $choices=$subject.find(".choices");
								for(var j=0;j<choices.length;j++){
									$choices.append("<li>"+str.substring(j,j+1)+". "+choices[j].content+"</li>");
								}
								$("#duoXuanTi").append($subject);
								break;
							case 3:
								$subject.find(".quesindex").text(index3+".");
								index3=index3+1;
								$subject.find(".tiMuTigan").text(subject.stem);
								$subject.css("margin-bottom","100px")
								$("#jianDaTi").append($subject);
								break;
						}
					}
				})
							
			})
		}
	
