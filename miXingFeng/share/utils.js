/**
 * 获取时间函数
 */
function getTime() {
	let year = new Date().getFullYear();
	let month = new Date().getMonth() + 1;
	let day = new Date().getDate();
	let hour = new Date().getHours();
	let minute = new Date().getMinutes();
	let second = new Date().getSeconds();
	let mileSecond = new Date().getMilliseconds();
	if (hour < 10) {
		hour = "0" + hour
	}
	if (minute < 10) {
		minute = "0" + minute
	}
	if (second < 10) {
		second = "0" + second
	}
	if (mileSecond < 10) {
		second = "00" + mileSecond
	}
	if (mileSecond < 100) {
		second = "0" + mileSecond
	}
	let time = `${year}-${month}-${day} ${hour}:${minute}:${second}.${mileSecond}`;
	return time;
}

/**
 * 获取网络状态
 */
window.getNetType = function (){
	let networkState = navigator.connection.type;
	let states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.CELL]     = 'Cell generic connection';
	states[Connection.NONE]     = 'No network connection';
	switch(states[networkState]){
		case 'Unknown connection':
		case 'Cell generic connection':
			states.showText = "未知网络，更新需要消耗流量";
			break;
		case 'Ethernet connection':
			states.showText = "有线网络连接，更新需要消耗流量";
			break;
		case 'WiFi connection':
			states.showText = "当前为Wi-Fi环境，更新无需移动流量";
			break;
		case 'Cell 2G connection':
		case 'Cell 3G connection':
		case 'Cell 4G connection':
			states.showText = "当前为非Wi-Fi环境，更新需要消耗流量";
			break;
		case 'No network connection':
			states.showText = "没有网络连接，请检查网络";
			break;
		default:
			states.showText = "未知网络";
			break;
	}
	return states.showText;
}


String.prototype.format = function() {
	var str = this.toString();
	if (!arguments.length)
		return str;
	var args = typeof arguments[0];
	args = (("string" == args || "number" == args) ? arguments : arguments[0]);
	for (var arg in args) {
		var replace = args[arg] || '';
		str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), replace);
	}
	return str;
};

/**
 *  对Date的扩展，将 Date 转化为指定格式的String
		月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
		年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
		例子：
		(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 *
 * */
Date.prototype.format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

//Observer mode
const Subject = function(){
    this.observers = []

    return {
        subscribeObserver: (observer) => {
            this.observers.push(observer)
        },
        unsubscribeObserver: (observer) => {
            var index = this.observers.indexOf(observer);
            if(index > -1){
                this.observers.splice(index, 1)
            }
        },
        notifyObserver: (observer) => {
            var index = this.observers.indexOf(observer)
            if(index > -1){
                this.observers[index].notify(index)
            }
        },
        notifyAllObservers: (observer) => {
            for(let i=0;i<this.observers.length;i++){
                this.observers[i].notify(i)
            }
        }
    }
}

window.Observer = function(cb){
    return {
        notify: function(index){
            if(cb) cb(index)
        }
    }
}

window.subjectModel = new Subject()

// subscribe mode
function EventEmit(){
    this.emitObj = {}

    this.$on = function(name, callback){
        if(!this.emitObj[name]){
            this.emitObj[name] = []
        }
        this.emitObj[name].push(callback)
    }

    this.$emit = function(name){
		const args = Array.from(arguments).slice(1)
        if(this.emitObj[name]){
            this.emitObj[name].forEach(callback => {
                callback.apply(this, args)
            })
        }
	}

	this.$once = function (name, callback) {
		function oneTime() {
			callback.apply(this, arguments)
			this.$off(name)
		}
		oneTime.cbName = callback;  //为了待会$off的时候能准确找到背后的那个cb，所以给oneTime函数添加了属性方便找到它
		this.$on(name, oneTime);
	}

    this.$off = function(name, callback){
		if(!arguments){
			this.emitObj = Object.create(null)
		}
        if(this.emitObj[name]){
            if(callback){
                for(let i=0;i<this.emitObj[name].length;i++){
                    if(this.emitObj[name].indexOf(this.emitObj[name]) !== -1){
                        this.emitObj[name].splice(i, 1)
                    }
                }
            } else {
                this.emitObj[name].length = 0
            }
        }
    }
}

window.eventEmit = new EventEmit()
// event1.$on("abc", (param) => {console.log("param", param)})
// event1.$emit("abc", 'abc')
// event1.$emit("abc", 'abc')
// event1.$off('abc')
// event1.$emit("abc", 'abc')

function generateString(num){
	let str = "", randomStr;
	let template= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	for(let i=0; i< num; i++){
		randomStr = template[parseInt(Math.random()*36)];
		if(/[a-z]/g.test(randomStr)){
			if(Math.random()*2 < 1){
				randomStr = randomStr.toUpperCase()
			}
		}
		str += randomStr;
	}
	return str;
}

