import { InputContext } from "@/contexts/InputContext";
import { useContext } from "react";



export default function MyInput() {

    const myContext = useContext(InputContext)
    return (
                <div className="flex flex-col text-start gap-2">
                    <label className="font-bold">{myContext.title}</label>
                    <input value={myContext.value} onChange={ (e) => {

                        if( myContext.type === "text" ) {
                            myContext.handlChange(e.target.value);
                        } else if ( myContext.type === "number" ) {
                             myContext.handlChange(e.target.value);
                        } else if ( myContext.type === "checkbox" ) {
                             myContext.handlChange(e.target.checked);
                        }
                        
                    } } className="border border-gray-400 px-4 py-2 rounded-lg  focus:outline-none" type={myContext.type}/>
                </div> 
    );
}