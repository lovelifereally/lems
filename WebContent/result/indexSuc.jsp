<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
下面为测试结果
快件id:<s:property value="lid" />
快件单号:<s:property value="dxid" />
快件名称:<s:property value="e1" />
寄件人姓名:<s:property value="creator"/>
寄件人地址:<s:property value="e2" />
寄件人电话:<s:property value="e3" />
收件人姓名:<s:property value="e4" />
收件人地址:<s:property value="e5" />
收件人电话:<s:property value="e6" />
该快件创建时间:<s:property value="create_date" />
提取码:<s:property value="e7" />
所在柜号:<s:property value="e8" />