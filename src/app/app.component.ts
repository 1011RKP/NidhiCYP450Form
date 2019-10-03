import { Component, ViewContainerRef, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Compound, CYP450Data } from './data';
import { AppService } from './app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cyp450formComponent } from './CYP450Form/cyp450form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  selectedData: Compound;
  seletedItem: CYP450Data;
  Program: string;
  Compound: string;
  CYP450Data: CYP450Data;
  error: string;
  Nodata: boolean = true;
  isAdminTrue: boolean = false;

  @ViewChild(Cyp450formComponent) ReloadCY450form: Cyp450formComponent;

  ngOnInit() {
    this.getCY450DataAdmin()
  }

  constructor(private _appService: AppService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  OnSelectionChange(selectedData: Compound): void {
    this.Nodata = true;
    this.selectedData = selectedData;
    if (selectedData != null && selectedData !== <any>'-- Select Compound --') {
      this.Compound = this.selectedData.Id;
      this.Program = this.selectedData.Program.Id;
      this.getCYP450Data(this.Program, this.Compound);
    } else {
      this.Compound = null;
      this.Program = null;
    }
  }

  OnChange(response): void {
    response = (response === 'deleted') ? this.ConformMessage() : this.ErrorMessage();
  }

  AddedResponse(response): void {
    this.Nodata = false;
    this.CYP450Data = response;
  }


  setseletedItem(data: CYP450Data): void {
    this.seletedItem = data;
  }

  getCYP450Data(program: string, compound: string): void {
    const select = '?$select=Id,RI1A2Input,RI1A2Value,RI1A2Input2,RI1A2Value2,RI2B6Input,RI2B6Value,RI2B6Input2,RI2B6Value2,' +
      'RI2C8Input,RI2C8Value,RI2C8Input2,RI2C8Value2,RI2C9Input,RI2C9Value,RI2C9Input2,RI2C9Value2,' +
      'RI2C19Input,RI2C19Value,RI2C19Input2,RI2C19Value2,RI2D6Input,RI2D6Value,RI2D6Input2,RI2D6Value2,' +
      'RI3A4MidInput,RI3A4MidValue,RI3A4MidInput2,RI3A4MidValue2,' +
      'RI3A4TstInput,RI3A4TstValue,RI3A4TstInput2,RI3A4TstValue2,' +
      'TDI2C9CKS,TDI2C9Kinact,TDI2C9KI,TDI2C9Kdeg,TDI2C9Input2,TDI2C9Value2,' +
      'TDI2C19CKS,TDI2C19Kinact,TDI2C19KI,TDI2C19Kdeg,TDI2C19Input2,TDI2C19Value2,' +
      'TDI2D6CKS,TDI2D6Kinact,TDI2D6KI,TDI2D6Kdeg,TDI2D6Input2,TDI2D6Value2,' +
      'TDI3A4MidCKS,TDI3A4MidKinact,TDI3A4MidKI,TDI3A4MidKdeg,TDI3A4MidInput2,TDI3A4MidValue2,' +
      'Induction1A2CFI,Induction1A2EC50,Inductiontested,Induction1A2Emax,Induction1A2Input2,Induction1A2Value2,' +
      'Induction2B6CFI,Induction2B6EC50,Induction2B6Emax,Induction2B6Input2,Induction2B6Value2,' +
      'Induction3ACFI,Induction3AEC50,Induction3AEmax,Induction3AInput2,Induction3AValue2,Note,TDIComment,RIComment,' +
      'Modified,Program/Id,Compound/Id';
    const expand = '&$expand=Program/Id,Compound/Id';
    const filter = '&$filter=(Program/Id eq ' + program + ') and (Compound/Id eq ' + compound + ')';
    const order = '&$orderby=Modified desc';
    const url = '/_api/web/lists/getbytitle(\'CYP450Data\')/items' + select + expand + filter + order;
    // console.log(url);
    this._appService.getListItem(url)
      .subscribe(
        (cyp450Data) => {
          if (cyp450Data == null) {
            console.log('NO Data');
          } else {
            if (cyp450Data.d.results.length !== 0) {
              // console.log(cyp450Data);
              this.Nodata = false;
              this.CYP450Data = cyp450Data.d.results[0];
            } else {
              this.Nodata = true;
              console.log('No Data');
            }
          }
        },
        (error) => {
          this.error = 'Problem accessing the Service';
          console.log(this.error);
        });
  }

  getCY450DataAdmin(): void {
    const url = "/_api/web/currentUser/groups?$select=title,Id&$filter=title+eq+'CYP450 Data'";
    this._appService.getListItem(url)
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            let userLength = res.d.results.length;
            this.isAdminTrue = (userLength !== 0) ? true : false;
          }
        },
        (error) => {
          this.error = 'Problem accessing the Service';
        });
  }

  //*! Helper Classes
  ConformMessage(): void {
    this.Nodata = true;
    this.toastr.error('Record Deleted Successfully');
    this.ReloadCY450form.getCYP450Data(this.Program, this.Compound);
  }
  ErrorMessage(): void {
    this.toastr.error('Something Went Wrong please contact IT');
  }
}
