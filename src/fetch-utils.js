const URL = 'https://stark-hamlet-56268.herokuapp.com';

export async function getToken(loginInfo, type) {

    const authURL = `${URL}/auth/${type}`;

    // POST to /signin or /signup
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });

    const data = await resp.json();
    console.log(data);

    // set the token to local storage
    localStorage.setItem('TOKEN', data.token);

    // return the userid
    return data.token;
}