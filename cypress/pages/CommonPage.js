export default class CommonPage {
    constructor() {
        // 不为空，则应该是所有Page都会有的变量
    }
    isTargetPage() {
        cy.url().should('eq', this.url)
    }
}