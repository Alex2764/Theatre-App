const baseUrl = ('http://localhost:3030');

// Login user with email and password. Returns user details if successful.
export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify({email, password })
    })
    
    let jsonResult = await res.json();

    if(res.ok){
         return jsonResult;
    }else{
        throw jsonResult;  
    }
};

// Register a new user with name, profile picture, email, and password.
export const register = (name, userPic, email, password) => {
   return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify({name, userPic, email, password })
    })
    .then(res => res.json())

};

// Log out the user by making a GET request with the user's token.

// ! How to remove return in arrow function
// !! USE WHEN HAVE SINGLE LINE EXPRESSION. DON"T USE WITH MULTYLINE EXPRESSION

export const logout = (token) => 
    // TODO logout
    fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token,
        },
    }) 


// Retrieve the current user's username from localStorage.
export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

// Fetch a list of theatres, sorted by creation date in descending order, with unique titles.
export const theatresData = () => {
    return fetch(`${baseUrl}/data/theaters?sortBy=_createdOn%20desc&distinct=title`)
        .then(res => res.json());
};

// Create a new theatre entry. Requires theatre data and an authentication token.
export const create = (theatreData, token) => {
    return fetch(`${baseUrl}/data/theaters`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token, 
        },
        body: JSON.stringify(theatreData)
    })
    .then(res => res.json())
};

// Update an existing theatre entry by ID. Requires updated data and an authentication token.
export const update = (theatreId, theatreData, token ) => {
    return fetch(`${baseUrl}/data/theaters/${theatreId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token, 
        },
        body: JSON.stringify(theatreData)
    })
    .then(res => res.json())
};


// Fetch details for a single theatre by its ID.

// TODO CREATE FETCH FOR DETAIL

export const getOne = (theatreId) => {
    return fetch(`${baseUrl}/data/theaters/${theatreId}`)
    .then(res => res.json())    
};

// Delete a theatre entry by ID. Requires an authentication token.
export const destroy = (theatreId, token ) => {
    return fetch(`${baseUrl}/data/theaters/${theatreId}`, {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json',
            'X-Authorization': token , 
        }, 
    })
    .then(res => res.json()); 
};

export const getAllByUser = (userId) => {
    return fetch(`${baseUrl}/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then(res => res.json())
};
