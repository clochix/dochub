define(["jQuery","Underscore","Backbone"],function(a,b,c){var d=c.View.extend({initialize:function(){b.bindAll(this,"onResize"),a(window).resize(this.onResize),this.$tocWell=a("#toc"),this.$tocResultsDiv=a("#toc-results"),this.$searchResults=a("#search-results"),this.$container=a("#container"),this.onResize()},onResize:function(){var b=a(window).height();this.$tocWell.css("max-height",b-100+"px"),this.$tocResultsDiv.css("max-height",b-125+"px"),this.$searchResults.height(b-80),this.$container.height(Math.max(a("#toc").height(),this.$searchResults.height()))}});return d})