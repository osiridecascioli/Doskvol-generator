function colpo(e) {
    /*
    Informazioni più precise:\n
    Fazioni collegate e cosa vogliono o necessitano. Quell’essenza era stata pagata dall’Alveare. Vogliono ciò che è loro.\n
    Un vettore non così scontato per il piano. Le essenze di spirito possono essere richiamate attraverso il campo spettrale... in teoria.\n
    Segreti interessanti, un collegamento a un’opportunità alternativa. È molto probabile che i Guardiani mettano in sicurezza l’essenza catturata con protezioni arcane. I Riconciliati aborrono lo scambio di essenza e potrebbero essere un potenziale alleato o nemico, a seconda di quello farete.\n`],
    */
    d = rawDataHit["Il Colpo"];
    rawData[e.target.innerText] = {
        "Un Cliente/Bersaglio": randomList(d["Cliente/Bersaglio"])
        ,"Associato con": randomList(d["E FAZIONI"])
        ,"Dove/luogo": randomList(rawData["Luogo"]["Luogo"])
        ,"Lavoro": randomList(d["lavoro"])
        ,"Opportunità": randomList(rawDataHit["Bande"][e.target.innerText.toLowerCase()])
        ,"Modifica o complicazione": randomList(d["modifica o complicazione"])
        ,"Legato a una persona": randomList(d["LEGATO A UNA PERSONA"])
        ,"Associata con": randomList(d["E FAZIONI"])
    }
    fillUp(e);
}

function randomList(myList) {
    if (!myList){
        console.error("Err: no list!");
        console.log(myList);
        return "";
    }
    if (typeof(myList) == "string"){
        myList = [myList];
    }
    return myList[Math.floor(Math.random() * myList.length)];
}

function setData(d, data){
    for (const [key, value] of Object.entries(data)) {
        var p = document.createElement('p');
        p.innerText = key.toLowerCase() + ": ";
        var v = randomList(value);
        p.innerHTML += v;
        d.appendChild(p);
    }
}

function fillUp(e) {
    var dataTitle = e.target.innerHTML;
    if( dataTitle == "" ){
        console.error('ERR: no Title!');
        return;
    }
    //console.log(dataTitle);
    if( ! rawData[dataTitle] ){
        console.error('ERR: no Data!');
        console.log(dataTitle);
        console.log(rawData);
        return;
    }
    
    var d = getElement(dataTitle);
    
    setFather(d);

    setTitle(d, dataTitle);
    
    setData(d, rawData[dataTitle])
}

function getBande() {
    return Object.keys(rawDataHit["Bande"]);
}

function getButtonsList(){
    return rawData;
}

function createButton(key, listenFunction){
    var b = document.createElement('button');
    b.innerText = key;
    b.addEventListener('click', listenFunction, false);
    return b;
}

function designUI(){
    var d = document.createElement('div');
    d.className = "menu";
    document.getElementById("main").appendChild(d);
    var ul = document.createElement('ul');
    d.appendChild(ul);
    for (const [key, value] of Object.entries(getButtonsList())) {
        var li = document.createElement('li');
        li.appendChild(createButton(key, fillUp));
        ul.appendChild(li);
    }

    var ul = document.createElement('ul');
    d.appendChild(ul);
    var li = document.createElement('li');
    li.style.display = "inline";
    li.innerText = "Il Colpo: ";
    ul.appendChild(li);

    for (const [key, value] of Object.entries(getBande())) {
        var li = document.createElement('li');
        li.style.display = "inline";
        li.appendChild(createButton(capitalizeFirstLetter(value), colpo) );
        ul.appendChild(li);
    }
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function setTitle(d, dataTitle){
    var t = document.createElement('h2');
    t.innerText = dataTitle;
    d.appendChild(t);
}

function setFather(d){
    var dP = document.getElementById("generated");
    if (!dP){
        dP = document.createElement('div');
        dP.id = "generated";
        document.getElementById("main").appendChild(dP);
    }
    d.innerHTML = "";
    dP.insertBefore(d, dP.childNodes[0]);
}

function getElement(dataTitle){
    var d = document.getElementById(dataTitle);
    if (!d){
        d = document.createElement('div');
        d.id = dataTitle;
    }
    return d
}

function p(e, t){
    return "<" + e + ">" + t + "</" + e + ">";

}