class PracticeFormPage {
    static get url() {
        return "/automation-practice-form";
    }
    static visit() {
        cy.visit(this.url);
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get email() {
        return cy.get("#userEmail");
    }

    static get genderOther() {
        return cy.get("#gender-radio-3");
    }

    static get mobileNumber() {
        return cy.get("#userNumber");
    }

    static get dateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static get monthSelector() {
        return cy.get(".react-datepicker__month-select");
    }

    static get yearSelector() {
        return cy.get(".react-datepicker__year-select");
    }

    static get twentyEightdaySelector() {
        return cy.get('[class="react-datepicker__day react-datepicker__day--028"]');
    }

    static get subject() {
        return cy.get("#subjectsInput");
    }

    static get hobbiesMusic() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get uploadPicture() {
        return cy.get("#uploadPicture");
    }
}

export default PracticeFormPage;