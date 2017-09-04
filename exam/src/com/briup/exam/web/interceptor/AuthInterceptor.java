package com.briup.exam.web.interceptor;


import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class AuthInterceptor implements Interceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void destroy() {
		System.out.println("AuthInterceptor.destroy()");
	}

	@Override
	public void init() {
		System.out.println("AuthInterceptor.init()");
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		
		return invocation.invoke();
	}

}
