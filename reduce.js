// Summing an array of numbers:
//acc = accumulator and curr = currentValue
//The accumulator represents the value that will ultimately be returned from the reduce method.
//currentValue represents the current array item that the callback function is being run on.

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
})
console.log(sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  
  
  
  // Grouping by a property, and totaling it too