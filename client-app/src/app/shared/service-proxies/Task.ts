/// <reference path="types.ts"/>
/** @module Task */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * zwraca jedno zadanie użytkownika po id użytkownika
 * 
 * @param {number} id id taska
 * @param {number} userId id uzytkownika
 * @return {Promise<object>} wszystko ok i task został wzrócony
 */
export function Get1(id: number, userId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id,
      userId
    }
  }
  return gateway.request(GetOperation1, parameters)
}

/**
 * Pobiera wszytkie taski użytkownika
 * 
 * @param {number} userId 
 * @return {Promise<object>} Wszystko poszło ok i została zwrócona lista tasków
 */
export function Get(userId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      userId
    }
  }
  return gateway.request(GetOperation, parameters)
}

/**
 * dodanie nowego taska do użytkownika
 * 
 * @param {number} userId 
 * @param {object} options Optional options
 * @param {module:types.NewTaskModel} [options.task] z body requesta
 * @return {Promise<object>} dodano taska
 */
export function Post(userId: number, options?: PostOptionsTask): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      userId
    },
    body: {
      task: options.task
    }
  }
  return gateway.request(PostOperation, parameters)
}

/**
 * Edycja conetentu taska
 * 
 * @param {number} taskId id taska
 * @param {object} options Optional options
 * @param {module:types.NewTaskModel} [options.editTask] nowa zawartość taska
 * @return {Promise<object>} wszystko poszło ok został zedytowana zawartość taska
 */
export function EditTask(taskId: number, options?: EditTaskOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      taskId
    },
    body: {
      editTask: options.editTask
    }
  }
  return gateway.request(EditTaskOperation, parameters)
}

/**
 * Dodanie użytkownika do danego zadania po jego loginie
 * 
 * @param {number} taskId id taska
 * @param {string} userLogin login uzytkownika, ktorego chcemy dodać do danego zadania
 * @return {Promise<object>} dodano użytkownika do zadania
 */
export function AddUserInToTask(taskId: number, userLogin: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      taskId,
      userLogin
    }
  }
  return gateway.request(AddUserInToTaskOperation, parameters)
}

/**
 * Usunięcie z zadania danego użytkownika
 * 
 * @param {number} taskId id zadania
 * @param {string} userLogin login uzytkownika którego ususuwamy z zadania
 * @return {Promise<object>} pomyślnie usunięto użytkownika
 */
export function DeleteUserInTask(taskId: number, userLogin: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      taskId,
      userLogin
    }
  }
  return gateway.request(DeleteUserInTaskOperation, parameters)
}

/**
 * zmiana statusu zadania /// to jest do uzupełniania, źle zrobiona tabela na bazie.
 * 
 * @param {number} taskId id zadania, dla którego chcemy zmienić id
 * @param {number} statusId id statusu, które chcemy nadać, można je wybierać z jakieś listy
 * @return {Promise<object>} status został zmieniony
 */
export function ChangeStatus(taskId: number, statusId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      taskId,
      statusId
    }
  }
  return gateway.request(ChangeStatusOperation, parameters)
}

/**
 * Dodawanie komentarza do zadania
 * 
 * @param {number} taskId id taska, do którego dodajemy komentarz
 * @param {object} options Optional options
 * @param {module:types.AddTaskModel} [options.comment] treść komentarza
 * @return {Promise<object>} wszystko poszło ok i komentarz został dodany
 */
export function AddComment(taskId: number, options?: AddCommentOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      taskId
    },
    body: {
      comment: options.comment
    }
  }
  return gateway.request(AddCommentOperation, parameters)
}

/**
 * Edycja tresci komentarza w danym zadaniu
 * 
 * @param {number} commentId id comentarza
 * @param {object} options Optional options
 * @param {module:types.AddTaskModel} [options.comment] nowa tresc komentarza
 * @return {Promise<object>} wszytko poszło ok i komentarz został zedytowany
 */
export function EditComment(commentId: number, options?: EditCommentOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      commentId
    },
    body: {
      comment: options.comment
    }
  }
  return gateway.request(EditCommentOperation, parameters)
}

/**
 * usunięcie komentarza w zadaniu
 * 
 * @param {number} commentId id komentarza, który chcemy usunąć
 * @return {Promise<object>} komentarz został pomyślnie usunięty
 */
export function deleteComment(commentId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      commentId
    }
  }
  return gateway.request(deleteCommentOperation, parameters)
}

/**
 * usuwanie taska
 * 
 * @param {number} id id taska, które chcemy usuniąć
 * @return {Promise<object>} zadanie zostało usunięte
 */
export function Delete(id: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id
    }
  }
  return gateway.request(DeleteOperation, parameters)
}

export interface PostOptionsTask {
  /**
   * z body requesta
   */
  task?: api.NewTaskModel
}

export interface EditTaskOptions {
  /**
   * nowa zawartość taska
   */
  editTask?: api.NewTaskModel
}

export interface AddCommentOptions {
  /**
   * treść komentarza
   */
  comment?: api.AddTaskModel
}

export interface EditCommentOptions {
  /**
   * nowa tresc komentarza
   */
  comment?: api.AddTaskModel
}

const GetOperation1: api.OperationInfo = {
  path: '/api/Task/GetTask/{id}/{userId}',
  method: 'get'
}

const GetOperation: api.OperationInfo = {
  path: '/api/Task/GetAllUserTasks/{userId}',
  method: 'get'
}

const PostOperation: api.OperationInfo = {
  path: '/api/Task/AddTask/{userId}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}

const EditTaskOperation: api.OperationInfo = {
  path: '/api/Task/EditTask/{taskId}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'put'
}

const AddUserInToTaskOperation: api.OperationInfo = {
  path: '/api/Task/AddUserToTask/{taskId}/{userLogin}',
  method: 'post'
}

const DeleteUserInTaskOperation: api.OperationInfo = {
  path: '/api/Task/DeleteUserInTask/{taskId}/{userLogin}',
  method: 'delete'
}

const ChangeStatusOperation: api.OperationInfo = {
  path: '/api/Task/ChangeStatus/{taskId}/{statusId}',
  method: 'put'
}

const AddCommentOperation: api.OperationInfo = {
  path: '/api/Task/addComment/{taskId}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}

const EditCommentOperation: api.OperationInfo = {
  path: '/api/Task/editComment/{commentId}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'put'
}

const deleteCommentOperation: api.OperationInfo = {
  path: '/api/Task/deleteComment/{commentId}',
  method: 'delete'
}

const DeleteOperation: api.OperationInfo = {
  path: '/api/Task/DeleteTask/{id}',
  method: 'delete'
}
