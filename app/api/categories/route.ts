export async function GET() {
    //const baseUrl = process.env.SERVER_URL;
    //const url = new URL('/', baseUrl);
    try {
        //const response = await fetch(url);
        //const data = await response.json();
        const data = ['pizza', 'burgers', 'salads', 'desserts'];
        return Response.json(data);
    } catch(error) {
        console.log(error);
    }
}