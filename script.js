// Função para detectar a plataforma e executar uma ação específica
function detectarPlataforma() {
    var plataforma = navigator.userAgent.toLowerCase(); // Pega o user agent e coloca em minúsculas

    if (plataforma.indexOf("android") > -1) {
        // Ação para Android
        console.log("Você está usando Android.");
        // Exemplo de ação: Redirecionar para o Galaxy Store
        window.location.href = "intent://store#Intent;scheme=samsungapps;package=com.sec.android.app.samsungapps;end";
    }
    else if (plataforma.indexOf("iphone") > -1 || plataforma.indexOf("ipod") > -1) {
        // Ação para iOS
        console.log("Você está usando iOS.");
        // Exemplo de ação: Redirecionar para a App Store (você pode customizar o link)
        window.location.href = "https://apps.apple.com";
    }
    // else if (plataforma.indexOf("windows") > -1) {
    //     // Ação para Windows
    //     console.log("Você está usando Windows.");
    //     // Exemplo de ação: Redirecionar para o site da Microsoft Store
    //     window.location.href = "https://www.microsoft.com/store";
    // }
    else if (plataforma.indexOf("mac") > -1) {
        // Ação para macOS
        console.log("Você está usando macOS.");
        // Exemplo de ação: Redirecionar para a Mac App Store
        window.location.href = "macappstore://";
    }
    else {
        // Ação para outras plataformas
        console.log("Plataforma desconhecida.");
        // Exemplo de ação: Exibir uma mensagem
        alert("Plataforma desconhecida. Não foi possível determinar a ação.");
    }
}

// Chama a função ao carregar a página
detectarPlataforma();