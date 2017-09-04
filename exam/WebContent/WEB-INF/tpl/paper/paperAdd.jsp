<%@page import="org.apache.struts2.components.Include"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!--引入js -->
<script src="${pageContext.request.contextPath}/js/paperAdd.js"></script>

<div class="editingarea">
	<div class="c_flex">
		<span class="c_flexible"></span>
	</div>
	<div class="Topictitle">添加试卷</div>
	<form id="saveForm" action="/exam/paper/saveExamPaper.action">
		<div class="c_editview">
			<div class="information">
				<div class="informationtop">
					<b style="float: left">试卷名称：</b> <b><input type="text"
						name="examPaper.title" ng-model="pmodel.title"
						style="width: 310px" /></b>
				</div>
				<div class="informationdown">
					<div class="informationdownleft">
						<b style="float: left">试卷说明：</b> <b><textarea
								name="examPaper.description" ng-model="pmodel.desc"></textarea></b>
					</div>

					<div class="clear"></div>
				</div>
				<div class="informationtop">
					<b style="float: left">所属方向：</b> <b> <select
						name="examPaper.department.id" class="paperDepartment"
						ng-model="pmodel.departmentId"
						ng-options="d.id as d.name for d in dps"></select>
					</b>
				</div>
				<div class="informationtop">
					<b style="float: left">考试时间：</b> <b> <input
						name="examPaper.answerQuestionTime" style="text-align: center"
						type="text" ng-model="pmodel.at">分钟
					</b>
				</div>
			</div>
			<div class="c_condition" style="margin-bottom: 10px; margin-top: 5px">
				<b style="float: right"> <span class="pl5">试卷总分：</span> <span
					class="pl5"> <input name="examPaper.totalPoints"
						readonly="readonly" value=0 style="text-align: center" type="text"
						ng-model="pmodel.total" /></span>
				</b> <span class="icon_add" style="float: left"> <em
					class="icon_r" style="float: left"> <a href="#">添加题目</a>
				</em>
				</span> <span class="icon_add" style="float: left"> <em
					class="icon_r" style="float: left"> <a href="#">试卷预览</a>
				</em>
				</span>
			</div>
			<div class="divtable">
				<table width="100%" border="0" cellspacing="0" cellpadding="0"
					class="tab1">
					<thead>
						<tr>
							<th class="tc" width="300"><span>试题描述</span></th>
							<th class="tc"><span>题型</span></th>
							<th class="tc"><span>考核知识点</span></th>
							<th class="tc"><span>认知水平</span></th>
							<th class="tc"><span>分数</span></th>
							<th class="tc"><span>操作</span></th>
						</tr>
					</thead>
					<tbody class="paperSubjects">

						<tr class="emptyInfo">
							<td colspan="6" class="tc" style="align: center">暂无试题</td>
						</tr>
						<!--  <tr ng-repeat="s in pmodel.subjects">
                    <input type="hidden" class="subjectIds" >
                    
                    <td  class="tc stem">java特性有哪些</td>
                    <td class="tc type">多选</td>
                    <td class="tc topic">哪个</td>
                    <td class="tc level"></td>
                    <td class="tc"><input type="text" name="scores" ng-model="pmodel.scores[$index]"/></td>
                    <td class="tc"><div class="Onlinee"><a href="#" class="yioan">天假</a></div></td>
                </tr> -->
					</tbody>
				</table>
			</div>
			<div class="btn_left" style="margin-top: 10px">
				<span class="btnL"><em class="btnR" id="savePaperBtn"
					ng-click="savePaper()">保存</em></span>
			</div>
		</div>
	</form>
</div>

<!-- 试卷列表 点击添加试卷按钮后显示-->
<div class="subjectList" style="display: none">
	<%@include file="subjectList.jsp"%>
</div>

<!-- 试卷预览模块 -   display: none  此模块不会显示-->
<div class="shijuanyulan" style="display: none">
	<%@include file="../../zy/paperView.jsp"%>
</div>

<!-- 测试用模块 -->
<div style="display: none">
	<table>
		<tr class="paperSubjectModel" ng-repeat="s in pmodel.subjects">
			<input type="hidden" class="subjectIds" name="subjectIds">

			<td class="tc stem">java特性有哪些</td>
			<td class="tc type">多选</td>
			<td class="tc topic">哪个</td>
			<td class="tc level"></td>
			<td class="tc"><input style="text-align: center" type="text"
				name="scores" value=0 ng-model="pmodel.scores[$index]" /></td>
			<td class="tc"><div class="Onlinee">
					<a href="javascript:void(0)" class="yioan">天假</a>
				</div></td>

		</tr>

	</table>
</div>

<div class="clear"></div>
