async function acccesIA(){
    apiURL = " https://api.anthropic.com/v1/messages";
    const requestBody = {
        model : "claude-3-7-sonnet-20250219",
        max_tokens: 1024,
        messages: [ 
            {role : "user", content : "Hello world"}
        ]
    };

    const respuesta = await fetch(apiURL, {method: "POST", headers: {
        'x-api-key': $ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true'
    } , body: JSON.stringify(requestBody)});

    const data = await respuesta.json();
    console.log(data);
}