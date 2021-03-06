import { Component, OnInit } from '@angular/core';



//Importando a descrição do objecto Contact
import { Contact } from './contact.model';

//Importando o Serviço
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService:ContactsService) { }
   //Propriedade para controlar o estado de loading da aplicação
   loading = false;
    
   //Lista de contatos
   contacts:Contact[];

   contact:Contact;
 
   showCreate = false;
   showCreateEdit = false;

   //Two way binding dos campos de texto
   inputName = "";
   inputPhone = "";
    
   //No construtor é feito a instanciação do Serviço de contatos através de
   //injeção de dependencia. Após isso o 'this.contactsService' fica disponível
   //no componente


  ngOnInit() {
    //Antes de iniciar o procedimento, setamos a flag loading para true
    //Usaremos juntamente com o *ngIf no template, para mostrar uma mensagem de
    //carregamento
    this.getContacts();
  }



  //DELETAR CONTATO
  delete(contact) {
    //Chamamos o método deleteContact do serviço, dando subscribe
    this.contactsService.deleteContact(contact).subscribe(c => {
      //Após o retorno do servidor, removemos o contato da nossa lista 'contacts'
      this.getContacts();
    });
  }

  //INSERIR CONTATO
  insertContact() {
    this.showCreate = false;
    //this.showCreateEdit = false;
    //Carregamos os dados de inputName e inputPhone para construir nosso objeto Contact
    let contact:Contact = {
      name: this.inputName,
      phone: this.inputPhone
    };
    //Chamamos o método saveContact do Serviço, passando o Contact criado
    //no passo anterior e dando subscribe
    this.contactsService.saveContact(contact).subscribe(c => {
      //Quando a resposta chegar, jogamos o objeto retornado na lista 'contacts'
      //para ser mostrado
      this.getContacts();
    });

  }

    //Editar CONTATO
    edit(contact) {
      this.showCreateEdit = true;
      
      this.contact = {...contact};
      
    }
      //Edit CONTACT
      editContact() {

        this.contactsService.editContact(this.contact).subscribe(c => {
          this.getContacts();
          this.showCreateEdit = false;
        });

      }

    getContacts(){
      this.loading = true;
      //Chamamos o método getContacts do serviço, chamando subscribe
      this.contactsService.getContacts().subscribe(contacts => {
          //Após o retorno do servidor, setamos os contatos recebidos na
          //nossa lista, e marcamos o 'loading' como false pra esconder a
          //mensagem de carregamento no template
          this.contacts = contacts;
          this.loading = false;
        });
    }

  showNewContactForm() {
    this.showCreate = !this.showCreate;
  }

  showNewContactEditForm() {
    this.showCreateEdit = !this.showCreateEdit;
  }

}
