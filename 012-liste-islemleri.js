let item = document.querySelector('ul#list>li:last-child')
item.innerHTML = "degisti bu"
let itemFirst = document.querySelector('ul#list>li:first-child')
itemFirst.innerHTML = "degisti bu"

let ulDOM = document.querySelector('ul#list')
let liDOM = document.createElement('li')

liDOM.innerHTML = 'Kendi olusturdugumuz oge'

//ulDOM.append(liDOM)
ulDOM.prepend(liDOM)