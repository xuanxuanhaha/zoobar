import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  customerName: any = '';
  customerEmail: any = '';
  customerMobile: any = '';
  customerSubject: any = '';
  customerMessage: any = '';

  nameShow: any = false;
  emailShow: any = false;
  mobileShow: any = false;
  invalidEmail: any = false;
  enquiryMessageShow: any = false;
  bigErrorShow: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollDown() {
    const idSpace = document.getElementById('enquiry_section');
    idSpace.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
