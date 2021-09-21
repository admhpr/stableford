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
}): {
  handicap: number
  par: PotentialHolePars
  strokeIndex: PotentialStrokeIndexes
  holesInPlay: PotentialHolesPlayed
} {
  let extraStrokes = 0
  const additionalStrokesAwardedAfterExtra = handicap - holesInPlay
  if (additionalStrokesAwardedAfterExtra >= 0) {
    extraStrokes += 1
    const addAnotherStroke = additionalStrokesAwardedAfterExtra - strokeIndex
    if (addAnotherStroke) {
      extraStrokes += 1
    }
  }
  return extraStrokes + par
}

function calculateStableFordScoreForHole(
  player: PlayerProfile,
  hole: HoleContext
): number {
  return 0
}
