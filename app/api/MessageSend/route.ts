 
 
import { NextResponse } from 'next/server';
 import prisma from "@/app/libs/prismadb"
export async function POST(
    request :Request
) {

    const body = await request.json();
    const {
        email ,name,message,subject,phone
    } = body;

     

    const contact = await prisma.contact.create({
        data:{
            email,
            phone,
            name,
            subject,
            message       
        }
    })
    

    return NextResponse.json(contact,{status:200});
}