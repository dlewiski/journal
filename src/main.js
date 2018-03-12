import { Entry } from './journal-logic';

// function entryMaker() {
//   var title = $("#title").val();
//   var description = $("#description").val();
//   var newEntry = new Entry(title, description);
//   return newEntry;
// }
$(document).ready(function() {
  $("#journalInput").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var description = $("#description").val();
    var newEntry = new Entry(title, description);
    var wordTotal = newEntry.wordCount();
  )};
)};
