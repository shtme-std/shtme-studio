'use client'

export default function Home() {
  const animationStyle = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .animate-shake {
      animation: shake 1.5s ease-in-out infinite;
    }
  `

  const links = [
    {
      name: 'Order via Shopee',
      icon: '/shopee-logo.png',
      url: 'https://id.shp.ee/FhVn7tW',
      color: 'bg-white',
      textColor: 'text-gray-900',
      shake: true
    },
    {
      name: 'TikTok Account',
      icon: '/tiktok-logo.png',
      url: 'https://www.tiktok.com/@shtme.std?_t=ZS-8uNzCyuIYIj&_r=1',
      color: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      name: 'Catalog',
      icon: '/katalog.png',
      url: 'https://sites.google.com/view/catalogshtmestd/halaman-muka',
      color: 'bg-white',
      textColor: 'text-gray-900'
    }
  ]

  return (
    <div 
      className="min-h-screen flex flex-col bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/background.jpg')",
        backgroundSize: '45%',
        backgroundColor: '#f9fafb' 
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-12 max-w-md mx-auto w-full">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20" />
          <img
            src="/avatar.png"
            alt="Profile Avatar"
            className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
          SHTME.STUDIO
        </h1>

        <p className="text-white text-center mb-8 text-sm sm:text-base">
          "Rebel Norm, Live Culture"
        </p>

        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${link.color}
                ${link.textColor || 'text-white'}
                ${link.shake ? 'animate-shake' : ''}
                transform hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-200
                flex items-center gap-4 px-6 py-4 sm:py-5
                rounded-2xl shadow-md hover:shadow-lg
                font-semibold
                w-full min-h-[64px]
                group
              `}
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 object-contain"
              />
              <span className="flex-1 text-center text-base sm:text-lg">
                {link.name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        <p 
          className="mt-8 text-white text-xs sm:text-sm text-center"
          style={{ 
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' 
          }}
        >
          👆 Tap the buttons above to visit our links
        </p>
      </main>

      <footer className="mt-auto py-4 px-4 text-center bg-black-900">
        <p className="text-white text-xs sm:text-sm">
          Made with ❤️ by shtmeXakil
        </p>
      </footer>
    </div>
  )
}