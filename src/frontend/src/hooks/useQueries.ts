import { useQuery } from "@tanstack/react-query";
import type { Board, Post, Product } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllBoards() {
  const { actor, isFetching } = useActor();
  return useQuery<Board[]>({
    queryKey: ["boards"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBoards();
    },
    enabled: !!actor && !isFetching,
  });
}
