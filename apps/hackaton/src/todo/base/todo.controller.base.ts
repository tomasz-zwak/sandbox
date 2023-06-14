/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TodoService } from "../todo.service";
import { TodoCreateInput } from "./TodoCreateInput";
import { TodoWhereInput } from "./TodoWhereInput";
import { TodoWhereUniqueInput } from "./TodoWhereUniqueInput";
import { TodoFindManyArgs } from "./TodoFindManyArgs";
import { TodoUpdateInput } from "./TodoUpdateInput";
import { Todo } from "./Todo";

export class TodoControllerBase {
  constructor(protected readonly service: TodoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Todo })
  async create(@common.Body() data: TodoCreateInput): Promise<Todo> {
    return await this.service.create({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        isCompleted: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Todo] })
  @ApiNestedQuery(TodoFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Todo[]> {
    const args = plainToClass(TodoFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        isCompleted: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Todo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TodoWhereUniqueInput
  ): Promise<Todo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        isCompleted: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Todo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TodoWhereUniqueInput,
    @common.Body() data: TodoUpdateInput
  ): Promise<Todo | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          isCompleted: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Todo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TodoWhereUniqueInput
  ): Promise<Todo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          isCompleted: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
