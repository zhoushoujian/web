(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{265:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),i=l(115),c=l(94),r=l(93);l(73);let o="";a.default=(()=>{const[e,a]=Object(t.useState)(""),[l,s]=Object(t.useState)(""),[m,d]=Object(t.useState)(!1);Object(t.useEffect)(()=>{const e=Object(i.e)();if(!e.filePath)return alertOld("缺少必要的参数,请稍后重试");o=e.filePath,a(e.filename),s(e.fileSize)});return n.a.createElement("div",{className:"show-file-info-container"},n.a.createElement("div",{className:"file-info"},n.a.createElement("i",{className:"fa fa-file-text-o file-ico"}),n.a.createElement("div",{className:"filename"},e),n.a.createElement("div",{className:"file-size"},"文件大小: ",l)),n.a.createElement("div",{className:"download-info"},n.a.createElement("div",{className:"download-file",onClick:()=>{Object(c.c)()?d(!0):Object(c.j)({filenameOrigin:"downloadFileFromThirdPart",fileUrl:o,folder:r.a.downloadAppFromPage})}},"下载"),n.a.createElement("div",{className:"download-app",onClick:()=>{Object(c.c)()?d(!0):Object(c.j)({filenameOrigin:"downloadAppFromThirdPartFile",fileUrl:r.a.appDownloadUrl,folder:r.a.downloadAppFromPage})}},"app打开")),m?n.a.createElement(t.Fragment,null,n.a.createElement("div",{className:"open-with-browser"},n.a.createElement("div",{className:"text1"},"链接打不开?"),n.a.createElement("div",{className:"text2"},"请点击右上角 ",n.a.createElement("strong",null,". . .")),n.a.createElement("div",{className:"text2"},'选择在"浏览器"打开')),n.a.createElement("div",{className:"overlay",onClick:()=>d(!1)})):null)})}}]);