# 小時鐘

## 說明
1.簡易的小時鐘

2.可顯示出現在的時間

## 技術手段
1.使用body onload="showTime()"來顯示時間
 
2.  
    var today=new Date();

    var h=today.getHours();
    
    var m=today.getMinutes();
    
    var s=today.getSeconds();
    
    取得時間後用document.getElementById('time').innerHTML = h+":"+m+":"+s;設定顯示的樣子
