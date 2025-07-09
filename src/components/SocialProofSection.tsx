const SocialProofSection = () => {
  const mediaLogos = [
    { name: "Mako", logo: "MAKO" },
    { name: "וואלה!", logo: "וואלה!" },
    { name: "מקור ראשון", logo: "מקור ראשון" },
    { name: "כיפה", logo: "כיפה" },
    { name: "סרוגים", logo: "סרוגים" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-assistant text-muted-foreground mb-8">
            התארחתי ב:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {mediaLogos.map((media, index) => (
              <div 
                key={index} 
                className="text-xl md:text-2xl font-heebo font-medium text-primary/70 hover:text-primary transition-colors duration-200"
              >
                {media.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;