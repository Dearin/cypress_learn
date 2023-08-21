// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { param } from "cypress/types/jquery"
import { forEach } from "cypress/types/lodash"

// 登录页面 - 用户登录
Cypress.Commands.add('login', (username, password) => {
    Cypress.log({
        name:"login",
        message:`${username} | ${password}`
    })
    cy.visit() //环境配置里有,默认访问baseUrl
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('form').submit()
})

// DHCP相关接口封装
// 1、获取所有网络列表
Cypress.Commands.add("getAllNetworks",(url,username,password)=>{
    const result = []
    cy.request({
        method: 'GET',
        url: `${url}`, // baseUrl is prepend to URL
        form: false,
        headers:{"Content-Type": "application/json"},
        auth:(`${username}`,`${password}`), 
        body: {
          page_num: 1,
          page_size: 500,
          sort_ort:"",
          sort_col:"",
          current_user: 'admin',
          uuid:"uuid"
        }
    }).then((response)=>{
        // 根据返回进行数据处理
        const resources = response.resources
        resources.forEach((network_info)=>{
            result.push(network_info.id)
        })
    })
    return result
})

// 1、获取所有网络列表
Cypress.Commands.add("delNetworks",(url,username,password,ids=[])=>{
    const result = []
    cy.request({
        method: 'DELETE',
        url: `${url}`, // baseUrl is prepend to URL
        form: false,
        headers:{"Content-Type": "application/json"},
        auth:(`${username}`,`${password}`), 
        body: {
          ids: ids,
          current_user: 'admin',
          uuid:"uuid"
        }
    }).then((response)=>{
        // 根据返回进行数据处理
        result = response.status_code
    })
    return result
})

Cypress.Commands.add("clearNetworkData", () => {
    // 网络管理-数据清理
    const fullUrl = JSON.stringify(Cypress.env("host")) + "/networks"
    const username = JSON.stringify(Cypress.env("username"))
    const passwd = JSON.stringify(Cypress.env("passwd"))
    const networkIds = cy.getAllNetworks({url:fullUrl,username:username,password:passwd})
    cy.delNetworks({url:fullUrl,username:username,password:passwd,ids:networkIds})
    
    });
  