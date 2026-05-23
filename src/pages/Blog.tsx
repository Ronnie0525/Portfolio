import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog | Freelance Designer Insights Dubai"
        description="Expert insights on branding, advertising, social media marketing, and creative design from Ronnie Balonon Jr. — a leading Dubai-based freelance designer. Tips, guides, and strategies for businesses in the UAE."
        keywords="freelance designer blog Dubai, branding tips Dubai, advertising insights UAE, social media marketing blog, freelance designer blog Dubai"
        canonicalUrl="/blog"
      />

      <section className="section-padding pt-32">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">
              Blog
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Creative <span className="text-gradient">Insights</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Expert perspectives on branding, advertising, and digital marketing in Dubai and the UAE — from the Ronnie Balonon Jr. designer.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-6 md:p-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                      {post.category}
                    </span>
                    <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
