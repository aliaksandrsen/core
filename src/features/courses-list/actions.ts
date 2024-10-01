"use server";

import { revalidatePath } from "next/cache";
import { CreateCourseListElementCommand } from "./model/types";
import { coursesRepository } from "./courses.repository";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
