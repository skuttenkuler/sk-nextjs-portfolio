_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{HyGn:function(e,n,t){e.exports={navItem:"NavLink_navItem__2PjI5"}},"ON9+":function(e,n,t){e.exports={navContainer:"HomeNav_navContainer__3Xe_e"}},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("vRNQ"),c=t.n(o),a=t("q1tI"),u=t("YFqc"),i=t.n(u),s=t("HyGn"),f=t.n(s),l=function(){var e=Object(a.useState)("GOOD"),n=e[0],t=e[1],o=function(e){t(e)};return Object(r.jsx)("div",{className:f.a.navItem,onMouseEnter:function(){return o("ABOUT")},onMouseLeave:function(){return o("GOOD")},children:Object(r.jsx)(i.a,{href:"/about",children:n})})},v=function(){var e=Object(a.useState)("I"),n=e[0],t=e[1],o=function(e){t(e)};return Object(r.jsx)("div",{className:f.a.navItem,onMouseEnter:function(){return o("BLOG")},onMouseLeave:function(){return o("I")},children:Object(r.jsx)(i.a,{href:"/blog",children:n})})},d=function(){var e=Object(a.useState)("AM"),n=e[0],t=e[1],o=function(e){t(e)};return Object(r.jsx)("div",{className:f.a.navItem,onMouseEnter:function(){return o("CONTACT")},onMouseLeave:function(){return o("AM")},children:Object(r.jsx)(i.a,{href:"/contact",children:n})})},p=function(){var e=(new Date).getHours(),n="".concat((e<12?"MORNING":e<17&&"AFTERNOON")||"EVENING",". "),t=Object(a.useState)(n),o=t[0],c=t[1],u=function(e){c(e)};return Object(r.jsx)("div",{className:f.a.navItem,onMouseEnter:function(){return u("PROJECTS")},onMouseLeave:function(){return u(n)},children:Object(r.jsx)(i.a,{href:"/projects",children:o})})},h=function(){var e=Object(a.useState)("SAM"),n=e[0],t=e[1],o=function(e){t(e)};return Object(r.jsx)("div",{className:f.a.navItem,onMouseEnter:function(){return o("RESUME")},onMouseLeave:function(){return o("SAM")},children:Object(r.jsx)(i.a,{href:"/resume",children:n})})},j=t("ON9+"),O=t.n(j),b=function(){return Object(r.jsxs)("div",{className:O.a.navContainer,children:[Object(r.jsx)(l,{}),Object(r.jsx)(p,{}),Object(r.jsx)(v,{}),Object(r.jsx)(d,{}),Object(r.jsx)(h,{})]})};n.default=function(){return Object(r.jsx)("div",{className:c.a.homeContainer,children:Object(r.jsx)("div",{className:c.a.container,children:Object(r.jsx)(b,{})})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),s={};function f(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),v=l.href,d=l.as,p=e.children,h=e.replace,j=e.shallow,O=e.scroll,b=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var m=c.Children.only(p),_=m&&"object"===typeof m&&m.ref,N=(0,i.useIntersection)({rootMargin:"200px"}),E=r(N,2),M=E[0],x=E[1],y=c.default.useCallback((function(e){M(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,M]);(0,c.useEffect)((function(){var e=x&&n&&(0,a.isLocalURL)(v),r="undefined"!==typeof b?b:t&&t.locale,o=s[v+"%"+d+(r?"%"+r:"")];e&&!o&&f(t,v,d,{locale:r})}),[d,v,x,b,n,t]);var I={ref:y,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,v,d,h,j,O,b)},onMouseEnter:function(e){(0,a.isLocalURL)(v)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(t,v,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var g="undefined"!==typeof b?b:t&&t.locale,L=(0,a.getDomainLocale)(d,g,t&&t.locales,t&&t.domainLocales);I.href=L||(0,a.addBasePath)((0,a.addLocale)(d,g,t&&t.defaultLocale))}return c.default.cloneElement(m,I)};n.default=l},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),s=(0,c.useState)(!1),f=r(s,2),l=f[0],v=f[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&v(e)}),{rootMargin:n}))}),[t,n,l]);return(0,c.useEffect)((function(){u||l||(0,a.default)((function(){return v(!0)}))}),[l]),[d,l]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map},vRNQ:function(e,n,t){e.exports={homeContainer:"Home_homeContainer__3CSVg",container:"Home_container__1EcsU",homeText:"Home_homeText__4UEJi"}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);