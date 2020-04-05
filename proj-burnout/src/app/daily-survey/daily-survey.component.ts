import { Component, OnInit } from '@angular/core';
import { TypeFormService } from '../../services/typeform.service';
import * as typeformEmbed from '@typeform/embed';

@Component({
  selector: 'app-daily-survey',
  templateUrl: './daily-survey.component.html',
  styleUrls: ['./daily-survey.component.scss']
})
export class DailySurveyComponent implements OnInit {

  constructor(private typeFormService: TypeFormService) { }

  ngOnInit(): void {
   this.renderTypeForm();
  }

  submitTypeform(): void {
    this.typeFormService.getTypeFormData()
      .subscribe(data => console.log(data, 'submitted form'))
  }

  renderTypeForm() {
    const embedElement = document.querySelector('.typeform-daily-survey')

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
