package com.briup.exam.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;

import com.briup.exam.bean.Department;
import com.briup.exam.bean.Topic;
@Repository
public class DepartmentDao extends BaseDao<Department> {
	
	
	@SuppressWarnings("unchecked")
	public List<Department> findAll(Order... orders) {
		Session session=getSession();
		Criteria criteria=session.createCriteria(Department.class);
		for(Order o:orders){
			criteria.addOrder(o);
		}
		return criteria.list();
	}
	
	public void save(Department model) {
		getSession().save(model);
	}
	
	public void delete(Long id) {
		Department department = new Department();
		department.setId(id);
		getSession().delete(department);
	}

	public void update(Department model) {
		getSession().update(model);
	}

	public void saveOrUpdate(Department model) {
		getSession().saveOrUpdate(model);
	}
	
	public boolean canDelete(Long id){
		return getSession().createQuery("from Topic where "
				+"department.id=:departmentid").setFirstResult(0).setMaxResults(1)
				.setLong("departmentid", id).list().isEmpty();
	}
	
	
}
