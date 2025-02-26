function autorizar(){

    const mensaje = "Informacion robada";
    console.log(mensaje);

    const spotifyURL = "https://accounts.spotify.com/authorize?response_type=code&client_id=6e5eb6eeb9fd4742a004eca7b798ea01&scope=user-top-read&redirect_uri=http://127.0.0.1:5500/SRC/hoy.html";
    window.location.href = spotifyURL;
}

async function autorizarToken(){
    const code  = new URLSearchParams(window.location.search).get('code');
    console.log(code);

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Authorization" : 'Basic ' + btoa ("6e5eb6eeb9fd4742a004eca7b798ea01:c265581cb5a84e52b6ce65fe24bfabf6")
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: "http://127.0.0.1:5500/SRC/hoy.html"
        }),
        json: true
    })
    const accstoken= await response.json();
    console.log(accstoken);

    const tracks = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET",
        headers: { 'Authorization': `Bearer ${accstoken.access_token}` }
    })
    const datos = await tracks.json();
    console.log(datos);

    document.body.appendChild(document.createElement('h1')).textContent = 'Top 5 canciones';

    for (let i = 0; i < 5; i++){
        const track = datos.items[i].name;
        document.body.appendChild(document.createElement('p')).textContent = [i+1] + '. ' + track;
    }
    
    

}
