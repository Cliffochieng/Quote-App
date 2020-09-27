import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {  
  quotes: Quote[] = [

 new Quote('Success', 'Nothing is impossible the word itself says im possible.', 'Albert Einstein', new Date(2020, 9 - 1, 27),0,0),
  new Quote('Failure ', "Anyone who has never made a mistake has never tried anything new.", 'Audrey Helpburn', new Date(2020, 9 - 1, 27),0,0),
  new Quote('Fear', 'Life shrinks or expands in proportion to ones courage', 'Anais Ninpher', new Date(2020, 9 - 1, 27),0,0),
  new Quote('Wisdom', 'A wiseman never knows all,only fools know everything', 'William Shakespear', new Date(2020, 8 - 1, 27),0,0),
  new Quote('Passion ', 'Passion is the genesis of genius.', 'Oprah Winfrey', new Date(2020, 9 - 1, 27),0,0),
  new Quote('Investment ', 'Never invest in a business you cannot understand.', 'Benjamin Franklin', new Date(2020, 9 - 1, 27),0,0)
];
toggleDetails(index) {
  this.quotes[index].showCompleteDate = !this.quotes[index].showCompleteDate;
}
addNewQuote(quote){
  let quoteLength = this.quotes.length
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

deleteQuote(isComplete, index) {
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)
    if (toDelete) {
      this.quotes.splice(index, 1)

    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}


