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
  //Make sure to specify the initial value you want to use for the accumulator
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience);
  
  // Grouping by a property, and totaling it too
  // {Developer: 12, Designer: 4} <--- This is what we want!
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});
  console.log(experienceByProfession)