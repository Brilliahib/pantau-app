import { retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({
      status: 400,
      message: "Bad Request: ID parameter is missing",
    });
  }

  console.log(`Fetching data for ID: ${id}`); // Debugging

  const detailPantau = await retrieveDataById("plants", id);

  if (detailPantau) {
    console.log(`Data found for ID: ${id}`, detailPantau); // Debugging
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: detailPantau,
    });
  }

  console.error(`No data found for ID: ${id}`); // Debugging
  return NextResponse.json({
    status: 404,
    message: "Not Found",
    data: {},
  });
}
