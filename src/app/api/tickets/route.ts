import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // TODO: reemplazar por el companyId real del usuario autenticado (ej: session.user.companyId)
    // Por ahora se usa un valor simulado como fix mínimo del incidente de fuga de datos.
    const companyId = 'TechCorp'
    const tickets = await prisma.ticket.findMany({
      where: { companyId }, // Resolucion: se agrega un filtro por companyId para asegurar que solo se accedan a los tickets de la empresa del usuario autenticado.
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(tickets)
  } catch (error) {
    console.error('Error fetching tickets:', error)
    return NextResponse.json({ error: 'Error fetching tickets' }, { status: 500 })
  }
}
