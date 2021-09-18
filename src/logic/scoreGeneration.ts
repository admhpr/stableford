type GolfPlayerGender = "male" | "female" | "other"
type PotentialHolePars = 3 | 4 | 5
type PotentialStrokeIndexes =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
type PotentialHolesPlayed = 9 | 18

type PlayerProfile = {
  name: string
  gender: GolfPlayerGender
  handicap: number
}
type HoleProfile = {
  par: PotentialHolePars
  strokeIndex: PotentialStrokeIndexes
  holesPlayedInRound: PotentialHolesPlayed
  strokesTaken: number
}

function calculateStableFordScoreForHole(
  player: PlayerProfile,
  hole: HoleProfile
): number {
  return 0
}
