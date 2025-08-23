class addEmployee {

    mov_to_Aadmin_tab = ':nth-child(1) > .oxd-main-menu-item'
    add_employee_button_on_admin_screen = '.orangehrm-header-container > .oxd-button'
    click_user_role_dropdown = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'
    select_user_option = 'div[role="option"]'
    enter_the_employee_name_txt = '.oxd-autocomplete-text-input > input'
    open_status_dropdown = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    enter_the_username_txt = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    select_user_status = '.oxd-select-option'
    enter_the_user_password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    enter_the_confirm_password = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    save_new_employee_form = '.oxd-button--secondary'

    move_to_admin() {

        cy.get(this.mov_to_Aadmin_tab).click()
    }

    add_employee_btn() {

        cy.get(this.add_employee_button_on_admin_screen).click()
    }

    selectUserRole(role) {

        cy.get(this.click_user_role_dropdown).eq(0).click()
        cy.contains(this.select_user_option, role).click()

    }

    enterEmployeeName(employeeName) {

        cy.get(this.enter_the_employee_name_txt).type(employeeName)

    }

    selectEmpStatus(status){

        cy.get(this.open_status_dropdown).eq(0).click()
        cy.contains(this.select_user_status, status).click()
        
    }

    enterUserName(empusername) {

        cy.get(this.enter_the_username_txt).type(empusername)

    }

    enterUserPassword(userpassword){

        cy.get(this.enter_the_user_password).type(userpassword)
    }

    enterConfirmPassword(confirmpassword){

        cy.get(this.enter_the_confirm_password).type(confirmpassword)
    }

    clickSaveBtn(){

        cy.get(this.save_new_employee_form).click()
    }

    createEmployee(employeeName, empusername, userpassword, confirmpassword){


        this.enterEmployeeName(employeeName)
        this.enterUserName(empusername)
        this.enterUserPassword(userpassword)
        this.enterConfirmPassword(confirmpassword)
        this.clickSaveBtn()

    }

}

export default addEmployee