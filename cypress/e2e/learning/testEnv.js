
/// <reference types="cypress" />

context("Five ways of config testing enviornment",()=>{

    it("In Cypress.config.js",()=>{
        //优点：适用于需要源码托管（git）并在所有计算机保持相同的值
        //缺点：只适用于在所有计算机上应该有相同的值
        cy.log(`Environment Params:${JSON.stringify(Cypress.env())}`)
        cy.log(`Debug Environment is : ${JSON.stringify(Cypress.env('debug'))}`)
    })


    it("In Cypress.env.json",()=>{
        cy.log(`Environment Params:${JSON.stringify(Cypress.env())}`)
        cy.log(`Host in environment is : ${JSON.stringify(Cypress.env('host'))}`)
        cy.log(`Username in environment is : ${JSON.stringify(Cypress.env('username'))}`)
        cy.log(`Password in environment is : ${JSON.stringify(Cypress.env('passwd'))}`)
    })

    it("In CMD",()=>{
        cy.log(`yarn cypress:run --env host=poloyy.com,key=test`)
        cy.log(`yarn cypress:open --env host=poloyy.com,key=test`)
        cy.log(`key in environment is : ${JSON.stringify(Cypress.env('key'))}`)
        cy.log(`host in environment is : ${JSON.stringify(Cypress.env('host'))}`)
    })
    context("In Suite",{
        env: {
            'key':'测试配置项Suite',
            'host': 'www.poloyy.suite'
        }
        },()=>{

        it('test configuration 测试用例设置', function () {
            cy.log(`环境变量有${JSON.stringify(Cypress.env())}`)
            cy.log(`key 环境变量的值是${JSON.stringify(Cypress.env("key"))}`)
            cy.log(`host 环境变量的值是${JSON.stringify(Cypress.env("host"))}`)
        });

        it("test configuration 测试用例设置2",{
            env: {
                'key':'测试用例级别配置项Case',
                'host': 'www.poloyy.suite.case'
            }
        },()=>{
            cy.log(`yarn cypress:run --env host=poloyy.com,key=test`)
            cy.log(`yarn cypress:open --env host=poloyy.com,key=test`)
            cy.log(`key in environment is : ${JSON.stringify(Cypress.env('key'))}`)
            cy.log(`host in environment is : ${JSON.stringify(Cypress.env('host'))}`)
        })
    })
})