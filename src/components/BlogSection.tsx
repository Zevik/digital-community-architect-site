import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "איך לבנות קהילה דיגיטלית משגשגת",
      excerpt: "המדריך המלא לניהול קהילות פייסבוק עם למעלה מ-50,000 חברים. עקרונות יסוד, טיפים וחוויות מהשטח.",
      date: "15 בינואר 2024",
      image: "blog-post-1"
    },
    {
      title: "אוטומציה חכמה: להפוך את הבוט לעוזר אנושי",
      excerpt: "כיצד לפתח כלי אוטומציה שמשפרים את חווית המשתמש במקום להחליף אותה. דוגמאות מעשיות ותובנות.",
      date: "8 בינואר 2024",
      image: "blog-post-2"
    },
    {
      title: "הכוח של שיח מכבד: מהמזרח התיכון לפייסבוק",
      excerpt: "מה למדתי על בניית גשרים בין מגזרים שונים, וכיצד אפשר ליישם את זה בקהילות דיגיטליות.",
      date: "2 בינואר 2024",
      image: "blog-post-3"
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
                  <span className="text-muted-foreground font-assistant">{post.image}</span>
                </div>
                <CardTitle className="text-xl font-heebo font-bold text-primary line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-assistant leading-relaxed mb-4 line-clamp-3">
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