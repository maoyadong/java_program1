package com.briup.exam.bean;

import java.sql.Connection;
import java.sql.DriverManager;

public class JDBCTest {
	public static void main(String[] args) {
		Connection conn=null;
		
		try {
			//1、注册驱动
			Class.forName(
					"oracle.jdbc.driver.OracleDriver");
			//2、创建连接
			 conn= DriverManager.getConnection(
					 "jdbc:oracle:thin:@172.16.157.130:1521:XE",
					 "briup", "briup");
			System.out.println(conn);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			
			
			
		}
	}
}
