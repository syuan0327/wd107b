# 側欄(mySidenav)

## 功能 
1、當按下按鈕（&times;）會跑出側欄，且整個網頁跟著移動，使側欄開啟時不會擋到網頁的內容

2、裡面包含個網頁的連結點

3、按下叉叉結束側欄

## 技術手段 

1、運用
<div id="mySidenav" ><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>製作一個關閉的按鈕
  
2、運用<div id="main" ><span  onclick="openNav()"> &#9776;</span></div>製作一個開啟的按鈕

3、
function openNav() {document.getElementById("mySidenav").style.width = "240px";}

function closeNav() {document.getElementById("mySidenav").style.width = "0px";}

當按下按鈕時會打開至寬度240px; 以此類推，所以當按下叉叉時closeNav()就會把側欄收起來 

