import { connectDb } from "@/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const allTasks = await TaskModel.find();

    return NextResponse.json({ message: "タスク取得成功", tasks: allTasks });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "タスク取得失敗" });
  }
};

export const dynamic = "force-dynamic";
