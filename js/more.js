/*
// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});
*/
//社会主义核心价值观
var a_idx = 0;
jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
			y = e.pageY;
		let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		// console.log(scrolly);  //控制台输出
		// // console.log(y);
		// lord = document.getElementById("color-toggle-icon").getAttribute('data');
		// console.log(lord);
		y = y - scrolly;
		$i.css({
			"-webkit-user-select": "none",
			"-moz-user-select": "none",
			"-o-user-select": "none",
			"user-select": "none",
			"z-index": 999,
			"top": y - 20,
			"left": x,
			"position": "fixed",
			"font-weight": "bold",
			"color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) +
				")"
		});
		$("body").append($i);
		$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});

	});
});
/*
<!--动态线条背景-->
var color_dark = "255,255,255";
var color_light = "0,0,0";
var opacity = '0.8';
var zIndex = "-2";
var count = "200";
// if(lord === "light"){
var Line_act = function(color) {
	function o(w, v, i) {
		return w.getAttribute(v) || i
	}

	function j(i) {
		return document.getElementsByTagName(i)
	}

	function l() {
		var i = j("script"),
			w = i.length,
			v = i[w - 1];
		return {
			l: w,
			z: o(v, "zIndex", -1),
			o: o(v, "opacity", 0.8),
			c: o(v, "color", color),
			n: o(v, "count", 100)
		}
	}

	function k() {
		r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height =
			window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function b() {
		e.clearRect(0, 0, r, n);
		var w = [f].concat(t);
		var x, v, A, B, z, y;
		t.forEach(function(i) {
			i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x -
				0.5, i.y - 0.5, 1, 1);
			for (v = 0; v < w.length; v++) {
				x = w[v];
				if (i !== x && null !== x.x && null !== x.y) {
					B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
					y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(),
						e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x,
							x.y), e.stroke())
				}
			}
			w.splice(w.indexOf(i), 1)
		}), m(b)
	}
	var u = document.createElement("canvas"),
		s = l(),
		c = "c_n" + s.l,
		e = u.getContext("2d"),
		r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
			window.setTimeout(i, 1000 / 45)
		},
		a = Math.random,
		f = {
			x: null,
			y: null,
			max: 20000
		};
	u.id = c;
	u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
	j("body")[0].appendChild(u);
	k(), window.onresize = k;
	window.onmousemove = function(i) {
		i = i || window.event, f.x = i.clientX, f.y = i.clientY
	}, window.onmouseout = function() {
		f.x = null, f.y = null
	};
	for (var t = [], p = 0; s.n > p; p++) {
		var h = a() * r,
			g = a() * n,
			q = 2 * a() - 1,
			d = 2 * a() - 1;
		t.push({
			x: h,
			y: g,
			xa: q,
			ya: d,
			max: 6000
		})
	}
	setTimeout(function() {
		b()
	}, 100)
};


var lord = document.getElementById("color-toggle-icon").getAttribute('data');
if (lord == "light") {
	Line_act(color_dark);
} else {
	Line_act(color_light);
}

*/
// 鼠标移动星星特效
() }  function i() { document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener( "touchstart", e), window.addEventListener("resize", n) }  function n(t) { d = window.innerWidth, window.innerHeight }  function e(t) { if (t.touches.length > 0) for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)]) }  function o(t) { u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)]) }  function s(t, i, n) { var e = new l; e.init(t, i, n), f.push(e) }  function h() { for (var t = 0; t < f.length; t++) f[t].update(); for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1)) }  function a() { requestAnimationFrame(a), h() }  function l() { this.character = "*", this.lifeSpan = 120, this.initialStyles = { position: "fixed", top: "0", display: "block", pointerEvents: "none", "z-index": "10000000", fontSize: "20px", "will-change": "transform" }, this.init = function(t, i, n) { this.velocity = { x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2), y: 1 }, this.position = { x: t - 10, y: i - 20 }, this.initialStyles.color = n, this.element = document.createElement("span"), this.element.innerHTML = this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element) }, this.update = function() { this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")" }, this.die = function() { this.element.parentNode.removeChild(this.element) } }  function c(t, i) { for (var n in i) t.style[n] = i[n] } var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"], d = window.innerWidth, u = (window.innerHeight, { x: d / 2, y: d / 2 }), f = []; t() })();(function() { function t() { i(), a