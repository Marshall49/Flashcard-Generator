function ClozeCard(fulltext, cloze) {
  this.fullText = fulltext;
  console.log(this.fullText);
  this.cloze = cloze;
  if (this.fullText.indexOf(cloze) >=0) {
    this.partial = this.fullText.replace(cloze, "______");
  } else {
      console.log("not in here");
    }
  }
module.exports = ClozeCard;
