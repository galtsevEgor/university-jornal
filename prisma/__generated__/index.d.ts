
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model DayOfWeek
 * 
 */
export type DayOfWeek = $Result.DefaultSelection<Prisma.$DayOfWeekPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model SubjectInstance
 * 
 */
export type SubjectInstance = $Result.DefaultSelection<Prisma.$SubjectInstancePayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRoleEnum: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN'
};

export type UserRoleEnum = (typeof UserRoleEnum)[keyof typeof UserRoleEnum]


export const AuthMethodEnum: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  YANDEX: 'YANDEX'
};

export type AuthMethodEnum = (typeof AuthMethodEnum)[keyof typeof AuthMethodEnum]


export const TokenTypeEnum: {
  VERIFICATION: 'VERIFICATION',
  TWO_FACTOR: 'TWO_FACTOR',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type TokenTypeEnum = (typeof TokenTypeEnum)[keyof typeof TokenTypeEnum]


export const DayOfWeekEnum: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

export type DayOfWeekEnum = (typeof DayOfWeekEnum)[keyof typeof DayOfWeekEnum]


export const SubjectTypeEnum: {
  LECTURE: 'LECTURE',
  LAB: 'LAB',
  PRACTICE: 'PRACTICE'
};

export type SubjectTypeEnum = (typeof SubjectTypeEnum)[keyof typeof SubjectTypeEnum]

}

export type UserRoleEnum = $Enums.UserRoleEnum

export const UserRoleEnum: typeof $Enums.UserRoleEnum

export type AuthMethodEnum = $Enums.AuthMethodEnum

export const AuthMethodEnum: typeof $Enums.AuthMethodEnum

export type TokenTypeEnum = $Enums.TokenTypeEnum

export const TokenTypeEnum: typeof $Enums.TokenTypeEnum

export type DayOfWeekEnum = $Enums.DayOfWeekEnum

export const DayOfWeekEnum: typeof $Enums.DayOfWeekEnum

export type SubjectTypeEnum = $Enums.SubjectTypeEnum

