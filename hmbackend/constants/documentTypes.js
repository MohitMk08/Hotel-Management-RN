const DOCUMENT_TYPES = {
  BOOKING: {
    type: "BOOKING",
    prefix: "BKG-",
  },

  INVOICE: {
    type: "INVOICE",
    prefix: "INV-",
  },

  PAYMENT: {
    type: "PAYMENT",
    prefix: "PAY-",
  },

  RECEIPT: {
    type: "RECEIPT",
    prefix: "REC-",
  },

  PURCHASE: {
    type: "PURCHASE",
    prefix: "PO-",
  },
};

module.exports = DOCUMENT_TYPES;
