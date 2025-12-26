import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <Image
                src="/profile.png"
                alt="Dylan Giddens"
                fill
                className="object-cover rounded-xl border-2 border-[#00ff88]"
                priority
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-8">About Me</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a frontend developer based in Memphis, passionate about building modern, 
              user-friendly web applications. With a Computer Science degree from the 
              University of Memphis (2022), I've been developing my skills in React, 
              Next.js, and TypeScript while working toward my first role as a 
              frontend developer.
            </p>
          </div>
        </div>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I specialize in creating responsive, accessible web applications using modern 
            frameworks and tools. My recent projects showcase my ability to work with 
            state management (Redux Toolkit), API integrations, and headless CMS architectures.
          </p>
          
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-4 text-[#00ff88]">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'React', 'Next.js', 'TypeScript', 'JavaScript',
                'Redux Toolkit', 'Tailwind CSS', 'Angular', 
                'Firebase', 'REST APIs', 'Git', 'Vercel', 'WordPress'
              ].map((skill) => (
                <div 
                  key={skill}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-4 text-[#00ff88]">Background</h2>
            <p>
              Before transitioning to frontend development, I gained valuable experience 
              in logistics and customer service, developing strong problem-solving skills 
              and attention to detail. I've also freelanced as a WordPress developer, 
              helping small businesses build their online presence.
            </p>
          </div>
          
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-4 text-[#00ff88]">When I'm Not Coding</h2>
            <p>
              You'll find me biking around Memphis, hiking, rock climbing, catching live 
              music, or watching movies. I believe in maintaining a balanced lifestyle 
              and bringing fresh perspectives to my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}