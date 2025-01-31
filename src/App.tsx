import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { testimonials } from './data/testimonials';
import { programFeatures, whatDoesntWork, whyMethodWorks, howItWorks } from './data/content';
import jasonImage from './assets/jason-640.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32 flex items-center" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)), url("https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Solve Anxiety, Heal Relationships & Overcome Burnout—
              <span className="text-blue-600">For Good.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              You don't have to struggle forever. Whether it's anxiety, attachment issues, or career burnout, lasting change is possible—and faster than you think.
            </p>
            <div className="mt-10">
              <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-200">
                Apply for a Free Breakthrough Session <ArrowRight className="inline ml-2" size={20} />
              </button>
              <p className="mt-3 text-sm text-gray-500">No obligation—just a quick call to see if this is right for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Coach Section */}
      <section className="bg-white min-h-[80vh] py-24 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <img src={jasonImage} alt="Jason Andrews" className="rounded-2xl shadow-lg w-64 md:w-80" />
            <div>
              <h2 className="text-3xl font-bold mb-6">You've Tried Everything—But This Actually Works.</h2>
              <p className="text-gray-600 mb-4 text-lg">With years of experience helping clients overcome anxiety, relationship issues, and career challenges, I've developed a unique approach that creates lasting change—fast.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-red-700">What Doesn't Work:</h3>
              <ul className="space-y-4">
                {whatDoesntWork.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-green-700">Why Jason's Method Works:</h3>
              <ul className="space-y-4">
                {whyMethodWorks.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-gray-50 min-h-[80vh] py-24 px-4 sm:px-6 lg:px-8 flex items-center"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-20 text-center">Is This Program Right for You?</h2>
          <div className="space-y-32">
            {programFeatures.map((feature, i) => (
              <div key={i} className="max-w-3xl ml-auto px-8">
                <h3 className="text-4xl font-bold mb-6 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600 text-xl leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-[80vh] py-24 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(to bottom, white, #f8fafc, white)'
      }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">Real Results from Real People</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt="" className="w-16 h-16 rounded-full object-cover mr-4 shadow-md" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-200">
              Get Started Today – Apply for Your Free Call <ArrowRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 min-h-[80vh] py-24 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-24">How Jason Helps You Achieve Lasting Change</h2>
          <div className="space-y-20 relative">
            <div className="absolute top-0 bottom-0 left-[31px] w-1 bg-blue-100 -z-10" />
            {howItWorks.map((step, i) => (
              <div key={i} className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                    {step.step}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed pl-24">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white min-h-[80vh] py-24 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-8">Your Transformation Starts Now—Take Action Today.</h2>
          <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-200">
            Start Your Transformation – Apply Now <ArrowRight className="inline ml-2" size={20} />
          </button>
          <div className="mt-6">
            <span className="text-gray-600 font-semibold">4.9 from 200+ satisfied clients</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">Spots are limited—secure your free session now.</p>
        </div>
      </section>
    </div>
  );
}

export default App;