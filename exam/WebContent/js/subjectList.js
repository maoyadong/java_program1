    var obj={};
	obj['subject.subjectType.id']=0;
	obj['subject.subjectLevel.id']=0;
	obj['subject.department.id']=0;
	obj['subject.topic.id']=0;
	obj['simplePageInfo.currentPage']=1;
	
	//异步加载开始
	
	
	$(function() {
		$(".toAction").click(function() {
			var $aWithHref=$(this).find("a");
			$(this).parents("#right").load($aWithHref.attr('href'));
			return false;
		})
		getSubjectTypes();
	})
    function getSubjectTypes(){
		
		 $.get("/exam/manager/getAllSubjectTypes.action", function(data) {
				$(".subjectType").html("<a href='javascript:void(0)'  class='active3'  id=0>全部</a>");
				var json = eval("(" + data + ")");
				for (var i = 0; i < json.length; i++) {
					$(".subjectType").append(
							"<a href='javascript:void(0)'  id="+json[i].id+">" + json[i].realName
									+ "</a>");
				}
				//btnInit();
				getAllSubjectLevels();
			}) 
		
	}
   
	function getAllSubjectLevels(){
		$.get("/exam/manager/getAllSubjectLevels.action", function(data) {
			$(".subjectLevel").html("<a href='javascript:void(0)' class='active3' id=0>全部</a> ");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".subjectLevel").append(
						"<a href='javascript:void(0)' id="+json[i].id+">" + json[i].realName
								+ "</a>");
			}
			//btnInit();
			getAllDepartments();
		}) 
		
	}
	function getAllDepartments(){
		$.get("/exam/manager/getAllDepartments.action", function(data) {
			$(".department").html("<a href='javascript:void(0)' class='active3' id=0>全部</a> ");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".department").append(
						"<a href='javascript:void(0)' id="+json[i].id+">" + json[i].name
						+ "</a>");
			}
			getAllTopics();	
			btnInit();
			subjectRefresh();
		})
		
	}
	
	
	function getAllTopics(){
		
		
		if(obj['subject.department.id']==0){
			
			$(".subjectTopic").html("<a href='javascript:void(0)' class='active3' id=0>全部</a> ");
			/* $.get("/exam/manager/getAllTopics.action", function(data) {
				$(".subjectTopic").html("<a href='javascript:void(0)' class='active3' id=0>全部</a> ");
				var json = eval("(" + data + ")");
				for (var i = 0; i < json.length; i++) {
					$(".subjectTopic").append(
							"<a href='javascript:void(0)' id="+json[i].id+">" + json[i].title
							+ "</a>");
				}
			})  */
		}
		else{
			$.get("/exam/manager/getTopicsbyDepartmentId.action?departmentId="+obj['subject.department.id'], function(data) {
				$(".subjectTopic").html("<a href='javascript:void(0)' class='active3' id=0>全部</a> ");
				var json = eval("(" + data + ")");
				for (var i = 0; i < json.length; i++) {
					$(".subjectTopic").append(
							"<a href='javascript:void(0)' id="+json[i].id+">" + json[i].title
							+ "</a>");
				}
				topicBtnInit();
			}) 
		}
		
	}
	
	//事件绑定

	function btnInit(){
		$(".subjectType").find("a").click(function(){
			$(this).siblings("a").removeClass("active3");
			$(this).addClass("active3");
			obj['subject.subjectType.id']=$(this).attr("id");
			subjectRefresh();
		})
		$(".subjectLevel").find("a").click(function(){
			$(this).siblings("a").removeClass("active3");
			$(this).addClass("active3");
			obj['subject.subjectLevel.id']=$(this).attr("id");
			subjectRefresh();
		})
		$(".department").find("a").click(function(){
			$(this).siblings("a").removeClass("active3");
			$(this).addClass("active3");
			obj['subject.department.id']=$(this).attr("id");
			obj['subject.topic.id']=0;
			getAllTopics();
			subjectRefresh();
		})
		$(".checkState").find("a").click(function(){
			$(this).siblings("a").removeClass("active3");
			$(this).addClass("active3");
			var checkState=$(this).text();
			if(checkState=="全部"){
				checkState=""
			}
			obj['subject.checkState']=checkState;
			subjectRefresh();
		})
		
		
		$("#stemInput").focus();
		//失去焦点的事件...
		$("#stemInput").blur(function(){
			obj['subject.stem']=$(this).val();
			
			subjectRefresh();
		})
		
		//键盘敲下去离开的事件
		
		$("#stemInput").bind("keyup",function(){
			if($(this).val()!=obj['subject.stem']){
				obj['subject.stem']=$(this).val();
				
				subjectRefresh();
			}
			
			
		})
		
	
		/* $("#stemInput").change(function(){
			obj['subject.stem']=$(this).val();
			
			subjectRefresh();
		}) */
	}
	
	function topicBtnInit(){
		$(".subjectTopic").find("a").click(function(){
			$(this).siblings("a").removeClass("active3");
			$(this).addClass("active3");
			obj['subject.topic.id']=$(this).attr("id");
			subjectRefresh();
		})
		
	}
	
	
	//subject容器
	var $subjectContainer=$(".subjectContainer");
	//subject模板，用于复制生成subject
	var $subjectModel=$(".Catalog_rightnei");
	
	var $subjectTitle=$(".Catalogtitle");
	
	
	$subjectModel.hide();
	
	titleBtnInit();
	
	subjectBtnInit();
	var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	//var pageCount=1;
	
	
	//subject刷新
	
	function subjectRefresh(){
		$.post("/exam/manager/getSubjectsByCriteria.action",obj,function(data) {
			/*  $(".subjectTopic").html("<a href='javascript:void(0)' hidden='0'>全部</a> ");
			var json = eval("(" + data + ")");
			for (var i = 0; i < json.length; i++) {
				$(".subjectTopic").append(
						"<a href='javascript:void(0)' hidden="+json[i].id+"'>" + json[i].title
						+ "</a>");
			}  */
			$subjectContainer.html("");
			
			//$subjectContainer.append($subjectTitle);
			
			
			
			var pageInfo= eval("(" + data + ")");
			
			//pageCount=pageInfo.pageCount;
				
			var totalCount=pageInfo.totalCount;
			$("#totalCount").text(totalCount);
			var currentPage=pageInfo.currentPage;
			
			obj['simplePageInfo.currentPage']=currentPage;
			$("#currentPage").text(currentPage);
			var pageCount=pageInfo.pageCount;
			var subjects=pageInfo.models;
			for(var i=0;i<subjects.length;i++){
				var $subject=$subjectModel.clone(true);
				
				$subject.find(".stem").text(subjects[i].stem);
				
				$subject.find(".id").text(subjects[i].id);
				
				$subject.find(".subjectType").text(subjects[i].subjectType.realName);
				
				$subject.find(".subjectLevel").text(subjects[i].subjectLevel.realName);
				
				$subject.find(".checkState").text(subjects[i].checkState);
				
				$subject.find(".user").text(subjects[i].user);
				
				$subject.find(".uploadTime").text(subjects[i].uploadTime);
				
				var choices=subjects[i].choices;
				
				var $choices=$subject.find(".choices");
				
				$choices.html("");
		
				for(var j=0;j<choices.length;j++){
					var c=str.substring(j,j+1);
					$choices.append("<li>"+c+". "+choices[j].content+"</li>");
					if(choices[j].correct)
						$subject.find(".answer").append(c+" ");
				}
				
				$subject.find(".analysis").text(subjects[i].analysis);
				if(subjects[i].subjectType.id==3)
					$subject.find(".answer").text(subjects[i].answer);
				
				$subjectContainer.append($subject);
				
				
				$subject.show();
			}
			showAnswerAndAnalysis();
			//subjectBtnInit();
		}) 
		
	}
	
	
	
	
	//根据选择是否显示答案和解析
	function showAnswerAndAnalysis(){
		if($("#showAnswerBtn").is(":checked")){
			$(".answerAndAnalysis").show();
		}else{
			$(".answerAndAnalysis").hide();
		}
	}
	
	function titleBtnInit(){
		
		$(".pageone").click(function(){
			obj['simplePageInfo.currentPage']=obj['simplePageInfo.currentPage']-1;
			/*if(obj['simplePageInfo.currentPage']<=0){
				obj['simplePageInfo.currentPage']=1;
			}
			alert(obj['simplePageInfo.currentPage']);*/			
			subjectRefresh();
		})
		$(".pagetwo").click(function(){
			obj['simplePageInfo.currentPage']=obj['simplePageInfo.currentPage']+1;
			/*if(obj['simplePageInfo.currentPage']>pageCount){
				obj['simplePageInfo.currentPage']=pageCount;
			}
			alert(obj['simplePageInfo.currentPage']);*/
			subjectRefresh();
		})
		$("#showAnswerBtn").change(function(){
			showAnswerAndAnalysis();
		})
		
	}
	
	function subjectBtnInit(){
		
		
		$(".checkSubject").click(function(){
			
			var $self=$(this);
			
			$.ajax({
		    type:"POST",
		    url:$self.attr("title"),
			data:{
				"subject.id":$self.parents(".Catalog_rightnei").find(".id").text(),
				"subject.checkState":$self.attr("name"),
				
			},
			async:false,
			
			success:function(data){	
				subjectRefresh();	
			}
			})
			return false;
		})
		$(".deleteSubject").click(function(){
			var $self=$(this);
			
			$.ajax(
			{
				
			type:"POST",
			url:$self.attr("title"),
			data:{
				"subject.id":$self.parents(".Catalog_rightnei").find(".id").text(),
				
			},
			async:false,
			success:
					function(data){	
				subjectRefresh();	
			}
			})
			return false;
		})
	} 
	
	
