import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split("/")[1];
  const hot = req.cookies["hot"];

  // IF COOKIE hot show content
  if (path === "hot" && hot) {
    return NextResponse.rewrite(`/${hot}`);
  }
  const res = NextResponse.next();

  // Write cookie
  if (path) {
    res.cookie("hot", path);
  }

  return res;
}
