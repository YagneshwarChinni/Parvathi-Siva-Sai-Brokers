import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../utils/translations';

type Language = 'en' | 'te' | 'hi';

export default function About() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* About Hero Section */}
      <section className="relative py-14 sm:py-20 px-4 overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.95), rgba(46, 125, 50, 0.95)), url('https://images.unsplash.com/photo-1626475847607-64715e771242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBncmFpbnN8ZW58MXx8fHwxNzc1MzgwNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight"
            style={{ animation: 'fadeInUp 1s ease-out' }}
          >
            {t.aboutTitle}
          </h1>
          <div className="w-32 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* About Text 1 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-green-700">
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
                {t.aboutText1}
              </p>
            </div>

            {/* About Text 2 */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-green-600">
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
                {t.aboutText2}
              </p>
            </div>

            {/* About Text 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-green-700">
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
                {t.aboutText3}
              </p>
            </div>

            {/* Quote Section */}
            <div className="relative mt-8 sm:mt-12 py-8 sm:py-12 px-5 sm:px-8 rounded-3xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)'
            }}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white italic text-lg sm:text-2xl leading-relaxed max-w-3xl mx-auto">
                  "{t.aboutQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 sm:py-16 px-4" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Our Values */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#C8E6C9' }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: '#1B5E20' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-center mb-6 text-2xl sm:text-3xl" style={{ color: '#1B5E20' }}>
                {language === 'en' ? 'Our Values' : language === 'te' ? 'మా విలువలు' : 'हमारे मूल्य'}
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Quality First - Never compromising on standards' : language === 'te' ? 'నాణ్యత మొదటిది - ప్రమాణాలపై రాజీపడము' : 'गुणवत्ता पहले - मानकों पर कभी समझौता नहीं'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Fair Trade - Ensuring fair prices for farmers' : language === 'te' ? 'న్యాయమైన వ్యాపారం - రైతులకు న్యాయమైన ధరలు' : 'निष्पक्ष व्यापार - किसानों के लिए उचित मूल्य'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Customer Satisfaction - Building lasting relationships' : language === 'te' ? 'కస్టమర్ సంతృప్తి - శాశ్వత సంబంధాలు' : 'ग्राहक संतुष्टि - स्थायी संबंध बनाना'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Transparency - Honest and ethical business practices' : language === 'te' ? 'పారదర్శకత - నిజాయితీ వ్యాపార పద్ధతులు' : 'पारदर्शिता - ईमानदार व्यावसायिक प्रथाएं'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Sustainability - Supporting eco-friendly farming' : language === 'te' ? 'స్థిరత్వం - పర్యావరణ అనుకూల వ్యవసాయం' : 'स्थिरता - पर्यावरण के अनुकूल खेती'}</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#A5D6A7' }}>
                <svg className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: '#1B5E20' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-center mb-6 text-2xl sm:text-3xl" style={{ color: '#1B5E20' }}>
                {language === 'en' ? 'Why Choose Us' : language === 'te' ? 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి' : 'हमें क्यों चुनें'}
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? '35+ years of excellence' : language === 'te' ? '35+ సంవత్సరాల అద్భుతమైన సేవ' : '35+ वर्षों की उत्कृष्टता'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Direct sourcing from trusted farmers' : language === 'te' ? 'విశ్వసనీయ రైతుల నుండి నేరుగా సేకరణ' : 'विश्वसनीय किसानों से सीधी सोर्सिंग'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'State-of-the-art storage facilities' : language === 'te' ? 'ఆధునిక నిల్వ సౌకర్యాలు' : 'अत्याधुनिक भंडारण सुविधाएं'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Rigorous quality control processes' : language === 'te' ? 'కఠినమైన నాణ్యత నియంత్రణ ప్రక్రియలు' : 'कठोर गुणवत्ता नियंत्रण प्रक्रियाएं'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-700 text-lg sm:text-xl">•</span>
                  <span>{language === 'en' ? 'Timely delivery across the region' : language === 'te' ? 'ప్రాంతం అంతటా సకాలంలో డెలివరీ' : 'पूरे क्षेत्र में समय पर डिलीवरी'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer translations={translations} language={language} />
    </div>
  );
}
