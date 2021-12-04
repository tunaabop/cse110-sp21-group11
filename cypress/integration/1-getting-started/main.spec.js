
import { queryApi, getRecipe, getRecipeList, addCarouselsToPage} from "../../../source/main";
// function queryApi(query, numResults) {}

let response={};
let id = 535835;
let response1= {};
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
        cy.expect(response["results"].length).to.eq(4);
    });
})

//Todo 
describe("Unit test for getRecipe()", () => {
    before(() => {
        (async () => {
            response1 = await getRecipe(response.results[0].id);
        })();
        cy.wait(1000);
    });
    
    it("Test for recipe id", () => {
        cy.expect(response1.id).to.eq(response.results[0].id);
    });
});
//Todo 
describe("Unit test for getRecipeList()", () => {
    before(() => {
        // eslint-disable-next-line
        (async () => {
            response = await getRecipeList("ice cream", 1);
        })();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.log("parameter query:ice cream and numberReslut:1");
    });
    it("Test for number of result of Api", () => {
        cy.expect(response.length).to.eq(1);
    });
});
