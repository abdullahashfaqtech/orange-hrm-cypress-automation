class PimPagePersonalDetails {

    move_to_pim_page = ':nth-child(2) > .oxd-main-menu-item';
    click_on_the_add_pim_btn = '.orangehrm-header-container > .oxd-button';
    add_pim_first_name = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input';
    add_pim_middle_name = ':nth-child(2) > :nth-child(2) > .oxd-input';
    add_pim_last_name = ':nth-child(3) > :nth-child(2) > .oxd-input';
    add_employee_id = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input';
    create_login_details_toggle = '.oxd-switch-input';
    add_pim_username = ':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_pim_password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_pim_confirm_password = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    save_pim_employee_btn = '.oxd-button--secondary';
    add_other_id = ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_driver_licence_number = ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_license_expiry_date = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input';
    click_to_close_expiry_calender = '.oxd-layout-context';
    add_employee_ssn_number = '.oxd-form > :nth-child(3) > :nth-child(3) > :nth-child(1)';
    add_employee_sin_number = ':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    // open_nationality_dropdown = 'label:contains("Nationality")'
    // select_specific_nationality = '.oxd-select-option';
    // open_marital_status_dropdown = 'label:contains("Marital Status") + div .oxd-select-text';
    // select_specific_marital_status = '.oxd-select-option';
    //Add_date_of_birth = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'.
    select_specific_gender = ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label';
    save_the_personal_info = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button';
    add_text_to_custom_field = '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    save_the_custom_details = '.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'



    moveToPim() {

        cy.get(this.move_to_pim_page).click();
    }

    addPimBtn() {

        cy.get(this.click_on_the_add_pim_btn).click();
    }

    pimFirstName(firstname) {

        cy.get(this.add_pim_first_name).type(firstname);
    }

    pimMiddleName(middlename) {

        cy.get(this.add_pim_middle_name).type(middlename);

    }

    pimLastName(lastname) {

        cy.get(this.add_pim_last_name).type(lastname);
    }

    pimEmployeeId(employeeid) {

        cy.get(this.add_employee_id).type(employeeid);
    }

    loginDetailsToggle() {

        cy.get(this.create_login_details_toggle).click();
    }

    pimUsername(pimusername) {

        cy.get(this.add_pim_username).type(pimusername);
    }

    pimPassword(pimpassword) {

        cy.get(this.add_pim_password).type(pimpassword);
    }

    pimConfirmPassword(pimconfirmpassword) {

        cy.get(this.add_pim_confirm_password).type(pimconfirmpassword);

    }

    pimSaveEmployee() {

        cy.get(this.save_pim_employee_btn).click();
        cy.wait(10000);

    }

    pimAddOtherId(otherid) {

        cy.get(this.add_other_id).should('be.visible').type(otherid);

    }

    pimAddLicenseNumber(personallicensenumber) {

        cy.get(this.add_driver_licence_number).type(personallicensenumber);

    }

    pimLicenseExpiry(personallicenseexpiry) {

        cy.get(this.add_license_expiry_date).eq(0).type(personallicenseexpiry).blur();

    }

    closeExpiryCalander() {

        cy.get(this.click_to_close_expiry_calender).click()
        cy.wait(2000)

    }

    // pimAddSsnNumber(employeessnnumber){

    //     cy.get(this.add_employee_ssn_number).type(employeessnnumber);

    // }

    // pimAddSinNumber(employeesinnumber){

    //     cy.get(this.add_employee_sin_number).type(employeesinnumber);

    // }

    // pimSelectNationality(selectnationality) {

    //     cy.get(this.open_nationality_dropdown).click();
    //     // cy.get(this.select_specific_nationality).should('be.visible');
    //     cy.contains(this.select_specific_nationality, selectnationality).click();

    // }

    pimSelectNationality(selectnationality) {
        // Open the dropdown
        cy.contains('label', 'Nationality')
            .parents('.oxd-input-group')
            .find('.oxd-select-text')
            .click();

        // Ensure dropdown options are visible
        cy.get('.oxd-select-dropdown').should('be.visible');

        // Select option
        cy.contains('.oxd-select-option', selectnationality).click();
    }


    pimSelectMaritalStatus(maritalstatus) {

        cy.contains('label', 'Marital Status')

            .parents('.oxd-input-group')
            .find('.oxd-select-text')
            .click();

        cy.get('.oxd-select-dropdown').should('be.visible');
        cy.contains('.oxd-select-option', maritalstatus).click();


    }

    // pimAddDateOfBirth(personaldateofbirth) {
    //     cy.get(this.Add_date_of_birth)
    //         // .eq(1)
    //         .clear()
    //         .type(personaldateofbirth, { force: true })
    //         .blur();
    // }


    pimSelectGender() {

        cy.get(this.select_specific_gender).click();

    }

    pimSavePersonalInfo() {

        cy.get(this.save_the_personal_info).click();

    }

    pimAddBloodType(bloodtype) {

        cy.contains('label', 'Blood Type')

            .parents('.oxd-input-group')
            .find('.oxd-select-text')
            .click();

        cy.get('.oxd-select-dropdown').should('be.visible');
        cy.contains('.oxd-select-option', bloodtype).click();

    }

    pimAddTextTestField(personalcustomtestfield) {

        cy.get(this.add_text_to_custom_field).type(personalcustomtestfield);

    }

    pimSaveCustomFields() {

        cy.get(this.save_the_custom_details).click();
    }



    createPimEmployeePersonal(firstname, middlename, lastname, employeeid, pimusername, pimpassword, pimconfirmpassword, otherid, personallicensenumber, personallicenseexpiry, employeessnnumber, employeesinnumber, personaldateofbirth, personalcustomtestfield) {

        this.pimFirstName(firstname);
        this.pimMiddleName(middlename);
        this.pimLastName(lastname);
        this.pimEmployeeId(employeeid);
        this.loginDetailsToggle();
        this.pimUsername(pimusername);
        this.pimPassword(pimpassword);
        this.pimConfirmPassword(pimconfirmpassword);
        this.pimSaveEmployee();
        this.pimAddOtherId(otherid);
        this.pimAddLicenseNumber(personallicensenumber);
        this.pimLicenseExpiry(personallicenseexpiry);
        this.closeExpiryCalander();
        // this.pimAddSsnNumber(employeessnnumber);
        // this.pimAddSinNumber(employeesinnumber);
        this.pimSelectNationality('Pakistani');
        this.pimSelectMaritalStatus('Single');
        // this.pimAddDateOfBirth(personaldateofbirth);
        this.pimSelectGender();
        this.pimSavePersonalInfo();
        this.pimAddBloodType('A+');
        this.pimAddTextTestField(personalcustomtestfield);
        this.pimSaveCustomFields();

    }

}

export default PimPagePersonalDetails