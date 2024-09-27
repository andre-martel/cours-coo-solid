type InvoiceDependencies = {
  invoiceContent: Record<string, string>;
  invoiceURL: string;
};

class Invoice {
  private _invoiceContent: Record<string, string>;

  private _invoiceURL: string;

  constructor({ invoiceContent, invoiceURL }: InvoiceDependencies) {
    this._invoiceContent = invoiceContent;
    this._invoiceURL = invoiceURL;
  }

  public get invoiceContent() {
    return this._invoiceContent;
  }

  public get invoiceURL() {
    return this._invoiceURL;
  }

  public set invoiceURL(url: string) {
    this._invoiceURL = url;
  }

  generateRawInvoice(orderID: string) {
    console.log(`Retrieving order informations from ID: ${orderID}`);
  }
}
