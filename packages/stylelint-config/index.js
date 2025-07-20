module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "block-no-empty": true,
    "unit-no-unknown": true,
    "property-no-unknown": [true, {
      "ignoreProperties": ["composes"]
    }],
    "selector-pseudo-element-no-unknown": [true, {
      "ignorePseudoElements": ["v-deep"]
    }]
  }
};