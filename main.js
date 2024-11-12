function hide() {
    
    if (screen.width > 735){
        
        // const container = document.getElementById('authorContainer')
        
        // container.classList.add("hidden")  
        // console.log(container.classList)
        const desktopShareContainer = document.getElementById('desktopShareContainer')
        console.log(desktopShareContainer)
        // desktopShareContainer.classList.remove("hidden")
        desktopShareContainer.style.display = 'grid'
        const triangleDown = document.getElementById('triangleDown')
        console.log(triangleDown)
        console.log(triangleDown.classList)
        triangleDown.classList.remove("hidden") 
        console.log(triangleDown.classList)
        
    } 
    else {
        const container = document.getElementById('authorContainer')
        container.classList.add("hidden")  
        const shareContainer = document.getElementById('shareContainer')
        shareContainer.classList.remove("hidden")
    }
}