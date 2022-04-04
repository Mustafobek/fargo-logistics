function checkToken() {
    const token = localStorage.getItem('token')

    if(window.location.pathname !== '/') {
        if(!token) {
            window.location.href = '/'
            return 'No token found'
        }
    }

    return ''
}

checkToken()