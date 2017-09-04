package com.briup.exam.service.impl;

import java.util.List;

import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.briup.exam.bean.Department;
import com.briup.exam.common.util.Criteriable;
import com.briup.exam.common.util.IPageInfo;
import com.briup.exam.dao.DepartmentDao;
import com.briup.exam.service.IDepartmentService;
@Service("departmentService")
public class DepartmentService implements IDepartmentService {

	private DepartmentDao departmentDao;
	
	public DepartmentDao getDepartmentDao() {
		return departmentDao;
	}
	@Autowired
	public void setDepartmentDao(DepartmentDao departmentDao) {
		this.departmentDao = departmentDao;
	}

	@Override
	public Department findById(Long id) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public List<Department> findAll(Order... orders) {
		return departmentDao.findAll(orders);
	}

	@Override
	public List<Department> findAll(IPageInfo pageInfo, Order... orders) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public List<Department> findByExample(Department model, Order... orders) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public List<Department> findByExample(Department model, IPageInfo pageInfo, Order... orders) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public List<Department> findByCriteria(Criteriable criteriaObj, Order... orders) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public List<Department> findByCriteria(Criteriable criteriaObj, IPageInfo pageInfo, Order... orders) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public Department findUnique(Department model) {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public void save(Department model) {
		departmentDao.save(model);
	}

	@Override
	public void batchSave(List<Department> models) {
		// TODO 自动生成的方法存根

	}

	@Override
	public void saveOrUpdate(Department model) {
		departmentDao.saveOrUpdate(model);

	}

	@Override
	public void update(Department model) {
		departmentDao.update(model);
	}

	@Override
	public void deleteObject(Department model) {
		// TODO 自动生成的方法存根

	}

	@Override
	public void delete(Long id) {
		// TODO 自动生成的方法存根

	}

	@Override
	public void batchDelete(List<Long> ids) {
		
	}

	@Override
	public void batchDelete(Long[] ids) {
		for(Long id:ids){
				departmentDao.delete(id);
		}

	}

	@Override
	public void batchDeleteModel(List<Department> models) {
		// TODO 自动生成的方法存根

	}
	@Override
	public boolean batchDeleteByIds(Long[] ids) {
		boolean flag=true;
		// TODO Auto-generated method stub
		for (Long id : ids) {
			if (departmentDao.canDelete(id))
				departmentDao.delete(id);
			else {
				flag=false;
			}
		}
		return flag;
	}

}
