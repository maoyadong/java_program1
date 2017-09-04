<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<script src="${pageContext.request.contextPath}/js/paperManager.js"></script>

<div class="editingarea">
    <div class="c_flex"><span class="c_flexible"></span></div>
    <div class="c_editview">
	<h3>试卷列表</h3>
	    <form id="deleteForm" action="/exam/paper/deleteExamPapers.action">
           <div class="divtable">
               <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab1">
                <thead>
                 <tr>
                     <th width="30" class="tc">选择</th>
                     <th class="tc"><span>试题名称</span></th>
                     <th class="tc" width="300" ><span>试题描述</span></th>
                     <th class="tc"><span>所属方向</span></th>
                     <th class="tc"><span>创建时间</span></th>
                     <th class="tc"><span>答题时间</span></th>
                     <th class="tc"><span>总分</span></th>
                     <th class="tc"><span>预览</span></th>
                 </tr>
                </thead>
                 <tbody class="examPaper">
                 <!-- <tr ng-repeat="paper in papers">
                    <td class="tc"><input type="checkbox"></td>
                    <td class="tc">{{paper.title}}</td>
                    <td class="tc">{{paper.description}}</td>
                    <td class="tc">{{paper.department.name}}</td>
                    <td class="tc">{{paper.createTime}}</td>
                    <td class="tc">{{paper.answerQuestionTime}}h</td>
                    <td class="tc">{{paper.totalPoints}}</td>
                 </tr> -->
        
                </tbody>
            </table>
          </div>
        </form>
        
        
        
        <div class="btn_left" style="margin-bottom:30px">
            <span class="btnL"><em class="btnR delBtn">删除</em></span>
            <span class="btnL"><em class="btnR cancelShowBtn"  style="display:none">取消预览</em></span>
        </div>

        <div class="shiJuanRongQi" style="display:none">
        	<%@include file="../../zy/paperManagerView.jsp" %>
		</div>
    </div>
</div>

<div>
<div class="clear"></div>
</div>

