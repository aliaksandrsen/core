import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import {
  CourseListElement,
  CreateCourseListElementCommand,
  DeleteCourseListElementCommand,
} from "./model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );

  createCourseElement = cache(
    (command: CreateCourseListElementCommand): Promise<CourseListElement> => {
      return dbClient.course.create({
        data: command,
      });
    },
  );

  deleteCourseElement = cache(
    (command: DeleteCourseListElementCommand): Promise<CourseListElement> => {
      return dbClient.course.delete({
        where: { id: command.id },
      });
    },
  );
}

export const coursesRepository = new CoursesRepository();
