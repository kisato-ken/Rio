import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function AnnaprashanInvite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-babyBlue-50 via-white to-powderedblue-50 p-2 md:p-4">
      {!isOpen && (
        <motion.button
          className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center cursor-pointer relative w-full max-w-sm h-[380px] md:w-[360px] md:h-[440px] border-2 border-babyBlue-200 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-powderedblue-200"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Open Invitation"
        >
          {/* Blurred Swastik watermark */}
  <img
    src="/swastik.png"
    alt="Swastik watermark"
    className="absolute inset-0 w-full h-full object-cover opacity-10 filter blur-sm transform scale-150 pointer-events-none z-0"
          />
          {/* Circular photo container centered on watermark */}
  <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-babyBlue-300 shadow-lg">
    <img
      src="/rio.jpg"
      alt="Rio"
      className="object-cover w-full h-full"
    />
  </div>
          {/* Animated title: word-by-word fade-in */}
          <div className="flex flex-nowrap justify-center gap-1 mt-8 mb-4 px-2 overflow-hidden">
            {["Welcome", "To", "Shaurya's", "Annaprashan"].map((word, idx) => (
              <motion.span
                key={idx}
                className="text-base md:text-lg font-bold text-babyBlue-600 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (idx + 1) * 0.8, duration: 0.8 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
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
          <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center p-2 md:p-6 bg-gradient-to-br from-white via-powderedblue-50 to-powderedblue-100 shadow-md rounded-3xl border-2 border-powderedblue-200 min-h-[300px]">
            {/* Floral decorations */}
            <img src="/flowers.png" alt="flowers" className="absolute left-0 top-0 w-32 md:w-48 lg:w-64 -translate-x-1/3 -translate-y-1/3 select-none pointer-events-none" style={{ zIndex: 2 }} />
            <img src="/flowers.png" alt="flowers" className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-64 rotate-180 translate-x-1/3 translate-y-1/3 select-none pointer-events-none" style={{ zIndex: 2 }} />
            {/* Circular photo at center */}
            <div className="z-10 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto mb-6">
              <img
                src="/rio-background.jpg"
                alt="Rio"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative z-10 w-full flex flex-row flex-nowrap gap-0">
              {/* Bengali Poem */}
              <div className="w-1/2 text-left font-mono text-xs md:text-base leading-snug whitespace-pre space-y-1 pr-0 md:pr-4 mb-4 md:mb-0">
                <p>রোজ দেখি তোমরা সবাই</p>
                <p>খাচ্ছো বসে ভাত!</p>
                <p>আমারও তো ইচ্ছে করে</p>
                <p>তাই তো বাড়াই হাত!!</p>
                <p>রোজ রোজ আর ভালো লাগে না,</p>
                <p>শুধুই দুধের স্বাদ...</p>
                <p>তাই আমি এবার খাব,</p>
                <p>মামার হাতে ভাত!!</p>
                <p>আমি প্রথম ভাত খাব,</p>
                <p>বসে মামার কোলে!</p>
                <p>রাগ করোনা কেউ কিন্তু—</p>
                <p>এসো সবাই চলে!!</p>
                <p>আমি এখন খুবই ছোটো,</p>
                <p>চলতে কি আর পারি;</p>
                <p>তাই তো চিঠি পাঠিয়ে দিলাম—</p>
                <p>কেউ করোনা আড়ি!!</p>
                <p className="mt-4 text-xs md:text-base font-bold text-red-600">ইতি—</p>
                <p className="text-xs md:text-base font-bold text-red-600">রিও 💙</p>
              </div>
              {/* Divider */}
              <div className="block w-px bg-babyBlue-200 mx-1 h-full" />
              {/* English Poem */}
              <div className="w-4/12 text-left font-mono text-xs md:text-sm italic leading-snug whitespace-pre space-y-1 pl-0 md:pl-1">
                <p>Roj dekhi tomra shobai,</p>
                <p>Khaccho boshe bhaat!</p>
                <p>Amaro toh icche kore—</p>
                <p>Tai toh barai hath!!</p>
                <p>Roj roj aar bhalo lagena,</p>
                <p>Shudhu doodh er swaadh...</p>
                <p>Tai ami khabo ebar,</p>
                <p>Mama'r hath e bhaat!!</p>
                <p>Ami prothom bhaat khabo,</p>
                <p>Boshe mama'r kole!</p>
                <p>Raag korona keo kintu—</p>
                <p>Shobai esho chole!!</p>
                <p>Ami ekhon khoob e choto,</p>
                <p>Cholte ki pari?</p>
                <p>Tai to chithi pathiye dilam—</p>
                <p>Keo korona aari!!</p>
                <p className="mt-4 font-bold text-red-600">Love—</p>
                <p className="font-bold text-red-600">Rio 💙</p>
              </div>
            </div>
          </div>
          {/* Right Page: Invitation */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-0 bg-gradient-to-br from-white via-powderedblue-50 to-powderedblue-100 relative min-h-[350px]">
            {/* Floral decorations */}
            <img src="/flowers.png" alt="flowers" className="absolute left-0 top-0 w-32 md:w-48 lg:w-64 -translate-y-1/3 -translate-x-1/3 select-none pointer-events-none" style={{zIndex:2}} />
            <img src="/flowers.png" alt="flowers" className="absolute right-0 bottom-0 w-32 md:w-48 lg:w-64 rotate-180 translate-y-1/3 translate-x-1/3 select-none pointer-events-none" style={{zIndex:2}} />
            {/* Soft gold glow overlay for extra vibrance */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-powderedblue-50/60 to-powderedblue-100/50 pointer-events-none" style={{zIndex:1}} />
            {/* Gold geometric frame */}
            <div className="relative w-full h-full flex flex-col justify-center items-center p-4 md:p-12" style={{zIndex:3}}>
              <svg viewBox="0 0 400 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex:1}}>
                <polygon points="30,40 370,20 390,480 60,500" stroke="#4fb9cb" strokeWidth="3" fill="none" />
              </svg>
              <div className="relative z-10 w-full max-w-xs md:max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col items-center border-2 border-powderedblue-200" style={{boxShadow:"0 0 32px 8px rgba(79,185,203,0.15), 0 8px 40px 0 rgba(79,185,203,0.08), 0 4px 32px 0 rgba(0,0,0,0.06)"}}>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Our baby boy <span className="font-bold text-babyBlue-600">Shaurya (Rio)</span> is ready for his first taste of rice!!
                </div>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  It is our pleasure to invite you on this auspicious occasion of our son's <span className="font-bold text-red-600">Annaprashan Ceremony</span>
                </div>
                <div className="text-base md:text-lg text-center text-navySlate-700 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Please join us on—<br/>
                  <span className="font-bold text-red-600">Sunday, August 03</span><br/>
                  <span className="font-bold text-red-600">12.30 pm onwards</span>
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
