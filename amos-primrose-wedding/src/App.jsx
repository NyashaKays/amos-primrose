import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Calendar, Clock, Info, CheckCircle, MailOpen, Music, Camera, Utensils, GlassWater } from 'lucide-react';

const CustomStyles = () => (
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 25s linear infinite;
    }
    html {
      scroll-behavior: smooth;
    }
    .fade-in-section {
      animation: fadeIn 1.5s ease-in-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

const useCountdown = (targetDate) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const EnvelopeIntro = ({ isOpened, onOpen }) => {
  if (isOpened) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center text-white p-8 max-w-md animate-pulse">
        <MailOpen className="w-16 h-16 mx-auto mb-6 text-[#F7E7CE]" strokeWidth={1} />
        <h1 className="text-3xl md:text-5xl font-serif mb-4 tracking-wider">P & A</h1>
        <p className="uppercase tracking-widest text-sm text-[#F7E7CE] mb-12">You are invited</p>
        <button 
          onClick={onOpen}
          className="px-8 py-3 border border-[#F7E7CE] text-[#F7E7CE] hover:bg-[#F7E7CE] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm rounded-sm font-medium"
        >
          Tap the seal to open
        </button>
      </div>
    </div>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center z-0" 
      style={{ backgroundImage: 'url("couple-hero.jpeg")' }}
    >
      <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 text-white flex flex-col items-center mt-20">
      <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-6 text-[#F7E7CE] font-light">Together with their families</p>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-4 tracking-tight drop-shadow-lg">
        Primrose
        <span className="block text-4xl md:text-6xl my-4 italic text-[#F7E7CE] font-light">&</span>
        Amos
      </h1>
      <p className="text-xl md:text-2xl tracking-widest mt-8 font-light drop-shadow-md">DECEMBER 19, 2026</p>
      <p className="uppercase tracking-widest text-xs mt-4 text-gray-300">Eagles Training Center, Vhumba</p>
    </div>

    {/* Scrolling Marquee */}
    <div className="absolute bottom-0 w-full overflow-hidden bg-[#F7E7CE] text-black py-3 border-t border-[#d8c5a7] z-20">
      <div className="animate-marquee font-serif italic text-lg tracking-wider font-semibold">
        <span className="mx-8">Join us for our special day</span> • 
        <span className="mx-8">December 19, 2026 at 09:00 hrs</span> • 
        <span className="mx-8">Eagles Training Center, Vhumba</span> • 
        <span className="mx-8">Black, White & Champagne</span> • 
        <span className="mx-8">Primrose & Amos</span> •
      </div>
    </div>
  </header>
);

const Couple = () => (
  <section className="py-24 px-6 bg-white text-black">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">The Couple</h2>
        <div className="w-16 h-px bg-[#F7E7CE] mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bride */}
        <div className="flex flex-col items-center text-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 border-4 border-[#F7E7CE] shadow-2xl">
            <img src="primrose.jpeg" alt="Bride" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <h3 className="text-3xl font-serif mb-2">Primrose T Kabiliyele</h3>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">The Bride</p>
          <div className="text-gray-700 max-w-md leading-relaxed font-light italic bg-gray-50 p-6 rounded-sm border border-gray-200 shadow-sm">
            <Heart className="w-5 h-5 text-[#F7E7CE] mx-auto mb-3" fill="currentColor" />
            "Haven't you read," he replied, "that at the beginning the Creator 'made them male and female,' and said, 'For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh'? So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
            <span className="block mt-4 font-serif font-medium not-italic text-sm text-black uppercase tracking-wider">— Matthew 19:5-6</span>
          </div>
        </div>

        {/* Groom */}
        <div className="flex flex-col items-center text-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 border-4 border-[#F7E7CE] shadow-2xl">
            <img src="amos.jpeg" alt="Groom" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <h3 className="text-3xl font-serif mb-2">Amos T.K Muleya</h3>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">The Groom</p>
          <div className="text-gray-700 max-w-md leading-relaxed font-light italic bg-gray-50 p-6 rounded-sm border border-gray-200 shadow-sm">
            <Heart className="w-5 h-5 text-[#F7E7CE] mx-auto mb-3" fill="currentColor" />
            "Place me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave. It burns like blazing fire, like a mighty flame. Many waters cannot quench love; rivers cannot sweep it away."
            <span className="block mt-4 font-serif font-medium not-italic text-sm text-black uppercase tracking-wider">— Song of Solomon 8:6-7</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CountdownSection = () => {
  const timeLeft = useCountdown('2026-12-19T09:00:00');

  return (
    <section className="py-20 bg-black text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-serif mb-12 tracking-wide text-[#F7E7CE]">The Countdown Begins</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-serif font-light mb-4">{item.value || '00'}</div>
              <div className="uppercase tracking-[0.2em] text-xs text-[#F7E7CE]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WeddingProgram = () => {
  const events = [
    { time: '09:00', title: 'Welcome & Seating', icon: <MapPin className="w-5 h-5" /> },
    { time: '09:30', title: 'The Grand Entrance', icon: <Heart className="w-5 h-5" /> },
    { time: '10:00', title: 'The Ceremony', icon: <Camera className="w-5 h-5" /> },
    { time: '12:00', title: 'Cocktails & Photos', icon: <Music className="w-5 h-5" /> },
    { time: '13:00', title: 'Reception Meal', icon: <Utensils className="w-5 h-5" /> },
    { time: '14:30', title: 'Toasts & Speeches', icon: <GlassWater className="w-5 h-5" /> },
    { time: '15:00', title: 'First Dance & Party', icon: <Music className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Wedding Program</h2>
          <p className="uppercase tracking-widest text-xs text-gray-500">Order of Events</p>
        </div>

        <div className="relative border-l border-[#F7E7CE] ml-4 md:ml-0">
          {events.map((event, idx) => (
            <div key={idx} className="mb-10 ml-8 md:ml-12 relative flex items-center group">
              <span className="absolute -left-[41px] md:-left-[57px] flex items-center justify-center w-10 h-10 rounded-full bg-[#F7E7CE] border border-[#d8c5a7] text-black shadow-sm group-hover:bg-black group-hover:text-[#F7E7CE] transition-colors duration-300">
                {event.icon}
              </span>
              <div className="bg-gray-50 p-6 rounded-sm w-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-bold tracking-wider text-[#d8c5a7] block mb-1">{event.time}</span>
                <h3 className="text-xl font-serif text-black">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DressCode = () => {
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Champagne', hex: '#F7E7CE' },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Dress Code</h2>
          <p className="text-[#F7E7CE] tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
            Elegant Formal / Black Tie Optional
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-12 leading-relaxed max-w-2xl">
            We kindly request our guests to dress in our wedding palette of Black, White, and Champagne to help us create a beautifully cohesive atmosphere. Ladies are encouraged to wear floor-length dresses or elegant formal suits, and gentlemen are requested to wear formal dark suits or tuxedos.
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-16">
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
          </div>
        </div>
      </section>
  );
};

const NotesAndRSVP = () => (
  <section className="py-24 px-6 bg-white text-black">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
      
      {/* Important Notes */}
      <div>
        <h2 className="text-3xl font-serif mb-8 text-black border-b border-[#F7E7CE] pb-4 inline-block">Important Details</h2>
        <div className="space-y-8 mt-4">
          <div className="flex gap-4 items-start">
            <Clock className="w-6 h-6 text-[#d8c5a7] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-serif mb-1 text-black font-semibold">Arrival Time</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">The ceremony begins promptly at 9:00 AM. We kindly request all guests to arrive and be seated by 8:30 AM.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Info className="w-6 h-6 text-[#d8c5a7] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-serif mb-1 text-black font-semibold">Children Welcome</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">We are excited to celebrate with your whole family, little ones included! Please let us know if you need any special accommodations for them when you RSVP.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-[#d8c5a7] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-serif mb-1 text-black font-semibold">Plus Ones & Seating</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">Due to venue constraints, we can only accommodate guests formally named on the invitation. Seating is strictly assigned.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Heart className="w-6 h-6 text-[#d8c5a7] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-serif mb-1 text-black font-semibold">Gifts</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-light">Your presence is the greatest gift. Should you wish to bless us with a gift, a monetary contribution towards our future together would be deeply appreciated.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP */}
      <div className="bg-black p-8 md:p-12 text-center rounded-sm flex flex-col justify-center border border-[#F7E7CE] shadow-2xl">
        <h2 className="text-4xl font-serif mb-6 text-white">RSVP</h2>
        <p className="text-gray-300 mb-10 font-light">Kindly respond by November 15, 2026</p>
        <button className="bg-[#F7E7CE] text-black py-4 px-8 uppercase tracking-widest text-sm hover:bg-white transition-colors w-full md:w-auto mx-auto font-bold shadow-lg">
          Click Here to RSVP
        </button>
        <p className="mt-6 text-xs text-gray-400 uppercase tracking-wider">Via Google Forms</p>
      </div>
    </div>
  </section>
);

export default function WeddingApp() {
  const [isOpened, setIsOpened] = useState(false);

  // Prevent scrolling when envelope is closed
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);

  return (
    <div className="font-sans antialiased text-black bg-white selection:bg-[#F7E7CE] selection:text-black">
      <CustomStyles />
      <EnvelopeIntro isOpened={isOpened} onOpen={() => setIsOpened(true)} />
      
      <main className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Hero />
        <Couple />
        <CountdownSection />
        <WeddingProgram />
        <DressCode />
        <NotesAndRSVP />
        
        <footer className="py-8 text-center bg-black text-[#F7E7CE] text-xs uppercase tracking-widest border-t border-gray-900">
          <p>&copy; 2026 Primrose & Amos. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}