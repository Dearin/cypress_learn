export default class LoginPage {
    constructor() {
        this._username = '#username';
        this._password = '#password';
        this._form = 'form';
        this._url = 'https://10.2.12.126/#/'; // 可以转配置文件进行管理
    }

    // 定义 username 的 getter 方法
    get username() {
        return this._username;
    }

    // 定义 username 的 setter 方法
    set username(value) {
        this._username = value;
    }

    // 定义 password 的 getter 方法
    get password() {
        return this._password;
    }

    // 定义 password 的 setter 方法
    set password(value) {
        this._password = value;
    }

    // 定义 form 的 getter 方法
    get form() {
        return this._form;
    }

    // 定义 form 的 setter 方法
    set form(value) {
        this._form = value;
    }

    // 定义 url 的 getter 方法
    get url() {
        return this._url;
    }

    // 定义 url 的 setter 方法
    set url(value) {
        this._url = value;
    }

    visitPage() {
        cy.visit(this.url);
    }

    isTargetPage() {
        cy.url().should('eq', this._url);
    }

    login(username, password) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.form).submit();
    }
}
