context("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show loading", () => {
    // https://on.cypress.io/type
    cy.get("h3").should("contain.text", "Loading...");
  });

  it("should show correct text", () => {
    cy.get("header").should("contain.text", "Supermarket List");
    cy.get("h3").should("contain.text", "(0) items");
  });

  it("should have a button with 'Add item' text", () => {
    cy.get("button").should("contain.text", "Add item");
  });

  it.only("should render form on click", () => {
    cy.get("button").click();

    cy.get("input").should("contain.value", "");

    cy.get(".ItemForm_buttonClose__1mauE").should("contain.text", "Close");

    cy.get(".ItemForm_buttonAdd__38kff").should("contain.text", "Add");
    // cy.get(".ItemForm_buttonAdd__38kff").should("have.a.property", "disabled");
  });
});
