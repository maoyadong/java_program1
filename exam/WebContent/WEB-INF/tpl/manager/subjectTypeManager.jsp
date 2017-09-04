<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script type="text/javascript"
	src="frameworks/jquery-2.1.4/jquery.min.js"></script>
<style>
.inputshow {
	text-align: center;
}
</style>
<script
	src="${pageContext.request.contextPath}/js/subjectTypeManager.js"></script>
<div class="editingarea">
	<div class="c_flex">
		<span class="c_flexible"></span>
	</div>
	<div class="c_editview">
		<h3>题型管理</h3>
		<form id="deleteForm" action="/exam/manager/deleteSubjectType.action">
			<div class="divtable">
				<table width="100%" border="0" cellspacing="0" cellpadding="0"
					class="tab1">
					<tr>
						<th width="30" class="tc">选择</th>
						<th class="tc"><span>名称（英文）</span></th>
						<th class="tc" width="300"><span>真实名称（中文）</span></th>
						<th class="tc" width="300"><span>修改</span></th>
					</tr>
					<tbody class="subjecttype">
					</tbody>
				</table>
			</div>
		</form>
		<div class="btn_left" style="margin-bottom: 10px">
			<span class="btnL"><em class="btnR" id="btnadd">添加</em></span> <span
				class="btnL"><em class="btnR" id="btncancel"
				style="display: none">取消</em></span>
			<!--  <span class="btnL"><em class="btnR">修改</em></span> -->
			<span class="btnL"><em class="btnR" id='btndelete'>删除</em></span> <span
				class='btnL'><em class='btnR' id='btnsave'
				style="display: none">保存</em></span>
		</div>
	</div>
</div>
<div class="clear"></div>