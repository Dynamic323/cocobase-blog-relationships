process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";
import { Cocobase } from "cocobase";

const db = new Cocobase({
  apiKey: "pC54pBPazisjfntxDZlXX7tNWWYCgYBXXnO0YbZn",
  projectId: "e49532d8-504b-4bae-99cb-cba8858cdc1a",
});

const retry = async (fn, retries = 3, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retrying... (${i + 1}/${retries})`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
};

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
async function Createuser(email, psw, age, gender) {
  const user = await db.auth.register(email, psw, {
    age,
    gender,
  });

  return console.log(user);
}

// Fetch a single user by their ID
async function getUserById(userId) {
  // TODO: Filter by id field
}

// Query user by email address
async function getUserByEmail(email) {
  // TODO: Filter by email field
}

// List all available users
async function getAllUsers() {
  // TODO: Return all users array
}

// ============================================================================
// 3. POST OPERATIONS
// ============================================================================

// Create a new blog post with author reference
async function createPost(title, content, authorId) {
  // TODO: Use db.createDocument("post", {...})
  // TODO: Return created post object
}

// Fetch a single post by its ID
async function getPostById(postId) {
  // TODO: Return post object
}

// Fetch all posts WITH their author information
async function getPostsWithAuthors() {}

// Get all posts written by a specific author
async function getPostsByAuthor(authorId) {}

// ============================================================================
// 4. COMMENT OPERATIONS
// ============================================================================

// Create a comment for a post
async function createComment(postId, userId, commentText) {}

// Fetch all comments for a specific post WITH post data
async function getCommentsForPost(postId) {
  // TODO: Return comments array with embedded post/user data
}

// Fetch a post with ALL its comments
async function getPostWithComments(postId) {
  // TODO: Returns all comments that belong to this post
}

// ============================================================================
// 5. ADVANCED QUERIES
// ============================================================================

// Get the most recent posts with limit
async function getRecentPosts(limit) {}

// Search posts by keyword in title
async function searchPosts(keyword) {
  // TODO: Return matching posts
}

// Count total posts per author
async function getPostStats() {
  // TODO: Return statistics object
}

// ============================================================================
// MAIN EXECUTION (for testing)
// ============================================================================

async function main() {
  try {
    console.log("=== COCOBASE RELATIONSHIPS TUTORIAL ===\n");

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

    // 5. Test advanced queries
    // await getRecentPosts(5);
    // await searchPosts("first");
    // await getPostStats();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
