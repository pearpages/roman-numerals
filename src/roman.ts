const Helpers = {
  hasZeroOrBelowError: function(number: number) {
    if (number <= 0) {
      throw new Error("Negative number");
    }
  },

  hasUnitError: function(number: number) {
    if (number <= 0 || number > 9) {
      throw new Error("Wrong value");
    }
  }
};

export const Units = {
  getMUnit: function(number: number): number {
    if (number > 999) {
      const string = number + "";
      return parseInt(string.slice(string.length - 4, string.length - 3));
    }
    return 0;
  },

  getCUnit: function(number: number): number {
    if (number > 99) {
      const string = number + "";
      return parseInt(string.slice(string.length - 3, string.length - 2));
    }
    return 0;
  },

  getXUnit: function(number: number): number {
    if (number > 9) {
      const string = number + "";
      return parseInt(string.slice(string.length - 2, string.length - 1));
    }
    return 0;
  }
};

export const Mappers = {
  getIs: function(number: number): string {
    const map: { [key: number]: string } = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX"
    };
    Helpers.hasUnitError(number);
    return map[number];
  },

  getXs: function(number: number): string {
    const map: { [key: number]: string } = {
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC"
    };
    Helpers.hasUnitError(number);
    return map[number];
  },

  getCs: function(number: number): string {
    const map: { [key: number]: string } = {
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM"
    };
    Helpers.hasUnitError(number);
    return map[number];
  },

  getMs: function(number: number): string {
    const map: { [key: number]: string } = {
      1: "M",
      2: "MM",
      3: "MMM",
      4: "MMMM"
    };
    function hasError(number: number) {
      Helpers.hasZeroOrBelowError(number);
      if (number > 4) {
        throw new Error("too big");
      }
    }
    hasError(number);
    return map[number];
  }
};

export function getRoman(number: number): string {
  function hasInputErrors(number: number): void {
    Helpers.hasZeroOrBelowError(number);
    if (number > 4999) {
      throw new Error("Too big number");
    }
  }
  hasInputErrors(number);

  let ms, cs, xs, is;
  try {
    ms = Mappers.getMs(Units.getMUnit(number));
  } catch (_) {
    ms = "";
  }

  try {
    cs = Mappers.getCs(Units.getCUnit(number));
  } catch (_) {
    cs = "";
  }

  try {
    xs = Mappers.getXs(Units.getXUnit(number));
  } catch (_) {
    xs = "";
  }

  try {
    is = Mappers.getIs(number % 10);
  } catch (_) {
    is = "";
  }

  return `${ms}${cs}${xs}${is}`;
}
