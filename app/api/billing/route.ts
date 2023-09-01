import { connectToDB } from '@/utils/database';
import Bills from '@/models/bill.model';

export async function POST(request: Request) {
 await connectToDB();
 try {
  const body = await request.json();
   const bill = new Bills(body);
  await bill.save();
    return new Response(JSON.stringify(bill),{status:201})
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
   const { accountOwner } = body;
   const bills = await Bills.find({ accountOwner });
    return new Response(JSON.stringify(bills),{status:200})
  } catch (error) {
   console.log(error);
  return new Response("failed", { status: 500 })
  }
}