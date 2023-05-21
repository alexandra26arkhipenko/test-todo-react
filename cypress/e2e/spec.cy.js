describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should create a todo", () => {
    cy.get('input[name="todo-input"]').type('First todo');
    cy.get('form[aria-label="form"]').submit();
  });

  it("should complete todo", () => {
    cy.get('input[name="todo-input"]').type("First Todo");
    cy.get('form[aria-label="form"]').submit();

    cy.get('input[type="checkbox"]').eq(1).click();
  });

  it("should delete a todo", () => {
    cy.get('input[name="todo-input"]').type("First Todo");
    cy.get('form[aria-label="form"]').submit();

    cy.get("button").eq(0).click({ force: true });
  });

  it("should delete a todo", () => {
    cy.get('input[name="todo-input"]').type("First Todo");
    cy.get('form[aria-label="form"]').submit();

    cy.get("button").eq(0).click({ force: true });
  });

  it("should filter all, active and completed", () => {
    cy.get('input[name="todo-input"]').type("Task1");
    cy.get('form[aria-label="form"]').submit();
    cy.get('input[name="todo-input"]').type("Task2");
    cy.get('form[aria-label="form"]').submit();
    cy.get('input[name="todo-input"]').type("Task3");
    cy.get('form[aria-label="form"]').submit();

    cy.get('input[type="checkbox"]').eq(1).click();

    cy.get('button[value="Active"]').click();

    cy.contains("2 items left").should("exist");

    cy.get('button[value="Completed"]').click();
    cy.contains("Well done!").should("exist");

    cy.get('button[value="All"]').click();
    cy.contains("2 items left").should("exist");
  });

  it("should delete completed todos", () => {
    cy.get('input[name="todo-input"]').type("Task1");
    cy.get('form[aria-label="form"]').submit();
    cy.get('input[name="todo-input"]').type("Task2");
    cy.get('form[aria-label="form"]').submit();
    cy.get('input[name="todo-input"]').type("Task3");
    cy.get('form[aria-label="form"]').submit();

    cy.get('input[type="checkbox"]').eq(1).click();

    cy.get('button[value="Clear Completed"]').click();

    cy.contains("2 items left").should("exist");
    cy.get('button[value="Completed"]').click();
    cy.contains("Well done!").should("exist");
    cy.contains(
      "Nothing's here :( Create new todos and get better every day!"
    ).should("exist");
  });
});
