import '../styles/globals.css';

export default function Modal({isVisible, errMessage = null}) {
    if( isVisible ) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center parent" onClick={ (e) => {
            return e.target.classList.add("hidden");
        } }>
            <div className="bg-black rounded-lg min-w-[50%]" >
                {/* <h1 className="text-white font-bold text-center px-6 py-4">you have been submited succesfully</h1> */}
                <h1 className="text-white font-bold text-center px-6 py-4" style={{ color: errMessage ? "red" : "green" }}> {errMessage != null ? errMessage : 'You have been submited succesfully'} </h1>
            </div>
        </div>
    );
    }  else {
        return <></>;
    }

}