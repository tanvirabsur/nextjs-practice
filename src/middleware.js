import { NextRequest, NextResponse } from "next/server";

export function middleware(req ){
    const path = req.nextUrl.pathname

    console.log("Current path:", path);
    return NextResponse.next()
}