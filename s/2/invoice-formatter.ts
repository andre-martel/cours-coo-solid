export class InvoiceFormatter {
  formatAndSaveInvoice(invoice: Invoice) {
    console.log(
      "Formatting Invoice content into PDF and save it",
      invoice.invoiceContent
    );

    invoice.invoiceURL = "https://s3.machin.com/invoice_001.pdf";
  }
}
