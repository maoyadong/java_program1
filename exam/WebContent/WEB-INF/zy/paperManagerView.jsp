<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%-- <script src="${pageContext.request.contextPath}/js/paperView.js"></script> --%>

<div class="editingarea">
   	<div class="c_editview">
          <div class="Previewpage">
              <div class="Previewpage_right" style="margin-left: 0px;">
                 <div class="Previewpage_rightleft"></div>
                 <div class="Previewpage_rightwo">
                     <div class="Previewpage_btn"><!-- <a href="#" class="Analysis">分析</a>--></div> 
                     <div class="Previewpagebox">考卷名字</div>
                     <div class="Previewpagefabu">考试范围：<span class='departmentOfPaper'>方向</span>
                     					&nbsp;&nbsp;考试时间：<span class='totalTimeOfExamPaper'></span>分钟
                     					&nbsp;&nbsp;总分：<span class='totalScoreOfExamPaper'></span>
                     					</div>
                     <div class="Previewpagebox2" style="margin-bottom:10px")><p>注意事项</p><div style="margin-left:30px"><p>1、请不要作弊！！！</p><p>2、请不要作弊！！！</p><p>3、请不要作弊！！！</p></div></div>
                     <div class="Previewpagebox3">                     
                           <div class="Previewpagecontentone">
                               <div class="Previewpagetable">
                                     <table title="评分栏" border="1" cellpadding="0" cellspacing="0" bordercolor="#666666" style="border: 1px solid rgb(102, 102, 102);;">
                                         <tbody>
                                         <tr>
                                             <td width="55" height="20" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;评卷人&nbsp;</td>
                                             <td width="55" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;得&nbsp;&nbsp;分&nbsp;</td>
                                         </tr>
                                         <tr>
                                             <td height="30" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;</td>
                                             <td style="border: 1px solid rgb(102, 102, 102);;">&nbsp;</td>
                                         </tr>
                                         </tbody>
                                     </table>
                               </div>
                               <div class="Previewcontentitle">一、选择题</div>
                               <div class="clear"></div>
                           </div>
                           
                           
                           <div class="Previewpagecontentwo">
                           
                           	 <div class="quesdiv" style="display:none;margin:10px auto">
                                       <div>
                                       <span class="quesindex"><b>1．</b></span>
                                       <span class="tips"></span>
                                       <span></span>
                                           <span class="tiMuTigan">题目题干</span>
                                           <div class="xuanXiangDiv" style="margin-left:30px">
                                           		<ul class="choices">
                                           		</ul>
                                           </div>
                                       </div>
                                </div>
                               <div class="quesbox" id="danXuanTi">
                                   
                               </div>
                               
                           </div>
                     </div>
                     
                     <div class="Previewpagebox3">
                         <div class="Previewpagecontentone">
                             <div class="Previewpagetable">
                                 <table title="评分栏" border="1" cellpadding="0" cellspacing="0" bordercolor="#666666" style="border: 1px solid rgb(102, 102, 102);;">
                                     <tbody>
                                     <tr>
                                         <td width="55" height="20" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;评卷人&nbsp;</td>
                                         <td width="55" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;得&nbsp;&nbsp;分&nbsp;</td>
                                     </tr>
                                     <tr>
                                         <td height="30" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;</td>
                                         <td style="border: 1px solid rgb(102, 102, 102);;">&nbsp;</td>
                                     </tr>
                                     </tbody>
                                 </table>
                             </div>
                             <div class="Previewcontentitle">二、多选题</div>
                             <div class="clear"></div>
                         </div>
                         <div class="Previewpagecontentwo">
                             <div class="quesbox" id="duoXuanTi">
                                   
                             </div>
                         </div>
                     </div>
                     
                     
                     <div class="Previewpagebox3">
                         <div class="Previewpagecontentone">
                             <div class="Previewpagetable">
                                 <table title="评分栏" border="1" cellpadding="0" cellspacing="0" bordercolor="#666666" style="border: 1px solid rgb(102, 102, 102);;">
                                     <tbody>
                                     <tr>
                                         <td width="55" height="20" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;评卷人&nbsp;</td>
                                         <td width="55" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;得&nbsp;&nbsp;分&nbsp;</td>
                                     </tr>
                                     <tr>
                                         <td height="30" align="center" style="border: 1px solid rgb(102, 102, 102);">&nbsp;</td>
                                         <td style="border: 1px solid rgb(102, 102, 102);;">&nbsp;</td>
                                     </tr>
                                     </tbody>
                                 </table>
                             </div>
                             <div class="Previewcontentitle">三、简答题</div>
                             <div class="clear"></div>
                         </div>
                         <div class="Previewpagecontentwo">
                             <div class="quesbox" id="jianDaTi">
                                <!--  <div class="quesdiv">
                                     <div>
                                         <span class="quesindex"><b>1．</b></span>
                                         <span class="tips"></span>
                                         <span></span>
                                         如图：直线l<sub>1</sub>：y＝k<sub>1</sub>x＋b与直线l<sub>2</sub>：y＝k<sub>2</sub>x在同一平面直角坐标系中的图象如图所示，则关于x的不等式k<sub>1</sub>x＋b＞k<sub>2</sub>x的解集为<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>．<br>
                                         <img src="http://static.zujuan.com/Upload/2016-01/15/32fce2b0-a6fc-491d-8b45-733e69d710c1/paper.files/image017.jpg" style="vertical-align:middle;"></div>
                                 </div> -->
                             </div>
                         </div>
                     </div>
                     
                     
                 </div>
                 <div class="clear"></div>
             </div>
             <div class="clear"></div>
         </div>
      </div>
  </div>

