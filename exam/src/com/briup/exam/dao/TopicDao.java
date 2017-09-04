package com.briup.exam.dao;

import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;
import com.briup.exam.bean.Topic;

@Repository
public class TopicDao extends BaseDao<Topic> {
	public Topic findById(Long id) {
		return (Topic) getSession().get(Topic.class, id);
	}

	public void save(Topic model) {
		getSession().save(model);
	}

	public void saveOrUpdate(Topic model) {
		getSession().saveOrUpdate(model);
	}

	public void update(Topic model) {
		getSession().update(model);
	}

	public void deleteObject(Topic model) {

		getSession().delete(model);
	}

	public void delete(Long id) {
		Topic topic=new Topic();
		topic.setId(id);
		getSession().delete(topic);
	}
	
	public List<Topic> findObjectAll(Order...orders){
		Criteria criteria  = getSession().createCriteria(Topic.class);
		if(orders!=null){
			for(Order order:orders){
				criteria.addOrder(order);
			}
		}
		return criteria.list();
	}

	public List<Topic> findByCriteria(Criteria criteria) {
		return criteria.list();
	}

	public boolean canDelete(Long id){
		return getSession().createQuery("from Subject where "
				+"topic.id=:topicid").setFirstResult(0).setMaxResults(1)
				.setLong("topicid", id).list().isEmpty();
	}
}
