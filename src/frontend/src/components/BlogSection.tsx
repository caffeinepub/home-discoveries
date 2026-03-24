import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";
import type { Post } from "../backend.d";
import { samplePosts } from "../data/sampleData";

function BlogCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-card shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col group"
      data-ocid={`blog.item.${index + 1}`}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16 / 9" }}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div
          className="flex items-center gap-1.5 mb-3"
          style={{ color: "oklch(0.62 0.018 55)" }}
        >
          <Calendar className="w-3.5 h-3.5" />
          <time className="text-xs">{post.date}</time>
        </div>

        <h3
          className="font-serif font-semibold text-lg leading-snug mb-2 flex-1"
          style={{ color: "oklch(0.18 0.02 45)" }}
        >
          {post.title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-3"
          style={{ color: "oklch(0.52 0.022 55)" }}
        >
          {post.excerpt}
        </p>

        <a
          href={`#blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
          style={{ color: "oklch(0.26 0.012 220)" }}
          data-ocid={`blog.link.${index + 1}`}
        >
          Read More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

const SKELETON_KEYS = ["sk-blog-0", "sk-blog-1", "sk-blog-2"];

function BlogSkeleton() {
  return (
    <div className="bg-card rounded-card shadow-card overflow-hidden">
      <Skeleton className="w-full" style={{ aspectRatio: "16/9" }} />
      <div className="p-6 space-y-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

export function BlogSection({
  posts,
  isLoading,
}: { posts?: Post[]; isLoading?: boolean }) {
  const displayPosts = posts && posts.length > 0 ? posts : samplePosts;

  return (
    <section
      id="blog"
      className="py-20 px-4"
      style={{ backgroundColor: "oklch(0.916 0.024 68)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "oklch(0.52 0.022 55)" }}
          >
            Decor Journal
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold"
            style={{ color: "oklch(0.18 0.02 45)" }}
          >
            Latest From The Blog
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.52 0.022 55)" }}
          >
            Styling tips, room reveals, and decor ideas to inspire your next
            home project.
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="blog.loading_state"
          >
            {SKELETON_KEYS.map((key) => (
              <BlogSkeleton key={key} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
