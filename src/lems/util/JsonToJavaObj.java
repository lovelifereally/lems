package lems.util;

import lems.entity.Check;
import net.sf.json.JSONObject;

public class JsonToJavaObj {
	public Check jsonToJavaObj(String str){
		JSONObject jsonObject=JSONObject.fromObject(str);
		Check check = (Check)JSONObject.toBean(jsonObject, Check.class);
		
		return check;
	}
}
