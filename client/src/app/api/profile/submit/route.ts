import { NextRequest, NextResponse } from "next/server";

const NEST_URL = process.env.NEST_API_URL ?? "http://localhost:3001";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, ...rest } = body;

  const res = await fetch(`${NEST_URL}/profile/submit`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: req.headers.get("cookie") ?? "",
    },
    body: JSON.stringify(rest),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
