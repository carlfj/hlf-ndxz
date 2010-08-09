var edButtons=[],edLinks=[],edOpenTags=[];function edButton(a,b,c,e,d,f){this.id=a;this.display=b;this.tagStart=c;this.tagEnd=e;this.access=d;this.open=f}edButtons.push(new edButton("ed_bold","B","<strong>","</strong>","b"));edButtons.push(new edButton("ed_italic","I","<em>","</em>","i"));edButtons.push(new edButton("ed_link","Link","","</a>","a"));var extendedStart=edButtons.length;edButtons.push(new edButton("ed_under","U","<u>","</u>")); function edLink(a,b,c){this.display=a;this.URL=b;c||(c=0);this.newWin=c}edLinks[edLinks.length]=new edLink("alexking.org","http://www.alexking.org/"); function edShowButton(a,b){var c=a.access?' accesskey = "'+a.access+'"':"";switch(a.id){case "ed_img":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertImage(edCanvas);" value="'+a.display+'" />');break;case "ed_link":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertLink(edCanvas, '+b+');" value="'+a.display+'" />');break;case "ed_ext_link":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertExtLink(edCanvas, '+ b+');" value="'+a.display+'" />');break;case "ed_footnote":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertFootnote(edCanvas);" value="'+a.display+'" />');break;default:document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertTag(edCanvas, '+b+');" value="'+a.display+'" />');break}} function edShowButtonSAVED(a,b){var c=a.access?' accesskey = "'+a.access+'"':"";switch(a.id){case "ed_img":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertImage(edCanvas);" value="'+a.display+'" />');break;case "ed_link":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertLink(edCanvas, '+b+');" value="'+a.display+'" />');break;case "ed_ext_link":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertExtLink(edCanvas, '+ b+');" value="'+a.display+'" />');break;case "ed_footnote":document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertFootnote(edCanvas);" value="'+a.display+'" />');break;default:document.write('<input type="button" id="'+a.id+'" '+c+' class="ed_button" onclick="edInsertTag(edCanvas, '+b+');" value="'+a.display+'" />');break}} function edShowLinks(){var a='<select onchange="edQuickLink(this.options[this.selectedIndex].value, this);"><option value="-1" selected>(Quick Links)</option>';for(i=0;i<edLinks.length;i++)a+='<option value="'+i+'">'+edLinks[i].display+"</option>";a+="</select>";document.write(a)}function edAddTag(a){if(edButtons[a].tagEnd!=""){edOpenTags[edOpenTags.length]=a;document.getElementById(edButtons[a].id).value="/"+document.getElementById(edButtons[a].id).value}} function edRemoveTag(a){for(i=0;i<edOpenTags.length;i++)if(edOpenTags[i]==a){edOpenTags.splice(i,1);document.getElementById(edButtons[a].id).value=document.getElementById(edButtons[a].id).value.replace("/","")}}function edCheckOpenTags(a){var b=0;for(i=0;i<edOpenTags.length;i++)edOpenTags[i]==a&&b++;return b>0?true:false}function edCloseAllTags(){var a=edOpenTags.length;for(o=0;o<a;o++)edInsertTag(edCanvas,edOpenTags[edOpenTags.length-1])} function edQuickLink(a,b){if(a>-1){var c="";if(edLinks[a].newWin==1)c=' target="_blank"';c='<a href="'+edLinks[a].URL+'"'+c+">"+edLinks[a].display+"</a>";b.selectedIndex=0;edInsertContent(edCanvas,c)}else b.selectedIndex=0} function edSpell(a){var b="";if(document.selection){a.focus();a=document.selection.createRange();if(a.text.length>0)b=a.text}else if(a.selectionStart||a.selectionStart=="0"){var c=a.selectionStart,e=a.selectionEnd;if(c!=e)b=a.value.substring(c,e)}if(b=="")b=prompt("Enter a word to look up:","");b!=""&&window.open("http://www.answers.com/"+escape(b))} function edToolbar(){document.write('<div id="ed_toolbar"><span>');for(i=0;i<extendedStart;i++)edShowButton(edButtons[i],i);edShowExtraCookie()?document.write('<input type="button" id="ed_close" class="ed_button" onclick="edCloseAllTags();" value="Close Tags" /><input type="button" id="ed_spell" class="ed_button" onclick="edSpell(edCanvas);" value="Dict" /><input type="button" id="ed_extra_show" class="ed_button" onclick="edShowExtra()" value="&raquo;" style="visibility: hidden;" /></span><br /><span id="ed_extra_buttons"><input type="button" id="ed_extra_hide" class="ed_button" onclick="edHideExtra();" value="&laquo;" />'):document.write('<input type="button" id="ed_close" class="ed_button" onclick="edCloseAllTags();" value="Close Tags" /><input type="button" id="ed_spell" class="ed_button" onclick="edSpell(edCanvas);" value="Dict" /><input type="button" id="ed_extra_show" class="ed_button" onclick="edShowExtra()" value="&raquo;" /></span><br /><span id="ed_extra_buttons" style="display: none;"><input type="button" id="ed_extra_hide" class="ed_button" onclick="edHideExtra();" value="&laquo;" />'); for(i=extendedStart;i<edButtons.length;i++)edShowButton(edButtons[i],i);document.write("</span>");document.write("</div>")} function edToolbarIndexhibit(){document.write('<div id="ed_toolbar"><span>');for(i=0;i<extendedStart;i++)edShowButton(edButtons[i],i);edShowExtraCookie()?document.write('<input type="button" id="ed_close" class="ed_button" onclick="edCloseAllTags();" value="Close Tags" /></span><br />'):document.write('<input type="button" id="ed_close" class="ed_button" onclick="edCloseAllTags();" value="Close Tags" />');for(i=extendedStart;i<edButtons.length;i++)edShowButton(edButtons[i],i);document.write("</span>"); document.write("</div>")}function edShowExtra(){document.getElementById("ed_extra_show").style.visibility="hidden";document.getElementById("ed_extra_buttons").style.display="block";edSetCookie("js_quicktags_extra","show",new Date("December 31, 2100"))}function edHideExtra(){document.getElementById("ed_extra_buttons").style.display="none";document.getElementById("ed_extra_show").style.visibility="visible";edSetCookie("js_quicktags_extra","hide",new Date("December 31, 2100"))} function edInsertTag(a,b){if(document.selection){a.focus();sel=document.selection.createRange();if(sel.text.length>0)sel.text=edButtons[b].tagStart+sel.text+edButtons[b].tagEnd;else{sel.text=edButtons[b].tagStart;sel.text=edButtons[b].tagEnd}a.focus()}else if(a.selectionStart||a.selectionStart=="0"){var c=a.selectionStart,e=a.selectionEnd,d=e,f=a.scrollTop;if(c!=e){a.value=a.value.substring(0,c)+edButtons[b].tagStart+a.value.substring(c,e)+edButtons[b].tagEnd+a.value.substring(e,a.value.length);d+= edButtons[b].tagStart.length+edButtons[b].tagEnd.length}else{a.value=a.value.substring(0,c)+edButtons[b].tagStart+edButtons[b].tagEnd+a.value.substring(e,a.value.length);d=c+edButtons[b].tagStart.length}a.focus();a.selectionStart=d;a.selectionEnd=d;a.scrollTop=f}else{a.value+=edButtons[b].tagStart;a.value+=edButtons[b].tagEnd;a.focus()}} function edInsertContent(a,b){if(document.selection){a.focus();sel=document.selection.createRange();sel.text=b;a.focus()}else if(a.selectionStart||a.selectionStart=="0"){var c=a.selectionStart,e=a.selectionEnd,d=a.scrollTop;a.value=a.value.substring(0,c)+b+a.value.substring(e,a.value.length);a.focus();a.selectionStart=c+b.length;a.selectionEnd=c+b.length;a.scrollTop=d}else{a.value+=b;a.focus()}} function edInsertLink(a,b,c){if(!edCheckOpenTags(b))edButtons[b].tagStart='<a href="'+c+'">';edInsertTag(a,b)}function edInsertSysLink(a,b,c){if(!edCheckOpenTags(b))edButtons[b].tagStart=c;edInsertTag(a,b)}function edInsertLinkSAVED(a,b,c){c||(c="http://");if(edCheckOpenTags(b))edInsertTag(a,b);else if(c=prompt("Enter the URL",c)){edButtons[b].tagStart='<a href="'+c+'">';edInsertTag(a,b)}} function edInsertExtLink(a,b,c){c||(c="http://");if(edCheckOpenTags(b))edInsertTag(a,b);else if(c=prompt("Enter the URL",c)){edButtons[b].tagStart='<a href="'+c+'" rel="external">';edInsertTag(a,b)}}function edInsertImage(a){var b=prompt("Enter the URL of the image","http://");if(b){b='<img src="'+b+'" alt="'+prompt("Enter a description of the image","")+'" />';edInsertContent(a,b)}} function edInsertFootnote(){var a=prompt("Enter the footnote:","");if(!a||a=="")return false;var b="fn"+(new Date).getTime(),c=edCanvas.value.indexOf('<ol class="footnotes">');if(c!=-1){var e=edCanvas.value.substring(0,c),d=edCanvas.value.substring(c,edCanvas.value.length);d=countInstances(d,'<li id="')+1}else d=1;d='<sup><a href="#'+b+'n" id="'+b+'" class="footnote">'+d+"</a></sup>";edInsertContent(edCanvas,d);if(c!=-1){e=edCanvas.value.substring(0,c+d.length);d=edCanvas.value.substring(c+d.length, edCanvas.value.length)}else{e=edCanvas.value;d='\n\n<ol class="footnotes">\n</ol>\n'}edCanvas.value=e+d.replace("</ol>",'\t<li id="'+b+'n">'+a+' [<a href="#'+b+'">back</a>]</li>\n</ol>')}function countInstances(a,b){return a.split(b).length-1}function edSetCookie(a,b,c,e,d){document.cookie=a+"="+escape(b)+(c?"; expires="+c.toGMTString():"")+(e?"; path="+e:"")+(d?"; domain="+d:"")} function edShowExtraCookie(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){for(var c=a[b];c.charAt(0)==" ";)c=c.substring(1,c.length);if(c.indexOf("js_quicktags_extra")==0)return c.substring(19,c.length)=="show"?true:false}return false};