// ****************************************************
// List of collection analysis
// ****************************************************
//
// INSTRUCTIONS:
// 1. Make an export const
// 2. Add the analysis to the default array at the bottom
//
// export const example = {
//     "name": "Collection name (required)",
//     "slug": "Collection-slug (required)",
//     "description": "Collection description (max 100 characters)" // used for SEO,
//     "website": "Collection website (optional)",
//     "contracts": [
//         {
//             "address": "Collection contract address (required)",
//             "tokenIds": ["Collection contract token ids (if necessary)"] (optional)
//         }
//     ],
//     "analysis": () => import("path to the file in the folder") (required)
// }
// ****************************************************

export default [
    {
        "name": "Crypto Punks",
        "description": "Crypto Punks description",
        "slug": "cryptopunks",
        "website": "https://wwww.lavalabs.com",
        "contracts": [
            {
                "address": "test",
                "tokenIds": []
            },
            {
                "address": "test2",
                "tokenIds": []
            }
        ],
        "analysis": () => import("./cryptopunks.json"),
    },
]
