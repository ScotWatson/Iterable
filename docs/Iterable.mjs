/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import * as ErrorHandling from "https://scotwatson.github.io/ErrorHandling/ErrorHandling.mjs";

export function every(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "every",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "every",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "every",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "every",
        argumentName: "callbackFn",
      });
    }
    // element, index, array
    if (!(args.callbackFn instanceof Function)) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "every",
        message: "Argument \"callbackFn\" must be a Function.",
      });
    }
    return Array.prototype.every.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "every",
        cause: e,
      });
    }
  }
}
export function filter(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "filter",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "filter",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "filter",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    // element, index, array
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "filter",
        argumentName: "callbackFn",
      });
    }
    return Array.prototype.filter.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "filter",
        cause: e,
      });
    }
  }
}
export function find(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "find",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "find",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "find",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    // element, index, array
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "find",
        argumentName: "callbackFn",
      });
    }
    return Array.prototype.find.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "find",
        cause: e,
      });
    }
  }
}
export function findIndex(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "findIndex",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "findIndex",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "findIndex",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    // element, index, array
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "findIndex",
        argumentName: "callbackFn",
      });
    }
    return Array.prototype.findIndex.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "Uint8View.findIndex",
        cause: e,
      });
    }
  }
}
export function findLast(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "findLast",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "findLast",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "findLast",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    // element, index, array
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "findLast",
        argumentName: "callbackFn",
      });
    }
    return Array.prototype.findLast.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "findLast",
        cause: e,
      });
    }
  }
}
export function findLastIndex(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "findLastIndex",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "findLastIndex",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "findLastIndex",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    // element, index, array
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "findLastIndex",
        argumentName: "callbackFn",
      });
    }
    return Array.prototype.findLastIndex.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "findLastIndex",
        cause: e,
      });
    }
  }
}
export function forEach(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "forEach",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "forEach",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "forEach",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    // element, index, array
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "forEach",
        argumentName: "callbackFn",
      });
    }
    return Array.prototype.forEach.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "forEach",
        cause: e,
      });
    }
  }
}
export function includes(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "includes",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "includes",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "includes",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "searchElement"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "includes",
        message: "searchElement is required.",
      });
    }
    if (!(Object.hasOwn(args, "fromIndex"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "includes",
        message: "fromIndex is required.",
      });
    }
    return Array.prototype.includes.apply(args.iterable, [ args.searchElement, args.fromIndex ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "includes",
        cause: e,
      });
    }
  }
}
export function indexOf(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "indexOf",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "indexOf",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "indexOf",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "searchElement"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "indexOf",
        message: "searchElement is required.",
      });
    }
    if (!(Object.hasOwn(args, "fromIndex"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "indexOf",
        message: "fromIndex is required.",
      });
    }
    return Array.prototype.indexOf.apply(args.iterable, [ args.searchElement, args.fromIndex ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "indexOf",
        cause: e,
      });
    }
  }
}
export function lastIndexOf(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "lastIndexOf",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "lastIndexOf",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "lastIndexOf",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "searchElement"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "lastIndexOf",
        message: "searchElement is required.",
      });
    }
    if (!(Object.hasOwn(args, "fromIndex"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "lastIndexOf",
        message: "fromIndex is required.",
      });
    }
    return Array.prototype.lastIndexOf.apply(args.iterable, [ args.searchElement, args.fromIndex ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "lastIndexOf",
        cause: e,
      });
    }
  }
}
export function createMapped(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "createMapped",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "createMapped",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "createMapped",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "createMapped",
        message: "callbackFn is required.",
      });
    }
    return Array.prototype.map.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "createMapped",
        cause: e,
      });
    }
  }
}
export function reduce(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "reduce",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "reduce",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "reduce",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "reduce",
        argumentName: "callbackFn",
      });
    }
    if (!(Object.hasOwn(args, "initialValue"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "reduce",
        argumentName: "initialValue",
      });
    }
    return Array.prototype.reduce.apply(args.iterable, [ args.callbackFn, args.initialValue ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "reduce",
        cause: e,
      });
    }
  }
}
export function reduceRight(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "reduceRight",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "reduceRight",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "reduceRight",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "reduceRight",
        message: "callbackFn is required.",
      });
    }
    if (!(Object.hasOwn(args, "initialValue"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "reduceRight",
        message: "initialValue is required.",
      });
    }
    return Array.prototype.reduceRight.apply(args.iterable, [ args.callbackFn, args.initialValue ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "reduceRight",
        cause: e,
      });
    }
  }
}
export function some(args) {
  try {
    if (!(ErrorHandling.isBareObject(args))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "some",
        message: "Argument must be a bare object.",
      });
    }
    if (!(Object.hasOwn(args, "iterable"))) {
      throw new ErrorHandling.RequiredArgumentError({
        functionName: "some",
        argumentName: "iterable",
      });
    }
    if (!(Object.hasOwn(args.iterable, Symbol.iterator))) {
      throw new ErrorHandling.InvalidInputError({
        functionName: "some",
        message: "Argument \"iterable\" must be iterable (must contain a Symbol.iterator member).",
      });
    }
    if (!(Object.hasOwn(args, "callbackFn"))) {
      throw new ErrorHandling.AnticipatedError({
        functionName: "some",
        message: "callbackFn is required.",
      });
    }
    return Array.prototype.some.apply(args.iterable, [ args.callbackFn ]);
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "some",
        cause: e,
      });
    }
  }
}

