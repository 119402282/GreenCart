// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Data = {
  footprint: number
  offset: number
}
//take in product name and return carbon footprint


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { string: productType, number: quantity, string: typeOfOffset} = req.query
  const footprint :any = calculateFootprint(productType);
  const offset :any = calculateOffset(footprint, typeOfOffset)

  res.status(200).json({ 
    footprint: footprint,
    offset: offset
  })
}

const calculateFootprint = (productType :any) => {
  //search users db for product type and return carbon footprint
  const footprint = prisma.product.findMany({
    where: {
      productType: productType
    }
  });
  footprint.then((result) => {
    return result[0].offsetCarbonKg;
  })

}

const calculateOffset = (footprint :any, typeOfOffset :any) => {
  //return carbon offset

  

}