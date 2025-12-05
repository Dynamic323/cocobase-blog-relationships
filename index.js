process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";
import { Cocobase } from "cocobase";

const db = new Cocobase({
  apiKey: "pC54pBPazisjfntxDZlXX7tNWWYCgYBXXnO0YbZn",
  projectId: "e49532d8-504b-4bae-99cb-cba8858cdc1a",
});

/**
 * ============================================================================
 * COCOBASE BLOG APPLICATION - RELATIONSHIPS TUTORIAL
 * Master Blog Relationships: Users, Posts & Comments with Cocobase 🔥 (No Backend Skills Needed!)
 * ============================================================================
 *
 * Project: Blog System demonstrating database relationships in Cocobase
 * Purpose: Learn how to handle One-to-Many, Many-to-One relationships

* What You'll Learn:
 * - Connecting to Cocobase (modern BaaS at https://cocobase.buzz)
 * - CRUD operations (Create, Read, Update, Delete)
 * - Populate/JOIN queries to fetch related data
 * - Filtering and searching documents
 */

// ============================================================================
// 2. USER OPERATIONS
// ============================================================================
// async function Createuser(email, psw, age, Role) {
//   await db.auth.register(email, psw, {
//     age,
//     Role,
//   });

//   return console.log(db.auth.getUser());

// }

// Fetch a single user by their ID
// async function getUserById(userId) {
//   const user = await db.auth.listUsers({
//     filters: { id: userId },
//   });

//   return console.log(user);
// }

// getUserById("40804ee0-803f-4211-ba19-ca9befb2ed5d");

// Query user by email address

// async function getUserByEmail(email) {
//   // TODO: Filter by email field
//   const user = await db.auth.listUsers({
//     filters: { email: email },
//   });

//   return console.log(user);
// }

// getUserByEmail("otamereisrael8@gmail.com");

// List all available users
// async function getAllUsers() {
//   const all_users = await db.auth.listUsers();

//   return console.log(all_users);
// }
// getAllUsers();

// ============================================================================
// 3. POST OPERATIONS
// ============================================================================

// await db.auth.getUser()

// Create a new blog post with author reference
// async function createPost(title, content, user_id) {
//   // TODO: Use db.createDocument("post", {...})
//   // TODO: Return created post object

//   const post = await db.createDocument("post", {
//     title,
//     content,
//     author_id: user_id,
//   });

//   return console.log(post);
// }

// createPost(
//   "How Make money online in 2025",
//   "This is how to Make money online in 2025!",
//   "40804ee0-803f-4211-ba19-ca9befb2ed5d"
// );

// createPost(
//   "How to kill a monkey",
//   "This is how to kill a monkey!",
//   "4277958e-f3d9-43ca-89ed-1fb3c22203fc"
// );

// Fetch a single post by its ID
// async function getPostById(postId) {
//   // TODO: Return post object
//   const post = await db.listDocuments("post", {
//     filters: { title: "How to kill a monkey" },
//     limit: 1,
//   });
//   return console.log(post);
// }

// getPostById("6c9d51ce-791b-4b39-b345-32b38d642388");

// Fetch all posts WITH their author information
// async function getPostsWithAuthors() {
//   const postInfo = await db.listDocuments("post", {
//     populate: ["author_id:appuser"],
//   });
//   return console.log(JSON.stringify(postInfo, null, 2));
// }

// getPostsWithAuthors();

// Get all posts written by a specific author
// async function getPostsByAuthor(authorId) {
//   const posts_author = await db.listDocuments("post", {
//     filters: { author_id: authorId },
//     populate: ["author_id:appuser"],
//   });

//   return console.log(JSON.stringify(posts_author, null, 2));
// }
// getPostsByAuthor("40804ee0-803f-4211-ba19-ca9befb2ed5d");
// ============================================================================
// 4. COMMENT OPERATIONS
// ============================================================================
// const post = await db.listDocuments("post");
// console.log(post);

// Create a comment for a post
async function createComment(postId, userId, commentText) {
  const comment = await db.createDocument("comments", {
    post_id: postId,
    user_id: userId,
    commentText,
  });

  return console.log(comment);
}

// createComment(
//   "86097a61-b54d-41d9-9e60-ffbb3c6c9c40",
//   "40804ee0-803f-4211-ba19-ca9befb2ed5d",
//   "WOW i learnt a new skill today!"
// );

// Fetch all comments for a specific post WITH post data
// async function getCommentsForPost(postId) {
//   // TODO: Return comments array with embedded post/user data
//   const comment = await db.listDocuments("comments", {
//     filters: { post_id: postId },
//     populate: ["post_id:post"],
//   });

//   return console.log(JSON.stringify(comment, null, 2));
// }

// getCommentsForPost("86097a61-b54d-41d9-9e60-ffbb3c6c9c40");

async function main() {
  try {
    console.log("=== COCOBASE RELATIONSHIPS TUTORIAL ===\n");
    // Createuser("nelson@gmail.com", "1111111", 17, "User");
    // 2. Test user operations
    // Createuser("otamereisrael8@gmail.com", "12121212", 12, "M");
    // await getUserById("your-user-id");
    // await getUserByEmail("user@example.com");
    // await getAllUsers();

    // await createPost("My First Post", "This is the content", "user-id");
    // await getPostById("post-id");
    // await getPostsWithAuthors(); // Shows JOIN in action
    // await getPostsByAuthor("user-id");

    // 4. Test comment operations
    // await createComment("post-id", "user-id", "Great post!");
    // await getCommentsForPost("post-id");
    // await getPostWithComments("post-id");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
