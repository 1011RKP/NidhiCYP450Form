import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';

import { Program, Compound, CYP450Data } from '../data';
import { AppService } from '../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-cyp450form',
    templateUrl: './cyp450form.component.html',
    styleUrls: ['./cyp450form.component.css']
})

export class Cyp450formComponent implements OnChanges {
    @Input()
    Program: string;
    @Input()
    Compound: string;

    @Output()
    RecordAdded: EventEmitter<CYP450Data> = new EventEmitter<CYP450Data>();

    CYP450Data: CYP450Data;

    message: string;
    error: string;
    createNew: boolean;
    RI1A2Input: string;
    RI1A2Value: string;
    RI1A2Input2: string;
    RI1A2Value2: string;
    RI2B6Input: string;
    RI2B6Value: string;
    RI2B6Input2: string;
    RI2B6Value2: string;
    RI2C8Input: string;
    RI2C8Value: string;
    RI2C8Input2: string;
    RI2C8Value2: string;
    RI2C9Input: string;
    RI2C9Value: string;
    RI2C9Input2: string;
    RI2C9Value2: string;
    RI2C19Input: string;
    RI2C19Value: string;
    RI2C19Input2: string;
    RI2C19Value2: string;
    RI2D6Input: string;
    RI2D6Value: string;
    RI2D6Input2: string;
    RI2D6Value2: string;
    RI3A4MidInput: string;
    RI3A4MidValue: string;
    RI3A4MidInput2: string;
    RI3A4MidValue2: string;
    RI3A4TstInput: string;
    RI3A4TstValue: string;
    RI3A4TstInput2: string;
    RI3A4TstValue2: string;

    TDI2C9CKS: string;
    TDI2C9Kinact: string;
    TDI2C9KI: string;
    TDI2C9Kdeg: string;
    TDI2C9Input2: string;
    TDI2C9Value2: string;
    TDI2C19CKS: string;
    TDI2C19Kinact: string;
    TDI2C19KI: string;
    TDI2C19Kdeg: string;
    TDI2C19Input2: string;
    TDI2C19Value2: string;
    TDI2D6CKS: string;
    TDI2D6Kinact: string;
    TDI2D6KI: string;
    TDI2D6Kdeg: string;
    TDI2D6Input2: string;
    TDI2D6Value2: string;
    TDI3A4MidCKS: string;
    TDI3A4MidKinact: string;
    TDI3A4MidKI: string;
    TDI3A4MidKdeg: string;
    TDI3A4MidInput2: string;
    TDI3A4MidValue2: string;

    Induction1A2CFI: string;
    Induction1A2EC50: string;
    Induction1A2Emax: string;
    Induction1A2Input2: string;
    Induction1A2Value2: string;
    Induction2B6CFI: string;
    Induction2B6EC50: string;
    Induction2B6Emax: string;
    Induction2B6Input2: string;
    Induction2B6Value2: string;
    Induction3ACFI: string;
    Induction3AEC50: string;
    Induction3AEmax: string;
    Induction3AInput2: string;
    Induction3AValue2: string;
    Note: string;
    RIComment: string;
    TDIComment: string;
    Inductiontested: boolean;

    //new 
    FirstURL: string;
    SecoundURL: string;
    ThirdURL: string;

