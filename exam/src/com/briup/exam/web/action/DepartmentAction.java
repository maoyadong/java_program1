package com.briup.exam.web.action;

import java.util.List;
import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.w3c.dom.css.ElementCSSInlineStyle;

import com.briup.exam.bean.Department;
import com.briup.exam.common.util.WebUtil;
import com.briup.exam.service.impl.DepartmentService;
import com.briup.exam.web.action.manager.BaseAction;
import net.sf.json.JSONArray;

@Controller
@Scope(value = "prototype")
public class DepartmentAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private DepartmentService departmentService;

	private Long[] departmentIds;
	/**
	 * 创建department对象
	 * 
	 * @param departmentService
	 */
	private Department department;

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public void setDepartmentIds(Long[] departmentIds) {
		this.departmentIds = departmentIds;
	}

	@Autowired
	public void setDepartmentService(DepartmentService departmentService) {
		this.departmentService = departmentService;
	}

	@Action(value = "/manager/getAllDepartments")
	public String getAllSubjectTypes() {
		List<Department> departments = departmentService.findAll(Order.asc("id"));
		responseJSON(JSONArray.fromObject(departments).toString());
		return NONE;
	}

	@Action(value = "/manager/saveDepartment")
	public String saveDepartment() {
		if(department.getName().trim().equals("")) {
			WebUtil.sendInfoMsg("名字为空,请重新填写");
		} else {
			departmentService.save(department);
			WebUtil.sendInfoMsg("success");
		}
		return NONE;
	}

	@Action(value = "/manager/deleteDepartment")
	public String deleteDepartment() {
		if (departmentIds.length > 0) {
			boolean flag = departmentService.batchDeleteByIds(departmentIds);
			if (flag) {
				WebUtil.sendInfoMsg("success");
			} else {
				WebUtil.sendInfoMsg("有些删除失败！要删除的方向下存在知识点！");
			}
		}
		return NONE;
	}

	@Action(value = "/manager/updateDepartment")
	public String updateDepartment() {
		if (department.getName().trim().equals("")) {
			WebUtil.sendInfoMsg("名字为空，请填写");
		} else {
			departmentService.update(department);
			WebUtil.sendInfoMsg("success");
		}
		return NONE;
	}

}
