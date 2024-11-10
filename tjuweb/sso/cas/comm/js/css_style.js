const rootPath = getRootPath_web();

jQuery('#camera_wrap_4').camera({
	height: 'auto',//高度
	hover: false,//鼠标经过幻灯片时暂停(true, false)
	//imagePath: 图片的目录
	loader: 'none',//加载图标(pie, bar, none)
	//loaderColor: 加载图标颜色( '颜色值,例如:#eee' )
	//loaderBgColor: 加载图标背景颜色
	loaderOpacity: '8',//加载图标的透明度( '.8'默认值, 其他的可以写 0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1 )
	loaderPadding: '2',//加载图标的大小( 填数字,默认为2 )
	navigation: false,//左右箭头显示/隐藏(true, false)
	navigationHover: false,//鼠标经过时左右箭头显示/隐藏(true, false)
	pagination: false,//是否显示分页(true, false)
	playPause: false,//暂停按钮显示/隐藏(true, false)
	pauseOnClick: false,//鼠标点击后是否暂停(true, false)
	portrait: false,//显示幻灯片里所有图片的实际大小(true, false)
	thumbnails: false,//是否显示缩略图(true, false)
	time: 5000,// 幻灯片播放时间( 填数字 )
	//transPeriod: 4000,//动画速度( 填数字 )
	imagePath: '../images/',
	thumbnails:false
});

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: false,
    spaceBetween: 0,
    pagination : '#swiper-pagination1',
    paginationType: 'bullets',
    autoplay : 5500,
    loop : true
});

var setting = {
	imageWidth : 1680,
	imageHeight : 1050
	
};
var windowHeight = $(window).height();
var windowWidth = $(window).width();

var init = function(){
	$(".login_conatiner").height(windowHeight).width(windowWidth);
	$("#container_bg").height(windowHeight).width(windowWidth);
	$("#login_right_box").height(windowHeight);
	var imgW = setting.imageWidth;
	var imgH = setting.imageHeight;
	var ratio = imgH / imgW; //图片的高宽比

	imgW = windowWidth; //图片的宽度等于窗口宽度
	imgH = Math.round(windowWidth * ratio); //图片高度等于图片宽度 乘以 高宽比

	if(imgH < windowHeight){ //但如果图片高度小于窗口高度的话
		imgH = windowHeight; //让图片高度等于窗口高度
		imgW = Math.round(imgH / ratio); //图片宽度等于图片高度 除以 高宽比
	}
	$(".login_img_01").width(imgW).height(imgH);  //设置图片高度和宽度
};
init();
$(window).resize(function(){
	init();
});