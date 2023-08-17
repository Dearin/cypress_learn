export default class LoginPage {
    constructor() {
        this.username = '#username'
        this.password = "#password"
        this.form = "form"
        this.url = 'https://10.2.12.126/#/' // 可以转配置文件进行管理
    }

    isTargetPage() {
        cy.visit('https://10.2.12.126/#/')
        cy.url().should('eq', this.url)
    }

    login(username, password) {
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.form).submit()
    }
}

