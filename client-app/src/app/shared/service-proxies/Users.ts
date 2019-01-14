/// <reference path="types.ts"/>
/** @module Users */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Z poziomu uzytkownika bierze całą liste uzytkowników, żeby ktoś mógł przejrzeć kto ma konto
 */
export function Get(): Promise<api.Response<any>> {
  return gateway.request(GetOperation)
}

/**
 * mozna przejrzec dane uzytkownika, ale tylko nie które, najlepiej jak byłby to tylko login, mail i imie na chwile obecną, jak coś to utworzy się osobny model dla jasności
 * 
 * @param {number} id 
 * @return {Promise<object>} Success
 */
export function Get1(id: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      id
    }
  }
  return gateway.request(GetOperation1, parameters)
}

/**
 * @param {string} userName 
 * @return {Promise<object>} Success
 */
export function GetId(userName: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      userName
    }
  }
  return gateway.request(GetOperationid, parameters)
}

const GetOperation: api.OperationInfo = {
  path: '/api/Users/GetInfoUser',
  method: 'get'
}

const GetOperation1: api.OperationInfo = {
  path: '/api/Users/GetInfoUser/{id}',
  method: 'get'
}

const GetOperationid: api.OperationInfo = {
  path: '/api/Users/getUserIdByUsername/{userName}',
  method: 'get'
}
