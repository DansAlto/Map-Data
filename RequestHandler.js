function FetchData(Key) {
    if(Key.includes('.js')) {
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
    } else if(Key.includes(`.png`) || Key.includes(`.jpg`)){
        fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${Key}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })

    }
}

// Requests!
FetchData(`backgrounds/sleepy curtains.jpg`);
FetchData(`scripts/snake.js`);
