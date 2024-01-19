/*
Like the map method, the filter methid uses a callback function which we pass to the method, and which will be executed
on every element of an array. The callback function must return a test that rill evaluate to either true or false. 
If the array item being tested passes the test in the callback function, it will be included in the results returned by 
the filter method.
*/

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough)

  const paul = people.filter(p => p.name === 'Paul');
  console.log(paul);

  //The filter method always returns an array to access the object itself -- add a [0] after 'Paul') and before ;
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];
/*
  const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length >0;
  });
*/
  //Extract the whole filter function into its own function

  const has5yearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5yearsExp).length >0;
  const candidates = students.filter(hasStrongSkills);
  const names = candidates.map(student => student.name);
  console.log(names);
