function CreatePoint(size, x, y, name, type) {
    let point = document.createElement(`div`);
    point.id = name;
    point.classList.add(`point`);
    point.style.width = `${size}vh`;
    point.style.height = `${size}vh`;
    point.style.top = `${y}vh`;
    point.style.left = `${x}vh`;
    document.body.appendChild(point);

    if (type == 'circular') {
        point.classList.add('circular');
    };
}

CreatePoint('0.90', '68.98', '15.83', 'Shrine', 'circular');
CreatePoint('1.25', '93.22', '15.67', 'Coco', 'circular');
CreatePoint('3.25', '77.22', '29.73', 'Marine-Ford', 'circular');
CreatePoint('2.25', '126', '29.08', 'Gravito', 'circular');
CreatePoint('0.65', '136.51', '26.98', 'Fishman-Cave', 'circular');
CreatePoint('4.25', '38.16', '47.98', 'Reverse-Mountains');
CreatePoint('1.75', '92.25', '47.98', 'Sphinx', 'circular');
CreatePoint('1', '90.64', '50.27', 'Small-Sphinx-Island', 'circular');
CreatePoint('1.5', '79.64', '67.53', 'Orange-Town', 'circular');
CreatePoint('2.75', '97.58', '76.9', 'Island-Of-Zou', 'circular');
CreatePoint('1', '101.13', '65.27', 'Baratie', 'circular');
CreatePoint('2', '113.57', '68.34', 'Shells-Town', 'circular');
CreatePoint('0.75', '111.16', '55.74', 'Mysterious-Tower', 'circular');
CreatePoint('1.25', '103.29', '56.54', 'Colloseum', 'circular');
CreatePoint('1.25', '116', '45.56', 'Arlong-Park', 'circular');
CreatePoint('2.25', '135.06', '67.37', 'Roca-Island', 'circular');
CreatePoint('0.75', '126', '81.91', 'Marine-F1', 'circular');
CreatePoint('1', '118.74', '90.31', 'Town-Of-Beginnings', 'circular');
CreatePoint('1.25', '109.53', '90.31', 'Sandora', 'circular');
CreatePoint('1.5', '90.31', '94.5', 'Kori', 'circular');
CreatePoint('0.75', '148.17', '48.91', 'Skypiea-Entrace', 'circular');
CreatePoint('1', '149.75', '47.65', 'Skypiea1', 'circular');
CreatePoint('1', '150.47', '49.25', 'Skypiea2', 'circular');
CreatePoint('1', '150.99', '51', 'Skypiea3', 'circular');
CreatePoint('1.25', '151', '46.5', 'Skypiea4', 'circular');
CreatePoint('2', '152.93', '43.5', 'Skypiea-Colloseum', 'circular');
CreatePoint('3.25', '147.17', '42.65', 'Skypiea-Mainlands', 'circular');

let points = document.querySelectorAll('.point');
for (i = 0; i < points.length; i++) {
    let names = points[i].id.replace("-", " ");
    let islandcard = document.createElement(`div`);
    islandcard.classList.add(`island-card`);
    islandcard.style.top = `-6vh`;
    islandcard.style.left = `-4vh`;
    islandcard.innerText = names;
    function ChangeSize(id, size) {
        if (i == id) {
            islandcard.style.fontSize = `${size}vh`;
        }
    }

    ChangeSize(0, 3);
    ChangeSize(1, 3);
    ChangeSize(2, 2);
    ChangeSize(3, 2);
    ChangeSize(5, 1.6);
    ChangeSize(10, 2.5);
    ChangeSize(13, 2.5);

    points[i].appendChild(islandcard);
} 