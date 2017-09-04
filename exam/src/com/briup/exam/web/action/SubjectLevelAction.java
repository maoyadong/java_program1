package com.briup.exam.web.action;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.briup.exam.bean.SubjectLevel;
import com.briup.exam.common.util.WebUtil;
import com.briup.exam.service.impl.SubjectLevelService;
import com.briup.exam.web.action.manager.BaseAction;

import net.sf.json.JSONArray;
/**
 * 
 * @author nima
 *
 */
@Controller("subjectLevelAction")
@Scope(value="prototype")
public class SubjectLevelAction extends BaseAction{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private SubjectLevelService subjectLevelService;
	
	private SubjectLevel subjectLevel ;
	
	private Long[] subjectLevelIds;
	
	public void setSubjectLevelIds(Long[] ids) {
		this.subjectLevelIds = ids;
	}

	public SubjectLevel getSubjectLevel() {
		return subjectLevel;
	}

	public void setSubjectLevel(SubjectLevel subjectLevel) {
		this.subjectLevel = subjectLevel;
	}


	@Autowired
	public void setSubjectLevelService(SubjectLevelService subjectLevelService) {
		this.subjectLevelService = subjectLevelService;
	}


	@Action(value="/manager/getAllSubjectLevels")
	public String getAllSubjectLevel() {
		
		List<SubjectLevel> subjectLevels=subjectLevelService.findAll(Order.asc("id"));
		
		responseJSON(JSONArray.fromObject(subjectLevels).toString());
		
		return NONE;
	}
	
	@Action(value="/manager/deleteSubjectLevels")
	public String deleteSubjectLevel(){
		
		boolean flag=subjectLevelService.batchDeleteByIds(subjectLevelIds);
		if(flag){
			WebUtil.sendInfoMsg("success");
		}else{
			WebUtil.sendInfoMsg("删除失败！要删除的难度下存在题目！");
		}
		return NONE;
		
	}
	
	@Action(value="/manager/saveSubjectLevel")
	public String saveSubjectLevel(){
		if(judge()) {
			WebUtil.sendInfoMsg("名称或真实名称为空，不能添加");
		} else {
			subjectLevelService.save(subjectLevel);
			WebUtil.sendInfoMsg("success");
		}
		return NONE;
		
	}
	
	@Action(value="/manager/updateSubjectLevel")
	public String updateSubjectLevel(){
		if(judge()) {
			WebUtil.sendInfoMsg("名称或真实名称为空，不能添加");
		} else {
			subjectLevelService.update(subjectLevel);
			WebUtil.sendInfoMsg("success");
		}
		return NONE;
	}
	
	public boolean judge() {
		if(subjectLevel.getName().trim().equals("")||subjectLevel.getRealName().trim().equals("")){
			return true;
		} else {
			return false;
		}
	}
}
