<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

 <script src="${pageContext.request.contextPath}/js/subjectAdd.js"></script>

<div class="editingarea">
	<div class="c_flex">
		<span class="c_flexible"></span>
	</div>
	<div class="Topictitle">添加题目</div>

	<div class="c_editview">
		<form action="/exam/manager/saveSubject.action">
			<div class="Problem">
				<div class="Attributetit">题目属性</div>
				题目类型 <select name="subject.subjectType.id" class="subjectType"></select>
				 &nbsp;&nbsp; 
				难度级别 <select name="subject.subjectLevel.id" class="subjectLevel"></select>
				&nbsp;&nbsp; 
				所属方向 <select name="subject.department.id" class="department"></select> &nbsp;&nbsp;
				所属知识点 <select name="subject.topic.id" class="subjectTopic"></select> &nbsp;&nbsp;
			</div>
			<div class="Problem">
				<div class="Attributetit">题目题干</div>
				<div class="Problemcontent">
					<textarea name="subject.stem" id="stem" cols="60" rows="4"></textarea>
				</div>
			</div>
			<!--单选视图-->
			<div id="SingleSelect" class="Answeroptions">
				<div class="Attributetit">
					答案选项<em>(通过勾选每个选项下面的框难打开)</em>
				</div>
				<div class="c_condition">
					<span class="icon_add"><em class="icon_r"
						style="float: left">添加选项</em></span>
						<span class="icon_del" style="float: left"><em class="icon_r"
						>减少选项</em></span>
				</div>
				<div class="Answercontent">
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>A</p>
							<span> <input name="singleCorrect"  value="0"
								type="radio" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="singleContent" cols="40" rows="4"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>B</p>
							<span> <input name="singleCorrect"  value="1" 
								type="radio" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="singleContent" cols="40" rows="4"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>C</p>
							<span> <input name="singleCorrect"  value="2" 
								type="radio" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="singleContent" cols="40" rows="4"></textarea>
						</div>

						<div class="clear"></div>
					</div>
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>D</p>
							<span> <input name="singleCorrect"  value="3"
								type="radio" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="singleContent" cols="40" rows="4"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<!--多选视图-->
			<div id="multiSelect" class="Answeroptions">
				<div class="Attributetit">
					答案选项<em>(通过勾选每个选项下面的框打开)</em>
				</div>
				<div class="c_condition">
					<span class="icon_add"><em class="icon_r"
						style="float: left">添加选项</em></span>
						<span class="icon_del" style="float: left"><em class="icon_r"
						>减少选项</em></span>
				</div>
				<div class="Answercontent">
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>A</p>
							<span> <input name="multiCorrect" select-option value="0" 
								type="checkbox" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="multiContent" cols="40" rows="4"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>B</p>
							<span> <input name="multiCorrect" select-option value="1" 
								type="checkbox" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="multiContent" cols="40" rows="4"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>C</p>
							<span> <input name="multiCorrect" select-option value="2" 
								type="checkbox" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="multiContent" cols="40" rows="4"></textarea>
						</div>

						<div class="clear"></div>
					</div>
					<div class="Answerpart">
						<div class="Answerpart_left">
							<p>D</p>
							<span> <input name="multiCorrect" select-option value="3" 
								type="checkbox" /></span>
						</div>
						<div class="Answerpart_right">
							<textarea name="multiContent" cols="40" rows="4"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<!--简答视图-->
			<div  id="shortAnswerQuestion" class="Problem">
				<div class="Attributetit">标准答案</div>
				<div class="Problemcontent">
					<textarea name="subject.answer" cols="60" rows="4"></textarea>
				</div>
			</div>

			<div class="Problem">
				<div class="Attributetit">答案解析</div>
				<div class="Problemcontent">
					<textarea name="subject.analysis" cols="60" rows="4"></textarea>
				</div>
			</div>

			<div class="btn_left">
				<span class="btnL"> <em class="btnR">保存并继续</em>
				</span> <span class="btnL"> <em class="btnR"">保存并关闭</em>
				</span>
			</div>
		</form>
	</div>

</div>