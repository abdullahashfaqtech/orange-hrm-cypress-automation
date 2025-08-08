export class addEmployee{
    add_employee_button_on_admin_screen = '.oxd-button > .oxd-icon'
    click_user_role_dropdown = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'

    add_employee_btn(){
        cy.get(this.add_employee_button_on_admin_screen).click()
    }

    user_role_dropdown(){

        cy.get(this.click_user_role_dropdown).click()

    }

    

}