export async function runPOST(req: NextRequest) {
  const res = await fetch(`${NEST_URL}/matching/run`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: req.headers.get("cookie") ?? "",
    },
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
