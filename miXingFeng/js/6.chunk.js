(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{265:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),i=l(25),c=l(4),r=l(2);l(195);let o="";a.default=(()=>{const[e,a]=Object(t.useState)(""),[l,s]=Object(t.useState)(""),[d,m]=Object(t.useState)(!1);Object(t.useEffect)(()=>{const e=Object(i.e)();if(!e.filePath)return alertOld("缺少必要的参数,请稍后重试");o=e.filePath,a(e.filename),s(e.fileSize)});return n.a.createElement("div",{className:"show-file-info-container"},n.a.createElement("div",{className:"file-info"},n.a.createElement("i",{className:"fa fa-file-text-o file-ico"}),n.a.createElement("div",{className:"filename"},e),n.a.createElement("div",{className:"file-size"},"文件大小: ",l)),n.a.createElement("div",{className:"download-info"},n.a.createElement("div",{className:"download-file",onClick:()=>{Object(c.d)()?m(!0):Object(c.k)({filenameOrigin:"downloadFileFromThirdPart",fileUrl:o,folder:r.a.downloadAppFromPage})}},"下载"),n.a.createElement("div",{className:"download-app",onClick:()=>{Object(c.d)()?m(!0):Object(c.k)({filenameOrigin:"downloadAppFromThirdPartFile",fileUrl:r.a.appDownloadUrl,folder:r.a.downloadAppFromPage})}},"app打开")),d?n.a.createElement(t.Fragment,null,n.a.createElement("div",{className:"open-with-browser"},n.a.createElement("div",{className:"text1"},"链接打不开?"),n.a.createElement("div",{className:"text2"},"请点击右上角 ",n.a.createElement("strong",null,". . .")),n.a.createElement("div",{className:"text2"},'选择在"浏览器"打开')),n.a.createElement("div",{className:"overlay",onClick:()=>m(!1)})):null)})}}]);