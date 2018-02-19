const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get 1 post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create Dummy Data
const data = {
  title: 'Custom Post',
  body: 'This is custom post'
};

// Create POST
http.post('https://jsonplaceholder.typicode.com/posts',
  data,
  function(err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  });

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1',
  data,
  function(err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/100',
  function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  });