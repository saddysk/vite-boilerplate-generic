/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ErrorDto, UpdateUserProfileDto, UserDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name UserControllerGetUserInfo
   * @request GET:/api/v1/users/profile
   * @secure
   */
  userControllerGetUserInfo = (params: RequestParams = {}) =>
    this.request<UserDto, ErrorDto>({
      path: `/api/v1/users/profile`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserControllerUpdateUserInfo
   * @request PUT:/api/v1/users/profile
   * @secure
   */
  userControllerUpdateUserInfo = (data: UpdateUserProfileDto, params: RequestParams = {}) =>
    this.request<UserDto, ErrorDto>({
      path: `/api/v1/users/profile`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
