import { Component, SecurityContext } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Padelicious | Réservation de courts de padel';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/logos/padelicious_logo_no_label.svg');
    const safeUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/logos/padelicious_logo_full.svg');
    this.matIconRegistry.addSvgIcon('no_label_logo', safeUrl!)
    this.matIconRegistry.addSvgIcon('logo_full', safeUrl2!)
  }


}
