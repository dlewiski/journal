export function Entry(title, description) {
  this.title = title;
  this.description = description;
}

Entry.prototype.wordCount = function() {
  var words = this.description.split(' ');
  var wordTotal = words.length;
  return wordTotal;
}
//
// function vowelCount() {
//
// }
//
// function consonantCount() {
//
// }
