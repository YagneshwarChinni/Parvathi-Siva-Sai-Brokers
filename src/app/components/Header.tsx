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
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Centered Title with Religious Photos */}
            <div className="flex-1"></div>

            <div className="flex items-center gap-6 justify-center">
              {/* Lord Shiva Family Photo */}
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1716486120678-f040f7aa9310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb3JkJTIwc2hpdmElMjBmYW1pbHklMjBwYXJ2YXRpfGVufDF8fHx8MTc3NTM4MDUzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lord Shiva Family"
                  className="w-16 h-16 rounded-full object-cover border-3 border-green-700 shadow-lg"
                />
              </div>

              <div className="text-center">
                <h1 style={{
                  color: '#1B5E20',
                  fontSize: '2.5rem',
                  fontWeight: '700'
                }}>
                  {t.title}
                </h1>
                <p style={{ color: '#388E3C', marginTop: '0.5rem' }}>
                  {t.subtitle}
                </p>
              </div>

              {/* Sai Baba Photo */}
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1642069695959-3f0515d19390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzYWklMjBiYWJhJTIwc2hpcmRpfGVufDF8fHx8MTc3NTM4MDUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sai Baba"
                  className="w-16 h-16 rounded-full object-cover border-3 border-green-700 shadow-lg"
                />
              </div>
            </div>

            {/* Language Selector on Right */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center gap-2">
                <Languages className="text-green-700" size={20} />
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-2 rounded-lg transition-all text-sm ${
                    language === 'en'
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-green-700 hover:bg-green-100'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('te')}
                  className={`px-3 py-2 rounded-lg transition-all text-sm ${
                    language === 'te'
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-green-700 hover:bg-green-100'
                  }`}
                >
                  తెలుగు
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-2 rounded-lg transition-all text-sm ${
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
          <nav className="mt-6 border-t pt-4">
            <ul className="flex justify-center gap-8">
              <li>
                <Link
                  to="/"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-lg"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-lg"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-lg"
                >
                  {t.location}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-green-700 hover:text-green-900 transition-colors font-medium text-lg"
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
