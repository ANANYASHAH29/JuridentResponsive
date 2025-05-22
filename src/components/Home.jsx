import ContactUs from "./ContactUs";
import Features from "./Features";
import GetApp from "./GetApp";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <Features />

            {/* Note Section After Features */}
            <div className="px-8 md:px-20 py-6 max-w-6xl mx-auto text-gray-800 text-lg md:text-xl font-medium flex items-start gap-2">
                <span className="text-red-600 text-xl md:text-2xl">*</span>
                <p className="leading-relaxed">
                    Pricing is flexible and tailored to your specific requirements. Costs may vary depending on the level of customization and features you choose for your software.
                </p>
            </div>

            <Testimonials />
            <GetApp />
            <ContactUs />
        </div>
    );
};

export default Home;
