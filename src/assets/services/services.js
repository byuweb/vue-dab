import store from '../../store/index'

export const apiUrl = (endPoint) => {
    let url

    if(store.state.AuthToken) url ='https://api.byu.edu/lifesciences/<your-app-context-here>/v1.0.0/api/' // Authenticated URL
    else url = 'http://localhost/<your-app-name-here>/api/' // unauthenticated URL
    if(endPoint) url = url + endPoint

    return url
}

export const makeHeader = (reqBody, reqMethod) => {
    let req = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(store.state.AuthToken) {
        req.headers['Authorization'] = 'Bearer ' + store.state.AuthToken
    }

    if(reqBody) req.body = JSON.stringify(reqBody)
    if(reqMethod) req.method = reqMethod

    return req
}

const handleErr = (err) => {
    if(typeof(err) === 'string') window.location.href = window.location.origin + '/error?statusText=' + err.statusText

    if(err.status === 401) {
        alert("Your session has timed out, please login again to continue")
        return
    }
    if (err.status > 299) {
        const path = err.url.split('/')
        let pathTxt = ''
        for(let i = path.length - 1; i > 0; i--) {
            if(path[i] === 'api') i = -1
            else if (i > 0) pathTxt = path[i] + '/' + pathTxt
        }
        window.location.href = window.location.origin + '/error?status=' + err.status + '&url=' + pathTxt + '&statusText=' + err.statusText
    }
    return
}

const APICall = (endpoint, method, body) => {
    return fetch(ApiUrl(endpoint), makeHeader(body, method))
        .then(b => {
            if(data.status > 299) handleErr(data)
            else if(data.status === 204) return data.text()
            return b.json()
        })
        .catch(err => { handleErr(err) })
}

export const getUsers = () => APICall('users')
export const postUser = data => APICall('users', 'POST', data)
export const putUser = data => APICall('users/' + data.id, 'PUT', data)
export const deleteUser = id => APICall('users/' + id, 'DELETE')