import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { MaterialModule } from './material.module';
import { QuestionControlService } from './services/question-control.service';

@NgModule({
  declarations: [DynamicFormComponent, FormQuestionComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [DynamicFormComponent, FormQuestionComponent, MaterialModule],
  providers: [QuestionControlService],
})
export class SharedModule {}
