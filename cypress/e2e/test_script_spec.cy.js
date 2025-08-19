import Loginpage from "./pom_pages/LoginPage.cy";
import addEmployee from "./pom_pages/adminPage.cy";
import PimPagePersonalDetails from "./pom_pages/PimPagePersonal.cy";
import PimPageContactDetails from "./pom_pages/PimPageContact.cy";

describe('Orange HRM Complete Automation', () => {

    const var_Login_Page = new Loginpage();
    const var_move_admin_tab = new addEmployee();
    const var_pim_page_personal_details = new PimPagePersonalDetails();
    const var_add_pim_page_contact_details = new PimPageContactDetails();

    beforeEach(() => {
        cy.fixture('credentials').then((data) => {
            cy.visit('/');
            var_Login_Page.login(data.username, data.password);
        });
    });


    it('Add a new employee to the system', () => {
        var_move_admin_tab.move_to_admin();
        var_move_admin_tab.add_employee_btn();
        var_move_admin_tab.selectUserRole('Admin');
        var_move_admin_tab.selectEmpStatus('Enabled');

        cy.fixture('employeeInfo').then((data) => {
            var_move_admin_tab.createEmployee(

                data.employeeName,
                data.empusername,
                data.userpassword,
                data.confirmpassword
            );
        });
    });

    it.only("Add Employee Profile on Pim Page", () => {

        var_pim_page_personal_details.moveToPim()
        var_pim_page_personal_details.addPimBtn()
        cy.fixture('pimEmployeePersonalInfo').then((data) => {

            cy.log(JSON.stringify(data));
            var_pim_page_personal_details.createPimEmployeePersonal(

                data.firstname,
                data.middlename,
                data.lastname,
                data.employeeid,
                data.pimusername,
                data.pimpassword,
                data.pimconfirmpassword,
                data.otherid,
                data.licensenumber,
                data.licenseexpiry,
                data.dateofbirth,
                data.customtestfield
            )

            cy.fixture('pimEmployeeContactInfo').then((data) => {

                cy.log(JSON.stringify(data));
                var_add_pim_page_contact_details.createPimEmployeeContact()


            })
        })



    })


});
