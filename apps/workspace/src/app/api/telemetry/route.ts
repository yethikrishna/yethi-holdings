import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const workspaceSlug = searchParams.get("slug") || "workspace_01";

    // Dynamic import to avoid Prisma initialization at module level
    const { prisma } = await import("@mynd/database");

    const metrics = await prisma.workspace.findUnique({
      where: { slug: workspaceSlug },
      include: {
        agents: {
          include: {
            executionRuns: {
              orderBy: { createdAt: "desc" },
              take: 1,
              include: { traces: true },
            },
          },
        },
        _count: {
          select: { crmContacts: true, networkLogs: true },
        },
      },
    });

    if (!metrics) {
      return NextResponse.json({ error: "Target Workspace context not found" }, { status: 404 });
    }

    const activeRun = metrics.agents[0]?.executionRuns[0];
    const steps = activeRun?.traces.map((t) => ({
      id: t.id,
      name: t.stepName,
      duration: t.durationStr,
      percentage: t.percentage,
    })) || [];

    return NextResponse.json({
      workspaceName: metrics.name,
      crmTotalCount: metrics._count.crmContacts,
      activeAgentSteps: steps,
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Internal Database System Exception" }, { status: 500 });
  }
}
