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


    return (
  <div className="w-full min-h-screen flex justify-center items-center px-4 sm:px-12 overflow-auto">
    <div className="w-full max-w-[95%] sm:max-w-[1200px] h-fit sm:h-[75%] mt-[100px] shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-[20px] flex flex-col sm:flex-row px-5 sm:px-12 py-6 sm:py-10">

      {/* LEFT PANEL */}
      <div className="w-full sm:w-[45%] flex flex-col items-start justify-between pr-0 sm:pr-[30px] sm:border-r border-gray-300 mb-6 sm:mb-0">
        <div className="w-full flex flex-col items-start">
          <h1 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-6 text-[#D0A95C]">
            Drop in your details and we will reach out to you shortly
          </h1>
          <div className="w-full hidden sm:flex flex-col text-sm sm:text-base md:text-lg">
            <div className="flex items-center mb-2">
              <FaEnvelope />
              <span className="ml-2 font-semibold">connect@valscotech.com</span>
            </div>
            <div className="flex items-start">
              <FaLocationDot className="mt-[3px]" />
              <span className="ml-2">Valsco Technology,<br />J-3 Shatabdi Enclave<br /> Noida-201301, Uttar Pradesh</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center ml-[10px] mt-4 text-gray-500 font-light text-lg">
          <PiDiscordLogo className="mr-[10px] hover:text-[#D0A95C]" />
          <SlSocialYoutube className="mr-[10px] hover:text-[#D0A95C]" />
          <FaXTwitter className="mr-[10px] hover:text-[#D0A95C]" />
          <LuInstagram className="mr-[10px] hover:text-[#D0A95C]" />
        </div>
      </div>

      {/* FORM PANEL */}
      <div className="flex flex-col items-center w-full sm:w-[55%] pb-[20px]">
        <div className="flex flex-col items-center w-full sm:w-[90%]">

          {/* Form Fields */}
          <div className="flex flex-col text-xs sm:text-sm md:text-base lg:text-lg font-semibold w-full mb-6 sm:mb-[50px] space-y-6">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex flex-col w-full sm:w-[50%]">
                <p className="text-[#D0A95C] mb-2">First Name*</p>
                <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs" : "border-black"}`} ref={nameRef} />
              </div>
              <div className="flex flex-col w-full sm:w-[50%]">
                <p className="text-[#D0A95C] mb-2">Last Name</p>
                <input type="text" className="outline-none border-b border-black" ref={lastNameRef} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex flex-col w-full sm:w-[50%]">
                <p className="text-[#D0A95C] mb-2">Email*</p>
                <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs" : "border-black"}`} ref={emailRef} />
              </div>
              <div className="flex flex-col w-full sm:w-[50%]">
                <p className="text-[#D0A95C] mb-2">Phone*</p>
                <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs" : "border-black"}`} ref={phoneRef} />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col w-full mb-6 relative">
            <p className={`transition-all duration-500 mb-2 font-semibold text-[#D0A95C] transform ${formStatus ? "translate-y-[60px] opacity-0" : "translate-y-0 opacity-100"}`}>
              Message*
            </p>
            <p className={`absolute text-green-600 font-bold text-sm transition-all duration-500 ${formStatus === "success" ? "translate-y-0 opacity-100" : "-translate-y-[40px] opacity-0"}`}>
              Request sent successfully
            </p>
            <p className={`absolute text-red-500 font-bold text-sm transition-all duration-500 ${formStatus === "error" ? "translate-y-0 opacity-100" : "-translate-y-[40px] opacity-0"}`}>
              Error sending request
            </p>
            <input type="text" className={`outline-none border-b ${isError ? "border-red-500 text-red-500 font-light text-xs" : "border-black"} font-normal text-xs`} placeholder="Write your Message" ref={message} />
          </div>

          {/* Submit Button */}
    <>
  <style>
    {`
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `}
  </style>

  <div className="flex w-full">
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      className={`
        relative w-full px-6 py-3 rounded-xl text-sm font-semibold text-white
        bg-[#D0A95C]/90 backdrop-blur-md bg-opacity-30
        shadow-md hover:shadow-[0_0_20px_rgba(208,169,92,0.4)]
        transition-all duration-300 ease-in-out
        hover:scale-105
        overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      {/* shimmer layer */}
      <span
        className="absolute inset-0 bg-white/10 blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          animation: 'shimmer 2.5s linear infinite',
        }}
      />

      <span className="relative z-10 flex items-center justify-center">
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white mr-2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Book Demo"
        )}
      </span>
    </button>
  </div>
</>



        </div>
      </div>
    </div>
  </div>
);


}

export default BookADemo;