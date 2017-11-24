package lems.action;

import java.util.Date;
import java.util.List;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import lems.entity.Check;
import lems.service.CheckService;
import lems.util.JsonToJavaObj;
import lems.util.LocalInfo;

/**
 * 查询的Action类
 * 
 * @author Administrator
 *
 */
public class CheckAction extends ActionSupport implements ModelDriven<Check> {
	private static final long serialVersionUID = 1L;
	private Check check = new Check();

	@Override
	public Check getModel() {
		return check;
	}
	public void setCheck(Check check) {
		this.check = check;
	}

	/* 注入查询的CheckService */
	private CheckService checkService;

	public void setCheckService(CheckService checkService) {
		this.checkService = checkService;
	}

	/* 创建check实体 */
	private void createCheckEntity() {
		if (ActionContext.getContext().getSession().get("check") != null) {
			ActionContext.getContext().getSession().remove("check");
			System.out.println("移除旧的check对象完成");
		}
		ActionContext.getContext().getSession().put("check", check);
		System.out.println("创建新的check空对象完成");
	}

	/* 根据快件单号快速查找结果 */
	public String getQuickResultByNum() {
		createCheckEntity();
		System.out.println("获取到的快件单号：" + check.getDxid());
		if (!checkService.getQuickResultByNum(check.getDxid()).isEmpty()) {
			List<Check> list = checkService.getQuickResultByNum(check.getDxid());
			check = list.get(0);
			ActionContext.getContext().getValueStack().push(check);
			System.out.println("查询数据库完成,check对象被覆盖");
			System.out.println("根据快件单号查得结果是：" + check.getLid() + "  " + check.getDxid() + "  " + check.getE1() + "  " + check.getE2() + "  " + check.getE3() + "  " + check.getCreate_date());
			
			return "indexSuc";
		} else {
			System.out.println("数据库查询后没有得到结果");
			check = null;
			ActionContext.getContext().getValueStack().push(check);
			createCheckEntity();
			
			return "indexErr";
		}
	}
	
	/* 根据快件单号或电话号码查询 */
	public String findByNumOrPhone() {
		createCheckEntity();
		System.out.println("从Check页获取到输入的数据：" + check.getTemp());
		if (!checkService.findByNumOrPhone(check.getTemp()).isEmpty()) {
			List<Check> list = checkService.findByNumOrPhone(check.getTemp());
			check.setList(list);
			ActionContext.getContext().getValueStack().push(check);
			System.out.println("查询数据库完成,check对象被覆盖");
			
			return "checkSuc";
		} else {
			System.out.println("数据库查询后没有得到结果");
			check = null;
			ActionContext.getContext().getValueStack().push(check);
			createCheckEntity();
			
			return "checkErr";
		}
	}
	
	/* 保存storage页面的快件单数据 */
	public String storFormSave() {
		if(check.getTemp() != null){
			createCheckEntity();
			System.out.println("从Storage页获取到输入的数据：" + check.getTemp());
			try{
				check = new JsonToJavaObj().jsonToJavaObj(check.getTemp());
				System.out.println("java把json字符串转换成对象类型成功！");
				check.setCreate_date(new LocalInfo().getSqlTime());
				check.setE7(new LocalInfo().getTakePassword());
				int randIntNum = 0;
				while(true) {
					randIntNum = new LocalInfo().getRandIntNum(100);
					if(checkService.findByE8(randIntNum).isEmpty()) {
						check.setE8(randIntNum + "号柜");
						System.out.println("给"+check.getDxid()+"号快件单分配到"+randIntNum+"号柜成功！");
						break;
					}
				}
				checkService.storSave(check);
				ActionContext.getContext().getValueStack().push(check);
			}catch (Exception e){
				System.out.println(e);
				System.out.println("java把json字符串转换成对象类型失败了-__-!!");
			}
			
			return "storageSuc";
		}else{
			return "storageErr";
		}
	}
	
	/* take页面提取码操作 */
	public String findByE6AndE7() {
		if(check.getTemp() != null){
			createCheckEntity();
			System.out.println("从take页获取到通过提取码输入的数据：" + check.getTemp());
			try{
				check = new JsonToJavaObj().jsonToJavaObj(check.getTemp());
				System.out.println("java把json字符串转换成对象类型成功！");
				if(!checkService.findByE6AndE7(check.getE6(), check.getE7()).isEmpty()) {
					List<Check> list = checkService.findByE6AndE7(check.getE6(), check.getE7());
					check = list.get(0);
					ActionContext.getContext().getValueStack().push(check);
					checkService.deleteByCheckEntity(check);
					System.out.println("check实体删除成功");
					check = null;
					
					return "takeSuc";
				}else{
					return "takeErr";
				}
			}catch (Exception e){
				System.out.println(e);
				
				return "takeErr";
			}
		}else{
			return "takeErr";
		}
	}
}
