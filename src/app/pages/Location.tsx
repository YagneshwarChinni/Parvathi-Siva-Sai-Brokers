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
      <section className="relative py-20 px-4 overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.95), rgba(46, 125, 50, 0.95)), url('https://images.unsplash.com/photo-1626475847607-64715e771242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBncmFpbnN8ZW58MXx8fHwxNzc1MzgwNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h1 style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {t.locationTitle}
          </h1>
          <div className="w-32 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
          <p className="text-xl">
            2PWP+3M6, Vinukonda, Andhra Pradesh, India
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ border: '4px solid #43A047' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.897!2d79.73!3d16.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzAwLjAiTiA3OcKwNDMnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
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
      <section className="py-16 px-4" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#C8E6C9' }}>
                <MapPin style={{ color: '#1B5E20' }} size={32} />
              </div>
              <h3 className="text-center mb-4" style={{ color: '#1B5E20', fontSize: '1.5rem' }}>
                {t.officeAddress}
              </h3>
              <p className="text-center text-gray-700 text-lg">
                2PWP+3M6, Vinukonda<br />
                Andhra Pradesh<br />
                India
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#A5D6A7' }}>
                <Phone style={{ color: '#1B5E20' }} size={32} />
              </div>
              <h3 className="text-center mb-4" style={{ color: '#1B5E20', fontSize: '1.5rem' }}>
                {t.contactNumbers}
              </h3>
              <div className="text-center text-gray-700">
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
            <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#81C784' }}>
                <Clock style={{ color: '#1B5E20' }} size={32} />
              </div>
              <h3 className="text-center mb-4" style={{ color: '#1B5E20', fontSize: '1.5rem' }}>
                {language === 'en' ? 'Business Hours' : language === 'te' ? 'వ్యాపార సమయం' : 'व्यवसाय के घंटे'}
              </h3>
              <div className="text-center text-gray-700">
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

      {/* Godown Locations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', color: '#1B5E20', marginBottom: '1rem' }}>
              {t.godownContacts}
            </h2>
            <div className="w-32 h-1 bg-green-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Godown Contact 1 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-green-700">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#C8E6C9' }}>
                  <Navigation style={{ color: '#1B5E20' }} size={24} />
                </div>
                <div>
                  <h3 style={{ color: '#1B5E20', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    M.N.Rao
                  </h3>
                  <a href="tel:9416017400" className="text-green-700 hover:text-green-900 text-lg font-semibold">
                    94160 17400
                  </a>
                </div>
              </div>
            </div>

            {/* Godown Contact 2 */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#A5D6A7' }}>
                  <Navigation style={{ color: '#1B5E20' }} size={24} />
                </div>
                <div>
                  <h3 style={{ color: '#1B5E20', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    Giddalur Kishore
                  </h3>
                  <a href="tel:9473726776" className="text-green-700 hover:text-green-900 text-lg font-semibold">
                    94737 26776
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontSize: '2.5rem', color: '#1B5E20', marginBottom: '1.5rem' }}>
            {language === 'en' ? 'Visit Us Today' : language === 'te' ? 'ఈరోజే మమ్మల్ని సందర్శించండి' : 'आज ही हमसे मिलें'}
          </h2>
          <p className="text-gray-700 text-lg mb-8">
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
              className="px-8 py-4 rounded-xl text-white transition-all hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: '#2E7D32' }}
            >
              <Navigation size={20} />
              <span>{language === 'en' ? 'Get Directions' : language === 'te' ? 'దిశలను పొందండి' : 'दिशा प्राप्त करें'}</span>
            </a>
            <a
              href="tel:9440171005"
              className="px-8 py-4 rounded-xl text-white transition-all hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
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
