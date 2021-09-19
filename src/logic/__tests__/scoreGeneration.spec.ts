import { HoleContext, PotentialHolesPlayed } from "../types"

const stableFordScores = [
  {
    playerProfile: {},
    HoleContext: {
      par: 4,
      strokeIndex: 1,
      holesPlayedInRound: 18,
      strokesTaken: 5,
    },
    expectedScore: 3,
  },
]

function playerisPlaying(
  hole: HoleContext,
  holesPlayedInRound: PotentialHolesPlayed
) {
  return { ...hole, holesPlayedInRound }
}

describe(`score generation`, () => {
  it(`calculate scores for players on 18 holes`, () => {})
  it(`calculate scores for players on 9 holes`, () => {})
})
