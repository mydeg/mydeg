// Função para detectar a plataforma e executar uma ação específica
function detectarPlataforma() {
    var plataforma = navigator.userAgent.toLowerCase(); // Pega o user agent e coloca em minúsculas

    if (plataforma.indexOf("android") > -1) {
        return "android";
    } else if (plataforma.indexOf("windows") > -1) {
        return "windows";
    } else {
        return "";
    }
}

// Chama a função ao carregar a página
var plataforma = detectarPlataforma();
if (plataforma == "") {
    alert("Plataforma desconhecida. Não foi possível determinar a ação.");
}