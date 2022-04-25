<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/source/img/favicon.png");
         document.title = 'ヽ(●-`Д´-)ノ哎，你去哪里呢？';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/source/img/favicon.png");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });