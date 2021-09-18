import { HoleProfile, PotentialHolesPlayed } from "../types"

const stableFordScores = [
  {
    playerProfile: {},
    holeProfile: {
      par: 4,
      strokeIndex: 1,
      holesPlayedInRound: 18,
      strokesTaken: 5,
    },
    expectedScore: 3,
  },
]

function playerisPlaying(
  hole: HoleProfile,
  holesPlayedInRound: PotentialHolesPlayed
) {
  return { ...hole, holesPlayedInRound }
}

describe(`score generation`, () => {})
