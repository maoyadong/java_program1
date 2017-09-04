<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<script src="${pageContext.request.contextPath}/js/subjectLevelManager.js"></script>
   
<div class="editingarea">
    <div class="c_flex"><span class="c_flexible"></span></div>
    <div class="c_editview">
        <h3>难度管理</h3>
        <form id="deleteForm" action="/exam/manager/deleteSubjectLevels.action">
        <div class="divtable">
        
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab1">
                <thead>
                <tr>
                    <th class="tc" width="60" >选择</th>
                    <th class="tc" width="190"><span>名称（英文）</span></th>
                    <th class="tc" width="190" ><span>真实名称（中文）</span></th>
                    <th class="tc" width="190">操作</th>
                </tr>
                </thead>
                <tbody class="subjectLevel"></tbody>
            </table>
        </div>
        </form>
        <div class="btn_left" style="margin-bottom: 10px">
            <span class="btnL"><em class="btnR addBtn">添加</em></span>
            <span class="btnL"><em class="btnR delBtn">删除</em></span>
            <span class="btnL"><em class="btnR celBtn">取消</em></span>
        </div>
        
        
       <form id="saveForm" style="display:none" action="/exam/manager/saveSubjectLevel.action">
       <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab1">
      			 <thead>
                <tr>
                    <th class="tc" width="190"><span>名称（英文）</span></th>
                    <th class="tc" width="190" ><span>真实名称（中文）</span></th>
                    <th class="tc" width="190"><span>操作</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="tc"><textarea name="subjectLevel.name" style="text-align:center" cols="40" rows="1"></textarea></td>
                    <td class="tc"><textarea name="subjectLevel.realName" style="text-align:center" cols="40" rows="1"></textarea></td>
                	<td class="tc" ><span class="btnL"><em class="btnR toSaveBtn">添加</em></span></td>
                </tr>
                </tbody>
         </table>
       </form>
       
       
       
       <form id="updateForm" style="display:none" action="/exam/manager/updateSubjectLevel.action">
        <div class="divtable">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab1">
                <thead>
                <tr>
                	<th class="tc" width="190"><span>名称（英文）</span></th>
                    <th class="tc" width="190" ><span>真实名称（中文）</span></th>
                    <th class="tc" width="190"><span>操作</span></th>
                    
                </tr>
                </thead>
                <tbody >
                <tr>
                    <input type="hidden" name="subjectLevel.id" value=""/>
                    <td class="tc"><textarea name="subjectLevel.name" style="text-align:center" cols="40" rows="1"></textarea></td>
                    <td class="tc"><textarea name="subjectLevel.realName" style="text-align:center" cols="40" rows="1"></textarea></td>
                	<td class="tc" ><span class="btnL"><em class="btnR toUpdateBtn">修改</em></span></td>
                </tr>
                </tbody>
            </table>
        </div>
       </form>
        
        
    </div>
</div>

<div class="clear"></div>
