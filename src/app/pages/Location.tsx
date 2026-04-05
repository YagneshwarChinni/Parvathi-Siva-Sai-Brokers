import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../utils/translations';

type Language = 'en' | 'te' | 'hi';

export default function Location() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* Location Hero Section */}
      <section className="relative py-14 sm:py-20 px-4 overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.95), rgba(46, 125, 50, 0.95)), url('https://images.unsplash.com/photo-1626475847607-64715e771242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBncmFpbnN8ZW58MXx8fHwxNzc1MzgwNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 animate-fade-in leading-tight"
            style={{ animation: 'fadeInUp 1s ease-out' }}
          >
            {t.locationTitle}
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-white/50 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl px-2 sm:px-0">
            2PWP+3M6, Vinukonda, Andhra Pradesh, India
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl" style={{ border: '3px solid #43A047' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.897!2d79.73!3d16.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzAwLjAiTiA3OcKwNDMnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              className="h-[320px] sm:h-[420px] lg:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parvathi Siva Sai Brokers Location - Vinukonda"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-12 sm:py-16 px-4" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-5 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#C8E6C9' }}>
                <MapPin style={{ color: '#1B5E20' }} size={28} />
              </div>
              <h3 className="text-center mb-4 text-xl sm:text-2xl" style={{ color: '#1B5E20' }}>
                {t.officeAddress}
              </h3>
              <p className="text-center text-gray-700 text-base sm:text-lg break-words">
                2PWP+3M6, Vinukonda<br />
                Andhra Pradesh<br />
                India
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-5 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#A5D6A7' }}>
                <Phone style={{ color: '#1B5E20' }} size={28} />
              </div>
              <h3 className="text-center mb-4 text-xl sm:text-2xl" style={{ color: '#1B5E20' }}>
                {t.contactNumbers}
              </h3>
              <div className="text-center text-gray-700 text-base sm:text-lg">
                <p className="mb-2">
                  <strong>{t.cell}:</strong><br />
                  <a href="tel:9440171005" className="text-green-700 hover:text-green-900">9440171005</a><br />
                  <a href="tel:8885273955" className="text-green-700 hover:text-green-900">8885273955</a>
                </p>
                <p>
                  <strong>{t.office}:</strong><br />
                  <a href="tel:08646274055" className="text-green-700 hover:text-green-900">08646 - 274055</a>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-5 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: '#81C784' }}>
                <Clock style={{ color: '#1B5E20' }} size={28} />
              </div>
              <h3 className="text-center mb-4 text-xl sm:text-2xl" style={{ color: '#1B5E20' }}>
                {language === 'en' ? 'Business Hours' : language === 'te' ? 'వ్యాపార సమయం' : 'व्यवसाय के घंटे'}
              </h3>
              <div className="text-center text-gray-700 text-base sm:text-lg">
                <p className="mb-2">
                  <strong>{language === 'en' ? 'Monday - Saturday' : language === 'te' ? 'సోమవారం - శనివారం' : 'सोमवार - शनिवार'}:</strong><br />
                  9:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>{language === 'en' ? 'Sunday' : language === 'te' ? 'ఆదివారం' : 'रविवार'}:</strong><br />
                  {language === 'en' ? 'By Appointment' : language === 'te' ? 'అపాయింట్‌మెంట్ ద్వారా' : 'नियुक्ति द्वारा'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Directions CTA */}
      <section className="py-12 sm:py-16 px-4" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl" style={{ color: '#1B5E20', marginBottom: '1.5rem' }}>
            {language === 'en' ? 'Visit Us Today' : language === 'te' ? 'ఈరోజే మమ్మల్ని సందర్శించండి' : 'आज ही हमसे मिलें'}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8 px-1 sm:px-0">
            {language === 'en' 
              ? 'We welcome you to visit our office and discuss your pulse trading needs. Our team is ready to serve you with the best quality products and services.' 
              : language === 'te' 
              ? 'మా కార్యాలయాన్ని సందర్శించి మీ పప్పుల వ్యాపార అవసరాలను చర్చించడానికి మేము మిమ్మల్ని స్వాగతిస్తున్నాము. ఉత్తమ నాణ్యత ఉత్పత్తులు మరియు సేవలతో మీకు సేవ చేయడానికి మా బృందం సిద్ధంగా ఉంది.'
              : 'हम आपको हमारे कार्यालय में आने और अपनी दाल व्यापार की आवश्यकताओं पर चर्चा करने के लिए आमंत्रित करते हैं। हमारी टीम आपको सर्वोत्तम गुणवत्ता वाले उत्पादों और सेवाओं के साथ सेवा प्रदान करने के लिए तैयार है।'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=16.05,79.73"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-white transition-all hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: '#2E7D32' }}
            >
              <Navigation size={20} />
              <span>{language === 'en' ? 'Get Directions' : language === 'te' ? 'దిశలను పొందండి' : 'दिशा प्राप्त करें'}</span>
            </a>
            <a
              href="tel:9440171005"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-white transition-all hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: '#43A047' }}
            >
              <Phone size={20} />
              <span>{t.callNow}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer translations={translations} language={language} />
    </div>
  );
}
