const albert = {
  name: "Albert J. Simpson",
  gender: "male",
  handicap: 7,
}

const bert = {
  name: "Bert A. Boi",
  gender: "male",
  handicap: 18,
}
const cliff = {
  name: "Clifford A. Ashe",
  gender: "male",
  handicap: 28,
}

const ed = {
  name: "Ed S. Grant",
  gender: "female",
  handicap: -2,
}

const jo = {
  name: "Joanne D. Smith",
  gender: "female",
  handicap: 0,
}

const frontNineHoles = [
  {
    par: 4,
    strokeIndex: 4,
  },
  {
    par: 4,
    strokeIndex: 12,
  },
  {
    par: 4,
    strokeIndex: 2,
  },
  {
    par: 3,
    strokeIndex: 18,
  },
  {
    par: 4,
    strokeIndex: 14,
  },
  {
    par: 4,
    strokeIndex: 6,
  },
  {
    par: 4,
    strokeIndex: 16,
  },
  {
    par: 3,
    strokeIndex: 10,
  },
  {
    par: 4,
    strokeIndex: 8,
  },
]
const backNineHoles = [
  {
    par: 4,
    strokeIndex: 9,
  },
  {
    par: 4,
    strokeIndex: 3,
  },
  {
    par: 4,
    strokeIndex: 1,
  },
  {
    par: 3,
    strokeIndex: 13,
  },
  {
    par: 4,
    strokeIndex: 15,
  },
  {
    par: 4,
    strokeIndex: 5,
  },
  {
    par: 4,
    strokeIndex: 17,
  },
  {
    par: 3,
    strokeIndex: 11,
  },
  {
    par: 4,
    strokeIndex: 7,
  },
]

export const players = {
  zeroHandicap: jo,
  lowerThanEighteenHandicap: albert,
  lowerThanZeroHandicap: ed,
  atEighteenHandicap: bert,
  overEighteenHandicap: cliff,
}

export const courses = {
  nine: frontNineHoles,
  eighteen: [...frontNineHoles, ...backNineHoles],
}
