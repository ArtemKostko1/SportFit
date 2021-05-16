import axios from 'axios';

const baseUrl = "http://localhost:5000/api/";

export  default {
    user(url = baseUrl + 'users'){
        return{
            fetchAll: async () => await axios.get(url),
            fetchById: async id => await axios.get(url + id),
            create: async newRecord => await axios.post(url, newRecord),
            update: async (id, updatedRecord) => await axios.put(url + id, updatedRecord),
            delete: async id => await axios.delete(url + id)
        }
    },
    
    program(url = baseUrl + 'programs'){
        return{
            fetchAll: async () => await axios.get(url),
            fetchById: async id => await axios.get(`${url}/${id}`),
            create: async newRecord => await axios.post(url, newRecord),
            update: async (id, updatedRecord) => await axios.put(url + id, updatedRecord),
            delete: async id => await axios.delete(url + id)
        }
    },
}