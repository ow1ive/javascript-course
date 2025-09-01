// JavaScript Fundamentals Part 2 - Hour 3

// Coding Challenge #3 - User Profile System
const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    this.calcAge(); // Ensure age is calculated
    const statusText = this.isActive ? "Active" : "Inactive";
    return `
Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Location: ${this.location}
Status: ${statusText}
Interests: ${this.interests.join(", ")}
Total Friends: ${this.friends.length}
Active Friends: ${this.getActiveFriends()}
    `.trim();
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());
