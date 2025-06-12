import { useState } from "react";
import Modal from "./Modal";

export default function LoanForm() {
    
    const [text,setText] = useState({
        name: "",
        phone: "",
        age: "",
        isChecked: false,
        select: "",
    })
    
    const [errorMessage, setErrorMessage] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const btnIsDisabled = text.name == "" || text.phone == "" || text.age == "";

    return (
        <div>
            <div className="bg-white px-5 py-10 md:p-20 rounded-lg">

            <form className="flex flex-col gap-4" onSubmit={ (e) => {
                e.preventDefault();
        
                if( text.age < 12 || text.age > 80 ) {
                    setErrorMessage("Your age is not allowed");
                } else if ( text.phone.length > 10  ) {
                    setErrorMessage("Phone number is incorrect")
                }
                setShowModal(true);
            } }>
                <h1 className="text-4xl font-bold ">Requesting a Loan to get your money</h1>

                <div className="flex flex-col text-start gap-2">
                    <label className="font-bold">Name</label>
                    <input value={text.name} onChange={ (e) => {
                        setText({...text, name: e.target.value});
                    } } className="border border-gray-400 px-4 py-2 rounded-lg  focus:outline-none" type="text"/>
                </div> 
                
                <div className="flex flex-col text-start gap-2">
                    <label className="font-bold">Phone Number</label>
                    <input value={text.phone}  onChange={ (e) => {
                        setText({...text, phone: e.target.value});
                    } } className="border border-gray-400 px-4 py-2 rounded-lg  focus:outline-none" type="number"/>
                </div> 
                                
                <div className="flex flex-col text-start gap-2">
                    <label className="font-bold">Age</label>
                    <input value={text.age} onChange={ (e) => {
                        setText({...text, age: e.target.value});
                    } } className="border border-gray-400 px-4 py-2 rounded-lg  focus:outline-none" type="number"/>
                </div> 
                                                
                <div className="flex items-center text-start gap-2">
                    <label className="font-bold">Are you an Employee</label>
                    <input checked={text.isChecked} onChange={ (e) => {
                        setText({...text, isChecked: e.target.checked});
                    } } type="checkbox"/>
                </div> 

                <div className="flex flex-col text-start gap-2">
                    <label className="font-bold">Salary</label>

                    <select onChange={ (e) => {
                        setText({...text, select: e.target.value});
                    } } className="px-4 py-2 border border-gray-400 rounded-lg font-medium focus:outline-none">
                        <option disabled>select</option>
                        <option>less than 500$</option>
                        <option>more than 500$</option>
                        <option>more than 1000$</option>
                    </select>
                </div>

                <button disabled={btnIsDisabled} type="submit" className={btnIsDisabled ? "px-4 py-2 bg-gray-500 rounded-lg text-white font-bold cursor-pointer" : "px-4 py-2 bg-black rounded-lg text-white font-bold cursor-pointer"}>submit</button>
            </form>

            <Modal errMessage={errorMessage} isVisible={showModal}></Modal> 
        </div>
        </div>
    );
}