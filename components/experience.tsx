import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Experience() {
  return (
    <section className='container mx-auto px-4 max-w-[1200px] pb-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center'>
        <div>
             <Image
                  src="/images/phone.jpeg"
                  alt="GET IT ON Google Play"
                  width={500}
                  height={500}
                />
        </div>
        <div className=''>
          {/* Experience Section */}
          <div className="mb-8 ">
            <h2 className="text-xl font-semibold mb-4">A best-in-class experience</h2>
            <p className="mb-4">iOS and Android apps provide a seamless apartment search experience.</p>

            <ul className="space-y-2 mb-6">
              {[
                "Extensive filters to refine your search",
                "Tailored recommendations",
                "Alerts to track pricing and availability",
                "Digital tours and applications"
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* App Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download on the App Store</h3>
            <div className="flex flex-wrap gap-4">
              <button className="h-12">
                <Image
                  src="/images/app-store.jpeg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className='rounded-md'
                />
              </button>
              <button className="h-12">
                <Image
                  src="/images/google-play.jpeg"
                  alt="GET IT ON Google Play"
                  width={150}
                  height={40}
                  className='rounded-md'
                />
              </button>
            </div>
          </div>
        </div>
      </div>





    </section>
  )
}

export default Experience;
