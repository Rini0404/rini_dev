import { NextResponse, NextRequest } from "next/server";

import { User } from "@/blogs";

// prisma get user

import prisma from "../../../../prisma/client";

export default async function GET() {

  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return NextResponse.json(user);


}