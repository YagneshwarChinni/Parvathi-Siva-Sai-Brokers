import cardImage from 'figma:asset/98dc303a0d4043395afd4bcef35408f81d82c492.png';
import { Phone, MapPin, Mail, Sparkles, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../utils/translations';

type Language = 'en' | 'te' | 'hi';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [counters, setCounters] = useState({ years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 20 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(targets.years * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);
  };

  const t = translations[language];

  const products = [
    {
      name: t.toorDal,
      image: "https://images.unsplash.com/photo-1763368392508-3d4bddfdd20a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsZW50aWxzJTIwYmVhbnMlMjBsZWd1bWVzfGVufDF8fHx8MTc3NTM4MDUzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: t.toorDalDesc
    },
    {
      name: t.greenGram,
      image: "https://images.unsplash.com/photo-1599579085809-4edbc35cee01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxncmFpbnMlMjBwdWxzZXMlMjBzZWVkc3xlbnwxfHx8fDE3NzUzODA1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: t.greenGramDesc
    },
    {
      name: t.allPulses,
      image: "https://images.unsplash.com/photo-1707129746224-213036e7f6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW50aWxzJTIwYmVhbnMlMjBsZWd1bWVzfGVufDF8fHx8MTc3NTM4MDUzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: t.allPulsesDesc
    },
    {
      name: t.assortedGrains,
      image: "https://images.unsplash.com/photo-1705475388190-775066fd69a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFpbnMlMjBwdWxzZXMlMjBzZWVkc3xlbnwxfHx8fDE3NzUzODA1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: t.assortedGrainsDesc
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* Hero Section with Animation */}
      <section className="relative py-20 px-4 overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.9), rgba(46, 125, 50, 0.9)), url('https://images.unsplash.com/photo-1626475847607-64715e771242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBncmFpbnN8ZW58MXx8fHwxNzc1MzgwNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <h2 className="animate-fade-in" style={{
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {t.heroTitle}
          </h2>
          <p className="animate-fade-in-delay" style={{
            fontSize: '1.4rem',
            marginBottom: '3rem',
            maxWidth: '900px',
            margin: '0 auto 3rem',
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}>
            {t.heroSubtitle}
          </p>
        </div>

        {/* Animated Stats Counter */}
        <div ref={statsRef} className="max-w-6xl mx-auto mt-12">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-white/20 max-w-md w-full">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-white" />
              <div className="text-5xl font-bold text-white mb-2">{counters.years}+</div>
              <p className="text-white/90 text-lg">{t.experience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietor Section - Prominent Feature */}
      <section className="py-20 px-4 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)'
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {t.proprietorTitle}
            </h2>
            <div className="w-32 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Proprietor Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NzUzODA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={t.proprietorName}
                    className="w-full rounded-2xl shadow-xl"
                    style={{ maxWidth: '400px' }}
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-8 py-4 shadow-2xl" style={{ backgroundColor: '#43A047' }}>
                    <p className="text-white text-lg">20+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proprietor Details */}
            <div className="text-white space-y-6">
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                {t.proprietorName}
              </h3>
              <div className="w-24 h-1 bg-yellow-400 rounded-full mb-6"></div>

              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {t.proprietorDesc}
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Sparkles className="w-8 h-8 mb-4 text-yellow-300" />
                <p style={{ fontSize: '1.3rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{t.proprietorQuote}"
                </p>
              </div>

              {/* Contact Quick Links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="tel:9440171005"
                  className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={20} />
                  <span>{t.callNow}</span>
                </a>
                <button className="flex items-center gap-2 bg-yellow-400 text-green-900 px-6 py-3 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Mail size={20} />
                  <span>{t.getQuote}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Animations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', color: '#1B5E20', marginBottom: '1rem' }}>
              {t.productsTitle}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>
              {t.productsSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{ border: '3px solid #43A047' }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-green-50">
                  <h3 style={{ color: '#1B5E20', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <span className="text-green-700 font-semibold">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer translations={translations} language={language} />
    </div>
  );
}
