import { Loginpage } from "./POM_Pages/LoginPage.cy";
import { moveBetweenTabs } from "./pom_pages/move_between_tabs.cy";
import { addEmployee } from "./pom_pages/addEmployee.cy";
import { it } from "mocha";

const var_Login_Page = new Loginpage()
const var_move_admin_tab = new moveBetweenTabs()
const var_add_user_to_system = new addEmployee()



describe('Add_Employee_to_system', () => {

    beforeEach(() => {
        cypress.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login to Create the New Employee', () => {

        var_Login_Page.enterUsername('Admin')
        var_Login_Page.enterPassword('admin123')
        var_Login_Page.clickLoginBtn()
        var_move_admin_tab.move_to_admin()


    })

    it('CLick add user button', () => {

        var_add_user_to_system.add_employee_btn()

    })

    it('Click on the user dropdown', () => {
        var_add_user_to_system.click_user_role_dropdown()
    })




})