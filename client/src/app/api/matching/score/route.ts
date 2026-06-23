export async function scorePOST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${NEST_URL}/matching/score`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: req.headers.get("cookie") ?? "",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

