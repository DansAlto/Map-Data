function FetchData(Key) {
    if (Key.includes('.js')) {
        fetch(`https://api.github.com/repos/DansAlto/Map-Data/contents/${Key}`)
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://api.github.com/repos/DansAlto/Map-Data/git/blobs/${data.sha}`)
                    .then((rep) => rep.json())
                    .then((filedata) => {
                        let dd = atob(filedata.content)
                        eval(dd);
                    })
            });
    } else if (Key.includes(`.png`) || Key.includes(`.jpg`) || Key.includes(`.jpeg`) ) {
        fetch(`https://api.github.com/repos/DansAlto/Map-Data/contents/${Key}`)
            .then((res) => res.json())
            .then((data) => {
                cover.style.backgroundImage = `url('${data.download_url}')`;
            })

    } else if(Key.includes(`.css`)) {
        fetch(`https://api.github.com/repos/DansAlto/Map-Data/contents/${Key}`)
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
FetchData(`csss/style.css`);
FetchData(`scripts/buildpoints.js`);
FetchData(`scripts/infocards.js`);

