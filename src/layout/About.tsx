import { Button } from '@/components/ui/button';

const About = () => {
    return (
        <div>
            <section className="w-full bg-white py-16 px-6 md:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">About Us</h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>

                        <Button className="bg-[#00786f] hover:bg-[#005e57] text-white px-6 py-2 rounded">
                            Learn More
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLnWd9YLMWOG9JtltQ1i6jVADsnRVXzA2iQ&s"
                            alt="Team illustration"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;