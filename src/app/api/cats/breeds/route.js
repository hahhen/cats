import { TheCatAPI } from "@thatapicompany/thecatapi";

const theCatAPI = new TheCatAPI(process.env.CAT_API_KEY);

// export async function GET(request) {
//     // const result1 = await theCatAPI.images.searchImages({breeds: "siam"})
//     // const result2 = await theCatAPI.images.searchImages({breeds: "pers"})
//     // const result3 = await theCatAPI.images.searchImages({breeds: "sphy"})
//     // const result4 = await theCatAPI.images.searchImages({breeds: "sfol"})
//     return Response.json({result: "hello"}, { status: 200 });
// }

// // To handle a POST request to /api
// export async function POST(request) {
//     // const result1 = await theCatAPI.images.searchImages({breeds: "siam"})
//     // const result2 = await theCatAPI.images.searchImages({breeds: "pers"})
//     // const result3 = await theCatAPI.images.searchImages({breeds: "sphy"})
//     // const result4 = await theCatAPI.images.searchImages({breeds: "sfol"})
//     return Response.json({result: "hello"}, { status: 200 });
// }

export async function GET(request) {
    // Do whatever you want
    return Response.json({ message: "Hello World" }, { status: 200 });
  }
  
  // To handle a POST request to /api
  export async function POST(request) {
    // Do whatever you want
    return Response.json({ message: "Hello World" }, { status: 200 });
  }