(this.webpackJsonpcovidsearch=this.webpackJsonpcovidsearch||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(11),n(1)),l=n.n(s),u=n(3),i=n(2),h=(n(13),(window&&window.location&&window.location.hostname).includes("localhost")?"http://localhost:5000":"");function d(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"/api/search?text="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=e.data;return r.a.createElement("div",{className:"cvd-resulttable"},r.a.createElement("thead",null,r.a.createElement("tr",{style:{textAlign:"right"}},r.a.createElement("th",null,"Search results"),r.a.createElement("th",null,"Confidence"),r.a.createElement("th",null,"source"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.Text),r.a.createElement("td",null,e.Confidence),r.a.createElement("td",null,r.a.createElement("a",{href:e.Source,target:"_blank"},"source")))}))))}var f=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=r.a.useState(""),o=Object(u.a)(c,2),s=o[0],h=o[1],p=r.a.useState(!1),f=Object(u.a)(p,2),v=f[0],E=f[1];function w(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,d(t);case 3:n=e.sent,E(!1),a(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w("");case 1:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Covid paper Search"),"Thousands of covid19 researchers are publishing papers to help address coronavirus. We are making thousands of papers searchable using question and answer AI technology.",r.a.createElement("div",{className:"cvd-searchbar"},r.a.createElement("input",{placeholder:"enter text to search",value:s,onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{onClick:function(){return w(s)}},"Search")),v&&r.a.createElement("div",null,"AI is running..."),r.a.createElement(m,{data:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.1763d605.chunk.js.map