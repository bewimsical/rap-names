const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'},
    'chance the rapper':{
        'age':29,
        'birthName':'Chancelor Bennet',
        'birthLocation':'Chicago, Illinois'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    
})

app.listen(process.env.PORY || PORT, ()=>{
    console.log(`the server is running on port ${PORT} you better go catch it!`)
})