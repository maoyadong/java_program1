package com.briup.exam.web.action;

import java.util.Set;

import org.apache.struts2.convention.annotation.Action;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.briup.exam.bean.Choice;
import com.briup.exam.bean.ExamPaper;
import com.briup.exam.bean.PaperSubject;
import com.briup.exam.bean.Subject;
import com.briup.exam.common.util.WebUtil;
import com.briup.exam.service.impl.ExamPaperService;
import com.briup.exam.web.action.manager.BaseAction;

@Controller("paperSubjectAction")
@Scope(value="prototype")
public class PaperSubjectAction extends BaseAction{
	
	private ExamPaperService examPaperService;
	
	private Long examPaperId;
	
	
/*	@Action(value="/paper/save")
	public String save(){
		
		for (int i = 0; i < subjectIds.length; i++) {
			Subject subject = new Subject();
			subject.setId(subjectIds[i]);
			ExamPaper examPaper = new ExamPaper();
			examPaper.setId(examPaperIds[i]);
			paperSubject.setScore(scores[i]);
			paperSubject.setExamPaper(examPaper);
			paperSubject.setSubject(subject);
			paperSubjectService.save(paperSubject);
		}
		
		return NONE;
	}*/
	
	@Autowired
	public void setExamPaperService(ExamPaperService examPaperService) {
		this.examPaperService = examPaperService;
	}



	public void setExamPaperId(Long examPaperId) {
		this.examPaperId = examPaperId;
	}


	//以下动作可能是用于预览试卷的
	@Action(value="/paper/getSubjectsByPaperId")
	public String getSubjectsByPaperId(){
		ExamPaper examPaper=examPaperService.findById(examPaperId);
		Set<PaperSubject> paperSubjects=examPaper.getPaperSubjects();
		for (PaperSubject paperSubject : paperSubjects) {
			Subject subject=paperSubject.getSubject();
			subject.setPaperSubjects(null);
//			Set<Choice> choices=subject.getChoices();
//			for (Choice choice : choices) {
//				System.out.println(choice);
//			}
//			
		}
		WebUtil.sendJSONObjectResponse(examPaper, null);
		return NONE;
	}
	
}
