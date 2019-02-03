
// Async/Await approach

async function sendTopMovies() {
  try {
    const customer = await getCustomer(1);
    if (customer.isGold) {
      const movies = await getTopMovies();
      const result = await sendEmail(customer.email, movies);
      console.log(result);
    }
    else {
      console.log("Customer is not Gold");
    }
  }

  catch(err) {
    console.log('Error', err.message);
  }

}
sendTopMovies();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
      //kick off an async logic
      setTimeout(() => {
        resolve({ 
          id: 1, 
          name: 'Mosh Hamedani', 
          isGold: true, 
          email: 'email' 
        });
      }, 2000);    
  });  
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
      //kick off an async logic
      setTimeout(() => {
        resolve(['movie1', 'movie2']);
      }, 2000);    
  });  
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
      //kick off an async logic
      setTimeout(() => {
        resolve(`List of movies ${movies} sent to ${email} via email`);
      }, 2000);    
  });  
}

/*getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}*/