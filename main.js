function hide() {
    
    if (screen.width > 735){
        const desktopShareContainer = document.getElementById('desktopShareContainer')
        desktopShareContainer.style.display = 'grid'
        const triangleDown = document.getElementById('triangleDown')
        triangleDown.classList.remove("hidden") 
        const button = document.getElementById('authorContainerButton')
        button.style.backgroundColor = 'hsl(214, 17%, 51%)'
        const image = document.getElementById('imageAddFilter')
        image.style.filter = 'url(#colorFilter)'
    } 
    else {
        const container = document.getElementById('authorContainer')
        container.classList.add("hidden")  
        const shareContainer = document.getElementById('shareContainer')
        shareContainer.classList.remove("hidden")
        const button = document.getElementById('shareContainerButton')
        button.style.backgroundColor = 'hsl(214, 17%, 51%)'
    }
}