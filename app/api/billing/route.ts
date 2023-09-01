import { connectToDB } from '@/utils/database';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
  
    return new Response(JSON.stringify({}),{status:201})
  } catch (error) {
   console.log(error);
  return new Response("failed", { status: 500 })
  }
}

// Get Method to get all payment from the database for a user

export async function GET(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
  
    return new Response(JSON.stringify({}),{status:201})
  } catch (error) {
   console.log(error);
  return new Response("failed", { status: 500 })
  }
}