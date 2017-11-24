package lems.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import lems.dao.CheckDao;
import lems.entity.Check;
/**
 * 查询的Dao层实现类
 * @author Administrator
 *
 */
public class CheckDaoImpl extends HibernateDaoSupport implements CheckDao {

	@SuppressWarnings("unchecked")
	@Override
	/*
	 * Dao层根据快件单号快速查找结果
	 * @see lems.dao.CheckDao#getQuickResultByNum(java.lang.String)
	 */
	public List<Check> getQuickResultByNum(String num) {
		System.out.println("执行了Dao层");
		return this.getHibernateTemplate().find("from Check where dxid = '" + num + "'");
	}

	@Override
	/**
	 * Dao层根据快件单号或电话号码查询
	 * @see lems.dao.CheckDao#findByNumOrPhone(java.lang.String)
	 */
	public List<Check> findByNumOrPhone(String temp) {
		System.out.println("执行了Dao层");
		return this.getHibernateTemplate().find("from Check where dxid = '" + temp + "' or e3 = '" + temp + "' or e6 = '" + temp + "'");
	}

	/**
	 * Dao层根据提取码查询
	 */
	@Override
	public List<Check> findByE7(int takePassword) {
		System.out.println("执行了Dao层");
		return this.getHibernateTemplate().find("from Check where e7 = '" + takePassword + "'");
	}
	
	/**
	 * Dao层根据int型随机数查询柜子号数
	 */
	@Override
	public List<Check> findByE8(int randIntNum) {
		System.out.println("执行了Dao层");
		return this.getHibernateTemplate().find("from Check where e8 = '" + randIntNum + "号柜'");
	}

	/**
	 * Dao层保存storage页面的快件单数据
	 */
	@Override
	public void storSave(Check check) {
		System.out.println("执行了Dao层");
		this.getHibernateTemplate().save(check);
	}

	/**
	 * Dao层根据快件单提取码和收件人号码查询
	 */
	@Override
	public List<Check> findByE6AndE7(String e6, String e7) {
		System.out.println("执行了Dao层");
		return this.getHibernateTemplate().find("from Check where e6 = '" + e6 + "' and e7 = '" + e7 + "'");
	}
	
	/**
	 * Dao层根据快件实体删除信息
	 */
	@Override
	public void deleteByCheckEntity(Check check) {
		System.out.println("执行了Dao层");
		this.getHibernateTemplate().delete(check);
	}
}
