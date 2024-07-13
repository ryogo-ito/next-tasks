import { connectDb } from "@/utils/database";
import { TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const completedTasks = await TaskModel.find({ isCompleted: true });

    return NextResponse.json({
      message: "タスク取得成功",
      tasks: completedTasks,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "タスク取得失敗" });
  }
};

export const dynamic = "force-dynamic";
