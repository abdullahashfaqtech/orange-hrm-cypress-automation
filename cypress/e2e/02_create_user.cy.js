import { Loginpage } from "./POM_Pages/LoginPage.cy";
import { moveBetweenTabs } from "./pom_pages/move_between_tabs.cy";
import { addEmployee } from "./pom_pages/addEmployee.cy";



describe('Add_Employee_to_system', () => {

    beforeEach(() => {
        cypress.visit('https://opensource-demo.orangehrmlive.com/')
    })

})