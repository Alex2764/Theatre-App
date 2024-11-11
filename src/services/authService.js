const baseUrl = ('http://localhost:3030');
const serverUrl = ('https://reactappy-default-rtdb.europe-west1.firebasedatabase.app');

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

export const register = (email, password) => {
   return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify({email, password })
    })
    .then(res => res.json())

};

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



export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};

export const theatresData = () => {
    return fetch(`${baseUrl}/data/theaters?sortBy=_createdOn%20desc&distinct=title`)
        .then(res => res.json());
};

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

// TODO CREATE FETCH FOR DETAIL

export const getOne = (theatreId) => {
    return fetch(`${baseUrl}/data/theaters/${theatreId}`)
    .then(res => res.json())    
};

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