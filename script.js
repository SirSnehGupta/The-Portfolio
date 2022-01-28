var light = document.querySelector('#light')
light.addEventListener('click', function light(){
    document.querySelector("head > link").href = 'styles.css'
    document.cookie = 'light'
})

var dark = document.querySelector('#dark')
dark.addEventListener('click', function dark(){
    document.querySelector("head > link").href = 'stylesd.css'
    document.cookie = 'dark'
})

if (document.cookie === 'light'){
    document.querySelector("head > link").href = 'styles.css'
}

if (document.cookie === 'dark'){
    document.querySelector("head > link").href = 'stylesd.css'
}