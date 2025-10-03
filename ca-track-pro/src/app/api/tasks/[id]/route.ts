import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const task = await prisma.task.findUnique({
    where: { id },
    include: { assignee: true, client: true, skills: true },
  });
  if (!task) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(task);
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const data = await req.json();
  const { id } = await context.params;
  const task = await prisma.task.update({ where: { id }, data });
  return NextResponse.json(task);
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await prisma.task.delete({ where: { id } });
  return NextResponse.json({}, { status: 204 });
}
