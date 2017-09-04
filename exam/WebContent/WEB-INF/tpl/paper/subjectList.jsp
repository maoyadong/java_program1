<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
.Catalogcontentup ul {
	margin: 15px;
}

.Catalogcontentup ul li {
	line-height: 22px;
}

.selected {
	background-color: #DCDCDC;
	color: #ffffff;
}
</style>

<script
	src="${pageContext.request.contextPath}/js/subjectListOfPaper.js"></script>

<div class="editingarea">
	<div class="c_flex">
		<span class="c_flexible"></span>
	</div>
	<div class="c_editview">
		<div class="c_condition">
			<span><select><option>题干</option></select></span> <span class="pl5 "><input
				id="stemInput" type="text"></span>
		</div>
		<div class="divtable">
			<table width="100%" border="0" cellspacing="0" cellpadding="0"
				class="tablea">
				<tr>
					<td align="center" style="width: 50px;">题型</td>
					<td align="left">
						<div class="subjectType chose">
							<a href="javascript:void(0)">全部</a>
						</div>
					</td>
				</tr>
				<tr>
					<td align="center">难度</td>
					<td align="left">
						<div class="subjectLevel chose">
							<a href="javascript:void(0)">全部</a>
						</div>
					</td>
				</tr>
				<tr>
					<td align="center">方向</td>
					<td align="left">
						<div class="department chose">
							<a href="javascript:void(0)">全部</a>
						</div>
					</td>
				</tr>
				<tr>
					<td align="center">知识点</td>
					<td align="left">
						<div class="subjectTopic chose">
							<a href="javascript:void(0)">全部</a>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="Catalog">

			<div class="Catalog_right">
				<div class="Catalogtitle">
					总计<em id="totalCount">totalCount</em>道题&nbsp;&nbsp;
					提示：单击体面可显示答案和解析&nbsp;&nbsp; <input id="showAnswerBtn"
						type="checkbox" ng-model="isShow" /><b>显示答案和解析</b>&nbsp;&nbsp;
					<div>
						<i id="currentPage">currentPage</i><a href="javascript:void(0)"
							class="pageone">前</a><a href="javascript:void(0)" class="pagetwo">后</a>
					</div>
				</div>
			</div>
			<div class="Catalog_rightnei" ng-repeat="subject in subjects">
				<div class="Catalogtitwo">
					<b>题号：</b><span class="id">3</span>&nbsp;&nbsp; <b>题型：</b><span
						class="subjectType">单选</span>&nbsp;&nbsp; <b>难度：</b><span
						class="subjectLevel">中等</span>&nbsp;&nbsp; <b>审核状态：</b><span
						class="checkState" style="color: red">未审核</span>&nbsp;&nbsp; <b>上传人：</b><span
						class="user">王江涛</span>&nbsp;&nbsp; <b>上传时间:</b><span
						class="uploadTime">2018-08-24</span>&nbsp;&nbsp; <b class="topic"
						style="display: none"></b>
				</div>
				<div class="Catalogcontent">
					<div class="Catalogcontentup">
						<!--题干-->
						<div style="margin-top: 10px">
							<b class="stem">java的特性不包括哪项</b>
						</div>

						<!--题目选项-->
						<ul class="choices">
							<li ng-repeat="choice in subject.choices">A 继承</li>
							<li ng-repeat="choice in subject.choices">B 封装</li>

							<li ng-repeat="choice in subject.choices">C 多态</li>

							<li ng-repeat="choice in subject.choices">D 面向过程</li>
						</ul>
						<div class="answerAndAnalysis" ng-show="isShow">
							<b>正确答案：</b> <span class="answer">D</span> <br>
							<br> <b>答案解析：</b> <span class="analysis">很明显不对</span>
						</div>
					</div>
					<div class="Catalogcontentdown">
						<a href="javascript:void(0)" class="addSubjectBtn">加入试卷</a>
					</div>
				</div>
			</div>

			<div class="subjectContainer">


				<div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</div>