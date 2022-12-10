export const jsonResponse = (body, { status, headers }) => new Response(
	JSON.stringify(body),
	{
		status: status || 200,
		headers: {
			...(headers || {}),
			'Content-Type': 'application/json',
		},
	},
)
