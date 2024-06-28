import {render} from "@testing-library/react";
import Footer from "../../components/Footer";

test("Footer text is visible on rendering the ui",()=>{
    const footer = render(
        <Footer />
    )

    const foot = footer.getByTestId("foot");
    // console.log(foot);
    expect(foot.innerHTML).toBe("Developed with 💖 by Vijendra Pandey");
})