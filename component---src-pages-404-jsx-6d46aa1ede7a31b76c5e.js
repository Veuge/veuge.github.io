(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{151:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(159),l=a(161),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(l.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=s;var u="1097489062"},154:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(e,"a",function(){return l.a});a(155);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(t,e,a){var n;t.exports=(n=a(158))&&n.default||n},156:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return s});var n=a(163),r=a.n(n),i=a(164),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},p:{marginBottom:0}}};var c=new r.a(o.a);var l=c.rhythm,s=c.scale},157:function(t,e,a){"use strict";e.a={midnightBlue:"#2c3e50",clouds:"#ecf0f1",pureApple:"#009432"}},158:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},159:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=(a(34),a(160)),o=a(0),c=a.n(o),l=a(154),s=a(156),u=a(157),d={headerRootStyle:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0}),headerLinkStyle:{boxShadow:"none",textDecoration:"none",color:u.a.pureApple},headerStyle:{fontFamily:"Montserrat, sans-serif",marginTop:0},layoutContainer:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75),minHeight:"100vh"},footer:{display:"flex",flexGrow:0,justifyContent:"center"},socialLink:{color:u.a.pureApple,padding:"0 10px"}},p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children,o=d.headerRootStyle,s=d.headerLinkStyle,u=d.headerStyle,p=d.layoutContainer;return t="/"===a.pathname?c.a.createElement("h1",{style:o},c.a.createElement(l.a,{style:s,to:"/"},n)):c.a.createElement("h3",{style:u},c.a.createElement(l.a,{style:s,to:"/"},n)),c.a.createElement(l.b,{query:m,render:function(e){var a=e.site.siteMetadata.social,n=a.twitter,i=a.github,o=a.email;return c.a.createElement("div",{style:p},c.a.createElement("header",null,t),c.a.createElement("main",{style:{flexGrow:1}},r),c.a.createElement("footer",{style:d.footer},c.a.createElement("a",{style:d.socialLink,href:n,target:"_blank"},"twitter")," ","•"," ",c.a.createElement("a",{style:d.socialLink,href:i,target:"_blank"},"github")," ","•"," ",c.a.createElement("a",{style:d.socialLink,href:o,target:"_blank"},"email")))},data:i})},e}(o.Component),m="3564818697";e.a=p},160:function(t){t.exports={data:{site:{siteMetadata:{social:{twitter:"https://twitter.com/Veuge_C",github:"https://github.com/Veuge",email:"mailto:veuge.clavijo@gmail.com"}}}}}},161:function(t,e,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(165),s=a.n(l);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,c=n.data.site,l=e||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=u},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Este es un Hotfix!",description:"Recien comenzando.",author:"Veronica Clavijo"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-6d46aa1ede7a31b76c5e.js.map