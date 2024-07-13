import { NextRequest } from "next/server.js";
import { connectDb } from "@/utils/database";
import { TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectDb();
    const task = await TaskModel.findById(params.id);

    if (!task) return NextResponse.json({ message: "タスクが存在しません" });

    return NextResponse.json({ message: "タスク取得成功", task });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "タスク取得失敗" });
  }
};

export const dynamic = "force-dynamic";
