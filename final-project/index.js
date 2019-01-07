

const bridesFirst = document.getElementById('inputOne')

bridesFirst.addEventListener('input', function(event) { 
 const brideFirst = document.querySelector('#bridefn') 
 brideFirst.innerHTML = '<p>' + bridesFirst.value + ' &' + '&nbsp;' + '</p>'
   if (bridesFirst.value === '') {
    bi.innerHTML = " ";
} else {
  bi.innerHTML = '<p>'  + bridesFirst.value[0] + '&nbsp;' + '&'  + '</p>'
}

 
});

const groomsfirst = document.getElementById('inputtwo')

groomsfirst.addEventListener('input', function(event) {
  const groomsName = document.querySelector('#groomfn')
  groomsName.innerHTML = '<p>' + '&nbsp;' + groomsfirst.value + '</p>'
  if (groomsfirst.value === '') {
    gi.innerHTML = " ";
} else {
  gi.innerHTML = '<p>' + '&nbsp;' + groomsfirst.value[0] + '</p>'
}


});

const last = document.getElementById('inputsix')

last.addEventListener('input', function(event) { 
  const lastName = document.querySelector('#last')
  lastName.innerHTML = '<p>' + inputsix.value + '</p>'
  
});



const date = document.getElementById('inputfour')

  date.addEventListener('input', function(event) { 
  const wedDate = document.querySelector('#date')
  wedDate.innerHTML = '<p>' + date.value + '</p>'
  
  
});

const place = document.getElementById('inputfive')

  place.addEventListener('input', function(event) { 
  const wedLocation = document.querySelector('#location')
  wedLocation.innerHTML = '<p>' + place.value + '</p>'
  
});

const formalButton = document.getElementById('formal')

 formalButton.addEventListener('click', function(event) {
const formalStyle = document.querySelector('#example')
formalStyle.classList.add("formal")
formalStyle.classList.remove("spring")
formalStyle.classList.remove("magicked")


});

const springButton = document.getElementById('spring')

 springButton.addEventListener('click', function(event) {
const springStyle = document.querySelector('#example')
springStyle.classList.add("spring")
springStyle.classList.remove("magicked")
springStyle.classList.remove("formal")

});

const magicButton = document.getElementById('magical')

magicButton.addEventListener('click', function(event) {
const magicalButton = document.querySelector("#example")
magicalButton.classList.add("magicked")
magicalButton.classList.remove("spring")
magicalButton.classList.remove("formal")


});

const hover = document.getElementById('magical')

hover.addEventListener('mouseover', function(event) {

const magicHover = document.querySelector('#example')
magicHover.style.backgroundImage = 'url("https://i.pinimg.com/originals/a9/0d/80/a90d80d3fceb5fcf02d472efbdbd842c.jpg")'
})


hover.addEventListener('mouseout', function(event) {

const magicHover = document.querySelector('#example')
magicHover.style.backgroundImage = ''
})


