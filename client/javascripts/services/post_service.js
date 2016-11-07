app.service("PostService", function($resource) {
  return {
    posts: $resource('posts/:id', {id: '@id'}, {
      'update': {
        method: 'PUT'
      },
      'get': {
        method:'GET',
        isArray:false
      },
      'save': {
        method:'POST',
        isArray:true
      }
    })
  }
})
