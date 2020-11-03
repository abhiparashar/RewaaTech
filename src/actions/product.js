import axios from 'axios'

const API = 'http://localhost:6500';


export const addProduct = async(data)=>{
    const res = await axios.post(`${API}/api/contact/adduser`, data)
    return res;
}

export const updateProduct = async (data) => {
    const res = await axios.post(`${API}/api/auth/signin`, data)
    return res;
}

export const deleteproduct = async(data) => {
    const res = await axios.post(`${API}/api/contact/deleteuser/:id`, data)
    return res;
}

export const getProducts = async (data) => {
    const res = await axios.get(`${API}/api/contact/getUsers`, data);
    return res;
}

export const getProduct = async (data) => {
    const res = await axios.post(`${API}/api/auth/signin`, data)
    return res;
}