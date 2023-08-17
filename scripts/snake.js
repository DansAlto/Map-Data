let pagefocus = false;

let milisecond = 1000;

let time = 4 * milisecond;
let speed = 10;
let delay = 9 * milisecond;

let colorcube = getComputedStyle(document.documentElement).getPropertyValue('--cube');

function grow(size, despawnrate, despawn, speed, spawnside) {
    let up = false;
    let down = false;
    let left = false;
    let right = false;

    let perc = 80;
    let left_chance = (Math.random() * (101 - 0) + 0);

    let YDeadZoneMin = 10;
    let YDeadZoneMax = window.innerHeight;

    let XDeadZoneMin = 10;
    let XDeadZoneMax = window.innerWidth;

    if (spawnside.toLowerCase() == 'left') {
        left = true;
        let startcube = document.createElement('div');
        startcube.classList.add(`cubes`);
        startcube.style.top = `${Math.floor(Math.random() * (YDeadZoneMax - YDeadZoneMin) + YDeadZoneMin)}px`;
        startcube.style.left = `0px`;
        startcube.style.backgroundColor = colorcube;
        document.body.appendChild(startcube);

        startcube.classList.add(`grow`);
        setTimeout(() => {
            startcube.classList.remove(`grow`);
        }, 1000);

        if (despawn == true) {
            setTimeout(() => {
                document.body.removeChild(startcube);
            }, despawnrate);
        }

        let currentposX = startcube.offsetLeft;
        let currentposY = startcube.offsetTop;

        let i = 0;

        function Loop() {
            setTimeout(function () {
                i++;
                if (left == true) {
                    let percentage = Math.floor(Math.random() * (100 - 0) + 0);
                    if (percentage >= perc) {
                        left = false;
                        let chance = Math.random();
                        if (chance < 0.5) {
                            up = true;
                        } else if (chance > 0.5) {
                            down = true;
                        }
                    } else {
                        currentposX += 65;
                        if (currentposX > XDeadZoneMax) {
                            i = size;
                            currentposX -= (64 * 2);
                            CreateCube(`end`);
                        } else if (currentposX < XDeadZoneMax) {
                            CreateCube();
                        }
                    }
                } else if (up == true) {
                    let percentage = Math.floor(Math.random() * (100 - 0) + 0);
                    if (percentage >= left_chance) {
                        up = false;
                        left = true;
                    } else {
                        currentposY -= 65;
                        if (currentposY < YDeadZoneMin) {
                            i = size;
                            currentposY += 56;
                            CreateCube(`end`);
                        } else if (currentposY > YDeadZoneMin) {
                            CreateCube();
                        }
                    }
                } else if (down == true) {
                    let percentage = Math.floor(Math.random() * (100 - 0) + 0);
                    if (percentage >= left_chance) {
                        down = false;
                        left = true;
                    } else {
                        currentposY += 65;
                        if (currentposY > YDeadZoneMax) {
                            i = size;
                            currentposY -= 65;
                            CreateCube(`end`);
                        } else if (currentposY < YDeadZoneMax) {
                            CreateCube();
                        }
                    }
                }

                if (i < size) {
                    Loop();
                }
            }, speed);
        }

        Loop();

        function CreateCube(type) {
            switch (type) {
                case `end`: {
                    let endcube = document.createElement('div');
                    endcube.classList.add(`cubes`);
                    endcube.style.backgroundColor = colorcube;
                    endcube.style.top = `${currentposY}px`;
                    endcube.style.left = `${currentposX}px`;
                    document.body.appendChild(endcube);

                    if (despawn == true) {
                        setTimeout(() => {
                            document.body.removeChild(endcube);
                        }, despawnrate);
                    }

                    endcube.classList.add(`grow`);
                    setTimeout(() => {
                        endcube.classList.remove(`grow`);
                    }, 1000);
                    break;
                }

                default: {
                    let cube = document.createElement('div');
                    cube.classList.add(`cubes`);
                    cube.style.top = `${currentposY}px`;
                    cube.style.left = `${currentposX}px`;
                    document.body.appendChild(cube);

                    cube.classList.add(`grow`);
                    setTimeout(() => {
                        cube.classList.remove(`grow`);
                    }, 1000);

                    if (despawn == true) {
                        setTimeout(() => {
                            document.body.removeChild(cube);
                        }, despawnrate);
                    }
                    break;
                }
            }
        }
        
    } else if (spawnside.toLowerCase() == 'right') {
        right = true;
        let startcube = document.createElement('div');
        startcube.classList.add(`cubes`);
        startcube.style.top = `${Math.floor(Math.random() * (YDeadZoneMax - YDeadZoneMin) + YDeadZoneMin)}px`;
        startcube.style.left = `${XDeadZoneMax - 65}px`;
        startcube.style.backgroundColor = colorcube;
        document.body.appendChild(startcube);

        if (despawn == true) {
            setTimeout(() => {
                document.body.removeChild(startcube);
            }, despawnrate);
        }

        startcube.classList.add(`grow`);
        setTimeout(() => {
            startcube.classList.remove(`grow`);
        }, 1000);

        let currentposX = startcube.offsetLeft;
        let currentposY = startcube.offsetTop;

        let i = 0;

        function Loop() {
            setTimeout(function () {
                i++;
                if (right == true) {
                    let percentage = Math.floor(Math.random() * (100 - 0) + 0);
                    if (percentage >= perc) {
                        right = false;
                        let chance = Math.random();
                        if (chance < 0.5) {
                            up = true;
                        } else if (chance > 0.5) {
                            down = true;
                        }
                    } else {
                        currentposX -= 65;
                        if (currentposX < XDeadZoneMin) {
                            i = size;
                            currentposX += 10;
                            CreateCube(`end`);
                        } else if (currentposX > XDeadZoneMin) {
                            CreateCube();
                        }
                    }
                } else if (up == true) {
                    let percentage = Math.floor(Math.random() * (100 - 0) + 0);
                    if (percentage >= left_chance) {
                        up = false;
                        right = true;
                    } else {
                        currentposY -= 65;
                        if (currentposY < YDeadZoneMin) {
                            i = size;
                            currentposY += 56;
                            CreateCube(`e`);
                        } else if (currentposY > YDeadZoneMin) {
                            CreateCube();
                        }
                    }
                } else if (down == true) {
                    let percentage = Math.floor(Math.random() * (100 - 0) + 0);
                    if (percentage >= left_chance) {
                        down = false;
                        right = true;
                    } else {
                        currentposY += 65;
                        if (currentposY > YDeadZoneMax) {
                            i = size;
                            currentposY -= 65;
                            CreateCube(`end`);
                        } else if (currentposY < YDeadZoneMax) {
                            CreateCube();
                        }
                    }
                }

                if (i < size) {
                    Loop();
                }
            }, speed);
        }

        Loop();


        function CreateCube(type) {
            switch (type) {
                case `end`: {
                    let endcube = document.createElement('div');
                    endcube.classList.add(`cubes`);
                    endcube.style.backgroundColor = colorcube;
                    endcube.style.top = `${currentposY}px`;
                    endcube.style.left = `${currentposX}px`;
                    document.body.appendChild(endcube);

                    if (despawn == true) {
                        setTimeout(() => {
                            document.body.removeChild(endcube);
                        }, despawnrate);
                    }

                    endcube.classList.add(`grow`);
                    setTimeout(() => {
                        endcube.classList.remove(`grow`);
                    }, 1000);
                    break;
                }

                default: {
                    let cube = document.createElement('div');
                    cube.classList.add(`cubes`);
                    cube.style.top = `${currentposY}px`;
                    cube.style.left = `${currentposX}px`;
                    document.body.appendChild(cube);

                    cube.classList.add(`grow`);
                    setTimeout(() => {
                        cube.classList.remove(`grow`);
                    }, 1000);

                    if (despawn == true) {
                        setTimeout(() => {
                            document.body.removeChild(cube);
                        }, despawnrate);
                    }
                    break;
                }
            }
        }
    }
}

setTimeout(() => {
    grow(1000, time, true, 10, "right");
    setTimeout(() => {
        grow(1000, time, true, 10, "left");
        setTimeout(() => {
            grow(1000, time, true, 10, "right");
        }, delay/3);
    }, delay/3);

    setTimeout(() => {
        setInterval(() => {
            if (pagefocus) {
                grow(1000, time , true, speed, "left");
                grow(1000, time , true, speed, "left");
            }

        }, delay/2);
    }, delay/2);

    setInterval(() => {
        if (pagefocus) {
            grow(1000, time, true, speed, "right");
            grow(1000, time, true, speed, "right");
        }
    }, delay);
}, delay/2);


function FocusCheck() {
    if (document.hasFocus() == true) {
        if (pagefocus == false) {
            pagefocus = true
        }
    } else {
        if (pagefocus == true) {
            pagefocus = false;
        }
    }
}

setInterval(FocusCheck, 1);