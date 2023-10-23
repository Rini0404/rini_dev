import { NextResponse } from "next/server";
import prisma from '@/prisma/client';
import { BlogsProps } from "../../blogs/blog-types";

// ... other imports ...

export default async function GET_BLOGS(): Promise<NextResponse> {
  try {
    const blogs: BlogsProps = await prisma.blogs.findMany();
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