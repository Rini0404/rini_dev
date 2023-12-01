import { NextResponse,  NextRequest } from "next/server";
import prisma from '@/prisma/client';
import { BlogsArray } from "../../blogs/blog-types";

// ... other imports ...

export async function GET(request: Request) {
  try {
    const blogs: BlogsArray = await prisma.blogs.findMany();
    const blogsWithThumbnail: BlogsArray = blogs.map((blog) => {
      // Adjust this mapping based on the actual structure of ProjectProps
      return {
        id: blog.id,
        title: blog.title,
        thumbnail: blog.thumbnail,
        url: blog.url,
        tags: blog.tags,
      };
    });

    return new NextResponse(JSON.stringify(blogsWithThumbnail), {
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

