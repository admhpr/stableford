import { adjustParBasedOnHandicap } from "../scoreGeneration"

function play18(course) {}
function play9(course) {}

describe(`score generation`, () => {
  describe(`adjustParBasedOnHandicap`, () => {
    it(`should produce the correct score for a player with a handicap over 18`, () => {
      const result = adjustParBasedOnHandicap({
        par: 4,
        strokeIndex: 4,
        handicap: 22,
        holesInPlay: 18,
      })
      expect(result).toEqual(6)
    })
    it(`should produce the correct score for a player with a handicap under 18`, () => {})
    it(`should produce the correct score for a player with a handicap at 18`, () => {})
  })
  it(`calculate scores for players on 18 holes`, () => {})
  it(`calculate scores for players on 9 holes`, () => {})
})
