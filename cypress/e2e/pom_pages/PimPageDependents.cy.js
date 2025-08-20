class PimPageDependentsDetails {

    move_to_dependents_tab = ':nth-child(4) > .orangehrm-tabs-item';
    click_add_dependents_btn = ':nth-child(1) > .orangehrm-action-header > .oxd-button';
    add_dependents_name = ':nth-child(2) > .oxd-input';
    add_dependents_date_of_birth = '.oxd-date-input > .oxd-input'
    save_the_dependents_info = '.oxd-button--secondary';

    pimMoveToDependentsTab() {

        cy.get(this.move_to_dependents_tab).click();

    }

    pimClickAddDependentsBtn() {

        cy.get(this.click_add_dependents_btn).click()

    }

    pimAddDependentsName(dependentsname) {

        cy.get(this.add_dependents_name).type(dependentsname);

    }

    pimAddDependentsRelationship(dependentsrelationship) {

        cy.contains('label', 'Relationship')

            .parents('.oxd-input-group')
            .find('.oxd-select-text')
            .click();

        cy.get('.oxd-select-dropdown').should('be.visible');
        cy.contains('.oxd-select-option', dependentsrelationship).click();
    }

    pimAddDependentsDateOfBirth(dependentsdateofbirth) {

        cy.get(this.add_dependents_date_of_birth).type(dependentsdateofbirth)

    }

    pimSaveDependentsInfo() {

        cy.get(this.save_the_dependents_info).click()

    }

    createPimEmployeeDependents(dependentsname, dependentsdateofbirth) {

        this.pimMoveToDependentsTab();
        this.pimClickAddDependentsBtn();
        this.pimAddDependentsName(dependentsname);
        this.pimAddDependentsRelationship('other');
        this.pimAddDependentsDateOfBirth(dependentsdateofbirth);
        this.pimSaveDependentsInfo();

    }


}

export default PimPageDependentsDetails