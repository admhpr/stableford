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
      expect(result).toEqual(6)
    })
    it(`should produce the correct score for a player with a handicap under 18`, () => {})
    it(`should produce the correct score for a player with a handicap of 0`, () => {})
    it(`should produce the correct score for a player with a handicap less than 0`, () => {})
    it(`should produce the correct score for a player with a handicap at 18`, () => {
      const result = adjustParBasedOnHandicap({
        ...firstHole,
        handicap: 18,
        holesInPlay: 18,
      })
      expect(result).toEqual(5)
    })
  })
  it(`calculate scores for players on 18 holes`, () => {})
  it(`calculate scores for players on 9 holes`, () => {})
})
