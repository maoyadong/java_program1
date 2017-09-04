package com.briup.exam.web.action;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.briup.exam.bean.Topic;
import com.briup.exam.common.util.WebUtil;
import com.briup.exam.criteria.TopicCriteria;
import com.briup.exam.service.impl.TopicService;
import com.briup.exam.web.action.manager.BaseAction;

import net.sf.json.JSONArray;

@Controller
@Scope(value = "prototype")
public class TopicAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private TopicService topicService;

	private Long departmentId;

	private Long[] topicIds;

	/**
	 * 创建topic对象
	 */
	private Topic topic;

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public void setTopicIds(Long[] topicIds) {
		this.topicIds = topicIds;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}

	@Autowired
	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

	@Action("/manager/getAllTopics")
	public String getAllTopics() {
		List<Topic> topics = topicService.findAll(Order.asc("id"));
		responseJSON(JSONArray.fromObject(topics).toString());
		return NONE;
	}

	@Action(value = "/manager/getTopicsbyDepartmentId")
	public String getTopicsByDid() {

		TopicCriteria topicCriterial = new TopicCriteria();
		topicCriterial.setDepartmentId(departmentId);
		List<Topic> topics = topicService.findByCriteria(topicCriterial, Order.asc("id"));
		responseJSON(JSONArray.fromObject(topics).toString());
		return NONE;
	}

	/**
	 * 删除
	 * 
	 * @return
	 */
	@Action(value = "/manager/deleteTopic")
	public String deleteTopics() {
		if (topicIds.length > 0) {
			boolean flag=topicService.batchDeleteByIds(topicIds);
			if(flag){
				WebUtil.sendInfoMsg("success");
			}else{
				WebUtil.sendInfoMsg("有些知识点删除失败！要删除的知识点下可能存在题目！");
			}
		}
		return NONE;
	}

	/**
	 * 保存操作
	 * 
	 * @return
	 */
	@Action(value = "/manager/saveTopic")
	public String saveTopic() {

		// topic.setDepartment(department);
		// 如果外键不为空 我当然想的外键不为空

		if(judge()) {
			WebUtil.sendInfoMsg("知识点或方向为空");
		} else {
			topicService.save(topic);
			WebUtil.sendInfoMsg("success");
		}
		return NONE;
	}

	/**
	 * 更新操作
	 * 
	 * @return
	 */
	@Action(value = "/manager/updateTopic")
	public String updateTopic() {
		if(judge()) {
			WebUtil.sendInfoMsg("知识点或方向为空");
		} else {
			topicService.update(topic);
			WebUtil.sendInfoMsg("success");
		}
		return NONE;
	}

	public boolean judge() {
		if(topic.getTitle().trim().equals("")||topic.getDepartment()==null) {
			return true;
		} else {
			return false;
		}
	}
}
