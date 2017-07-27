import React, { Component } from 'react';
import { render } from 'react-dom';

/*
1.对URL编码
*/

var test = 'http://www.baidu.com/my app?search=a&b=3#2哈哈';
var test1 = encodeURIComponent(test);
var test2 = encodeURI(test);
console.log(test);  // http://www.baidu.com
console.log(test1); // http%3A%2F%2Fwww.baidu.com%2Fmy%20app%3Fsearch%3Da%26b%3D3%232%E5%93%88%E5%93%88,浏览器无法解析这个地址
console.log(test2); // http://www.baidu.com/my%20app?search=a&b=3#2%E5%93%88%E5%93%88,浏览器无法解析这个地址

var test3 = decodeURIComponent(test1);
var test4 = decodeURI(test2);
console.log(test3);
console.log(test4);

var test5 = escape(test);
var test6 = unescape(test5);
console.log(test5); // http%3A//www.baidu.com/my%20app%3Fsearch%3Da%26b%3D3%232%u54C8%u54C8
console.log(test6); // http://www.baidu.com/my app?search=a&b=3#2哈哈

var rlt = "http://service.weibo.com/share/share.php?";
var url = 'http://www.baidu.com';
var params = {
    appkey: "379570494",
    title: "领杉果红包，享更多优惠！点击领取：",
    url: url
};
for (var i in params) {
    rlt += i + '=' + params[i] + '&';
}
for (var i in params) {
    rlt += i + '=' + encodeURIComponent(params[i]) + '&';
}
console.log(rlt);

class App extends Component {
    fun = () => {
        window.open(test);
    }
    render() {
        return (
            <button onClick={ this.fun }>跳转</button>
        );
    }
}

render(<App />, document.getElementById('root'));