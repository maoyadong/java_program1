package com.briup.exam.test;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.briup.exam.bean.ExamPaper;
import com.briup.exam.service.impl.ExamPaperService;

public class test {
	public static void main(String[] args) {
		ApplicationContext ac=new ClassPathXmlApplicationContext("spring-exam-service.xml");
//		SubjectDao sd=(SubjectDao) ac.getBean("subjectDao");
		
//		Subject s=ss.findById(1l);
		//测试subject的添加更新服务
//		SubjectService ss=(SubjectService)ac.getBean("subjectService");
//		Subject s=new Subject();
//		s.setAnalysis("解析实验一");
//		s.setAnswer("解析答案一");
//		s.setCheckState("未通过");
//		s.setStem("题干er");
//		s.setUploadTime(new Date(2017,8,23));
//		Department d=new Department();
//		d.setId(1l);
//		s.setDepartment(d);
//		Topic t=new Topic();
//		t.setId(1l);
//		s.setTopic(t);
//		SubjectLevel sl=new SubjectLevel();
//		sl.setId(1l);
//		s.setSubjectLevel(sl);
//		SubjectType st=new SubjectType();
//		st.setId(1l);
//		s.setSubjectType(st);
//		User u=new User();
//		u.setId(1l);
//		s.setUser(u);
//		s.setId(10l);
//		ss.saveOrUpdate(s);
		//部门findAll方法测试
//		DepartmentService ds=(DepartmentService) ac.getBean("departmentService");
//		Order o=Order.desc("id");
//		List<Department> rs=ds.findAll();
//		for(Department d:rs){
//			System.out.println(d);
//		}
		
//		SubjectTypeService sts=(SubjectTypeService) ac.getBean("subjectTypeService");
//		List<SubjectType> rs=sts.findAll();
//		for(SubjectType d:rs){
//			System.out.println(d);
//		}
//		SubjectLevelService sls=(SubjectLevelService)ac.getBean("subjectLevelService");
//		List<SubjectLevel> rs=sls.findAll();
//		for (SubjectLevel subjectLevel : rs) {
//			System.out.println(subjectLevel);
//		}
		
		ExamPaperService service = (ExamPaperService)ac.getBean("examPaperService");
		System.out.println(service);
		List<ExamPaper> list = service.findAll();
		for(ExamPaper examPaper: list) {
			System.out.println(examPaper);
		}
	}
}
