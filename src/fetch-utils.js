const URL = 'https://immense-plateau-42063.herokuapp.com';

export async function getToken(loginInfo, type) {
    const authURL = `${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });
    const data = await resp.json();
    localStorage.setItem('TOKEN', data.token);
    return data.token;
}
export async function getPurchases(){
    const data = `${URL}/api/purchases`
    const response = await fetch(data, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('TOKEN')
        }
    })
    const result = await response.json();
    return result
}

//TODO
//postPurchases
//postRecurring
//postCategories

//getRecurring
export async function getRecurring(){
    const data = `${URL}/api/recurring`
    const response = await fetch(data, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('TOKEN')
        }
    })
    const result = await response.json();
    return result
}

//getCategories
export async function getCategories(){
    const data = `${URL}/api/categories`
    const response = await fetch(data, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('TOKEN')
        }
    })
    const result = await response.json();
    return result
}

