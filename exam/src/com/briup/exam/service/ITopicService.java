package com.briup.exam.service;

import com.briup.exam.bean.Topic;

public interface ITopicService extends IBaseService<Topic> {
	public boolean batchDeleteByIds(Long[] ids);
}
