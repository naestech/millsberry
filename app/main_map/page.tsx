import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MainMapPage() {
  const locations = [
    {
      id: 1,
      name: 'Town Center',
      description: 'The heart of Millsberry with shops and activities',
      image: '/graphics/visit_shopping_v2.gif',
      link: '/main_map/downtown'
    },
    {
      id: 2,
      name: 'Peabody Park',
      description: 'A beautiful park for recreation and games',
      image: '/graphics/ad_museum_2_v1.gif',
      link: '/peabody_park'
    },
    {
      id: 3,
      name: 'Millsberry Academy',
      description: 'Educational center for learning and growth',
      image: '/graphics/map.png',
      link: '/academy'
    },
    {
      id: 4,
      name: 'Bank',
      description: 'Manage your Millsbucks and financial transactions',
      image: '/graphics/visit_home_v2.gif',
      link: '/bank'
    },
    {
      id: 5,
      name: 'Town Hall',
      description: 'Government center and community information',
      image: '/graphics/visit_faq_v2.gif',
      link: '/townhall'
    }
  ]

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#1887b6]">Millsberry Map</h1>
        <div>
          <p className="text-center mb-8 text-gray-600">Welcome to Millsberry! Explore the different areas of our virtual town.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
                <Link href={location.link}>
                  <Image
                    src={location.image}
                    alt={location.name}
                    width={200}
                    height={150}
                    className="w-full h-auto"
                  />
                  <h3 className="p-4 pb-1 m-0 text-[#1887b6] font-semibold">{location.name}</h3>
                  <p className="px-4 pb-4 m-0 text-gray-600 leading-relaxed">{location.description}</p>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-8 justify-center">
            <Link href="/home" className="px-5 py-2.5 bg-[#1887b6] text-white rounded font-bold transition-colors hover:bg-[#156a8a]">
              Back to Home
            </Link>
            <Link href="/games" className="px-5 py-2.5 bg-[#1887b6] text-white rounded font-bold transition-colors hover:bg-[#156a8a]">
              Play Games
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 