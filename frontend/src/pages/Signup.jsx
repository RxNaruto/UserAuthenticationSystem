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
    return <div>
        <div className="bg-black ">
            <div className=" flex content-center">
                <div>
                    <Heading label={"Signup"}/>
                    <Inputbox onChange={(e)=>{
                        setUsername(e.target.value);
                    }} label={"username"} placeholder={"Jon@gmail.com"}/>

                    <Inputbox onChange={(e)=>{
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"password"}/>

                    <Inputbox onChange={(e)=>{
                        setName(e.target.value);
                    }} label={"Name"} placeholder={"Jon"}/>

                    <Inputbox onChange={(e)=>{
                        setMobile(e.target.value);
                    }}label={"Mobile No."} placeholder={"9898989898"}/>

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
    </div>
}