const versionFormatRule = (parsed) => {
  const { header } = parsed;
  const pattern = /^\[\d+\.\d+\.\d+\]\s\|\s.+$/;
  
  if (!pattern.test(header)) {
    return [
      false,
      'Commit must be in format: [x.x.x] | message\nExample: [1.0.0] | Add authentication feature'
    ];
  }
  
  return [true];
};

module.exports = {
  extends: [],
  plugins: [
    {
      rules: {
        'version-format': versionFormatRule
      }
    }
  ],
  rules: {
    'version-format': [2, 'always']
  }
};