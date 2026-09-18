export const REGEX_PATTERNS = {
  // SCTId: 1..35 chars, valid character set
  SCT_ID: /^[0-9a-zA-Z\-?:().,'+]((\/?[0-9a-zA-Z\-?:().,'+ ]*)*(\/[0-9a-zA-Z\-?:().,'+]+|[0-9a-zA-Z\-?:().,'+]+))?$/,

  // BICFI / AnyBIC (8 or 11 alphanumeric chars)
  BIC: /^[A-Z0-9]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/,

  // IBAN: 2-letter country code + 2 check digits + up to 30 alphanumeric
  IBAN: /^[A-Z]{2}[0-9]{2}[a-zA-Z0-9]{1,30}$/,

  // LEI: 18 alphanumeric chars + 2 check digits (total 20)
  LEI: /^[A-Z0-9]{18}[0-9]{2}$/,

  // ISO Date: YYYY-MM-DD
  ISO_DATE: /^\d{4}-\d{2}-\d{2}$/,

  // SCT Instant ISO DateTime: YYYY-MM-DDThh:mm:ss(.sss)?(Z|[+-]hh:mm)
  SCT_INST_DATE_TIME: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?(Z|([+-]\d{2}(:\d{2})?))$/,

  // UUID v4
  UUID_V4: /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i,

  // 2-Letter ISO Country Code
  COUNTRY_CODE: /^[A-Z]{2}$/,

  // Amount: decimal with max 2 decimal places
  AMOUNT: /^\d+(\.\d{1,2})?$/,

  // Must contain at least one non-whitespace character
  NON_EMPTY_TEXT: /\S+/
};