/* 下面的所有代码全部在闭包里，避免和window的属性冲突 */
;(function(){
	window.onload = function(){
		/* index */
		var oQuick_search = document.getElementById('quick_search'),
		 oText_quick_search = document.getElementById('text_quick_search'),
		 oIcon_search = document.getElementById('icon_search'),
		 oQs_form = document.getElementById('qs_form'),
		 oIndex = document.getElementById('index'),
		 oAddScript = document.getElementById('addScript'),
		 oCheckBtn = document.getElementById('checkBtn'),
		 oStorageBtn = document.getElementById('storageBtn'),
		 oTakeBtn = document.getElementById('takeBtn'),
		 oCheck = document.getElementById('check'),
		 oStorage = document.getElementById('storage'),
		 oTake = document.getElementById('take'),
		 oCheckHomeBtn = document.getElementById('checkHomeBtn'),
		 oQsClearIco = document.getElementById('qsClearIco');
		
		function clearText_quick_search(){
			oText_quick_search.value = '';
		}
		if("IE" == myBrowser()){
				oText_quick_search_valueTemp = oText_quick_search.value = "输入快件单号查询",
				oSetTimeOut_oText_quick_search = new_temp = timer1 = null;
			
			function f3(){
				clearInterval(timer1);
				timer1 = setInterval(function(){
					new_temp = oText_quick_search.value;
				},10);
			}
			function f1(){
				clearInterval(timer1);
				if(new_temp == oText_quick_search_valueTemp){
						oText_quick_search.value = '';
				}
			}
			function f2(){
				if(oText_quick_search.value == '')
				oText_quick_search.value = oText_quick_search_valueTemp;
				clearInterval(timer1); 
			}
			myAddEvent(oText_quick_search,"mouseover",f3);
			myAddEvent(oText_quick_search,"click",f1);
			myAddEvent(oText_quick_search,"mouseout",f2);
		}
		
		function qsBgcolorChange1(){
			oQuick_search.style.background = oText_quick_search.style.background = '#ffffff';
		}
		function qsBgcolorChange2(){
			oQuick_search.style.background = oText_quick_search.style.background = '#e7dfdf';
		}
		myAddEvent(oQuick_search,"mouseover",qsBgcolorChange1);
		myAddEvent(oQuick_search,"mouseout",qsBgcolorChange2);
		
		function indexHide() {
			oIndex.style.display = "none";
		}
		function indexShow() {
			oIndex.style.display = "block";
		}
		function checkHide() {
			oCheck.style.display = "none";
		}
		function checkShow() {
			oCheck.style.display = "block";
		}
		function storageHide() {
			oStorage.style.display = "none";
		}
		function storageShow() {
			oStorage.style.display = "block";
		}
		function takeHide() {
			oTake.style.display = "none";
		}
		function takeShow() {
			oTake.style.display = "block";
		}
		function clickCheckBtn() {
			indexHide();
			checkShow();
			clearText_quick_search();
		}
		function clickStorageBtn() {
			indexHide();
			storageShow();
			clearText_quick_search();
		}
		function clickTakeBtn() {
			indexHide();
			takeShow();
			clearText_quick_search();
		}

		myAddEvent(oCheckBtn, "click", clickCheckBtn);
		myAddEvent(oStorageBtn, "click", clickStorageBtn);
		myAddEvent(oTakeBtn, "click", clickTakeBtn);
		myAddEvent(oQsClearIco, "click", function(){clearObjContent(oText_quick_search);});
		//只根据快件单号快速查找
		function quickSearchByNum() {
			if(checkStrNW(oText_quick_search.value)){
				myAjax("post", "check_getQuickResultByNum.action", true, true, "check.dxid="+oText_quick_search.value, myAjaxCB);
			}else{
				alert("输入的格式不正确，请重新输入");
			}
		}
		myAddEvent(oIcon_search, "click", quickSearchByNum);
		
		/* check */
		var oCheck_search = document.getElementById('check_search'),
			oSClearIco = document.getElementById('sClearIco'),
			oCheck_search_input = document.getElementById('check_search_input'),
			oCheck_search_submit = document.getElementById('check_search_submit');
		
		function clickCheckHomeBtn() {
			oCheck_search_input.value = '';
			checkHide();
			indexShow();
		}
		function bgColorChange(){
			$('.check-search').css('background','#ffffff');
			$('#check_search_input').css('background','#ffffff');
		}
		function bgColorChange1(){
		$('.check-search').css('background','#e7dfdf');
		$('#check_search_input').css('background','#e7dfdf');
		}
		myAddEvent(oCheck_search, "mouseover", bgColorChange);
		myAddEvent(oCheck_search, "mouseout", bgColorChange1);
		myAddEvent(oCheckHomeBtn, "click", clickCheckHomeBtn);
		myAddEvent(oSClearIco, "click", function(){clearObjContent(oCheck_search_input);});
		//根据快件单号和电话号码查询
		function findByNumOrPhone(){
			if(checkStrNW(oCheck_search_input.value)){
				myAjax("post", "check_findByNumOrPhone.action", true, true, "check.temp="+oCheck_search_input.value, myAjaxCB);
			}else{
				alert("输入的格式不正确，请重新输入");
			}
		}
		myAddEvent(oCheck_search_submit, "click", findByNumOrPhone);
		
		/* storage */
		var oStor = document.getElementById('storage'), 
		oSubmit = document.getElementById('storage_submit'),
		oInputs = oStor.getElementsByTagName('input'),
		oStorage_back = document.getElementById('storage_back'),
		oStorBox = document.getElementsByClassName('stor-box')[0],
		ArrStorInp = oStorBox.getElementsByTagName('input'),
		ArrStorRadius1 = oStorBox.getElementsByClassName('stor-radius1'),
		ArrStorRadius2 = oStorBox.getElementsByClassName('stor-radius2'),
		storSubTimer = null,
		storSaveTemp = '';

		function clickStorageHomeBtn() {
			warn_dialogHide();
			allHide();
			storageHide();
			indexShow();
			for(var i = ArrStorInp.length - 1; i >= 0; i--){
				ArrStorInp[i].value = '';
			}
			for(var i = ArrStorRadius2.length - 1; i >= 0; i--){
				ArrStorRadius2[i].style.backgroundImage = '';
			}
			//清除上一次的倒计时，否则它会后台继续执行相关的方法
			clearInterval(countDowntimer);
			oSure_btn.innerHTML = oSure_btn_text;
		}
		function storSaveCB(str) {
			if(str == 'storageSuc'){
				warn_dialogShow('"'+ArrStorInp[0].value+'"'+"号快件单信息保存成功");
				stoFuc(warn_dialogHide,6000);
				ArrStorInp[0].value = '';
				ArrStorRadius2[0].style.backgroundImage = '';
			}else{
				warn_dialogHide();
				warn_dialogShow("快件单信息保存失败，请稍后重新提交");
				stoFuc(warn_dialogHide,3000);
			}
		}
		function storSub(){
			clearTimeout(storSubTimer);
			warn_dialogHide();
			storSubTimer = setTimeout(function(){
				var isNotErro = true;
				for(var i = ArrStorRadius2.length - 1; i >= 0; i--){
					if(ArrStorRadius2[i].style.backgroundImage == ''){
						isNotErro = false;
						warn_dialogHide();
						warn_dialogShow("表单的数据没有全部填对或者网络连接慢，请重试^__^");
						stoFuc(warn_dialogHide,6000);
						break;
					}
				}
				if(isNotErro){
					warn_dialogHide();
					//由于以'check.dxid=1&check.e1=2'方式传递数据会导致出现只有最后的属性值才会传过去的问题，所以暂时用temp存json方式传递
					//json里面加'\'是为了让java后台转义处理
					storSaveTemp = "check.temp="+'{\"dxid\":'+'\"'+ArrStorInp[0].value+'\"'+',"e1":'+'\"'+ArrStorInp[1].value+'\"'+',"creator":'+'\"'+ArrStorInp[2].value+'\"'+',"e2":'+'\"'+ArrStorInp[3].value+'\"'+',"e3":'+'\"'+ArrStorInp[4].value+'\"'+',"e4":'+'\"'+ArrStorInp[5].value+'\"'+',"e5":'+'\"'+ArrStorInp[6].value+'\"'+',"e6":'+'\"'+ArrStorInp[7].value+'\"'+'}';
					myAjax("post", "check_storFormSave.action", true, true, storSaveTemp, storSaveCB);
				}
			},500);
		}
		addOneEvent(oSubmit, "click", storSub);
		//给每个清除按钮添加点击事件
		for (var i = ArrStorRadius1.length - 1; i >= 0; i--) {
			ArrStorRadius1[i].index = i;
			ArrStorRadius1[i].onclick = function(){
				ArrStorInp[this.index].value = '';
				ArrStorRadius2[this.index].style.backgroundImage = '';
				warn_dialogHide();
			};
		}
		//给每个打勾按钮添加事件
		for(var j = ArrStorInp.length - 1; j >= 0; j--) {
			ArrStorInp[j].index = j;
			ArrStorInp[j].onclick = function(){
				ArrStorRadius2[this.index].style.backgroundImage = '';
			};
		}
		for(var j = ArrStorInp.length - 1; j >= 0; j--) {
			ArrStorInp[j].index = j;
			ArrStorInp[j].onblur = function(){
				function ArrStorInp0CB(str) {
					if(str == 'Err'){
						warn_dialogHide();
						ArrStorRadius2[0].style.backgroundImage = "url(../lems/img/true.png)";
					}else{
						ArrStorRadius2[0].style.backgroundImage = '';
						warn_dialogHide();
						warn_dialogShow("快件单号已存在，请重新输入新的快件单号");
						stoFuc(warn_dialogHide,3000);
					}
				}
				if(this.index == 0){
					if(checkStrNW(ArrStorInp[this.index].value)){
						myAjax("post", "check_getQuickResultByNum.action", true, true, "check.dxid="+ArrStorInp[this.index].value, ArrStorInp0CB);
					}else{
						warn_dialogHide();
						warn_dialogShow("快件单号输入的格式不正确，请重新输入");
						stoFuc(warn_dialogHide,3000);
					}
				}else if(this.index == 4 || this.index == 7){
					if(checkSelPhoneNum(ArrStorInp[this.index].value) || checkTelNum(ArrStorInp[this.index].value)){
						warn_dialogHide();
						ArrStorRadius2[this.index].style.backgroundImage = "url(../lems/img/true.png)";
					}else{
						warn_dialogHide();
						warn_dialogShow('"'+ArrStorInp[this.index].value+'"'+"，输入的电话格式不对！");
						stoFuc(warn_dialogHide,3000);
					}
				}else{
					if(ArrStorInp[this.index].value != '' && !(/(^\s+)|(\s+$)/g.test(ArrStorInp[this.index].value))){
						ArrStorRadius2[this.index].style.backgroundImage = "url(../lems/img/true.png)";
					}
				}
			};
		}
		//返回主页
		function storGoBack() {
			showWrapDialog();
			oExsit_dialog.getElementsByClassName('exit-dialog-text')[0].innerHTML = "返回主页并清空当前表单的所有信息？";
			oSure_btn.style.display = 'block';
			addOneEvent(oSure_btn, "click", clickStorageHomeBtn);
			countDown(oSure_btn, 60, clickStorageHomeBtn);
			addOneEvent(oCancel_btn, "click", allHide);
		}
		myAddEvent(oStorage_back, "click", storGoBack);
		
		/* take */
		var oTake_back = document.getElementById('take_back');
			
		function createNodeTakeInput() {
				var nodeDiv = document.createElement('div');
				nodeDiv.setAttribute('id','takePwdBox');
				nodeDiv.setAttribute('style','background:#fff;width:386px;height:78px;border: 1px solid #0099cc;border-radius:10px;position:relative;left:50%;top:50%;margin:-40px 0 0 -194px;');
				var nodeSpan1 = document.createElement('span'),
					nodeSpan2 = document.createElement('span'),
					spanStyleStr = 'margin-top:12px;margin-left:6px;width:85px;line-height:16px;font-size:16px;font-weight: bold;color:#0066cc;vertical-align:middle;text-align:left;';
				nodeSpan1.innerHTML = '提取码';
				nodeSpan2.innerHTML = '收件人电话';
				nodeSpan1.setAttribute('style',spanStyleStr);
				nodeSpan2.setAttribute('style',spanStyleStr);
				var nodeInput1 = document.createElement('input'),
					nodeInput2 = document.createElement('input'),
					inputStyleStr = 'margin-top:5px;margin-left:40px;width:242px;outline:none;border: 1px solid #0099cc;line-height:22px;font-size:22px;color:blue;background-color:#e7dfdf;vertical-align:middle;autocomplete:off;';
				nodeInput1.setAttribute('style',inputStyleStr);
				nodeInput2.setAttribute('style',inputStyleStr);
				nodeInput1.setAttribute('id','e7');
				nodeInput1.setAttribute('maxlength','6');
				nodeInput1.setAttribute('placeholder','最多6位字符');
				nodeInput2.setAttribute('id','e6');
				nodeInput2.setAttribute('maxlength','11');
				nodeInput2.setAttribute('placeholder','最多11位字符');
				var nodeSpan3 = document.createElement('span'),
					nodeSpan4 = document.createElement('span');
				nodeSpan3.setAttribute('class','stor-radius1 dialog-radius1 dialog-radius3');
				nodeSpan3.setAttribute('title','清空');
				nodeSpan4.setAttribute('class','stor-radius1 dialog-radius1 dialog-radius4');
				nodeSpan4.setAttribute('title','清空');
				nodeDiv.appendChild(nodeSpan1);
				nodeDiv.appendChild(nodeInput1);
				nodeDiv.appendChild(nodeSpan3);
				nodeDiv.appendChild(nodeSpan2);
				nodeDiv.appendChild(nodeInput2);
				nodeDiv.appendChild(nodeSpan4);
				
				return nodeDiv;
			}
		
		var oTiquma_icon = document.getElementById('tiquma_icon'),
			oNfc_icon = document.getElementById('nfc_icon'),
			nodeTakeInput = '';
		
		function findByE6AndE7CB(str) {
			if(window.console){
				console.log(str);
			}
			if(str != 'Err' && checkTelNum(jsonStrToObj(str).e6)){
				warn_dialogHide();
				warn_dialogShow(jsonStrToObj(str).dxid+"号快件提取成功，在"+jsonStrToObj(str).e8+"取件");
				countDown(document.getElementById('warn_dialog'), 120, warn_dialogHide);
			}else{
				warn_dialogHide();
				warn_dialogShow("系统没有该快件信息");
				stoFuc(warn_dialogHide,6000);
			}
		}
		function clickTiquma_icon() {
			clearInterval(countDowntimer);
			warn_dialogHide();
			showWrapDialog();
			oExsit_dialog.getElementsByClassName('exit-dialog-text')[0].innerHTML = '';
			delChildNodes(oExsit_dialog.getElementsByClassName('exit-dialog-text')[0]);
			nodeTakeInput = createNodeTakeInput();
			oExsit_dialog.getElementsByClassName('exit-dialog-text')[0].appendChild(nodeTakeInput);
			oSure_btn.style.display = 'block';
			var oDialogInpArr = document.getElementById('takePwdBox').getElementsByTagName('input'),
				oDialogRadius1Arr = document.getElementById('takePwdBox').getElementsByClassName('dialog-radius1');
			for(var i = oDialogRadius1Arr.length - 1; i >= 0; i--) {
				oDialogRadius1Arr[i].index = i;
				oDialogRadius1Arr[oDialogRadius1Arr[i].index].onclick = function(){
					oDialogInpArr[this.index].value = '';
				};
			}
			addOneEvent(oSure_btn, "click", subTakePwdAndPhone);
			addOneEvent(oCancel_btn, "click", allHide);
			countDown(oCancel_btn, 120, allHide);
		}
		function subTakePwdAndPhone(){
			var oE7 = document.getElementById('e7'),
				oE6 = document.getElementById('e6');
			
			if(checkStrN(oE7.value) && checkTelNum(oE6.value)){
				warn_dialogHide();
				warn_dialogShow("正在查询中...");
				myAjax("post", "check_findByE6AndE7.action", true, true, "check.temp="+'{\"e7\":'+'\"'+oE7.value+'\",'+'\"e6\":'+'\"'+oE6.value+'\"'+'}', findByE6AndE7CB);
			}else{
				warn_dialogHide();
				warn_dialogShow("系统没有该快件信息");
				stoFuc(warn_dialogHide,6000);
			}
			allHide();
		}
		function clickNfc_icon() {
			clearInterval(countDowntimer);
			warn_dialogHide();
			showWrapDialog();
			oExsit_dialog.getElementsByClassName('exit-dialog-text')[0].innerHTML = '';
			delChildNodes(oExsit_dialog.getElementsByClassName('exit-dialog-text')[0]);
			
			oSure_btn.style.display = 'none';
			addOneEvent(oCancel_btn, "click", allHide);
			countDown(oCancel_btn, 120, allHide);
		}
		function clickTakeHomeBtn() {
			warn_dialogHide();
			clearInterval(countDowntimer);
			takeHide();
			indexShow();
		}
		addOneEvent(oTiquma_icon, "click", clickTiquma_icon);
		addOneEvent(oNfc_icon, "click", clickNfc_icon);
		myAddEvent(oTake_back, "click", clickTakeHomeBtn);
	};
})();
	