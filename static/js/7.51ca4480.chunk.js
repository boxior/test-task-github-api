(this["webpackJsonptest-task-github-api"]=this["webpackJsonptest-task-github-api"]||[]).push([[7],{242:function(e,t,n){e.exports={page:"Repos_page__KwJ-W",table:"Repos_table__1J4HW"}},337:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(124),c=n(167),i=n(242),u=n.n(i),s=n(10),l=n(333),p=n(331),f=[{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return b({a:e,b:t,key:"name"})},defaultSortOrder:"ascend"},{title:"Description",dataIndex:"description",key:"description",sorter:function(e,t){return b({a:e,b:t,key:"description"})}},{title:"Url",dataIndex:"html_url",key:"html_url",sorter:function(e,t){return b({a:e,b:t,key:"html_url"})}},{title:"Forks count",dataIndex:"forks_count",key:"forks_count",sorter:function(e,t){return g({a:e,b:t,key:"forks_count"})}},{title:"Watchers count",dataIndex:"watchers_count",key:"watchers_count",sorter:function(e,t){return g({a:e,b:t,key:"watchers_count"})}}],d=function(e){var t=e.repos;if(!t.isLoading&&t.error)return r.a.createElement(s.a,null);var n=Object.values(t.data).map((function(e){return Object(o.a)({},e,{key:e.id})}));return r.a.createElement("div",{className:u.a.page},r.a.createElement(l.a,{loading:t.isLoading,active:!0},r.a.createElement(p.a,{columns:f,dataSource:n,className:u.a.table})))},b=function(e){var t=e.a,n=e.b,a=e.key,r="string"===typeof t[a]?t[a]:"",o="string"===typeof n[a]?n[a]:"";return r.localeCompare(o)},g=function(e){var t=e.a,n=e.b,a=e.key;return("number"===typeof t[a]?t[a]:0)-("number"===typeof n[a]?n[a]:0)},k=n(147),m=n.n(k),h=n(1),y=function(){var e=Object(h.g)(),t=Object(a.useState)({data:{},isLoading:!1,error:null}),n=Object(c.a)(t,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){_({login:e.login,setRepos:i})}),[e.login]),r.a.createElement(d,{repos:o})},_=function(e){var t=e.login,n=e.setRepos;t&&v({login:t,setRepos:n})},v=function(e){var t=e.login,n=e.setRepos;n((function(e){return Object(o.a)({},e,{isLoading:!0,error:null})})),m.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=100")).then((function(e){return n((function(t){return Object(o.a)({},t,{isLoading:!1,error:null,data:Object(o.a)({},t.data,{},e.data)})})),e})).catch((function(e){throw n((function(t){return Object(o.a)({},t,{isLoading:!1,error:e})})),e}))};t.default=function(){return r.a.createElement(y,null)}}}]);
//# sourceMappingURL=7.51ca4480.chunk.js.map