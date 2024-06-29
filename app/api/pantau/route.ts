import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  if (id) {
    const detailPantau = await retrieveData("plants");
    if (detailPantau) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailPantau,
      });
    }

    return NextResponse.json({
      status: 404,
      mesagge: "Not Found",
      data: {},
    });
  }

  const plants = await retrieveData("plants");

  return NextResponse.json({ status: 200, message: "Success", plants });
}
