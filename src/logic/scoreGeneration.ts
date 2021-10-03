import {
  HoleContext,
  PlayerProfile,
  PotentialHolePars,
  PotentialStrokeIndexes,
  PotentialHolesPlayed,
} from "./types"

export function adjustParBasedOnHandicap({
  par,
  strokeIndex,
  handicap,
  holesInPlay,
}): number {
  let extraStrokes = 0
  const additionalStrokesAwardedAfterExtra = handicap - holesInPlay
  if (additionalStrokesAwardedAfterExtra >= 0) {
    extraStrokes += 1
  }

  if (additionalStrokesAwardedAfterExtra >= strokeIndex) {
    extraStrokes += 1
  }
  return extraStrokes + par
}

function calculateStableFordScore(difference: number) {
  return difference
}

function calculateStableFordScoreForHole(
  player: PlayerProfile,
  hole: HoleContext,
  holesInPlay: PotentialHolesPlayed
): number {
  const adjustedPar = adjustParBasedOnHandicap({
    ...player,
    ...hole,
    holesInPlay,
  })
  const difference = adjustedPar - hole.strokesTaken
  return calculateStableFordScore(difference)
}
