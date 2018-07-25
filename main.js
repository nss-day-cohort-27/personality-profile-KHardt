const storageObject = {
       statement1: {
            statement: "Listen to Many People, but Talk to Few"
        },
        statement2: 
        {
            statement: "We Know What We Are, but Know Not What We May Be"
    
        },
        statement3:
        {
            statement: "Open-Minded and Flexible "
        },
    
    peopleLikeMe: [" Shakespeare", " Tolkien", " Bjork ", " Johnny Depp"],
    communication: [" Slacking", " yelling", " belittlement"]

}

//store data to local storage
const saveDatabasePersonal = function (databaseObject, localStorageKeyPersonal) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
   localStorage.setItem(localStorageKeyPersonal, stringifiedDatabase)
}

saveDatabasePersonal(storageObject, "Personality")

//load data:
const loadDatabasePersonal = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
} 

let data = loadDatabasePersonal("Personality")

//write to DOM:

/*const secCreate = document.createElement("section1");
const t = document.createTextNode("hello")
secCreate.appendChild(t)
document.body.appendChild(secCreate); */


let addStuff = document.querySelector(".wrapper")
addStuff.innerHTML += 
`<section> 
    <h2>General Profile</h2>
    <p>${storageObject.statement1.statement} (agree)</p>
    <p>${storageObject.statement2.statement} (nope-I'm all over the place)</p>
    <p>${storageObject.statement3.statement} (generally agree)</p>
    <h2>Wierdos like me: </h2>
    <h3>${storageObject.peopleLikeMe}</h3>
    <h2>How I prefer to be communicated to: </h2>
    <h3>${storageObject.communication}</h3>
    <h4>(kidding)</h4>
    </section>`
        

    //for (let i = 0; i < info.length; i++)