    constructor(
        private _appService: AppService,
        public toastr: ToastsManager, vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnChanges() {
        this.message = '';
        this.error = '';
        if (this.Program !== '' && this.Compound !== '') {
            this.getCYP450Data(this.Program, this.Compound);
        } else {
            this.clearData();
        }
    }
    clearData(): void {
        this.createNew = true;
        this.RI1A2Input = 'IC50 (uM)';
        this.RI1A2Value = '';
        this.RI1A2Input2 = 'Highest Conc. Tested (uM)';
        this.RI1A2Value2 = '';
        this.RI2B6Input = 'IC50 (uM)';
        this.RI2B6Value = '';
        this.RI2B6Input2 = 'Highest Conc. Tested (uM)';
        this.RI2B6Value2 = '';
        this.RI2C8Input = 'IC50 (uM)';
        this.RI2C8Value = '';
        this.RI2C8Input2 = 'Highest Conc. Tested (uM)';
        this.RI2C8Value2 = '';
        this.RI2C9Input = 'IC50 (uM)';
        this.RI2C9Value = '';
        this.RI2C9Input2 = 'Highest Conc. Tested (uM)';
        this.RI2C9Value2 = '';
        this.RI2C19Input = 'IC50 (uM)';
        this.RI2C19Value = '';
        this.RI2C19Input2 = 'Highest Conc. Tested (uM)';
        this.RI2C19Value2 = '';
        this.RI2D6Input = 'IC50 (uM)';
        this.RI2D6Value = '';
        this.RI2D6Input2 = 'Highest Conc. Tested (uM)';
        this.RI2D6Value2 = '';
        this.RI3A4MidInput = 'IC50 (uM)';
        this.RI3A4MidValue = '';
        this.RI3A4MidInput2 = 'Highest Conc. Tested (uM)';
        this.RI3A4MidValue2 = '';
        this.RI3A4TstInput = 'IC50 (uM)';
        this.RI3A4TstValue = '';
        this.RI3A4TstInput2 = 'Highest Conc. Tested (uM)';
        this.RI3A4TstValue2 = '';
        this.TDI2C9CKS = 'None';
        this.TDI2C9Kinact = '';
        this.TDI2C9KI = '';
        this.TDI2C9Kdeg = '';
        this.TDI2C9Input2 = 'Conc Tested (uM)';
        this.TDI2C9Value2 = '';
        this.TDI2C19CKS = 'None';
        this.TDI2C19Kinact = '';
        this.TDI2C19KI = '';
        this.TDI2C19Kdeg = '';
        this.TDI2C19Input2 = 'Conc Tested (uM)';
        this.TDI2C19Value2 = '';
        this.TDI2D6CKS = 'None';
        this.TDI2D6Kinact = '';
        this.TDI2D6KI = '';
        this.TDI2D6Kdeg = '';
        this.TDI2D6Input2 = 'Conc Tested (uM)';
        this.TDI2D6Value2 = '';
        this.TDI3A4MidCKS = 'None';
        this.TDI3A4MidKinact = '';
        this.TDI3A4MidKI = '';
        this.TDI3A4MidKdeg = '';
        this.TDI3A4MidInput2 = 'Conc Tested (uM)';
        this.TDI3A4MidValue2 = '';
        this.Induction1A2CFI = 'No';
        this.Induction1A2EC50 = '';
        this.Induction1A2Emax = '';
        this.Induction1A2Input2 = 'Conc Tested (uM)';
        this.Induction1A2Value2 = '';
        this.Induction2B6CFI = 'No';
        this.Induction2B6EC50 = '';
        this.Induction2B6Emax = '';
        this.Induction2B6Input2 = 'Conc Tested (uM)';
        this.Induction2B6Value2 = '';
        this.Induction3ACFI = 'No';
        this.Induction3AEC50 = '';
        this.Induction3AEmax = '';
        this.Induction3AInput2 = 'Conc Tested (uM)';
        this.Induction3AValue2 = '';
        this.Note = '';
        this.RIComment = '';
        this.TDIComment = '';
        this.Inductiontested = false;
        this.FirstURL = '';
        this.SecoundURL = '';
        this.ThirdURL = '';
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
            'FirstURL,SecoundURL,ThirdURL,' +
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
                            this.CYP450Data = cyp450Data.d.results[0];
                            this.setData(this.CYP450Data);
                        } else {
                            this.clearData();
                            //this.NoRecord.emit("No Data");
                            console.log('No Data');
                        }
                    }
                },
                (error) => {
                    this.error = 'Problem accessing the Service';
                    console.log(this.error);
                });
    }
    setData(cyp450Data: CYP450Data) {
        this.createNew = false;
        this.RI1A2Input = this.setDropdown(cyp450Data.RI1A2Input);
        this.RI1A2Value = cyp450Data.RI1A2Value;
        this.RI1A2Input2 = this.setDropdown(cyp450Data.RI1A2Input2);
        this.RI1A2Value2 = cyp450Data.RI1A2Value2;
        this.RI2B6Input = this.setDropdown(cyp450Data.RI2B6Input);
        this.RI2B6Value = cyp450Data.RI2B6Value;
        this.RI2B6Input2 = this.setDropdown(cyp450Data.RI2B6Input2);
        this.RI2B6Value2 = cyp450Data.RI2B6Value2;
        this.RI2C8Input = this.setDropdown(cyp450Data.RI2C8Input);
        this.RI2C8Value = cyp450Data.RI2C8Value;
        this.RI2C8Input2 = this.setDropdown(cyp450Data.RI2C8Input2);
        this.RI2C8Value2 = cyp450Data.RI2C8Value2;
        this.RI2C9Input = this.setDropdown(cyp450Data.RI2C9Input);
        this.RI2C9Value = cyp450Data.RI2C9Value;
        this.RI2C9Input2 = this.setDropdown(cyp450Data.RI2C9Input2);
        this.RI2C9Value2 = cyp450Data.RI2C9Value2;
        this.RI2C19Input = this.setDropdown(cyp450Data.RI2C19Input);
        this.RI2C19Value = cyp450Data.RI2C19Value;
        this.RI2C19Input2 = this.setDropdown(cyp450Data.RI2C19Input2);
        this.RI2C19Value2 = cyp450Data.RI2C19Value2;
        this.RI2D6Input = this.setDropdown(cyp450Data.RI2D6Input);
        this.RI2D6Value = cyp450Data.RI2D6Value;
        this.RI2D6Input2 = this.setDropdown(cyp450Data.RI2D6Input2);
        this.RI2D6Value2 = cyp450Data.RI2D6Value2;
        this.RI3A4MidInput = this.setDropdown(cyp450Data.RI3A4MidInput);
        this.RI3A4MidValue = cyp450Data.RI3A4MidValue;
        this.RI3A4MidInput2 = this.setDropdown(cyp450Data.RI3A4MidInput2);
        this.RI3A4MidValue2 = cyp450Data.RI3A4MidValue2;
        this.RI3A4TstInput = this.setDropdown(cyp450Data.RI3A4TstInput);
        this.RI3A4TstValue = cyp450Data.RI3A4TstValue;
        this.RI3A4TstInput2 = this.setDropdown(cyp450Data.RI3A4TstInput2);
        this.RI3A4TstValue2 = cyp450Data.RI3A4TstValue2;
        this.TDI2C9CKS = cyp450Data.TDI2C9CKS;
        this.TDI2C9Kinact = cyp450Data.TDI2C9Kinact;
        this.TDI2C9KI = cyp450Data.TDI2C9KI;
        this.TDI2C9Kdeg = cyp450Data.TDI2C9Kdeg;
        this.TDI2C9Input2 = this.setDropdown(cyp450Data.TDI2C9Input2);
        this.TDI2C9Value2 = cyp450Data.TDI2C9Value2;
        this.TDI2C19CKS = cyp450Data.TDI2C19CKS;
        this.TDI2C19Kinact = cyp450Data.TDI2C19Kinact;
        this.TDI2C19KI = cyp450Data.TDI2C19KI;
        this.TDI2C19Kdeg = cyp450Data.TDI2C19Kdeg;
        this.TDI2C19Input2 = this.setDropdown(cyp450Data.TDI2C19Input2);
        this.TDI2C19Value2 = cyp450Data.TDI2C19Value2;
        this.TDI2D6CKS = cyp450Data.TDI2D6CKS;
        this.TDI2D6Kinact = cyp450Data.TDI2D6Kinact;
        this.TDI2D6KI = cyp450Data.TDI2D6KI;
        this.TDI2D6Kdeg = cyp450Data.TDI2D6Kdeg;
        this.TDI2D6Input2 = this.setDropdown(cyp450Data.TDI2D6Input2);
        this.TDI2D6Value2 = cyp450Data.TDI2D6Value2;
        this.TDI3A4MidCKS = cyp450Data.TDI3A4MidCKS;
        this.TDI3A4MidKinact = cyp450Data.TDI3A4MidKinact;
        this.TDI3A4MidKI = cyp450Data.TDI3A4MidKI;
        this.TDI3A4MidKdeg = cyp450Data.TDI3A4MidKdeg;
        this.TDI3A4MidInput2 = this.setDropdown(cyp450Data.TDI3A4MidInput2);
        this.TDI3A4MidValue2 = cyp450Data.TDI3A4MidValue2;
        this.Induction1A2CFI = cyp450Data.Induction1A2CFI;
        this.Induction1A2EC50 = cyp450Data.Induction1A2EC50;
        this.Induction1A2Emax = cyp450Data.Induction1A2Emax;
        this.Induction1A2Input2 = this.setDropdown(cyp450Data.Induction1A2Input2);
        this.Induction1A2Value2 = cyp450Data.Induction1A2Value2;
        this.Induction2B6CFI = cyp450Data.Induction2B6CFI;
        this.Induction2B6EC50 = cyp450Data.Induction2B6EC50;
        this.Induction2B6Emax = cyp450Data.Induction2B6Emax;
        this.Induction2B6Input2 = this.setDropdown(cyp450Data.Induction2B6Input2);
        this.Induction2B6Value2 = cyp450Data.Induction2B6Value2;
        this.Induction3ACFI = cyp450Data.Induction3ACFI;
        this.Induction3AEC50 = cyp450Data.Induction3AEC50;
        this.Induction3AEmax = cyp450Data.Induction3AEmax;
        this.Induction3AInput2 = this.setDropdown(cyp450Data.Induction3AInput2);
        this.Induction3AValue2 = cyp450Data.Induction3AValue2;
        this.Note = cyp450Data.Note;
        this.RIComment = cyp450Data.RIComment;
        this.TDIComment = cyp450Data.TDIComment;
        this.Inductiontested = cyp450Data.Inductiontested;

    }
    setDropdown(data: string): string {
        if (data !== null) {
            return data;
        } else {
            return '';
        }
    }
    saveClick(): void {
        if (this.createNew === true) {
            this.saveChanges();
        } else {
            this.editRecord();
        }
    }
    saveChanges(): void {
        // console.log('saveChanges' + this.createNew);
        // console.log(this.Compound);
        // console.log(this.Program);
        if (this.Compound !== '' && this.Program !== '') {
            this._appService.getService().subscribe(
                (res) => {
                    // console.log(res.length);
                    // console.log(res);
                    if (res.length !== 0) {
                        // console.log('res' + res.d.GetContextWebInformation.FormDigestValue);
                        // console.log('Inside Click');
                        const url = '/_api/web/lists/getbytitle(\'CYP450Data\')/items';
                        this._appService.addDatatoList(url, {
                            ProgramId: this.Program,
                            CompoundId: this.Compound,
                            RI1A2Input: (this.RI1A2Input),
                            RI1A2Value: this.RI1A2Value,
                            RI1A2Input2: this.RI1A2Input2,
                            RI1A2Value2: this.RI1A2Value2,
                            RI2B6Input: this.RI2B6Input,
                            RI2B6Value: this.RI2B6Value,
                            RI2B6Input2: this.RI2B6Input2,
                            RI2B6Value2: this.RI2B6Value2,
                            RI2C8Input: this.RI2C8Input,
                            RI2C8Value: this.RI2C8Value,
                            RI2C8Input2: this.RI2C8Input2,
                            RI2C8Value2: this.RI2C8Value2,
                            RI2C9Input: this.RI2C9Input,
                            RI2C9Value: this.RI2C9Value,
                            RI2C9Input2: this.RI2C9Input2,
                            RI2C9Value2: this.RI2C9Value2,
                            RI2C19Input: this.RI2C19Input,
                            RI2C19Value: this.RI2C19Value,
                            RI2C19Input2: this.RI2C19Input2,
                            RI2C19Value2: this.RI2C19Value2,
                            RI2D6Input: this.RI2D6Input,
                            RI2D6Value: this.RI2D6Value,
                            RI2D6Input2: this.RI2D6Input2,
                            RI2D6Value2: this.RI2D6Value2,
                            RI3A4MidInput: this.RI3A4MidInput,
                            RI3A4MidValue: this.RI3A4MidValue,
                            RI3A4MidInput2: this.RI3A4MidInput2,
                            RI3A4MidValue2: this.RI3A4MidValue2,
                            RI3A4TstInput: this.RI3A4TstInput,
                            RI3A4TstValue: this.RI3A4TstValue,
                            RI3A4TstInput2: this.RI3A4TstInput2,
                            RI3A4TstValue2: this.RI3A4TstValue2,
                            TDI2C9CKS: this.TDI2C9CKS,
                            TDI2C9Kinact: this.TDI2C9Kinact,
                            TDI2C9KI: this.TDI2C9KI,
                            TDI2C9Kdeg: this.TDI2C9Kdeg,
                            TDI2C9Input2: this.TDI2C9Input2,
                            TDI2C9Value2: this.TDI2C9Value2,
                            TDI2C19CKS: this.TDI2C19CKS,
                            TDI2C19Kinact: this.TDI2C19Kinact,
                            TDI2C19KI: this.TDI2C19KI,
                            TDI2C19Kdeg: this.TDI2C19Kdeg,
                            TDI2C19Input2: this.TDI2C19Input2,
                            TDI2C19Value2: this.TDI2C19Value2,
                            TDI2D6CKS: this.TDI2D6CKS,
                            TDI2D6Kinact: this.TDI2D6Kinact,
                            TDI2D6KI: this.TDI2D6KI,
                            TDI2D6Kdeg: this.TDI2D6Kdeg,
                            TDI2D6Input2: this.TDI2D6Input2,
                            TDI2D6Value2: this.TDI2D6Value2,
                            TDI3A4MidCKS: this.TDI3A4MidCKS,
                            TDI3A4MidKinact: this.TDI3A4MidKinact,
                            TDI3A4MidKI: this.TDI3A4MidKI,
                            TDI3A4MidKdeg: this.TDI3A4MidKdeg,
                            TDI3A4MidInput2: this.TDI3A4MidInput2,
                            TDI3A4MidValue2: this.TDI3A4MidValue2,
                            Induction1A2CFI: this.Induction1A2CFI,
                            Induction1A2EC50: this.Induction1A2EC50,
                            Induction1A2Emax: this.Induction1A2Emax,
                            Induction1A2Input2: this.Induction1A2Input2,
                            Induction1A2Value2: this.Induction1A2Value2,
                            Induction2B6CFI: this.Induction2B6CFI,
                            Induction2B6EC50: this.Induction2B6EC50,
                            Induction2B6Emax: this.Induction2B6Emax,
                            Induction2B6Input2: this.Induction2B6Input2,
                            Induction2B6Value2: this.Induction2B6Value2,
                            Induction3ACFI: this.Induction3ACFI,
                            Induction3AEC50: this.Induction3AEC50,
                            Induction3AEmax: this.Induction3AEmax,
                            Induction3AInput2: this.Induction3AInput2,
                            Induction3AValue2: this.Induction3AValue2,
                            Note: this.Note,
                            RIComment: this.RIComment,
                            TDIComment: this.TDIComment,
                            Inductiontested: this.Inductiontested,
                            FirstURL:
                            {
                                'Description': "Click Here",
                                'Url': this.FirstURL
                            },
                            SecoundURL:
                            {
                                'Description': "Click Here",
                                'Url': this.SecoundURL
                            },
                            ThirdURL:
                            {
                                'Description': "Click Here",
                                'Url': this.ThirdURL
                            },
                        }, res.d.GetContextWebInformation.FormDigestValue)
                            .subscribe(
                                (dataresponse) => {
                                    // console.log(dataresponse.length);
                                    if (dataresponse.length === 0) {
                                        this.toastr.error('Problem creating record. Please contact IT.');
                                        //this.error = 'Problem creating record. Please contact IT.';
                                        //this.message = '';
                                    } else {
                                        // console.log('Inside else');
                                        // console.log(dataresponse.d);
                                        this.CYP450Data = dataresponse.d;
                                        this.RecordAdded.emit(this.CYP450Data);
                                        this.toastr.success('Added new CYP450 Data');
                                        // this.message = 'Added new CYP450 Data';
                                        // this.error = '';
                                        this.createNew = false;
                                    }
                                },
                                (error) => {
                                    this.toastr.error('Problem creating record. Please contact IT.');
                                    // this.error = 'Problem creating record. Please contact IT.';
                                    // this.message = '';
                                });
                    } else {
                        this.toastr.error('Problem creating record. Please contact IT.');
                        // this.error = 'Problem creating record. Please contact IT.';
                        // this.message = '';
                    }
                },
                (error) => {
                    this.toastr.error('Problem creating record. Please contact IT.');
                    // this.error = 'Problem creating record. Please contact IT.';
                    // this.message = '';
                });
        }
    }
    editRecord(): void {
        // console.log('editRecord' + this.createNew);
        // console.log(this.Compound);
        // console.log(this.Program);
        if (this.Compound !== '' && this.Program !== '') {
            this._appService.getService().subscribe(
                (res) => {
                    // console.log(res.length);
                    // console.log(res);
                    if (res.length !== 0) {
                        // console.log('res' + res.d.GetContextWebInformation.FormDigestValue);
                        // console.log('Inside Click');
                        const url = '/_api/web/lists/getbytitle(\'CYP450Data\')/items(' + this.CYP450Data.Id + ')';
                        this._appService.editDatatoList(url, {
                            RI1A2Input: (this.RI1A2Input),
                            RI1A2Value: this.RI1A2Value,
                            RI1A2Input2: this.RI1A2Input2,
                            RI1A2Value2: this.RI1A2Value2,
                            RI2B6Input: this.RI2B6Input,
                            RI2B6Value: this.RI2B6Value,
                            RI2B6Input2: this.RI2B6Input2,
                            RI2B6Value2: this.RI2B6Value2,
                            RI2C8Input: this.RI2C8Input,
                            RI2C8Value: this.RI2C8Value,
                            RI2C8Input2: this.RI2C8Input2,
                            RI2C8Value2: this.RI2C8Value2,
                            RI2C9Input: this.RI2C9Input,
                            RI2C9Value: this.RI2C9Value,
                            RI2C9Input2: this.RI2C9Input2,
                            RI2C9Value2: this.RI2C9Value2,
                            RI2C19Input: this.RI2C19Input,
                            RI2C19Value: this.RI2C19Value,
                            RI2C19Input2: this.RI2C19Input2,
                            RI2C19Value2: this.RI2C19Value2,
                            RI2D6Input: this.RI2D6Input,
                            RI2D6Value: this.RI2D6Value,
                            RI2D6Input2: this.RI2D6Input2,
                            RI2D6Value2: this.RI2D6Value2,
                            RI3A4MidInput: this.RI3A4MidInput,
                            RI3A4MidValue: this.RI3A4MidValue,
                            RI3A4MidInput2: this.RI3A4MidInput2,
                            RI3A4MidValue2: this.RI3A4MidValue2,
                            RI3A4TstInput: this.RI3A4TstInput,
                            RI3A4TstValue: this.RI3A4TstValue,
                            RI3A4TstInput2: this.RI3A4TstInput2,
                            RI3A4TstValue2: this.RI3A4TstValue2,
                            TDI2C9CKS: this.TDI2C9CKS,
                            TDI2C9Kinact: this.TDI2C9Kinact,
                            TDI2C9KI: this.TDI2C9KI,
                            TDI2C9Kdeg: this.TDI2C9Kdeg,
                            TDI2C9Input2: this.TDI2C9Input2,
                            TDI2C9Value2: this.TDI2C9Value2,
                            TDI2C19CKS: this.TDI2C19CKS,
                            TDI2C19Kinact: this.TDI2C19Kinact,
                            TDI2C19KI: this.TDI2C19KI,
                            TDI2C19Kdeg: this.TDI2C19Kdeg,
                            TDI2C19Input2: this.TDI2C19Input2,
                            TDI2C19Value2: this.TDI2C19Value2,
                            TDI2D6CKS: this.TDI2D6CKS,
                            TDI2D6Kinact: this.TDI2D6Kinact,
                            TDI2D6KI: this.TDI2D6KI,
                            TDI2D6Kdeg: this.TDI2D6Kdeg,
                            TDI2D6Input2: this.TDI2D6Input2,
                            TDI2D6Value2: this.TDI2D6Value2,
                            TDI3A4MidCKS: this.TDI3A4MidCKS,
                            TDI3A4MidKinact: this.TDI3A4MidKinact,
                            TDI3A4MidKI: this.TDI3A4MidKI,
                            TDI3A4MidKdeg: this.TDI3A4MidKdeg,
                            TDI3A4MidInput2: this.TDI3A4MidInput2,
                            TDI3A4MidValue2: this.TDI3A4MidValue2,
                            Induction1A2CFI: this.Induction1A2CFI,
                            Induction1A2EC50: this.Induction1A2EC50,
                            Induction1A2Emax: this.Induction1A2Emax,
                            Induction1A2Input2: this.Induction1A2Input2,
                            Induction1A2Value2: this.Induction1A2Value2,
                            Induction2B6CFI: this.Induction2B6CFI,
                            Induction2B6EC50: this.Induction2B6EC50,
                            Induction2B6Emax: this.Induction2B6Emax,
                            Induction2B6Input2: this.Induction2B6Input2,
                            Induction2B6Value2: this.Induction2B6Value2,
                            Induction3ACFI: this.Induction3ACFI,
                            Induction3AEC50: this.Induction3AEC50,
                            Induction3AEmax: this.Induction3AEmax,
                            Induction3AInput2: this.Induction3AInput2,
                            Induction3AValue2: this.Induction3AValue2,
                            Note: this.Note,
                            RIComment: this.RIComment,
                            TDIComment: this.TDIComment,
                            Inductiontested: this.Inductiontested,
                            FirstURL:
                            {
                                'Description': "Click Here",
                                'Url': this.FirstURL
                            },
                            SecoundURL:
                            {
                                'Description': "Click Here",
                                'Url': this.SecoundURL
                            },
                            ThirdURL:
                            {
                                'Description': "Click Here",
                                'Url': this.ThirdURL
                            },
                        }, res.d.GetContextWebInformation.FormDigestValue)
                            .subscribe(
                                (dataresponse) => {
                                    // console.log('Inside else');
                                    // console.log(dataresponse);
                                    this.toastr.success('Modified CYP450 Data');
                                    // this.message = 'Modified CYP450 Data';
                                    // this.error = '';
                                },
                                (error) => {
                                    this.toastr.error('Problem creating record. Please contact IT.');
                                    // this.error = 'Problem creating record. Please contact IT.';
                                    // this.message = '';
                                });
                    } else {
                        this.toastr.error('Problem creating record. Please contact IT.');
                        // this.error = 'Problem creating record. Please contact IT.';
                        // this.message = '';
                    }
                },
                (error) => {
                    this.toastr.error('Problem creating record. Please contact IT.');
                    // this.error = 'Problem creating record. Please contact IT.';
                    // this.message = '';
                });
        }
    }
}
