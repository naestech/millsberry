import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#1887b6]">Welcome to Your Millsberry Home</h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            <Link href="/main_map" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center transition-transform hover:-translate-y-0.5">
              <Image
                src="/graphics/map.png"
                alt="Visit the Town Center"
                width={150}
                height={50}
              />
              <span className="mt-2 font-semibold text-gray-700">Visit Town Center</span>
            </Link>
            <Link href="/games" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center transition-transform hover:-translate-y-0.5">
              <Image
                src="/graphics/games.png"
                alt="Play Games"
                width={150}
                height={50}
              />
              <span className="mt-2 font-semibold text-gray-700">Play Games</span>
            </Link>
            <Link href="/peabody_park" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center transition-transform hover:-translate-y-0.5">
              <Image
                src="/graphics/ad_museum_2_v1.gif"
                alt="Visit Peabody Park"
                width={150}
                height={50}
              />
              <span className="mt-2 font-semibold text-gray-700">Visit Peabody Park</span>
            </Link>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1887b6]">Your Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
              <div className="bg-blue-50 p-4 rounded text-center">
                <div className="font-bold text-gray-600">Millsbucks:</div>
                <div className="text-lg font-bold text-[#1887b6]">1,000</div>
              </div>
              <div className="bg-blue-50 p-4 rounded text-center">
                <div className="font-bold text-gray-600">Level:</div>
                <div className="text-lg font-bold text-[#1887b6]">5</div>
              </div>
              <div className="bg-blue-50 p-4 rounded text-center">
                <div className="font-bold text-gray-600">Experience:</div>
                <div className="text-lg font-bold text-[#1887b6]">2,450</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#1887b6]">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
              <Link href="/bank" className="px-5 py-3 bg-[#1887b6] text-white text-center rounded font-bold transition-colors hover:bg-[#156a8a]">
                Visit Bank
              </Link>
              <Link href="/townhall" className="px-5 py-3 bg-[#1887b6] text-white text-center rounded font-bold transition-colors hover:bg-[#156a8a]">
                Town Hall
              </Link>
              <Link href="/shopping" className="px-5 py-3 bg-[#1887b6] text-white text-center rounded font-bold transition-colors hover:bg-[#156a8a]">
                Shopping District
              </Link>
              <Link href="/academy" className="px-5 py-3 bg-[#1887b6] text-white text-center rounded font-bold transition-colors hover:bg-[#156a8a]">
                Millsberry Academy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 