import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function AnnaprashanInvite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-babyBlue-50 via-white to-blushPink-50 p-2 md:p-4">
      {!isOpen && (
        <motion.button
          className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col items-center cursor-pointer relative w-full max-w-xs h-[340px] md:w-[320px] md:h-[400px] border-2 border-babyBlue-200 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blushPink-200"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Open Invitation"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-babyBlue-300 mb-4 shadow-lg">
            <img
              src="/rio.jpg"
              alt="Shaurya smiling, ready for Annaprashan"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Animated title */}
          <motion.span
            className="text-2xl font-bold text-babyBlue-600 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            Welcome To Shaurya's Annaprashan
          </motion.span>
          <span className="text-lg text-navySlate-700 font-semibold flex items-center gap-2"><FaGift className="text-babyBlue-400" /> Tap to Open Invitation</span>
        </motion.button>
      )}
      {isOpen && (
        <motion.div
          className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center shadow-2xl rounded-3xl overflow-hidden"
          style={{ minHeight: 0, height: 'auto', background: 'rgba(255,255,255,0.95)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Page: Poem (Bengali & English, two columns) */}
          <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-8 bg-white min-h-[350px]" style={{ borderRight: '2px solid #c3e7ff' }}>
            {/* Circular photo at center */}
            <div className="z-10 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto mb-6">
              <img
                src="/rio-background.jpg"
                alt="Rio"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative z-10 w-full flex flex-row gap-4">
              {/* Bengali Poem */}
              <div className="flex-1 flex flex-col justify-center pr-0 md:pr-4 mb-4 md:mb-0">
                <div className="whitespace-pre-line text-sm md:text-lg text-navySlate-800 leading-relaxed font-medium text-left">
রোজ দেখি তোমরা সবাই
খাচ্ছো বসে ভাত!
আমারও তো ইচ্ছে করে
তাই তো বাড়াই হাত!!

রোজ রোজ আর ভালো লাগে না,
শুধুই দুধের স্বাদ...
তাই আমি এবার খাব,
মামার হাতে ভাত!!

আমি প্রথম ভাত খাব,
বসে মামার কোলে!
রাগ করোনা কেউ কিন্তু—
এসো সবাই চলে!!

আমি এখন খুবই ছোটো,
চলতে কি আর পারি;
তাই তো চিঠি পাঠিয়ে দিলাম—
কেউ করোনা আড়ি!!

<span className='block mt-4 text-xs md:text-base text-blushPink-600 font-semibold'>ইতি, রিও</span>
                </div>
              </div>
              {/* Divider */}
              <div className="w-px bg-babyBlue-200 mx-4" />
              {/* English Poem */}
              <div className="flex-1 flex flex-col justify-center pl-0 md:pl-4">
                <div className="whitespace-pre-line text-sm md:text-lg text-navySlate-700 leading-relaxed italic text-left">
Roj dekhi tomra shobai,
Khaccho boshe bhaat!
Amaro toh icche kore
—
Taitoh barai hath!!

Roj roj aar bhalo lagena,
Shudhu doodh er swaadh...
Tai ami khabo ebar,
Mama'r hath e bhaat!!

Ami prothom bhaat khabo,
Boshe mama'r kole!
Raag korona keo kintu—
Shobai esho chole!!

Ami ekhon khoob e choto,
Cholte ki pari?
Tai to chithi pathiye dilam—
Keo korona aari!!

<span className='block mt-4 text-xs md:text-base text-blushPink-600 font-semibold not-italic'>Love, Rio</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Page: Invitation */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-0 bg-gradient-to-br from-white via-blushPink-50 to-blushPink-100 relative min-h-[350px]">
            {/* Floral decorations */}
            <img src="/flowers.png" alt="flowers" className="absolute left-0 top-0 w-24 md:w-40 lg:w-56 -translate-y-1/4 -translate-x-1/4 select-none pointer-events-none" style={{zIndex:2}} />
            <img src="/flowers.png" alt="flowers" className="absolute right-0 bottom-0 w-24 md:w-40 lg:w-56 rotate-180 translate-y-1/4 translate-x-1/4 select-none pointer-events-none" style={{zIndex:2}} />
            {/* Soft gold glow overlay for extra vibrance */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blushPink-50/60 to-blushPink-100/50 pointer-events-none" style={{zIndex:1}} />
            {/* Gold geometric frame */}
            <div className="relative w-full h-full flex flex-col justify-center items-center p-4 md:p-12" style={{zIndex:3}}>
              <svg viewBox="0 0 400 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex:1}}>
                <polygon points="30,40 370,20 390,480 60,500" stroke="#ec4899" strokeWidth="3" fill="none" />
              </svg>
              <div className="relative z-10 w-full max-w-xs md:max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col items-center border-2 border-blushPink-200" style={{boxShadow:'0 0 32px 8px rgba(236,72,153,0.15), 0 8px 40px 0 rgba(236,72,153,0.08), 0 4px 32px 0 rgba(0,0,0,0.06)'}}>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Our baby boy <span className="font-bold text-blushPink-600">Shaurya (Rio)</span> is ready for his first taste of rice!!
                </div>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  It is our pleasure to invite you on this auspicious occasion of our son's Annaprashan Ceremony
                </div>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Please join us on—<br/>
                  <span className="font-bold text-blushPink-600">Sunday, August 03</span><br/>
                  <span className="font-bold text-blushPink-600">12.30 pm onwards</span>
                </div>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  1453 Hilltown Dr<br/>Frisco TX 75036
                </div>
                <div className="text-base md:text-lg text-center text-navySlate-600 mt-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  Regards,<br/>Sukanya & Debanka
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
