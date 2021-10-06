function onFormSubmit() {

  record_array = []

  var form = FormApp.openById('1PlOxRaWn-2lxuZaNV8hdJ0_fk0l191Zddag6DNToKVI'); // Form ID
  var formResponses = form.getResponses();
  var formCount = formResponses.length;

  var formResponse = formResponses[formCount - 1]; //most current response
  var raffleResponses = formResponse.getGradableItemResponses(); //retrieves only responses with a mark
  var itemResponses = formResponse.getItemResponses(); //retrieves all responses

//add the respondent email
  var respondent = formResponse.getRespondentEmail();
  record_array.push(respondent); //adds respondent email to array - added on SS later

//add the respondent full name (from question)
  var itemResponse = itemResponses[0];
  var respondentName = itemResponse.getResponse();
  record_array.push(respondentName);

var formItems = form.getItems();
var formCount = formItems.length;

//parses through actual questions to calculate # of entries
  var scoreCounter = 0;
  
  for (var j = 0; j < raffleResponses.length; j++) {
    var raffleResponse = raffleResponses[j];
    var answer = raffleResponse.getResponse(); //the answer of the current question

    var raffleItem = formItems[j+2];
    var raffleQuestion = raffleItem.getTitle();


//retrieves the score of the current question during parsing
    var answerCheck = raffleResponse.getScore();

    if(answerCheck == 1){ //if score of answer is 1, it was correct and should be logged
      scoreCounter++;
      Logger.log(respondent);
      Logger.log(raffleQuestion);
      Logger.log(scoreCounter);

      record_array.push(answer);
//adds all the data to the raffle function which will then send to SS
      AddRaffleEntry(record_array[0], record_array[1], raffleQuestion, scoreCounter, 'Friday');

    } else{
      Logger.log('no/wrong answer');

    }
  }
}


//function to add details to the spreadsheet
function AddRaffleEntry(email, fullName, club, score, date) {
  var url = 'https://docs.google.com/spreadsheets/d/1RC6hIK9sFHg4DenQKpqPK9DfICCrpVP7ZbeFH3-09eg/edit?resourcekey#gid=2127274267';
  var ss = SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Entries Tracker"); //the intended sheet in document
  dataSheet.appendRow([email, fullName, club, score, date]); //adds to next empty row
}
