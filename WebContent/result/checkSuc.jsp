<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%><%--JSTL JSP标签库 --%><%--如 <c:out value="expresion"></c:out>--%><%--EL表达式 如${var}--%>										
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
下面为测试结果
<s:iterator value="list" var="checkVar">
快件id:<s:property value="#checkVar.lid" /><%--#checkVar OGNL表达式 --%>
快件单号:<s:property value="#checkVar.dxid" />
快件名称:<s:property value="#checkVar.e1" />
寄件人姓名:<s:property value="#checkVar.creator"/>
寄件人地址:<s:property value="#checkVar.e2" />
寄件人电话:<s:property value="#checkVar.e3" />
收件人姓名:<s:property value="#checkVar.e4" />
收件人地址:<s:property value="#checkVar.e5" />
收件人电话:<s:property value="#checkVar.e6" />
该快件创建时间:<s:property value="#checkVar.create_date" />
提取码:<s:property value="#checkVar.e7" />
所在柜号:<s:property value="#checkVar.e8" />
</s:iterator>