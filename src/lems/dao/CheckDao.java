package lems.dao;

import java.util.List;

import lems.entity.Check;

/**
 * 查询的Dao层接口
 * @author Administrator
 *
 */
public interface CheckDao {
	public List<Check> getQuickResultByNum(String num);
	public List<Check> findByNumOrPhone(String temp);
	public List<Check> findByE7(int takePassword);
	public List<Check> findByE8(int randIntNum);
	public void storSave(Check check);
	public List<Check> findByE6AndE7(String e6, String e7);
	public void deleteByCheckEntity(Check check);
}
