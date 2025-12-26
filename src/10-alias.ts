type UserID = string | number | boolean;

let userId: UserID;

function greeting(userId: UserID) {
  if (typeof userId === 'string') {
    console.log(`string ${userId.toLowerCase()}`);
  }
}

// Literal types
type Sizes = 'S' | 'M' | 'L';
let shirtSize: Sizes;
shirtSize = 'S';
shirtSize = 'M';
shirtSize = 'L';
// shirtSize = 'l';