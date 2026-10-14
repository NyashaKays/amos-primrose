import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, ChevronDown, Camera, GlassWater, Music } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: 19 December 2026, 09:00:00
    const targetDate = new Date('2026-12-19T09:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function for smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) {
    return (
      <div 
        className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 cursor-pointer transition-opacity duration-1000"
        onClick={() => setIsOpen(true)}
      >
        <div className="animate-pulse flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-[#F7E7CE] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(247,231,206,0.3)]">
            <Heart className="w-10 h-10 text-black fill-black" />
          </div>
          <p className="text-xl font-serif tracking-[0.3em] text-[#F7E7CE] uppercase mt-4">Tap the seal to open</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-white text-black font-sans selection:bg-[#F7E7CE] selection:text-black overflow-x-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-3 px-4 flex justify-center gap-6 md:gap-12 text-xs md:text-sm tracking-widest uppercase font-semibold">
        <button onClick={() => scrollToSection('couple')} className="text-black hover:text-[#C291A4] transition-colors">Details</button>
        <button onClick={() => scrollToSection('program')} className="text-black hover:text-[#C291A4] transition-colors">Program</button>
        <button onClick={() => scrollToSection('rsvp')} className="text-[#B76E79] hover:text-black transition-colors">RSVP</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-between overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="/couple-hero.jpeg" 
            alt="Amos and Primrose" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 mt-10">
          <p className="text-[#F7E7CE] tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-md">Together with their families</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-lg">
            Amos <span className="text-[#F7E7CE] italic">&amp;</span> Primrose
          </h1>
          <p className="text-white/90 tracking-[0.3em] uppercase text-sm md:text-base mt-4 drop-shadow-md">Are Getting Married</p>
          
          <div className="mt-12 flex flex-col items-center gap-4 text-white drop-shadow-md">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#F7E7CE]" />
              <span className="tracking-widest uppercase">19 · 12 · 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F7E7CE]" />
              <span className="tracking-widest uppercase">Eagles Training Center, Vumba</span>
            </div>
          </div>
        </div>

        {/* Bouncing Scroll Indicator */}
        <div 
          className="relative z-10 flex flex-col items-center gap-2 pb-12 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('couple')}
        >
          <span className="text-white text-xs tracking-widest uppercase drop-shadow-md">Scroll to explore</span>
          <ChevronDown className="text-white w-6 h-6 drop-shadow-md" />
        </div>

        {/* Marquee Ticker */}
        <div className="relative z-10 bg-black border-t border-white/20 py-3 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 text-[#F7E7CE] text-sm tracking-widest uppercase">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>Amos &amp; Primrose</span>
                <span>✦</span>
                <span>19 · 12 · 2026</span>
                <span>✦</span>
                <span>09:00 HRS</span>
                <span>✦</span>
                <span>Eagles Training Center, Vumba</span>
                <span>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Love Story & Profiles Section */}
      <section id="couple" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 tracking-[0.2em] uppercase text-sm mb-4">Two Hearts</p>
          <h2 className="font-serif text-4xl md:text-5xl">The <span className="italic text-gray-500">Couple</span></h2>
          <div className="w-px h-16 bg-black mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-start">
          {/* Groom */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-64 h-80 overflow-hidden mb-6 rounded-t-full border-4 border-[#F7E7CE]/30">
              <img 
                src="/amos.jpeg" 
                alt="Amos" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-2">The Groom</p>
            <h3 className="font-serif text-2xl mb-4">Amos T.K Muleya</h3>
            <div className="max-w-xs px-6 py-4 bg-gray-50 italic text-gray-600 text-sm border-l-2 border-black">
              "Set me as a seal upon your heart, as a seal upon your arm; for love is strong as death, passion fierce as the grave."
              <br/><span className="block mt-2 font-semibold not-italic text-black">— Song of Solomon 8:6-7</span>
            </div>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center text-center group mt-12 md:mt-24">
            <div className="w-64 h-80 overflow-hidden mb-6 rounded-t-full border-4 border-[#F7E7CE]/30">
              <img 
                src="/primrose.jpeg" 
                alt="Primrose" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-2">The Bride</p>
            <h3 className="font-serif text-2xl mb-4">Primrose T Kabiliyele</h3>
            <div className="max-w-xs px-6 py-4 bg-gray-50 italic text-gray-600 text-sm border-l-2 border-[#F7E7CE]">
              "For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. So they are no longer two, but one flesh."
              <br/><span className="block mt-2 font-semibold not-italic text-black">— Matthew 19:5-6</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <p className="text-[#F7E7CE] tracking-[0.2em] uppercase text-sm mb-4">The Countdown</p>
        <h2 className="font-serif text-4xl mb-12">Counting down to "I do"</h2>
        <div className="flex justify-center gap-4 md:gap-12 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds }
          ].map((unit, index) => (
            <div key={index} className="flex flex-col items-center w-20 md:w-32">
              <div className="text-4xl md:text-6xl font-serif text-[#F7E7CE] mb-2">{unit.value}</div>
              <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/60">{unit.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Program */}
      
      <section id="program" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 tracking-[0.2em] uppercase text-sm mb-4">Program</p>
          <h2 className="font-serif text-4xl">Our Wedding <span className="italic text-gray-500">Day</span></h2>
        </div>

        <div className="relative border-l border-black/20 ml-4 md:ml-1/2">
          {[
            { time: "08:00", title: "Arrival & Seating", desc: "Please arrive and find your seats so we can begin promptly.", icon: Clock },
            { time: "09:30", title: "The Ceremony", desc: "Where two hearts become one.", icon: Heart },
            { time: "12:00", title: "Photos & Cocktails", desc: "Mingle and enjoy refreshments while we capture memories.", icon: Camera },
            { time: "13:00", title: "Reception", desc: "Let the celebrations begin with a delicious meal and speeches.", icon: GlassWater },
            { time: "15:00", title: "Dancing", desc: "Join us on the dancefloor to celebrate our new beginning.", icon: Music }
          ].map((event, index) => (
            <div key={index} className="mb-12 ml-8 relative">
              <div className="absolute -left-[49px] bg-white p-1 rounded-full border border-black">
                <event.icon className="w-5 h-5 text-black" />
              </div>
              <div className="bg-gray-50 p-6 rounded-none border-t border-[#F7E7CE] hover:shadow-lg transition-shadow">
                <span className="text-[#F7E7CE] font-serif font-bold text-lg mb-1 block">{event.time}</span>
                <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="bg-black text-white py-20 px-6 w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Dress Code</h2>
          <p className="text-[#F7E7CE] tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
            Elegant Formal / Black Tie Optional
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-12 leading-relaxed max-w-2xl">
            We kindly request our guests to dress in our wedding palette of Black, White, Champagne, Dusty Rose, and Rose Gold to help us create a beautifully cohesive atmosphere. Ladies are encouraged to wear floor-length dresses or elegant formal suits, and gentlemen are requested to wear formal dark suits or tuxedos.
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0a0a0a] border border-gray-800 shadow-lg"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400">Black</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400">White</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F7E7CE] shadow-lg"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400">Champagne</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C291A4] shadow-lg"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400 text-center">Dusty<br/>Rose</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#B76E79] shadow-lg"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400 text-center">Rose<br/>Gold</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 tracking-[0.2em] uppercase text-sm mb-4">Please Note</p>
          <h2 className="font-serif text-4xl">A Gentle <span className="italic text-gray-500">Word</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-gray-100 bg-white shadow-sm hover:border-[#F7E7CE] transition-colors">
            <h3 className="font-serif text-xl mb-3 border-b border-[#F7E7CE] pb-2 inline-block">Be Seated by 8:30 AM</h3>
            <p className="text-gray-600 text-sm leading-relaxed">The ceremony will begin promptly at 9:00 AM. Please arrive early to settle in so we can share this beautiful moment together without interruption.</p>
          </div>
          <div className="p-8 border border-gray-100 bg-white shadow-sm hover:border-[#F7E7CE] transition-colors">
            <h3 className="font-serif text-xl mb-3 border-b border-[#F7E7CE] pb-2 inline-block">On Gifts</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Your presence is the greatest gift. If you wish to bless us further, a contribution toward our new future together would be deeply appreciated.</p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="bg-black text-white py-24 px-6 w-full flex flex-col items-center justify-center border-t border-white/10">
        <div className="max-w-md mx-auto text-center flex flex-col items-center w-full">
          <h2 className="font-serif text-4xl mb-4">RSVP</h2>
          <p className="text-gray-300 mb-8 text-lg">Kindly respond by November 15, 2026</p>
          
          <a 
            href="YOUR_GOOGLE_FORM_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F7E7CE] text-black px-10 py-5 uppercase tracking-[0.15em] text-sm font-bold hover:bg-white transition-colors duration-300 w-full md:w-auto inline-block text-center"
          >
            Click Here To RSVP
          </a>
          
          <p className="text-gray-500 tracking-[0.2em] uppercase text-xs mt-6">Via Google Forms</p>
        </div>
      </section>


      {/* Location Map Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-100 flex flex-col items-center text-center">
        <div className="mb-12 flex flex-col items-center w-full">
          <p className="text-gray-500 tracking-[0.2em] uppercase text-sm mb-4">Getting There</p>
          <h2 className="font-serif text-4xl">The <span className="italic text-gray-500">Venue</span></h2>
          <p className="mt-4 text-gray-600 max-w-xl text-sm leading-relaxed text-center">
            Eagles Training Center, Vumba, Zimbabwe. Follow our custom map below, or click the button for live GPS directions.
          </p>
        </div>

        <div className="w-full flex flex-col items-center">
          {/* Illustrated Map Image */}
          <div className="w-full max-w-2xl mx-auto border-8 border-gray-50 shadow-md mb-10">
            <img 
              src="/map-illustration.jpeg" 
              alt="Illustrated Map to Eagles Training Center" 
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
          
          {/* Google Maps Button */}
          <a 
            href="https://maps.app.goo.gl/EakXGpPLoQfjF5pr9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white border border-black px-10 py-4 uppercase tracking-[0.15em] text-xs font-bold hover:bg-[#F7E7CE] hover:text-black hover:border-[#F7E7CE] transition-all duration-300 text-center w-full md:w-auto"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}