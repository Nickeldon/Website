(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{3492:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7462),a=n(91),i=n(7294),c=n(7089),s=n(3937),o=n(1236),l=["children","tag","className","type"],u=function(e){var t=e.children,n=e.tag,u=e.className,d=e.type,m=(0,a.Z)(e,l),p=n,h=(0,s.Z)(),f=(0,o.ZP)(),v=f.SCALES,g=f.getScaleProps,x=g("font"),y=g(["margin","marginLeft","marginRight","mx","ml","mr"]),b=g(["margin","marginTop","marginBottom","my","mt","mb"]),Z=g(["padding","paddingLeft","paddingRight","pl","pr","px"]),j=g(["padding","paddingTop","paddingBottom","pt","pb","py"]),T=(0,i.useMemo)((function(){return function(e,t){var n={default:"inherit",secondary:t.secondary,success:t.success,warning:t.warning,error:t.error};return n[e]||n.default}(d,h.palette)}),[d,h.palette]),_=(0,i.useMemo)((function(){var e=[{value:y,className:"mx"},{value:b,className:"my"},{value:Z,className:"px"},{value:j,className:"py"},{value:x,className:"font"}].reduce((function(e,t){return"undefined"===typeof t.value?e:"".concat(e," ").concat(t.className)}),"");return"".concat(e," ").concat(u).trim()}),[y,b,Z,j,x,u]);return i.createElement(p,(0,r.Z)({},m,{className:c.ZP.dynamic([["3155699851",[n,T,v.width(1,"auto"),v.height(1,"auto"),v.font(1,"inherit"),v.ml(0,"revert"),v.mr(0,"revert"),v.mt(0,"revert"),v.mb(0,"revert"),v.pl(0,"revert"),v.pr(0,"revert"),v.pt(0,"revert"),v.pb(0,"revert")]]])+" "+(m&&null!=m.className&&m.className||_||"")}),t,i.createElement(c.ZP,{id:"3155699851",dynamic:[n,T,v.width(1,"auto"),v.height(1,"auto"),v.font(1,"inherit"),v.ml(0,"revert"),v.mr(0,"revert"),v.mt(0,"revert"),v.mb(0,"revert"),v.pl(0,"revert"),v.pr(0,"revert"),v.pt(0,"revert"),v.pb(0,"revert")]},"".concat(n,".__jsx-style-dynamic-selector{color:").concat(T,";width:").concat(v.width(1,"auto"),";height:").concat(v.height(1,"auto"),";}.font.__jsx-style-dynamic-selector{font-size:").concat(v.font(1,"inherit"),";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(v.ml(0,"revert"),";margin-right:").concat(v.mr(0,"revert"),";}.my.__jsx-style-dynamic-selector{margin-top:").concat(v.mt(0,"revert"),";margin-bottom:").concat(v.mb(0,"revert"),";}.px.__jsx-style-dynamic-selector{padding-left:").concat(v.pl(0,"revert"),";padding-right:").concat(v.pr(0,"revert"),";}.py.__jsx-style-dynamic-selector{padding-top:").concat(v.pt(0,"revert"),";padding-bottom:").concat(v.pb(0,"revert"),";}")))};u.defaultProps={type:"default",className:""},u.displayName="GeistTextChild";var d=u,m=n(314),p=["h1","h2","h3","h4","h5","h6","p","b","small","i","span","del","em","blockquote","children","className"],h=function e(t,n){if(!t.length)return n;var r=t.slice(1,t.length);return i.createElement(d,{tag:t[0]},e(r,n))},f=function(e){var t=e.h1,n=e.h2,c=e.h3,s=e.h4,o=e.h5,l=e.h6,u=e.p,m=e.b,f=e.small,v=e.i,g=e.span,x=e.del,y=e.em,b=e.blockquote,Z=e.children,j=e.className,T=(0,a.Z)(e,p),_={h1:t,h2:n,h3:c,h4:s,h5:o,h6:l,p:u,blockquote:b},w={span:g,small:f,b:m,em:y,i:v,del:x},N=Object.keys(_).filter((function(e){return _[e]})),k=Object.keys(w).filter((function(e){return w[e]})),E=(0,i.useMemo)((function(){return N[0]?N[0]:k[0]?k[0]:"p"}),[N,k]),P=k.filter((function(e){return e!==E})),I=(0,i.useMemo)((function(){return P.length?h(P,Z):Z}),[P,Z]);return i.createElement(d,(0,r.Z)({className:j,tag:E},T),I)};f.defaultProps={h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,p:!1,b:!1,small:!1,i:!1,span:!1,del:!1,em:!1,blockquote:!1,className:"",type:"default"},f.displayName="GeistText";var v=(0,m.Z)(f)},7822:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(1451),a=n(7462),i=n(7294),c=n(2047),s=n(6761),o=2e3,l="default",u=function(e){var t=(0,c.kW)(),n=t.updateToasts,u=t.toasts,d=t.updateToastLayout,m=t.updateLastToastId;(0,i.useEffect)((function(){e&&d((function(){return e?(0,a.Z)({},c.TP,e):c.TP}))}),[]);var p=function(e){n((function(t){return t.map((function(t){return t._internalIdent!==e?t:(0,a.Z)({},t,{visible:!1})}))})),m((function(){return e}))};return{toasts:u,setToast:function(e){var t="toast-".concat((0,s.zv)()),a=e.delay||o;if(e.id&&u.find((function(t){return t.id===e.id})))throw new Error('Toast: Already have the same key: "ident"');n((function(n){var i={delay:a,text:e.text,visible:!0,type:e.type||l,id:e.id||t,actions:e.actions||[],_internalIdent:t,_timeout:window.setTimeout((function(){p(t),i._timeout&&(window.clearTimeout(i._timeout),i._timeout=null)}),a),cancel:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return p(t)}))};return[].concat((0,r.Z)(n),[i])}))},removeAll:function(){n((function(e){return e.map((function(e){return(0,a.Z)({},e,{visible:!1})}))}))},findToastOneByID:function(e){return u.find((function(t){return t.id===e}))},removeToastOneByID:function(e){n((function(t){return t.map((function(t){return t.id!==e?t:(0,a.Z)({},t,{visible:!1})}))}))}}},d=u},8348:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n(6820)}])},6820:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(3937),i=n(7822),c=n(9952),s=n(3492),o=n(1761),l=n(4632),u=n(1881),d=n(6054),m=n(4633),p=n(9335),h=n(7294),f=n(9773);t.default=function(){var e=(0,a.Z)(),t=(0,h.useState)("row"),n=t[0],v=t[1],g=(0,h.useState)(6),x=g[0],y=g[1],b=(0,i.Z)().setToast;return(0,p.Z)((function(e){e<950?(v("column"),y(14)):(v("row"),y(8))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"text-center",id:"overview",children:[(0,r.jsx)(c.Z,{h:3}),(0,r.jsx)(s.Z,{className:"header",h1:!0,children:(0,r.jsx)(f.TranslatableText,{children:"Read the features in detail."})}),(0,r.jsx)(c.Z,{h:2}),(0,r.jsxs)(o.Z.Container,{gap:3,direction:n,alignItems:"center",justify:"center",children:[(0,r.jsx)(o.Z,{xs:x,children:(0,r.jsxs)(l.Z,{style:{background:e.palette.background},hoverable:!0,paddingTop:"40px",paddingBottom:"10px",width:"100%",children:[(0,r.jsx)(u.Z,{alt:"User Documentation",draggable:"false",src:"/assets/icons/user.png",height:"100%",width:"200px"}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(f.TranslatableText,{children:"I'm a User"})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(m.Z,{type:"success",shadow:!0,margin:"10px",onClick:function(){window.location.replace("/manual")},children:(0,r.jsx)(f.TranslatableText,{children:"Open manual"})}),(0,r.jsx)(c.Z,{h:3})]})}),(0,r.jsx)(o.Z,{xs:x,children:(0,r.jsxs)(l.Z,{style:{background:e.palette.background},hoverable:!0,paddingTop:"40px",paddingBottom:"10px",width:"100%",children:[(0,r.jsx)(u.Z,{draggable:"false",src:"/assets/icons/developer.png",height:"100%",width:"200px",alt:"Developer Documentation"}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(f.TranslatableText,{children:"I'm a Developer"})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(m.Z,{type:"success",shadow:!0,margin:"10px",onClick:function(){b({text:"Doc is not available yet.",delay:5e3,type:"error"})},children:(0,r.jsx)(f.TranslatableText,{children:"Open documentation"})}),(0,r.jsx)(c.Z,{h:3})]})})]}),(0,r.jsx)(c.Z,{h:5})]})})}}},function(e){e.O(0,[774,888,179],(function(){return t=8348,e(e.s=t);var t}));var t=e.O();_N_E=t}]);