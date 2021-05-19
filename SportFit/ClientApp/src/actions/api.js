import axios from 'axios';

const baseUrl = "http://localhost:5000/api/";

export const user = (url = baseUrl + 'users') => {
    return{
        fetchAll: async () => await axios.get(url),
        fetchById: async id => await axios.get(`${url}/${id}`),
        create: async newRecord => await axios.post(url, newRecord),
        update: async (id, updatedRecord) => await axios.put(url + id, updatedRecord),
        delete: async id => await axios.delete(url + id)
    }
}

export const program = (url = baseUrl + 'programs') => {
    return{
        fetchAllPrograms: async () => await axios.get(url),
        fetchProgramById: async id => await axios.get(`${url}/${id}`),
        createProgram: async newRecord => await axios.post(url, newRecord),
        updateProgram: async (id, updatedRecord) => await axios.put(url + id, updatedRecord),
        deleteProgram: async id => await axios.delete(url + id)
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
