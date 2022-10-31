mn = document.getElementsByTagName('h1')

let url = document.URL
var name = url.split("#")[1]

// console.log(name !== 'undefined')
if (name !== 'undefined'){

  if (name.split('-').length > 1){ 
    name = name.split('-')[0] + " " + name.split('-')[1].slice(0,1).toUpperCase() + name.split('-')[1].slice(1)
    // console.log(name)
  }

  name = name.slice(0,1).toUpperCase() + name.slice(1)
  console.log(name)
  console.log(document.cookie)
  cookie(name)
  if (document.cookie !== "HoGyaEkBaar"){
    if (document.cookie === "SudharGya"){
      mn[0].innerText ="Ab aaya na line pe, " + name + " Ki Maa Randi Hai"
    }
    else{
      mn[0].innerText =  name + " Ki Maa Randi Hai"
    }
  document.cookie = "HoGyaEkBaar"
  }
  else{
  mn[0].innerText = "Haa Bhai Haa "+ name + " Ki Maa Bhi Randi Hai"
  }
}

else{
  mn[0].innerText = "Bakchodi karle tu Pehle Link ke Last mein '#' laga kar naam Likh Madarchod"
  document.cookie = "SudharGya"
}

function cookie(name) {
  safe = ["Magra","Magre","Magraaa","Mayank","Mayank Agrawal","Mayank Agarwal","Mayank Aggarawal","Mayank Agarwal","mayankagrawal","mayankagarawal","mayankagarwal","mayankaggarawal","mayankaggarwal"]
  var r
  if (safe.includes(name)){
    r = "Baap se Bakchodi karega Bsdk"
  
  if (document.cookie === "SudharGya"){
    r = "Ab aaya na line pe, par baap se bakchodi"
  }
  if (document.cookie === "HoGyaEkBaar"){
    r = "Par Maa to Teri hi Randi Rahegi Madarchod"
    document.cookie = "SudharGya"
  }
  mn[0].innerText = r
  exit()
  }
   
}