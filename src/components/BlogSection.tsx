import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "איך הפכתי מקבוצת שכונה קטנה לראש העיר הווירטואלי של ירושלים",
      excerpt: "הסיפור האמיתי מאחורי בניית רשת של 90+ קבוצות פייסבוק עם חצי מיליון חברים. מה התחיל כחלום להכיר את השכנים, הפך לתופעה שמשנה את פני העיר.",
      date: "15 בינואר 2024",
      image: "מסע מקהילה קטנה לעיר שלמה"
    },
    {
      title: "למה אני אוסר על המילים 'החרדים', 'הערבים' ו'השמאלנים' בקבוצות שלי",
      excerpt: "העיקרון שמנחה אותי בניהול חצי מיליון איש: איסור על שפה סטריאוטיפית. איך זה שינה את השיח בירושלים ויצר קהילה אמיתית בעיר מפולגת.",
      date: "12 בינואר 2024",
      image: "מלחמה בסטריאוטיפים"
    },
    {
      title: "האם אני דיקטטור נאור? על כוח, אחריות ודמוקרטיה ברשתות החברתיות",
      excerpt: "התמודדות עם הביקורת הקשה ביותר: 'מי שם אותך?' הרהורים על סמכות בעידן הדיגיטלי, והאחריות הכבדה של מי שמעצב את השיח הציבורי.",
      date: "8 בינואר 2024",
      image: "מנהיגות דיגיטלית באתגר"
    },
    {
      title: "שיימינג ברשתות: כלי צדק או נשק הרס? הדילמות של מנהל קהילה",
      excerpt: "איך מחליטים האם לפרסם פוסט של 'עוזרת הבית גנבה לי' או 'הנה וידאו של מישהו גונב אופניים'? על האיזון העדין בין אינטרס ציבורי לפגיעה אישית.",
      date: "5 בינואר 2024",
      image: "דילמות שיימינג"
    },
    {
      title: "איך יצרתי את מערכת האוטומציה הכי מתקדמת לניהול קהילות בישראל",
      excerpt: "שלוש שנים של פיתוח, עשרות אלפי שורות קוד, ומערכת שפועלת 24/7. מאחורי הקלעים של האימפריה הטכנولוגית שמנהלת חצי מיליון איש.",
      date: "2 בינואר 2024",
      image: "טכנולוגיה מתקדמת"
    },
    {
      title: "מעבר לפייסבוק: איך קהילות דיגיטליות משנות את המציאות הפיזית",
      excerpt: "הסינרגיה בין הוירטואלי לפיזי. איך פוסט על מדרכה שבורה הופך לתיקון בשטח, ומה קורה כשהמציאות הדיגיטלית מעצבת עיר שלמה.",
      date: "28 בדצמבר 2023",
      image: "מהווירטואלי לאמיתי"  
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-primary mb-4">
            מאמרים ומדריכים מהשטח
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center mb-4">
                  <span className="text-muted-foreground font-assistant text-center p-4">{post.image}</span>
                </div>
                <CardTitle className="text-xl font-heebo font-bold text-primary line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-assistant leading-relaxed mb-4 line-clamp-4">
                  {post.excerpt}
                </p>
                <p className="text-sm text-accent font-assistant">
                  {post.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;