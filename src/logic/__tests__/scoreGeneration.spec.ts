import { adjustParBasedOnHandicap } from "../scoreGeneration"
import { courses, players } from "../__fixtures__/scoreGeneration.fixture"

function play18(course) {}
function play9(course) {}

describe(`score generation`, () => {
  const [firstHole, _, __, fourthHole] = courses.eighteen
  describe(`adjustParBasedOnHandicap`, () => {
    it(`should produce the correct score for a player with a handicap over 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        ...players.overEighteenHandicap,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par + 2)
    })
    it(`should produce the correct score for a player with a handicap under 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        ...players.lowerThanEighteenHandicap,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par)
    })
    it(`should produce the correct score for a player with a handicap of 0`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        ...players.zeroHandicap,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par)
    })
    it(`should produce the correct score for a player with a handicap less than 0`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        ...players.lowerThanZeroHandicap,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par)
    })
    it(`should produce the correct score for a player with a handicap less than 0`, () => {
      const result = adjustParBasedOnHandicap({
        ...fourthHole,
        ...players.lowerThanZeroHandicap,
        holesInPlay: 18,
      })
      expect(result).toEqual(fourthHole.par - 1)
    })
    it(`should produce the correct score for a player with a handicap at 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        ...players.atEighteenHandicap,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par + 1)
    })
  })
  it(`calculate scores for players on 18 holes`, () => {})
  it(`calculate scores for players on 9 holes`, () => {})
})
