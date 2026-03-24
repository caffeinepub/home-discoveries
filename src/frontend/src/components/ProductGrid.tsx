import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import type { Product } from "../backend.d";
import { sampleProducts } from "../data/sampleData";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-card rounded-card shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col group"
      data-ocid={`products.item.${index + 1}`}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={
            product.imageUrl ||
            "/assets/generated/product-throw-pillows.dim_600x600.jpg"
          }
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: "oklch(0.916 0.024 68)",
            color: "oklch(0.52 0.022 55)",
          }}
        >
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-serif font-semibold text-base leading-snug mb-1"
          style={{ color: "oklch(0.18 0.02 45)" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs mb-3 flex-1 line-clamp-2"
          style={{ color: "oklch(0.52 0.022 55)" }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-lg font-bold font-serif"
            style={{ color: "oklch(0.26 0.012 220)" }}
          >
            {product.price}
          </span>
        </div>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: "oklch(0.26 0.012 220)", color: "#fff" }}
          data-ocid={`products.button.${index + 1}`}
        >
          <ShoppingCart className="w-4 h-4" />
          View on Amazon
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
        <p
          className="text-[11px] text-center mt-2"
          style={{ color: "oklch(0.62 0.018 55)" }}
        >
          *Affiliate Link
        </p>
      </div>
    </motion.article>
  );
}

const SKELETON_KEYS = ["sk-prod-0", "sk-prod-1", "sk-prod-2", "sk-prod-3"];

function ProductSkeleton() {
  return (
    <div className="bg-card rounded-card shadow-card overflow-hidden">
      <Skeleton className="w-full aspect-square" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
}

export function ProductGrid({
  products,
  isLoading,
}: { products?: Product[]; isLoading?: boolean }) {
  const displayProducts =
    products && products.length > 0 ? products : sampleProducts;

  return (
    <section
      id="products"
      className="py-20 px-4"
      style={{ backgroundColor: "oklch(0.96 0.012 68)" }}
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
            Amazon Picks
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold"
            style={{ color: "oklch(0.18 0.02 45)" }}
          >
            Top Product Picks
          </h2>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.52 0.022 55)" }}
          >
            Carefully curated home decor products — hand-picked for quality,
            style, and value.
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="products.loading_state"
          >
            {SKELETON_KEYS.map((key) => (
              <ProductSkeleton key={key} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        )}

        <p
          className="text-center text-xs mt-8"
          style={{ color: "oklch(0.62 0.018 55)" }}
        >
          As an Amazon Associate, I earn from qualifying purchases. This site
          contains affiliate links.
        </p>
      </div>
    </section>
  );
}
