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
  customerSubject: any;
  customerMessage: any = '';

  nameShow: any = false;
  emailShow: any = false;
  mobileShow: any = false;
  invalidEmail: any = false;
  enquiryMessageShow: any = false;
  subjectShow: any = false;
  bigErrorShow: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollDown() {
    const idSpace = document.getElementById('enquiry_section');
    idSpace.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  formsubmit(){
    console.log(this.customerSubject);
    if(!this.customerEmail){
      this.emailShow = true;
    }else{
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.customerEmail))
      {
        this.invalidEmail = false;
      }else{
        this.invalidEmail = true;
      }
      this.emailShow = false;
    }

    if(!this.customerName){
      this.nameShow = true;
    }else{
      this.nameShow = false;
    }

    if(!this.customerMobile){
      this.mobileShow = true;
    }else{
      this.mobileShow = false;
    }

    if(!this.customerSubject){
      this.subjectShow = true;
    }else{
      this.subjectShow = false;
    }

    if(!this.customerMessage){
      this.enquiryMessageShow = true;
    }else{
      this.enquiryMessageShow = false;
    }

  }

}
