var helloworld = (function () {
    function helloworld(message) {
        this.message = message;
    }
    helloworld.prototype.helloworld = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return helloworld;
})();

var h = new helloworld("Hello,World");
var str = h.helloworld();
document.body.innerHTML = str;
