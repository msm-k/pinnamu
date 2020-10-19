/**
 * @see https://github.com/pugjs/pug-lint/blob/v2.6.0/docs/rules.md
 */
module.exports = {
  // disallowAttributeConcatenation: false,
  disallowAttributeInterpolation: true,
  // disallowAttributeTemplateString: false,
  disallowBlockExpansion: true,
  disallowClassAttributeWithStaticValue: true,
  // disallowClassLiteralsBeforeAttributes: false,
  // disallowClassLiteralsBeforeIdLiterals: true,
  // disallowClassLiterals: false,
  disallowDuplicateAttributes: true,
  disallowHtmlText: true,
  disallowIdAttributeWithStaticValue: true,
  // disallowIdLiteralsBeforeAttributes: false,
  // disallowIdLiterals: false,
  disallowLegacyMixinCall: true,
  // disallowMultipleLineBreaks: true,
  // disallowSpaceAfterCodeOperator: false,
  // disallowSpacesInsideAttributeBrackets: false,
  disallowSpecificAttributes: [],
  disallowSpecificTags: [],
  // disallowStringConcatenation: false,
  disallowStringInterpolation: true,
  disallowTagInterpolation: true,
  // disallowTemplateString: false,
  disallowTrailingSpaces: true,
  maximumLineLength: 300,
  maximumNumberOfLines: Infinity,
  // requireClassLiteralsBeforeAttributes: true,
  // requireClassLiteralsBeforeIdLiterals: false,
  requireIdLiteralsBeforeAttributes: true,
  // requireLineFeedAtFileEnd: false,
  requireLowerCaseAttributes: true,
  // requireLowerCaseTags: false,
  requireSpaceAfterCodeOperator: true,
  // requireSpacesInsideAttributeBrackets: false,
  requireSpecificAttributes: [
    {
      // :alt="" doesn't work with this rule
      // img: ['alt']
    }
  ],
  requireStrictEqualityOperators: true,
  validateAttributeQuoteMarks: '"',
  validateAttributeSeparator: {
    separator: ' ',
    multiLineSeparator: '\n  '
  },
  validateDivTags: true,
  validateExtensions: true,
  validateIndentation: 2,
  validateLineBreaks: 'LF',
  validateSelfClosingTags: true,
  // validateTemplateString: true
}
