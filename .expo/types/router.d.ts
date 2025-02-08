/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/app/dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/auth/auth`; params?: Router.UnknownInputParams; } | { pathname: `/auth/home`; params?: Router.UnknownInputParams; } | { pathname: `/auth/signUp`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/app/dashboard`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/auth`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/home`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/signUp`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/app/dashboard${`?${string}` | `#${string}` | ''}` | `/auth/auth${`?${string}` | `#${string}` | ''}` | `/auth/home${`?${string}` | `#${string}` | ''}` | `/auth/signUp${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/app/dashboard`; params?: Router.UnknownInputParams; } | { pathname: `/auth/auth`; params?: Router.UnknownInputParams; } | { pathname: `/auth/home`; params?: Router.UnknownInputParams; } | { pathname: `/auth/signUp`; params?: Router.UnknownInputParams; };
    }
  }
}
