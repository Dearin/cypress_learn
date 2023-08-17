context("网络管理测试套件", () => {
    before(() => {
        console.log("测试前置操作，数据清理等接口")
    })
    beforeEach(() => {
        console.log("测试前置操作")
        cy.visit('https://10.2.12.126/#/cloud/node-manager')
        cy.get('input[id="username"]').type("admin").should("have.value", "admin"); //判断框内存在数值
        cy.get('input[id="password"]').type("admin")
        cy.get('form').submit()
    });
    context("新建", () => {
        context("FORM表单测试", () => {
            it("Create Network", () => {
                cy.visit('https://10.2.12.126/#/address/ipam/network-manager')
                // 等待页面可加载
                cy.wait(2000); // 等待 2 秒（根据需要调整等待时间）
                cy.get('.create').should('be.visible'); // 等待按钮可点击
                cy.get('.create').click()
                cy.wait(3000); // 等待 2 秒（根据需要调整等待时间）-- select 元素不等待会有几率报错

                cy.get('textarea[class="required union networks"]').type("192.0.0.0/24")
                cy.get('select[name="group_type"]').select('encoding')
                // 点击form表单中but
                cy.get('form').find('.save.btnOk').click()
                // cy.get('#popWin').find('.save.btnOk').click();
                // 检验列表中存在对应数据
            })
        })
    })

    afterEach(() => {
        console.log("测试后置操作，数据清理等接口")
    })
    after(() => {
        console.log("测试后置操作，数据清理等接口")
    })
})