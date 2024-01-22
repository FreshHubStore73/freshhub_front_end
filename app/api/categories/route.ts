export async function GET() {
    const url = process.env.SERVER_URL;
    try {
        const response = await fetch('url');
        const data = await response.json();
        return Response.json(data);
    } catch(error) {
        console.log(error);
    }
}