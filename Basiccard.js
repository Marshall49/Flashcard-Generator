function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  }
  BasicCard.prototype.askMe = function() {
    console.log(this.front);
}
module.exports = BasicCard;
