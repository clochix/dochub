(function(){var a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],b=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,c=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,d=typeof location!="undefined"&&location.href,e=d&&location.protocol&&location.protocol.replace(/\:/,""),f=d&&location.hostname,g=d&&(location.port||void 0),h=[];define([],function(){var l,m,s;return typeof window!="undefined"&&window.navigator&&window.document?m=function(a,b){var c=l.createXhr();c.open("GET",a,!0),c.onreadystatechange=function(){c.readyState===4&&b(c.responseText)},c.send(null)}:typeof process!="undefined"&&process.versions&&process.versions.node?(s=require.nodeRequire("fs"),m=function(a,b){b(s.readFileSync(a,"utf8"))}):typeof Packages!="undefined"&&(m=function(a,b){var c=new java.io.File(a),d=java.lang.System.getProperty("line.separator"),c=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(c),"utf-8")),e,f,g="";try{e=new java.lang.StringBuffer,(f=c.readLine())&&f.length()&&f.charAt(0)===65279&&(f=f.substring(1));for(e.append(f);(f=c.readLine())!==null;)e.append(d),e.append(f);g=String(e.toString())}finally{c.close()}b(g)}),l={version:"0.27.0",strip:function(a){if(a){var a=a.replace(b,""),d=a.match(c);d&&(a=d[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var b,c,d;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(c=0;c<3;c++){d=a[c];try{b=new ActiveXObject(d)}catch(e){}if(b){a=[d];break}}if(!b)throw Error("createXhr(): XMLHttpRequest not available");return b},get:m,parseName:function(a){var b=!1,c=a.indexOf("."),d=a.substring(0,c),a=a.substring(c+1,a.length),c=a.indexOf("!");return c!==-1&&(b=a.substring(c+1,a.length),b=b==="strip",a=a.substring(0,c)),{moduleName:d,ext:a,strip:b}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(a,b,c,d){var e=l.xdRegExp.exec(a),f;return e?(a=e[2],e=e[3],e=e.split(":"),f=e[1],e=e[0],(!a||a===b)&&(!e||e===c)&&(!f&&!e||f===d)):!0},finishLoad:function(a,b,c,d,e){c=b?l.strip(c):c,e.isBuild&&e.inlineText&&(h[a]=c),d(c)},load:function(a,b,c,h){var j=l.parseName(a),k=j.moduleName+"."+j.ext,m=b.toUrl(k),n=h&&h.text&&h.text.useXhr||l.useXhr;!d||n(m,e,f,g)?l.get(m,function(b){l.finishLoad(a,j.strip,b,c,h)}):b([k],function(a){l.finishLoad(j.moduleName+"."+j.ext,j.strip,a,c,h)})},write:function(a,b,c){if(b in h){var d=l.jsEscape(h[b]);c.asModule(a+"!"+b,"define(function () { return '"+d+"';});\n")}},writeFile:function(a,b,c,d,e){var b=l.parseName(b),f=b.moduleName+"."+b.ext,g=c.toUrl(b.moduleName+"."+b.ext)+".js";l.load(f,c,function(){var b=function(a){return d(g,a)};b.asModule=function(a,b){return d.asModule(a,g,b)},l.write(a,f,b,e)},e)}}})})()