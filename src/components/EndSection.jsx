import AnimationWrapper from "./AnimationWrapper";
import { ArrowRightIcon, DocumentChartBarIcon } from "@heroicons/react/24/solid";

const EndSection = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-20 mb-24 px-4 relative">
      {/* Decorative element */}
      <div className="absolute bottom-0 right-20 w-56 h-56 bg-green-50 rounded-full -z-10 opacity-70 blur-3xl"></div>
      
      <AnimationWrapper animateFrom="left">
        <div className="flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg">
          <div className="md:w-1/3">
            <h2 className="bg-gradient-to-r from-[#c6ff81] to-green-300 py-3 px-8 text-xl md:text-2xl font-bold rounded-xl inline-block mb-4">
              Case Studies
            </h2>
            <div className="hidden md:block mt-6">
              <DocumentChartBarIcon className="h-24 w-24 text-green-500 opacity-80" />
            </div>
          </div>

          <div className="md:w-2/3">
            <AnimationWrapper animateFrom="right" delay={200}>
              <p className="text-gray-700 mb-6 text-lg">
                Explore our successful client partnerships and discover how our digital marketing strategies have delivered measurable results. Our case studies highlight the challenges, solutions, and outcomes that demonstrate our expertise in action.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="#"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Case Studies
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:underline group"
                >
                  Schedule a Consultation
                  <span className="ml-2 bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-all">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default EndSection;