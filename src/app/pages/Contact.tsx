import { Phone, MapPin, Mail, User, Warehouse } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../utils/translations';
import { motion } from 'motion/react';

type Language = 'en' | 'te' | 'hi';

export default function Contact() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const godownManagers = [
    {
      name: 'Maguluri Srinivas Rao',
      phone: '96186 17820',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBidXNpbmVzc21hbnxlbnwwfHx8fDE2OTcwNDU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Gudipati Kishore',
      phone: '94939 26798',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW58ZW58MHx8fHwxNjk3MDQ1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* Hero Section */}
      <section className="relative py-14 sm:py-16 px-4 overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.95), rgba(46, 125, 50, 0.95)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3YXJlaG91c2UlMjBidWlsZGluZ3xlbnwwfHx8fDE2OTcwNDU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight"
          >
            {t.contactTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-base sm:text-xl"
          >
            {language === 'en' ? 'Reach out to us for all your pulse trading needs' : language === 'te' ? 'మీ అన్ని పప్పుల వ్యాపార అవసరాల కోసం మమ్మల్ని సంప్రదించండి' : 'अपनी सभी दाल व्यापार आवश्यकताओं के लिए हमसे संपर्क करें'}
          </motion.p>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Phone Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ border: '3px solid #43A047' }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 sm:p-6 rounded-full" style={{ backgroundColor: '#C8E6C9' }}>
                  <Phone className="text-green-700" size={34} />
                </div>
              </div>
              <h3 className="text-center text-green-800 mb-4 text-xl sm:text-2xl">
                {t.contactNumbers}
              </h3>
              <div className="space-y-3 text-center">
                <div>
                  <p className="text-gray-600 mb-1">{t.cell}</p>
                  <a href="tel:9440171005" className="text-green-700 hover:text-green-900 text-lg sm:text-xl">
                    9440171005
                  </a>
                  <br />
                  <a href="tel:8885273955" className="text-green-700 hover:text-green-900 text-lg sm:text-xl">
                    8885273955
                  </a>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-600 mb-1">{t.office}</p>
                  <a href="tel:08646274055" className="text-green-700 hover:text-green-900 text-lg sm:text-xl">
                    08646 - 274955
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ border: '3px solid #43A047' }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 sm:p-6 rounded-full" style={{ backgroundColor: '#A5D6A7' }}>
                  <MapPin className="text-green-700" size={34} />
                </div>
              </div>
              <h3 className="text-center text-green-800 mb-4 text-xl sm:text-2xl">
                {t.officeAddress}
              </h3>
              <div className="text-center">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  2PWP+3M6, Vinukonda<br />
                  Andhra Pradesh<br />
                  India
                </p>
              </div>
            </motion.div>

            {/* Proprietor Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:col-span-2 xl:col-span-1"
              style={{ border: '3px solid #43A047' }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 sm:p-6 rounded-full" style={{ backgroundColor: '#81C784' }}>
                  <User className="text-green-700" size={34} />
                </div>
              </div>
              <h3 className="text-center text-green-800 mb-4 text-xl sm:text-2xl">
                {t.proprietor}
              </h3>
              <div className="text-center">
                <p className="text-gray-900 text-xl sm:text-2xl mb-2">
                  {t.proprietorName}
                </p>
                <p className="text-gray-600">
                  {language === 'en' ? 'Proprietor & Founder' : language === 'te' ? 'యజమాని & వ్యవస్థాపకుడు' : 'स्वामी और संस्थापक'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Employee Contacts Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center items-center gap-4 mb-4">
                <Warehouse className="text-green-700" size={36} />
                <h2 className="text-green-800 text-3xl sm:text-4xl">
                  {t.godownContacts}
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-xl">
                {language === 'en' ? 'Our dedicated employees are here to assist you' : language === 'te' ? 'మా అంకిత ఉద్యోగులు మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నారు' : 'हमारे समर्पित कर्मचारी आपकी सहायता के लिए यहां हैं'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
              {godownManagers.map((manager, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500" style={{ border: '3px solid #43A047' }}>
                    {/* Photo Section */}
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/50 z-10"></div>
                      <img
                        src={manager.image}
                        alt={manager.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Details Section */}
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-white to-green-50">
                      <h3 className="text-green-800 mb-3 text-2xl sm:text-3xl">
                        {manager.name}
                      </h3>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-full" style={{ backgroundColor: '#C8E6C9' }}>
                          <Phone className="text-green-700" size={24} />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm mb-1">
                            {language === 'en' ? 'Direct Line' : language === 'te' ? 'నేరుగా కాల్' : 'सीधी लाइन'}
                          </p>
                          <a
                            href={`tel:${manager.phone.replace(/\s/g, '')}`}
                            className="text-green-700 hover:text-green-900 transition-colors text-xl sm:text-2xl"
                          >
                            {manager.phone}
                          </a>
                        </div>
                      </div>

                      {/* Call Button */}
                      <a
                        href={`tel:${manager.phone.replace(/\s/g, '')}`}
                        className="block w-full text-center py-3.5 sm:py-4 rounded-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-6 text-sm sm:text-base"
                        style={{ backgroundColor: '#2E7D32' }}
                      >
                        <Phone className="inline-block mr-2" size={20} />
                        {language === 'en' ? 'Call Now' : language === 'te' ? 'ఇప్పుడు కాల్ చేయండి' : 'अभी कॉल करें'}
                      </a>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="hidden sm:block absolute -z-10 top-4 right-4 w-full h-full rounded-3xl" style={{ backgroundColor: '#C8E6C9' }}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer translations={translations} language={language} />
    </div>
  );
}
