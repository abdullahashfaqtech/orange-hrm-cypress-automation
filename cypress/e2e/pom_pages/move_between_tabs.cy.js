export class moveBetweenTabs{
    nav_to_admin_tab = ':nth-child(1) > .oxd-main-menu-item'

    move_to_admin(){
        cy.get(this.nav_to_admin_tab).click()
    }
}