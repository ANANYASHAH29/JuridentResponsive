import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiDiscordLogo } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu";
import { useRef, useState } from "react";
const BookADemo = () => {
    const nameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const message = useRef("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const validateForm = () => {
        if (nameRef.current.value === "" || emailRef.current.value === "" || phoneRef.current.value === "" || message.current.value === "") {
            return false;
        }
        return true;
    }


    const handleSubmit = async () => {

        setIsLoading(true)
        if (validateForm()) {
            const body = {

                name: nameRef.current.value,
                email: emailRef.current.value,
                phoneNumber: phoneRef.current.value,
                message: message.current.value,
                ...(lastNameRef.current.value && { lastName: lastNameRef.current.value })
            }
            try {
                const resp = await fetch("https://juridentfeedbackmailbackend.onrender.com/send-demoRequest", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const respJson = await resp.text();

                console.log(respJson);
                nameRef.current.value = ""
                lastNameRef.current.value = ""
                emailRef.current.value = ""
                phoneRef.current.value = ""
                message.current.value = ""

                setFormStatus("success");

            } catch (error) {
                console.log(error);
                setFormStatus("error");

            }

        }
        else {
            setIsError(true);
            nameRef.current.value = "Required"
            emailRef.current.value = "Required"
            phoneRef.current.value = "Required"
            message.current.value = "Required"
            setFormStatus("error");

            setTimeout(() => {
                setIsError(false);
                setFormStatus("");
                nameRef.current.value = ""
                lastNameRef.current.value = ""
                emailRef.current.value = ""
                phoneRef.current.value = ""
                message.current.value = ""
            }, 3000);
        }
        setTimeout(() => {
            setIsError(false);
            setFormStatus("");
            nameRef.current.value = "";
            lastNameRef.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            message.current.value = "";
        }, 3000);

        setIsLoading(false);


    }

    console.log(isError)


    return (<div className="w-full mt-[30px] sm:mt-[0px] h-screen flex justify-center items-center">
        <div className="w-[90%] sm:w-[70%] h-fit sm:h-[70%] mt-[100px] shadow-[0_0_10px_rgba(0,0,0,0.25)]  rounded-[20px] flex flex-col sm:flex-row px-6 py-4">
            <div className=" w-[100%] sm:w-[40%] flex flex-col items-start justify-between pr-20px sm:border-r-1 border-gray-300">
                <div className="w-[100%] h-[60%] flex flex-col items-start">
                    <h1 className="font-bold text-base md:text-2xl mb-[10px] sm:mb-[30px] text-[#D0A95C] ">Drop in your details and we will reach out you shortly</h1>
                    <div className="w-[100%] hidden sm:flex flex-col ">
                        <div className="flex items-center mb-[10px] mr-[10px] sm:mr-[0px]">
                            <FaEnvelope />
                            <span className="ml-2 font-semibold text-xs sm:text-sm lg:text-base">connect@valscotech.com</span>
                        </div>
                        <div className="flex items-start text-xs"><FaLocationDot className="mt-[3px]" /> <span className="ml-2"> Valsco Technology,<br />J-3 Shatabdi Enclave<br /> Noida-201301, Uttar Pradesh </span></div>
                    </div>
                </div>
                {/* icons */}
                <div className="hidden sm:flex items-center ml-[10px] mb-[20px] text-gray-500 font-light"><PiDiscordLogo className="mr-[10px] hover:text-[#D0A95C]" /> <SlSocialYoutube className="mr-[10px] hover:text-[#D0A95C]" /> <FaXTwitter className="mr-[10px] hover:text-[#D0A95C]" /> <LuInstagram className="mr-[10px] hover:text-[#D0A95C]" /> </div>
            </div>
            <div className="flex flex-col items-center w-[100%] sm:w-[60%]  pb-[20px] ">
                <div className="flex flex-col items-center w-[100%] sm:w-[80%] p-0 ">
                    {/* details */}
                    <div className="flex flex-col text-sm font-semibold w-[100%] mb-[30px] sm:mb-[50px] " >
                        {/* Details line1 */}
                        <div className="flex justify-between mb-[20px] w-[100%] mt-[20px]">
                            <div className="flex flex-col w-[45%] ">
                                <p className="text-[#D0A95C] mb-[10px] ">First Name*</p>
                                <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs " : "border-2-black"}`} ref={nameRef} />
                            </div>
                            <div className="flex flex-col w-[45%]">
                                <p className="text-[#D0A95C] mb-[10px]">Last Name</p>
                                <input type="text" className="outline-none border-b border-2-black" ref={lastNameRef} />
                            </div>
                        </div>
                        {/* Details Line1 */}
                        <div className="flex w-[100%] justify-between">
                            <div className="flex flex-col w-[45%]">
                                <p className="text-[#D0A95C] mb-[10px] ">Email*</p>
                                <input type="text" className={`outline-none border-b ${isError ? " border-red-500 text-red-500 font-light text-xs" : "border-2-black"}`} ref={emailRef} />
                            </div>
                            <div className="flex flex-col w-[45%]">
                                <p className="text-[#D0A95C] mb-[10px]">Phone*</p>

                                <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs" : "border-2-black"}`} ref={phoneRef} />
                            </div>
                        </div>
                    </div>
                    {/* Message */}


                    <div className="flex flex-col w-[100%]  mb-[30px] relative">
                        <p className={`transition-all duration-500 mb-[10px] font-semibold text-[#D0A95C] transform ${formStatus ? "translate-y-[60px] opacity-0" : "translate-y-0 opacity-100"
                            }`}>
                            Message*
                        </p>
                        <p className={`absolute text-green-600 font-bold text-sm transition-all duration-500 ${formStatus === "success" ? "translate-y-0 opacity-100" : "-translate-y-[40px] opacity-0"
                            }`}>
                            Request sent successfully
                        </p>
                        <p className={`absolute text-red-500 font-bold text-sm transition-all duration-500 ${formStatus === "error" ? "translate-y-0 opacity-100" : "-translate-y-[40px] opacity-0"
                            }`}>
                            Error sending request
                        </p>
                        <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs" : "border-2-black"} font-normal text-xs`} placeholder="Write your Message" ref={message} />
                    </div>


                    <div className="flex w-[100%] justify-end ">
                        <button
                            className="outline-none rounded px-4 py-1 border-none bg-black font-semibold text-sm cursor-pointer text-white hover:scale-[1.1] transition-all ease-in duration-300 flex items-center justify-center gap-2"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                            ) : (
                                "Submit"
                            )}
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div >);
}

export default BookADemo;