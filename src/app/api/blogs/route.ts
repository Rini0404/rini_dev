import { NextResponse } from "next/server";
import prisma from '@/prisma/client';
import { BlogsArray } from "../../blogs/blog-types";

// ... other imports ...

async function GET_BLOGS(): Promise<NextResponse> {
  try {
    const blogs: BlogsArray = await prisma.blogs.findMany();
    return new NextResponse(JSON.stringify(blogs), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error: unknown) {
    return new NextResponse(JSON.stringify({ error: (error as Error).message }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } 
}

module.exports = GET_BLOGS;
