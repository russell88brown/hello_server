app.get('/', (request, response) => {  
  response.render('home', {
    name: 'John'
  })
})