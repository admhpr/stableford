export type GolfPlayerGender = "male" | "female" | "other"
export type PotentialHolePars = 3 | 4 | 5
export type PotentialStrokeIndexes =
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
export type PotentialHolesPlayed = 9 | 18

export type PlayerProfile = {
  name: string
  gender: GolfPlayerGender
  handicap: number
}
export type HoleProfile = {
  par: PotentialHolePars
  strokeIndex: PotentialStrokeIndexes
  holesPlayedInRound: PotentialHolesPlayed
  strokesTaken: number
}