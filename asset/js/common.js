function OpenWindow(c,b,d,a,e){winprops="height="+a+",width="+d+",top="+(screen.height-a)/2+",left="+(screen.width-d)/2+",scrollbars="+e+",resizable";win=window.open(c,b,winprops);parseInt(navigator.appVersion)>=4&&win.window.focus()} function editTab(c){if(document.getElementById){var b=document.getElementById(c),d=document.getElementById("tab").getElementsByTagName("div");if(b.style.display!="block")for(var a=0;a<d.length;a++)if(d[a].className=="subTabs"){d[a].style.display="none";styleTab(d[a].id,"off")}b.style.display="block";styleTab(c,"on")}}function styleTab(c,b){tabStyle=document.getElementById("a"+c);tabStyle.className=b=="on"?"tabOn":"tabOff"} function toggle(c){if(document.getElementById){target=document.getElementById(c);target.style.display=target.style.display=="none"?"":"none"}}function gohere(c){window.location.href=c}var nextHiddenIndex=1;function AddFileInput(){ylib_getObj("fileInput"+nextHiddenIndex).style.display=document.all?"block":"table-row";nextHiddenIndex++;if(nextHiddenIndex>=10)ylib_getObj("attachMoreLink").style.display="none"} function ylib_getObj(c,b){var d,a;b||(b=document);if(!(a=b[c])&&b.all)a=b.all[c];for(d=0;!a&&d<b.forms.length;d++)a=b.forms[d][c];for(d=0;!a&&b.layers&&d<b.layers.length;d++)a=ylib_getObj(c,b.layers[d].document);if(!a&&document.getElementById)a=document.getElementById(c);return a}function fader(){$(".notify").remove()};