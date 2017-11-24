package lems.service.impl;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import lems.dao.CheckDao;
import lems.entity.Check;
import lems.service.CheckService;
/**
 * 查找的业务层实现类
 * @author Administrator
 *
 */
@Transactional
public class CheckServiceImpl implements CheckService {
	private CheckDao checkDao;

	public void setCheckDao(CheckDao checkDao) {
		this.checkDao = checkDao;
	}

	@Override
	/**
	 * 业务层根据快件单号快速查找结果
	 */
	public List<Check> getQuickResultByNum(String num) {
		System.out.println("执行了业务层");
		return checkDao.getQuickResultByNum(num);
	}

	@Override
	/**
	 * 业务层根据快件单号或电话号码查询 
	 */
	public List<Check> findByNumOrPhone(String temp) {
		System.out.println("执行了业务层");
		return checkDao.findByNumOrPhone(temp);
	}
	
	/**
	 * 业务层根据提取码查询
	 */
	@Override
	public List<Check> findByE7(int takePassword) {
		System.out.println("执行了业务层");
		return checkDao.findByE7(takePassword);
	}
	
	/**
	 * 业务层根据int型随机数查询柜子号数
	 */
	@Override
	public List<Check> findByE8(int randIntNum) {
		System.out.println("执行了业务层");
		return checkDao.findByE8(randIntNum);
	}

	/**
	 * 业务层保存storage页面的快件单数据
	 */
	@Override
	public void storSave(Check check) {
		System.out.println("执行了业务层");
		checkDao.storSave(check);
	}

	/**
	 * 业务层根据快件单提取码和收件人号码查询
	 */
	@Override
	public List<Check> findByE6AndE7(String e6, String e7) {
		System.out.println("执行了业务层");
		return checkDao.findByE6AndE7(e6, e7);
	}
	
	/**
	 * 业务层根据快件单实体删除信息
	 */
	@Override
	public void deleteByCheckEntity(Check check) {
		System.out.println("执行了业务层");
		checkDao.deleteByCheckEntity(check);
	}
}
