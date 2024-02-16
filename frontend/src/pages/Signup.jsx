import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Inputbox } from "../components/InputBox"
import axios from "axios"

export const Signup=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[mobile,setMobile]=useState("");
    return <div className="bg-neutral-700 h-screen flex justify-center">
        <div className=" border-amber-800 w-2/6 m-32 bg-neutral-950 border-4 shadow-2xl rounded-lg">
            <div className="flex flex-col items-center">
                
                    
                    <div><Heading label={"Signup"}/></div>
                    <div><Inputbox onChange={(e)=>{
                        setUsername(e.target.value);
                    }} label={"username"} placeholder={"Jon@gmail.com"}/></div>

                    <div><Inputbox onChange={(e)=>{
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"password"}/></div>

                    <div><Inputbox onChange={(e)=>{
                        setName(e.target.value);
                    }} label={"Name"} placeholder={"Jon"}/></div>

                    <div><Inputbox onChange={(e)=>{
                        setMobile(e.target.value);
                    }}label={"Mobile No."} placeholder={"9898989898"}/></div>

                    <div className="w-36">
                    <Button onClick={ async()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            password,
                            name,
                            mobile
                        })

                    }} label={"Signup"}/>
                    </div>


                
            </div>
        </div>
    </div>
}