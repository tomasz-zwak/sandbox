import * as graphql from "@nestjs/graphql";
import { TodoResolverBase } from "./base/todo.resolver.base";
import { Todo } from "./base/Todo";
import { TodoService } from "./todo.service";

@graphql.Resolver(() => Todo)
export class TodoResolver extends TodoResolverBase {
  constructor(protected readonly service: TodoService) {
    super(service);
  }
}
