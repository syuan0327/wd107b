# 小畫板

## 說明

1.可以在畫板上畫圖

2.沒有選色和選粗細的功能

## 技術手段

1.使用jQuery

取得 jQuery Library程式碼，可直接到Google Hosted Libraries上找到最新的版本來使用，此方法可以節省頻寬與存放空間

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
2.使用Canvas

取得canvas context 

    var $canvas = $("#cSketchPad");
    
canvas點選、移動、放開按鍵事件時進行繪圖動作

    一開始設 drawMode = false;
    當滑鼠點下$canvas.mousedown(function (e) {
                      ctx.moveTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
                      drawMode = true;
                  })
    當滑鼠移動.mousemove(function (e) {
                    if (drawMode) {
                      ctx.moveTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
                      ctx.stroke();
                    }
                })  
    當放開滑鼠 .mouseup(function (e) {
                    drawMode = false;
                });
