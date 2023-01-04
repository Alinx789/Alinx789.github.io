 var curIndex = 0;

var timeInterval = 5000;
                       
var arr = new Array();
arr[0] = "img/csll/1.jpg";
arr[1] = "img/csll/2.jpg";
arr[2] = "img/quyu/taizihequ.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {   
     if (curIndex == arr.length - 1) {
     curIndex = 0;
     } 
	else{
     curIndex += 1;
     }
document.body.style.backgroundImage = "URL("+arr[curIndex]+")";  
}
function myFunction(){
if(document.getElementById("user").value=="admin"){
if(document.getElementById("password").value=="123456"){
			alert("注册成功");
		}
	}
	else{
		alert("账号或者密码错误");
	}
}
