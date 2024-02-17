import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Inputbox } from "../components/InputBox"
import axios from "axios"
import { Subheading } from "../components/Subheading"

export const Login=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[responseData,setResponseData]=useState("");
    return <div className="bg-neutral-700 h-screen flex justify-center">
        <div className="border-amber-800 w-full md:w-2/6 mx-auto md:m-32 bg-neutral-950 border-4 shadow-2xl rounded-lg">
            <div className="flex flex-col items-center">
                
                    
                    <div className="pt-7"><Heading label={"Login"}/></div>
                    <div><Subheading label={"Enter Your details Here"} /></div>
                    <div><Inputbox onChange={(e)=>{
                        setUsername(e.target.value);
                    }} label={"username"} placeholder={"Jon@gmail.com"} value={username}/></div>

                    <div><Inputbox onChange={(e)=>{
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"password"} value={password}/></div>

                    

                    <div className="w-36 pt-3">
                    <Button onClick={ async()=>{ 
                        try{
                            const response= await axios.get("http://localhost:3000/api/v1/user/signin",{
                               headers:{
                                'username': username,
                                'password': password
                               }
                            });
                            setResponseData(response.data)
                            
                            
    
                        }catch(e){
                            console.log(username);
                            console.log(password);
                            
                            

                        }

                        }
                    } label={"Login"}/>
                    </div>
                    <div><Subheading label={responseData}/></div>
                   


                
            </div>
        </div>
    </div>
}