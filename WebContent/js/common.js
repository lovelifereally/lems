/* 公共引用 */
function test() {
	if(window.console){
		console.log("测试");
	}
}
function qNull(){}

if (window.console) {
	console.log("系统加载完成!开发时间2016.11.22---2017.");
}
/*阻止浏览器鼠标右键菜单*/
document.oncontextmenu = function() {
	return false;
};
/*兼容性事件绑定*/
function myAddEvent(obj, sEvent, fn) {//对象，事件名的字符串，方法
	if (obj.attachEvent) {//ie方式
		obj.attachEvent('on' + sEvent, fn);//在ie下绑定事件中的事件名前on开头
	} else {//DOM方式
		obj.addEventListener(sEvent, fn, false);//不采用捕获方式，采用冒泡的方式
	}
}
/*兼容性解除事件绑定*/
function myReduce(obj, sEvent, fn) {
	if (obj.detachEvent) {
		obj.detachEvent('on' + sEvent, fn);
	} else {
		obj.removeEventListener(sEvent, fn, false);
	}
}
/*系统按钮菜单*/
var oTop_icon_menu = document.getElementById("top_icon_menu"), oMenu = document
		.getElementById("menu");
//下面2个方法分开写是为了避免js点击事件第2次点击才起效的问题
function menuShow(obj) {
	oMenu.style.display = "block";

	obj.cancelBubble = true; //取消事件冒泡
}
function menuHide(obj) {
	oMenu.style.display = "none";

	obj.cancelBubble = true; //取消事件冒泡
}
myAddEvent(oTop_icon_menu, "click", menuShow);
myAddEvent(document, "click", menuHide);

function myBrowser(){
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;
	if (isOpera) {//判断是否Opera浏览器
	    return "Opera";
	}
	if (userAgent.indexOf("Firefox") > -1) {//判断是否Firefox浏览器
	    return "FF";
	} 
	if (userAgent.indexOf("Chrome") > -1){//判断是否Chrome浏览器
	    return "Chrome";
	}
	if (userAgent.indexOf("Safari") > -1) {//判断是否Safari浏览器
	    return "Safari";
	} 
	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {//判断是否IE浏览器
	    return "IE";
	}
}

/**
 * 自定义封装的异步方法
 * @param sendWayStr		发送的方式'get'或'post'
 * @param fileAddrStr		发送的地址，字符串格式
 * @param booleanAjax		是否异步，默认为true
 * @param booleanResult		是否返回响应成功后从服务器拿到的数据内容，默认为false
 * @param sendStr			选择post发送方式后要发送的字符串内容
 * @param callBackFuc		在返回结果为true的前提下，才能执行的回调方法名
 */
function myAjax(sendWayStr, fileAddrStr, booleanAjax, booleanResult, sendStr,
		callBackFuc) {
	var myAjaxResult = '';

	if (booleanAjax == '') {
		booleanAjax = true;
	}
	if (booleanResult == '') {
		booleanResult = false;
	}
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
		if (widow.console) {
			console.log("IE7以下才用的Ajax插件");
		}
	}
	xhr.open(sendWayStr, fileAddrStr, booleanAjax);
	if (sendWayStr == 'post') {
		xhr.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded;");
		xhr.send(sendStr);
	} else {
		xhr.send();
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (window.console) {
				console.log('异步响应成功');
			}
			if (booleanResult != false) {
				myAjaxResult = xhr.responseText;
				callBackFuc(myAjaxResult);
				if (window.console) {
					console.log('回调方法执行成功');
				}
			}
		}
	}
}
/* myAjax的默认回调方法 */
function myAjaxCB(str){
	if(str != 'Err'){
		alert(str);
	}else{
		alert('数据库没有该快件信息');
	}
}

/* 字符串转文档结点 */
function strToDom(str) {
	var node = document.createElement('div');
	node.innerHTML = str;

	return node;
}

/* ajax跨域请求利用jsonp原理方法之一 */
function myAjaxJsonp(obj, scriptSrcStr) {
	var oScript = document.createElement('script');
	oScript.src = scriptSrcStr;
	obj.appendChild(oScript);
}

