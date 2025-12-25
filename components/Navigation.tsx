import Link from 'next/link';

export default function Navigation(){
    return(
        <nav className="bg-[#0a0a0a] border-b border-gray-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className='flex items-center justify-between h-16'>
                    <Link
                      href="/"
                      className='text-xl font-bold hover:text-[#00ff88] transition-colors'
                      >
                        Dylan Giddens
                      </Link>
                      <div className='flex items-center gap-8'>
                        <Link
                            href="/"
                            className='text-gray-400 hover:text-[#00ff88] transition-colors font-medium'
                            >
                                Home 
                        </Link>
                        <Link
                            href="/projects"
                            className="text-gray-400 hover:text-[#00ff88] transition-colors font-medium"
                            >
                                Projects
                        </Link>
                        <Link
                            href="/about"
                            className='text-gray-400 hover:text-[#00ff88] transition-colors font-medium'
                            >
                                About
                        </Link>
                        <Link
                            href="/contact"
                            className='text-gray-400 hover:text-[#00ff88] transition-colors font-medium'
                            >
                                Contact
                        </Link>
                      </div>
                </div>
            </div>
        </nav>
    )
}