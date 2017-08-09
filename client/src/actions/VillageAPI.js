export default class VillageAPI {
    static getInfo(url) {
        return fetch(url, {
            method: "GET", 
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    static addUser(url, name) {
        return fetch(url, {
            method: "POST", 
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
}

