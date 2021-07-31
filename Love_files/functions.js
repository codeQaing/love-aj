/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current == "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

//把今天年月日封装成为函数
function getDate() {
  var date = new Date(); //初始化
  var l = date.getFullYear();
  var y = date.getMonth() + 1;
  var r = date.getDate();
  var arr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var day = date.getDay();
  return (
    "时间是最好的见证者: <br />今天是" +
    l +
    "年" +
    y +
    "月" +
    r +
    "日" +
    arr[day]
  );
}
// 把今天的时间封装成函数返回当前值
function getTimer() {
  var time = new Date();
  var h = time.getHours();
  h = h < 10 ? "0" + h : h;
  var m = time.getMinutes();
  m = m < 10 ? "0" + m : m;
  var s = time.getSeconds();
  s = s < 10 ? "0" + s : s;
  return `${h} : ${m} :${s}`;
}
function timeElapse() {
  let result = getDate() + getTimer();
  $("#clock").html(result);
}
