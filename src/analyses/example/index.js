// Structure:
//
// {
//     name: "string, required",
//     slug: "string, required",
//     description: "string, max 100 characters, required"
//     website: "string, optional",
//     image: {
//           thumbnail: "url, string, required",
//           banner: "url, string, required",
//           source: "string, required"
//         },
//     contracts: [
//         {
//             "address": "string, eth address, required",
//             "tokenIds": array of int, optional
//         }
//     ],
//     analysis: analysis schema
// }
// ****************************************************

export default {
    name: "Collection name ",
    slug: "collection-slug",
    description: "Collection description",
    website: "https://wwww.website.com",
    image: {
        thumbnail: "Thumbnail URL",
        banner: "Banner URL",
        source: "Image source"
    },
    contracts: [
        {
            "address": "Contract Address",
            "tokenIds": [1]
        }
    ],
    analysis:  [
        {
            title: "Section title",
            content: "The analysis"
        },
        {
            title: "Section title",
            content: "The analysis"
        },
        {
            title: "Section title",
            content: "The analysis"
        },
    ],
}
