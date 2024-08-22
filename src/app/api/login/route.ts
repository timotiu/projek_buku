import { loginUser } from "@/app/utils/services";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await loginUser(req);
  return NextResponse.json(res,{status:res.statusCode});
}
