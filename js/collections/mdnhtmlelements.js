define(["jQuery","Underscore","Backbone","models/sectionscrape"],function(a,b,c,d){var e=new RegExp("^(\\W*)(.+)$"),f=c.Collection.extend({url:"data/html-mdn.json",model:d,comparator:function(a){var b=a.get("title"),c=e.exec(b),d=c[1],f=c[2].toLowerCase();return d?"1"+b:"0"+f}});return f})