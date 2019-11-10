import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appGetCopmponent]'
})
export class GetCopmponentDirective {
  @Input() name: string;
  constructor(public template: TemplateRef<any>) {  }
}
