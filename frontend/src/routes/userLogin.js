const backendUrl="http://localhost:5000"
const axios=require("axios")
const config={
    headers:{
        'Content-Type':'application/json'
    }
}
const userLogin=async(credentials)=>{
    const formData=JSON.stringify(credentials)
    const loginUrl=`${backendUrl}/login`
    const {data}=await axios.post(loginUrl,formData,config)
    return data
}

export default userLogin