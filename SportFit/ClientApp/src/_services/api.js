import axios from 'axios';

const baseUrl = "https://sportfitapi.azurewebsites.net/api/";

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
                localStorage.setItem('user', JSON.stringify(userData.data));
                return userData;
            }),
            /*.catch(responseStatus => {
                return responseStatus.response.data;
            }),*/
        
        updateUser: async (id, updatedRecord) => await axios.put(`${url}/${id}`, updatedRecord)
            .then(() => {
                let editableUser = JSON.parse(localStorage.getItem('user'));
                editableUser =  {
                    id: editableUser.id,
                    login: updatedRecord.Login,
                    password: updatedRecord.Password,
                    nickname: updatedRecord.Nickname,
                    avatar: updatedRecord.Avatar,
                    fullName: updatedRecord.FullName,
                    birthDate: updatedRecord.BirthDate,
                    mobilePhone: updatedRecord.MobilePhone,
                    email: updatedRecord.Email,
                    instagram: updatedRecord.Instagram,
                    vk: updatedRecord.Vk,
                    creationDate: editableUser.creationDate,
                    modificationDate: editableUser.modificationDate,
                    token: editableUser.token
                }
                localStorage.setItem('user', JSON.stringify(editableUser));
                return editableUser;
            }),
    }
}

export const program = (url = baseUrl + 'programs') => {
    return{
        fetchAllPrograms: async () => await axios.get(url),
        fetchAllMyPrograms: async id => await axios.get(`${url}/${id}/myPrograms`),
        fetchProgramById: async id => await axios.get(`${url}/${id}`),
        createProgram: async newRecord => await axios.post(url, newRecord),
        updateProgram: async (id, updatedRecord) => await axios.put(`${url}/${id}`, updatedRecord),
        deleteProgram: async id => await axios.delete(`${url}/${id}`)
    }
}

export const selectedProgram = (url = baseUrl + 'selectedPrograms') => {
    return{
        fetchAllSelectedPrograms: async id => await axios.get(`${url}/${id}`),
        addSelectedProgram: async newRecord => await axios.post(url, newRecord),
        deleteSelectedProgram: async id => await axios.delete(`${url}/${id}`)
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

export const comment = (url = baseUrl + 'comments') => {
    return{
        fetchAllComments: async () => await axios.get(url),
        fetchCommentById: async id => await axios.get(`${url}/${id}`),
        createComment: async newRecord => await axios.post(url, newRecord),
        deleteComment: async id => await axios.delete(`${url}/${id}`)
    }
}

export const like = (url = baseUrl + 'likes') => {
    return{
        fetchAllLikes: async id => await axios.get(`${url}/${id}`),
        fetchLikeById: async id => await axios.get(`${url}/${id}`),
        createLike: async newRecord => await axios.post(url, newRecord),
        deleteLike: async id => await axios.delete(`${url}/${id}`)
    }
}