class PimPage {

    move_to_pim_page = ':nth-child(2) > .oxd-main-menu-item'
    click_on_the_add_pim_btn = '.orangehrm-header-container > .oxd-button'
    add_pim_first_name = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    add_pim_middle_name = ':nth-child(2) > :nth-child(2) > .oxd-input'
    add_pim_last_name = ':nth-child(3) > :nth-child(2) > .oxd-input'
    add_employee_id = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    create_login_details_toggle = '.oxd-switch-input'

    moveToPim() {

        cy.get(this.move_to_pim_page).click()
    }

    addPimBtn() {

        cy.get(this.click_on_the_add_pim_btn).click()
    }

    pimFirstName(firstname) {

        cy.get(this.add_pim_first_name).type(firstname)
    }

    pimMiddleName(middlename) {

        cy.get(this.add_pim_middle_name).type(middlename)

    }

    pimLastName(lastname) {

        cy.get(this.add_pim_last_name).type(lastname)
    }

    pimEmployeeId(employeeid) {

        cy.get(this.add_employee_id).type(employeeid)
    }

    loginDetailsToggle() {

        cy.get(this.create_login_details_toggle).click()
    }

    createPimEmployee(firstname, middlename, lastname, employeeid) {

        this.pimFirstName(firstname);
        this.pimMiddleName(middlename);
        this.pimLastName(lastname);
        this.pimEmployeeId(employeeid);
        this.loginDetailsToggle();
    }

}

export default PimPage