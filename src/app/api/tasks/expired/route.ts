import { connectDb } from "@/utils/database";
import { TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  try {
    await connectDb();
    const expiredTasks = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate },
    });

    return NextResponse.json({
      message: "タスク取得成功",
      tasks: expiredTasks,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "タスク取得失敗" });
  }
};

export const dynamic = "force-dynamic";
