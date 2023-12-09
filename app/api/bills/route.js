import prisma from "@/config/prisma"
import { NextResponse } from "next/server"

export const POST=async(req)=>{
    try {
        const body=await req.json()
        console.log("body",body)
        const response=await prisma.bill.create({
            data:{
                consumerNumber:body?.consumerNumber,
                units:body?.units,
                address:body?.address,
                status:body?.status
            }
        })
        console.log("response",response)
        return NextResponse.json({message:"successfully bill created"})
        
    } catch (error) {
        console.log("error",error)
        return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
    }
    
}