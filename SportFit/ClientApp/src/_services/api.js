﻿import axios from 'axios';

const baseUrl = "http://localhost:5000/api/";

export const user = (url = baseUrl + 'users') => {
    return {
        fetchAllUsers: async () => await axios.get(url),
        fetchUserById: async id => await axios.get(`${url}/${id}`),
        register: async newRecord => await axios.post(`${url}/register`, newRecord)
            .then(userData => {
                localStorage.setItem('user', JSON.stringify(userData.data));
                return userData;
            }),
        
        authenticate: async data => await axios.post(`${url}/authenticate`, data)
            .then(userData => {
                debugger
                localStorage.setItem('user', JSON.stringify(userData.data));
                return userData;
            }),
        
        updateUser: async (id, updatedRecord) => await axios.put(`${url}/${id}`, updatedRecord)
            .then(userData => {
                debugger
                let editableUser = JSON.parse(localStorage.getItem('user'));
                editableUser = {...updatedRecord};
                localStorage.setItem('user', JSON.stringify(editableUser));
                return userData;
            }),
    }
}

export const program = (url = baseUrl + 'programs') => {
    return{
        fetchAllPrograms: async () => await axios.get(url),
        fetchProgramById: async id => await axios.get(`${url}/${id}`),
        createProgram: async newRecord => await axios.post(url, newRecord),
        updateProgram: async (id, updatedRecord) => await axios.put(`${url}/${id}`, updatedRecord),
        deleteProgram: async id => await axios.delete(`${url}/${id}`)
    }
}

export const programType = (url = baseUrl + 'programTypes') => {
    return{
        fetchAlProgramTypes: async () => await axios.get(url),
        fetchProgramTypeById: async id => await axios.get(`${url}/${id}`),
    }
}

export const complexityLevel = (url = baseUrl + 'complexityLevels') => {
    return{
        fetchAllComplexityLevels: async () => await axios.get(url),
        fetchComplexityLevelById: async id => await axios.get(`${url}/${id}`),
    }
}
