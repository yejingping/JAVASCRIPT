<!doctype html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<p>当前的时间是:<span id="time"></span></p>


<script type="text/javascript">
     var nowTime;
     function showPlay()
     {
         //实例化一个日期时间对象
        var now = new Date();
        //获取完整的年份,4位年份
        var year = now.getFullYear();
        //获取当前月份(0-11),0代表1
        var month = now.getMonth()+1;
        //获取当前日(1-31)
         var day = now.getDate();
         //获取当前的小时数(0-23)
        var hour = now.getHours();
        //获取当前的分钟数(0-59)
        var minutes = now.getMinutes();
        //获取当前秒数(0-59)
        var seconds = now.getSeconds();
        var nowTime = ""+year+"年"+month+"月"+day+"日 "+hour+":"+minutes+":"+seconds+"";
        var timeContent = document.getElementById("time");
        timeContent.innerHTML=nowTime;
     }
     setInterval(showPlay,1000);
</script>
</body>
</html>
