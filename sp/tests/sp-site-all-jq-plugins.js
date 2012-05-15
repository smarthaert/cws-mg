
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);



//hoverIntent
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);


/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);


/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */

;(function($){ // $ will refer to jQuery within this closure

	$.fn.supersubs = function(options){
		var opts = $.extend({}, $.fn.supersubs.defaults, options);
		// return original object to support chaining
		return this.each(function() {
			// cache selections
			var $$ = $(this);
			// support metadata
			var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
			// get the font size of menu.
			// .css('fontSize') returns various results cross-browser, so measure an em dash instead
			var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
				'padding' : 0,
				'position' : 'absolute',
				'top' : '-999em',
				'width' : 'auto'
			}).appendTo($$).width(); //clientWidth is faster, but was incorrect here
			// remove em dash
			$('#menu-fontsize').remove();
			// cache all ul elements
			$ULs = $$.find('ul');
			// loop through each ul in menu
			$ULs.each(function(i) {	
				// cache this ul
				var $ul = $ULs.eq(i);
				// get all (li) children of this ul
				var $LIs = $ul.children();
				// get all anchor grand-children
				var $As = $LIs.children('a');
				// force content to one line and save current float property
				var liFloat = $LIs.css('white-space','nowrap').css('float');
				// remove width restrictions and floats so elements remain vertically stacked
				var emWidth = $ul.add($LIs).add($As).css({
					'float' : 'none',
					'width'	: 'auto'
				})
				// this ul will now be shrink-wrapped to longest li due to position:absolute
				// so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
				.end().end()[0].clientWidth / fontsize;
				// add more width to ensure lines don't turn over at certain sizes in various browsers
				emWidth += o.extraWidth;
				// restrict to at least minWidth and at most maxWidth
				if (emWidth > o.maxWidth)		{ emWidth = o.maxWidth; }
				else if (emWidth < o.minWidth)	{ emWidth = o.minWidth; }
				emWidth += 'em';
				// set ul to width in ems
				$ul.css('width',emWidth);
				// restore li floats to avoid IE bugs
				// set li width to full width of this ul
				// revert white-space to normal
				$LIs.css({
					'float' : liFloat,
					'width' : '100%',
					'white-space' : 'normal'
				})
				// update offset position of descendant ul to reflect new width of parent
				.each(function(){
					var $childUl = $('>ul',this);
					var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';
					$childUl.css(offsetDirection,emWidth);
				});
			});
			
		});
	};
	// expose defaults
	$.fn.supersubs.defaults = {
		minWidth		: 9,		// requires em unit.
		maxWidth		: 25,		// requires em unit.
		extraWidth		: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
	};
	
})(jQuery); // plugin code ends



(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);



/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/* context-menu plugin */

