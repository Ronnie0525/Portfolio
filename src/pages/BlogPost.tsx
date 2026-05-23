import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <Layout>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        faqItems={post.faqItems}
        breadcrumbs={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article className="section-padding pt-32">
        <div className="container-custom max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime} read</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.content.map((section, i) => {
              switch (section.type) {
                case "h2":
                  return <h2 key={i} className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-4">{section.content}</h2>;
                case "h3":
                  return <h3 key={i} className="font-heading text-xl font-bold mt-8 mb-3">{section.content}</h3>;
                case "paragraph":
                  return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>;
                case "list":
                  return (
                    <ul key={i} className="space-y-2 mb-6 ml-4">
                      {section.items?.map((item, j) => (
                        <li key={j} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "cta":
                  return (
                    <div key={i} className="glass-card p-8 rounded-2xl text-center my-12">
                      <p className="text-foreground font-medium text-lg mb-4">{section.content}</p>
                      <Button variant="hero" size="lg" asChild>
                        <Link to="/contact">Contact Me <ArrowRight className="w-5 h-5" /></Link>
                      </Button>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>

          {/* FAQ Section */}
          {post.faqItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faqItems.map((faq, i) => (
                  <div key={i} className="glass-card p-6 rounded-xl">
                    <h3 className="font-heading font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Internal Links */}
          <div className="mt-16 glass-card p-8 rounded-2xl">
            <h3 className="font-heading text-xl font-bold mb-4">Explore My Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Branding", link: "/services/branding" },
                { label: "Social Media", link: "/services/social" },
                { label: "UI/UX Design", link: "/services/uiux" },
                { label: "Motion Graphics", link: "/services/motion" },
                { label: "Video Production", link: "/services/video" },
                { label: "Contact Me", link: "/contact" },
              ].map((s) => (
                <Link key={s.link} to={s.link} className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="font-heading text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all group">
                    <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{rp.title}</h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
