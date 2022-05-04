let fullName = prompt("Adınızı giriniz:","sadece ad")
let greeting = document.querySelector('#greeting')
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`