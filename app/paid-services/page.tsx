import React from 'react';
import Link from 'next/link';
import Header from "@/app/components/Header"

const PaidServicesPage: React.FC = () => {
  return (
    <>
    <Header />
    <div className="mt-8 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6 pt-20 pb-12">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Paid Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Two powerful solutions designed to transform how businesses handle data and growth. 
            Built with cutting-edge technology and human-centered design.
          </p>
        </div>

        {/* Services Stack */}
        <div className="space-y-16 max-w-7xl mx-auto">
          
          {/* NORMLZ Section */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* --- Left Side: Image Only --- */}
                <div>
                  <img 
                    src="/normlz.png" 
                    alt="NORMLZ branding" 
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>

                {/* --- Right Side: Content --- */}
                <div className="space-y-6">
                  <h4 className="text-3xl font-bold text-white">Clean Data, Clear Results</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Transform messy HubSpot data into actionable insights with one click. Stop missing prospects 
                    due to inconsistent data entry and start seeing the true potential of your CRM.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
                      Save 15+ hours per week on data cleanup
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                      Increase campaign accuracy by up to 34%
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-pink-400 rounded-full mr-4"></span>
                      Direct HubSpot integration - no exports needed
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3 pt-4">
                    <Link 
                      href="https://normlz.com" 
                      target="_blank"
                      className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-cyan-400 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-400/25"
                    >
                      Launch NORMLZ →
                    </Link>
                    <p className="text-sm text-gray-500">Free trial • No credit card required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HubProsper Section */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 transition-all duration-300 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-400/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* --- Left Side: Image Only --- */}
                <div>
                  <img 
                    src="/hubprospscreen.png" 
                    alt="HubProsper branding" 
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                
                {/* --- Right Side: Content --- */}
                <div className="space-y-6">
                  <h4 className="text-3xl font-bold text-white">Strategic Growth Solutions</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Comprehensive business growth strategies tailored to your unique challenges. From market 
                    analysis to execution, we help businesses unlock their full potential.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-orange-400 rounded-full mr-4"></span>
                      Custom growth strategy development
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-red-400 rounded-full mr-4"></span>
                      Market analysis and positioning
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></span>
                      Implementation and ongoing support
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3 pt-4">
                    <Link 
                      href="https://hubprosper.com" 
                      target="_blank"
                      className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-orange-400 hover:to-red-500 hover:shadow-lg hover:shadow-orange-400/25"
                    >
                      Explore HubProsper →
                    </Link>
                    <p className="text-sm text-gray-500">Consultation available • Custom solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you need clean data or strategic growth guidance, these solutions are designed 
              to deliver real results for real businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:from-purple-400 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-400/25"
              >
                Get In Touch
              </Link>
              <Link 
                href="/free-services" 
                className="border border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:border-gray-500 hover:text-white hover:bg-gray-800/50"
              >
                View Free Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaidServicesPage;