interface InvoiceRepository {
  getInvoice(): string;
  createInvoice(): string;
}

class LegacyOldSystemInvoiceRepository implements InvoiceRepository {
  getInvoice(): string {
    return "http://s3.com/invoice.pdf";
  }

  createInvoice(): string {
    console.log("Successfuly created invoice");

    return "http://s3.com/invoice.pdf";
  }
}

class NewMigratedSystemInvoiceRepository implements InvoiceRepository {
  getInvoice(): string {
    return "http://storage.com/invoice.pdf";
  }

  createInvoice(): string {
    throw new Error("Method not implemented."); // Because new system has not migrated their creation API yet
  }
}
