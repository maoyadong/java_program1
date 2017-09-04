package com.briup.exam.service;

import com.briup.exam.bean.Department;

public interface IDepartmentService extends IBaseService<Department> {
	public boolean batchDeleteByIds(Long[] ids);
}
