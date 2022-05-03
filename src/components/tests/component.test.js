import { shallowMount } from "@vue/test-utils"
import { describe, it, expect, beforeEach } from 'vitest'
import Home from "../../views/HomeView.vue"


describe("HomeView.vue", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Home)
    })

    it("Should have text in the h1 tag with class of count", () => {
        expect(wrapper.find(".count").text().length > 0).toBeTruthy()
    })

    it("Should call increment method and update count", async () => {
        await wrapper.find(".increment").trigger("click")


        expect(wrapper.find(".count").text()).toBe("1")
    })

    it("Should call the decrement method and update count", async () => {
        await wrapper.find(".decrement").trigger("click")

        expect(wrapper.find(".count").text()).toBe("-1")
    })
})