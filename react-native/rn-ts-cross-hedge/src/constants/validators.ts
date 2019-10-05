export const EMAIL: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD: RegExp = /(?=.*\d)(?=.*[a-z]).{8,}/;

export const NAME: RegExp = /^[a-zA-Z]+$/;

export const NUMBER: RegExp = /^\d{1,}$/;

export const ENGLISH_CHARACTERS: RegExp = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/;
