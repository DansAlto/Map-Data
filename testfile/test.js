localStorage.setItem(`test`, () => {
    let random = Math.floor(Math.random() * (4 - 1) + 1);

    if (random === 1) {
        Test = "E";
    } else if (random === 2) {
        Test = "?";
    } else if (random === 3) {
        Test = "O-o";
    } else if (random === 4) {
        Test = "tired";
    }
});
