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
        console.log(key);
        var p = document.createElement('p');
        p.innerText = key.toLowerCase() + ": ";
        var v = randomList(value);
        p.innerHTML += v;
        d.appendChild(p);
    }
}

function getListener(e) {
    if( !e || !e.target || e.target.innerText == "" ){
        throw new Error('ERR: no Title!');
    }
    return e.target.innerText;
}

function moreButton(e) {
    var dataTitle =  e.target.id.substring(9,  e.target.id.length);
    var f = document.getElementById( "li_" + dataTitle );
    var d = getElement( "son_" + dataTitle )
    f.appendChild(d);
    for (const [key, value] of Object.entries(rawData[dataTitle])) {
        if (document.getElementById( key )){
            continue;
        }
        var b = createButton(key, fillMore);
        d.appendChild(b);
    }
    return;
}

function fillMore(e){
    var dataTitle = getListener(e);
    for (const [key, value] of Object.entries(rawData)) {
        if (!rawData[key][dataTitle]){
            continue;
        }

        var d = getElement(dataTitle);
    
        setFather(d);
    
        setTitle(d, dataTitle);
        
        setData(d, {"":rawData[key][dataTitle]});
        return;
    }
}

function clearButton(e) {
    var dataTitle = e.target.id;
    dataTitle = dataTitle.substring(9, dataTitle.length);
    document.getElementById( "son_" + dataTitle ).remove();
}

function fillUp(e) {
    var dataTitle = getListener(e);
    //console.log(dataTitle);
    if( ! rawData[dataTitle] ){
        console.error('ERR: no dataTitle!');
        console.log(dataTitle);
        console.log(rawData);
        return;
    }

    fillUpExtra(dataTitle, rawData[dataTitle]);
}

function fillUpExtra(dataTitle, myData) {
        
    var d = getElement(dataTitle);
    
    setFather(d);

    setTitle(d, dataTitle);
    
    setData(d, myData);
}

function getBande() {
    return Object.keys(rawDataHit["Bande"]);
}

function getButtonsList(){
    return rawData;
}

function createButton(key, listenFunction){
    var b = document.createElement('button');
    b.id = "button_" + key;
    b.innerText = key;
    b.addEventListener('click', listenFunction, false);
    return b;
}

function createClearButton(key) {
    var b = document.createElement('button');
    b.id = "button_X_" + key;
    b.innerText = "X";
    b.className = "close";
    b.addEventListener('click', clearButton, false);
    return b;
}
function createExtraButton(key) {
    var b = document.createElement('button');
    b.id = "button_E_" + key;
    b.innerText = "E";
    b.className = "close";
    b.addEventListener('click', moreButton, false);
    return b;
}

//<p ontouchstart="mouseDown()" ontouchend="mouseUp()" onmousedown="mouseDown()" onmouseup="mouseUp()">Long Touch Me!</p>


function designUI(){
    var d = document.createElement('div');
    d.className = "menu";
    document.getElementById("main").appendChild(d);
    var ul = document.createElement('ul');
    d.appendChild(ul);
    for (const [key, value] of Object.entries(getButtonsList())) {
        var li = document.createElement('li');
        li.id = "li_" + key;
        li.appendChild(createButton(key, fillUp));
        li.appendChild(createExtraButton(key));
        li.appendChild(createClearButton(key));
        ul.appendChild(li);
    }
    var t = document.createElement('h2');
    t.innerText = "Il Colpo: ";
    d.appendChild(t);
    
    var ul = document.createElement('ul');
    d.appendChild(ul);

    for (const [key, value] of Object.entries(getBande())) {
        var li = document.createElement('li');
        li.appendChild(createButton(capitalizeFirstLetter(value), colpo) );
        ul.appendChild(li);
    }
    addPulisci();
}

function  addPulisci() {
    document.getElementById("title").innerHTML += " &nbsp; &nbsp; "
    var b = createButton("Pulisci", cleanAll);
    document.getElementById("title").appendChild(b);  
}

function cleanAll() {
    if (document.getElementById("generated")){
        document.getElementById("generated").innerHTML = ""
    }
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function setTitle(d, dataTitle){
    var t = document.createElement('h3');
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