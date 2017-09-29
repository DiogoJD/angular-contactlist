import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contact } from '../contacts/contact.model';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor(private ContactsService :ContactsService) { }

  ngOnInit() {
  }

  @Input() contact : Contact;
  @Output() contactDeleted = new EventEmitter();
  

 /* 
  @Input() contact = {
    name: "",
    phone: ""
  }
  */


  remove() {
    this.contactDeleted.emit();
  }
  


 

}
