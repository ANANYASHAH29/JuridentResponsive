const AIDrafting = () => {
    const content = ["Jurident’s advanced AI Drafting feature streamlines the complex process of legal document creation by generating meticulously structured, professional-grade drafts within seconds. Whether you need contracts, petitions, affidavits, or legal notices, our intelligent system is engineered to comprehend the nuances of legal language and context, ensuring that each document aligns with jurisdictional standards and client-specific requirements.", "By leveraging state-of-the-art natural language processing and legal domain expertise, Jurident empowers legal professionals to produce high-quality, review-ready documents with unparalleled speed and precision. This not only reduces the risk of human error but also significantly cuts down the time spent on repetitive drafting tasks, allowing practitioners to allocate more time to critical legal analysis and strategic decision-making.", "With Jurident, legal teams can enhance their operational efficiency, maintain compliance, and deliver consistent, accurate documentation—every time. Let our AI handle the paperwork, while you focus on what truly matters: providing exceptional legal counsel.", "Coming Soon..."]
    return (
        <div className="relative mt-[50px] mb-[10px] w-full h-[100vh] flex justify-center items-center overflow-hidden">
            <img src="image 3.png" className="absolute w-[50%] sm:w-[70%]  opacity-[1] z-1 "></img>
            <div className="z-2 w-[80%] h-full m-[50px] flex flex-col justify-center items-start">

                <h1 className="font-bold text-[#cda454] mt-[5px] mb-[3px]">AI Drafting</h1>

                {content.map((item) => <p className="font-medium  text-[10px] sm:text-base mb-[15px] " >{item}</p>
                )}



            </div>
        </div>
    );
}

export default AIDrafting;