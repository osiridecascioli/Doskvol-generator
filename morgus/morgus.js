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
        ]
        , "Animali":[
            "Gatto"
            , "Cane"
            , "Topo"
        ]
        , "utensile":[
            "estintore"
            , "tastiera"
            , "righello"
            , "forbici"
        ]
    }
}