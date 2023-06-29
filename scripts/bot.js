const API_KEY = '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';

const input = document.getElementById('input')
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const output = document.getElementById('output');

async function getMessage(){
    console.log("func")

    const options = {
        method : 'POST',
        headers : {
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            model : "gpt-3.5-turbo",
            messages :  [{role : "user", content : input.value}],
            max_tokens : 50
        })

    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions',options)
        const data = await response.json();

        console.log(data)
        output.textContent = data.choices[0].message.content

    }
    catch (error){

}
}

function Clear(){
    input.value = "",
    output.textContent = "";
}

submit.addEventListener("click", getMessage)

clear.addEventListener("click",Clear)