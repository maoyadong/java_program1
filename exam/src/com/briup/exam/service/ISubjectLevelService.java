package com.briup.exam.service;

import com.briup.exam.bean.SubjectLevel;

public interface ISubjectLevelService extends IBaseService<SubjectLevel> {
	public boolean batchDeleteByIds(Long[] ids);
}
