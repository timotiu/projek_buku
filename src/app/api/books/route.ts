
import { addBook, getBook } from "@/app/utils/services";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req=await request.json();
    const res=await getBook(req);
    return NextResponse.json(res, { status: res.statusCode });
}
export async function PUT(request: NextRequest) {
    try{
    const req=await request.json();
    const res=await addBook(req);
    return NextResponse.json(res, { status: res.statusCode });}
    catch(err){
        return NextResponse.json({message:err})
    }
}