export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4 py-20 max-w-3xl">
          <h1 className="text-5xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-gray-400 mb-12">
            I'm currently looking for frontend developer opportunities. Let's connect!
          </p>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00ff88] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#00dd77] transition-colors"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4">Other Ways to Connect</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  <span className="text-[#00ff88]">Email:</span>{' '}
                  <a href="mailto:giddensdp@gmail.com" className="hover:text-white transition-colors">
                    giddensdp@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-[#00ff88]">GitHub:</span>{' '}
                  <a href="https://github.com/katzMotel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    github.com/katzMotel
                  </a>
                </p>
                <p>
                  <span className="text-[#00ff88]">LinkedIn:</span>{' '}
                  <a href="https://linkedin.com/in/dylan-p-giddens" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    linkedin.com/in/dylan-p-giddens
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }