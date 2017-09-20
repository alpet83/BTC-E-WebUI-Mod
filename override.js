var e = document.getElementById('content');
var html = e.innerHTML;
var sw = $(window).width();
var fw = sw - 330;
var fh = fw / 2;
var cfw = fw - 10;

html = html.replace('<div style="width: 680px; float: left;">', '<div style="width: ' + fw + 'px; float: left;">');
html = html.replace('width: 661px;height: 300px', 'width: ' + cfw + 'px;height: ' + fh + 'px');
html = html.replace('width: 661px', 'width: ' + cfw + 'px');
html = html.replace(/'width': 661,\n\s+'height': 300/,  "'width': " + cfw + ",\n\t 'height': " + fh);
html = html.replace("'theme': 'White'", "'theme': 'Grey'");
html = html.replace("'locale': 'en'", "'locale': 'ru'");
html = html.replace("theme=White", "theme=Black");
html = html.replace("locale=en", "locale=ru");
html = html.replace("symboledit=1", "symboledit=0&hidesidetoolbar=0&enablepublishing=true");
html = html.replace("studies=", "studies=RSI%40tv-basicstudies");
html = html.replace("interval=15", "interval=D");
html = html.replace("toolbarbg=f1f3f6", "toolbarbg=rgba(101, 101, 101, 1)");
html = html.replace('allowtransparency="true"', 'allowtransparency="false"');
// html = html.replace("style=1", "style=3");
html = html.replace('width="661" height="300"', 'width="' + cfw + '" height="' + fh + '"');


e.innerHTML = html;


$("#content").children('div').children('div:first').appendTo( $("#content").children('div').eq(1) );
var dom = $(".inblock:first");
dom.width(450).css("background-color", "#c0ffc0"); 
dom = dom.next();
dom.css("background-color", "#FFC0C0");
dom.width(450);
var orders_list = $("#orders-self-list");

olw = cfw - 950;

orders_list.parent().css("float", "left").insertAfter($(".inblock:first") ).width(olw); 

pair = $(".pairs-selected:first").get(0).innerHTML.match(/(\w+)\/(\w+)/);

var dom_chart_url = "???";

// COMMENT next block, for disable DOM chart
if (pair && pair[1])
{
   pair = (pair[1] + '_' + pair[2]).toLowerCase();
   // html = orders_list.parent().innerHTML;
   dom_chart_url = 'https://vds.alpet.me/draw_depth.php?pair=' + pair + '&w=' + olw + '&limit=150';
   setTimeout(reloadDOMChart, 60000);
   orders_list.after('<img id="dom_chart" src="' + dom_chart_url + '" />');
}   

function reloadDOMChart()
{
    var d = new Date(); 
    $("#dom_chart").attr("src", dom_chart_url + "&"+d.getTime());     
    setTimeout(reloadDOMChart, 60000);
}





var btns = $(".pairs:first");
if (btns) {
    btns.css("background-color", "#103010");  
    btns = btns.children('li'); // first li
    var gc = "-webkit-linear-gradient(top,#ffff96 0%,#eeeeff 100%)";
    btns.eq(0).css("background", gc);
    btns.eq(1).css("background", gc);
    btns.eq(2).css("background", gc);
    gc = "-webkit-linear-gradient(top,#e0b0e0 0%,#d6a676 100%)";
    btns.eq(7).css("background", gc);
    btns.eq(8).css("background", gc);
    gc = "-webkit-linear-gradient(top,orange 0%,#d6d630 100%)";
    btns.eq(9).css("background", gc);
    btns.eq(10).css("background", gc);    
    gc = "-webkit-linear-gradient(top,lime 0%,#007620 100%)";
    btns.eq(11).css("background", gc);
    gc = "-webkit-linear-gradient(top,aqua 0%,#30d630 100%)";
    btns.eq(12).css("background", gc);    
    btns.eq(13).css("background", gc);
    gc = "-webkit-linear-gradient(top,aqua 0%,#ffe0e0 100%)";
    btns.eq(14).css("background", gc);    
    btns.eq(15).css("background", gc);
    
    // dsh
    gc = "-webkit-linear-gradient(top,#ffe0e0 0%,#d6a6a6 100%)";
    for (var i = 0; i < 6; i ++)
         btns.eq(16 + i).css("background", gc);
         
    // eth     
    gc = "-webkit-linear-gradient(top, #6699ff 0%,#e0c0a6 100%)";
    for (var i = 0; i < 5; i ++)
         btns.eq(22 + i).css("background", gc);
}

// HINT: uncomment next block, for enable auto hide after-trade info window
/*
ex_trade = function (a,b)
{ "buy"==a&&(tr="b");"sell"==a&&(tr="s");
  var c=$("#token").val(),d=$("#"+tr+"_btc").val(),e=$("#"+tr+"_price").val();
  showLoader();$.post(_url("order"),{trade:a,btc_count:d,btc_price:e,pair:b,token:c},
  function(a) {
     "n"==a.error?nPopReady(510,240):nPopReady(430,70);$("#nPopupCon").html(a.data);hideLoader();
     setTimeout(function() {
         $("#nPopupCon").hide();
     }, 700);
  },"json");
}
// */