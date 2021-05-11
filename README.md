# Fractional Analysis

#  fractional-company/analysis 

[![npm](https://img.shields.io/npm/v/fractional-company/analysis)](https://unpkg.com/@solana/spl-token-registry@latest/) 

Fractional Analysis Registry is a package that includes analyses that are shown on .
The JSON schema for the tokens includes: chainId, address, name, decimals, symbol, logoURI (optional), tags (optional), and custom extensions metadata.

## Installation

```bash
npm install fractional-company/analysis
```

```bash
yarn add fractional-company/analysis
```

## Examples

### Query available analyses

```javascript
await AnalysisFinder.getAnalysis("contractAddress or slug", "tokenId (optional)");
```

## Adding new analysis

Submit PR with the added JSON Analysis file to `src/analyses/` and updated `src/analyses/index.js`.

Please follow the Analysis specification found here: `src/analyses/analysis.schema.json` and `src/analyses/index.js`
