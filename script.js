function run(){
    let htCode = document.getElementById("html").value;
    let csCode = document.getElementById("css").value;
    let jsCode = document.getElementById("js").value;
    let outputCode = document.getElementById("chipi")

    chipi.contentDocument.body.innerHTML = htCode+"<style>"+csCode+"</style>";
    chipi.contentWindow.eval(jsCode);
}