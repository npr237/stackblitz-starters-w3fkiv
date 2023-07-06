// run `node index.js` in the terminal
let students = [
  {
    name: "Nupur",
    chemistryMarks: 85,
    biologyMarks: 75,
    dob: "15-11-1967"
  },
  {
    name: "Sarika",
    chemistryMarks: 90,
    biologyMarks: 97,
    dob: "20-10-1999"
  },
  {
    name: "Pranshi",
    chemistryMarks: 75,
    biologyMarks: 85,
    dob: "15-11-1998"
  },

  {
    name: "Suresh",
    chemistryMarks: 67,
    biologyMarks: 85,
    dob: "15-11-2023"
  }
];
const sortByMarks = (a, b) => {
  // First priority: Total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  }
  if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // Second priority: Biology marks
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  }
  if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }


};

// Sort the array of student objects
const std=students.sort(sortByMarks);

// Print sorted array of student objects
console.log(std);