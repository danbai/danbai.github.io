var ajax = (url, type='GET', asyncBoolean=true, callback) => {
	var httpRequest = new XMLHttpRequest();
	httpRequest.open(type, url, asyncBoolean);
	httpRequest.send();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4 && httpRequest.status === 200) {
			let res = JSON.parse(httpRequest.responseText);
			callback && callback(res);
		}
	}
}

export default ajax;