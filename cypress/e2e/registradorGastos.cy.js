describe("gasto", () => {
  it("Shows the amount of the expense of the user", () => {
    cy.visit("/");
    cy.get("#monto").type(4);
    cy.get("#registrar-button").click();
    cy.get("#resultado-div").should("contain", "4")
    });
});
