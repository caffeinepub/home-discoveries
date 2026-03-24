import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Board {
    description: string;
    boardUrl: string;
    boardName: string;
}
export interface Product {
    name: string;
    description: string;
    affiliateUrl: string;
    imageUrl: string;
    category: string;
    price: string;
}
export interface Post {
    title: string;
    body: string;
    date: string;
    slug: string;
    imageUrl: string;
    excerpt: string;
}
export interface backendInterface {
    addBoard(id: string, board: Board): Promise<void>;
    addPost(id: string, post: Post): Promise<void>;
    addProduct(id: string, product: Product): Promise<void>;
    getAllBoards(): Promise<Array<Board>>;
    getAllPosts(): Promise<Array<Post>>;
    getAllProducts(): Promise<Array<Product>>;
    getBoardById(id: string): Promise<Board>;
    getPostById(id: string): Promise<Post>;
    getProductById(id: string): Promise<Product>;
    removeBoard(id: string): Promise<void>;
    removePost(id: string): Promise<void>;
    removeProduct(id: string): Promise<void>;
    updateBoard(id: string, board: Board): Promise<void>;
    updatePost(id: string, post: Post): Promise<void>;
    updateProduct(id: string, product: Product): Promise<void>;
}
