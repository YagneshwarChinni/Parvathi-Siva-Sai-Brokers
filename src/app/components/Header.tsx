import { Languages } from 'lucide-react';
import { Link } from 'react-router';

type Language = 'en' | 'te' | 'hi';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
}

export default function Header({ language, setLanguage, translations }: HeaderProps) {
  const t = translations[language];

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-center gap-3 sm:gap-6 lg:flex-1 lg:justify-center">
              {/* Lord Shiva Family Photo */}
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1716486120678-f040f7aa9310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb3JkJTIwc2hpdmElMjBmYW1pbHklMjBwYXJ2YXRpfGVufDF8fHx8MTc3NTM4MDUzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lord Shiva Family"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-3 border-green-700 shadow-lg"
                />
              </div>

              <div className="text-center">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#1B5E20' }}>
                  {t.title}
                </h1>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2" style={{ color: '#388E3C' }}>
                  {t.subtitle}
                </p>
              </div>

              {/* Sai Baba Photo */}
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1642069695959-3f0515d19390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzYWklMjBiYWJhJTIwc2hpcmRpfGVufDF8fHx8MTc3NTM4MDUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sai Baba"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-3 border-green-700 shadow-lg"
                />
              </div>
            </div>

            {/* Language Selector on Right */}
            <div className="flex justify-center lg:flex-1 lg:justify-end">
              <div className="flex items-center flex-wrap justify-center gap-2">
                <Languages className="text-green-700" size={20} />
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all text-xs sm:text-sm ${
                    language === 'en'
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-green-700 hover:bg-green-100'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('te')}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all text-xs sm:text-sm ${
                    language === 'te'
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-green-700 hover:bg-green-100'
                  }`}
                >
                  తెలుగు
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-all text-xs sm:text-sm ${
                    language === 'hi'
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-green-700 hover:bg-green-100'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-4 sm:mt-6 border-t pt-3 sm:pt-4">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-8">
              <li>
                <Link
                  to="/"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-base sm:text-lg"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-base sm:text-lg"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-base sm:text-lg"
                >
                  {t.location}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-base sm:text-lg"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