/* 删除当前结点所包含的所有孩子节点 */
function delChildNodes(obj) {
	var childs = obj.childNodes;
	for (var i = childs.length - 1; i >= 0; i--) {
		obj.removeChild(childs[i]);
	}
}

/* 清除指定对象的内容 */
function clearObjContent(obj) {
	obj.value = '';
}

/* 判断字符串只能包含数字和字母，返回true或false */
function checkStrNW(str) {
	var re_num_word = /^[A-Za-z0-9]+$/;//只允许有数字和字母
	
	return re_num_word.test(str);
}
/* 判断字符串只能包含数字 ，返回true或false*/
function checkStrN(str) {
	var re_num = /^[0-9]+$/;//只允许有数字
	
	return re_num.test(str);
}
/* 判断字符串只能是手机号码，返回true或false */
function checkSelPhoneNum(str) {
	var re_pn = /^1[0-9]{9}$/;
	
	return re_pn.test(str);
}
/* 判断字符串只能是电话号码，返回true或false */
function checkTelNum(str) {
	var re_tn = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
	
	return re_tn.test(str);
}

/* 警告提示框显示和隐藏 */
function warn_dialogShow(str) {
	clearInterval(countDowntimer);
	if(document.getElementById('warn_dialog').style.display == 'none') {
		document.getElementById('warn_dialog').innerHTML = str;
		document.getElementById('warn_dialog').style.display = 'block';
	}
}
function warn_dialogHide() {
	clearInterval(countDowntimer);
	if(document.getElementById('warn_dialog').style.display == 'block') {
		document.getElementById('warn_dialog').style.display = 'none';
	}
}

/* 指定某个方法某s秒后执行 ,默认为6s*/
var stoFucTimer = null;
function stoFuc(fuc, time) {
	if(time === ''){
		time = 6000;
	}
	clearTimeout(stoFucTimer);
	stoFucTimer = setTimeout(function(){
		fuc();
	},time);
}

/* 倒计时，在对象的文本内容上显示倒计时的秒数 */
var countDowntimer = null;
function countDown(obj,time,endFuc){
			var temp = '',
				flag = 0;
				if(obj.nodeName == 'INPUT'){
					temp = obj.value;
				}else{
					temp = obj.innerHTML;flag = 1;
				}
				clearInterval(countDowntimer);
				countDowntimer = setInterval(function(){
				if(time >= 0){
					if (flag == 0) {
						obj.value = temp +' '+'('+time+'s)';
					}else{
						obj.innerHTML = temp +' '+'('+time+'s)';
					}
					
					time--;
				}
				if (time < 0) {
					endFuc();
					if(flag == 0){
						obj.value = temp;
					}else{
						obj.innerHTML = temp;
					}
					clearInterval(countDowntimer);
				}
			},1000);
		}

/*
	eval函数接收一个参数s，如果s不是字符串，则直接返回s。否则执行s语句。如果s语句执行结果是一个值，
	则返回此值，否则返回undefined。 需要特别注意的是对象声明语法“{}”并不能返回一个值，需要用括号括
	起来才会返回值
	由于eval()不可能在全局空间内执行,即只能在方法内进行调用，所以全局使用的解决方案如下

	var code1='"a" + 2'; //表达式 
	varcode2='{a:2}'; //语句 
	alert(eval(code1)); //->'a2' 
	alert(eval(code2)); //->undefined 
	alert(eval('(' + code2 + ')')); //->[object Object]

	同时兼容IE和Firefox,使用时Qeval.Eval('');
 */		
