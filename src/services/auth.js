import axiosInstance from "./axiosInstance"

const SignIn = async (username, password) => {
     const response = await axiosInstance.post('auth/login', { username, password })
     return response.data
}

export {
    SignIn
}