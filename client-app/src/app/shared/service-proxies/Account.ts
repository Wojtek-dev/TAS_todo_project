/// <reference path="types.ts"/>
/** @module Account */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Logowanie użytkownika
 * 
 * @param {object} options Optional options
 * @param {module:types.LoginModel} [options.loginModel] 
 * @return {Promise<object>} Użytkownik istnieje i dodano ciasteczko
 */
export function Login(options?: LoginOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      loginModel: options.loginModel
    }
  }
  return gateway.request(LoginOperation, parameters)
}

/**
 * Rejestracja użytkownika
 * 
 * @param {object} options Optional options
 * @param {module:types.RegisterModel} [options.userModel] 
 * @return {Promise<object>} użytkownik został dodany do bazy danych.
 */
export function Register(options?: RegisterOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      userModel: options.userModel
    }
  }
  return gateway.request(RegisterOperation, parameters)
}

/**
 * usunięcie ciasteczka i wylogowanie przez to.
 */
export function LogOut(): Promise<api.Response<any>> {
  return gateway.request(LogOutOperation)
}

/**
 * Modyfikacja danych użytkownika
 * 
 * @param {number} id 
 * @param {object} options Optional options
 * @param {module:types.User} [options.userModel] 
 * @return {Promise<object>} Modyfikacja poszła ok, dane użytkownika zostały zedytowane
 */
export function ModifyAccount(id: number, options?: ModifyAccountOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    body: {
      userModel: options.userModel
    }
  }
  return gateway.request(ModifyAccountOperation, parameters)
}

/**
 * Usunięcie użytkownika
 * 
 * @param {number} id 
 * @param {object} options Optional options
 * @param {module:types.LoginModel} [options.loginModel] Uzytkownik musi podać swój login i hasło aby potwiedzić usunięcie swojego konta
 * @return {Promise<object>} Uzytkownik został pomyślnie usunięty
 */
export function DeleteUser(id: number, options?: DeleteUserOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    body: {
      loginModel: options.loginModel
    }
  }
  return gateway.request(DeleteUserOperation, parameters)
}

export interface LoginOptions {
  loginModel?: api.LoginModel
}

export interface RegisterOptions {
  userModel?: api.RegisterModel
}

export interface ModifyAccountOptions {
  userModel?: api.User
}

export interface DeleteUserOptions {
  /**
   * Uzytkownik musi podać swój login i hasło aby potwiedzić usunięcie swojego konta
   */
  loginModel?: api.LoginModel
}

const LoginOperation: api.OperationInfo = {
  path: '/api/Account/Login',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}

const RegisterOperation: api.OperationInfo = {
  path: '/api/Account/Register',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}

const LogOutOperation: api.OperationInfo = {
  path: '/api/Account/LogOut',
  method: 'get'
}

const ModifyAccountOperation: api.OperationInfo = {
  path: '/api/Account/ModifyAccount/{id}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}

const DeleteUserOperation: api.OperationInfo = {
  path: '/api/Account/DeleteUser/{id}',
  contentTypes: ['application/json-patch+json','application/json','text/json','application/*+json'],
  method: 'post'
}
