import BasePage from "./Base.page";

class PracticeFormPage extends BasePage {

    static get url() {
        return "/automation-practice-form";
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
        return cy.get('[for="gender-radio-3"]');
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
        return cy.get('[for="hobbies-checkbox-3"]');
    }

    static get uploadPicture() {
        return cy.get("#uploadPicture");
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get state() {
        return cy.get("#state");
    }

    static get city() {
        return cy.get("#city");
    }

    static get submit() {
        return cy.get("#submit");
    }

}

export default PracticeFormPage;