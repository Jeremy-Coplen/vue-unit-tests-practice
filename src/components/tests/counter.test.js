import { describe, it, expect } from 'vitest'
import { increment, decrement } from "./counter"

describe("increment", () => {
    it("Should increment the number", () => {
        expect(increment(0)).toBe(1)
    })

    it("Should decrement the number", () => {
        expect(decrement(0)).toBe(-1)
    })

    it("Should throw an error if the argument isn't a number", () => {
        expect(() => increment("test")).toThrowError("You must input a number")
        expect(() => decrement("test")).toThrowError("You must input a number")
    })
})