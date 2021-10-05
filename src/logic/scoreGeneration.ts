import { HoleContext, PlayerProfile, PotentialHolesPlayed } from "./types"

export function adjustParBasedOnHandicap({
  par,
  strokeIndex,
  handicap,
  holesInPlay,
}): number {
  let extraStrokes = 0

  const isNegativeHandicap = handicap + holesInPlay < holesInPlay
  console.log(isNegativeHandicap)
  if (isNegativeHandicap) {
    const removeStrokesFrom = holesInPlay - (handicap + holesInPlay)
    if (strokeIndex >= holesInPlay - removeStrokesFrom) {
      extraStrokes -= 1
    }
  }
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