(function(e,k){function B(a){for(var a=a.split(/\s+/),b=[],d=0,c;c=a[d];d++)c=c[0].toUpperCase(),b.push(c);return b}function p(a){return a.id&&e('label[for="'+a.id+'"]').val()||a.name}function z(a,b,d){d||(d=0);b.each(function(){var b=e(this),g=this,h=this.nodeName.toLowerCase(),f,j;"label"==h&&b.find("input, textarea, select").length&&(f=b.text(),b=b.children().first(),g=b.get(0),h=g.nodeName.toLowerCase());switch(h){case "menu":j={name:b.attr("label"),items:{}};z(j.items,b.children(),d);break;case "a":case "button":j=
{name:b.text(),disabled:!!b.attr("disabled"),callback:function(){return function(){b.click()}}()};break;case "menuitem":case "command":switch(b.attr("type")){case k:case "command":case "menuitem":j={name:b.attr("label"),disabled:!!b.attr("disabled"),callback:function(){return function(){b.click()}}()};break;case "checkbox":j={type:"checkbox",disabled:!!b.attr("disabled"),name:b.attr("label"),selected:!!b.attr("checked")};break;case "radio":j={type:"radio",disabled:!!b.attr("disabled"),name:b.attr("label"),
radio:b.attr("radiogroup"),value:b.attr("id"),selected:!!b.attr("checked")};break;default:j=k}break;case "hr":j="-------";break;case "input":switch(b.attr("type")){case "text":j={type:"text",name:f||p(g),disabled:!!b.attr("disabled"),value:b.val()};break;case "checkbox":j={type:"checkbox",name:f||p(g),disabled:!!b.attr("disabled"),selected:!!b.attr("checked")};break;case "radio":j={type:"radio",name:f||p(g),disabled:!!b.attr("disabled"),radio:!!b.attr("name"),value:b.val(),selected:!!b.attr("checked")};
break;default:j=k}break;case "select":j={type:"select",name:f||p(g),disabled:!!b.attr("disabled"),selected:b.val(),options:{}};b.children().each(function(){j.options[this.value]=e(this).text()});break;case "textarea":j={type:"textarea",name:f||p(g),disabled:!!b.attr("disabled"),value:b.val()};break;case "label":break;default:j={type:"html",html:b.clone(!0)}}j&&(d++,a["key"+d]=j)})}e.support.htmlMenuitem="HTMLMenuItemElement"in window;e.support.htmlCommand="HTMLCommandElement"in window;var i=null,
s=!1,t=!1,n=e(window),u=0,l={},o={},v={},w={selector:null,appendTo:null,trigger:"right",autoHide:!1,ignoreRightClick:!1,delay:200,determinePosition:function(a){if(e.ui&&e.ui.position)a.css("display","block").position({my:"center top",at:"center bottom",of:this,offset:"0 5",collision:"fit"}).css("display","none");else{var b=this.offset();b.top+=this.outerHeight();b.left+=this.outerWidth()/2-a.outerWidth()/2;a.css(b)}},position:function(a,b,d){if(!b&&!d)a.determinePosition.call(this,a.$menu);else{"maintain"===
b&&"maintain"===d?b=a.$menu.position():(a.$trigger.parents().andSelf().filter(function(){return"fixed"==e(this).css("position")}).length&&(d-=n.scrollTop(),b-=n.scrollLeft()),b={top:d,left:b});var d=n.scrollTop()+n.height(),c=n.scrollLeft()+n.width(),g=a.$menu.height(),h=a.$menu.width();b.top+g>d&&(b.top-=g);b.left+h>c&&(b.left-=h);a.$menu.css(b)}},positionSubmenu:function(a){if(e.ui&&e.ui.position)a.css("display","block").position({my:"left top",at:"right top",of:this,collision:"fit"}).css("display",
"");else{var b=this.offset();b.top+=0;b.left+=this.outerWidth();a.css(b)}},zIndex:1,animation:{duration:50,show:"slideDown",hide:"slideUp"},events:{show:e.noop,hide:e.noop},callback:null,items:{}},r=null,x=null,y=null,A,C=function(a){for(var b=0;!(b=Math.max(b,parseInt(a.css("z-index"),10)||0),a=a.parent(),!a||!a.length||"body"==a.prop("nodeName").toLowerCase()););return b},f={abortevent:function(a){a.preventDefault();a.stopImmediatePropagation()},contextmenu:function(a){var b=e(this);a.preventDefault();
a.stopImmediatePropagation();t?t=!1:b.hasClass("context-menu-disabled")||(i=b,a.data.build&&(e.extend(!0,a.data,w,a.data.build(i,a)||{}),m.create(a.data)),m.show.call(b,a.data,a.pageX,a.pageY))},click:function(a){a.preventDefault();a.stopImmediatePropagation();e(this).trigger(jQuery.Event("contextmenu",{data:a.data,pageX:a.pageX,pageY:a.pageY}))},mousedown:function(a){var b=e(this);i&&i.length&&!i.is(b)&&i.data("contextMenu").$menu.trigger("contextmenu:hide");2==a.button&&(i=b.data("contextMenuActive",
!0))},mouseup:function(a){var b=e(this);b.data("contextMenuActive")&&i&&i.length&&i.is(b)&&!b.hasClass("context-menu-disabled")&&(a.preventDefault(),a.stopImmediatePropagation(),i=b,b.trigger(jQuery.Event("contextmenu",{data:a.data,pageX:a.pageX,pageY:a.pageY})));b.removeData("contextMenuActive")},mouseenter:function(a){var b=e(this),d=e(a.relatedTarget),c=e(document);if(!d.is(".context-menu-list")&&!d.closest(".context-menu-list").length&&(!i||!i.length))x=a.pageX,y=a.pageY,A=a.data,c.on("mousemove.contextMenuShow",
f.mousemove),r=setTimeout(function(){r=null;c.off("mousemove.contextMenuShow");i=b;b.trigger(jQuery.Event("contextmenu",{data:A,pageX:x,pageY:y}))},a.data.delay)},mousemove:function(a){x=a.pageX;y=a.pageY},mouseleave:function(a){a=e(a.relatedTarget);if(!a.is(".context-menu-list")&&!a.closest(".context-menu-list").length){try{clearTimeout(r)}catch(b){}r=null}},ignoreRightClick:function(a){2==a.button&&(t=!0)},layerClick:function(a){var b=e(this),d=b.data("contextMenuRoot");a.preventDefault();a.stopImmediatePropagation();
b.remove();d.$menu.trigger("contextmenu:hide")},keyStop:function(a,b){b.isInput||a.preventDefault();a.stopPropagation()},key:function(a){var b=i.data("contextMenu")||{};b.$menu.children();switch(a.keyCode){case 9:case 38:if(f.keyStop(a,b),b.isInput){if(9==a.keyCode&&a.shiftKey){a.preventDefault();b.$selected&&b.$selected.find("input, textarea, select").blur();b.$menu.trigger("prevcommand");return}if(38==a.keyCode&&"checkbox"==b.$selected.find("input, textarea, select").prop("type")){a.preventDefault();
return}}else if(9!=a.keyCode||a.shiftKey){b.$menu.trigger("prevcommand");return}case 9:case 40:f.keyStop(a,b);if(b.isInput){if(9==a.keyCode){a.preventDefault();b.$selected&&b.$selected.find("input, textarea, select").blur();b.$menu.trigger("nextcommand");return}if(40==a.keyCode&&"checkbox"==b.$selected.find("input, textarea, select").prop("type")){a.preventDefault();return}}else{b.$menu.trigger("nextcommand");return}break;case 37:f.keyStop(a,b);if(b.isInput||!b.$selected||!b.$selected.length)break;
if(!b.$selected.parent().hasClass("context-menu-root")){a=b.$selected.parent().parent();b.$selected.trigger("contextmenu:blur");b.$selected=a;return}break;case 39:f.keyStop(a,b);if(b.isInput||!b.$selected||!b.$selected.length)break;var d=b.$selected.data("contextMenu")||{};if(d.$menu&&b.$selected.hasClass("context-menu-submenu")){b.$selected=null;d.$selected=null;d.$menu.trigger("nextcommand");return}break;case 13:f.keyStop(a,b);if(b.isInput){if(b.$selected&&!b.$selected.is(":textarea, :select")){a.preventDefault();
return}break}b.$selected&&b.$selected.trigger("mouseup");return;case 32:f.keyStop(a,b);return;case 27:f.keyStop(a,b);b.$menu.trigger("contextmenu:hide");return;default:if(d=String.fromCharCode(a.keyCode).toUpperCase(),b.accesskeys[d]){b.accesskeys[d].$node.trigger(b.accesskeys[d].$menu?"contextmenu:focus":"mouseup");return}}a.stopPropagation();b.$selected&&b.$selected.trigger(a)},prevItem:function(a){a.stopPropagation();var b=e(this).data("contextMenu")||{};if(b.$selected){var d=b.$selected,b=b.$selected.parent().data("contextMenu")||
{};b.$selected=d}for(var d=b.$menu.children(),c=!b.$selected||!b.$selected.prev().length?d.last():b.$selected.prev(),g=c;c.hasClass("disabled")||c.hasClass("not-selectable");)if(c=c.prev().length?c.prev():d.last(),c.is(g))return;b.$selected&&f.itemMouseleave.call(b.$selected.get(0),a);f.itemMouseenter.call(c.get(0),a);a=c.find("input, textarea, select");a.length&&a.focus()},nextItem:function(a){a.stopPropagation();var b=e(this).data("contextMenu")||{};if(b.$selected){var d=b.$selected,b=b.$selected.parent().data("contextMenu")||
{};b.$selected=d}for(var d=b.$menu.children(),c=!b.$selected||!b.$selected.next().length?d.first():b.$selected.next(),g=c;c.hasClass("disabled")||c.hasClass("not-selectable");)if(c=c.next().length?c.next():d.first(),c.is(g))return;b.$selected&&f.itemMouseleave.call(b.$selected.get(0),a);f.itemMouseenter.call(c.get(0),a);a=c.find("input, textarea, select");a.length&&a.focus()},focusInput:function(){var a=e(this).closest(".context-menu-item"),b=a.data(),d=b.contextMenu,b=b.contextMenuRoot;b.$selected=
d.$selected=a;b.isInput=d.isInput=!0},blurInput:function(){var a=e(this).closest(".context-menu-item").data();a.contextMenuRoot.isInput=a.contextMenu.isInput=!1},menuMouseenter:function(){e(this).data().contextMenuRoot.hovering=!0},menuMouseleave:function(a){var b=e(this).data().contextMenuRoot;if(b.$layer&&b.$layer.is(a.relatedTarget))b.hovering=!1},itemMouseenter:function(a){var b=e(this),d=b.data(),c=d.contextMenu,d=d.contextMenuRoot;d.hovering=!0;a&&d.$layer&&d.$layer.is(a.relatedTarget)&&(a.preventDefault(),
a.stopImmediatePropagation());(c.$menu?c:d).$menu.children(".hover").trigger("contextmenu:blur");b.hasClass("disabled")||b.hasClass("not-selectable")?c.$selected=null:b.trigger("contextmenu:focus")},itemMouseleave:function(a){var b=e(this),d=b.data(),c=d.contextMenu,d=d.contextMenuRoot;d!==c&&d.$layer&&d.$layer.is(a.relatedTarget)?(d.$selected&&d.$selected.trigger("contextmenu:blur"),a.preventDefault(),a.stopImmediatePropagation(),d.$selected=c.$selected=c.$node):b.trigger("contextmenu:blur")},itemClick:function(a){var b=
e(this),d=b.data(),c=d.contextMenuRoot,g=d.contextMenuKey;if(d.contextMenu.items[g]&&!b.hasClass("disabled")){a.preventDefault();a.stopImmediatePropagation();if(e.isFunction(c.callbacks[g]))a=c.callbacks[g];else if(e.isFunction(c.callback))a=c.callback;else return;!1!==a.call(c.$trigger,g,c)?c.$menu.trigger("contextmenu:hide"):m.update.call(c.$trigger,c)}},inputClick:function(a){a.stopImmediatePropagation()},hideMenu:function(){var a=e(this).data("contextMenuRoot");m.hide.call(a.$trigger,a)},focusItem:function(a){a.stopPropagation();
var a=e(this),b=a.data(),d=b.contextMenu,b=b.contextMenuRoot;a.addClass("hover").siblings(".hover").trigger("contextmenu:blur");d.$selected=b.$selected=a;d.$node&&b.positionSubmenu.call(d.$node,d.$menu)},blurItem:function(a){a.stopPropagation();var a=e(this),b=a.data().contextMenu;a.removeClass("hover");b.$selected=null}},m={show:function(a,b,d){var c=e(this),g={};e("#context-menu-layer").trigger("mousedown");if(!1===a.events.show.call(c,a))i=null;else{a.$trigger=c;m.update.call(c,a);a.position.call(c,
a,b,d);if(a.zIndex)g.zIndex=C(c)+a.zIndex;m.layer.call(a.$menu,a,g.zIndex);a.$menu.find("ul").css("zIndex",g.zIndex+1);a.$menu.css(g)[a.animation.show](a.animation.duration);c.data("contextMenu",a);e(document).off("keydown.contextMenu").on("keydown.contextMenu",f.key);if(a.autoHide){var h=c.position();h.right=h.left+c.outerWidth();h.bottom=h.top+this.outerHeight();e(document).on("mousemove.contextMenuAutoHide",function(b){a.$layer&&!a.hovering&&(!(b.pageX>=h.left&&b.pageX<=h.right)||!(b.pageY>=h.top&&
b.pageY<=h.bottom))&&a.$layer.trigger("mousedown")})}}},hide:function(a){var b=e(this);a||(a=b.data("contextMenu")||{});if(!(a.events&&!1===a.events.hide.call(b,a))){if(a.$layer)try{a.$layer.remove(),delete a.$layer}catch(d){a.$layer=null}i=null;a.$menu.find(".hover").trigger("contextmenu:blur");a.$selected=null;e(document).off(".contextMenuAutoHide").off("keydown.contextMenu");a.$menu&&a.$menu[a.animation.hide](a.animation.duration);a.build&&(a.$menu.remove(),e.each(a,function(b){switch(b){case "ns":case "selector":case "build":case "trigger":case "ignoreRightClick":return!0;
default:a[b]=k;try{delete a[b]}catch(d){}return!0}}))}},create:function(a,b){b===k&&(b=a);a.$menu=e('<ul class="context-menu-list '+(a.className||"")+'"></ul>').data({contextMenu:a,contextMenuRoot:b});e.each(["callbacks","commands","inputs"],function(d,c){a[c]={};b[c]||(b[c]={})});b.accesskeys||(b.accesskeys={});e.each(a.items,function(d,c){var g=e('<li class="context-menu-item '+(c.className||"")+'"></li>'),h=null,q=null;c.$node=g.data({contextMenu:a,contextMenuRoot:b,contextMenuKey:d});if(c.accesskey)for(var j=
B(c.accesskey),i=0,k;k=j[i];i++)if(!b.accesskeys[k]){b.accesskeys[k]=c;c._name=c.name.replace(RegExp("("+k+")","i"),'<span class="context-menu-accesskey">$1</span>');break}if("string"==typeof c)g.addClass("context-menu-separator not-selectable");else if(c.type&&v[c.type])v[c.type].call(g,c,a,b),e.each([a,b],function(a,b){b.commands[d]=c;if(e.isFunction(c.callback))b.callbacks[d]=c.callback});else{if("html"==c.type)g.addClass("context-menu-html not-selectable");else if(c.type)h=e("<label></label>").appendTo(g),
e("<span></span>").html(c._name||c.name).appendTo(h),g.addClass("context-menu-input"),a.hasTypes=!0,e.each([a,b],function(a,b){b.commands[d]=c;b.inputs[d]=c});else if(c.items)c.type="sub";switch(c.type){case "text":q=e('<input type="text" value="1" name="context-menu-input-'+d+'" value="">').val(c.value||"").appendTo(h);break;case "textarea":q=e('<textarea name="context-menu-input-'+d+'"></textarea>').val(c.value||"").appendTo(h);c.height&&q.height(c.height);break;case "checkbox":q=e('<input type="checkbox" value="1" name="context-menu-input-'+
d+'" value="">').val(c.value||"").prop("checked",!!c.selected).prependTo(h);break;case "radio":q=e('<input type="radio" value="1" name="context-menu-input-'+c.radio+'" value="">').val(c.value||"").prop("checked",!!c.selected).prependTo(h);break;case "select":q=e('<select name="context-menu-input-'+d+'">').appendTo(h);c.options&&(e.each(c.options,function(a,b){e("<option></option>").val(a).text(b).appendTo(q)}),q.val(c.selected));break;case "sub":e("<span></span>").html(c._name||c.name).appendTo(g);
c.appendTo=c.$node;m.create(c,b);g.data("contextMenu",c).addClass("context-menu-submenu");c.callback=null;break;case "html":e(c.html).appendTo(g);break;default:e.each([a,b],function(a,b){b.commands[d]=c;if(e.isFunction(c.callback))b.callbacks[d]=c.callback}),e("<span></span>").html(c._name||c.name||"").appendTo(g)}if(c.type&&"sub"!=c.type&&"html"!=c.type&&(q.on("focus",f.focusInput).on("blur",f.blurInput),c.events))q.on(c.events);c.icon&&g.addClass("icon icon-"+c.icon)}c.$input=q;c.$label=h;g.appendTo(a.$menu);
if(!a.hasTypes)if(e.browser.msie)g.on("selectstart.disableTextSelect",f.abortevent);else if(!e.browser.mozilla)g.on("mousedown.disableTextSelect",f.abortevent)});a.$node||a.$menu.css("display","none").addClass("context-menu-root");a.$menu.appendTo(a.appendTo||document.body)},update:function(a,b){var d=this;b===k&&(b=a,a.$menu.find("ul").andSelf().css({position:"static",display:"block"}).each(function(){var a=e(this);a.width(a.css("position","absolute").width()).css("position","static")}).css({position:"",
display:""}));a.$menu.children().each(function(){var c=e(this),g=c.data("contextMenuKey"),h=a.items[g],g=e.isFunction(h.disabled)&&h.disabled.call(d,g,b)||!0===h.disabled;c[g?"addClass":"removeClass"]("disabled");if(h.type)switch(c.find("input, select, textarea").prop("disabled",g),h.type){case "text":case "textarea":h.$input.val(h.value||"");break;case "checkbox":case "radio":h.$input.val(h.value||"").prop("checked",!!h.selected);break;case "select":h.$input.val(h.selected||"")}h.$menu&&m.update.call(d,
h,b)})},layer:function(a,b){return a.$layer=e('<div id="context-menu-layer" style="position:fixed; z-index:'+b+'; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({height:n.height(),width:n.width(),display:"block"}).data("contextMenuRoot",a).insertBefore(this).on("mousedown",f.layerClick)}};e.fn.contextMenu=function(a){a===k?this.first().trigger("contextmenu"):a.x&&a.y?this.first().trigger(jQuery.Event("contextmenu",{pageX:a.x,pageY:a.y})):"hide"===a?(a=this.data("contextMenu").$menu)&&
a.trigger("contextmenu:hide"):a?this.removeClass("context-menu-disabled"):a||this.addClass("context-menu-disabled");return this};e.contextMenu=function(a,b){"string"!=typeof a&&(b=a,a="create");"string"==typeof b?b={selector:b}:b===k&&(b={});var d=e.extend(!0,{},w,b||{}),c=c=e(document);switch(a){case "create":if(!d.selector)throw Error("No selector specified");if(d.selector.match(/.context-menu-(list|item|input)($|\s)/))throw Error('Cannot bind to selector "'+d.selector+'" as it contains a reserved className');
if(!d.build&&(!d.items||e.isEmptyObject(d.items)))throw Error("No Items sepcified");u++;d.ns=".contextMenu"+u;l[d.selector]=d.ns;o[d.ns]=d;s||(c.on({"contextmenu:hide.contextMenu":f.hideMenu,"prevcommand.contextMenu":f.prevItem,"nextcommand.contextMenu":f.nextItem,"contextmenu.contextMenu":f.abortevent,"mouseenter.contextMenu":f.menuMouseenter,"mouseleave.contextMenu":f.menuMouseleave},".context-menu-list").on("mouseup.contextMenu",".context-menu-input",f.inputClick).on({"mouseup.contextMenu":f.itemClick,
"contextmenu:focus.contextMenu":f.focusItem,"contextmenu:blur.contextMenu":f.blurItem,"contextmenu.contextMenu":f.abortevent,"mouseenter.contextMenu":f.itemMouseenter,"mouseleave.contextMenu":f.itemMouseleave},".context-menu-item"),s=!0);c.on("contextmenu"+d.ns,d.selector,d,f.contextmenu);switch(d.trigger){case "hover":c.on("mouseenter"+d.ns,d.selector,d,f.mouseenter).on("mouseleave"+d.ns,d.selector,d,f.mouseleave);break;case "left":c.on("click"+d.ns,d.selector,d,f.click)}if("hover"!=d.trigger&&d.ignoreRightClick)c.on("mousedown"+
d.ns,d.selector,f.ignoreRightClick);d.build||m.create(d);break;case "destroy":if(d.selector){if(l[d.selector]){try{o[l[d.selector]].$menu&&o[l[d.selector]].$menu.remove(),delete o[l[d.selector]]}catch(g){o[l[d.selector]]=null}c.off(l[d.selector])}}else c.off(".contextMenu .contextMenuAutoHide"),e.each(l,function(a,b){c.off(b)}),l={},o={},u=0,s=!1,e(".context-menu-list").remove();break;case "html5":(!e.support.htmlCommand&&!e.support.htmlMenuitem||"boolean"==typeof b&&b)&&e('menu[type="context"]').each(function(){this.id&&
e.contextMenu({selector:"[contextmenu="+this.id+"]",items:e.contextMenu.fromMenu(this)})}).css("display","none");break;default:throw Error('Unknown operation "'+a+'"');}return this};e.contextMenu.setInputValues=function(a,b){b===k&&(b={});e.each(a.inputs,function(a,c){switch(c.type){case "text":case "textarea":c.value=b[a]||"";break;case "checkbox":c.selected=b[a]?!0:!1;break;case "radio":c.selected=(b[c.radio]||"")==c.value?!0:!1;break;case "select":c.selected=b[a]||""}})};e.contextMenu.getInputValues=
function(a,b){b===k&&(b={});e.each(a.inputs,function(a,c){switch(c.type){case "text":case "textarea":case "select":b[a]=c.$input.val();break;case "checkbox":b[a]=c.$input.prop("checked");break;case "radio":if(c.$input.prop("checked"))b[c.radio]=c.value}});return b};e.contextMenu.fromMenu=function(a){var a=e(a),b={};z(b,a.children());return b};e.contextMenu.defaults=w;e.contextMenu.types=v})(jQuery);(function(e,k){function B(a){for(var a=a.split(/\s+/),b=[],d=0,c;c=a[d];d++)c=c[0].toUpperCase(),b.push(c);return b}function p(a){return a.id&&e('label[for="'+a.id+'"]').val()||a.name}function z(a,b,d){d||(d=0);b.each(function(){var b=e(this),g=this,f=this.nodeName.toLowerCase(),i,j;"label"==f&&b.find("input, textarea, select").length&&(i=b.text(),b=b.children().first(),g=b.get(0),f=g.nodeName.toLowerCase());switch(f){case "menu":j={name:b.attr("label"),items:{}};z(j.items,b.children(),d);break;case "a":case "button":j=
{name:b.text(),disabled:!!b.attr("disabled"),callback:function(){return function(){b.click()}}()};break;case "menuitem":case "command":switch(b.attr("type")){case k:case "command":case "menuitem":j={name:b.attr("label"),disabled:!!b.attr("disabled"),callback:function(){return function(){b.click()}}()};break;case "checkbox":j={type:"checkbox",disabled:!!b.attr("disabled"),name:b.attr("label"),selected:!!b.attr("checked")};break;case "radio":j={type:"radio",disabled:!!b.attr("disabled"),name:b.attr("label"),
radio:b.attr("radiogroup"),value:b.attr("id"),selected:!!b.attr("checked")};break;default:j=k}break;case "hr":j="-------";break;case "input":switch(b.attr("type")){case "text":j={type:"text",name:i||p(g),disabled:!!b.attr("disabled"),value:b.val()};break;case "checkbox":j={type:"checkbox",name:i||p(g),disabled:!!b.attr("disabled"),selected:!!b.attr("checked")};break;case "radio":j={type:"radio",name:i||p(g),disabled:!!b.attr("disabled"),radio:!!b.attr("name"),value:b.val(),selected:!!b.attr("checked")};
break;default:j=k}break;case "select":j={type:"select",name:i||p(g),disabled:!!b.attr("disabled"),selected:b.val(),options:{}};b.children().each(function(){j.options[this.value]=e(this).text()});break;case "textarea":j={type:"textarea",name:i||p(g),disabled:!!b.attr("disabled"),value:b.val()};break;case "label":break;default:j={type:"html",html:b.clone(!0)}}j&&(d++,a["key"+d]=j)})}e.support.htmlMenuitem="HTMLMenuItemElement"in window;e.support.htmlCommand="HTMLCommandElement"in window;var i=null,
s=!1,t=!1,n=e(window),u=0,l={},o={},v={},w={selector:null,appendTo:null,trigger:"right",autoHide:!1,ignoreRightClick:!1,delay:200,determinePosition:function(a){if(e.ui&&e.ui.position)a.css("display","block").position({my:"center top",at:"center bottom",of:this,offset:"0 5",collision:"fit"}).css("display","none");else{var b=this.offset();b.top+=this.outerHeight();b.left+=this.outerWidth()/2-a.outerWidth()/2;a.css(b)}},position:function(a,b,d){if(!b&&!d)a.determinePosition.call(this,a.$menu);else{"maintain"===
b&&"maintain"===d?b=a.$menu.position():(a.$trigger.parents().andSelf().filter(function(){return"fixed"==e(this).css("position")}).length&&(d-=n.scrollTop(),b-=n.scrollLeft()),b={top:d,left:b});var d=n.scrollTop()+n.height(),c=n.scrollLeft()+n.width(),g=a.$menu.height(),f=a.$menu.width();b.top+g>d&&(b.top-=g);b.left+f>c&&(b.left-=f);a.$menu.css(b)}},positionSubmenu:function(a){if(e.ui&&e.ui.position)a.css("display","block").position({my:"left top",at:"right top",of:this,collision:"fit"}).css("display",
"");else{var b=this.offset();b.top+=0;b.left+=this.outerWidth();a.css(b)}},zIndex:1,animation:{duration:50,show:"slideDown",hide:"slideUp"},events:{show:e.noop,hide:e.noop},callback:null,items:{}},r=null,x=null,y=null,A,C=function(a){for(var b=0;!(b=Math.max(b,parseInt(a.css("z-index"),10)||0),a=a.parent(),!a||!a.length||"body"==a.prop("nodeName").toLowerCase()););return b},f={abortevent:function(a){a.preventDefault();a.stopImmediatePropagation()},contextmenu:function(a){var b=e(this);a.preventDefault();
a.stopImmediatePropagation();t?t=!1:b.hasClass("context-menu-disabled")||(i=b,a.data.build&&(e.extend(!0,a.data,w,a.data.build(i,a)||{}),m.create(a.data)),m.show.call(b,a.data,a.pageX,a.pageY))},click:function(a){a.preventDefault();a.stopImmediatePropagation();e(this).trigger(jQuery.Event("contextmenu",{data:a.data,pageX:a.pageX,pageY:a.pageY}))},mousedown:function(a){var b=e(this);i&&i.length&&!i.is(b)&&i.data("contextMenu").$menu.trigger("contextmenu:hide");2==a.button&&(i=b.data("contextMenuActive",
!0))},mouseup:function(a){var b=e(this);b.data("contextMenuActive")&&i&&i.length&&i.is(b)&&!b.hasClass("context-menu-disabled")&&(a.preventDefault(),a.stopImmediatePropagation(),i=b,b.trigger(jQuery.Event("contextmenu",{data:a.data,pageX:a.pageX,pageY:a.pageY})));b.removeData("contextMenuActive")},mouseenter:function(a){var b=e(this),d=e(a.relatedTarget),c=e(document);if(!d.is(".context-menu-list")&&!d.closest(".context-menu-list").length&&(!i||!i.length))x=a.pageX,y=a.pageY,A=a.data,c.on("mousemove.contextMenuShow",
f.mousemove),r=setTimeout(function(){r=null;c.off("mousemove.contextMenuShow");i=b;b.trigger(jQuery.Event("contextmenu",{data:A,pageX:x,pageY:y}))},a.data.delay)},mousemove:function(a){x=a.pageX;y=a.pageY},mouseleave:function(a){a=e(a.relatedTarget);if(!a.is(".context-menu-list")&&!a.closest(".context-menu-list").length){try{clearTimeout(r)}catch(b){}r=null}},ignoreRightClick:function(a){2==a.button&&(t=!0)},layerClick:function(a){var b=e(this),d=b.data("contextMenuRoot");a.preventDefault();a.stopImmediatePropagation();
b.remove();d.$menu.trigger("contextmenu:hide")},keyStop:function(a,b){b.isInput||a.preventDefault();a.stopPropagation()},key:function(a){var b=i.data("contextMenu")||{};b.$menu.children();switch(a.keyCode){case 9:case 38:if(f.keyStop(a,b),b.isInput){if(9==a.keyCode&&a.shiftKey){a.preventDefault();b.$selected&&b.$selected.find("input, textarea, select").blur();b.$menu.trigger("prevcommand");return}if(38==a.keyCode&&"checkbox"==b.$selected.find("input, textarea, select").prop("type")){a.preventDefault();
return}}else if(9!=a.keyCode||a.shiftKey){b.$menu.trigger("prevcommand");return}case 9:case 40:f.keyStop(a,b);if(b.isInput){if(9==a.keyCode){a.preventDefault();b.$selected&&b.$selected.find("input, textarea, select").blur();b.$menu.trigger("nextcommand");return}if(40==a.keyCode&&"checkbox"==b.$selected.find("input, textarea, select").prop("type")){a.preventDefault();return}}else{b.$menu.trigger("nextcommand");return}break;case 37:f.keyStop(a,b);if(b.isInput||!b.$selected||!b.$selected.length)break;
if(!b.$selected.parent().hasClass("context-menu-root")){a=b.$selected.parent().parent();b.$selected.trigger("contextmenu:blur");b.$selected=a;return}break;case 39:f.keyStop(a,b);if(b.isInput||!b.$selected||!b.$selected.length)break;var d=b.$selected.data("contextMenu")||{};if(d.$menu&&b.$selected.hasClass("context-menu-submenu")){b.$selected=null;d.$selected=null;d.$menu.trigger("nextcommand");return}break;case 13:f.keyStop(a,b);if(b.isInput){if(b.$selected&&!b.$selected.is(":textarea, :select")){a.preventDefault();
return}break}b.$selected&&b.$selected.trigger("mouseup");return;case 32:f.keyStop(a,b);return;case 27:f.keyStop(a,b);b.$menu.trigger("contextmenu:hide");return;default:if(d=String.fromCharCode(a.keyCode).toUpperCase(),b.accesskeys[d]){b.accesskeys[d].$node.trigger(b.accesskeys[d].$menu?"contextmenu:focus":"mouseup");return}}a.stopPropagation();b.$selected&&b.$selected.trigger(a)},prevItem:function(a){a.stopPropagation();var b=e(this).data("contextMenu")||{};if(b.$selected){var d=b.$selected,b=b.$selected.parent().data("contextMenu")||
{};b.$selected=d}for(var d=b.$menu.children(),c=!b.$selected||!b.$selected.prev().length?d.last():b.$selected.prev(),g=c;c.hasClass("disabled")||c.hasClass("not-selectable");)if(c=c.prev().length?c.prev():d.last(),c.is(g))return;b.$selected&&f.itemMouseleave.call(b.$selected.get(0),a);f.itemMouseenter.call(c.get(0),a);a=c.find("input, textarea, select");a.length&&a.focus()},nextItem:function(a){a.stopPropagation();var b=e(this).data("contextMenu")||{};if(b.$selected){var d=b.$selected,b=b.$selected.parent().data("contextMenu")||
{};b.$selected=d}for(var d=b.$menu.children(),c=!b.$selected||!b.$selected.next().length?d.first():b.$selected.next(),g=c;c.hasClass("disabled")||c.hasClass("not-selectable");)if(c=c.next().length?c.next():d.first(),c.is(g))return;b.$selected&&f.itemMouseleave.call(b.$selected.get(0),a);f.itemMouseenter.call(c.get(0),a);a=c.find("input, textarea, select");a.length&&a.focus()},focusInput:function(){var a=e(this).closest(".context-menu-item"),b=a.data(),d=b.contextMenu,b=b.contextMenuRoot;b.$selected=
d.$selected=a;b.isInput=d.isInput=!0},blurInput:function(){var a=e(this).closest(".context-menu-item").data();a.contextMenuRoot.isInput=a.contextMenu.isInput=!1},menuMouseenter:function(){e(this).data().contextMenuRoot.hovering=!0},menuMouseleave:function(a){var b=e(this).data().contextMenuRoot;if(b.$layer&&b.$layer.is(a.relatedTarget))b.hovering=!1},itemMouseenter:function(a){var b=e(this),d=b.data(),c=d.contextMenu,d=d.contextMenuRoot;d.hovering=!0;a&&d.$layer&&d.$layer.is(a.relatedTarget)&&(a.preventDefault(),
a.stopImmediatePropagation());(c.$menu?c:d).$menu.children(".hover").trigger("contextmenu:blur");b.hasClass("disabled")||b.hasClass("not-selectable")?c.$selected=null:b.trigger("contextmenu:focus")},itemMouseleave:function(a){var b=e(this),d=b.data(),c=d.contextMenu,d=d.contextMenuRoot;d!==c&&d.$layer&&d.$layer.is(a.relatedTarget)?(d.$selected&&d.$selected.trigger("contextmenu:blur"),a.preventDefault(),a.stopImmediatePropagation(),d.$selected=c.$selected=c.$node):b.trigger("contextmenu:blur")},itemClick:function(a){var b=
e(this),d=b.data(),c=d.contextMenuRoot,g=d.contextMenuKey;if(d.contextMenu.items[g]&&!b.hasClass("disabled")){a.preventDefault();a.stopImmediatePropagation();if(e.isFunction(c.callbacks[g]))a=c.callbacks[g];else if(e.isFunction(c.callback))a=c.callback;else return;!1!==a.call(c.$trigger,g,c)?c.$menu.trigger("contextmenu:hide"):m.update.call(c.$trigger,c)}},inputClick:function(a){a.stopImmediatePropagation()},hideMenu:function(){var a=e(this).data("contextMenuRoot");m.hide.call(a.$trigger,a)},focusItem:function(a){a.stopPropagation();
var a=e(this),b=a.data(),d=b.contextMenu,b=b.contextMenuRoot;a.addClass("hover").siblings(".hover").trigger("contextmenu:blur");d.$selected=b.$selected=a;d.$node&&b.positionSubmenu.call(d.$node,d.$menu)},blurItem:function(a){a.stopPropagation();var a=e(this),b=a.data().contextMenu;a.removeClass("hover");b.$selected=null}},m={show:function(a,b,d){var c=e(this),g={};e("#context-menu-layer").trigger("mousedown");if(!1===a.events.show.call(c,a))i=null;else{a.$trigger=c;m.update.call(c,a);a.position.call(c,
a,b,d);if(a.zIndex)g.zIndex=C(c)+a.zIndex;m.layer.call(a.$menu,a,g.zIndex);a.$menu.find("ul").css("zIndex",g.zIndex+1);a.$menu.css(g)[a.animation.show](a.animation.duration);c.data("contextMenu",a);e(document).off("keydown.contextMenu").on("keydown.contextMenu",f.key);if(a.autoHide){var h=c.position();h.right=h.left+c.outerWidth();h.bottom=h.top+this.outerHeight();e(document).on("mousemove.contextMenuAutoHide",function(b){a.$layer&&!a.hovering&&(!(b.pageX>=h.left&&b.pageX<=h.right)||!(b.pageY>=h.top&&
b.pageY<=h.bottom))&&a.$layer.trigger("mousedown")})}}},hide:function(a){var b=e(this);a||(a=b.data("contextMenu")||{});if(!(a.events&&!1===a.events.hide.call(b,a))){if(a.$layer)try{a.$layer.remove(),delete a.$layer}catch(d){a.$layer=null}i=null;a.$menu.find(".hover").trigger("contextmenu:blur");a.$selected=null;e(document).off(".contextMenuAutoHide").off("keydown.contextMenu");a.$menu&&a.$menu[a.animation.hide](a.animation.duration);a.build&&(a.$menu.remove(),e.each(a,function(b){switch(b){case "ns":case "selector":case "build":case "trigger":case "ignoreRightClick":return!0;
default:a[b]=k;try{delete a[b]}catch(d){}return!0}}))}},create:function(a,b){b===k&&(b=a);a.$menu=e('<ul class="context-menu-list '+(a.className||"")+'"></ul>').data({contextMenu:a,contextMenuRoot:b});e.each(["callbacks","commands","inputs"],function(d,c){a[c]={};b[c]||(b[c]={})});b.accesskeys||(b.accesskeys={});e.each(a.items,function(d,c){var g=e('<li class="context-menu-item '+(c.className||"")+'"></li>'),h=null,i=null;c.$node=g.data({contextMenu:a,contextMenuRoot:b,contextMenuKey:d});if(c.accesskey)for(var j=
B(c.accesskey),k=0,l;l=j[k];k++)if(!b.accesskeys[l]){b.accesskeys[l]=c;c._name=c.name.replace(RegExp("("+l+")","i"),'<span class="context-menu-accesskey">$1</span>');break}if("string"==typeof c)g.addClass("context-menu-separator not-selectable");else if(c.type&&v[c.type])v[c.type].call(g,c,a,b),e.each([a,b],function(b,a){a.commands[d]=c;if(e.isFunction(c.callback))a.callbacks[d]=c.callback});else{if("html"==c.type)g.addClass("context-menu-html not-selectable");else if(c.type)h=e("<label></label>").appendTo(g),
e("<span></span>").html(c._name||c.name).appendTo(h),g.addClass("context-menu-input"),a.hasTypes=!0,e.each([a,b],function(b,a){a.commands[d]=c;a.inputs[d]=c});else if(c.items)c.type="sub";switch(c.type){case "text":i=e('<input type="text" value="1" name="context-menu-input-'+d+'" value="">').val(c.value||"").appendTo(h);break;case "textarea":i=e('<textarea name="context-menu-input-'+d+'"></textarea>').val(c.value||"").appendTo(h);c.height&&i.height(c.height);break;case "checkbox":i=e('<input type="checkbox" value="1" name="context-menu-input-'+
d+'" value="">').val(c.value||"").prop("checked",!!c.selected).prependTo(h);break;case "radio":i=e('<input type="radio" value="1" name="context-menu-input-'+c.radio+'" value="">').val(c.value||"").prop("checked",!!c.selected).prependTo(h);break;case "select":i=e('<select name="context-menu-input-'+d+'">').appendTo(h);c.options&&(e.each(c.options,function(b,a){e("<option></option>").val(b).text(a).appendTo(i)}),i.val(c.selected));break;case "sub":e("<span></span>").html(c._name||c.name).appendTo(g);
c.appendTo=c.$node;m.create(c,b);g.data("contextMenu",c).addClass("context-menu-submenu");c.callback=null;break;case "html":e(c.html).appendTo(g);break;default:e.each([a,b],function(b,a){a.commands[d]=c;if(e.isFunction(c.callback))a.callbacks[d]=c.callback}),e("<span></span>").html(c._name||c.name||"").appendTo(g)}if(c.type&&"sub"!=c.type&&"html"!=c.type&&(i.on("focus",f.focusInput).on("blur",f.blurInput),c.events))i.on(c.events);c.icon&&g.addClass("icon icon-"+c.icon)}c.$input=i;c.$label=h;g.appendTo(a.$menu);
if(!a.hasTypes)if(e.browser.msie)g.on("selectstart.disableTextSelect",f.abortevent);else if(!e.browser.mozilla)g.on("mousedown.disableTextSelect",f.abortevent)});a.$node||a.$menu.css("display","none").addClass("context-menu-root");a.$menu.appendTo(a.appendTo||document.body)},update:function(a,b){var d=this;b===k&&(b=a,a.$menu.find("ul").andSelf().css({position:"static",display:"block"}).each(function(){var b=e(this);b.width(b.css("position","absolute").width()).css("position","static")}).css({position:"",
display:""}));a.$menu.children().each(function(){var c=e(this),g=c.data("contextMenuKey"),f=a.items[g],g=e.isFunction(f.disabled)&&f.disabled.call(d,g,b)||!0===f.disabled;c[g?"addClass":"removeClass"]("disabled");if(f.type)switch(c.find("input, select, textarea").prop("disabled",g),f.type){case "text":case "textarea":f.$input.val(f.value||"");break;case "checkbox":case "radio":f.$input.val(f.value||"").prop("checked",!!f.selected);break;case "select":f.$input.val(f.selected||"")}f.$menu&&m.update.call(d,
f,b)})},layer:function(a,b){return a.$layer=e('<div id="context-menu-layer" style="position:fixed; z-index:'+b+'; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({height:n.height(),width:n.width(),display:"block"}).data("contextMenuRoot",a).insertBefore(this).on("mousedown",f.layerClick)}};e.fn.contextMenu=function(a){a===k?this.first().trigger("contextmenu"):a.x&&a.y?this.first().trigger(jQuery.Event("contextmenu",{pageX:a.x,pageY:a.y})):"hide"===a?(a=this.data("contextMenu").$menu)&&
a.trigger("contextmenu:hide"):a?this.removeClass("context-menu-disabled"):a||this.addClass("context-menu-disabled");return this};e.contextMenu=function(a,b){"string"!=typeof a&&(b=a,a="create");"string"==typeof b?b={selector:b}:b===k&&(b={});var d=e.extend(!0,{},w,b||{}),c=c=e(document);switch(a){case "create":if(!d.selector)throw Error("No selector specified");if(d.selector.match(/.context-menu-(list|item|input)($|\s)/))throw Error('Cannot bind to selector "'+d.selector+'" as it contains a reserved className');
if(!d.build&&(!d.items||e.isEmptyObject(d.items)))throw Error("No Items sepcified");u++;d.ns=".contextMenu"+u;l[d.selector]=d.ns;o[d.ns]=d;s||(c.on({"contextmenu:hide.contextMenu":f.hideMenu,"prevcommand.contextMenu":f.prevItem,"nextcommand.contextMenu":f.nextItem,"contextmenu.contextMenu":f.abortevent,"mouseenter.contextMenu":f.menuMouseenter,"mouseleave.contextMenu":f.menuMouseleave},".context-menu-list").on("mouseup.contextMenu",".context-menu-input",f.inputClick).on({"mouseup.contextMenu":f.itemClick,
"contextmenu:focus.contextMenu":f.focusItem,"contextmenu:blur.contextMenu":f.blurItem,"contextmenu.contextMenu":f.abortevent,"mouseenter.contextMenu":f.itemMouseenter,"mouseleave.contextMenu":f.itemMouseleave},".context-menu-item"),s=!0);c.on("contextmenu"+d.ns,d.selector,d,f.contextmenu);switch(d.trigger){case "hover":c.on("mouseenter"+d.ns,d.selector,d,f.mouseenter).on("mouseleave"+d.ns,d.selector,d,f.mouseleave);break;case "left":c.on("click"+d.ns,d.selector,d,f.click)}if("hover"!=d.trigger&&d.ignoreRightClick)c.on("mousedown"+
d.ns,d.selector,f.ignoreRightClick);d.build||m.create(d);break;case "destroy":if(d.selector){if(l[d.selector]){try{o[l[d.selector]].$menu&&o[l[d.selector]].$menu.remove(),delete o[l[d.selector]]}catch(g){o[l[d.selector]]=null}c.off(l[d.selector])}}else c.off(".contextMenu .contextMenuAutoHide"),e.each(l,function(b,a){c.off(a)}),l={},o={},u=0,s=!1,e(".context-menu-list").remove();break;case "html5":(!e.support.htmlCommand&&!e.support.htmlMenuitem||"boolean"==typeof b&&b)&&e('menu[type="context"]').each(function(){this.id&&
e.contextMenu({selector:"[contextmenu="+this.id+"]",items:e.contextMenu.fromMenu(this)})}).css("display","none");break;default:throw Error('Unknown operation "'+a+'"');}return this};e.contextMenu.setInputValues=function(a,b){b===k&&(b={});e.each(a.inputs,function(a,c){switch(c.type){case "text":case "textarea":c.value=b[a]||"";break;case "checkbox":c.selected=b[a]?!0:!1;break;case "radio":c.selected=(b[c.radio]||"")==c.value?!0:!1;break;case "select":c.selected=b[a]||""}})};e.contextMenu.getInputValues=
function(a,b){b===k&&(b={});e.each(a.inputs,function(a,c){switch(c.type){case "text":case "textarea":case "select":b[a]=c.$input.val();break;case "checkbox":b[a]=c.$input.prop("checked");break;case "radio":if(c.$input.prop("checked"))b[c.radio]=c.value}});return b};e.contextMenu.fromMenu=function(a){var a=e(a),b={};z(b,a.children());return b};e.contextMenu.defaults=w;e.contextMenu.types=v})(jQuery);





/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);






/**
 * This jQuery plugin displays pagination links inside the selected elements.
 *
 * @author Gabriel Birke (birke *at* d-scribe *dot* de)
 * @version 1.2
 * @param {int} maxentries Number of entries to paginate
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 */
jQuery.fn.pagination = function(maxentries, opts){
	opts = jQuery.extend({
		items_per_page:10,
		num_display_entries:10,
		current_page:0,
		num_edge_entries:0,
		link_to:"#",
		prev_text:"Prev",
		next_text:"Next",
		ellipse_text:"...",
		prev_show_always:true,
		next_show_always:true,
		callback:function(){return false;}
	},opts||{});
	
	return this.each(function() {
		/**
		 * Calculate the maximum number of pages
		 */
		function numPages() {
			return Math.ceil(maxentries/opts.items_per_page);
		}
		
		/**
		 * Calculate start and end point of pagination links depending on 
		 * current_page and num_display_entries.
		 * @return {Array}
		 */
		function getInterval()  {
			var ne_half = Math.ceil(opts.num_display_entries/2);
			var np = numPages();
			var upper_limit = np-opts.num_display_entries;
			var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
			var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
			return [start,end];
		}
		
		/**
		 * This is the event handling function for the pagination links. 
		 * @param {int} page_id The new page number
		 */
		function pageSelected(page_id, evt){
			current_page = page_id;
			drawLinks();
			var continuePropagation = opts.callback(page_id, panel);
			if (!continuePropagation) {
				if (evt.stopPropagation) {
					evt.stopPropagation();
				}
				else {
					evt.cancelBubble = true;
				}
			}
			return continuePropagation;
		}
		
		/**
		 * This function inserts the pagination links into the container element
		 */
		function drawLinks() {
			panel.empty();
			var interval = getInterval();
			var np = numPages();
			// This helper function returns a handler function that calls pageSelected with the right page_id
			var getClickHandler = function(page_id) {
				return function(evt){ return pageSelected(page_id,evt); }
			}
			// Helper function for generating a single link (or a span tag if it's the current page)
			var appendItem = function(page_id, appendopts){
				page_id = page_id<0?0:(page_id<np?page_id:np-1); // Normalize page id to sane value
				appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
				if(page_id == current_page){
					var lnk = jQuery("<span class='ui-state-active ui-corner-all'>"+(appendopts.text)+"</span>");
				}
				else
				{
					var lnk = jQuery("<a class='ui-state-default ui-corner-all'>"+(appendopts.text)+"</a>")
						.bind("click", getClickHandler(page_id))
						.attr('href', opts.link_to.replace(/__id__/,page_id));
						
						
				}
				if(appendopts.classes){lnk.addClass(appendopts.classes);}
				panel.append(lnk);
			}
			// Generate "Previous"-Link
			if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
				appendItem(current_page-1,{text:opts.prev_text, classes:"prev"});
			}
			// Generate starting points
			if (interval[0] > 0 && opts.num_edge_entries > 0)
			{
				var end = Math.min(opts.num_edge_entries, interval[0]);
				for(var i=0; i<end; i++) {
					appendItem(i);
				}
				if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
				{
					jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
			}
			// Generate interval links
			for(var i=interval[0]; i<interval[1]; i++) {
				appendItem(i);
			}
			// Generate ending points
			if (interval[1] < np && opts.num_edge_entries > 0)
			{
				if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
				{
					jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
				var begin = Math.max(np-opts.num_edge_entries, interval[1]);
				for(var i=begin; i<np; i++) {
					appendItem(i);
				}
				
			}
			// Generate "Next"-Link
			if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
				appendItem(current_page+1,{text:opts.next_text, classes:"next"});
			}
		}
		
		// Extract current_page from options
		var current_page = opts.current_page;
		// Create a sane value for maxentries and items_per_page
		maxentries = (!maxentries || maxentries < 0)?1:maxentries;
		opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
		// Store DOM element for easy access from all inner functions
		var panel = jQuery(this);
		// Attach control functions to the DOM element 
		this.selectPage = function(page_id){ pageSelected(page_id);}
		this.prevPage = function(){ 
			if (current_page > 0) {
				pageSelected(current_page - 1);
				return true;
			}
			else {
				return false;
			}
		}
		this.nextPage = function(){ 
			if(current_page < numPages()-1) {
				pageSelected(current_page+1);
				return true;
			}
			else {
				return false;
			}
		}
		// When all initialisation is done, draw the links
		drawLinks();
        // call callback function
        opts.callback(current_page, this);
	});
}



