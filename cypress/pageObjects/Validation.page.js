import BasePage from "./Base.page";

class ValidationPage extends BasePage {
    static get firstNameLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(1) td:nth-child(2)');
    }

    static get emailLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(2) td:nth-child(2)');
    }

    static get genderLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(3) td:nth-child(2)');
    }

    static get mobileLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(4) td:nth-child(2)');
    }

    static get dobLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(5) td:nth-child(2)');
    }

    static get subjectLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(6) td:nth-child(2)');
    }

    static get hobbiesLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(7) td:nth-child(2)');
    }

    static get pictureLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(8) td:nth-child(2)');
    }

    static get addressLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(9) td:nth-child(2)');
    }

    static get stateAndCityLabel() {
        return cy.get('[class="table-responsive"] tbody tr:nth-child(10) td:nth-child(2)');
    }
}

export default ValidationPage;