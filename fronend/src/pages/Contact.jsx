import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex items-center justify-center px-4">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Contact Us
        </h2>

        <p className="text-gray-300 text-center mb-10">
          We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-6">
          
          <div>
            <label className="block text-gray-200 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition duration-300 text-white font-semibold text-lg shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  )
}

export default Contact
