import * as authService from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await authService.post(`${baseUrl}/login`, {
        email, 
        password
    });

    return result;
}

export const register = (email, password) => authService.post(`${baseUrl}/register`, {
    email, 
    password
});