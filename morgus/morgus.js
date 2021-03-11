function standardUI(myData){
    var d = document.createElement('div');
    d.className = "menu";
    document.getElementById("main").appendChild(d);
    var ul = document.createElement('ul');
    d.appendChild(ul);
    for (const [key, value] of Object.entries(myData)) {
        var li = document.createElement('li');
        li.id = "li_" + key;
        li.appendChild(createButton(key, fillUp));
        li.appendChild(createExtraButton(key));
        li.appendChild(createClearButton(key));
        ul.appendChild(li);
    }
}

function designUIMorgus(){
    var myData = getMorgusButtonList()
    standardUI(myData);
    addPulisci();
}

function getMorgusButtonList() {
    return rawData;
}

const rawData = {
    "Primo Passo":{
        "Divinità":[
            "Zeus"
            , "Ade"
            , "Thor"
            , "Yahweh"
            , "Elohim"
            , "Padre Onnipotente"
            , "Gesù"
            , "Spirito Santo"
            , "Allah"
            , "Brahma"
            , "Visnu"
            , "Shiva"
            , "Indra"
            , "Mitra"
            , "Yama"
            , "Fu Hsi"
            , "Guan Yu"
            , "Pangu"
            , "Amaterasu"
            , "Raijin"
            , "Freia"
            , "Heimdallr"
            , "Loki"
            , "Odino"
            , "Alcherna"
            , "Borr"
            , "Quetzalcoatl"
            , "Dagon"
            , "Morrigan"
            , "Apollo"
            , "Apu Illapu"
            , "Ishtar"
        ]
        , "Animali":[
            "Gatto"
            , "Cane"
            , "Topo"
            , "Anatra"
            , "Babbuino"
            , "Capra"
            , "Daino"
            , "Elefante"
            , "Fagiano"
            , "Gallo"
            , "Iena"
            , "Lumaca"
            , "Merluzzo"
            , "Nasello"
            , "Panda"
            , "Quaglia"
            , "Rana"
            , "Struzzo"
            , "tasso"
            , "Usignolo"
            , "Vespa"
            , "Zebra"
        ]
        , "utensile":[
            "estintore"
            , "tastiera"
            , "righello"
            , "forbici"
            , "Scotch"
            , "lampada"
            , "penna"
            , "stampante"
            , "monitor"
            , "portatile"
            , "attaccapanni"
            , "armadio"
            , "cassettiera"
            , "lavagna"
            , "sedia"
            , "cavatappi"
        ]
    }
}