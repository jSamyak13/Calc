
let string = ""
let select = document.querySelectorAll('.item')
Array.from(select).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (string.charAt(string.indexOf('^')) == "^") {
                let new_string = string.replace("^", "**")
                string = eval(new_string)
                document.querySelector('.content').value = string
                string = ""
            }
            else if (string.charAt(string.indexOf('!')) == '!') {
                let val = string.slice(0, -1)
                val = parseInt(val)
                let factorial = (val) => {
                    if (val == 0 || val == 1) {
                        return 1
                    }
                    else {
                        return val * factorial(val - 1)
                    }
                }
                document.querySelector('.content').value = factorial(val)
                string = ""
            }
            else {
                string = eval(string)
                document.querySelector('.content').value = string
                string = ""
            }
        }

        else if (e.target.innerHTML == "AC") {
            string = ""
            document.querySelector('.content').value = string
        }
        else if (e.target.innerHTML == "Back") {
            new_str = string.slice(0, string.length - 1)
            string = new_str
            document.querySelector('.content').value = string

        }

        else {
            string = string + e.target.innerHTML
            document.querySelector('.content').value = string
        }
    })
})
