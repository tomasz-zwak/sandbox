import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TodoService } from "./todo.service";
import { TodoControllerBase } from "./base/todo.controller.base";

@swagger.ApiTags("todos")
@common.Controller("todos")
export class TodoController extends TodoControllerBase {
  constructor(protected readonly service: TodoService) {
    super(service);
  }
}
