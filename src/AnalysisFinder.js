import analyses from "./analyses"

class AnalysisFinder {
    static getAnalysis(slugOrContractAddress, tokenId = null) {
        return analyses
            .reduce(async (carry, item) => {

                // if already found, return the analysis
                if (carry && await carry) {
                    return carry
                }

                let isFound = item.slug.toLowerCase() === slugOrContractAddress.toLowerCase();

                // if not found check the contract addresses & token id (if analysis are limited to token ids)
                if (!isFound) {
                    isFound = item.contracts.find(contract => {
                        let contractMatch = contract.address.toLowerCase() === slugOrContractAddress.toLowerCase()
                        if (!contractMatch) {
                            return false
                        }
                        if (contract.tokenIds && contract.tokenIds.length > 0) {
                            return contract.tokenIds.includes(tokenId)
                        }
                        return true
                    });
                }

                // if found, load the analysis
                if (isFound) {
                    let data = await item.load()
                    item.analysis = data.default
                        ? data.default
                        : data
                    return item
                }

                return false
            }, null)
    }
}

export default AnalysisFinder
