package com.briup.exam.web.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.briup.exam.bean.Choice;
import com.briup.exam.bean.Subject;
import com.briup.exam.common.util.WebUtil;
import com.briup.exam.common.util.page.SimplePageInfo;
import com.briup.exam.criteria.SubjectCriteria;
import com.briup.exam.service.impl.SubjectService;
import com.briup.exam.web.action.manager.BaseAction;

import net.sf.json.JSONArray;



@Controller("subjectAction")
@Scope(value="prototype")
public class SubjectAction  extends BaseAction{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private SubjectService subjectService;
	
	private Subject subject ;
	private String[] singleContent;
	private Integer singleCorrect;
	private String[] multiContent;
	private Integer[] multiCorrect;
	
	private SimplePageInfo simplePageInfo;
	
	private final String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public Subject getSubject() {
		return subject;
	}
	@Autowired
	public void setSubjectService(SubjectService subjectService) {
		this.subjectService = subjectService;
	}
	
	public void setSingleContent(String[] singleContent) {
		this.singleContent = singleContent;
	}
	
	public void setSingleCorrect(Integer singleCorrect) {
		this.singleCorrect = singleCorrect;
	}
	public void setMultiContent(String[] multiContent) {
		this.multiContent = multiContent;
	}
	
	public void setMultiCorrect(Integer[] multiCorrect) {
		this.multiCorrect = multiCorrect;
	}
	public void setSubject(Subject subject) {
		this.subject = subject;
	}
	
	public SimplePageInfo getSimplePageInfo() {
		return simplePageInfo;
	}
	public void setSimplePageInfo(SimplePageInfo simplePageInfo) {
		this.simplePageInfo = simplePageInfo;
	}
	@Action(value="/manager/saveSubject")
	public String saveSubject(){
		
		//By WJT
		Set<Choice> choices=null;
		Long subjectType=subject.getSubjectType().getId();
		
		//题干和分析不为空，否则返回信息不足
		if(subject!=null&&subjectType!=null&&subject.getStem()!=null&&!subject.getStem().trim().equals("")
				&&subject.getAnalysis()!=null&&!subject.getAnalysis().trim().equals("")&&subject.getTopic()!=null&&subject.getDepartment()!=null
				&&subject.getSubjectType()!=null)
		{
			if(subjectType==1L){//单选题
				choices=new HashSet<>();
				if(singleContent==null||singleContent.length<2)
				{
					WebUtil.sendInfoMsg("选项太少");
					return NONE;
				}
				if(singleCorrect==null){
					WebUtil.sendInfoMsg("没有选择正确选项");
					return NONE;
				}
				for(int i=0;i<singleContent.length;i++){
					if(singleContent[i]==null||singleContent[i].trim().equals(""))
					{
						WebUtil.sendInfoMsg("有选项内容为空");
						return NONE;
					}
					Choice choice=new Choice(singleContent[i], singleCorrect==i);
					choices.add(choice);
				}
			  }
			else if(subjectType==2L){//多选题
				choices=new HashSet<>();
				if(multiContent==null||multiContent.length<2)
				{
					WebUtil.sendInfoMsg("选项太少");
					return NONE;
				}
				boolean[] corrects=new boolean[multiContent.length];
				for(int i=0;i<multiCorrect.length;i++){
					if(multiCorrect[i]==null)
					{
						WebUtil.sendInfoMsg("正确选项太少");
						return NONE;
					}
					corrects[multiCorrect[i]]=true;
				}
				for(int i=0;i<multiContent.length;i++){
					if(multiContent[i]==null||multiContent[i].trim().equals(""))
					{
						WebUtil.sendInfoMsg("有选项为空");
						return NONE;
					}
					Choice choice=new Choice(multiContent[i], corrects[i]);
					choices.add(choice);
				}
			
			}
			else {//简答题
			if(subject.getAnswer()==null||subject.getAnswer().trim().equals(""))
				{
					WebUtil.sendInfoMsg("简答题答案解析为空");
					return NONE;
				}
			}	
		}
		
		else {
			WebUtil.sendInfoMsg("信息不足");
			return NONE;
		}
	
		System.out.println("--------------");
		subject.setChoices(choices);
		subject.setUploadTime(new Date());
		subject.setCheckState("未审核");
		subjectService.save(subject);
		WebUtil.sendInfoMsg("success");
		return NONE;
	}
	@Action(value="/manager/getAllSubjects")
	public String getAllSubjects(){
		List<Subject> subjects=new ArrayList<>();
		Subject subject=new Subject();
		subject.setUploadTime(new Date());
		subject.setId(1L);
		subjects.add(subject);
		responseJSON(JSONArray.fromObject(subjects).toString());
		return NONE;
	}
	
	/**
	 * 审核功能：该方法要求前端至少在传来的Subject对象中存入了id和要修改的CheckState状态
	 * @return
	 */
	@Action(value="/manager/checkSubject")
	public String checkSubjectState(){
		Long id=subject.getId();
		String checkeState=subject.getCheckState();
		subject=subjectService.findById(id);
		subject.setCheckState(checkeState);
		subjectService.saveOrUpdate(subject);
		return NONE;
	}
	/**
	 * 删除题目功能：要求前端传来的subject对象至少要设置了id。
	 * @return
	 */
	@Action(value="/manager/deleteSubject")
	public String delSubject(){
		subjectService.delete(subject.getId());
		return NONE;
	}
	
	/**
	 * 本方法需要前端在simplePageInfo里设置好currentPage.前端传过来的参数由一开始，后端的查询由0开始
	 * 还要前端传入一个Subject对象
	 * @return
	 */
	@Action(value="/manager/getSubjectsByCriteria")
	public String getSubjectsByCriteria(){
		SubjectCriteria sub=new SubjectCriteria();
		//先设置查询的最基本条件
		sub.setSubject(subject);
		
		List<Subject> subjects=subjectService.findByCriteria(sub, simplePageInfo,Order.asc("id"));
		for (Subject subject2 : subjects) {
			System.out.println(subject2);
		}
		//把页数修改回来
		int cur=simplePageInfo.getCurrentPage();
		simplePageInfo.setCurrentPage(cur+1);
		simplePageInfo.setModels(subjects);
		//把查出来的信息和页面信息一起传回前端
		WebUtil.sendJSONObjectResponse(simplePageInfo, null);
		return NONE;
	}
}
