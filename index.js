process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";
import { Cocobase } from "cocobase";

const db = new Cocobase({
  apiKey: "",
  projectId: "",
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
async function Createuser(email, psw, age, gender) {}

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

  } catch (error) {
    console.error("Error:", error);
  }
}

main();
