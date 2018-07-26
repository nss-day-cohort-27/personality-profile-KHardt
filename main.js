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

//store data to local storage- (took it out of a function)

const stringifiedDatabase = JSON.stringify(storageObject)
localStorage.setItem("storageObject", stringifiedDatabase)


//load data: (took it out of a function)

const databaseString = localStorage.getItem("storageObject")
let data = JSON.parse(databaseString)

console.log(data); //testing only

//write to DOM: 

//failed experiment:
/*const secCreate = document.createElement("section1");
const t = document.createTextNode("hello")
secCreate.appendChild(t)
document.body.appendChild(secCreate); */


let addStuff = document.querySelector(".wrapper")
addStuff.innerHTML += 
`<section> 
    <h2>General Profile</h2>
    <p>${data.statement1.statement} (agree)</p>
    <p>${data.statement2.statement} (nope-I'm all over the place)</p>
    <p>${data.statement3.statement} (generally agree)</p>
    <h2>Wierdos like me: </h2>
    <h3>${data.peopleLikeMe}</h3>
    <h2>How I prefer to be communicated to: </h2>
    <h3>${data.communication}</h3>
    <h4>(kidding)</h4>
    </section>`
        

    //for (let i = 0; i < info.length; i++)