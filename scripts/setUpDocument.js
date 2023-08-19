var root = document.querySelector(':root');

root.style.setProperty('--cube', '#0026ff80');
root.style.setProperty('--cube2', '#00188380');
root.style.setProperty('--cube3', '#01086380');
root.style.setProperty('--body', 'black');

fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/backgrounds/icon.png`)
    .then((res) => res.json())
    .then((data) => {
        let Icon = document.createElement(`link`);
        Icon.rel = 'icon';
        Icon.type = 'image/x-icon';
        Icon.href = data.download_url;
        document.head.appendChild(Icon);
    });