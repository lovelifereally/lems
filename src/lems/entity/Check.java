package lems.entity;

import java.util.Date;
import java.util.List;

/**
 * 查询实体类
 * 
 * @author Administrator
 * @param <T>
 *
 */
public class Check<T> {
	private Integer lid;//主键
	private String dxid;//快件单号
	private String e1;//快件名称
	private String creator;//寄件人姓名
	private String e2;//寄件人地址
	private String e3;//寄件人电话
	private String e4;//收件人姓名
	private String e5;//收件人地址
	private String e6;//收件人电话
	private Date create_date;//创建时间
	private String e7;//提取码
	private String e8;//柜子编号
	private String temp;//一个临时的字符串，不属于数据库表的字段
	private List<T> list;//一个临时的列表对象

	public Integer getLid() {
		return lid;
	}

	public void setLid(Integer lid) {
		this.lid = lid;
	}

	public String getDxid() {
		return dxid;
	}

	public void setDxid(String dxid) {
		this.dxid = dxid;
	}

	public String getE1() {
		return e1;
	}

	public void setE1(String e1) {
		this.e1 = e1;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public String getE2() {
		return e2;
	}

	public void setE2(String e2) {
		this.e2 = e2;
	}

	public String getE3() {
		return e3;
	}

	public void setE3(String e3) {
		this.e3 = e3;
	}

	public String getE4() {
		return e4;
	}

	public void setE4(String e4) {
		this.e4 = e4;
	}

	public String getE5() {
		return e5;
	}

	public void setE5(String e5) {
		this.e5 = e5;
	}

	public String getE6() {
		return e6;
	}

	public void setE6(String e6) {
		this.e6 = e6;
	}

	public Date getCreate_date() {
		return create_date;
	}

	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}

	public String getE7() {
		return e7;
	}

	public void setE7(String e7) {
		this.e7 = e7;
	}

	public String getE8() {
		return e8;
	}

	public void setE8(String e8) {
		this.e8 = e8;
	}

	public String getTemp() {
		return temp;
	}

	public void setTemp(String temp) {
		this.temp = temp;
	}

	public List<T> getList() {
		return list;
	}

	public void setList(List<T> list) {
		this.list = list;
	}
	
}
