import { PrismaClient, Role, SkillLevel, TaskStatus } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: { email: "admin@example.com", name: "Admin", role: Role.ADMIN },
  });
  await prisma.user.upsert({
    where: { email: "mentor@example.com" },
    update: {},
    create: { email: "mentor@example.com", name: "Mentor", role: Role.MENTOR },
  });
  await prisma.user.upsert({
    where: { email: "article@example.com" },
    update: {},
    create: { email: "article@example.com", name: "Article", role: Role.ARTICLE },
  });

  const client = await prisma.client.upsert({
    where: { id: "seed-client" },
    update: {},
    create: { id: "seed-client", name: "Acme Corp" },
  });

  const [gst, audit, returnFiling] = await Promise.all([
    prisma.skill.upsert({
      where: { id: "skill-gst" },
      update: {},
      create: { id: "skill-gst", name: "GST", level: SkillLevel.INTERMEDIATE },
    }),
    prisma.skill.upsert({
      where: { id: "skill-audit" },
      update: {},
      create: { id: "skill-audit", name: "Audit", level: SkillLevel.EXPERIENCED },
    }),
    prisma.skill.upsert({
      where: { id: "skill-return" },
      update: {},
      create: { id: "skill-return", name: "Return Filing", level: SkillLevel.BASIC },
    }),
  ]);

  await prisma.task.create({
    data: {
      title: "GST Reconciliation",
      description: "Monthly reconciliation for Acme Corp",
      status: TaskStatus.IN_PROGRESS,
      assigneeId: admin.id,
      clientId: client.id,
      skills: { connect: [{ id: gst.id }, { id: returnFiling.id }] },
    },
  });

  await prisma.task.create({
    data: {
      title: "Statutory Audit",
      description: "FY 24-25 audit planning",
      status: TaskStatus.TODO,
      clientId: client.id,
      skills: { connect: [{ id: audit.id }] },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
