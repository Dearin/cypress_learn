/// <reference types="cypress" />
context('Assertions', () => {
  beforeEach(() => { // 类似setup,每个用例执行前进行操作？
    cy.visit('https://10.2.12.126/#')
  })
  
  // describe 是一种 Cypress 方法（从Mocha借来的），用于包含一个或多个相关测试。每次您开始为功能编写新的测试套件时，都将其包装在 describe 块中。
  // context 函数也用于创建测试套件，它实际上是 describe 函数的一个别名，目的是为了提高测试代码的可读性。context 与 describe 作用相同，用于组织测试用例，但通常用于创建更多层次的组织结构，以更清晰地表示不同的测试场景。
  describe('Login Page Check', () => {
    it('Visits the  HomePage', () => {
      cy.visit('https://10.2.12.126/#/cloud/node-manager')
      cy.get('#username').should('be.visible')
      cy.get('#password').should('be.visible')
      // cy.get('.ant-btn.ant-btn-primary"').should('have.text','登 录') --查不到元素
      cy.contains('登 录').should('be.visible')
    });
  });

  describe('User Login', () => {
    //it 的函数，它是实际的测试块
    it('Visits the  HomePage', () => {
      cy.visit('https://10.2.12.126/#/cloud/node-manager')
      // cy.get('form')
      cy.get('input[id="username"]').type("admin").should("have.value", "admin"); //判断框内存在数值
      cy.get('input[id="password"]').type("admin")
      cy.get('form').submit()
    });
  });
});