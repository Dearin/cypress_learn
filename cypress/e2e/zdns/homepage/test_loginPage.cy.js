/// <reference types="cypress" />

import LoginPage from "../../../pages/LoginPage";
import {LoginUsers} from "../../../datas/loginPage.data"
context('登录页面', () => {

  describe('Login Page Check', () => {
    it('Visits the LoginPage', () => {
      const loginInstance = new LoginPage()
      cy.visit(loginInstance.url)
      loginInstance.isTargetPage()
      cy.get(loginInstance.username).should('be.visible')
      cy.get(loginInstance.password).should('be.visible')
      // cy.get('.ant-btn.ant-btn-primary"').should('have.text', '登 录')
      cy.contains('登 录').should('be.visible')
    });
  });

  describe('User Login', () => {
    //it 的函数，它是实际的测试块
    for (const user of successLoginUsers){
      it('Authorized Users Login Successfully', () => {
        // PO模式
        const loginInstance = new LoginPage()
        cy.visit(loginInstance.url)
        loginInstance.login(user.username, user.password)
        //检查url
        if(user.type=="right"){
          cy.url().should('include', 'cloud/node-manager')
          cy.get("#user-info").contains("欢迎").contains(user.username)
        }else{
          const checkStr="用户名/密码验证失败" ? user.type=="wrong" : "用户不存在"
          loginInstance.isTargetPage()
          cy.get('.content').contains(checkStr)
        }
      });
    }
  });
});