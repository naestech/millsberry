'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  useEffect(() => {
    const scripts = [
      '/scripts/common.js',
      '/scripts/offline.min.js',
      '/scripts/login.js',
    ]
    scripts.forEach((src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.head.appendChild(script)
    })

    return () => {
      scripts.forEach((src) => {
        const existing = document.querySelectorAll(`script[src="${src}"]`)
        Array.from(existing).forEach((el) => el.remove())
      })
    }
  }, [])

  const getCurrentDate = () => {
    const today = new Date()
    return today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-[#cbf2fe]">
      {/* HEADER - Matches original table structure */}
      <div className="flex bg-[#cbf2fe] p-2 border-b-2 border-[#1887b6]">
        {/* Logo column */}
        <div className="mr-5">
          <Link href="/">
            <Image
              src="/graphics/logo_over_v2.gif"
              alt="Back to MAIN"
              width={150}
              height={55}
              className="max-w-full h-auto"
            />
          </Link>
        </div>
        
        {/* Navigation buttons - centered */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-2">
            {[
              { href: '/home', src: 'visit_home_v2.gif', alt: 'Visit your Home!' },
              { href: '/main_map/downtown', src: 'visit_shopping_v2.gif', alt: 'Visit the Town Center!' },
              { href: '/highscores', src: 'visit_hi_scores_v2.gif', alt: 'Visit the Hi Scores!' },
              { href: '/faq', src: 'visit_faq_v2.gif', alt: 'Visit the Help Pages!' }
            ].map((nav, index) => (
              <Link key={index} href={nav.href}>
                <Image
                  src={`/graphics/${nav.src}`}
                  alt={nav.alt}
                  width={120}
                  height={30}
                  className="max-w-full h-auto"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Login form - right side */}
        <div className="flex items-center gap-2">
          <form name="login" action="/" method="post" className="flex items-center gap-2">
            <span className="text-black font-bold text-sm">Username</span>
            <input
              id="login_username"
              type="text"
              name="login_username"
              size={10}
              className="border border-gray-300 px-2 py-1 text-sm"
            />
            <span className="text-black font-bold text-sm">Password</span>
            <input
              id="login_password"
              type="password"
              name="login_pass"
              size={10}
              className="border border-gray-300 px-2 py-1 text-sm"
            />
            <Image
              src="/graphics/visit_log_in.gif"
              width={60}
              height={20}
              alt="Login"
              className="max-w-full h-auto cursor-pointer"
            />
            <Link href="/townhall/support" className="text-black text-xs underline">
              [ forgot your password? ]
            </Link>
          </form>
        </div>
      </div>

      {/* SEARCH BAR - Address Book */}
      <div className="bg-[#1887b6] px-2 py-1 flex justify-end">
        <form name="search" action="/site_search" method="get" className="flex items-center gap-2">
          <Image src="/graphics/header_stripe.gif" alt="" width={200} height={25} className="max-w-full h-auto" />
          <Image src="/graphics/slice_11.gif" alt="" width={50} height={25} className="max-w-full h-auto" />
          <span className="text-white font-bold">Address Book</span>
          <input
            type="text"
            name="search"
            className="border border-gray-300 px-2 py-1 text-sm"
          />
                     <Image
             src="/graphics/visit_go.gif"
             width={40}
             height={25}
             alt="Go"
             className="max-w-full h-auto cursor-pointer"
           />
        </form>
      </div>

      {/* MAIN CONTENT AREA - Using CSS Grid for exact table-like layout */}
      <div className="flex justify-center min-h-[calc(100vh-150px)]">
        <div className="grid grid-cols-[275px_650px_275px] min-h-[calc(100vh-150px)]">
          {/* LEFT SIDEBAR - width 275px */}
          <div className="bg-gray-100 p-4 border-r-2 border-[#1887b6]">
            <div className="flex flex-col gap-4 items-center">
              <Link href="/signup">
                <Image
                  src="/graphics/signup.png"
                  alt="Sign Up"
                  width={200}
                  height={60}
                  className="max-w-full h-auto"
                />
              </Link>
              <Link href="/main_map">
                <Image
                  src="/graphics/map.png"
                  alt="Map"
                  width={200}
                  height={60}
                  className="max-w-full h-auto"
                />
              </Link>
              <Link href="/games">
                <Image
                  src="/graphics/games.png"
                  alt="Games"
                  width={200}
                  height={60}
                  className="max-w-full h-auto"
                />
              </Link>
                                   <div className="mt-8 ml-8flex justify-center">
                       <Link href="/signup">
                         <Image src="/graphics/prebuddy.gif" alt="Prebuddy" width={200} height={100} className="max-w-full h-auto" />
                       </Link>
                     </div>
            </div>
          </div>

          {/* MIDDLE CONTENT - width 650px */}
          <div className="bg-white p-5">
            <div className="text-center mb-5">
              <Image src="/graphics/gazette_banner.gif" alt="Millsberry Gazette" width={600} height={100} className="max-w-full h-auto" />
            </div>
            
            <div className="bg-[#1887b6] text-white flex justify-between items-center p-3 mb-5">
              <span className="font-bold text-lg">News Headlines</span>
              <span>{getCurrentDate()}</span>
            </div>

            <section className="max-w-[600px] mx-auto mb-10 text-sm leading-relaxed">
              <div className="flex justify-center mb-4">
                <Link href="/signup">
                  <Image src="/graphics/welcome_signup.gif" alt="Welcome Signup" width={275} height={200} className="max-w-full h-auto" />
                </Link>
              </div>
              <p className="mt-4 mb-3">If you look over the hill, you'll see the far edge of a small city called Millsberry. It used to be a small town, but recently, Millsberry has grown beyond its borders. Walk down the hill and you step into the outer neighborhoods. Just a little further, and you walk into the center of Town.</p>
              <p className="mb-3">If you want to become a citizen, just click on the SIGN UP button to the left.</p>
              <p className="mb-3">You'll get your own customizable home, access to the shopping district, and get to play a bunch of great games! It's completely free and only takes a second.</p>
              <p className="mb-3">Here in Millsberry, there are TONS of things to do! Whether you want to spend your time decorating your home, cleaning up Peabody Park, or hanging out at Millsberry Academy -- it's all up to you! You're in complete control!</p>
              <p className="mb-3">Be sure to save those Millsbucks, though! There are loads of items to buy, including food, books, and clothes that your character can wear, but you'll need Millsbucks to get 'em!</p>
              <p className="mb-3">Don't know where to start? Head on over to Town Hall and get acquainted with the laws here in Millsberry, or to the bank to activate your Millsbucks account! There's so much to do here, so make the most out of it and go explore Millsberry today!</p>
            </section>

            <section className="mb-10 bg-gray-100 p-5 rounded">
              <h3 className="text-center font-semibold mb-2 underline">Last Week's Poll Results:</h3>
              <p className="text-center font-bold mb-4">Who would you want with you on a deserted island?</p>
              {[{ label: 'Best Friend', value: '39%' }, { label: 'Parent', value: '30%' }, { label: 'Pet', value: '19%' }].map((opt, i) => (
                <div key={i} className="flex justify-between border-b pb-1 text-sm">
                  <span>{opt.label}</span>
                  <span>{opt.value}</span>
                </div>
              ))}
              <Link href="#" className="block text-center mt-3 text-[#1887b6] underline">See all results</Link>
            </section>

            <div className="text-center mb-10">
              <Link href="/peabody_park">
                <Image src="/graphics/ad_museum_2_v1.gif" alt="Peabody Park" width={275} height={100} className="max-w-full h-auto" />
              </Link>
            </div>

            <section className="mb-10">
              <h3 className="bg-[#1887b6] text-white px-3 py-2 mb-3">Contents</h3>
              <div className="flex items-center gap-2 text-sm">
                <Image src="/graphics/paperbullet.gif" alt="" width={8} height={8} className="max-w-full h-auto" />
                <span>Yard Sale Classifieds . . .</span>
                <Link href="/classified" className="text-[#1887b6]">page 4</Link>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR - width 275px */}
          <div className="bg-gray-100 p-5 border-l-2 border-[#1887b6]">
            <div className="flex flex-col gap-6 text-sm leading-snug">

            
              <Link href="/refer" target="_blank">
                <Image src="/graphics/ad_choosebreakfast_1.gif" alt="Ad" width={275} height={225} className="max-w-full h-auto" />
              </Link>

              <div>
                <p className="text-center mb-2">Save your own mix in the <Link href="/studio" className="text-[#1887b6] underline">Studio</Link>!</p>
                <Image src="/graphics/top10_gazette.gif" alt="Top 10" width={275} height={152} className="max-w-full h-auto" />
                <div className="grid grid-cols-2 gap-1 mt-2">
                  {[ 'Crayzee', 'madmix2005', 'Coolest Mix Ever', 'Wocky Mix', 'Dragon Dues', 'bebel', 'funkdafied', 'patrick1271', 'BookEndz Beetz', 'totally rad' ].map((user, i) => (
                    <div key={i} className="bg-white p-1 text-xs">
                      <b>{i + 1}</b> <Link href={`/user`} className="text-[#1887b6]">{user}</Link>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[#1887b6] text-white p-2 font-bold">Today's Weather</div>
                <div className="flex gap-2 mt-2">
                  <Image src="/graphics/weather_icons/sunny.gif" alt="Sunny" width={80} height={85} className="max-w-full h-auto" />
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between"><span>High:</span><span>75°F</span></div>
                    <div className="flex justify-between"><span>Low:</span><span>55°F</span></div>
                    <div className="flex justify-between"><span>Humidity:</span><span>65%</span></div>
                    <div className="flex justify-between"><span>Wind:</span><span>10 mph</span></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#1887b6] text-white p-2 font-bold">Home Tour</div>
                <div className="mt-2">
                  <div>1.) <Link href="/user=loveitorloseit" className="text-[#1887b6]">loveitorloseit</Link></div>
                  <div>2.) <Link href="/user=jogo52793" className="text-[#1887b6]">jogo52793</Link></div>
                </div>
              </div>

              <div>
                <div className="bg-[#1887b6] text-white p-2 font-bold">High Scores: <br /> Sherman Home Run Derby</div>
                <div className="mt-2 text-sm space-y-1">
                  {[
                    ['tjkitkat', '850,127 pts'],
                    ['crystle11', '750,199 pts'],
                    ['iakona4586', '712,258 pts'],
                    ['snoopylou', '680,028 pts'],
                    ['syara', '595,183 pts'],
                  ].map(([user, score], i) => (
                    <div key={i} className={`p-1 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-200'} flex justify-between`}>
                      <Link href={`/user=${user}`} className="text-[#1887b6]">{user}</Link>
                      <span>{score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[#1887b6] text-white p-2 font-bold">Featured Citizen</div>
                <div className="mt-2">
                  <p>Meet Judy, our citizen of the week! She lives in Golden Valley and has been active since 2004.</p>
                  <p className="mt-2">To find out more, <Link href="/user=judyann88" className="text-[#1887b6] underline">turn the page</Link>!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
