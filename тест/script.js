let x = document.getElementById("block3")
let y

    setInterval(function() {
        y = Math.round(Math.random() * 900)
        let z
        z = Math.round(Math.random() * 1750)
        x.onmouseover = function() {
            x.style.top = y + 'px'
            x.style.left = z + 'px'
        }
    
    },100 )