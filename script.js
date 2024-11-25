function platformCheck(urlAndroid, urlWindows){
    var platform = navigator.userAgent.toLowerCase();

    if (platform.indexOf("android") > -1) {
        window.href = urlAndroid;
    } else if (platform.indexOf("windows") > -1) {
        window.href = urlWindows;
    } else {
        alert("Plataforma não suportada.\n\n" + platform);
    }
}