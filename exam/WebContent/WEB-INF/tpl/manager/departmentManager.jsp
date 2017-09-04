<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<script src="${pageContext.request.contextPath}/js/departmentManager.js"></script>
<div class="editingarea">
	<div class="c_flex">
		<span class="c_flexible"></span>
	</div>
	<div class="c_editview">
		<h3>方向管理</h3>

		<form id="deleteForm" action="/exam/manager/deleteDepartment.action">
			<div class="divtable">
				<table width="100%" border="0" cellspacing="0" cellpadding="0"
					class="tab1">
					<thead>
						<tr>
							<th width="30" class="tc">选择</th>
							<th class="tc" width="340"><span>部门名称</span></th>
							<th class="tc" width="200">操作</th>
						</tr>
					</thead>
					<tbody class="department">

					</tbody>
				</table>
			</div>

		</form>
		<div class="btn_left" style="margin-bottom: 10px">
			<span class="btnL"><em class="btnR addBtn">添加</em></span> 
			<span class="btnL"><em class="btnR delBtn">删除</em></span> 
			<span class="btnL"><em class="btnR celBtn">取消</em></span>
		</div>

		<form id="saveForm" style="display: none"
			action="/exam/manager/saveDepartment.action">
			<div class="divtable">
				<table width="100%" border="0" cellspacing="0" cellpadding="0"
					class="tab1">
					<thead>
						<tr>
							<th class="tc" width="160"><span>部门名称</span></th>
							<th width="200" class="tc">操作</th>

						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="tc"><textarea name="department.name"
									style="text-align: center" cols="60" rows="1"></textarea></td>
							<td class="tc"><span class="btnL"><em
									class="btnR toSaveBtn">添加</em></span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>


		<form id="updateForm" style="display: none"
			action="/exam/manager/updateDepartment.action">
			<div class="divtable">
				<table width="100%" border="0" cellspacing="0" cellpadding="0"
					class="tab1">
					<thead>
						<tr>
							<th class="tc" width="160"><span>部门名称</span></th>
							<th width="200" class="tc">操作</th>

						</tr>
					</thead>
					<tbody>
						<tr>
							<input type="hidden" name="department.id" value="" />
							<td class="tc"><textarea name="department.name"
									style="text-align: center" cols="60" rows="1"></textarea></td>
							<td class="tc"><span class="btnL"><em
									class="btnR toUpdateBtn">修改</em></span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>
	</div>
</div>
<div class="clear"></div>