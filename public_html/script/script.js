$(function(){
	var d = new Date();
	var months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
	var fname = d.getDate() + "_" + months[d.getMonth()] + ".html";
	$("#onThisDayWiki").load("/script/wikidates/" + fname);
});

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

var dayNames = new Array(
    "Det är söndag, helgen er nästan över!",
    "Yay! Ännu en måndag",
     "Hejsan tisdag, åtminstone är du inte måndag",
     "Det är onsdag. halvvägs genom veckan!",
     "Det är torsdag och lillelördag.",
     "Det är fredag - Hurra för helgen!",
    "Saturday Night Fever");

var d = new Date();
//var months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
//document.getElementById("dayofmonth").innerHTML = d.getDate();
//document.getElementById("month").innerHTML = months[d.getMonth()];
//document.getElementById("year").innerHTML = d.getFullYear();
document.getElementById("weeknumaaa").innerHTML = dayNames[d.getDay()] + " - Vecka " + d.getWeek();

! function e(t, n, o) {
	function r(a, s) {
		if (!n[a]) {
			if (!t[a]) {
				var d = "function" == typeof require && require;
				if (!s && d) return d(a, !0);
				if (i) return i(a, !0);
				var u = new Error("Cannot find module '" + a + "'");
				throw u.code = "MODULE_NOT_FOUND", u
			}
			var c = n[a] = {
				exports: {}
			};
			t[a][0].call(c.exports, function(e) {
				var n = t[a][1][e];
				return r(n ? n : e)
			}, c, c.exports, e, t, n, o)
		}
		return n[a].exports
	}
	for (var i = "function" == typeof require && require, a = 0; a < o.length; a++) r(o[a]);
	return r
}({
	1: [function(e, t, n) {
		"use strict";
		e("../../node_modules/browsernizr/test/websockets");
		var o = e("./modules/date"),
			r = e("./modules/favicon");
		document.addEventListener("DOMContentLoaded", function(e) {
			o.init(), r.init()
		})
	}, {
		"../../node_modules/browsernizr/test/websockets": 7,
		"./modules/date": 2,
		"./modules/favicon": 3
	}],
	2: [function(e, t, n) {
		"use strict";
		var o = new Date,
			r = {
				init: function(e) {
					console.log(o);
					var t = document.getElementById("date"),
						n = document.getElementById("month"),
						r = document.getElementById("year"),
						i = document.getElementById("day");
					document.getElementById("holiday");
					t.innerHTML = o.getDate(), n.innerHTML = this.generateMonth(o.getMonth()), r.innerHTML = o.getFullYear(), i.innerHTML = this.generateDay(o.getDay())
				},
				generateMonth: function(e) {
					var t = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
					return t[e]
				},
				generateDay: function(e) {
					//var t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var t = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
					return t[e]
				}
			};
		t.exports = r
	}, {}],
	3: [function(e, t, n) {
		"use strict";
		var o = {
			init: function() {
				var e, t = document.createElement("canvas"),
					n = document.createElement("img"),
					o = document.getElementById("favicon").cloneNode(!0),
					r = (new Date).getDate() + "",
					i = document.getElementById("favicon");
				t.getContext && (t.height = t.width = 16, e = t.getContext("2d"), n.onload = function() {
					e.drawImage(this, 0, 0), e.font = 'bold 12px "helvetica", sans-serif', e.fillStyle = "#9d2a2a", 1 == r.length && (r = "0" + r), e.fillText(r, 2, 12), o.href = t.toDataURL("image/png"), document.head.removeChild(i), document.head.appendChild(o)
				}, n.src = "assets/images/favicon.png")
			}
		};
		t.exports = o
	}, {}],
	4: [function(e, t, n) {
		var o = e("./ModernizrProto.js"),
			r = function() {};
		r.prototype = o, r = new r, t.exports = r
	}, {
		"./ModernizrProto.js": 5
	}],
	5: [function(e, t, n) {
		var o = e("./tests.js"),
			r = {
				_version: "3.2.0 (browsernizr 2.0.1)",
				_config: {
					classPrefix: "",
					enableClasses: !0,
					enableJSClass: !0,
					usePrefixes: !0
				},
				_q: [],
				on: function(e, t) {
					var n = this;
					setTimeout(function() {
						t(n[e])
					}, 0)
				},
				addTest: function(e, t, n) {
					o.push({
						name: e,
						fn: t,
						options: n
					})
				},
				addAsyncTest: function(e) {
					o.push({
						name: null,
						fn: e
					})
				}
			};
		t.exports = r
	}, {
		"./tests.js": 6
	}],
	6: [function(e, t, n) {
		var o = [];
		t.exports = o
	}, {}],
	7: [function(e, t, n) {
		var o = e("./../lib/Modernizr.js");
		o.addTest("websockets", "WebSocket" in window && 2 === window.WebSocket.CLOSING)
	}, {
		"./../lib/Modernizr.js": 4
	}]
}, {}, [1]);
//# sourceMappingURL=bundle.js.map
