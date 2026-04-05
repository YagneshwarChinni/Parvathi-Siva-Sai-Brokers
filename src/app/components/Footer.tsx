interface FooterProps {
  translations: any;
  language: 'en' | 'te' | 'hi';
}

export default function Footer({ translations, language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="py-8" style={{ background: 'linear-gradient(90deg, #1B5E20 0%, #2E7D32 50%, #43A047 100%)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            {t.footerText1}
          </p>
          <p className="opacity-90">
            {t.footerText2}
          </p>
          <p className="mt-4 opacity-75">
            &copy; {t.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
