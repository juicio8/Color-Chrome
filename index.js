document.getElementById('newscheme').addEventListener('submit', function(e) {
    e.preventDefault()
    let color = document.getElementById('colorInput').value
    let mode = document.getElementById('colorMode').value
    //removing # from the hex value
    color = color.slice(1)
    //changing mode toLowerCase
    mode = mode.toLowerCase()
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
    displayColorScheme(data)    
    })
})

function displayColorScheme(data) {
    document.getElementById('one').style.backgroundColor = data.colors[0].hex.value
    document.getElementById('two').style.backgroundColor = data.colors[1].hex.value
    document.getElementById('three').style.backgroundColor = data.colors[2].hex.value
    document.getElementById('four').style.backgroundColor = data.colors[3].hex.value
    document.getElementById('five').style.backgroundColor = data.colors[4].hex.value
    document.getElementById('cone').textContent = data.colors[0].hex.value
    document.getElementById('ctwo').textContent = data.colors[1].hex.value
    document.getElementById('cthree').textContent = data.colors[2].hex.value
    document.getElementById('cfour').textContent = data.colors[3].hex.value
    document.getElementById('cfive').textContent = data.colors[4].hex.value
}