# @fractional-company/analysis

[![npm](https://img.shields.io/npm/v/@fractional-company/analysis)](https://unpkg.com/@solana/spl-token-registry@latest/)

Fractional Analysis is a package that includes analysis of NFT collections that are shown on the [fractional.art](https://fractional.art). 

The analysis include: name, website, slug, description, image,
contract information (address, token ids - if needed) and the analysis with that cover at least 4 topics such as general overview, cultural significance, macro, metrics and risk.

## Adding new analysis

Submit a PR with the added analysis file to `src/analyses/{collection name}` and updated `src/analyses/index.js`.

Please follow the analysis specification found here: `src/analyses/analysis.schema.json` and `src/analyses/example/index.js`
