import PracticeFormPage from "../pageObjects/PracticeForm.page";

describe('ToolsQA', () => {
  it('Practice Form', () => {
    //Open https://demoqa.com/automation-practice-form
    PracticeFormPage.visit();
    //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
    PracticeFormPage.firstName.type("John");
    PracticeFormPage.lastName.type("Doe");
    PracticeFormPage.email.type("test@test.com");
    //Select other for gender 
    PracticeFormPage.genderOther.click({ force: true });
    PracticeFormPage.mobileNumber.type("1234567890");
    //Set the - Date of Birth - with Calendar widget to - 28th of February, 1930. Date selecting should be dynamic 
    PracticeFormPage.dateOfBirth.click();
    PracticeFormPage.monthSelector.select("February");
    PracticeFormPage.yearSelector.select("1930");
    PracticeFormPage.twentyEightdaySelector.click();
    //Set Subjects to Economics.
    PracticeFormPage.subject.type("Economics");
    //Set Hobbies to Music.
    PracticeFormPage.hobbiesMusic.click({ force: true });
    //Upload an image of your choice.
    //Create folder “files” and put the image there
    //Might come in handy: https://docs.cypress.io/api/commands/selectfile
    PracticeFormPage.uploadPicture.attachFile("files\\test.png");
    //Set State to NCR.
    //Set City to Delhi.
    //Click Submit.
    //Validate that each Labeled row contains the correct information.
    //Create the necessary elements, page objects, etc.
    //Do as much as you can, the best way you can.
    //You can use everything, except other people
  })
})