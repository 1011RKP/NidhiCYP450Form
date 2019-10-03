export class Program {
    Id: string;
    Title: string;
}

export class Compound {
    Id: string;
    Title: string;
    Program: Program;
}

export class CYP450Data {
    Id: string;
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

    TDI2C19CKS: string;
    TDI2C19Kinact: string;
    TDI2C19KI: string;
    TDI2C19Kdeg: string;
    TDI2C9Input2: string;
    TDI2C9Value2: string;
    TDI2C9CKS: string;
    TDI2C9Kinact: string;
    TDI2C9KI: string;
    TDI2C9Kdeg: string;
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

    FirstURL: link;
    SecoundURL: link;
    ThirdURL: link;
}

export class link {
    Description: string;
    Url: string;
}
