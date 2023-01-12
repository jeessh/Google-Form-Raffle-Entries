function OnFormSubmit() {

  //items: the question item
  //response: the answer to the particular item (the answer)

  var form = FormApp.openById('103MaHkcIB8tYFgevk59hpLe0GFac4jsN9B1Zs2IuvSY'); // Form ID
  var formResponses = form.getResponses(); //retrieves all responses
  var formCount = formResponses.length; //total forms

  var formResponse = formResponses[formCount - 1]; //most current response
  var itemResponses = formResponse.getItemResponses(); //retrieves all responses

//1. retrieves the CLUB NAME
  var rClub = itemResponses[0]; //gets the first response ("Name of Club")
  var respondentClub = rClub.getResponse();


  //determines which proposal choice is selected
  var choice = itemResponses[1]; //retrieves MCQ if proposing club or event
  var proposalChoice = choice.getResponse();

  //retrieves different responses depending on choice of proposal

  if(proposalChoice =="Propose a New Student Club"){

//2A. retrieves the CLUB PURPOSE
    var cPurpose = itemResponses[5];
    var clubPurpose = cPurpose.getResponse();

//3A. retrieves the CLUB DATE PROPOSED
    var cDate = itemResponses[12];
    var clubDate = cDate.getResponse();
  }

  else{

//2B. retrieves the EVENT NAME
    var event = itemResponses[5];
    var eventTitle = event.getResponse();

//3B. retrieves the EVENT PURPOSE
    var ePurpose = itemResponses[9];
    var eventPurpose = ePurpose.getResponse();

//4B. retrieves the EVENT DATE
    var eDate = itemResponses[6];
    var eventDate = eDate.getResponse();
  }

//4A or 5B. retrieves the SUBMIT DATE
  var submitTime = formResponse.getTimestamp();
  
  if(proposalChoice =="Propose a New Student Club"){
    AddClubProposal(respondentClub, clubPurpose, clubDate, "", submitTime)
  }

  else{
    AddEventProposal(respondentClub, eventTitle, eventPurpose, eventDate, "", submitTime)
  }
}

function AddClubProposal(clubA, purposeA, dateProposedA, emptyA, submitDateA) {
  var ssA = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1f4c7UEJSbpefjrN0AweDVVEJmGvR4UFHIpzl82J-5zI/edit#gid=0');
  var dataSheetA = ssA.getSheetByName("Club Proposals"); //the intended sheet in document
  dataSheetA.appendRow([clubA, purposeA, dateProposedA, emptyA, submitDateA]); //adds to next empty row
} 

function AddEventProposal(clubB, eventName, purposeB, dateProposedB, emptyB, submitDateB) {
  var ssB = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1f4c7UEJSbpefjrN0AweDVVEJmGvR4UFHIpzl82J-5zI/edit#gid=0');
  var dataSheetB = ssB.getSheetByName("Event Proposals"); //the intended sheet in document
  dataSheetB.appendRow([clubB, eventName, purposeB, dateProposedB, emptyB, submitDateB]); //adds to next empty row
}
