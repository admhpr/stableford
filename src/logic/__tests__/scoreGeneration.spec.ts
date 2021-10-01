import { adjustParBasedOnHandicap } from "../scoreGeneration"
import { courses, players } from "../__fixtures__/scoreGeneration.fixture"

function play18(course) {}
function play9(course) {}

describe(`score generation`, () => {
  const [firstHole] = courses.eighteen
  describe(`adjustParBasedOnHandicap`, () => {
    it(`should produce the correct score for a player with a handicap over 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        handicap: 22,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par + 2)
    })
    it(`should produce the correct score for a player with a handicap under 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        handicap: 2,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par)
    })
    it(`should produce the correct score for a player with a handicap of 0`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        handicap: 0,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par)
    })
    it(`should produce the correct score for a player with a handicap less than 0`, () => {})
    it(`should produce the correct score for a player with a handicap at 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        handicap: 18,
        holesInPlay: 18,
      })
      expect(result).toEqual(firstHole.par + 1)
    })
  })
  it(`calculate scores for players on 18 holes`, () => {})
  it(`calculate scores for players on 9 holes`, () => {})
})
