class Invoice {
  private invoiceContent: Record<string, string>;

  private invoiceURL: string;

  generateRawInvoice(orderID: string) {
    console.log(`Retrieving order informations from ID: ${orderID}`);
  }

  formatAndSaveInvoice() {
    console.log(
      "Formatting Invoice content into PDF and save it",
      this.invoiceContent
    );

    this.invoiceURL = "https://s3.machin.com/invoice_001.pdf";
  }

  sendNotification(type: string) {
    switch (type) {
      case "EMAIL":
        console.log(
          `Hey ! Your invoice is available at: ${this.invoiceURL} if this mail doesn't show correctly ...blabla`
        );
        break;
      case "SMS":
        console.log(`Hey ! Your invoice is available at: ${this.invoiceURL}`);
        break;
    }
  }
}