var Qeval = {
	"eval":function(code){
		if(!!(window.attachEvent && !window.opera)){ 
			return execScript(code);//ie  
		}else{ 
			return window.eval(code);//not ie  
		} 
	} 	
};
/* js将json字符串转换为对象 */
function jsonStrToObj(str) {
	var obj = Qeval.eval('('+str+')');
	console.log(typeof obj);
	return obj;
}
/*添加一次性事件*/
function addOneEvent(obj,sEvent,fn) {
	if(sEvent.substring(0,2) != 'on'){
		sEvent = 'on' + sEvent;
	}
	
	var event = [
		{on:'onafterprint'},
		{on:'onbeforeprint'},
		{on:'onbeforeonload'},
		{on:'onblur'},
		{on:'onerror'},
		{on:'onfocus'},
		{on:'onhaschange'},
		{on:'onload'},
		{on:'onmessage'},
		{on:'onoffline'},
		{on:'ononline'},
		{on:'onpagehide'},
		{on:'onpageshow'},
		{on:'onpopstate'},
		{on:'onredo'},
		{on:'onresize'},
		{on:'onstorage'},
		{on:'onundo'},
		{on:'onunload'},
		{on:'onblur'},
		{on:'onchange'},
		{on:'oncontextmenu'},
		{on:'onfocus'},
		{on:'onformchange'},
		{on:'onforminput'},
		{on:'oninput'},
		{on:'oninvalid'},
		{on:'onreset'},
		{on:'onselect'},
		{on:'onsubmit'},
		{on:'onkeydown'},
		{on:'onkeypress'},
		{on:'onkeyup'},
		{on:'onclick'},
		{on:'ondblclick'},
		{on:'ondrag'},
		{on:'ondragend'},
		{on:'ondragenter'},
		{on:'ondragleave'},
		{on:'ondragover'},
		{on:'ondragstart'},
		{on:'ondrop'},
		{on:'onmousedown'},
		{on:'onmousemove'},
		{on:'onmouseout'},
		{on:'onmouseover'},
		{on:'onmouseup'},
		{on:'onmousewheel'},
		{on:'onscroll'},
		{on:'onabort'},
		{on:'oncanplay'},
		{on:'oncanplaythrough'}, 
		{on:'ondurationchange'},
		{on:'onemptied'},
		{on:'onended'},
		{on:'onerror'},
		{on:'onloadeddata'}, 
		{on:'onloadedmetadata'},
		{on:'onloadstart'},
		{on:'onpause'},
		{on:'onplay'},
		{on:'onplaying'},
		{on:'onprogress'},
		{on:'onratechange'},
		{on:'onreadystatechange'}, 
		{on:'onseeked'},
		{on:'onseeking'},
		{on:'onstalled'},
		{on:'onsuspend'},
		{on:'ontimeupdate'}, 
		{on:'onvolumechange'},
		{on:'onwaiting'} 
	];

	var evobj = Qeval.eval(event);
	for (var i = evobj.length - 1; i >= 0; i--) {
		if(sEvent === evobj[i].on){
			switch(i){
				case 0:
					obj.onafterprint = fn;
					break;
				case 1:
					obj.onbeforeprint = fn;
					break;
				case 2:
					obj.onblur = fn;
					break;
				case 3:
					obj.onerror = fn;
					break;	
				case 4:
					obj.onfocus = fn;
					break;
				case 5:
					obj.onhaschange = fn;
					break;
				case 6:
					obj.onload = fn;
					break;
				case 7:
					obj.onload = fn;
					break;
				case 8:
					obj.onmessage = fn;
					break;
				case 9:
					obj.onoffline = fn;
					break;
				case 10:
					obj.ononline = fn;
					break;
				case 11:
					obj.onpagehide = fn;
					break;
				case 12:
					obj.onpageshow = fn;
					break;
				case 13:
					obj.onpopstate = fn;
					break;	
				case 14:
					obj.onredo = fn;
					break;
				case 15:
					obj.onresize = fn;
					break;
				case 16:
					obj.onstorage = fn;
					break;
				case 17:
					obj.onundo = fn;
					break;
				case 18:
					obj.onunload = fn;
					break;
				case 19:
					obj.onblur = fn;
					break;
				case 20:
					obj.onchange = fn;
					break;				
				case 21:
					obj.oncontextmenu = fn;
					break;
				case 22:
					obj.onfocus = fn;
					break;
				case 23:
					obj.onformchange = fn;
					break;	
				case 24:
					obj.onforminput = fn;
					break;
				case 25:
					obj.oninput = fn;
					break;
				case 26:
					obj.oninvalid = fn;
					break;
				case 27:
					obj.onreset = fn;
					break;
				case 28:
					obj.onselect = fn;
					break;
				case 29:
					obj.onsubmit = fn;
					break;
				case 30:
					obj.onkeydown = fn;
					break;
				case 31:
					obj.onkeypress = fn;
					break;
				case 32:
					obj.onkeyup = fn;
					break;
				case 33:
					obj.onclick = fn;
					break;	
				case 34:
					obj.ondblclick = fn;
					break;
				case 35:
					obj.ondrag = fn;
					break;
				case 36:
					obj.ondragend = fn;
					break;
				case 37:
					obj.ondragenter = fn;
					break;
				case 38:
					obj.ondragleave = fn;
					break;
				case 39:
					obj.ondragover = fn;
					break;
				case 40:
					obj.ondragstart = fn;
					break;
				case 41:
					obj.ondrop = fn;
					break;
				case 42:
					obj.onmousedown = fn;
					break;
				case 43:
					obj.onmousemove = fn;
					break;	
				case 44:
					obj.onmouseout = fn;
					break;
				case 45:
					obj.onmouseover = fn;
					break;
				case 46:
					obj.onmouseup = fn;
					break;
				case 47:
					obj.onmousewheel = fn;
					break;
				case 48:
					obj.onscroll = fn;
					break;
				case 49:
					obj.onabort = fn;
					break;
				case 50:
					obj.oncanplay = fn;
					break;
				case 51:
					obj.oncanplaythrough = fn;
					break;
				case 52:
					obj.ondurationchange = fn;
					break;
				case 53:
					obj.onemptied = fn;
					break;	
				case 54:
					obj.onended = fn;
					break;
				case 55:
					obj.onerror = fn;
					break;
				case 56:
					obj.onloadeddata = fn;
					break;
				case 57:
					obj.onloadedmetadata = fn;
					break;
				case 58:
					obj.onloadstart = fn;
					break;
				case 59:
					obj.onpause = fn;
					break;
				case 60:
					obj.onplay = fn;
					break;
				case 61:
					obj.onplaying = fn;
					break;
				case 62:
					obj.onprogress = fn;
					break;
				case 63:
					obj.onratechange = fn;
					break;	
				case 64:
					obj.onreadystatechange = fn;
					break;
				case 65:
					obj.onseeked = fn;
					break;
				case 66:
					obj.onseeking = fn;
					break;
				case 67:
					obj.onstalled = fn;
					break;
				case 68:
					obj.onsuspend = fn;
					break;
				case 69:
					obj.ontimeupdate = fn;
					break;
				case 70:
					obj.onvolumechange = fn;
					break;
				case 71:
					obj.onwaiting = fn;
					break;
			}
			break;
		}
	}
}