export const SubjectTypeEnum: typeof $Enums.SubjectTypeEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs>;

  /**
   * `prisma.dayOfWeek`: Exposes CRUD operations for the **DayOfWeek** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayOfWeeks
    * const dayOfWeeks = await prisma.dayOfWeek.findMany()
    * ```
    */
  get dayOfWeek(): Prisma.DayOfWeekDelegate<ExtArgs>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs>;

  /**
   * `prisma.subjectInstance`: Exposes CRUD operations for the **SubjectInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectInstances
    * const subjectInstances = await prisma.subjectInstance.findMany()
    * ```
    */
  get subjectInstance(): Prisma.SubjectInstanceDelegate<ExtArgs>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Token: 'Token',
    Group: 'Group',
    Schedule: 'Schedule',
    DayOfWeek: 'DayOfWeek',
    Lesson: 'Lesson',
    SubjectInstance: 'SubjectInstance',
    Subject: 'Subject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "account" | "token" | "group" | "schedule" | "dayOfWeek" | "lesson" | "subjectInstance" | "subject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      DayOfWeek: {
        payload: Prisma.$DayOfWeekPayload<ExtArgs>
        fields: Prisma.DayOfWeekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayOfWeekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayOfWeekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>
          }
          findFirst: {
            args: Prisma.DayOfWeekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayOfWeekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>
          }
          findMany: {
            args: Prisma.DayOfWeekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>[]
          }
          create: {
            args: Prisma.DayOfWeekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>
          }
          createMany: {
            args: Prisma.DayOfWeekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayOfWeekCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>[]
          }
          delete: {
            args: Prisma.DayOfWeekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>
          }
          update: {
            args: Prisma.DayOfWeekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>
          }
          deleteMany: {
            args: Prisma.DayOfWeekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayOfWeekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DayOfWeekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOfWeekPayload>
          }
          aggregate: {
            args: Prisma.DayOfWeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayOfWeek>
          }
          groupBy: {
            args: Prisma.DayOfWeekGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayOfWeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayOfWeekCountArgs<ExtArgs>
            result: $Utils.Optional<DayOfWeekCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      SubjectInstance: {
        payload: Prisma.$SubjectInstancePayload<ExtArgs>
        fields: Prisma.SubjectInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>
          }
          findFirst: {
            args: Prisma.SubjectInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>
          }
          findMany: {
            args: Prisma.SubjectInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>[]
          }
          create: {
            args: Prisma.SubjectInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>
          }
          createMany: {
            args: Prisma.SubjectInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>[]
          }
          delete: {
            args: Prisma.SubjectInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>
          }
          update: {
            args: Prisma.SubjectInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>
          }
          deleteMany: {
            args: Prisma.SubjectInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectInstancePayload>
          }
          aggregate: {
            args: Prisma.SubjectInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectInstance>
          }
          groupBy: {
            args: Prisma.SubjectInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectInstanceCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Subject: number
    Group: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subject?: boolean | UserCountOutputTypeCountSubjectArgs
    Group?: boolean | UserCountOutputTypeCountGroupArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    students: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GroupCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    days: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | ScheduleCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayOfWeekWhereInput
  }


  /**
   * Count Type DayOfWeekCountOutputType
   */

  export type DayOfWeekCountOutputType = {
    lessons: number
  }

  export type DayOfWeekCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | DayOfWeekCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * DayOfWeekCountOutputType without action
   */
  export type DayOfWeekCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeekCountOutputType
     */
    select?: DayOfWeekCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DayOfWeekCountOutputType without action
   */
  export type DayOfWeekCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    evenWeek: number
    oddWeek: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evenWeek?: boolean | LessonCountOutputTypeCountEvenWeekArgs
    oddWeek?: boolean | LessonCountOutputTypeCountOddWeekArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountEvenWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectInstanceWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountOddWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectInstanceWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    SubjectInstance: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubjectInstance?: boolean | SubjectCountOutputTypeCountSubjectInstanceArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSubjectInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectInstanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    picture: string | null
    role: $Enums.UserRoleEnum | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    method: $Enums.AuthMethodEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    picture: string | null
    role: $Enums.UserRoleEnum | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    method: $Enums.AuthMethodEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    displayName: number
    picture: number
    role: number
    isVerified: number
    isTwoFactorEnabled: number
    method: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    picture?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    picture?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    picture?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    displayName: string
    picture: string | null
    role: $Enums.UserRoleEnum
    isVerified: boolean
    isTwoFactorEnabled: boolean
    method: $Enums.AuthMethodEnum
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    picture?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Subject?: boolean | User$SubjectArgs<ExtArgs>
    Group?: boolean | User$GroupArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    picture?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    picture?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subject?: boolean | User$SubjectArgs<ExtArgs>
    Group?: boolean | User$GroupArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Subject: Prisma.$SubjectPayload<ExtArgs>[]
      Group: Prisma.$GroupPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      displayName: string
      picture: string | null
      role: $Enums.UserRoleEnum
      isVerified: boolean
      isTwoFactorEnabled: boolean
      method: $Enums.AuthMethodEnum
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subject<T extends User$SubjectArgs<ExtArgs> = {}>(args?: Subset<T, User$SubjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany"> | Null>
    Group<T extends User$GroupArgs<ExtArgs> = {}>(args?: Subset<T, User$GroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany"> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRoleEnum'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly method: FieldRef<"User", 'AuthMethodEnum'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Subject
   */
  export type User$SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * User.Group
   */
  export type User$GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expiresAt: number | null
  }

  export type AccountSumAggregateOutputType = {
    expiresAt: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    type: string | null
    provider: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    type: string | null
    provider: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    type: number
    provider: number
    refreshToken: number
    accessToken: number
    expiresAt: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expiresAt?: true
  }

  export type AccountSumAggregateInputType = {
    expiresAt?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    type?: true
    provider?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    type: string
    provider: string
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      provider: string
      refreshToken: string | null
      accessToken: string | null
      expiresAt: number
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Account$userArgs<ExtArgs> = {}>(args?: Subset<T, Account$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.user
   */
  export type Account$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenTypeEnum | null
    expiresIn: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenTypeEnum | null
    expiresIn: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    type: number
    expiresIn: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    email: string
    token: string
    type: $Enums.TokenTypeEnum
    expiresIn: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
  }


  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      type: $Enums.TokenTypeEnum
      expiresIn: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly email: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenTypeEnum'>
    readonly expiresIn: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Group$studentsArgs<ExtArgs>
    schedule?: boolean | Group$scheduleArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Group$studentsArgs<ExtArgs>
    schedule?: boolean | Group$scheduleArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      students: Prisma.$UserPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Group$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    schedule<T extends Group$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Group$scheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }

  /**
   * Group.students
   */
  export type Group$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Group.schedule
   */
  export type Group$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    groupId: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    days?: boolean | Schedule$daysArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    days?: boolean | Schedule$daysArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      days: Prisma.$DayOfWeekPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    days<T extends Schedule$daysArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */ 
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly groupId: FieldRef<"Schedule", 'String'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
  }

  /**
   * Schedule.days
   */
  export type Schedule$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    where?: DayOfWeekWhereInput
    orderBy?: DayOfWeekOrderByWithRelationInput | DayOfWeekOrderByWithRelationInput[]
    cursor?: DayOfWeekWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayOfWeekScalarFieldEnum | DayOfWeekScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model DayOfWeek
   */

  export type AggregateDayOfWeek = {
    _count: DayOfWeekCountAggregateOutputType | null
    _min: DayOfWeekMinAggregateOutputType | null
    _max: DayOfWeekMaxAggregateOutputType | null
  }

  export type DayOfWeekMinAggregateOutputType = {
    id: string | null
    dayOfWeek: $Enums.DayOfWeekEnum | null
    scheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayOfWeekMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: $Enums.DayOfWeekEnum | null
    scheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayOfWeekCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    scheduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DayOfWeekMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayOfWeekMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayOfWeekCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DayOfWeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayOfWeek to aggregate.
     */
    where?: DayOfWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOfWeeks to fetch.
     */
    orderBy?: DayOfWeekOrderByWithRelationInput | DayOfWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayOfWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOfWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOfWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayOfWeeks
    **/
    _count?: true | DayOfWeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayOfWeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayOfWeekMaxAggregateInputType
  }

  export type GetDayOfWeekAggregateType<T extends DayOfWeekAggregateArgs> = {
        [P in keyof T & keyof AggregateDayOfWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayOfWeek[P]>
      : GetScalarType<T[P], AggregateDayOfWeek[P]>
  }




  export type DayOfWeekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayOfWeekWhereInput
    orderBy?: DayOfWeekOrderByWithAggregationInput | DayOfWeekOrderByWithAggregationInput[]
    by: DayOfWeekScalarFieldEnum[] | DayOfWeekScalarFieldEnum
    having?: DayOfWeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayOfWeekCountAggregateInputType | true
    _min?: DayOfWeekMinAggregateInputType
    _max?: DayOfWeekMaxAggregateInputType
  }

  export type DayOfWeekGroupByOutputType = {
    id: string
    dayOfWeek: $Enums.DayOfWeekEnum
    scheduleId: string
    createdAt: Date
    updatedAt: Date
    _count: DayOfWeekCountAggregateOutputType | null
    _min: DayOfWeekMinAggregateOutputType | null
    _max: DayOfWeekMaxAggregateOutputType | null
  }

  type GetDayOfWeekGroupByPayload<T extends DayOfWeekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayOfWeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayOfWeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayOfWeekGroupByOutputType[P]>
            : GetScalarType<T[P], DayOfWeekGroupByOutputType[P]>
        }
      >
    >


  export type DayOfWeekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessons?: boolean | DayOfWeek$lessonsArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    _count?: boolean | DayOfWeekCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayOfWeek"]>

  export type DayOfWeekSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayOfWeek"]>

  export type DayOfWeekSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DayOfWeekInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | DayOfWeek$lessonsArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    _count?: boolean | DayOfWeekCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DayOfWeekIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $DayOfWeekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayOfWeek"
    objects: {
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: $Enums.DayOfWeekEnum
      scheduleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dayOfWeek"]>
    composites: {}
  }

  type DayOfWeekGetPayload<S extends boolean | null | undefined | DayOfWeekDefaultArgs> = $Result.GetResult<Prisma.$DayOfWeekPayload, S>

  type DayOfWeekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DayOfWeekFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DayOfWeekCountAggregateInputType | true
    }

  export interface DayOfWeekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayOfWeek'], meta: { name: 'DayOfWeek' } }
    /**
     * Find zero or one DayOfWeek that matches the filter.
     * @param {DayOfWeekFindUniqueArgs} args - Arguments to find a DayOfWeek
     * @example
     * // Get one DayOfWeek
     * const dayOfWeek = await prisma.dayOfWeek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayOfWeekFindUniqueArgs>(args: SelectSubset<T, DayOfWeekFindUniqueArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DayOfWeek that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DayOfWeekFindUniqueOrThrowArgs} args - Arguments to find a DayOfWeek
     * @example
     * // Get one DayOfWeek
     * const dayOfWeek = await prisma.dayOfWeek.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayOfWeekFindUniqueOrThrowArgs>(args: SelectSubset<T, DayOfWeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DayOfWeek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekFindFirstArgs} args - Arguments to find a DayOfWeek
     * @example
     * // Get one DayOfWeek
     * const dayOfWeek = await prisma.dayOfWeek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayOfWeekFindFirstArgs>(args?: SelectSubset<T, DayOfWeekFindFirstArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DayOfWeek that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekFindFirstOrThrowArgs} args - Arguments to find a DayOfWeek
     * @example
     * // Get one DayOfWeek
     * const dayOfWeek = await prisma.dayOfWeek.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayOfWeekFindFirstOrThrowArgs>(args?: SelectSubset<T, DayOfWeekFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DayOfWeeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayOfWeeks
     * const dayOfWeeks = await prisma.dayOfWeek.findMany()
     * 
     * // Get first 10 DayOfWeeks
     * const dayOfWeeks = await prisma.dayOfWeek.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayOfWeekWithIdOnly = await prisma.dayOfWeek.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayOfWeekFindManyArgs>(args?: SelectSubset<T, DayOfWeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DayOfWeek.
     * @param {DayOfWeekCreateArgs} args - Arguments to create a DayOfWeek.
     * @example
     * // Create one DayOfWeek
     * const DayOfWeek = await prisma.dayOfWeek.create({
     *   data: {
     *     // ... data to create a DayOfWeek
     *   }
     * })
     * 
     */
    create<T extends DayOfWeekCreateArgs>(args: SelectSubset<T, DayOfWeekCreateArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DayOfWeeks.
     * @param {DayOfWeekCreateManyArgs} args - Arguments to create many DayOfWeeks.
     * @example
     * // Create many DayOfWeeks
     * const dayOfWeek = await prisma.dayOfWeek.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayOfWeekCreateManyArgs>(args?: SelectSubset<T, DayOfWeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayOfWeeks and returns the data saved in the database.
     * @param {DayOfWeekCreateManyAndReturnArgs} args - Arguments to create many DayOfWeeks.
     * @example
     * // Create many DayOfWeeks
     * const dayOfWeek = await prisma.dayOfWeek.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayOfWeeks and only return the `id`
     * const dayOfWeekWithIdOnly = await prisma.dayOfWeek.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayOfWeekCreateManyAndReturnArgs>(args?: SelectSubset<T, DayOfWeekCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DayOfWeek.
     * @param {DayOfWeekDeleteArgs} args - Arguments to delete one DayOfWeek.
     * @example
     * // Delete one DayOfWeek
     * const DayOfWeek = await prisma.dayOfWeek.delete({
     *   where: {
     *     // ... filter to delete one DayOfWeek
     *   }
     * })
     * 
     */
    delete<T extends DayOfWeekDeleteArgs>(args: SelectSubset<T, DayOfWeekDeleteArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DayOfWeek.
     * @param {DayOfWeekUpdateArgs} args - Arguments to update one DayOfWeek.
     * @example
     * // Update one DayOfWeek
     * const dayOfWeek = await prisma.dayOfWeek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayOfWeekUpdateArgs>(args: SelectSubset<T, DayOfWeekUpdateArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DayOfWeeks.
     * @param {DayOfWeekDeleteManyArgs} args - Arguments to filter DayOfWeeks to delete.
     * @example
     * // Delete a few DayOfWeeks
     * const { count } = await prisma.dayOfWeek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayOfWeekDeleteManyArgs>(args?: SelectSubset<T, DayOfWeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayOfWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayOfWeeks
     * const dayOfWeek = await prisma.dayOfWeek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayOfWeekUpdateManyArgs>(args: SelectSubset<T, DayOfWeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DayOfWeek.
     * @param {DayOfWeekUpsertArgs} args - Arguments to update or create a DayOfWeek.
     * @example
     * // Update or create a DayOfWeek
     * const dayOfWeek = await prisma.dayOfWeek.upsert({
     *   create: {
     *     // ... data to create a DayOfWeek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayOfWeek we want to update
     *   }
     * })
     */
    upsert<T extends DayOfWeekUpsertArgs>(args: SelectSubset<T, DayOfWeekUpsertArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DayOfWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekCountArgs} args - Arguments to filter DayOfWeeks to count.
     * @example
     * // Count the number of DayOfWeeks
     * const count = await prisma.dayOfWeek.count({
     *   where: {
     *     // ... the filter for the DayOfWeeks we want to count
     *   }
     * })
    **/
    count<T extends DayOfWeekCountArgs>(
      args?: Subset<T, DayOfWeekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayOfWeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayOfWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayOfWeekAggregateArgs>(args: Subset<T, DayOfWeekAggregateArgs>): Prisma.PrismaPromise<GetDayOfWeekAggregateType<T>>

    /**
     * Group by DayOfWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOfWeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayOfWeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayOfWeekGroupByArgs['orderBy'] }
        : { orderBy?: DayOfWeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayOfWeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayOfWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayOfWeek model
   */
  readonly fields: DayOfWeekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayOfWeek.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayOfWeekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends DayOfWeek$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, DayOfWeek$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany"> | Null>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DayOfWeek model
   */ 
  interface DayOfWeekFieldRefs {
    readonly id: FieldRef<"DayOfWeek", 'String'>
    readonly dayOfWeek: FieldRef<"DayOfWeek", 'DayOfWeekEnum'>
    readonly scheduleId: FieldRef<"DayOfWeek", 'String'>
    readonly createdAt: FieldRef<"DayOfWeek", 'DateTime'>
    readonly updatedAt: FieldRef<"DayOfWeek", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DayOfWeek findUnique
   */
  export type DayOfWeekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * Filter, which DayOfWeek to fetch.
     */
    where: DayOfWeekWhereUniqueInput
  }

  /**
   * DayOfWeek findUniqueOrThrow
   */
  export type DayOfWeekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * Filter, which DayOfWeek to fetch.
     */
    where: DayOfWeekWhereUniqueInput
  }

  /**
   * DayOfWeek findFirst
   */
  export type DayOfWeekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * Filter, which DayOfWeek to fetch.
     */
    where?: DayOfWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOfWeeks to fetch.
     */
    orderBy?: DayOfWeekOrderByWithRelationInput | DayOfWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayOfWeeks.
     */
    cursor?: DayOfWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOfWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOfWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayOfWeeks.
     */
    distinct?: DayOfWeekScalarFieldEnum | DayOfWeekScalarFieldEnum[]
  }

  /**
   * DayOfWeek findFirstOrThrow
   */
  export type DayOfWeekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * Filter, which DayOfWeek to fetch.
     */
    where?: DayOfWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOfWeeks to fetch.
     */
    orderBy?: DayOfWeekOrderByWithRelationInput | DayOfWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayOfWeeks.
     */
    cursor?: DayOfWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOfWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOfWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayOfWeeks.
     */
    distinct?: DayOfWeekScalarFieldEnum | DayOfWeekScalarFieldEnum[]
  }

  /**
   * DayOfWeek findMany
   */
  export type DayOfWeekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * Filter, which DayOfWeeks to fetch.
     */
    where?: DayOfWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOfWeeks to fetch.
     */
    orderBy?: DayOfWeekOrderByWithRelationInput | DayOfWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayOfWeeks.
     */
    cursor?: DayOfWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOfWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOfWeeks.
     */
    skip?: number
    distinct?: DayOfWeekScalarFieldEnum | DayOfWeekScalarFieldEnum[]
  }

  /**
   * DayOfWeek create
   */
  export type DayOfWeekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * The data needed to create a DayOfWeek.
     */
    data: XOR<DayOfWeekCreateInput, DayOfWeekUncheckedCreateInput>
  }

  /**
   * DayOfWeek createMany
   */
  export type DayOfWeekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayOfWeeks.
     */
    data: DayOfWeekCreateManyInput | DayOfWeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayOfWeek createManyAndReturn
   */
  export type DayOfWeekCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DayOfWeeks.
     */
    data: DayOfWeekCreateManyInput | DayOfWeekCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayOfWeek update
   */
  export type DayOfWeekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * The data needed to update a DayOfWeek.
     */
    data: XOR<DayOfWeekUpdateInput, DayOfWeekUncheckedUpdateInput>
    /**
     * Choose, which DayOfWeek to update.
     */
    where: DayOfWeekWhereUniqueInput
  }

  /**
   * DayOfWeek updateMany
   */
  export type DayOfWeekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayOfWeeks.
     */
    data: XOR<DayOfWeekUpdateManyMutationInput, DayOfWeekUncheckedUpdateManyInput>
    /**
     * Filter which DayOfWeeks to update
     */
    where?: DayOfWeekWhereInput
  }

  /**
   * DayOfWeek upsert
   */
  export type DayOfWeekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * The filter to search for the DayOfWeek to update in case it exists.
     */
    where: DayOfWeekWhereUniqueInput
    /**
     * In case the DayOfWeek found by the `where` argument doesn't exist, create a new DayOfWeek with this data.
     */
    create: XOR<DayOfWeekCreateInput, DayOfWeekUncheckedCreateInput>
    /**
     * In case the DayOfWeek was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayOfWeekUpdateInput, DayOfWeekUncheckedUpdateInput>
  }

  /**
   * DayOfWeek delete
   */
  export type DayOfWeekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    /**
     * Filter which DayOfWeek to delete.
     */
    where: DayOfWeekWhereUniqueInput
  }

  /**
   * DayOfWeek deleteMany
   */
  export type DayOfWeekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayOfWeeks to delete
     */
    where?: DayOfWeekWhereInput
  }

  /**
   * DayOfWeek.lessons
   */
  export type DayOfWeek$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * DayOfWeek without action
   */
  export type DayOfWeekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    position: number | null
  }

  export type LessonSumAggregateOutputType = {
    position: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    position: number | null
    dayId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    position: number | null
    dayId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    position: number
    dayId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    position?: true
  }

  export type LessonSumAggregateInputType = {
    position?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    position?: true
    dayId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    position?: true
    dayId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    position?: true
    dayId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    position: number
    dayId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    dayId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evenWeek?: boolean | Lesson$evenWeekArgs<ExtArgs>
    oddWeek?: boolean | Lesson$oddWeekArgs<ExtArgs>
    day?: boolean | Lesson$dayArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    dayId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean | Lesson$dayArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    position?: boolean
    dayId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evenWeek?: boolean | Lesson$evenWeekArgs<ExtArgs>
    oddWeek?: boolean | Lesson$oddWeekArgs<ExtArgs>
    day?: boolean | Lesson$dayArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | Lesson$dayArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      evenWeek: Prisma.$SubjectInstancePayload<ExtArgs>[]
      oddWeek: Prisma.$SubjectInstancePayload<ExtArgs>[]
      day: Prisma.$DayOfWeekPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      position: number
      dayId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evenWeek<T extends Lesson$evenWeekArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$evenWeekArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findMany"> | Null>
    oddWeek<T extends Lesson$oddWeekArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$oddWeekArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findMany"> | Null>
    day<T extends Lesson$dayArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$dayArgs<ExtArgs>>): Prisma__DayOfWeekClient<$Result.GetResult<Prisma.$DayOfWeekPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */ 
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly position: FieldRef<"Lesson", 'Int'>
    readonly dayId: FieldRef<"Lesson", 'String'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
  }

  /**
   * Lesson.evenWeek
   */
  export type Lesson$evenWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    where?: SubjectInstanceWhereInput
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    cursor?: SubjectInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectInstanceScalarFieldEnum | SubjectInstanceScalarFieldEnum[]
  }

  /**
   * Lesson.oddWeek
   */
  export type Lesson$oddWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    where?: SubjectInstanceWhereInput
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    cursor?: SubjectInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectInstanceScalarFieldEnum | SubjectInstanceScalarFieldEnum[]
  }

  /**
   * Lesson.day
   */
  export type Lesson$dayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOfWeek
     */
    select?: DayOfWeekSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOfWeekInclude<ExtArgs> | null
    where?: DayOfWeekWhereInput
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model SubjectInstance
   */

  export type AggregateSubjectInstance = {
    _count: SubjectInstanceCountAggregateOutputType | null
    _min: SubjectInstanceMinAggregateOutputType | null
    _max: SubjectInstanceMaxAggregateOutputType | null
  }

  export type SubjectInstanceMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    isPermanent: boolean | null
    lessonEvenId: string | null
    lessonOddId: string | null
  }

  export type SubjectInstanceMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    isPermanent: boolean | null
    lessonEvenId: string | null
    lessonOddId: string | null
  }

  export type SubjectInstanceCountAggregateOutputType = {
    id: number
    subjectId: number
    isPermanent: number
    lessonEvenId: number
    lessonOddId: number
    _all: number
  }


  export type SubjectInstanceMinAggregateInputType = {
    id?: true
    subjectId?: true
    isPermanent?: true
    lessonEvenId?: true
    lessonOddId?: true
  }

  export type SubjectInstanceMaxAggregateInputType = {
    id?: true
    subjectId?: true
    isPermanent?: true
    lessonEvenId?: true
    lessonOddId?: true
  }

  export type SubjectInstanceCountAggregateInputType = {
    id?: true
    subjectId?: true
    isPermanent?: true
    lessonEvenId?: true
    lessonOddId?: true
    _all?: true
  }

  export type SubjectInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectInstance to aggregate.
     */
    where?: SubjectInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectInstances to fetch.
     */
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectInstances
    **/
    _count?: true | SubjectInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectInstanceMaxAggregateInputType
  }

  export type GetSubjectInstanceAggregateType<T extends SubjectInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectInstance[P]>
      : GetScalarType<T[P], AggregateSubjectInstance[P]>
  }




  export type SubjectInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectInstanceWhereInput
    orderBy?: SubjectInstanceOrderByWithAggregationInput | SubjectInstanceOrderByWithAggregationInput[]
    by: SubjectInstanceScalarFieldEnum[] | SubjectInstanceScalarFieldEnum
    having?: SubjectInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectInstanceCountAggregateInputType | true
    _min?: SubjectInstanceMinAggregateInputType
    _max?: SubjectInstanceMaxAggregateInputType
  }

  export type SubjectInstanceGroupByOutputType = {
    id: string
    subjectId: string
    isPermanent: boolean
    lessonEvenId: string | null
    lessonOddId: string | null
    _count: SubjectInstanceCountAggregateOutputType | null
    _min: SubjectInstanceMinAggregateOutputType | null
    _max: SubjectInstanceMaxAggregateOutputType | null
  }

  type GetSubjectInstanceGroupByPayload<T extends SubjectInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectInstanceGroupByOutputType[P]>
        }
      >
    >


  export type SubjectInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    isPermanent?: boolean
    lessonEvenId?: boolean
    lessonOddId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    lessonEven?: boolean | SubjectInstance$lessonEvenArgs<ExtArgs>
    lessonOdd?: boolean | SubjectInstance$lessonOddArgs<ExtArgs>
  }, ExtArgs["result"]["subjectInstance"]>

  export type SubjectInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    isPermanent?: boolean
    lessonEvenId?: boolean
    lessonOddId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    lessonEven?: boolean | SubjectInstance$lessonEvenArgs<ExtArgs>
    lessonOdd?: boolean | SubjectInstance$lessonOddArgs<ExtArgs>
  }, ExtArgs["result"]["subjectInstance"]>

  export type SubjectInstanceSelectScalar = {
    id?: boolean
    subjectId?: boolean
    isPermanent?: boolean
    lessonEvenId?: boolean
    lessonOddId?: boolean
  }

  export type SubjectInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    lessonEven?: boolean | SubjectInstance$lessonEvenArgs<ExtArgs>
    lessonOdd?: boolean | SubjectInstance$lessonOddArgs<ExtArgs>
  }
  export type SubjectInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    lessonEven?: boolean | SubjectInstance$lessonEvenArgs<ExtArgs>
    lessonOdd?: boolean | SubjectInstance$lessonOddArgs<ExtArgs>
  }

  export type $SubjectInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectInstance"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      lessonEven: Prisma.$LessonPayload<ExtArgs> | null
      lessonOdd: Prisma.$LessonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      isPermanent: boolean
      lessonEvenId: string | null
      lessonOddId: string | null
    }, ExtArgs["result"]["subjectInstance"]>
    composites: {}
  }

  type SubjectInstanceGetPayload<S extends boolean | null | undefined | SubjectInstanceDefaultArgs> = $Result.GetResult<Prisma.$SubjectInstancePayload, S>

  type SubjectInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectInstanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectInstanceCountAggregateInputType | true
    }

  export interface SubjectInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectInstance'], meta: { name: 'SubjectInstance' } }
    /**
     * Find zero or one SubjectInstance that matches the filter.
     * @param {SubjectInstanceFindUniqueArgs} args - Arguments to find a SubjectInstance
     * @example
     * // Get one SubjectInstance
     * const subjectInstance = await prisma.subjectInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectInstanceFindUniqueArgs>(args: SelectSubset<T, SubjectInstanceFindUniqueArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubjectInstance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectInstanceFindUniqueOrThrowArgs} args - Arguments to find a SubjectInstance
     * @example
     * // Get one SubjectInstance
     * const subjectInstance = await prisma.subjectInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubjectInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceFindFirstArgs} args - Arguments to find a SubjectInstance
     * @example
     * // Get one SubjectInstance
     * const subjectInstance = await prisma.subjectInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectInstanceFindFirstArgs>(args?: SelectSubset<T, SubjectInstanceFindFirstArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubjectInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceFindFirstOrThrowArgs} args - Arguments to find a SubjectInstance
     * @example
     * // Get one SubjectInstance
     * const subjectInstance = await prisma.subjectInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubjectInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectInstances
     * const subjectInstances = await prisma.subjectInstance.findMany()
     * 
     * // Get first 10 SubjectInstances
     * const subjectInstances = await prisma.subjectInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectInstanceWithIdOnly = await prisma.subjectInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectInstanceFindManyArgs>(args?: SelectSubset<T, SubjectInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubjectInstance.
     * @param {SubjectInstanceCreateArgs} args - Arguments to create a SubjectInstance.
     * @example
     * // Create one SubjectInstance
     * const SubjectInstance = await prisma.subjectInstance.create({
     *   data: {
     *     // ... data to create a SubjectInstance
     *   }
     * })
     * 
     */
    create<T extends SubjectInstanceCreateArgs>(args: SelectSubset<T, SubjectInstanceCreateArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubjectInstances.
     * @param {SubjectInstanceCreateManyArgs} args - Arguments to create many SubjectInstances.
     * @example
     * // Create many SubjectInstances
     * const subjectInstance = await prisma.subjectInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectInstanceCreateManyArgs>(args?: SelectSubset<T, SubjectInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectInstances and returns the data saved in the database.
     * @param {SubjectInstanceCreateManyAndReturnArgs} args - Arguments to create many SubjectInstances.
     * @example
     * // Create many SubjectInstances
     * const subjectInstance = await prisma.subjectInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectInstances and only return the `id`
     * const subjectInstanceWithIdOnly = await prisma.subjectInstance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubjectInstance.
     * @param {SubjectInstanceDeleteArgs} args - Arguments to delete one SubjectInstance.
     * @example
     * // Delete one SubjectInstance
     * const SubjectInstance = await prisma.subjectInstance.delete({
     *   where: {
     *     // ... filter to delete one SubjectInstance
     *   }
     * })
     * 
     */
    delete<T extends SubjectInstanceDeleteArgs>(args: SelectSubset<T, SubjectInstanceDeleteArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubjectInstance.
     * @param {SubjectInstanceUpdateArgs} args - Arguments to update one SubjectInstance.
     * @example
     * // Update one SubjectInstance
     * const subjectInstance = await prisma.subjectInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectInstanceUpdateArgs>(args: SelectSubset<T, SubjectInstanceUpdateArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubjectInstances.
     * @param {SubjectInstanceDeleteManyArgs} args - Arguments to filter SubjectInstances to delete.
     * @example
     * // Delete a few SubjectInstances
     * const { count } = await prisma.subjectInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectInstanceDeleteManyArgs>(args?: SelectSubset<T, SubjectInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectInstances
     * const subjectInstance = await prisma.subjectInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectInstanceUpdateManyArgs>(args: SelectSubset<T, SubjectInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubjectInstance.
     * @param {SubjectInstanceUpsertArgs} args - Arguments to update or create a SubjectInstance.
     * @example
     * // Update or create a SubjectInstance
     * const subjectInstance = await prisma.subjectInstance.upsert({
     *   create: {
     *     // ... data to create a SubjectInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectInstance we want to update
     *   }
     * })
     */
    upsert<T extends SubjectInstanceUpsertArgs>(args: SelectSubset<T, SubjectInstanceUpsertArgs<ExtArgs>>): Prisma__SubjectInstanceClient<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubjectInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceCountArgs} args - Arguments to filter SubjectInstances to count.
     * @example
     * // Count the number of SubjectInstances
     * const count = await prisma.subjectInstance.count({
     *   where: {
     *     // ... the filter for the SubjectInstances we want to count
     *   }
     * })
    **/
    count<T extends SubjectInstanceCountArgs>(
      args?: Subset<T, SubjectInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectInstanceAggregateArgs>(args: Subset<T, SubjectInstanceAggregateArgs>): Prisma.PrismaPromise<GetSubjectInstanceAggregateType<T>>

    /**
     * Group by SubjectInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectInstanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectInstanceGroupByArgs['orderBy'] }
        : { orderBy?: SubjectInstanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectInstance model
   */
  readonly fields: SubjectInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    lessonEven<T extends SubjectInstance$lessonEvenArgs<ExtArgs> = {}>(args?: Subset<T, SubjectInstance$lessonEvenArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    lessonOdd<T extends SubjectInstance$lessonOddArgs<ExtArgs> = {}>(args?: Subset<T, SubjectInstance$lessonOddArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubjectInstance model
   */ 
  interface SubjectInstanceFieldRefs {
    readonly id: FieldRef<"SubjectInstance", 'String'>
    readonly subjectId: FieldRef<"SubjectInstance", 'String'>
    readonly isPermanent: FieldRef<"SubjectInstance", 'Boolean'>
    readonly lessonEvenId: FieldRef<"SubjectInstance", 'String'>
    readonly lessonOddId: FieldRef<"SubjectInstance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubjectInstance findUnique
   */
  export type SubjectInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectInstance to fetch.
     */
    where: SubjectInstanceWhereUniqueInput
  }

  /**
   * SubjectInstance findUniqueOrThrow
   */
  export type SubjectInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectInstance to fetch.
     */
    where: SubjectInstanceWhereUniqueInput
  }

  /**
   * SubjectInstance findFirst
   */
  export type SubjectInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectInstance to fetch.
     */
    where?: SubjectInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectInstances to fetch.
     */
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectInstances.
     */
    cursor?: SubjectInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectInstances.
     */
    distinct?: SubjectInstanceScalarFieldEnum | SubjectInstanceScalarFieldEnum[]
  }

  /**
   * SubjectInstance findFirstOrThrow
   */
  export type SubjectInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectInstance to fetch.
     */
    where?: SubjectInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectInstances to fetch.
     */
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectInstances.
     */
    cursor?: SubjectInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectInstances.
     */
    distinct?: SubjectInstanceScalarFieldEnum | SubjectInstanceScalarFieldEnum[]
  }

  /**
   * SubjectInstance findMany
   */
  export type SubjectInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * Filter, which SubjectInstances to fetch.
     */
    where?: SubjectInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectInstances to fetch.
     */
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectInstances.
     */
    cursor?: SubjectInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectInstances.
     */
    skip?: number
    distinct?: SubjectInstanceScalarFieldEnum | SubjectInstanceScalarFieldEnum[]
  }

  /**
   * SubjectInstance create
   */
  export type SubjectInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectInstance.
     */
    data: XOR<SubjectInstanceCreateInput, SubjectInstanceUncheckedCreateInput>
  }

  /**
   * SubjectInstance createMany
   */
  export type SubjectInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectInstances.
     */
    data: SubjectInstanceCreateManyInput | SubjectInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectInstance createManyAndReturn
   */
  export type SubjectInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubjectInstances.
     */
    data: SubjectInstanceCreateManyInput | SubjectInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectInstance update
   */
  export type SubjectInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectInstance.
     */
    data: XOR<SubjectInstanceUpdateInput, SubjectInstanceUncheckedUpdateInput>
    /**
     * Choose, which SubjectInstance to update.
     */
    where: SubjectInstanceWhereUniqueInput
  }

  /**
   * SubjectInstance updateMany
   */
  export type SubjectInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectInstances.
     */
    data: XOR<SubjectInstanceUpdateManyMutationInput, SubjectInstanceUncheckedUpdateManyInput>
    /**
     * Filter which SubjectInstances to update
     */
    where?: SubjectInstanceWhereInput
  }

  /**
   * SubjectInstance upsert
   */
  export type SubjectInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectInstance to update in case it exists.
     */
    where: SubjectInstanceWhereUniqueInput
    /**
     * In case the SubjectInstance found by the `where` argument doesn't exist, create a new SubjectInstance with this data.
     */
    create: XOR<SubjectInstanceCreateInput, SubjectInstanceUncheckedCreateInput>
    /**
     * In case the SubjectInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectInstanceUpdateInput, SubjectInstanceUncheckedUpdateInput>
  }

  /**
   * SubjectInstance delete
   */
  export type SubjectInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    /**
     * Filter which SubjectInstance to delete.
     */
    where: SubjectInstanceWhereUniqueInput
  }

  /**
   * SubjectInstance deleteMany
   */
  export type SubjectInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectInstances to delete
     */
    where?: SubjectInstanceWhereInput
  }

  /**
   * SubjectInstance.lessonEven
   */
  export type SubjectInstance$lessonEvenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * SubjectInstance.lessonOdd
   */
  export type SubjectInstance$lessonOddArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
  }

  /**
   * SubjectInstance without action
   */
  export type SubjectInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.SubjectTypeEnum | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.SubjectTypeEnum | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    type: number
    teacherId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    type: $Enums.SubjectTypeEnum
    teacherId: string
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    SubjectInstance?: boolean | Subject$SubjectInstanceArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    SubjectInstance?: boolean | Subject$SubjectInstanceArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      SubjectInstance: Prisma.$SubjectInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.SubjectTypeEnum
      teacherId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    SubjectInstance<T extends Subject$SubjectInstanceArgs<ExtArgs> = {}>(args?: Subset<T, Subject$SubjectInstanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectInstancePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */ 
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly type: FieldRef<"Subject", 'SubjectTypeEnum'>
    readonly teacherId: FieldRef<"Subject", 'String'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject.SubjectInstance
   */
  export type Subject$SubjectInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectInstance
     */
    select?: SubjectInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInstanceInclude<ExtArgs> | null
    where?: SubjectInstanceWhereInput
    orderBy?: SubjectInstanceOrderByWithRelationInput | SubjectInstanceOrderByWithRelationInput[]
    cursor?: SubjectInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectInstanceScalarFieldEnum | SubjectInstanceScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    displayName: 'displayName',
    picture: 'picture',
    role: 'role',
    isVerified: 'isVerified',
    isTwoFactorEnabled: 'isTwoFactorEnabled',
    method: 'method',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    type: 'type',
    provider: 'provider',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const DayOfWeekScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    scheduleId: 'scheduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DayOfWeekScalarFieldEnum = (typeof DayOfWeekScalarFieldEnum)[keyof typeof DayOfWeekScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    position: 'position',
    dayId: 'dayId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const SubjectInstanceScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    isPermanent: 'isPermanent',
    lessonEvenId: 'lessonEvenId',
    lessonOddId: 'lessonOddId'
  };

  export type SubjectInstanceScalarFieldEnum = (typeof SubjectInstanceScalarFieldEnum)[keyof typeof SubjectInstanceScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    teacherId: 'teacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRoleEnum'
   */
  export type EnumUserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoleEnum'>
    


  /**
   * Reference to a field of type 'UserRoleEnum[]'
   */
  export type ListEnumUserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoleEnum[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthMethodEnum'
   */
  export type EnumAuthMethodEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethodEnum'>
    


  /**
   * Reference to a field of type 'AuthMethodEnum[]'
   */
  export type ListEnumAuthMethodEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethodEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TokenTypeEnum'
   */
  export type EnumTokenTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTypeEnum'>
    


  /**
   * Reference to a field of type 'TokenTypeEnum[]'
   */
  export type ListEnumTokenTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTypeEnum[]'>
    


  /**
   * Reference to a field of type 'DayOfWeekEnum'
   */
  export type EnumDayOfWeekEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeekEnum'>
    


  /**
   * Reference to a field of type 'DayOfWeekEnum[]'
   */
  export type ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeekEnum[]'>
    


  /**
   * Reference to a field of type 'SubjectTypeEnum'
   */
  export type EnumSubjectTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectTypeEnum'>
    


  /**
   * Reference to a field of type 'SubjectTypeEnum[]'
   */
  export type ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubjectTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleEnumFilter<"User"> | $Enums.UserRoleEnum
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodEnumFilter<"User"> | $Enums.AuthMethodEnum
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Subject?: SubjectListRelationFilter
    Group?: GroupListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Subject?: SubjectOrderByRelationAggregateInput
    Group?: GroupOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleEnumFilter<"User"> | $Enums.UserRoleEnum
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodEnumFilter<"User"> | $Enums.AuthMethodEnum
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Subject?: SubjectListRelationFilter
    Group?: GroupListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleEnumWithAggregatesFilter<"User"> | $Enums.UserRoleEnum
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    method?: EnumAuthMethodEnumWithAggregatesFilter<"User"> | $Enums.AuthMethodEnum
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntFilter<"Account"> | number
    userId?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntFilter<"Account"> | number
    userId?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: IntWithAggregatesFilter<"Account"> | number
    userId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    email?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeEnumFilter<"Token"> | $Enums.TokenTypeEnum
    expiresIn?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    email?: StringFilter<"Token"> | string
    type?: EnumTokenTypeEnumFilter<"Token"> | $Enums.TokenTypeEnum
    expiresIn?: DateTimeFilter<"Token"> | Date | string
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    email?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeEnumWithAggregatesFilter<"Token"> | $Enums.TokenTypeEnum
    expiresIn?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    students?: UserListRelationFilter
    schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: UserOrderByRelationAggregateInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    students?: UserListRelationFilter
    schedule?: XOR<ScheduleNullableRelationFilter, ScheduleWhereInput> | null
  }, "id" | "name">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    groupId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    days?: DayOfWeekListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    days?: DayOfWeekOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    days?: DayOfWeekListRelationFilter
  }, "id" | "groupId">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    groupId?: StringWithAggregatesFilter<"Schedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type DayOfWeekWhereInput = {
    AND?: DayOfWeekWhereInput | DayOfWeekWhereInput[]
    OR?: DayOfWeekWhereInput[]
    NOT?: DayOfWeekWhereInput | DayOfWeekWhereInput[]
    id?: StringFilter<"DayOfWeek"> | string
    dayOfWeek?: EnumDayOfWeekEnumFilter<"DayOfWeek"> | $Enums.DayOfWeekEnum
    scheduleId?: StringFilter<"DayOfWeek"> | string
    createdAt?: DateTimeFilter<"DayOfWeek"> | Date | string
    updatedAt?: DateTimeFilter<"DayOfWeek"> | Date | string
    lessons?: LessonListRelationFilter
    schedule?: XOR<ScheduleRelationFilter, ScheduleWhereInput>
  }

  export type DayOfWeekOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessons?: LessonOrderByRelationAggregateInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type DayOfWeekWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DayOfWeekWhereInput | DayOfWeekWhereInput[]
    OR?: DayOfWeekWhereInput[]
    NOT?: DayOfWeekWhereInput | DayOfWeekWhereInput[]
    dayOfWeek?: EnumDayOfWeekEnumFilter<"DayOfWeek"> | $Enums.DayOfWeekEnum
    scheduleId?: StringFilter<"DayOfWeek"> | string
    createdAt?: DateTimeFilter<"DayOfWeek"> | Date | string
    updatedAt?: DateTimeFilter<"DayOfWeek"> | Date | string
    lessons?: LessonListRelationFilter
    schedule?: XOR<ScheduleRelationFilter, ScheduleWhereInput>
  }, "id">

  export type DayOfWeekOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DayOfWeekCountOrderByAggregateInput
    _max?: DayOfWeekMaxOrderByAggregateInput
    _min?: DayOfWeekMinOrderByAggregateInput
  }

  export type DayOfWeekScalarWhereWithAggregatesInput = {
    AND?: DayOfWeekScalarWhereWithAggregatesInput | DayOfWeekScalarWhereWithAggregatesInput[]
    OR?: DayOfWeekScalarWhereWithAggregatesInput[]
    NOT?: DayOfWeekScalarWhereWithAggregatesInput | DayOfWeekScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DayOfWeek"> | string
    dayOfWeek?: EnumDayOfWeekEnumWithAggregatesFilter<"DayOfWeek"> | $Enums.DayOfWeekEnum
    scheduleId?: StringWithAggregatesFilter<"DayOfWeek"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DayOfWeek"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DayOfWeek"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    position?: IntFilter<"Lesson"> | number
    dayId?: StringNullableFilter<"Lesson"> | string | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    evenWeek?: SubjectInstanceListRelationFilter
    oddWeek?: SubjectInstanceListRelationFilter
    day?: XOR<DayOfWeekNullableRelationFilter, DayOfWeekWhereInput> | null
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrder
    dayId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evenWeek?: SubjectInstanceOrderByRelationAggregateInput
    oddWeek?: SubjectInstanceOrderByRelationAggregateInput
    day?: DayOfWeekOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    position?: IntFilter<"Lesson"> | number
    dayId?: StringNullableFilter<"Lesson"> | string | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    evenWeek?: SubjectInstanceListRelationFilter
    oddWeek?: SubjectInstanceListRelationFilter
    day?: XOR<DayOfWeekNullableRelationFilter, DayOfWeekWhereInput> | null
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrder
    dayId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    position?: IntWithAggregatesFilter<"Lesson"> | number
    dayId?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type SubjectInstanceWhereInput = {
    AND?: SubjectInstanceWhereInput | SubjectInstanceWhereInput[]
    OR?: SubjectInstanceWhereInput[]
    NOT?: SubjectInstanceWhereInput | SubjectInstanceWhereInput[]
    id?: StringFilter<"SubjectInstance"> | string
    subjectId?: StringFilter<"SubjectInstance"> | string
    isPermanent?: BoolFilter<"SubjectInstance"> | boolean
    lessonEvenId?: StringNullableFilter<"SubjectInstance"> | string | null
    lessonOddId?: StringNullableFilter<"SubjectInstance"> | string | null
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    lessonEven?: XOR<LessonNullableRelationFilter, LessonWhereInput> | null
    lessonOdd?: XOR<LessonNullableRelationFilter, LessonWhereInput> | null
  }

  export type SubjectInstanceOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    isPermanent?: SortOrder
    lessonEvenId?: SortOrderInput | SortOrder
    lessonOddId?: SortOrderInput | SortOrder
    subject?: SubjectOrderByWithRelationInput
    lessonEven?: LessonOrderByWithRelationInput
    lessonOdd?: LessonOrderByWithRelationInput
  }

  export type SubjectInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectInstanceWhereInput | SubjectInstanceWhereInput[]
    OR?: SubjectInstanceWhereInput[]
    NOT?: SubjectInstanceWhereInput | SubjectInstanceWhereInput[]
    subjectId?: StringFilter<"SubjectInstance"> | string
    isPermanent?: BoolFilter<"SubjectInstance"> | boolean
    lessonEvenId?: StringNullableFilter<"SubjectInstance"> | string | null
    lessonOddId?: StringNullableFilter<"SubjectInstance"> | string | null
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    lessonEven?: XOR<LessonNullableRelationFilter, LessonWhereInput> | null
    lessonOdd?: XOR<LessonNullableRelationFilter, LessonWhereInput> | null
  }, "id">

  export type SubjectInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    isPermanent?: SortOrder
    lessonEvenId?: SortOrderInput | SortOrder
    lessonOddId?: SortOrderInput | SortOrder
    _count?: SubjectInstanceCountOrderByAggregateInput
    _max?: SubjectInstanceMaxOrderByAggregateInput
    _min?: SubjectInstanceMinOrderByAggregateInput
  }

  export type SubjectInstanceScalarWhereWithAggregatesInput = {
    AND?: SubjectInstanceScalarWhereWithAggregatesInput | SubjectInstanceScalarWhereWithAggregatesInput[]
    OR?: SubjectInstanceScalarWhereWithAggregatesInput[]
    NOT?: SubjectInstanceScalarWhereWithAggregatesInput | SubjectInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubjectInstance"> | string
    subjectId?: StringWithAggregatesFilter<"SubjectInstance"> | string
    isPermanent?: BoolWithAggregatesFilter<"SubjectInstance"> | boolean
    lessonEvenId?: StringNullableWithAggregatesFilter<"SubjectInstance"> | string | null
    lessonOddId?: StringNullableWithAggregatesFilter<"SubjectInstance"> | string | null
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    type?: EnumSubjectTypeEnumFilter<"Subject"> | $Enums.SubjectTypeEnum
    teacherId?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    SubjectInstance?: SubjectInstanceListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    SubjectInstance?: SubjectInstanceOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    type?: EnumSubjectTypeEnumFilter<"Subject"> | $Enums.SubjectTypeEnum
    teacherId?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    SubjectInstance?: SubjectInstanceListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    type?: EnumSubjectTypeEnumWithAggregatesFilter<"Subject"> | $Enums.SubjectTypeEnum
    teacherId?: StringWithAggregatesFilter<"Subject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
    Group?: GroupCreateNestedManyWithoutStudentsInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    Group?: GroupUncheckedCreateNestedManyWithoutStudentsInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
    Group?: GroupUpdateManyWithoutStudentsNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    Group?: GroupUncheckedUpdateManyWithoutStudentsNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenTypeEnum
    expiresIn: Date | string
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenTypeEnum
    expiresIn: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeEnumFieldUpdateOperationsInput | $Enums.TokenTypeEnum
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeEnumFieldUpdateOperationsInput | $Enums.TokenTypeEnum
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenTypeEnum
    expiresIn: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeEnumFieldUpdateOperationsInput | $Enums.TokenTypeEnum
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeEnumFieldUpdateOperationsInput | $Enums.TokenTypeEnum
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserCreateNestedManyWithoutGroupInput
    schedule?: ScheduleCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutGroupInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUpdateManyWithoutGroupNestedInput
    schedule?: ScheduleUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutGroupNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutScheduleInput
    days?: DayOfWeekCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayOfWeekUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutScheduleNestedInput
    days?: DayOfWeekUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayOfWeekUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOfWeekCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutDayInput
    schedule: ScheduleCreateNestedOneWithoutDaysInput
  }

  export type DayOfWeekUncheckedCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayOfWeekUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutDayNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayOfWeekUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayOfWeekCreateManyInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOfWeekUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOfWeekUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evenWeek?: SubjectInstanceCreateNestedManyWithoutLessonEvenInput
    oddWeek?: SubjectInstanceCreateNestedManyWithoutLessonOddInput
    day?: DayOfWeekCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    position: number
    dayId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evenWeek?: SubjectInstanceUncheckedCreateNestedManyWithoutLessonEvenInput
    oddWeek?: SubjectInstanceUncheckedCreateNestedManyWithoutLessonOddInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evenWeek?: SubjectInstanceUpdateManyWithoutLessonEvenNestedInput
    oddWeek?: SubjectInstanceUpdateManyWithoutLessonOddNestedInput
    day?: DayOfWeekUpdateOneWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evenWeek?: SubjectInstanceUncheckedUpdateManyWithoutLessonEvenNestedInput
    oddWeek?: SubjectInstanceUncheckedUpdateManyWithoutLessonOddNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    position: number
    dayId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectInstanceCreateInput = {
    id?: string
    isPermanent: boolean
    subject: SubjectCreateNestedOneWithoutSubjectInstanceInput
    lessonEven?: LessonCreateNestedOneWithoutEvenWeekInput
    lessonOdd?: LessonCreateNestedOneWithoutOddWeekInput
  }

  export type SubjectInstanceUncheckedCreateInput = {
    id?: string
    subjectId: string
    isPermanent: boolean
    lessonEvenId?: string | null
    lessonOddId?: string | null
  }

  export type SubjectInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    subject?: SubjectUpdateOneRequiredWithoutSubjectInstanceNestedInput
    lessonEven?: LessonUpdateOneWithoutEvenWeekNestedInput
    lessonOdd?: LessonUpdateOneWithoutOddWeekNestedInput
  }

  export type SubjectInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEvenId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonOddId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectInstanceCreateManyInput = {
    id?: string
    subjectId: string
    isPermanent: boolean
    lessonEvenId?: string | null
    lessonOddId?: string | null
  }

  export type SubjectInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubjectInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEvenId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonOddId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutSubjectInput
    SubjectInstance?: SubjectInstanceCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    teacherId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SubjectInstance?: SubjectInstanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutSubjectNestedInput
    SubjectInstance?: SubjectInstanceUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubjectInstance?: SubjectInstanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    teacherId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumFilter<$PrismaModel> | $Enums.UserRoleEnum
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthMethodEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethodEnum | EnumAuthMethodEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodEnumFilter<$PrismaModel> | $Enums.AuthMethodEnum
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumUserRoleEnumFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthMethodEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethodEnum | EnumAuthMethodEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodEnumWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethodEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodEnumFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodEnumFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTokenTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypeEnum | EnumTokenTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeEnumFilter<$PrismaModel> | $Enums.TokenTypeEnum
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
  }

  export type EnumTokenTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypeEnum | EnumTokenTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.TokenTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeEnumFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ScheduleNullableRelationFilter = {
    is?: ScheduleWhereInput | null
    isNot?: ScheduleWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type DayOfWeekListRelationFilter = {
    every?: DayOfWeekWhereInput
    some?: DayOfWeekWhereInput
    none?: DayOfWeekWhereInput
  }

  export type DayOfWeekOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeekEnum | EnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekEnumFilter<$PrismaModel> | $Enums.DayOfWeekEnum
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type ScheduleRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayOfWeekCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayOfWeekMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayOfWeekMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeekEnum | EnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekEnumWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeekEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekEnumFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekEnumFilter<$PrismaModel>
  }

  export type SubjectInstanceListRelationFilter = {
    every?: SubjectInstanceWhereInput
    some?: SubjectInstanceWhereInput
    none?: SubjectInstanceWhereInput
  }

  export type DayOfWeekNullableRelationFilter = {
    is?: DayOfWeekWhereInput | null
    isNot?: DayOfWeekWhereInput | null
  }

  export type SubjectInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type SubjectRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type LessonNullableRelationFilter = {
    is?: LessonWhereInput | null
    isNot?: LessonWhereInput | null
  }

  export type SubjectInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    isPermanent?: SortOrder
    lessonEvenId?: SortOrder
    lessonOddId?: SortOrder
  }

  export type SubjectInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    isPermanent?: SortOrder
    lessonEvenId?: SortOrder
    lessonOddId?: SortOrder
  }

  export type SubjectInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    isPermanent?: SortOrder
    lessonEvenId?: SortOrder
    lessonOddId?: SortOrder
  }

  export type EnumSubjectTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectTypeEnum | EnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeEnumFilter<$PrismaModel> | $Enums.SubjectTypeEnum
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubjectTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectTypeEnum | EnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.SubjectTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumSubjectTypeEnumFilter<$PrismaModel>
  }

  export type SubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput> | GroupCreateWithoutStudentsInput[] | GroupUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput | GroupCreateOrConnectWithoutStudentsInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput> | GroupCreateWithoutStudentsInput[] | GroupUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput | GroupCreateOrConnectWithoutStudentsInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserRoleEnum
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthMethodEnumFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethodEnum
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput> | GroupCreateWithoutStudentsInput[] | GroupUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput | GroupCreateOrConnectWithoutStudentsInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutStudentsInput | GroupUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutStudentsInput | GroupUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutStudentsInput | GroupUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput> | GroupCreateWithoutStudentsInput[] | GroupUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput | GroupCreateOrConnectWithoutStudentsInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutStudentsInput | GroupUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutStudentsInput | GroupUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutStudentsInput | GroupUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type EnumTokenTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.TokenTypeEnum
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ScheduleCreateNestedOneWithoutGroupInput = {
    create?: XOR<ScheduleCreateWithoutGroupInput, ScheduleUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutGroupInput
    connect?: ScheduleWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedOneWithoutGroupInput = {
    create?: XOR<ScheduleCreateWithoutGroupInput, ScheduleUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutGroupInput
    connect?: ScheduleWhereUniqueInput
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ScheduleUpdateOneWithoutGroupNestedInput = {
    create?: XOR<ScheduleCreateWithoutGroupInput, ScheduleUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutGroupInput
    upsert?: ScheduleUpsertWithoutGroupInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutGroupInput, ScheduleUpdateWithoutGroupInput>, ScheduleUncheckedUpdateWithoutGroupInput>
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateOneWithoutGroupNestedInput = {
    create?: XOR<ScheduleCreateWithoutGroupInput, ScheduleUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutGroupInput
    upsert?: ScheduleUpsertWithoutGroupInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutGroupInput, ScheduleUpdateWithoutGroupInput>, ScheduleUncheckedUpdateWithoutGroupInput>
  }

  export type GroupCreateNestedOneWithoutScheduleInput = {
    create?: XOR<GroupCreateWithoutScheduleInput, GroupUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: GroupCreateOrConnectWithoutScheduleInput
    connect?: GroupWhereUniqueInput
  }

  export type DayOfWeekCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DayOfWeekCreateWithoutScheduleInput, DayOfWeekUncheckedCreateWithoutScheduleInput> | DayOfWeekCreateWithoutScheduleInput[] | DayOfWeekUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DayOfWeekCreateOrConnectWithoutScheduleInput | DayOfWeekCreateOrConnectWithoutScheduleInput[]
    createMany?: DayOfWeekCreateManyScheduleInputEnvelope
    connect?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
  }

  export type DayOfWeekUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DayOfWeekCreateWithoutScheduleInput, DayOfWeekUncheckedCreateWithoutScheduleInput> | DayOfWeekCreateWithoutScheduleInput[] | DayOfWeekUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DayOfWeekCreateOrConnectWithoutScheduleInput | DayOfWeekCreateOrConnectWithoutScheduleInput[]
    createMany?: DayOfWeekCreateManyScheduleInputEnvelope
    connect?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<GroupCreateWithoutScheduleInput, GroupUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: GroupCreateOrConnectWithoutScheduleInput
    upsert?: GroupUpsertWithoutScheduleInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutScheduleInput, GroupUpdateWithoutScheduleInput>, GroupUncheckedUpdateWithoutScheduleInput>
  }

  export type DayOfWeekUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DayOfWeekCreateWithoutScheduleInput, DayOfWeekUncheckedCreateWithoutScheduleInput> | DayOfWeekCreateWithoutScheduleInput[] | DayOfWeekUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DayOfWeekCreateOrConnectWithoutScheduleInput | DayOfWeekCreateOrConnectWithoutScheduleInput[]
    upsert?: DayOfWeekUpsertWithWhereUniqueWithoutScheduleInput | DayOfWeekUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DayOfWeekCreateManyScheduleInputEnvelope
    set?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    disconnect?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    delete?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    connect?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    update?: DayOfWeekUpdateWithWhereUniqueWithoutScheduleInput | DayOfWeekUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DayOfWeekUpdateManyWithWhereWithoutScheduleInput | DayOfWeekUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DayOfWeekScalarWhereInput | DayOfWeekScalarWhereInput[]
  }

  export type DayOfWeekUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DayOfWeekCreateWithoutScheduleInput, DayOfWeekUncheckedCreateWithoutScheduleInput> | DayOfWeekCreateWithoutScheduleInput[] | DayOfWeekUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DayOfWeekCreateOrConnectWithoutScheduleInput | DayOfWeekCreateOrConnectWithoutScheduleInput[]
    upsert?: DayOfWeekUpsertWithWhereUniqueWithoutScheduleInput | DayOfWeekUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DayOfWeekCreateManyScheduleInputEnvelope
    set?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    disconnect?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    delete?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    connect?: DayOfWeekWhereUniqueInput | DayOfWeekWhereUniqueInput[]
    update?: DayOfWeekUpdateWithWhereUniqueWithoutScheduleInput | DayOfWeekUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DayOfWeekUpdateManyWithWhereWithoutScheduleInput | DayOfWeekUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DayOfWeekScalarWhereInput | DayOfWeekScalarWhereInput[]
  }

  export type LessonCreateNestedManyWithoutDayInput = {
    create?: XOR<LessonCreateWithoutDayInput, LessonUncheckedCreateWithoutDayInput> | LessonCreateWithoutDayInput[] | LessonUncheckedCreateWithoutDayInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutDayInput | LessonCreateOrConnectWithoutDayInput[]
    createMany?: LessonCreateManyDayInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type ScheduleCreateNestedOneWithoutDaysInput = {
    create?: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDaysInput
    connect?: ScheduleWhereUniqueInput
  }

  export type LessonUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<LessonCreateWithoutDayInput, LessonUncheckedCreateWithoutDayInput> | LessonCreateWithoutDayInput[] | LessonUncheckedCreateWithoutDayInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutDayInput | LessonCreateOrConnectWithoutDayInput[]
    createMany?: LessonCreateManyDayInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type EnumDayOfWeekEnumFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeekEnum
  }

  export type LessonUpdateManyWithoutDayNestedInput = {
    create?: XOR<LessonCreateWithoutDayInput, LessonUncheckedCreateWithoutDayInput> | LessonCreateWithoutDayInput[] | LessonUncheckedCreateWithoutDayInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutDayInput | LessonCreateOrConnectWithoutDayInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutDayInput | LessonUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: LessonCreateManyDayInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutDayInput | LessonUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutDayInput | LessonUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type ScheduleUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDaysInput
    upsert?: ScheduleUpsertWithoutDaysInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutDaysInput, ScheduleUpdateWithoutDaysInput>, ScheduleUncheckedUpdateWithoutDaysInput>
  }

  export type LessonUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<LessonCreateWithoutDayInput, LessonUncheckedCreateWithoutDayInput> | LessonCreateWithoutDayInput[] | LessonUncheckedCreateWithoutDayInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutDayInput | LessonCreateOrConnectWithoutDayInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutDayInput | LessonUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: LessonCreateManyDayInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutDayInput | LessonUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutDayInput | LessonUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type SubjectInstanceCreateNestedManyWithoutLessonEvenInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonEvenInput, SubjectInstanceUncheckedCreateWithoutLessonEvenInput> | SubjectInstanceCreateWithoutLessonEvenInput[] | SubjectInstanceUncheckedCreateWithoutLessonEvenInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonEvenInput | SubjectInstanceCreateOrConnectWithoutLessonEvenInput[]
    createMany?: SubjectInstanceCreateManyLessonEvenInputEnvelope
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
  }

  export type SubjectInstanceCreateNestedManyWithoutLessonOddInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonOddInput, SubjectInstanceUncheckedCreateWithoutLessonOddInput> | SubjectInstanceCreateWithoutLessonOddInput[] | SubjectInstanceUncheckedCreateWithoutLessonOddInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonOddInput | SubjectInstanceCreateOrConnectWithoutLessonOddInput[]
    createMany?: SubjectInstanceCreateManyLessonOddInputEnvelope
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
  }

  export type DayOfWeekCreateNestedOneWithoutLessonsInput = {
    create?: XOR<DayOfWeekCreateWithoutLessonsInput, DayOfWeekUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: DayOfWeekCreateOrConnectWithoutLessonsInput
    connect?: DayOfWeekWhereUniqueInput
  }

  export type SubjectInstanceUncheckedCreateNestedManyWithoutLessonEvenInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonEvenInput, SubjectInstanceUncheckedCreateWithoutLessonEvenInput> | SubjectInstanceCreateWithoutLessonEvenInput[] | SubjectInstanceUncheckedCreateWithoutLessonEvenInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonEvenInput | SubjectInstanceCreateOrConnectWithoutLessonEvenInput[]
    createMany?: SubjectInstanceCreateManyLessonEvenInputEnvelope
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
  }

  export type SubjectInstanceUncheckedCreateNestedManyWithoutLessonOddInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonOddInput, SubjectInstanceUncheckedCreateWithoutLessonOddInput> | SubjectInstanceCreateWithoutLessonOddInput[] | SubjectInstanceUncheckedCreateWithoutLessonOddInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonOddInput | SubjectInstanceCreateOrConnectWithoutLessonOddInput[]
    createMany?: SubjectInstanceCreateManyLessonOddInputEnvelope
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
  }

  export type SubjectInstanceUpdateManyWithoutLessonEvenNestedInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonEvenInput, SubjectInstanceUncheckedCreateWithoutLessonEvenInput> | SubjectInstanceCreateWithoutLessonEvenInput[] | SubjectInstanceUncheckedCreateWithoutLessonEvenInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonEvenInput | SubjectInstanceCreateOrConnectWithoutLessonEvenInput[]
    upsert?: SubjectInstanceUpsertWithWhereUniqueWithoutLessonEvenInput | SubjectInstanceUpsertWithWhereUniqueWithoutLessonEvenInput[]
    createMany?: SubjectInstanceCreateManyLessonEvenInputEnvelope
    set?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    disconnect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    delete?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    update?: SubjectInstanceUpdateWithWhereUniqueWithoutLessonEvenInput | SubjectInstanceUpdateWithWhereUniqueWithoutLessonEvenInput[]
    updateMany?: SubjectInstanceUpdateManyWithWhereWithoutLessonEvenInput | SubjectInstanceUpdateManyWithWhereWithoutLessonEvenInput[]
    deleteMany?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
  }

  export type SubjectInstanceUpdateManyWithoutLessonOddNestedInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonOddInput, SubjectInstanceUncheckedCreateWithoutLessonOddInput> | SubjectInstanceCreateWithoutLessonOddInput[] | SubjectInstanceUncheckedCreateWithoutLessonOddInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonOddInput | SubjectInstanceCreateOrConnectWithoutLessonOddInput[]
    upsert?: SubjectInstanceUpsertWithWhereUniqueWithoutLessonOddInput | SubjectInstanceUpsertWithWhereUniqueWithoutLessonOddInput[]
    createMany?: SubjectInstanceCreateManyLessonOddInputEnvelope
    set?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    disconnect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    delete?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    update?: SubjectInstanceUpdateWithWhereUniqueWithoutLessonOddInput | SubjectInstanceUpdateWithWhereUniqueWithoutLessonOddInput[]
    updateMany?: SubjectInstanceUpdateManyWithWhereWithoutLessonOddInput | SubjectInstanceUpdateManyWithWhereWithoutLessonOddInput[]
    deleteMany?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
  }

  export type DayOfWeekUpdateOneWithoutLessonsNestedInput = {
    create?: XOR<DayOfWeekCreateWithoutLessonsInput, DayOfWeekUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: DayOfWeekCreateOrConnectWithoutLessonsInput
    upsert?: DayOfWeekUpsertWithoutLessonsInput
    disconnect?: DayOfWeekWhereInput | boolean
    delete?: DayOfWeekWhereInput | boolean
    connect?: DayOfWeekWhereUniqueInput
    update?: XOR<XOR<DayOfWeekUpdateToOneWithWhereWithoutLessonsInput, DayOfWeekUpdateWithoutLessonsInput>, DayOfWeekUncheckedUpdateWithoutLessonsInput>
  }

  export type SubjectInstanceUncheckedUpdateManyWithoutLessonEvenNestedInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonEvenInput, SubjectInstanceUncheckedCreateWithoutLessonEvenInput> | SubjectInstanceCreateWithoutLessonEvenInput[] | SubjectInstanceUncheckedCreateWithoutLessonEvenInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonEvenInput | SubjectInstanceCreateOrConnectWithoutLessonEvenInput[]
    upsert?: SubjectInstanceUpsertWithWhereUniqueWithoutLessonEvenInput | SubjectInstanceUpsertWithWhereUniqueWithoutLessonEvenInput[]
    createMany?: SubjectInstanceCreateManyLessonEvenInputEnvelope
    set?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    disconnect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    delete?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    update?: SubjectInstanceUpdateWithWhereUniqueWithoutLessonEvenInput | SubjectInstanceUpdateWithWhereUniqueWithoutLessonEvenInput[]
    updateMany?: SubjectInstanceUpdateManyWithWhereWithoutLessonEvenInput | SubjectInstanceUpdateManyWithWhereWithoutLessonEvenInput[]
    deleteMany?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
  }

  export type SubjectInstanceUncheckedUpdateManyWithoutLessonOddNestedInput = {
    create?: XOR<SubjectInstanceCreateWithoutLessonOddInput, SubjectInstanceUncheckedCreateWithoutLessonOddInput> | SubjectInstanceCreateWithoutLessonOddInput[] | SubjectInstanceUncheckedCreateWithoutLessonOddInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutLessonOddInput | SubjectInstanceCreateOrConnectWithoutLessonOddInput[]
    upsert?: SubjectInstanceUpsertWithWhereUniqueWithoutLessonOddInput | SubjectInstanceUpsertWithWhereUniqueWithoutLessonOddInput[]
    createMany?: SubjectInstanceCreateManyLessonOddInputEnvelope
    set?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    disconnect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    delete?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    update?: SubjectInstanceUpdateWithWhereUniqueWithoutLessonOddInput | SubjectInstanceUpdateWithWhereUniqueWithoutLessonOddInput[]
    updateMany?: SubjectInstanceUpdateManyWithWhereWithoutLessonOddInput | SubjectInstanceUpdateManyWithWhereWithoutLessonOddInput[]
    deleteMany?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutSubjectInstanceInput = {
    create?: XOR<SubjectCreateWithoutSubjectInstanceInput, SubjectUncheckedCreateWithoutSubjectInstanceInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSubjectInstanceInput
    connect?: SubjectWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutEvenWeekInput = {
    create?: XOR<LessonCreateWithoutEvenWeekInput, LessonUncheckedCreateWithoutEvenWeekInput>
    connectOrCreate?: LessonCreateOrConnectWithoutEvenWeekInput
    connect?: LessonWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutOddWeekInput = {
    create?: XOR<LessonCreateWithoutOddWeekInput, LessonUncheckedCreateWithoutOddWeekInput>
    connectOrCreate?: LessonCreateOrConnectWithoutOddWeekInput
    connect?: LessonWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutSubjectInstanceNestedInput = {
    create?: XOR<SubjectCreateWithoutSubjectInstanceInput, SubjectUncheckedCreateWithoutSubjectInstanceInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSubjectInstanceInput
    upsert?: SubjectUpsertWithoutSubjectInstanceInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutSubjectInstanceInput, SubjectUpdateWithoutSubjectInstanceInput>, SubjectUncheckedUpdateWithoutSubjectInstanceInput>
  }

  export type LessonUpdateOneWithoutEvenWeekNestedInput = {
    create?: XOR<LessonCreateWithoutEvenWeekInput, LessonUncheckedCreateWithoutEvenWeekInput>
    connectOrCreate?: LessonCreateOrConnectWithoutEvenWeekInput
    upsert?: LessonUpsertWithoutEvenWeekInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutEvenWeekInput, LessonUpdateWithoutEvenWeekInput>, LessonUncheckedUpdateWithoutEvenWeekInput>
  }

  export type LessonUpdateOneWithoutOddWeekNestedInput = {
    create?: XOR<LessonCreateWithoutOddWeekInput, LessonUncheckedCreateWithoutOddWeekInput>
    connectOrCreate?: LessonCreateOrConnectWithoutOddWeekInput
    upsert?: LessonUpsertWithoutOddWeekInput
    disconnect?: LessonWhereInput | boolean
    delete?: LessonWhereInput | boolean
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutOddWeekInput, LessonUpdateWithoutOddWeekInput>, LessonUncheckedUpdateWithoutOddWeekInput>
  }

  export type UserCreateNestedOneWithoutSubjectInput = {
    create?: XOR<UserCreateWithoutSubjectInput, UserUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectInstanceCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SubjectInstanceCreateWithoutSubjectInput, SubjectInstanceUncheckedCreateWithoutSubjectInput> | SubjectInstanceCreateWithoutSubjectInput[] | SubjectInstanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutSubjectInput | SubjectInstanceCreateOrConnectWithoutSubjectInput[]
    createMany?: SubjectInstanceCreateManySubjectInputEnvelope
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
  }

  export type SubjectInstanceUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SubjectInstanceCreateWithoutSubjectInput, SubjectInstanceUncheckedCreateWithoutSubjectInput> | SubjectInstanceCreateWithoutSubjectInput[] | SubjectInstanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutSubjectInput | SubjectInstanceCreateOrConnectWithoutSubjectInput[]
    createMany?: SubjectInstanceCreateManySubjectInputEnvelope
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
  }

  export type EnumSubjectTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.SubjectTypeEnum
  }

  export type UserUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<UserCreateWithoutSubjectInput, UserUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectInput
    upsert?: UserUpsertWithoutSubjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubjectInput, UserUpdateWithoutSubjectInput>, UserUncheckedUpdateWithoutSubjectInput>
  }

  export type SubjectInstanceUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SubjectInstanceCreateWithoutSubjectInput, SubjectInstanceUncheckedCreateWithoutSubjectInput> | SubjectInstanceCreateWithoutSubjectInput[] | SubjectInstanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutSubjectInput | SubjectInstanceCreateOrConnectWithoutSubjectInput[]
    upsert?: SubjectInstanceUpsertWithWhereUniqueWithoutSubjectInput | SubjectInstanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SubjectInstanceCreateManySubjectInputEnvelope
    set?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    disconnect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    delete?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    update?: SubjectInstanceUpdateWithWhereUniqueWithoutSubjectInput | SubjectInstanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SubjectInstanceUpdateManyWithWhereWithoutSubjectInput | SubjectInstanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
  }

  export type SubjectInstanceUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SubjectInstanceCreateWithoutSubjectInput, SubjectInstanceUncheckedCreateWithoutSubjectInput> | SubjectInstanceCreateWithoutSubjectInput[] | SubjectInstanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SubjectInstanceCreateOrConnectWithoutSubjectInput | SubjectInstanceCreateOrConnectWithoutSubjectInput[]
    upsert?: SubjectInstanceUpsertWithWhereUniqueWithoutSubjectInput | SubjectInstanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SubjectInstanceCreateManySubjectInputEnvelope
    set?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    disconnect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    delete?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    connect?: SubjectInstanceWhereUniqueInput | SubjectInstanceWhereUniqueInput[]
    update?: SubjectInstanceUpdateWithWhereUniqueWithoutSubjectInput | SubjectInstanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SubjectInstanceUpdateManyWithWhereWithoutSubjectInput | SubjectInstanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumFilter<$PrismaModel> | $Enums.UserRoleEnum
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthMethodEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethodEnum | EnumAuthMethodEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodEnumFilter<$PrismaModel> | $Enums.AuthMethodEnum
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumUserRoleEnumFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthMethodEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethodEnum | EnumAuthMethodEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethodEnum[] | ListEnumAuthMethodEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodEnumWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethodEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodEnumFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTokenTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypeEnum | EnumTokenTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeEnumFilter<$PrismaModel> | $Enums.TokenTypeEnum
  }

  export type NestedEnumTokenTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTypeEnum | EnumTokenTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTypeEnum[] | ListEnumTokenTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.TokenTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumDayOfWeekEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeekEnum | EnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekEnumFilter<$PrismaModel> | $Enums.DayOfWeekEnum
  }

  export type NestedEnumDayOfWeekEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeekEnum | EnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeekEnum[] | ListEnumDayOfWeekEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekEnumWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeekEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekEnumFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekEnumFilter<$PrismaModel>
  }

  export type NestedEnumSubjectTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectTypeEnum | EnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeEnumFilter<$PrismaModel> | $Enums.SubjectTypeEnum
  }

  export type NestedEnumSubjectTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubjectTypeEnum | EnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubjectTypeEnum[] | ListEnumSubjectTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.SubjectTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumSubjectTypeEnumFilter<$PrismaModel>
  }

  export type SubjectCreateWithoutTeacherInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    SubjectInstance?: SubjectInstanceCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    SubjectInstance?: SubjectInstanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectCreateManyTeacherInputEnvelope = {
    data: SubjectCreateManyTeacherInput | SubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule?: ScheduleCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule?: ScheduleUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    type?: EnumSubjectTypeEnumFilter<"Subject"> | $Enums.SubjectTypeEnum
    teacherId?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateManyWithWhereWithoutStudentsInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutStudentsInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntFilter<"Account"> | number
    userId?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
    Group?: GroupCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    Group?: GroupUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
    Group?: GroupUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    Group?: GroupUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type UserCreateWithoutGroupInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type ScheduleCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayOfWeekCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayOfWeekUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutGroupInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutGroupInput, ScheduleUncheckedCreateWithoutGroupInput>
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleEnumFilter<"User"> | $Enums.UserRoleEnum
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodEnumFilter<"User"> | $Enums.AuthMethodEnum
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ScheduleUpsertWithoutGroupInput = {
    update: XOR<ScheduleUpdateWithoutGroupInput, ScheduleUncheckedUpdateWithoutGroupInput>
    create: XOR<ScheduleCreateWithoutGroupInput, ScheduleUncheckedCreateWithoutGroupInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutGroupInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutGroupInput, ScheduleUncheckedUpdateWithoutGroupInput>
  }

  export type ScheduleUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayOfWeekUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayOfWeekUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type GroupCreateWithoutScheduleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutScheduleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutScheduleInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutScheduleInput, GroupUncheckedCreateWithoutScheduleInput>
  }

  export type DayOfWeekCreateWithoutScheduleInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutDayInput
  }

  export type DayOfWeekUncheckedCreateWithoutScheduleInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayOfWeekCreateOrConnectWithoutScheduleInput = {
    where: DayOfWeekWhereUniqueInput
    create: XOR<DayOfWeekCreateWithoutScheduleInput, DayOfWeekUncheckedCreateWithoutScheduleInput>
  }

  export type DayOfWeekCreateManyScheduleInputEnvelope = {
    data: DayOfWeekCreateManyScheduleInput | DayOfWeekCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutScheduleInput = {
    update: XOR<GroupUpdateWithoutScheduleInput, GroupUncheckedUpdateWithoutScheduleInput>
    create: XOR<GroupCreateWithoutScheduleInput, GroupUncheckedCreateWithoutScheduleInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutScheduleInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutScheduleInput, GroupUncheckedUpdateWithoutScheduleInput>
  }

  export type GroupUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type DayOfWeekUpsertWithWhereUniqueWithoutScheduleInput = {
    where: DayOfWeekWhereUniqueInput
    update: XOR<DayOfWeekUpdateWithoutScheduleInput, DayOfWeekUncheckedUpdateWithoutScheduleInput>
    create: XOR<DayOfWeekCreateWithoutScheduleInput, DayOfWeekUncheckedCreateWithoutScheduleInput>
  }

  export type DayOfWeekUpdateWithWhereUniqueWithoutScheduleInput = {
    where: DayOfWeekWhereUniqueInput
    data: XOR<DayOfWeekUpdateWithoutScheduleInput, DayOfWeekUncheckedUpdateWithoutScheduleInput>
  }

  export type DayOfWeekUpdateManyWithWhereWithoutScheduleInput = {
    where: DayOfWeekScalarWhereInput
    data: XOR<DayOfWeekUpdateManyMutationInput, DayOfWeekUncheckedUpdateManyWithoutScheduleInput>
  }

  export type DayOfWeekScalarWhereInput = {
    AND?: DayOfWeekScalarWhereInput | DayOfWeekScalarWhereInput[]
    OR?: DayOfWeekScalarWhereInput[]
    NOT?: DayOfWeekScalarWhereInput | DayOfWeekScalarWhereInput[]
    id?: StringFilter<"DayOfWeek"> | string
    dayOfWeek?: EnumDayOfWeekEnumFilter<"DayOfWeek"> | $Enums.DayOfWeekEnum
    scheduleId?: StringFilter<"DayOfWeek"> | string
    createdAt?: DateTimeFilter<"DayOfWeek"> | Date | string
    updatedAt?: DateTimeFilter<"DayOfWeek"> | Date | string
  }

  export type LessonCreateWithoutDayInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evenWeek?: SubjectInstanceCreateNestedManyWithoutLessonEvenInput
    oddWeek?: SubjectInstanceCreateNestedManyWithoutLessonOddInput
  }

  export type LessonUncheckedCreateWithoutDayInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evenWeek?: SubjectInstanceUncheckedCreateNestedManyWithoutLessonEvenInput
    oddWeek?: SubjectInstanceUncheckedCreateNestedManyWithoutLessonOddInput
  }

  export type LessonCreateOrConnectWithoutDayInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutDayInput, LessonUncheckedCreateWithoutDayInput>
  }

  export type LessonCreateManyDayInputEnvelope = {
    data: LessonCreateManyDayInput | LessonCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutDaysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutDaysInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutDaysInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
  }

  export type LessonUpsertWithWhereUniqueWithoutDayInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutDayInput, LessonUncheckedUpdateWithoutDayInput>
    create: XOR<LessonCreateWithoutDayInput, LessonUncheckedCreateWithoutDayInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutDayInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutDayInput, LessonUncheckedUpdateWithoutDayInput>
  }

  export type LessonUpdateManyWithWhereWithoutDayInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutDayInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    position?: IntFilter<"Lesson"> | number
    dayId?: StringNullableFilter<"Lesson"> | string | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type ScheduleUpsertWithoutDaysInput = {
    update: XOR<ScheduleUpdateWithoutDaysInput, ScheduleUncheckedUpdateWithoutDaysInput>
    create: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutDaysInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutDaysInput, ScheduleUncheckedUpdateWithoutDaysInput>
  }

  export type ScheduleUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectInstanceCreateWithoutLessonEvenInput = {
    id?: string
    isPermanent: boolean
    subject: SubjectCreateNestedOneWithoutSubjectInstanceInput
    lessonOdd?: LessonCreateNestedOneWithoutOddWeekInput
  }

  export type SubjectInstanceUncheckedCreateWithoutLessonEvenInput = {
    id?: string
    subjectId: string
    isPermanent: boolean
    lessonOddId?: string | null
  }

  export type SubjectInstanceCreateOrConnectWithoutLessonEvenInput = {
    where: SubjectInstanceWhereUniqueInput
    create: XOR<SubjectInstanceCreateWithoutLessonEvenInput, SubjectInstanceUncheckedCreateWithoutLessonEvenInput>
  }

  export type SubjectInstanceCreateManyLessonEvenInputEnvelope = {
    data: SubjectInstanceCreateManyLessonEvenInput | SubjectInstanceCreateManyLessonEvenInput[]
    skipDuplicates?: boolean
  }

  export type SubjectInstanceCreateWithoutLessonOddInput = {
    id?: string
    isPermanent: boolean
    subject: SubjectCreateNestedOneWithoutSubjectInstanceInput
    lessonEven?: LessonCreateNestedOneWithoutEvenWeekInput
  }

  export type SubjectInstanceUncheckedCreateWithoutLessonOddInput = {
    id?: string
    subjectId: string
    isPermanent: boolean
    lessonEvenId?: string | null
  }

  export type SubjectInstanceCreateOrConnectWithoutLessonOddInput = {
    where: SubjectInstanceWhereUniqueInput
    create: XOR<SubjectInstanceCreateWithoutLessonOddInput, SubjectInstanceUncheckedCreateWithoutLessonOddInput>
  }

  export type SubjectInstanceCreateManyLessonOddInputEnvelope = {
    data: SubjectInstanceCreateManyLessonOddInput | SubjectInstanceCreateManyLessonOddInput[]
    skipDuplicates?: boolean
  }

  export type DayOfWeekCreateWithoutLessonsInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutDaysInput
  }

  export type DayOfWeekUncheckedCreateWithoutLessonsInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOfWeekCreateOrConnectWithoutLessonsInput = {
    where: DayOfWeekWhereUniqueInput
    create: XOR<DayOfWeekCreateWithoutLessonsInput, DayOfWeekUncheckedCreateWithoutLessonsInput>
  }

  export type SubjectInstanceUpsertWithWhereUniqueWithoutLessonEvenInput = {
    where: SubjectInstanceWhereUniqueInput
    update: XOR<SubjectInstanceUpdateWithoutLessonEvenInput, SubjectInstanceUncheckedUpdateWithoutLessonEvenInput>
    create: XOR<SubjectInstanceCreateWithoutLessonEvenInput, SubjectInstanceUncheckedCreateWithoutLessonEvenInput>
  }

  export type SubjectInstanceUpdateWithWhereUniqueWithoutLessonEvenInput = {
    where: SubjectInstanceWhereUniqueInput
    data: XOR<SubjectInstanceUpdateWithoutLessonEvenInput, SubjectInstanceUncheckedUpdateWithoutLessonEvenInput>
  }

  export type SubjectInstanceUpdateManyWithWhereWithoutLessonEvenInput = {
    where: SubjectInstanceScalarWhereInput
    data: XOR<SubjectInstanceUpdateManyMutationInput, SubjectInstanceUncheckedUpdateManyWithoutLessonEvenInput>
  }

  export type SubjectInstanceScalarWhereInput = {
    AND?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
    OR?: SubjectInstanceScalarWhereInput[]
    NOT?: SubjectInstanceScalarWhereInput | SubjectInstanceScalarWhereInput[]
    id?: StringFilter<"SubjectInstance"> | string
    subjectId?: StringFilter<"SubjectInstance"> | string
    isPermanent?: BoolFilter<"SubjectInstance"> | boolean
    lessonEvenId?: StringNullableFilter<"SubjectInstance"> | string | null
    lessonOddId?: StringNullableFilter<"SubjectInstance"> | string | null
  }

  export type SubjectInstanceUpsertWithWhereUniqueWithoutLessonOddInput = {
    where: SubjectInstanceWhereUniqueInput
    update: XOR<SubjectInstanceUpdateWithoutLessonOddInput, SubjectInstanceUncheckedUpdateWithoutLessonOddInput>
    create: XOR<SubjectInstanceCreateWithoutLessonOddInput, SubjectInstanceUncheckedCreateWithoutLessonOddInput>
  }

  export type SubjectInstanceUpdateWithWhereUniqueWithoutLessonOddInput = {
    where: SubjectInstanceWhereUniqueInput
    data: XOR<SubjectInstanceUpdateWithoutLessonOddInput, SubjectInstanceUncheckedUpdateWithoutLessonOddInput>
  }

  export type SubjectInstanceUpdateManyWithWhereWithoutLessonOddInput = {
    where: SubjectInstanceScalarWhereInput
    data: XOR<SubjectInstanceUpdateManyMutationInput, SubjectInstanceUncheckedUpdateManyWithoutLessonOddInput>
  }

  export type DayOfWeekUpsertWithoutLessonsInput = {
    update: XOR<DayOfWeekUpdateWithoutLessonsInput, DayOfWeekUncheckedUpdateWithoutLessonsInput>
    create: XOR<DayOfWeekCreateWithoutLessonsInput, DayOfWeekUncheckedCreateWithoutLessonsInput>
    where?: DayOfWeekWhereInput
  }

  export type DayOfWeekUpdateToOneWithWhereWithoutLessonsInput = {
    where?: DayOfWeekWhereInput
    data: XOR<DayOfWeekUpdateWithoutLessonsInput, DayOfWeekUncheckedUpdateWithoutLessonsInput>
  }

  export type DayOfWeekUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayOfWeekUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateWithoutSubjectInstanceInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutSubjectInstanceInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    teacherId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectCreateOrConnectWithoutSubjectInstanceInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutSubjectInstanceInput, SubjectUncheckedCreateWithoutSubjectInstanceInput>
  }

  export type LessonCreateWithoutEvenWeekInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    oddWeek?: SubjectInstanceCreateNestedManyWithoutLessonOddInput
    day?: DayOfWeekCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutEvenWeekInput = {
    id?: string
    position: number
    dayId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oddWeek?: SubjectInstanceUncheckedCreateNestedManyWithoutLessonOddInput
  }

  export type LessonCreateOrConnectWithoutEvenWeekInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutEvenWeekInput, LessonUncheckedCreateWithoutEvenWeekInput>
  }

  export type LessonCreateWithoutOddWeekInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evenWeek?: SubjectInstanceCreateNestedManyWithoutLessonEvenInput
    day?: DayOfWeekCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutOddWeekInput = {
    id?: string
    position: number
    dayId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evenWeek?: SubjectInstanceUncheckedCreateNestedManyWithoutLessonEvenInput
  }

  export type LessonCreateOrConnectWithoutOddWeekInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutOddWeekInput, LessonUncheckedCreateWithoutOddWeekInput>
  }

  export type SubjectUpsertWithoutSubjectInstanceInput = {
    update: XOR<SubjectUpdateWithoutSubjectInstanceInput, SubjectUncheckedUpdateWithoutSubjectInstanceInput>
    create: XOR<SubjectCreateWithoutSubjectInstanceInput, SubjectUncheckedCreateWithoutSubjectInstanceInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutSubjectInstanceInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutSubjectInstanceInput, SubjectUncheckedUpdateWithoutSubjectInstanceInput>
  }

  export type SubjectUpdateWithoutSubjectInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutSubjectInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUpsertWithoutEvenWeekInput = {
    update: XOR<LessonUpdateWithoutEvenWeekInput, LessonUncheckedUpdateWithoutEvenWeekInput>
    create: XOR<LessonCreateWithoutEvenWeekInput, LessonUncheckedCreateWithoutEvenWeekInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutEvenWeekInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutEvenWeekInput, LessonUncheckedUpdateWithoutEvenWeekInput>
  }

  export type LessonUpdateWithoutEvenWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oddWeek?: SubjectInstanceUpdateManyWithoutLessonOddNestedInput
    day?: DayOfWeekUpdateOneWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutEvenWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oddWeek?: SubjectInstanceUncheckedUpdateManyWithoutLessonOddNestedInput
  }

  export type LessonUpsertWithoutOddWeekInput = {
    update: XOR<LessonUpdateWithoutOddWeekInput, LessonUncheckedUpdateWithoutOddWeekInput>
    create: XOR<LessonCreateWithoutOddWeekInput, LessonUncheckedCreateWithoutOddWeekInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutOddWeekInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutOddWeekInput, LessonUncheckedUpdateWithoutOddWeekInput>
  }

  export type LessonUpdateWithoutOddWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evenWeek?: SubjectInstanceUpdateManyWithoutLessonEvenNestedInput
    day?: DayOfWeekUpdateOneWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutOddWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    dayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evenWeek?: SubjectInstanceUncheckedUpdateManyWithoutLessonEvenNestedInput
  }

  export type UserCreateWithoutSubjectInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Group?: GroupCreateNestedManyWithoutStudentsInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubjectInput = {
    id?: string
    email: string
    password: string
    displayName: string
    picture?: string | null
    role?: $Enums.UserRoleEnum
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethodEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Group?: GroupUncheckedCreateNestedManyWithoutStudentsInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubjectInput, UserUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectInstanceCreateWithoutSubjectInput = {
    id?: string
    isPermanent: boolean
    lessonEven?: LessonCreateNestedOneWithoutEvenWeekInput
    lessonOdd?: LessonCreateNestedOneWithoutOddWeekInput
  }

  export type SubjectInstanceUncheckedCreateWithoutSubjectInput = {
    id?: string
    isPermanent: boolean
    lessonEvenId?: string | null
    lessonOddId?: string | null
  }

  export type SubjectInstanceCreateOrConnectWithoutSubjectInput = {
    where: SubjectInstanceWhereUniqueInput
    create: XOR<SubjectInstanceCreateWithoutSubjectInput, SubjectInstanceUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectInstanceCreateManySubjectInputEnvelope = {
    data: SubjectInstanceCreateManySubjectInput | SubjectInstanceCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubjectInput = {
    update: XOR<UserUpdateWithoutSubjectInput, UserUncheckedUpdateWithoutSubjectInput>
    create: XOR<UserCreateWithoutSubjectInput, UserUncheckedCreateWithoutSubjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubjectInput, UserUncheckedUpdateWithoutSubjectInput>
  }

  export type UserUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUpdateManyWithoutStudentsNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUncheckedUpdateManyWithoutStudentsNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubjectInstanceUpsertWithWhereUniqueWithoutSubjectInput = {
    where: SubjectInstanceWhereUniqueInput
    update: XOR<SubjectInstanceUpdateWithoutSubjectInput, SubjectInstanceUncheckedUpdateWithoutSubjectInput>
    create: XOR<SubjectInstanceCreateWithoutSubjectInput, SubjectInstanceUncheckedCreateWithoutSubjectInput>
  }

  export type SubjectInstanceUpdateWithWhereUniqueWithoutSubjectInput = {
    where: SubjectInstanceWhereUniqueInput
    data: XOR<SubjectInstanceUpdateWithoutSubjectInput, SubjectInstanceUncheckedUpdateWithoutSubjectInput>
  }

  export type SubjectInstanceUpdateManyWithWhereWithoutSubjectInput = {
    where: SubjectInstanceScalarWhereInput
    data: XOR<SubjectInstanceUpdateManyMutationInput, SubjectInstanceUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SubjectCreateManyTeacherInput = {
    id?: string
    name: string
    type: $Enums.SubjectTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubjectInstance?: SubjectInstanceUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubjectInstance?: SubjectInstanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumSubjectTypeEnumFieldUpdateOperationsInput | $Enums.SubjectTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodEnumFieldUpdateOperationsInput | $Enums.AuthMethodEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOfWeekCreateManyScheduleInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeekEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOfWeekUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutDayNestedInput
  }

  export type DayOfWeekUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayOfWeekUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekEnumFieldUpdateOperationsInput | $Enums.DayOfWeekEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyDayInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evenWeek?: SubjectInstanceUpdateManyWithoutLessonEvenNestedInput
    oddWeek?: SubjectInstanceUpdateManyWithoutLessonOddNestedInput
  }

  export type LessonUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evenWeek?: SubjectInstanceUncheckedUpdateManyWithoutLessonEvenNestedInput
    oddWeek?: SubjectInstanceUncheckedUpdateManyWithoutLessonOddNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectInstanceCreateManyLessonEvenInput = {
    id?: string
    subjectId: string
    isPermanent: boolean
    lessonOddId?: string | null
  }

  export type SubjectInstanceCreateManyLessonOddInput = {
    id?: string
    subjectId: string
    isPermanent: boolean
    lessonEvenId?: string | null
  }

  export type SubjectInstanceUpdateWithoutLessonEvenInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    subject?: SubjectUpdateOneRequiredWithoutSubjectInstanceNestedInput
    lessonOdd?: LessonUpdateOneWithoutOddWeekNestedInput
  }

  export type SubjectInstanceUncheckedUpdateWithoutLessonEvenInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonOddId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectInstanceUncheckedUpdateManyWithoutLessonEvenInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonOddId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectInstanceUpdateWithoutLessonOddInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    subject?: SubjectUpdateOneRequiredWithoutSubjectInstanceNestedInput
    lessonEven?: LessonUpdateOneWithoutEvenWeekNestedInput
  }

  export type SubjectInstanceUncheckedUpdateWithoutLessonOddInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEvenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectInstanceUncheckedUpdateManyWithoutLessonOddInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEvenId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectInstanceCreateManySubjectInput = {
    id?: string
    isPermanent: boolean
    lessonEvenId?: string | null
    lessonOddId?: string | null
  }

  export type SubjectInstanceUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEven?: LessonUpdateOneWithoutEvenWeekNestedInput
    lessonOdd?: LessonUpdateOneWithoutOddWeekNestedInput
  }

  export type SubjectInstanceUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEvenId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonOddId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectInstanceUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPermanent?: BoolFieldUpdateOperationsInput | boolean
    lessonEvenId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonOddId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleCountOutputTypeDefaultArgs instead
     */
    export type ScheduleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayOfWeekCountOutputTypeDefaultArgs instead
     */
    export type DayOfWeekCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DayOfWeekCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonCountOutputTypeDefaultArgs instead
     */
    export type LessonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectCountOutputTypeDefaultArgs instead
     */
    export type SubjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleDefaultArgs instead
     */
    export type ScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayOfWeekDefaultArgs instead
     */
    export type DayOfWeekArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DayOfWeekDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonDefaultArgs instead
     */
    export type LessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectInstanceDefaultArgs instead
     */
    export type SubjectInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectInstanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectDefaultArgs instead
     */
    export type SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}