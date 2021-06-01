let headerbox = document.getElementById("headerbox");

let header = document.createElement("div");
let logo = document.createElement("div");
let navbar= document.createElement("div");
let socbox = document.createElement("div");
let burger = document.createElement("div")
let linkhome= document.createElement("a")
let linkfaq= document.createElement("a")


headerbox.appendChild(header);
header.setAttribute("class", "header")
header.setAttribute("id", "header")

header.appendChild(burger)
let bur = document.createElement("div");
// // img.setAttribute("", "./image/download.png")
bur.setAttribute("class", "color")
burger.appendChild(bur)
burger.setAttribute("id", "burger")


header.appendChild(logo)
logo.innerText ="LEPUS"
logo.setAttribute("class", "logo")



let ul= document.createElement("ul")
let li1 =document.createElement("li")
let li2 =document.createElement("li")
li1.appendChild(linkhome)
li2.appendChild(linkfaq)
ul.appendChild(li1)
ul.appendChild(li2)
navbar.appendChild(ul)
header.appendChild(navbar)
linkhome.innerText ="მთავარი"
linkfaq.innerText ="კითხვარი"
navbar.setAttribute("class", "navbar")
navbar.setAttribute("id", "navbar")
linkhome.setAttribute("href","index.html")
linkfaq.setAttribute("href", "#faq")
linkhome.setAttribute("class","link_head")
linkfaq.setAttribute("class","link_head")



let socbox1 = document.createElement("div");
let socbox2 = document.createElement("div");

socbox.appendChild(socbox1)
socbox.appendChild(socbox2)
header.appendChild(socbox)


socbox.setAttribute("class", "socbox")
socbox.setAttribute("id", "socbox")
socbox1.setAttribute("class", "facebook")
socbox2.setAttribute("class", "istagram")


let burgerbox=document.getElementById("burgerbox")
burger.addEventListener("click", function () {
    burgerbox.classList.toggle("show")
})




// 
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let black = document.getElementById("black")
let footer = document.getElementById("footer")

red.addEventListener("click", function () {
    // header.classList.add("redaa")
    header.style.backgroundColor = "#C33764"
    footer.style.backgroundColor = "#C33764"

})

blue.addEventListener("click", function () {
    // header.classList.add("blueaa")
    header.style.backgroundColor = "#0B486B"
    footer.style.backgroundColor = "#0B486B"
})

black.addEventListener("click", function () {
    // header.classList.add("blackaa")
    header.style.backgroundColor = "black"
    footer.style.backgroundColor = "black"
})

// start washla
let q1 =document.getElementById("q1")
let q2 =document.getElementById("q2")
let q3 =document.getElementById("q3")

let que1 = document.getElementById("que1")
let que2 = document.getElementById("que2")
let que3 = document.getElementById("que3")

que1.addEventListener("click",function () {
    q1.classList.toggle("showq")
})
que2.addEventListener("click",function () {
    q2.classList.toggle("showq")
})
que3.addEventListener("click",function () {
    q3.classList.toggle("showq")
})


let del1 =document.getElementById("del1")
let del2 =document.getElementById("del2")
let del3 =document.getElementById("del3")

del1.addEventListener("click", function() {
    que1.style.display="none"
})
del2.addEventListener("click", function() {
    que2.style.display="none"
})
del3.addEventListener("click", function() {
    que3.style.display="none"
})


// end washla

let inpname = document.getElementById("inpname")
let inlastname = document.getElementById("inlastname")
let inmail = document.getElementById("inmail")
let inleqsi = document.getElementById("inleqsi")

let btnsend = document.getElementById("sendbtn")
btnsend.addEventListener("click", function () {
    // event.preventDefault()
    let local={
      name:inpname.value,
      lastname: inlastname.value,
      mail:inmail.value,
      leqsi:inleqsi.value
     }
    localStorage.setItem('person', JSON.stringify(local))
})


let itemsName = JSON.parse(localStorage.getItem('person'))




let nameOut=document.getElementById('nameout')
let lastnameOut=document.getElementById('lastnameout')
let leqsiOut=document.getElementById('leqsi')
let mailOut=document.getElementById('mailout')


  nameOut.innerText = ` ლექსის ავტორი: ${ itemsName.name} ${ itemsName.lastname} `  
  mailOut.innerText = ` ავტორს შეგიძლიათ დაუკავშირდეთ ელ.ფოსტაზე: ${itemsName.mail}`
  leqsiOut.innerText = itemsName.leqsi


  let del = document.getElementById("del")
  let form = document.getElementById("form")
  
  del.addEventListener("click",() =>{
     {
       nameOut.innerText = '';
       mailOut.innerText = ""
       leqsiOut.innerText =""
    }

  })

//   function del() {
//     localStorage.removeItem("person");
//   }

