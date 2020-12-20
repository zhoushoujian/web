/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
/**
 * 获取时间函数
 */
function getTime() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let mileSecond = new Date().getMilliseconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  if (mileSecond < 10) {
    mileSecond = "00" + mileSecond;
  }
  if (mileSecond < 100) {
    mileSecond = "0" + mileSecond;
  }
  const time = `${year}-${month}-${day} ${hour}:${minute}:${second}.${mileSecond}`;
  return time;
}

/**
 * 获取网络状态
 */
window.getNetType = function () {
  const networkState = navigator.connection.type;
  const states = {};
  states[Connection.UNKNOWN] = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI] = 'WiFi connection';
  states[Connection.CELL_2G] = 'Cell 2G connection';
  states[Connection.CELL_3G] = 'Cell 3G connection';
  states[Connection.CELL_4G] = 'Cell 4G connection';
  states[Connection.CELL] = 'Cell generic connection';
  states[Connection.NONE] = 'No network connection';
  switch (states[networkState]) {
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
};


String.prototype.format = function () {
  let str = this.toString();
  if (!arguments.length) {
    return str;
  }
  let args = typeof arguments[0];
  args = ((args === "string" || args === "number") ? arguments : arguments[0]);
  for (const arg in args) {
    const replace = args[arg] || '';
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
  const o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (!fmt) return this;
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};

//Observer mode
const Subject = function () {
  this.observers = [];

  return {
    subscribeObserver: (observer) => {
      this.observers.push(observer);
    },
    unsubscribeObserver: (observer) => {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: (observer) => {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: (_observer) => {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i].notify(i);
      }
    }
  };
};

window.Observer = function (cb) {
  return {
    notify(index) {
      if (cb) {
        cb(index);
      }
    }
  };
};

window.subjectModel = new Subject();

// subscribe mode
function EventEmit() {
  this.emitObj = {};

  this.$on = function (name, callback) {
    if (!this.emitObj[name]) {
      this.emitObj[name] = [];
    }
    this.emitObj[name].push(callback);
  };

  this.$emit = function (name) {
    const args = Array.from(arguments).slice(1);
    if (this.emitObj[name]) {
      this.emitObj[name].forEach(callback => {
        callback.apply(this, args);
      });
    }
  };

  this.$once = function (name, callback) {
    function oneTime() {
      callback.apply(this, arguments);
      this.$off(name);
    }
    oneTime.cbName = callback;  //为了待会$off的时候能准确找到背后的那个cb，所以给oneTime函数添加了属性方便找到它
    this.$on(name, oneTime);
  };

  this.$off = function (name, callback) {
    if (!arguments) {
      this.emitObj = Object.create(null);
    }
    if (this.emitObj[name]) {
      if (callback) {
        for (let i = 0; i < this.emitObj[name].length; i++) {
          if (this.emitObj[name].indexOf(this.emitObj[name]) !== -1) {
            this.emitObj[name].splice(i, 1);
          }
        }
      } else {
        this.emitObj[name].length = 0;
      }
    }
  };
}

window.eventEmit = new EventEmit();
// event1.$on("abc", (param) => {console.log("param", param)})
// event1.$emit("abc", 'abc')
// event1.$emit("abc", 'abc')
// event1.$off('abc')
// event1.$emit("abc", 'abc')

// eslint-disable-next-line no-unused-vars
function generateString(num) {
  let str = "", randomStr;
  const template = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < num; i++) {
    randomStr = template[parseInt(Math.random() * 36)];
    if (/[a-z]/g.test(randomStr)) {
      if (Math.random() * 2 < 1) {
        randomStr = randomStr.toUpperCase();
      }
    }
    str += randomStr;
  }
  return str;
}

// 部署对象的迭代接口
Object.prototype[Symbol.iterator] = function () {
  const self = this;
  const keys = Object.keys(self)
  let index = 0;
  return {
    next() {
      if (index < keys.length) {
        return {
          value: self[keys[index++]],
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

function deepClone(target, cache = new Map()) {
  if (cache.get(target)) {
    return cache.get(target)
  }
  if (target instanceof Object) {
    let dist;
    if (target instanceof Array) {
      dist = [];
    } else if (target instanceof Function) {
      dist = function () {
        return target.call(this, ...arguments);
      };
    } else if (target instanceof RegExp) {
      dist = new RegExp(target.source, target.flags);
    } else if (target instanceof Date) {
      dist = new Date(target);
    } else {
      dist = {};
    }
    cache.set(target, dist);
    for (const key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        dist[key] = deepClone(target[key], cache);
      }
    }
    return dist;
  } else {
    return target;
  }
}
