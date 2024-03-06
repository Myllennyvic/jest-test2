const axios = require('axios')

async function myBooks(){
    const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=BrA7mpNm6gY3lxIWEAzCAXseAFDAtxwZ')
    .then((response) => {
        
    })

    return response.data
}

test('Verifica se obtém os dados corretamento', async () => {
    const data = await myBooks();
    expect(data).toBeDefined();
})
