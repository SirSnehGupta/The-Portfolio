var mode=null

var light = document.querySelector('#light')
light.addEventListener('click', function light(){
    document.querySelector("head > link:nth-child(5)").href = 'styles.css'
    mode = 'light'
})

var dark = document.querySelector('#dark')
dark.addEventListener('click', function dark(){
    document.querySelector("head > link:nth-child(5)").href = 'stylesd.css'
    mode = 'dark'
})