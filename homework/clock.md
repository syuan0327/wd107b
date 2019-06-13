# 小時鐘

## 說明
1.簡易的小時鐘

2.可顯示出現在的時間

## 技術手段來顯示時間
1.使用此

     <body onload="showTime()">

2.取得時間用  

    var today=new Date();var h=today.getHours();
    
    var m=today.getMinutes();var s=today.getSeconds();
    
3.取得時間後用此來設定顯示的樣子
    
    document.getElementById('time').innerHTML = h+":"+m+":"+s;
