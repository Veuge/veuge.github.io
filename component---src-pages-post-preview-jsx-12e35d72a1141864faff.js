(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,8],{207:function(e,t,n){"use strict";n.r(t);n(67);var a=n(0),r=n.n(a);t.default=function(e){var t=e.name;return r.a.createElement("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"10px",color:"rgb(0, 148, 50)",fontWeight:"bold",border:"1px solid rgb(0, 148, 50)",borderRadius:"1.25rem",marginRight:"5px",marginBottom:0,padding:"0 10px",lineHeight:"normal",height:30}},t)}},208:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(207);t.default=function(e){var t=e.tags;return!!t&&r.a.createElement("div",{style:{display:"flex",paddingBottom:8}},t.map((function(e,t){return r.a.createElement(i.default,{key:e+"-"+t,name:e})})))}},210:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(133),l=n(217),o=n(208),s={container:{padding:"25px 0",borderBottom:"1px dashed "+l.a.pureApple},headerContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},headerStyle:{marginBottom:0},linkStyle:{color:l.a.pureApple},dateStyle:{fontSize:"0.83255rem",lineHeight:"1.75rem",fontStyle:"italic",marginRight:8}};t.default=function(e){var t=e.post;return!!t&&r.a.createElement("div",{style:s.container},r.a.createElement("div",{style:s.headerContainer},r.a.createElement("h3",{style:s.headerStyle},r.a.createElement(i.Link,{style:s.linkStyle,to:t.fields.slug},t.frontmatter.title||t.fields.slug)),r.a.createElement("span",{style:s.dateStyle},t.frontmatter.date)),r.a.createElement(o.default,{tags:t.frontmatter.tags}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}},217:function(e,t,n){"use strict";t.a={midnightBlue:"#2c3e50",clouds:"#ecf0f1",pureApple:"#009432"}}}]);
//# sourceMappingURL=component---src-pages-post-preview-jsx-12e35d72a1141864faff.js.map