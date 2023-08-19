let cover = document.getElementById(`cover`);

var root = document.querySelector(':root');

root.style.setProperty('--cube', '#0026ff80');
root.style.setProperty('--cube2', '#00188380');
root.style.setProperty('--cube3', '#01086380');
root.style.setProperty('--body', 'black');

function FetchData(Key) {
    if (Key.includes('.js')) {
        fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${Key}`)
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://api.github.com/repos/DansAlto/Cubes/git/blobs/${data.sha}`)
                    .then((rep) => rep.json())
                    .then((filedata) => {
                        let dd = atob(filedata.content)
                        eval(dd);
                    })
            });
    } else if (Key.includes(`.png`) || Key.includes(`.jpg`) || Key.includes(`.jpeg`) ) {
        fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${Key}`)
            .then((res) => res.json())
            .then((data) => {
                cover.style.backgroundImage = `url('${data.download_url}')`;
            })

    } else if(Key.includes(`.css`)) {
        fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${Key}`)
        .then((res) => res.json())
        .then((data) => {
            let dd = atob(data.content);
            const newStyle = document.createElement(`style`);
            newStyle.textContent = dd;
            document.head.appendChild(newStyle);
        })
    }
}

// Requests!
FetchData(`scripts/snake.js`);
FetchData(`scripts/weather&time.js`);
FetchData(`scripts/setUpDocument.js`);
FetchData(`backgrounds/dreaming_reveleance.jpeg`);
FetchData(`csss/style.css`)
