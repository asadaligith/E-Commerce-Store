import axiosInstance from "./axiosInstance"

const SignIn = async ()=>{
     const response = await axiosInstance.post('auth/login', {username , password})
     return response
}

export {
    SignIn
}