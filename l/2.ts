interface ReadableInvoiceRepository {
  getInvoice(): string;
}

interface WritableInvoiceRepository {
  createInvoice(): string;
}

class LegacyOldSystemInvoiceRepository
  implements ReadableInvoiceRepository, WritableInvoiceRepository
{
  getInvoice(): string {
    return "http://s3.com/invoice.pdf";
  }

  createInvoice(): string {
    console.log("Successfuly created invoice");

    return "http://s3.com/invoice.pdf";
  }
}

class NewMigratedSystemInvoiceRepository implements ReadableInvoiceRepository {
  getInvoice(): string {
    return "http://storage.com/invoice.pdf";
  }
}
