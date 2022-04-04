const requestConfig = {
    withToken: {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    },
    withoutToken: {
        headers: {
            'Content-Type': 'application/json',
        }
    }
}