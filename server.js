//以非主线程的方式运行
global.logger = require('./logger');
let cluster = require("cluster"),
    fs = require("fs"),
    https = require('https'),
    os = require("os"),
    setting = require('./app/setting'),
    Render = require('./app/render');

let numCPUs = os.cpus().length;
if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('listening', function (worker, address) {
        console.log('listening: worker ' + worker.process.pid + ', port: ' + address.port);
    });
    cluster.on('online', function (worker) {
        console.log('[master] ' + 'online: worker' + worker.id);
    });
    cluster.on('disconnect', function (worker) {
        console.log('[master] ' + 'disconnect: worker' + worker.id);
    });
    cluster.on('exit', function (worker, code, signal) {
        console.warn('worker ' + worker.process.pid + ' died');
    });
} else {
    //获取ip地址
    var address
    var networks = os.networkInterfaces()
    Object.keys(networks).forEach(function (k) {
        for (var kk in networks[k]) {
            if (networks[k][kk].family === "IPv4" && networks[k][kk].address !== "127.0.0.1") {
                address = networks[k][kk].address;
                return address;
            }
        }
    })

    let i = 0;
    //创建服务器
    const options = {
		key:fs.readFileSync('./zhoushoujian.com.key'),
		cert:fs.readFileSync('./zhoushoujian.com.pem')
	}
    let server = https.createServer(options, function (req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        logger.info(` server  收到客户端的请求数量`, req.url, req.method, ++i);
        if (req.url === "/" && req.method === "GET") {
            //显示主页
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            var content = fs.readFileSync("./index.html");
            res.write(content);
            res.end();
        } else {

            var ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || '';
            if (ip.split(',').length > 0) {
                ip = ip.split(',')[0]
            }
            logger.info('ip', ip)

            //静态文件部署
            logger.debug(` server  处理静态文件`);
            const _render = new Render(req, res);
            _render.init();
        }
    });

    server.listen({
        port: setting.port
    });
    server.on('listening', function () {
        logger.info(`  服务启动成功,正在监听${setting.port}端口`);
        process.title = `服务启动成功--${address}-${setting.port}`;
    });
}