import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Product = {
    name : Text;
    description : Text;
    price : Text;
    imageUrl : Text;
    affiliateUrl : Text;
    category : Text;
  };

  type Post = {
    title : Text;
    excerpt : Text;
    body : Text;
    date : Text;
    imageUrl : Text;
    slug : Text;
  };

  type Board = {
    boardName : Text;
    boardUrl : Text;
    description : Text;
  };

  module Board {
    public func compare(board1 : Board, board2 : Board) : Order.Order {
      Text.compare(board1.boardName, board2.boardName);
    };
  };

  module Post {
    public func compare(post1 : Post, post2 : Post) : Order.Order {
      Text.compare(post1.title, post2.title);
    };
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  let products = Map.fromArray<Text, Product>([("1", {
    name = "Mid-Century Modern Sofa";
    description = "A stylish and comfortable sofa with a mid-century modern design.";
    price = "$899.99";
    imageUrl = "https://cdn.home.com/img1.jpg";
    affiliateUrl = "https://affiliate.com/sofa";
    category = "Furniture";
  })]);
  products.add("2", {
    name = "Geometric Area Rug";
    description = "A vibrant area rug with geometric patterns.";
    price = "$299.99";
    imageUrl = "https://cdn.home.com/img2.jpg";
    affiliateUrl = "https://affiliate.com/rug";
    category = "Rugs";
  });

  let posts = Map.fromArray<Text, Post>([("1", {
    title = "10 Cozy Living Room Ideas";
    excerpt = "Transform your living room into a cozy oasis.";
    body = "Full article content goes here...";
    date = "2024-06-22";
    imageUrl = "https://cdn.home.com/post1.jpg";
    slug = "cozy-living-room-ideas";
  })]);
  posts.add("2", {
    title = "Minimalist Bedroom Designs";
    excerpt = "Create a serene and minimalist bedroom.";
    body = "Full article content goes here...";
    date = "2024-06-21";
    imageUrl = "https://cdn.home.com/post2.jpg";
    slug = "minimalist-bedroom-designs";
  });

  let boards = Map.fromArray<Text, Board>([("1", {
    boardName = "Living Room Inspiration";
    boardUrl = "https://www.pinterest.com/home/living-room";
    description = "A collection of living room decor ideas.";
  })]);
  boards.add("2", {
    boardName = "Bedroom Designs";
    boardUrl = "https://www.pinterest.com/home/bedroom";
    description = "Curated bedroom design inspiration.";
  });

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getAllPosts() : async [Post] {
    posts.values().toArray().sort();
  };

  public query ({ caller }) func getAllBoards() : async [Board] {
    boards.values().toArray().sort();
  };

  public query ({ caller }) func getProductById(id : Text) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getPostById(id : Text) : async Post {
    switch (posts.get(id)) {
      case (null) { Runtime.trap("Post not found") };
      case (?post) { post };
    };
  };

  public query ({ caller }) func getBoardById(id : Text) : async Board {
    switch (boards.get(id)) {
      case (null) { Runtime.trap("Board not found") };
      case (?board) { board };
    };
  };

  public shared ({ caller }) func addProduct(id : Text, product : Product) : async () {
    if (products.containsKey(id)) { Runtime.trap("Product with this id already exists") };
    products.add(id, product);
  };

  public shared ({ caller }) func updateProduct(id : Text, product : Product) : async () {
    if (not products.containsKey(id)) { Runtime.trap("Product not found") };
    products.add(id, product);
  };

  public shared ({ caller }) func removeProduct(id : Text) : async () {
    if (not products.containsKey(id)) { Runtime.trap("Product not found") };
    products.remove(id);
  };

  public shared ({ caller }) func addPost(id : Text, post : Post) : async () {
    if (posts.containsKey(id)) { Runtime.trap("Post with this id already exists") };
    posts.add(id, post);
  };

  public shared ({ caller }) func updatePost(id : Text, post : Post) : async () {
    if (not posts.containsKey(id)) { Runtime.trap("Post not found") };
    posts.add(id, post);
  };

  public shared ({ caller }) func removePost(id : Text) : async () {
    if (not posts.containsKey(id)) { Runtime.trap("Post not found") };
    posts.remove(id);
  };

  public shared ({ caller }) func addBoard(id : Text, board : Board) : async () {
    if (boards.containsKey(id)) { Runtime.trap("Board with this id already exists") };
    boards.add(id, board);
  };

  public shared ({ caller }) func updateBoard(id : Text, board : Board) : async () {
    if (not boards.containsKey(id)) { Runtime.trap("Board not found") };
    boards.add(id, board);
  };

  public shared ({ caller }) func removeBoard(id : Text) : async () {
    if (not boards.containsKey(id)) { Runtime.trap("Board not found") };
    boards.remove(id);
  };
};
