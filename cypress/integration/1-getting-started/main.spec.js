
import { queryApi, getRecipe, getRecipeList, addCarouselsToPage} from "../../../source/main";
// function queryApi(query, numResults) {}

let response={};
describe("Unit test for queryApi()", () => { 
    before(() => {
        // eslint-disable-next-line
        (async () => {
            response = await queryApi("pasta", 4);
        })();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.log("parameter query:pasta and numberReslut:4");
    });
    it("Test for number of result of Api", () => {
        cy.expect(response["result"].length).to.eq(4);
    });
    it("Test for query of result of Api", () => {
        for (const key in response["result"]) {
            cy.expect(key["title"].toLowerCase().includes("pasta")).to.be(true);
        }
    });
});
















//Todo 
describe("Unit test for getRecipe()", () => {
    before(() => {
        // eslint-disable-next-line
        (async () => {
            response = await getRecipe("pasta", 4);
        })();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.log("parameter query:pasta and numberReslut:4");
    });
    it("Test for number of result of Api", () => {
        cy.expect(response["result"].length).to.eq(4);
    });
    it("Test for query of result of Api", () => {
        for (const key in response["result"]) {
            cy.expect(key["title"].toLowerCase().includes("pasta")).to.be(true);
        }
    });
});
//Todo 
describe("Unit test for getRecipeList()", () => {
    before(() => {
        // eslint-disable-next-line
        (async () => {
            response = await getRecipeList("pasta", 4);
        })();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.log("parameter query:pasta and numberReslut:4");
    });
    it("Test for number of result of Api", () => {
        cy.expect(response["result"].length).to.eq(4);
    });
    it("Test for query of result of Api", () => {
        for (const key in response["result"]) {
            cy.expect(key["title"].toLowerCase().includes("pasta")).to.be(true);
        }
    });
});
//Todo 
describe("Unit test for addCarouselsToPage()", () => {
    before(() => {
        // eslint-disable-next-line
        (async () => {
            response = await addCarouselsToPage("pasta", 4);
        })();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.log("parameter query:pasta and numberReslut:4");
    });
    it("Test for number of result of Api", () => {
        cy.expect(response["result"].length).to.eq(4);
    });
    it("Test for query of result of Api", () => {
        for (const key in response["result"]) {
            cy.expect(key["title"].toLowerCase().includes("pasta")).to.be(true);
        }
    });
});