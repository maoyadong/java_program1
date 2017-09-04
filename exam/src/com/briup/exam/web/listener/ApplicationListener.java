package com.briup.exam.web.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * 当应用启动时，加载所有的subjectLevel subjectType	department topic 到application中
 * */
@WebListener
public class ApplicationListener implements ServletContextListener {
	
    /**
     * Default constructor. 
     */
    public ApplicationListener() {
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent arg0)  { 
    	
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent arg0)  { 
    	
    	
    }
}
