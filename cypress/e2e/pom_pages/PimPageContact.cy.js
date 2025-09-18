class PimPageContactDetails {

    move_to_contact_details = ':nth-child(2) > .orangehrm-tabs-item';
    add_employee_address1 = ':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_employee_address2 = ':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_employee_city = ':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_employee_province = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_employee_postal_code = ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input';
    add_employee_home_phone = ':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_employee_mobile_phone = ':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_employee_work_phone = ':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_employee_work_email = ':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_employee_other_email = ':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    save_the_contact_info = '.oxd-form-actions > .oxd-button'

    pimCMoveToContact() {

        cy.get(this.move_to_contact_details).click()

    }

    pimCAddEmployeeAddress1(empaddress1) {

        cy.get(this.add_employee_address1).type(empaddress1)

    }

    pimCAddEmployeeAddress2(empaddress2) {

        cy.get(this.add_employee_address2).type(empaddress2)

    }

    pimCAddEmployeeCity(empcity) {

        cy.get(this.add_employee_city).type(empcity)
    }

    pimCAddEmployeeProvince(empprovince) {

        cy.get(this.add_employee_province).type(empprovince)

    }

    pimCAddEmployePostalCode(emppostalcode) {

        cy.get(this.add_employee_postal_code).type(emppostalcode)

    }

    pimCAddEmployeeCountry(empcountry) {

        cy.contains('label', 'Country')

            .parents('.oxd-input-group')
            .find('.oxd-select-text')
            .click();

        cy.get('.oxd-select-dropdown').should('be.visible');
        cy.contains('.oxd-select-option', empcountry).click();


    }

    pimCAddEmployeeHomePhone(emphomephone) {

        cy.get(this.add_employee_home_phone).type(emphomephone)

    }

    pimCAddEmployeeMobilePhone(empmobilephone) {

        cy.get(this.add_employee_mobile_phone).type(empmobilephone)

    }

    pimCAddEmployeeWorkPhone(empworkphone) {

        cy.get(this.add_employee_work_phone).type(empworkphone)

    }

    pimCAddEmployeeWorkEmail(empworkemail) {

        cy.get(this.add_employee_work_email).type(empworkemail)

    }

    pimCAddEmployeeOtherEmail(empotheremail) {

        cy.get(this.add_employee_other_email).type(empotheremail)

    }

    pimCSaveTheContactInfo() {

        cy.get(this.save_the_contact_info).click();
    }

    createPimEmployeeContact(empaddress1, empaddress2, empcity, empprovince, emppostalcode, emphomephone, empmobilephone, empworkphone, empworkemail, empotheremail) {

        this.pimCMoveToContact();
        this.pimCAddEmployeeAddress1(empaddress1);
        this.pimCAddEmployeeAddress2(empaddress2);
        this.pimCAddEmployeeCity(empcity);
        this.pimCAddEmployeeProvince(empprovince)
        this.pimCAddEmployePostalCode(emppostalcode);
        this.pimCAddEmployeeCountry('Pakistan');
        this.pimCAddEmployeeHomePhone(emphomephone);
        this.pimCAddEmployeeMobilePhone(empmobilephone);
        this.pimCAddEmployeeWorkPhone(empworkphone);
        this.pimCAddEmployeeWorkEmail(empworkemail);
        this.pimCAddEmployeeOtherEmail(empotheremail);
        this.pimCSaveTheContactInfo();

    }


}

export default PimPageContactDetails