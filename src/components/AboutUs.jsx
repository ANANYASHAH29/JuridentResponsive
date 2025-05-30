const AboutUs = () => {
    const content = [{ heading: "ABOUT", desc: "Jurident is a modern legal-tech platform built to simplify the way people seek, access, and manage legal support. Whether you're an individual confused about your legal options or a lawyer looking to streamline your practice, Jurident bridges the gap with a seamless, secure, and AI-assisted experience.From fetching court cases, matching with verified lawyers, and scheduling consultations, to drafting legal documents and managing proceedings — Jurident brings the entire legal process under one digital roof. Designed with clarity and trust at its core, the platform eliminates middlemen, protects against misinformation, and empowers users to make informed legal decisions." },
    { heading: "VISION", desc: "Jurident envisions a world where legal support is not a privilege but a right — accessible, understandable, and reliable for everyone, regardless of their background or legal knowledge. We strive to bridge the gap between the complexities of the legal system and the people who need help navigating it. By leveraging technology and simplifying legal interactions, our vision is to empower individuals and legal professionals alike with tools that ensure justice is approachable, transparent, and timely." },
    { heading: "GOAL", desc: "Our goal is to create a comprehensive, intelligent legal platform that addresses real-world challenges faced by clients and lawyers. From helping users identify their legal issues with clarity to connecting them with verified legal professionals, Jurident focuses on making every step of the legal journey smoother. We aim to eliminate misinformation, reduce dependency on unreliable intermediaries, and streamline documentation, communication, and case tracking — all while ensuring privacy, trust, and professional integrity." }
    ]

    return (
        <div className="relative mt-[100px] mb-[10px] w-full h-fit flex justify-center items-center overflow-hidden">
            <img src="Group 967.png" className="absolute w-[50%] sm:w-[20%]  opacity-[1] z-1 "></img>
            <div className="z-2 w-[80%] h-full m-[50px] mt-[20px]">
                {content.map((item) => <>
                    <h1 className="font-bold text-[#cda454] mt-[5px] mb-[3px]">{item.heading}</h1>
                    <p className="font-medium  text-[10px] sm:text-base mb-[15px] " >{item.desc}</p>
                </>)}

            </div>
        </div>
    )
}

export default AboutUs;