class PimPageEmergencyDetails {

    move_to_emergency_tab = ':nth-child(3) > .orangehrm-tabs-item';
    click_emergency_info_btn = ':nth-child(1) > .orangehrm-action-header > .oxd-button';
    add_emergency_name = ':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_emergency_relationship = ':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_emergency_home_phone = ':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_emergency_mobile_phone = ':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    add_emergency_work_phone = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    save_emergency_info = '.oxd-button--secondary'

    pimMoveToEmergencyTab() {

        cy.get(this.move_to_emergency_tab).click()

    }

    pimClickEmergencyInfoBtn() {

        cy.get(this.click_emergency_info_btn).click()

    }

    pimAddEmergencyName(emergencyname) {

        cy.get(this.add_emergency_name).type(emergencyname)

    }

    pimAddEmergencyRelationship(emergencyrelationship) {

        cy.get(this.add_emergency_relationship).type(emergencyrelationship)

    }

    pimAddEmergencyHomePhone(emergencyhomephone) {

        cy.get(this.add_emergency_home_phone).type(emergencyhomephone)

    }

    pimAddEmergencyMobilePhone(emergencymobilephone) {

        cy.get(this.add_emergency_mobile_phone).type(emergencymobilephone)

    }

    pimAddEmergencyWorkPhone(emergencyworkphone) {

        cy.get(this.add_emergency_work_phone).type(emergencyworkphone)

    }

    pimSaveEmergencyInfo() {

        cy.get(this.save_emergency_info).click();

    }

    createPimEmployeeEmergency(emergencyname, emergencyrelationship, emergencyhomephone, emergencymobilephone, emergencyworkphone) {

        this.pimMoveToEmergencyTab();
        this.pimClickEmergencyInfoBtn();
        this.pimAddEmergencyName(emergencyname);
        this.pimAddEmergencyRelationship(emergencyrelationship);
        this.pimAddEmergencyHomePhone(emergencyhomephone);
        this.pimAddEmergencyMobilePhone(emergencymobilephone);
        this.pimAddEmergencyWorkPhone(emergencyworkphone);
        this.pimSaveEmergencyInfo();

    }

}

export default PimPageEmergencyDetails