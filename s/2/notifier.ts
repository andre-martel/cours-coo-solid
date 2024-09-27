export class Notifier {
  sendNotification(invoice: Invoice, type: string) {
    switch (type) {
      case "EMAIL":
        console.log(
          `Hey ! Your invoice is available at: ${invoice.invoiceURL} if this mail doesn't show correctly ...blabla`
        );
        break;
      case "SMS":
        console.log(
          `Hey ! Your invoice is available at: ${invoice.invoiceURL}`
        );
        break;
    }
  }
}
