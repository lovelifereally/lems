<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>物流快件管理系统</title>
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/common.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/index.css">
</head>
<body>
	<div id="exit_dialog" class="exit-dialog">
		<span class="exit-dialog-text"></span>
		<span id="sure_btn" class="exit-btn">确定</span>
		<span id="cancel_btn" class="exit-btn">取消</span>
	</div>
	
	<div id="container">
		<div id="wrap" class="wrap"></div>
		<div class="top">
			<div class="top-icon">
				<div id="top_icon_menu" title="菜单"></div>
				<div id="top_icon_exit" title="退出"></div>
			</div>
			<div id="menu">
				<ul>
					<li><a href="javascript:;" target="_self">关于我们</a></li>
					<li><a href="javascript:;" target="_self">关于我们</a></li>
					<li><a href="javascript:;" target="_self">关于我们</a></li>
				</ul>
			</div>
			<div id="warn_dialog" class="warn-dialog" style="display:none;"></div>
		</div>
		<!-- index -->
		<div id="index">
			<div class="header">
				<span>物流快件管理系统</span>
			</div>
			<div class="title">
				<span>Logistics express management system</span>
			</div>
			<div id="quick_search" class="quick-search">
				<form id="qs_form" action="javascript:;" method="post">
					<input id="text_quick_search" name="" type="text" autocomplete="off" tabindex="1" placeholder="输入快件单号" maxlength="12"/>
					<div id="icon_search" title="快速查询"></div>
				</form>
			</div>
			<span id="qsClearIco" class="clear-icon" title="清空"></span>
			<div class="footer">
				    <div id="checkBtn" class="check footer-div"></div>
					<div id="storageBtn" class="storage footer-div"></div>
					<div id="takeBtn" class="take footer-div"></div>
				<div style="clear: both;"></div>
			</div>
		</div>

		<!-- check -->
		<div id="check" style="display: none;">
			<div class="check-search" id="check_search">
				<form action="javascript:;" method="post">
					<input name="check_search_input" id="check_search_input" type="text" autocomplete="off" tabindex="1" placeholder="输入快件单号或电话号码" maxlength="12"/>
					<div id="check_search_submit" title="搜索"></div>
				</form>
			</div>
			<span id="sClearIco" class="clear-icon" title="清空"></span>
			<div class="display">
				<span id="search_result"></span>
			</div>
			<div id="checkHomeBtn" class="home" title="回到主页"></div>
		</div>

		<!-- storage -->
		<div id="storage" style="display: none;">
			<div class="stor-box">
				<form>
					<ul>
						<li>
						  <span class="stor-span-text">快件单号</span>
						  <input type="text" name="" maxlength="12" placeholder="最多12位字符" autocomplete="off" tabindex="1" />
						  <span class="stor-radius1" title="清空"></span>
						  <span id="storRad" class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">快件名称</span>
						  <input type="text" name="" autocomplete="off" tabindex="2" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">寄件人姓名</span>
						  <input type="text" name="" autocomplete="off" tabindex="3" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">寄件人地址</span>
						  <input type="text" name="" autocomplete="off" tabindex="4" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">寄件人电话</span>
						  <input type="text" name="" maxlength="11" placeholder="最多11位字符" autocomplete="off" tabindex="5" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">收件人姓名</span>
						  <input type="text" name="" autocomplete="off" tabindex="6" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">收件人地址</span>
						  <input type=text " name="" autocomplete="off" tabindex="7" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
						<li>
						  <span class="stor-span-text">收件人电话</span>
						  <input type="text" name="" maxlength="11" placeholder="最多11位字符" autocomplete="off" tabindex="8" />
						  <span class="stor-radius1" title="清空"></span>
						  <span class="stor-radius2"></span>
						</li>
					</ul>
				</form>
			</div>
			<div class="storage-footer">
				<div id="storage_back" class="storage-back" title="回到主页"></div>
				<div id="storage_submit" class="storage-submit" title="确认提交"></div>
				<div style="clear: both;"></div>
			</div>
		</div>

		<!-- take -->
		<div id="take" style="display: none;">
			<div id="take_dis_box">
				<div id="tiquma_icon">
					<span>提取码</span>
				</div>
				<div id="nfc_icon">
					<span>NFC</span>
				</div>
				<div style="clear: both;"></div>
			</div>
			<div id="take_back" class="take-back" title="回到主页"></div>
		</div>
	</div>

	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.11.3.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/common.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/index.js"></script>
	<div id="addScript" style="display: none;"></div>
</body>
</html>