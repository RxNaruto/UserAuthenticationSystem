import { Heading } from "./components/Heading";
import { Inputbox } from "./components/InputBox";
const App=()=>{
  return(
    <>
    <div className="bg-black">
     <div><Heading label={"Signup"}/></div>
     <div><Inputbox label={"username"} placeholder={"Jon@gmail.com"}/></div>
    </div>
    
   
  
    </>
  )
}
export default App;