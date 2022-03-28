import {describe, expect, test} from "vitest";
import {shallow} from "enzyme";
import CategoryItem from "../../components/CategoryItem";
import {Image} from "../../components/types";

describe("Descripción", () => {
    const title = "custom-title"
    const url = "custom-url"
    const image: Image = {
        id: "custom-id",
        title: title,
        url: url,
    }

    test("otra descripcion", () => {
        const wrapper = shallow(<CategoryItem {...image} />)

        expect(wrapper).toMatchSnapshot()
    })
})