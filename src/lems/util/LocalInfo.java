package lems.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

/**
 * 
 * @author QuanZhen from NanNing College 2017.6.7
 *
 */
public class LocalInfo {
	private int rdn;
	private String time, nowTime, ramdNum, takePassword;
	
	/* 得到时间字符串年月日时分秒 */
	public String getLocalSystemTime(){
		Calendar now = Calendar.getInstance();
		time = "" + now.get(Calendar.YEAR) + (now.get(Calendar.MONTH) + 1) + now.get(Calendar.DAY_OF_MONTH) + now.get(Calendar.HOUR_OF_DAY) + now.get(Calendar.MINUTE) + now.get(Calendar.SECOND);
		nowTime = "" + now.get(Calendar.YEAR) + "年" + (now.get(Calendar.MONTH) + 1) + "月" + now.get(Calendar.DAY_OF_MONTH) + "日" + now.get(Calendar.HOUR_OF_DAY) + "时" + now.get(Calendar.MINUTE) + "分" + now.get(Calendar.SECOND) + "秒";
		System.out.println("当前系统时间:" + time + "即" + nowTime + now.getTimeInMillis() + "毫秒");
		
		return nowTime;
	}
	public String getTime() {
		return time;
	}
	/**
	 * 将java的当前时间转成Timestamp作为mysql时间戳字段的条件 最终返回时间类型java.sql.Timestamp
	 */
	@SuppressWarnings("finally")
	public Date getSqlTime() {
		Timestamp ttp = null;
		try {
        	Date date = new Date();  
        	SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//24小时制  
        	String LgTime = sdformat.format(date);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			ttp = java.sql.Timestamp.valueOf(LgTime);
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			return ttp;
		}
	}
	
	/* 得到一个指定范围的int型随机数  */
	public int getRandIntNum(int rangeNum) {
		return (int)(1+Math.random()*(rangeNum-1+1));
	}
	
	/* 得到四位数，其中每一位都不同 */
	private String getRandNum() {
		int i = 1;// i在此程序中只作为判断是否是将随机数添加在首位，防止首位出现0；
		Random r = new Random();
		int tag[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
		String str = "";
		int temp = 0;
		while (str.length() < 4) {
			temp = r.nextInt(10);// 取出0(含)~10(不含)之间任意数
			if (i == 1 && temp == 0) {
				continue;
			} else {
				i = 2;
				if (tag[temp] == 0) {
					str = str + temp;
					tag[temp] = 1;
				}
			}
		}

		return str;
	}
	
	public String getTakePassword(){
		rdn = new Random().nextInt(7);//0-6
		ramdNum = String.valueOf(rdn);//直接使用String类的静态方法，只产生一个对象
		takePassword = ramdNum + getRandNum() + (rdn+2);
		getLocalSystemTime();
		System.out.println("得到提取码为:" + takePassword);
		
		return takePassword;
	}
}
