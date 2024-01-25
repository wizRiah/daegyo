var MOBILE_START_POINT = 375;

/* 모바일 기종 체크 */
var DEVICE_IS_MOBILE = false;
var mobileArr = new Array("iPhone", "iPad", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");
for (var txt in mobileArr) {
	if (navigator.userAgent.indexOf(mobileArr[txt]) > -1) {
		DEVICE_IS_MOBILE = true;
		break;
	}
}

//https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
	DEVICE_IS_MOBILE = true;
}
/* // 모바일 기종 체크 */

/**
 * 뷰포트 셋팅
 */
function setViewport() {
	/*
	https://m.naver.com/
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	https://m.daum.net/
	<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">
	*/
	var mvp = document.getElementById('myViewport');
	var device_width = window.outerWidth;
	
	/**
	 * 뷰포트 스케일링 사용 여부
	 * @type {boolean}
	 */
	var scaleViewportMode = false;
	
	var options = ',target-densitydpi=device-dpi, shrink-to-fit=no, user-scalable=no';
	var viweport_width;
	var viewport_content = '';
	if (scaleViewportMode) {
		//true면 확대 축소를 이용해 뷰포트를 스케일링 함				
		
	} else {
		//false면 device_width 를 사용함.(단, 375px 이하 모바일 기기는 스케일링함)
		if (device_width <= MOBILE_START_POINT) {
			//375px 이하 모바일 기기
			viweport_width = MOBILE_START_POINT;
		} else {
			viweport_width = "device-width";
		}
	}
	
	if (viweport_width == "device-width") {
		viewport_content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,';
	} else {
		var initial_scale = device_width / viweport_width;
		viewport_content = 'width=' + viweport_width + options + ', initial-scale=' + initial_scale + ', minimum-scale=' + initial_scale + ', maximum-scale=' + initial_scale;
	}
	
	mvp.setAttribute('content', viewport_content);
	
}

if (DEVICE_IS_MOBILE) {
	setViewport();
	
	// Listen for orientation changes
	window.addEventListener("orientationchange", function () {
	}, false);

// Listen for resize changes
	window.addEventListener("resize", function () {
		setViewport();
	}, false);
}









