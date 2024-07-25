export async function GET() {
	return new Response(JSON.stringify({ msg: "GET a Hello from api/test.ts" }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function POST() {
	return new Response(
		JSON.stringify({ msg: "POST a Hello from api/test.ts" }),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}
