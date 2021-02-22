const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
const HEADERS = {
    'Content-Type': 'application/json;charset=utf-8'
};

function create(sticker){
    console.log('CREATE =>' + JSON.stringify(sticker));

    return fetch(URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(sticker)
    }).then(result => result.json());
};

function read(){
    console.log('READ')

    return fetch(URL).then(result => result.json());
};

function update(id, sticker) {
    console.log('UPDATE =>' + `ID: ${id}` + JSON.stringify(sticker))

    return fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(sticker)
    }).then(result => result.json());
};

function del(id){
    console.log('DELETE =>' + `ID: ${id}`)

    return fetch(`${URL}/${id}`,{
        method: 'DELETE'
    });
};

  