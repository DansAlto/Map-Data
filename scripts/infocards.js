function CreateInfoCard(name, info, levelrq, hasquests, hasmats, id) {
    let infocard = document.createElement(`div`);
    let infohead = document.createElement(`div`);
    let lvlrq = document.createElement(`div`);
    let infotext = document.createElement(`div`);

    infohead.innerText = name;
    infotext.innerText = info;
    lvlrq.innerText = levelrq;

    if(hasquests || hasmats) {
        let cardcont = document.createElement(`div`);
        cardcont.classList.add(`cardcont`);
        infocard.appendChild(cardcont);
    }

    infocard.classList.add(`info-card`);
    infohead.classList.add(`info-head`);
    lvlrq.classList.add(`info-level`);
    infotext.classList.add(`info-body`);

    document.body.appendChild(infocard);
    infocard.appendChild(infohead);
    infocard.appendChild(lvlrq);
    infocard.appendChild(infotext);

    let cpoints = document.querySelectorAll(`.point`);
    cpoints[id].addEventListener(`click`, () => {
        if(infocard.classList.contains(`open`)) {
            infocard.classList.remove(`open`);
        } else  {
            infocard.classList.add(`open`);
            CloseAllbutThis(id);
        } 
    });

    function CloseAllbutThis(ignoreid) {
        let deskofcards = document.querySelectorAll(`.info-card`)
        for(let i = 0; i < deskofcards.length;i++) {
            if(deskofcards[i] === deskofcards[ignoreid]) {
            } else {
                if(deskofcards[i].classList.contains(`open`)) {
                    deskofcards[i].classList.remove(`open`);
                }
            }
        }
    }
}

CreateInfoCard(`Shrine`, `The Shrine is a quest location that holds the World Scroll. It is surrounded by Rough Waters that instantly summon a Sea Serpent upon detecting a player ship (meaning that you can geppo without it spawning a Sea Serpent).`, `???`, false, false, 0);
CreateInfoCard(`Coco`, `To get to Coco Island, you must start at Sphinx Island. This is the simplest and easiest way. After you are at Sphinx Island sail North and keep a lookout and you will eventually see a small island, this is Coco Island`, `???`, false, false, 1);
CreateInfoCard(`Marine Ford`, `test`, `???`, false, false, 2);
CreateInfoCard(`Gravito`, `test`, `160 - 190`, false, false, 3);
CreateInfoCard(`Fishman Cave`, `test`, `190 - 350`, false, false, 4);
CreateInfoCard(`Reverse Mountains`, `test`, `325+`, false, false, 5);
CreateInfoCard(`Sphinx`, `test`, `55 - 110`, false, false, 6);
CreateInfoCard(`Small Island`, `test`, `55 - 110`, false, false, 7);
CreateInfoCard(`Orange Town`, `test`, `???`, false, false, 8);
CreateInfoCard(`Island of Zou`, `test`, `35 - 110`, false, false, 9);
CreateInfoCard(`Baratie`, `test`, `40 - 110`, false, false, 10);
CreateInfoCard(`Shell's Town`, `test`, `25 - 40`, false, false, 11);
CreateInfoCard(`Mysterious Tower`, `???`, `test`, false, false, 12);
CreateInfoCard(`Colloseum`, `test`, `???`, false, false, 13);
CreateInfoCard(`Arlong Park`, `test`, `???`, false, false, 14);
CreateInfoCard(`Roca Island`, `test`, `???`, false, false, 15);
CreateInfoCard(`Marine F1`, `test`, `???`, false, false, 16);
CreateInfoCard(`Town of Beginnings`, `test`, `0 - 15`, false, false, 17);
CreateInfoCard(`Sandora`, `test`, `15 - 25`, false, false, 18);
CreateInfoCard(`Kori`, `test`, `80+`, false, false, 19);
CreateInfoCard(`Skypiea Entrance`, `test`, `110 - 160`, false, false, 20);
CreateInfoCard(`Skypiea 1`, `test`, `110 - 160`, false, false, 21);
CreateInfoCard(`Skypiea 2`, `test`, `110 - 160`, false, false, 22);
CreateInfoCard(`Skypiea 3`, `test`, `110 - 160`, false, false, 23);
CreateInfoCard(`Skypiea 4`, `test`, `110 - 160`, false, false, 24);
CreateInfoCard(`Skypiea Colloseum`, `test`, `110 - 160`, false, false, 25);
CreateInfoCard(`Skypiea Mainlands`, `test`, `110 - 160`, false, false, 26);




// function CreateQueust(name, lvlrq, npcs, rewards, hp) {

// }

