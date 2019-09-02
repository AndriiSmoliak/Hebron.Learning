let login = prompt('введіть логін','');
let pass;

if (login == 'User') {
     pass = prompt('введіть пароль','');

    if (pass == '' || pass == null) {
        alert('Canceled.')
    } else if (pass != 'SuperUser') {
        alert('Wrong password')
    } else if (pass == 'SuperUser') {
        if (new Date().getHours() < 20) {
            alert('Good day!')
        } else {
            alert('Good evening!')
        }
    }
} else if (login == '' || login == null ) {
    alert('Canceled.')
} else if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols')
} else if ( login != 'User') {
    alert('I don’t know you')
}


