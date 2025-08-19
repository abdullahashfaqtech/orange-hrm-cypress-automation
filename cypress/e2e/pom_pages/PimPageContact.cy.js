class PimPageContactDetails{

    move_to_contact_details = ':nth-child(2) > .orangehrm-tabs-item'

    pimCMoveToContact(){

        cypress.get(this.move_to_contact_details).click()

    }

    createPimEmployeeContact(){

        this.pimCMoveToContact();
    }


}

export default PimPageContactDetails