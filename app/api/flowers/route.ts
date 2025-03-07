import { prisma } from '@/app/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const flowers = await prisma.flower.findMany()
    return NextResponse.json(flowers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch flowers' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const flower = await prisma.flower.create({
      data: {
        name: body.name,
        species: body.species,
        description: body.description,
        imageUrl: body.imageUrl,
      },
    })
    return NextResponse.json(flower)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create flower' }, { status: 500 })
  }
} 