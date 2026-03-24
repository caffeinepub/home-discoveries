import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BlogSection } from "./components/BlogSection";
import { HeroSection } from "./components/HeroSection";
import { PinterestBoards } from "./components/PinterestBoards";
import { ProductGrid } from "./components/ProductGrid";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  useGetAllBoards,
  useGetAllPosts,
  useGetAllProducts,
} from "./hooks/useQueries";

const queryClient = new QueryClient();

function HomePageContent() {
  const { data: products, isLoading: productsLoading } = useGetAllProducts();
  const { data: posts, isLoading: postsLoading } = useGetAllPosts();
  const { data: boards } = useGetAllBoards();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <PinterestBoards boards={boards} />
        <ProductGrid products={products} isLoading={productsLoading} />
        <BlogSection posts={posts} isLoading={postsLoading} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePageContent />
    </QueryClientProvider>
  );
}
