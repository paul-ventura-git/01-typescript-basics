// An enum is a special "class" that represents a group of constants (unchangeable variables).

// 1. Numeric enums (number)
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
console.log(typeof currentDirection)
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric enums fully initialized (object)

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
console.log(typeof StatusCodes)

// 2. String enums (object)

enum CardinalDirections_2 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections_2.North);
// logs "West"
console.log(CardinalDirections_2.West);
console.log(typeof CardinalDirections_2)