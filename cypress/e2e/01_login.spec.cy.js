import { Loginpage } from "./POM_Pages/LoginPage.cy";
import {adminPage
    
}



describe('Orange HRM Complete Automation', () => {

    const var_Login_Page = new Loginpage()
    const var_move_admin_tab = new moveBetweenTabs()

    beforeEach(() => {
       cy.fixture('credentials').then((data) = {
        cy.visit('/');
        var_Login_Page.login(data.enterUsername, data.enterPassword);
       });
    });

    it('Sign_In with valid credentials', () => {
        var_Login_Page.enterUsername('Admin')
        var_Login_Page.enterPassword('admin123')
        var_Login_Page.clickLoginBtn()
    })

    it('Sign_In with Invalid Username', () => {
        var_Login_Page.enterUsername('Adminorangehrm')
        var_Login_Page.enterPassword('admin123')
        var_Login_Page.clickLoginBtn()
    })

    it('Sign_In with Invalid Password', () => {
        var_Login_Page.enterUsername('Admin')
        var_Login_Page.enterPassword('admin123456')
        var_Login_Page.clickLoginBtn()
    })

    it('Move to the Admin Tab', () => {

        var_Login_Page.enterUsername('Admin')
        var_Login_Page.enterPassword('admin123')
        var_Login_Page.clickLoginBtn()
        var_move_admin_tab.move_to_admin()
    })
})