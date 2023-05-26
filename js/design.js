document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.hover-container')
    const overlay = document.querySelector('.overlay')

    container.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1'
    })

    container.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0'
    })
})