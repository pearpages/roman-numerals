import { Units, Mappers, getRoman } from "./roman";

describe("getRoman", () => {
  describe("get units", () => {
    describe("getMUnit", () => {
      it("should get the unit or 0 otherwise", () => {
        expect(Units.getMUnit(1435)).toBe(1);
        expect(Units.getMUnit(5435)).toBe(5);
        expect(Units.getMUnit(3542358435)).toBe(8);
        expect(Units.getMUnit(-200)).toBe(0);
        expect(Units.getMUnit(440)).toBe(0);
        expect(Units.getMUnit(23)).toBe(0);
        expect(Units.getMUnit(3)).toBe(0);
      });
    });
    describe("getCUnit", () => {
      it("should get the unit or 0 otherwise", () => {
        expect(Units.getCUnit(324)).toBe(3);
        expect(Units.getCUnit(4424)).toBe(4);
        expect(Units.getCUnit(32)).toBe(0);
        expect(Units.getCUnit(2)).toBe(0);
        expect(Units.getCUnit(-2)).toBe(0);
        expect(Units.getCUnit(342232)).toBe(2);
      });
    });
    describe("getXUnit", () => {
      it("should get the unit or 0 otherwise", () => {
        expect(Units.getXUnit(12)).toBe(1);
        expect(Units.getXUnit(23)).toBe(2);
        expect(Units.getXUnit(63)).toBe(6);
        expect(Units.getXUnit(-12)).toBe(0);
        expect(Units.getXUnit(12345)).toBe(4);
        expect(Units.getXUnit(5)).toBe(0);
      });
    });
  });
  describe("mappers", () => {
    describe("should return unit numbers", () => {
      it("should throw error for valid input numbers", () => {
        expect(() => Mappers.getIs(-1)).toThrowError();
        expect(() => Mappers.getIs(20)).toThrowError();
        expect(() => Mappers.getIs(310)).toThrowError();
      });
      it("should return the unit mapping", () => {
        expect(Mappers.getIs(1)).toEqual("I");
        expect(Mappers.getIs(2)).toEqual("II");
        expect(Mappers.getIs(3)).toEqual("III");
        expect(Mappers.getIs(4)).toEqual("IV");
        expect(Mappers.getIs(5)).toEqual("V");
        expect(Mappers.getIs(6)).toEqual("VI");
        expect(Mappers.getIs(7)).toEqual("VII");
        expect(Mappers.getIs(8)).toEqual("VIII");
        expect(Mappers.getIs(9)).toEqual("IX");
      });
    });
    describe("should return decimal numbers", () => {
      it("should throw error for valid input numbers", () => {
        expect(() => Mappers.getXs(-1)).toThrowError();
        expect(() => Mappers.getXs(100)).toThrowError();
      });
      it("should return numbers", () => {
        expect(Mappers.getXs(1)).toEqual("X");
        expect(Mappers.getXs(2)).toEqual("XX");
        expect(Mappers.getXs(3)).toEqual("XXX");
        expect(Mappers.getXs(4)).toEqual("XL");
        expect(Mappers.getXs(5)).toEqual("L");
        expect(Mappers.getXs(6)).toEqual("LX");
        expect(Mappers.getXs(7)).toEqual("LXX");
        expect(Mappers.getXs(8)).toEqual("LXXX");
        expect(Mappers.getXs(9)).toEqual("XC");
      });
    });
    describe("should return cents numbers", () => {
      it("should throw error for valid input numbers", () => {
        expect(() => Mappers.getCs(-231)).toThrowError();
        expect(() => Mappers.getCs(430)).toThrowError();
      });
      it("should return numbers", () => {
        expect(Mappers.getCs(1)).toEqual("C");
        expect(Mappers.getCs(2)).toEqual("CC");
        expect(Mappers.getCs(3)).toEqual("CCC");
        expect(Mappers.getCs(4)).toEqual("CD");
        expect(Mappers.getCs(5)).toEqual("D");
        expect(Mappers.getCs(6)).toEqual("DC");
        expect(Mappers.getCs(7)).toEqual("DCC");
        expect(Mappers.getCs(8)).toEqual("DCCC");
        expect(Mappers.getCs(9)).toEqual("CM");
      });
    });
    describe("should return thousands numbers", () => {
      it("should throw error for valid input numbers", () => {
        expect(() => Mappers.getMs(-1231)).toThrowError();
        expect(() => Mappers.getMs(5)).toThrowError();
        expect(() => Mappers.getMs(100)).toThrowError();
      });
      it("should return numbers", () => {
        expect(Mappers.getMs(1)).toEqual("M");
        expect(Mappers.getMs(2)).toEqual("MM");
        expect(Mappers.getMs(3)).toEqual("MMM");
        expect(Mappers.getMs(4)).toEqual("MMMM");
      });
    });
  });
  describe("should return roman numbers", () => {
    it("should return Is", () => {
      expect(getRoman(4)).toEqual("IV");
    });
    it("should return Xs", () => {
      expect(getRoman(62)).toEqual("LXII");
    });
    it("should return Cs", () => {
      expect(getRoman(345)).toEqual("CCCXLV");
    });
    it("should return Ms", () => {
      expect(getRoman(3289)).toEqual("MMMCCLXXXIX");
    });
    it("should throw an error if the input is wrong", () => {
      expect(() => getRoman(-1)).toThrowError();
      expect(() => getRoman(5000)).toThrowError();
      expect(() => getRoman(5100)).toThrowError();
    });
  });
});
