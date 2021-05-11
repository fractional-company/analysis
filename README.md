# @fractional-company/analysis

[![npm](https://img.shields.io/npm/v/@fractional-company/analysis)](https://unpkg.com/@solana/spl-token-registry@latest/)

Fractional Analysis is a package that includes analysis of NFT collections that are shown on the [fractional.art](https://fractional.art). 

The analysis include: name, website, slug, description,
contract information (address, token ids - if needed) and the analysis with that cover at least 4 topics such as general overview, cultural significance, macro, metrics and risk.

## Installation

```bash
npm install @fractional-company/analysis
```

```bash
yarn add @fractional-company/analysis
```

## Examples

### Query available analyses

```javascript
await AnalysisFinder.getAnalysis("contractAddress or slug", "tokenId (optional)");
```

## Adding new analysis

Submit PR with the added JSON Analysis file to `src/analyses/` and updated `src/analyses/index.js`.

Please follow the Analysis specification found here: `src/analyses/analysis.schema.json` and `src/analyses/index.js`
