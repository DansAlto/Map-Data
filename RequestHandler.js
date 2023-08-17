let cover = document.getElementById(`cover`);

var root = document.querySelector(':root');

root.style.setProperty('--cube', '#1c2ca680');
root.style.setProperty('--cube2', '#101a6a80');
root.style.setProperty('--cube3', '#09114e80');

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
    } else if (Key.includes(`.png`) || Key.includes(`.jpg`)) {
        fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${Key}`)
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${Key}`)
                    .then((res) => res.json())
                    .then((data) => {
                        cover.style.backgroundImage = `url('${data.download_url}')`;
                    })
            })

    }
}

// Requests!
FetchData(`scripts/snake.js`);
FetchData(`backgrounds/sleepy curtains.jpg`);
