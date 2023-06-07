document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelectorAll('.hover-container')
    
    container.forEach(container => {
        const overlay = container.querySelector('.overlay')

        container.addEventListener('click', () => {
            overlay.classList.toggle('active-overlay')
        })
    })
})