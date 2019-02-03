console.log('before');

// Callback-based approach
//
// getCustomer(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

//promise based approach

// getCustomer(1)
//     .then(cust => getGithubRepos(cust))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

//async/await based approach

async function displayCommits() {
    try {
        const cust = await getCustomer(1);
        const repos = await getGithubRepos(cust);
        const commits = await getCommits(repos[0]);
        console.log('Commits', commits);
    }

    catch(err) {
        console.log('Error', err.message);
    }
}
displayCommits();
console.log('after');

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        // kick off an asynchronous logic
        setTimeout(() => {
            console.log("Read customer info from the database");
            resolve({id: id, gitHubUsername:'smsaud'});
        }, 2000);    
    });
    
}

function getGithubRepos(user){
    return new Promise((resolve, reject) => {
        // kick off an asynchronous logic
        setTimeout(() => {
            console.log('Fetching user repos on github...');
            resolve(['repo1', 'repo2', 'repo3']);
            //reject(new Error('Could not get the repos'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Calling GitHub API...');
        resolve(['commit']);
      }, 2000);
    });
  }