export function equal(args, arg2) {
  try {
    let A;
    let B;
    let equalityFn;
    if (Object.hasOwn(args, Symbol.iterator)) {
      if (!(Object.hasOwn(arg2, Symbol.iterator))) {
        throw new ErrorHandling.AnticipatedError({
          functionName: "equal",
          message: "Second argument must be iterable.",
        });
      }
      A = args;
      B = arg2;
      equalityFn = compareByValue;
    } else if (ErrorHandling.isBareObject(args)) {
      if (!(Object.hasOwn(args, "A"))) {
        throw new ErrorHandling.AnticipatedError({
          functionName: "equal",
          message: "Argument \"A\" is required.",
        });
      }
      if (Object.hasOwn(args.A, Symbol.iterator)) {
        throw new ErrorHandling.AnticipatedError({
          functionName: "equal",
          message: "Argument \"A\" must be iterable.",
        });
      }
      if (!(Object.hasOwn(args, "B"))) {
        throw new ErrorHandling.AnticipatedError({
          functionName: "equal",
          message: "Argument \"B\" is required.",
        });
      }
      if (Object.hasOwn(args.B, Symbol.iterator)) {
        throw new ErrorHandling.AnticipatedError({
          functionName: "equal",
          message: "Argument \"B\" must be iterable.",
        });
      }
      if (Object.hasOwn(args, "equalityFn")) {
        equalityFn = args.equalityFn;
      } else {
        equalityFn = compareByValue;
      }
      A = args.A;
      B = args.B;
    } else {
      throw new ErrorHandling.AnticipatedError({
        functionName: "equal",
        message: "Invalid Arguments.",
      });
    }
    const iterA = A[Symbol.iterator]();
    const iterB = B[Symbol.iterator]();
    let resultA = iterA.next();
    let resultB = iterB.next();
    while (!(resultA.done) && !(resultB.done)) {
      if (!equalityFn(resultA.value, resultB.value)) {
        return false;
      }
      resultA = iterA.next();
      resultB = iterB.next();
    }
    if (!(resultA.done) || !(resultB.done)) {
      return false;
    }
    return true;
  } catch (e) {
    if (e instanceof ErrorHandling.AnticipatedError) {
      throw e;
    } else {
      throw new ErrorHandling.UnanticipatedError({
        functionName: "equal",
        cause: e,
      });
    }
  }
}

function compareByValue(A, B) {
  return (A.valueOf() === B.valueOf());
}
