
import { dataPinjamBuku, pinjamBuku, ubahPinjamBuku } from "@/app/utils/services";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await pinjamBuku(req);
  return NextResponse.json(res);
}
export async function GET() {
    const res = await dataPinjamBuku();
    return NextResponse.json(res);
  }

  export async function PUT(request: NextRequest) {
    const req = await request.json();
    const res = await ubahPinjamBuku(req);
    return NextResponse.json(res,{status:res.statusCode});
  }
