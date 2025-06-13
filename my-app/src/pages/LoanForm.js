import { useState } from "react";
import Modal from "./Modal";
import MyInput from "./MyInput";
import { InputContext } from "@/contexts/InputContext";

export default function LoanForm() {


    const [text, setText] = useState({
        name: "",
        phone: "",
        age: "",
        isChecked: false,
        select: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const btnIsDisabled = text.name == "" || text.phone == "" || text.age == "";


    function handlNameInputChange(value) {
        setText({ ...text, name: value });
    };

    function handlPhoneInputChange(value) {
        setText({ ...text, phone: value });
    };

    function handlAgeInputChange(value) {
        setText({ ...text, age: value });
    };

    function handlBoxInputChange(value) {
        setText({ ...text, isChecked: value });
    };
    return (
        <>
            <div className="bg-white px-5 py-10 md:p-20 rounded-lg w-[90%] md:w-[70%]">

                <form className="flex flex-col gap-4" onSubmit={(e) => {
                    e.preventDefault();

                    if (text.age < 12 || text.age > 80) {
                        setErrorMessage("Your age is not allowed");
                            setTimeout( () => {
                                location.reload();
                            }, 2000 );                      
                    } else if (text.phone.length > 10) {
                        setErrorMessage("Phone number is incorrect");
                            setTimeout( () => {
                                location.reload();
                            }, 2000 );  
                    }
                    setShowModal(true);
                    setText({
                        name: text.name,
                        phone: "",
                        age: "",
                        isChecked: false,
                        select: "",
                    });

                }}>
                    <h1 className="text-2xl md:text-4xl font-bold ">{showModal === true ? `Welcome, ${text.name}` : "Requesting a Loan to get your money"}</h1>

                    <InputContext.Provider value={{
                        value: text.name,
                        title: "Name",
                        handlChange: handlNameInputChange,
                        type: "text",
                    }}>
                        <MyInput />
                    </InputContext.Provider>

                    <InputContext.Provider value={{
                        value: text.phone,
                        title: "Phone",
                        handlChange: handlPhoneInputChange,
                        type: "number",
                    }}>
                        <MyInput />
                    </InputContext.Provider>

                    <InputContext.Provider value={{
                        value: text.age,
                        title: "Age",
                        handlChange: handlAgeInputChange,
                        type: "number",
                    }}>
                        <MyInput />
                    </InputContext.Provider>
                    


                    <div className="flex items-center text-start gap-2">
                        <label className="font-bold">Are you an Employee</label>
                        <input checked={text.isChecked} onChange={(e) => {
                            setText({ ...text, isChecked: e.target.checked });
                        }} type="checkbox" />
                    </div>

                    <div className="flex flex-col text-start gap-2">
                        <label className="font-bold">Salary</label>

                        <select onChange={(e) => {
                            setText({ ...text, select: e.target.value });
                        }} className="px-4 py-2 border border-gray-400 rounded-lg font-medium focus:outline-none">
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
        </>
    );
}