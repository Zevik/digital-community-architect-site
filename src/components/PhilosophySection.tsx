const PhilosophySection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-heebo font-bold text-primary mb-6">
              הסיפור שלי הוא הערך המוסף שלכם
            </h2>
            <div className="text-lg font-assistant text-foreground leading-relaxed mb-8 space-y-4">
              <p>
                גדלתי בבית של מנהיגות רוחנית, למדתי כימיה באוניברסיטה, והתאהבתי בכוח של הרשת לחבר בין אנשים. 
                אני לא רק 'איש דיגיטל' – אני בונה גשרים. בין מגזרים, בין טכנולוגיה לאנושיות, ובין המותג שלכם לקהילה שלו.
              </p>
              <p>
                אני מאמין ששיח מכבד הוא לא סיסמה, אלא תשתית. שהטכנולוגיה הטובה ביותר היא זו שמשרתת את האדם. 
                ושהדרך הטובה ביותר ללמד היא בגובה העיניים. זה מה שאני מביא לכל פרויקט, הרצאה או שיעור.
              </p>
            </div>
            <blockquote className="text-xl md:text-2xl font-heebo font-medium text-accent border-r-4 border-accent pr-6 italic">
              "מאחורי כל פרופיל יש בן אדם. המטרה שלי היא להשתמש בטכנולוגיה כדי להזכיר לנו את זה."
            </blockquote>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-96 bg-background rounded-lg flex items-center justify-center border-2 border-border">
              <span className="text-muted-foreground font-assistant">תמונת זאביק נוספת</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;