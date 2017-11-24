package lems.util;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Test {

	public static void main(String[] args) {
		for(int i = 0; i < 10000; i++)
		System.out.println(intRad(100));
	}

	
	
	/* 生成指定范围的整型随机数 */
	public static int intRad(int rangNum) {
		return (int)(1+Math.random()*(rangNum-1+1));
	}
	
	
	
	
	
	
	
	
	
	/**
	 * 直接将当前时间只按日期(时间为0)作为mysql时间戳字段的条件 最终返回时间类型java.sql.Date
	 */
	public static void fuc1() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM");
		java.sql.Date timePara = null;
		try {
			timePara = new java.sql.Date(new Date().getTime());
			System.out.println(timePara);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 将java的当前时间转成指定格式(yyyy-MM-0100:00:00")作为mysql时间戳字段的条件
	 * 最终返回时间类型java.sql.Date
	 */
	public static void fuc2() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM");
		String time = format.format(new Date()).concat("-01 00:00:00");
		java.sql.Date timePara = null;
		try {
			timePara = new java.sql.Date(format.parse(time).getTime());
			System.out.println(timePara);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 将java的当前时间转成Timestamp作为mysql时间戳字段的条件 最终返回时间类型java.sql.Timestamp
	 */
	public static void fuc3() {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			Timestamp date = java.sql.Timestamp.valueOf(fuc6());
			System.out.println(date);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 处理当前时间只按日期(时间为0) 最终返回时间类型java.util.Date
	 */
	public static void fuc4() {
		try {
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			String time = format.format(new Date());
			Date date = format.parse(time.concat(" 00:00:00"));
			System.out.println(date);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 返回java.sql.Date 日期
	 */
	public static void fuc5() {
		String Nowtime=new SimpleDateFormat("yyyy-MM-dd").format(Calendar.getInstance().getTime());
		java.sql.Date mysqldate=java.sql.Date.valueOf(Nowtime);
		System.out.println(mysqldate);
	}
	
	/**
	 * 
	 */
	public static String fuc6() {
		Date date = new Date();  
        SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//24小时制  
        String LgTime = sdformat.format(date);
        
        return LgTime;
	}
}
