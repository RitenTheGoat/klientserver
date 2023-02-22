async function getData(){
    const data = await fetch("http://192.168.15.3:3000/gettodos")
    const json = await data.json()
    console.log(json)

    document.getElementById("lista").innerHTML= ""

    for(var i =0; i<=json.length-1;i++){

        const div = document.createElement("div")
        div.classList.add("todo")

        const nazwa = document.createElement("h1")
        nazwa.innerHTML =json[i].task
        div.appendChild(nazwa)


        document.getElementById("lista").appendChild(div)




    }
}
getData()
async function sendData(){
    const nazwa = document.getElementById("nazwa_zad").value

    console.log(nazwa)

    const url= `http://192.168.15.3:3000/add/${nazwa}`

    const data = await fetch(url)

    getData()
}