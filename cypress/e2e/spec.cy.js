import PracticeFormPage from "../pageObjects/PracticeForm.page";
import ValidationPage from "../pageObjects/Validation.page";

describe('ToolsQA', () => {
  it('Practice Form', () => {
    //Open https://demoqa.com/automation-practice-form
    PracticeFormPage.visit();
    //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
    PracticeFormPage.firstName.type("John");
    PracticeFormPage.lastName.type("Doe");
    PracticeFormPage.email.type("test@test.com");
    //Select other for gender 
    PracticeFormPage.genderOther.click();
    PracticeFormPage.mobileNumber.type("1234567890");
    //Set the - Date of Birth - with Calendar widget to - 28th of February, 1930. Date selecting should be dynamic 
    PracticeFormPage.dateOfBirth.click();
    PracticeFormPage.monthSelector.select("February");
    PracticeFormPage.yearSelector.select("1930");
    PracticeFormPage.twentyEightdaySelector.click();
    //Set Subjects to Economics.
    PracticeFormPage.subject.type("Economics{enter}");
    //Set Hobbies to Music.
    PracticeFormPage.hobbiesMusic.click();
    //Upload an image of your choice.
    PracticeFormPage.uploadPicture.selectFile("./cypress/files/test.jpg");
    //Set address
    PracticeFormPage.currentAddress.type("Test Address");
    //Set State to NCR 
    PracticeFormPage.state.type("NCR{enter}");
    //Set City to Delhi.
    PracticeFormPage.city.type("Delhi{enter}");
    //Click Submit.
    PracticeFormPage.submit.click();
    //Validate that each Labeled row contains the correct information.
    ValidationPage.firstNameLabel.should("have.text", "John Doe");
    ValidationPage.emailLabel.should("have.text", "test@test.com");
    ValidationPage.genderLabel.should("have.text", "Other");
    ValidationPage.mobileLabel.should("have.text", "1234567890");
    ValidationPage.dobLabel.should("have.text", "28 February,1930");
    ValidationPage.subjectLabel.should("have.text", "Economics");
    ValidationPage.hobbiesLabel.should("have.text", "Music");
    ValidationPage.pictureLabel.should("have.text", "test.jpg");
    ValidationPage.addressLabel.should("have.text", "Test Address");
    ValidationPage.stateAndCityLabel.should("have.text", "NCR Delhi");
  })
})