import { useEffect, useState } from "react"

function OtpGenerator(){

    const [otp,setOtp] = useState('');

    function generateOTP(){
        let newOtp = "";
        for(let i=0;i<6;i++){
            newOtp+=Math.floor(Math.random()*10);
        }
        setOtp(newOtp)
    }

    useEffect(()=>{
        generateOTP()
    },[])

    return(
        <>
            <h1>
                OTP : {otp}
            </h1>
            <button onClick={generateOTP}>Generate New OTP</button>
        </>
    )
}

export default OtpGenerator;