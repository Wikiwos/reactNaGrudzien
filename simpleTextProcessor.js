const processText = (text, {uppercase = false, reverse = false, removeSpecialCharacters = false} = {}) => {
    let arr = [...text]
    if(uppercase == true) {
        arr = arr.map(char => char.toUpperCase())
    }

    if(reverse == true) {
        arr = arr.reverse()
    }

    if(removeSpecialCharacters == true) {
        normalChars = "QWERTYUIOPASDFGHJKLZXCVBNMĘÓĄŁŃŹŻqwertyuiopasdfghjklzxcvbnmęółąźżń1234567890"
        arr = arr.filter(char => normalChars.includes(char))
    }
    
    return arr.join('')
}

console.log(processText('Trudne te zadania Pan dał', {uppercase: true, reverse: true, removeSpecialCharacters: true}))
