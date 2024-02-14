import { Heading } from "../components/Heading"
import { Inputbox } from "../components/InputBox"

export const Signup=()=>{
    return <div>
        <div className="bg-black">
            <div className="w">
                <div>
                    <Heading label={"Signup"}/>
                    <Inputbox label={"username"} placeholder={"Jon@gmail.com"}/>
                    <Inputbox label={"Password"} placeholder={"password"}/>
                    <Inputbox label={"Name"} placeholder={"Jon"}/>
                    <Inputbox label={"Mobile No."} placeholder={"9898989898"}/>


                </div>
            </div>
        </div>
    </div>
}