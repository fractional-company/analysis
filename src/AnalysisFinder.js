import analyses from "./analyses"

class AnalysisFinder {
    static getAnalysis(slugOrContractAddress, tokenId = null) {
        return analyses
            .find((item) => item.slug.toLowerCase() === slugOrContractAddress.toLowerCase()
                ? true
                // if not found search by contract address & token ids
                : item.contracts.find(contract => !(contract.address.toLowerCase() === slugOrContractAddress.toLowerCase())
                    ? false
                    : contract.tokenIds && contract.tokenIds.length > 0
                        ? contract.tokenIds.includes(tokenId)
                        : true
                )
            )
    }
}

export default AnalysisFinder
