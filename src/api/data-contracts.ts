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

export interface ErrorDto {
  message: object;
  statusCode: number;
  error: string;
}

export enum UserAccountType {
  Email = 'email',
  Google = 'google',
}

export enum UserStatus {
  Pending = 'pending',
  Active = 'active',
  Suspended = 'suspended',
}

export interface AuthUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  role: string;
  accountType: UserAccountType;
  profilePicture?: string;
  phone?: string;
  position?: string;
  status: UserStatus;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
}

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  role: string;
  profilePicture?: string;
  phone?: string;
  position?: string;
  status: UserStatus;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
}

export interface UpdateUserProfileDto {
  firstName: string;
  lastName: string;
  phone?: string;
  position?: string;
}