/*是否退出系统*/
var oTop_icon_exit = document.getElementById('top_icon_exit'),
	oWrap = document.getElementById('wrap'),
	oExsit_dialog = document.getElementById('exit_dialog'),
	oCancel_btn = document.getElementById('cancel_btn'),
	oSure_btn = document.getElementById('sure_btn'),
	oCancel_btn_text = oCancel_btn.innerHTML,
	oSure_btn_text = oSure_btn.innerHTML;

function showWrapDialog() {
	oWrap.style.display = oExsit_dialog.style.display = 'block';
}
function allHide() {
	//清除上一次的倒计时，否则它会后台继续执行相关的方法
	clearInterval(countDowntimer);
	oSure_btn.innerHTML = oSure_btn_text;
	oCancel_btn.innerHTML = oCancel_btn_text;
	oWrap.style.display = oExsit_dialog.style.display = 'none';
}
function CloseWebPage() {
	if (navigator.userAgent.indexOf("MSIE") > 0) {
		if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
			window.opener = null;
			window.close();
		} else {
			window.open('', '_top');
			window.top.close();
		}
	} else if (navigator.userAgent.indexOf("Firefox") > 0) {
		window.location.href = 'about:blank ';
	} else {
		window.opener = null;
		window.open('', '_self', '');
		window.close();
	}
}
function exit(){
	showWrapDialog();
	oExsit_dialog.getElementsByClassName('exit-dialog-text')[0].innerHTML = "关闭系统？";
	oSure_btn.style.display = 'block';
	addOneEvent(oSure_btn, "click", CloseWebPage);
	addOneEvent(oCancel_btn, "click", allHide);
	countDown(oCancel_btn, 10, allHide);
}
myAddEvent(oTop_icon_exit, "click", exit);
