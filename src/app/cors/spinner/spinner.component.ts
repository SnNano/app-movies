import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner=false;
  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.getSpinnerObserver().subscribe((res:any) => {
      this.showSpinner = res == 'start';
    })
  }
}
