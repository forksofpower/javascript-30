/**
 * CSS Variables for JavaScript30
 * author: @forksofpower
 */
const inputs = document.querySelectorAll('input')

function handleUpdate() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// setup event listeners
inputs.forEach(input => {
    input.addEventListener('change', handleUpdate)
    input.addEventListener('mousemove', handleUpdate)
})

