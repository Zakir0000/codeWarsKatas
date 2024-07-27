/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  if (health <= 0) {
    return 'Health cannot go below +0';
  }
  return health - damage < 0 ? 0 : health - damage;
}

console.log(combat(100, 5));
