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
 
 * Relationships Covered:
 * - User → Posts (One-to-Many: One user has many posts)
 * - Post → User (Many-to-One: Many posts belong to one user)
 * - Post → Comments (One-to-Many: One post has many comments)
 
 * Collections:
 * - appuser (Cocobase built-in authentication users)
 * - post (title, content, author_id)
 * - comment (post_id, comment, user_id)
 
 * Focus on backend logic - these functions work in ANY framework
 * (React, Next.js, Vue, vanilla HTML/JS, etc.)
 * ============================================================================
 */

// ============================================================================
// 2. USER OPERATIONS
// ============================================================================

// Fetch a single user by their ID
// Demonstrates: Basic document retrieval with filters
async function getUserById(userId) {
  // TODO: Use db.auth.listUsers() with filters
  // TODO: Filter by id field
  // TODO: Return user object
}

// Query user by email address
// Demonstrates: Filtering with WHERE clause equivalent
async function getUserByEmail(email) {
  // TODO: Use db.auth.listUsers() with filters
  // TODO: Filter by email field
  // TODO: Return matching user
}

// List all available users
// Demonstrates: Fetching all documents from a collection
async function getAllUsers() {
  // TODO: Use db.auth.listUsers() without filters
  // TODO: Return all users array
}

// ============================================================================
// 3. POST OPERATIONS
// ============================================================================

// Create a new blog post with author reference
// Demonstrates: One-to-Many relationship (User has many Posts)
// The author_id field creates the relationship between post and user
async function createPost(title, content, authorId) {
  // TODO: Use db.createDocument("post", {...})
  // TODO: Include title, content, and author_id fields
  // TODO: author_id links this post to a user (foreign key)
  // TODO: Return created post object
}

// Fetch a single post by its ID
// Demonstrates: Simple document retrieval by primary key
async function getPostById(postId) {
  // TODO: Use db.getDocument("post", postId)
  // TODO: Return post object
}

// Fetch all posts WITH their author information
// Demonstrates: POPULATE/JOIN to combine related documents
// This is where the magic happens - we fetch posts AND user data in one query
async function getPostsWithAuthors() {
  // TODO: Use db.listDocuments("post", {...})
  // TODO: Add populate: ["author_id:appuser"]
  // TODO: This joins post.author_id with appuser collection
  // TODO: Returns posts with full author objects embedded
}

// Get all posts written by a specific author
// Demonstrates: Filtering documents with WHERE clause
async function getPostsByAuthor(authorId) {
  // TODO: Use db.listDocuments("post", {...})
  // TODO: Add filters: { author_id: authorId }
  // TODO: Optionally populate author data
  // TODO: Return filtered posts array
}

// ============================================================================
// 4. COMMENT OPERATIONS
// ============================================================================

// Create a comment for a post
// Demonstrates: One-to-Many relationship (Post has many Comments)
// Each comment has post_id (links to post) and user_id (links to commenter)
async function createComment(postId, userId, commentText) {
  // TODO: Use db.createDocument("comment", {...})
  // TODO: Include post_id, user_id, and comment fields
  // TODO: post_id creates relationship to the post
  // TODO: Return created comment object
}

// Fetch all comments for a specific post WITH post data
// Demonstrates: JOIN query with populate to get related data
async function getCommentsForPost(postId) {
  // TODO: Use db.listDocuments("comment", {...})
  // TODO: Add filters: { post_id: postId }
  // TODO: Add populate: ["post_id:post"] to include post data
  // TODO: Optionally populate user_id to get commenter info
  // TODO: Return comments array with embedded post/user data
}

// Fetch a post with ALL its comments
// Demonstrates: Reverse relationship - get post then its comments
async function getPostWithComments(postId) {
  // TODO: Use db.listDocuments("comment", {...})
  // TODO: Filter by post_id
  // TODO: Populate post_id to include full post data
  // TODO: Returns all comments that belong to this post
}

// ============================================================================
// 5. ADVANCED QUERIES
// ============================================================================

// Get the most recent posts with limit
// Demonstrates: Sorting and limiting results
async function getRecentPosts(limit) {
  // TODO: Use db.listDocuments("post", {...})
  // TODO: Add sort/order by createdAt descending
  // TODO: Add limit parameter
  // TODO: Optionally populate author data
  // TODO: Return sorted, limited posts array
}

// Search posts by keyword in title
// Demonstrates: Text search with LIKE/CONTAINS operator
async function searchPosts(keyword) {
  // TODO: Use db.listDocuments("post", {...})
  // TODO: Add filters: { title_contains: keyword }
  // TODO: Cocobase automatically does partial matching
  // TODO: Return matching posts
}

// Count total posts per author
// Demonstrates: Aggregation and statistics
async function getPostStats() {
  // TODO: Fetch all posts
  // TODO: Group by author_id
  // TODO: Count posts per author
  // TODO: Return statistics object
}

// ============================================================================
// MAIN EXECUTION (for testing)
// ============================================================================

async function main() {
  try {
    console.log("=== COCOBASE RELATIONSHIPS TUTORIAL ===\n");

    // 2. Test user operations
    console.log("--- User Operations ---");
    // await getUserById("your-user-id");
    // await getUserByEmail("user@example.com");
    // await getAllUsers();

    // 3. Test post operations
    console.log("\n--- Post Operations ---");
    // await createPost("My First Post", "This is the content", "user-id");
    // await getPostById("post-id");
    // await getPostsWithAuthors(); // Shows JOIN in action
    // await getPostsByAuthor("user-id");

    // 4. Test comment operations
    console.log("\n--- Comment Operations ---");
    // await createComment("post-id", "user-id", "Great post!");
    // await getCommentsForPost("post-id");
    // await getPostWithComments("post-id");

    // 5. Test advanced queries
    console.log("\n--- Advanced Queries ---");
    // await getRecentPosts(5);
    // await searchPosts("first");
    // await getPostStats();

    console.log("\n✓ Tutorial complete!");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
