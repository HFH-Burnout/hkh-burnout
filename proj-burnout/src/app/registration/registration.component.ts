import { Component, OnInit } from '@angular/core';
import { TypeFormService } from '../../services/typeform.service';
import * as typeformEmbed from '@typeform/embed';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private typeFormService: TypeFormService) { }

  ngOnInit(): void {
   this.renderTypeForm();
  }

  submitTypeform(): void {
    this.typeFormService.getTypeFormData()
      .subscribe(data => console.log(data, 'submitted form'))
    return
  }

  renderTypeForm() {
    const embedElement = document.querySelector('.typeform-registration')

    typeformEmbed.makeWidget(
      embedElement,
      'https://project-burn-out.typeform.com/to/u0uZtb',
      {
        buttonText: "Submit",
        onSubmit: function(){
          this.submitTypeform
        }
      }
    )
  }

}
