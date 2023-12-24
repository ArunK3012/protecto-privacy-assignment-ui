import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'protecto-privacy-assignment-ui';
  htmlContent = ` Dear User,
  <br>
  <br>
  We are excited to introduce our latest privacy product that ensures the utmost security for your online activities.
  <br>
  <br>
  [Your marketing content goes here]`;
  emailData = {
    to: '',
    subject: 'Check Out Our Privacy Product!',
    html: '', 
  };

  totalEmailsSent = 0;
  users: any = ['arunkumarachar30@gmail.com', 'arunkumarachar3024@gmail.com', 'arun.kp@robosoftin.com', 'aishwaryadinesh1999@gmail.com'];


  constructor(private emailService: EmailService) {
    }

  sendEmail() {
    this.emailData.to = this.users;
    this.emailData.html = this.htmlContent;
    console.log(this.emailData);

    this.emailService.sendEmail(this.emailData).subscribe(
      (response) => {
        console.log(response);
        this.totalEmailsSent++;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
