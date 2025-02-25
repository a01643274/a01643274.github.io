async function agregaDatos() {

    //request access token
    const url = "https://accounts.spotify.com/api/token";

    let r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: '6e5eb6eeb9fd4742a004eca7b798ea01',  
            client_secret: 'c265581cb5a84e52b6ce65fe24bfabf6'
        })
    })
    let rJSON = await r.json();
    console.log(rJSON);
    const token = rJSON.access_token;
    console.log(token);

    //rquest artista
    const url2 = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";

    const r2 = await fetch(url2, {
        method: 'GET',
        headers: { 'Authorization': ` Bearer ${token} `}  
    })
    const rJSON2 = await r2.json();
    console.log(rJSON2);

    const url3 = "https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh/albums";
    

    const r3 = await fetch(url3, {
        method: 'GET',
        headers: { 'Authorization': ` Bearer ${token} `}  
    })
    const rJSON3 = await r3.json();
    console.log(rJSON3);
    const album = rJSON3.items[6].name;
    console.log(album);
    const imagen = rJSON3.items[6].images[1].url;
    document.body.appendChild(document.createElement('img')).src = imagen;
}


agregaDatos(); 