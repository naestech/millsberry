import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GamesPage() {
  const games = [
    {
      id: 1,
      name: 'Peabody Park Cleanup',
      description: 'Help clean up Peabody Park and earn Millsbucks!',
      image: '/graphics/ad_museum_2_v1.gif',
      link: '/games/peabody-cleanup'
    },
    {
      id: 2,
      name: 'Millsberry Academy',
      description: 'Learn and grow at the Academy',
      image: '/graphics/map.png',
      link: '/games/academy'
    },
    {
      id: 3,
      name: 'Shopping Challenge',
      description: 'Test your shopping skills in the Town Center',
      image: '/graphics/visit_shopping_v2.gif',
      link: '/games/shopping-challenge'
    }
  ]

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#1887b6]">Millsberry Games</h1>
        <div>
          <p className="text-center mb-8 text-gray-600">Welcome to the games section! Choose a game to play and earn Millsbucks.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {games.map((game) => (
              <div key={game.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
                <Link href={game.link}>
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={200}
                    height={150}
                    className="w-full h-auto"
                  />
                  <h3 className="p-4 pb-1 m-0 text-[#1887b6] font-semibold">{game.name}</h3>
                  <p className="px-4 pb-4 m-0 text-gray-600 leading-relaxed">{game.description}</p>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-8 justify-center">
            <Link href="/home" className="px-5 py-2.5 bg-[#1887b6] text-white rounded font-bold transition-colors hover:bg-[#156a8a]">
              Back to Home
            </Link>
            <Link href="/main_map" className="px-5 py-2.5 bg-[#1887b6] text-white rounded font-bold transition-colors hover:bg-[#156a8a]">
              Visit Town Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 