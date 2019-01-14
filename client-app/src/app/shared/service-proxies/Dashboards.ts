/// <reference path="types.ts"/>
/** @module Dashboards */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * @param {number} id 
 * @param {number} userId 
 * @return {Promise<object>} Success
 */
export function Get(id: number, userId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id,
      userId
    }
  }
  return gateway.request(GetOperation, parameters)
}

/**
 * @param {number} userId 
 * @return {Promise<object>} Success
 */
export function Get1(userId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      userId
    }
  }
  return gateway.request(GetOperation1, parameters)
}

/**
 * @param {number} userId 
 * @param {object} options Optional options
 * @param {module:types.NewDashboardModel} [options.newDashboard] 
 * @return {Promise<object>} Success
 */
export function Post(userId: number, options?: PostOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      userId
    },
    body: {
      newDashboard: options.newDashboard
    }
  }
  return gateway.request(PostOperation, parameters)
}

/**
 * @param {string} id 
 * @param {object} options Optional options
 * @param {number} [options.dashboardId] 
 * @param {module:types.NewDashboardModel} [options.editDashboard] 
 * @return {Promise<object>} Success
 */
export function EditDashboard(id: string, options?: EditDashboardOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      dashboardId: options.dashboardId
    },
    body: {
      editDashboard: options.editDashboard
    },
    path: {
      id
    }
  }
  return gateway.request(EditDashboardOperation, parameters)
}

/**
 * @param {number} id 
 * @return {Promise<object>} Success
 */
export function Delete(id: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id
    }
  }
  return gateway.request(DeleteOperation, parameters)
}

/**
 * @param {number} dashboardId 
 * @param {number} taskId 
 * @return {Promise<object>} Success
 */
export function AddTaskToDashboard(dashboardId: number, taskId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      dashboardId,
      taskId
    }
  }
  return gateway.request(AddTaskToDashboardOperation, parameters)
}

export interface PostOptions {
  newDashboard?: api.NewDashboardModel
}

export interface EditDashboardOptions {
  dashboardId?: number
  editDashboard?: api.NewDashboardModel
}

const GetOperation: api.OperationInfo = {
  path: '/api/Dashboards/GetDashboard/{id}/{userId}',
  method: 'get'
}

const GetOperation1: api.OperationInfo = {
  path: '/api/Dashboards/GetAllUserDashboards/{userId}',
  method: 'get'
}

const PostOperation: api.OperationInfo = {
  path: '/api/Dashboards/AddDashboard/{userId}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}

const EditDashboardOperation: api.OperationInfo = {
  path: '/api/Dashboards/EditDashboard/{id}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'put'
}

const DeleteOperation: api.OperationInfo = {
  path: '/api/Dashboards/DeleteDashboard/{id}',
  method: 'delete'
}

const AddTaskToDashboardOperation: api.OperationInfo = {
  path: '/api/Dashboards/AddTaskToDasboard/{dashboardId}/{taskId}',
  method: 'put'
}
