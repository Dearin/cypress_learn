
import CommonPage from "./CommonPage"
export default class LoginPage extends CommonPage {
    constructor() {
        this.username = '#username'
        this.password = "#password"
        this.form = "form"
        this.url = 'https://10.2.12.126/#/' // 可以转配置文件进行管理
    }
    get username() {
        return cy.get(this.username)
    }

    get password() {
        return cy.get(this.password)
    }

    get form() {
        return cy.get(this.form)
    }

    visitPage() {
        cy.visit(this.url)
    }

    login(username, password) {
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.form).submit()
    }
}

