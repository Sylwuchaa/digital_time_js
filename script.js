title.innerHTML= "JavaScript Time";

function actualTime() {
var watch = new Date();
document.getElementById('watch').innerHTML = watch.toLocaleTimeString();
}
setInterval(actualTime, 1000);
