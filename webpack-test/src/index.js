require('../css/index.css');
var hello = require('./hello');
hello();
document.getElementById('root').onclick = function() {
    if (this.className === 'current') {
        this.className = 'aaa';
    } else {
        this.className = 'current';
    }
}