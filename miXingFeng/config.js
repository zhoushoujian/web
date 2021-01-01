window.config = {
  domain: "http://localhost",
  host: "localhost",
  port: "8000",
  socketPort: "8000",
  debug: false,   //是否启用本机api调试的开关
  dev: false,   //以前用于是否开启前端debug模式的开关,现在使用用户信息里的role为admin来判断
  domainUrl: "https://api.zhoushoujian.com",
  socketUrl: "api.zhoushoujian.com"
};

// 0.0.1
// 1.0.0 - 1.1.9
// 2.0.0 - 2.0.5 - 2.1.3 - 2.1.6
// 3.0.0 - 3.0.2 - 3.1.1 - 3.1.2 - 3.1.4

// 每次发布需要做的事:
// 1. 更改config.xml和package.json版本号,并将dev模式改为false, 更新changlog.md => 上传changlog.md和config.xml
// 2. 拷贝打包好的release到服务端,一式两份,比如3.1.1.apk, 觅星峰.apk
// 3. 计算release包的MD5, 并修改服务端配置文件:MD5, version, appSize和更新content => 上传服务端代码
// 4. 上传拷贝来的三份文件和update_detail.json到服务端apk文件下, 并检测上传的新包能否正常升级
// 5. 去github上生成最新的tag
// 6. 打包windows, 设置main.js debug: false
