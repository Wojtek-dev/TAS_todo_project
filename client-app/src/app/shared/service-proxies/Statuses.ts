/// <reference path="types.ts"/>
/** @module Statuses */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Lista statusów
 */
export function Get(): Promise<api.Response<any>> {
  return gateway.request(GetOperation)
}

const GetOperation: api.OperationInfo = {
  path: '/api/Statuses',
  method: 'get'
}
