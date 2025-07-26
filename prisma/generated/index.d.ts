
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
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Attention
 * 
 */
export type Attention = $Result.DefaultSelection<Prisma.$AttentionPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TestTicket
 * 
 */
export type TestTicket = $Result.DefaultSelection<Prisma.$TestTicketPayload>
/**
 * Model TicketInfo
 * 
 */
export type TicketInfo = $Result.DefaultSelection<Prisma.$TicketInfoPayload>
/**
 * Model TicketInfoDetail
 * 
 */
export type TicketInfoDetail = $Result.DefaultSelection<Prisma.$TicketInfoDetailPayload>
/**
 * Model Service2
 * 
 */
export type Service2 = $Result.DefaultSelection<Prisma.$Service2Payload>
/**
 * Model Cliente2
 * 
 */
export type Cliente2 = $Result.DefaultSelection<Prisma.$Cliente2Payload>
/**
 * Model ManualSearch
 * 
 */
export type ManualSearch = $Result.DefaultSelection<Prisma.$ManualSearchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ManualSearchStatus: {
  PENDING: 'PENDING',
  NOT_FOUND: 'NOT_FOUND'
};

export type ManualSearchStatus = (typeof ManualSearchStatus)[keyof typeof ManualSearchStatus]

}

export type ManualSearchStatus = $Enums.ManualSearchStatus

export const ManualSearchStatus: typeof $Enums.ManualSearchStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.attention`: Exposes CRUD operations for the **Attention** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attentions
    * const attentions = await prisma.attention.findMany()
    * ```
    */
  get attention(): Prisma.AttentionDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.testTicket`: Exposes CRUD operations for the **TestTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestTickets
    * const testTickets = await prisma.testTicket.findMany()
    * ```
    */
  get testTicket(): Prisma.TestTicketDelegate<ExtArgs>;

  /**
   * `prisma.ticketInfo`: Exposes CRUD operations for the **TicketInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketInfos
    * const ticketInfos = await prisma.ticketInfo.findMany()
    * ```
    */
  get ticketInfo(): Prisma.TicketInfoDelegate<ExtArgs>;

  /**
   * `prisma.ticketInfoDetail`: Exposes CRUD operations for the **TicketInfoDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketInfoDetails
    * const ticketInfoDetails = await prisma.ticketInfoDetail.findMany()
    * ```
    */
  get ticketInfoDetail(): Prisma.TicketInfoDetailDelegate<ExtArgs>;

  /**
   * `prisma.service2`: Exposes CRUD operations for the **Service2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Service2s
    * const service2s = await prisma.service2.findMany()
    * ```
    */
  get service2(): Prisma.Service2Delegate<ExtArgs>;

  /**
   * `prisma.cliente2`: Exposes CRUD operations for the **Cliente2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cliente2s
    * const cliente2s = await prisma.cliente2.findMany()
    * ```
    */
  get cliente2(): Prisma.Cliente2Delegate<ExtArgs>;

  /**
   * `prisma.manualSearch`: Exposes CRUD operations for the **ManualSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManualSearches
    * const manualSearches = await prisma.manualSearch.findMany()
    * ```
    */
  get manualSearch(): Prisma.ManualSearchDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Patient: 'Patient',
    Attention: 'Attention',
    Ticket: 'Ticket',
    TestTicket: 'TestTicket',
    TicketInfo: 'TicketInfo',
    TicketInfoDetail: 'TicketInfoDetail',
    Service2: 'Service2',
    Cliente2: 'Cliente2',
    ManualSearch: 'ManualSearch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'patient' | 'attention' | 'ticket' | 'testTicket' | 'ticketInfo' | 'ticketInfoDetail' | 'service2' | 'cliente2' | 'manualSearch'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>,
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Attention: {
        payload: Prisma.$AttentionPayload<ExtArgs>
        fields: Prisma.AttentionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttentionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttentionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>
          }
          findFirst: {
            args: Prisma.AttentionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttentionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>
          }
          findMany: {
            args: Prisma.AttentionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>[]
          }
          create: {
            args: Prisma.AttentionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>
          }
          createMany: {
            args: Prisma.AttentionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttentionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>[]
          }
          delete: {
            args: Prisma.AttentionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>
          }
          update: {
            args: Prisma.AttentionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>
          }
          deleteMany: {
            args: Prisma.AttentionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttentionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttentionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttentionPayload>
          }
          aggregate: {
            args: Prisma.AttentionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttention>
          }
          groupBy: {
            args: Prisma.AttentionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttentionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttentionCountArgs<ExtArgs>,
            result: $Utils.Optional<AttentionCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TestTicket: {
        payload: Prisma.$TestTicketPayload<ExtArgs>
        fields: Prisma.TestTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestTicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestTicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>
          }
          findFirst: {
            args: Prisma.TestTicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestTicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>
          }
          findMany: {
            args: Prisma.TestTicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>[]
          }
          create: {
            args: Prisma.TestTicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>
          }
          createMany: {
            args: Prisma.TestTicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestTicketCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>[]
          }
          delete: {
            args: Prisma.TestTicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>
          }
          update: {
            args: Prisma.TestTicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>
          }
          deleteMany: {
            args: Prisma.TestTicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TestTicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TestTicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestTicketPayload>
          }
          aggregate: {
            args: Prisma.TestTicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTestTicket>
          }
          groupBy: {
            args: Prisma.TestTicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestTicketCountArgs<ExtArgs>,
            result: $Utils.Optional<TestTicketCountAggregateOutputType> | number
          }
        }
      }
      TicketInfo: {
        payload: Prisma.$TicketInfoPayload<ExtArgs>
        fields: Prisma.TicketInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketInfoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketInfoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>
          }
          findFirst: {
            args: Prisma.TicketInfoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketInfoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>
          }
          findMany: {
            args: Prisma.TicketInfoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>[]
          }
          create: {
            args: Prisma.TicketInfoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>
          }
          createMany: {
            args: Prisma.TicketInfoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketInfoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>[]
          }
          delete: {
            args: Prisma.TicketInfoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>
          }
          update: {
            args: Prisma.TicketInfoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>
          }
          deleteMany: {
            args: Prisma.TicketInfoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketInfoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketInfoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoPayload>
          }
          aggregate: {
            args: Prisma.TicketInfoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicketInfo>
          }
          groupBy: {
            args: Prisma.TicketInfoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketInfoCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketInfoCountAggregateOutputType> | number
          }
        }
      }
      TicketInfoDetail: {
        payload: Prisma.$TicketInfoDetailPayload<ExtArgs>
        fields: Prisma.TicketInfoDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketInfoDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketInfoDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>
          }
          findFirst: {
            args: Prisma.TicketInfoDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketInfoDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>
          }
          findMany: {
            args: Prisma.TicketInfoDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>[]
          }
          create: {
            args: Prisma.TicketInfoDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>
          }
          createMany: {
            args: Prisma.TicketInfoDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketInfoDetailCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>[]
          }
          delete: {
            args: Prisma.TicketInfoDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>
          }
          update: {
            args: Prisma.TicketInfoDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>
          }
          deleteMany: {
            args: Prisma.TicketInfoDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketInfoDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketInfoDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketInfoDetailPayload>
          }
          aggregate: {
            args: Prisma.TicketInfoDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicketInfoDetail>
          }
          groupBy: {
            args: Prisma.TicketInfoDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketInfoDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketInfoDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketInfoDetailCountAggregateOutputType> | number
          }
        }
      }
      Service2: {
        payload: Prisma.$Service2Payload<ExtArgs>
        fields: Prisma.Service2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Service2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Service2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>
          }
          findFirst: {
            args: Prisma.Service2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Service2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>
          }
          findMany: {
            args: Prisma.Service2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>[]
          }
          create: {
            args: Prisma.Service2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>
          }
          createMany: {
            args: Prisma.Service2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Service2CreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>[]
          }
          delete: {
            args: Prisma.Service2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>
          }
          update: {
            args: Prisma.Service2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>
          }
          deleteMany: {
            args: Prisma.Service2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Service2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Service2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Service2Payload>
          }
          aggregate: {
            args: Prisma.Service2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateService2>
          }
          groupBy: {
            args: Prisma.Service2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<Service2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Service2CountArgs<ExtArgs>,
            result: $Utils.Optional<Service2CountAggregateOutputType> | number
          }
        }
      }
      Cliente2: {
        payload: Prisma.$Cliente2Payload<ExtArgs>
        fields: Prisma.Cliente2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Cliente2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Cliente2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>
          }
          findFirst: {
            args: Prisma.Cliente2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Cliente2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>
          }
          findMany: {
            args: Prisma.Cliente2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>[]
          }
          create: {
            args: Prisma.Cliente2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>
          }
          createMany: {
            args: Prisma.Cliente2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Cliente2CreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>[]
          }
          delete: {
            args: Prisma.Cliente2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>
          }
          update: {
            args: Prisma.Cliente2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>
          }
          deleteMany: {
            args: Prisma.Cliente2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Cliente2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Cliente2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Cliente2Payload>
          }
          aggregate: {
            args: Prisma.Cliente2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCliente2>
          }
          groupBy: {
            args: Prisma.Cliente2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cliente2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Cliente2CountArgs<ExtArgs>,
            result: $Utils.Optional<Cliente2CountAggregateOutputType> | number
          }
        }
      }
      ManualSearch: {
        payload: Prisma.$ManualSearchPayload<ExtArgs>
        fields: Prisma.ManualSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManualSearchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManualSearchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>
          }
          findFirst: {
            args: Prisma.ManualSearchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManualSearchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>
          }
          findMany: {
            args: Prisma.ManualSearchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>[]
          }
          create: {
            args: Prisma.ManualSearchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>
          }
          createMany: {
            args: Prisma.ManualSearchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManualSearchCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>[]
          }
          delete: {
            args: Prisma.ManualSearchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>
          }
          update: {
            args: Prisma.ManualSearchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>
          }
          deleteMany: {
            args: Prisma.ManualSearchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManualSearchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManualSearchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManualSearchPayload>
          }
          aggregate: {
            args: Prisma.ManualSearchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManualSearch>
          }
          groupBy: {
            args: Prisma.ManualSearchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManualSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManualSearchCountArgs<ExtArgs>,
            result: $Utils.Optional<ManualSearchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    attentions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attentions?: boolean | PatientCountOutputTypeCountAttentionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAttentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttentionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    sequence: number | null
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    sequence: number | null
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    sequence: number | null
    firstName: string | null
    lastName: string | null
    dni: string | null
    age: number | null
    sex: string | null
    createdAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    sequence: number | null
    firstName: string | null
    lastName: string | null
    dni: string | null
    age: number | null
    sex: string | null
    createdAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    sequence: number
    firstName: number
    lastName: number
    dni: number
    age: number
    sex: number
    createdAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    sequence?: true
    age?: true
  }

  export type PatientSumAggregateInputType = {
    sequence?: true
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    sequence?: true
    firstName?: true
    lastName?: true
    dni?: true
    age?: true
    sex?: true
    createdAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    sequence?: true
    firstName?: true
    lastName?: true
    dni?: true
    age?: true
    sex?: true
    createdAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    sequence?: true
    firstName?: true
    lastName?: true
    dni?: true
    age?: true
    sex?: true
    createdAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    sequence: number
    firstName: string
    lastName: string
    dni: string
    age: number
    sex: string
    createdAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    age?: boolean
    sex?: boolean
    createdAt?: boolean
    attentions?: boolean | Patient$attentionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    age?: boolean
    sex?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    sequence?: boolean
    firstName?: boolean
    lastName?: boolean
    dni?: boolean
    age?: boolean
    sex?: boolean
    createdAt?: boolean
  }

  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attentions?: boolean | Patient$attentionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      attentions: Prisma.$AttentionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sequence: number
      firstName: string
      lastName: string
      dni: string
      age: number
      sex: string
      createdAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientCreateArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PatientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attentions<T extends Patient$attentionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$attentionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly sequence: FieldRef<"Patient", 'Int'>
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly dni: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly sex: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }

  /**
   * Patient.attentions
   */
  export type Patient$attentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    where?: AttentionWhereInput
    orderBy?: AttentionOrderByWithRelationInput | AttentionOrderByWithRelationInput[]
    cursor?: AttentionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttentionScalarFieldEnum | AttentionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Attention
   */

  export type AggregateAttention = {
    _count: AttentionCountAggregateOutputType | null
    _avg: AttentionAvgAggregateOutputType | null
    _sum: AttentionSumAggregateOutputType | null
    _min: AttentionMinAggregateOutputType | null
    _max: AttentionMaxAggregateOutputType | null
  }

  export type AttentionAvgAggregateOutputType = {
    sequence: number | null
    ticketId: number | null
  }

  export type AttentionSumAggregateOutputType = {
    sequence: number | null
    ticketId: number | null
  }

  export type AttentionMinAggregateOutputType = {
    id: string | null
    sequence: number | null
    patientId: string | null
    ticketId: number | null
  }

  export type AttentionMaxAggregateOutputType = {
    id: string | null
    sequence: number | null
    patientId: string | null
    ticketId: number | null
  }

  export type AttentionCountAggregateOutputType = {
    id: number
    sequence: number
    patientId: number
    ticketId: number
    _all: number
  }


  export type AttentionAvgAggregateInputType = {
    sequence?: true
    ticketId?: true
  }

  export type AttentionSumAggregateInputType = {
    sequence?: true
    ticketId?: true
  }

  export type AttentionMinAggregateInputType = {
    id?: true
    sequence?: true
    patientId?: true
    ticketId?: true
  }

  export type AttentionMaxAggregateInputType = {
    id?: true
    sequence?: true
    patientId?: true
    ticketId?: true
  }

  export type AttentionCountAggregateInputType = {
    id?: true
    sequence?: true
    patientId?: true
    ticketId?: true
    _all?: true
  }

  export type AttentionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attention to aggregate.
     */
    where?: AttentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attentions to fetch.
     */
    orderBy?: AttentionOrderByWithRelationInput | AttentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attentions
    **/
    _count?: true | AttentionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttentionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttentionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttentionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttentionMaxAggregateInputType
  }

  export type GetAttentionAggregateType<T extends AttentionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttention]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttention[P]>
      : GetScalarType<T[P], AggregateAttention[P]>
  }




  export type AttentionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttentionWhereInput
    orderBy?: AttentionOrderByWithAggregationInput | AttentionOrderByWithAggregationInput[]
    by: AttentionScalarFieldEnum[] | AttentionScalarFieldEnum
    having?: AttentionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttentionCountAggregateInputType | true
    _avg?: AttentionAvgAggregateInputType
    _sum?: AttentionSumAggregateInputType
    _min?: AttentionMinAggregateInputType
    _max?: AttentionMaxAggregateInputType
  }

  export type AttentionGroupByOutputType = {
    id: string
    sequence: number
    patientId: string
    ticketId: number
    _count: AttentionCountAggregateOutputType | null
    _avg: AttentionAvgAggregateOutputType | null
    _sum: AttentionSumAggregateOutputType | null
    _min: AttentionMinAggregateOutputType | null
    _max: AttentionMaxAggregateOutputType | null
  }

  type GetAttentionGroupByPayload<T extends AttentionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttentionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttentionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttentionGroupByOutputType[P]>
            : GetScalarType<T[P], AttentionGroupByOutputType[P]>
        }
      >
    >


  export type AttentionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    patientId?: boolean
    ticketId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attention"]>

  export type AttentionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequence?: boolean
    patientId?: boolean
    ticketId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attention"]>

  export type AttentionSelectScalar = {
    id?: boolean
    sequence?: boolean
    patientId?: boolean
    ticketId?: boolean
  }

  export type AttentionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type AttentionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $AttentionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attention"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sequence: number
      patientId: string
      ticketId: number
    }, ExtArgs["result"]["attention"]>
    composites: {}
  }

  type AttentionGetPayload<S extends boolean | null | undefined | AttentionDefaultArgs> = $Result.GetResult<Prisma.$AttentionPayload, S>

  type AttentionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttentionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttentionCountAggregateInputType | true
    }

  export interface AttentionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attention'], meta: { name: 'Attention' } }
    /**
     * Find zero or one Attention that matches the filter.
     * @param {AttentionFindUniqueArgs} args - Arguments to find a Attention
     * @example
     * // Get one Attention
     * const attention = await prisma.attention.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttentionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttentionFindUniqueArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attention that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttentionFindUniqueOrThrowArgs} args - Arguments to find a Attention
     * @example
     * // Get one Attention
     * const attention = await prisma.attention.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttentionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attention that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionFindFirstArgs} args - Arguments to find a Attention
     * @example
     * // Get one Attention
     * const attention = await prisma.attention.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttentionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionFindFirstArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attention that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionFindFirstOrThrowArgs} args - Arguments to find a Attention
     * @example
     * // Get one Attention
     * const attention = await prisma.attention.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttentionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attentions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attentions
     * const attentions = await prisma.attention.findMany()
     * 
     * // Get first 10 Attentions
     * const attentions = await prisma.attention.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attentionWithIdOnly = await prisma.attention.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttentionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attention.
     * @param {AttentionCreateArgs} args - Arguments to create a Attention.
     * @example
     * // Create one Attention
     * const Attention = await prisma.attention.create({
     *   data: {
     *     // ... data to create a Attention
     *   }
     * })
     * 
    **/
    create<T extends AttentionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttentionCreateArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attentions.
     * @param {AttentionCreateManyArgs} args - Arguments to create many Attentions.
     * @example
     * // Create many Attentions
     * const attention = await prisma.attention.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AttentionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attentions and returns the data saved in the database.
     * @param {AttentionCreateManyAndReturnArgs} args - Arguments to create many Attentions.
     * @example
     * // Create many Attentions
     * const attention = await prisma.attention.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attentions and only return the `id`
     * const attentionWithIdOnly = await prisma.attention.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AttentionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Attention.
     * @param {AttentionDeleteArgs} args - Arguments to delete one Attention.
     * @example
     * // Delete one Attention
     * const Attention = await prisma.attention.delete({
     *   where: {
     *     // ... filter to delete one Attention
     *   }
     * })
     * 
    **/
    delete<T extends AttentionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttentionDeleteArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attention.
     * @param {AttentionUpdateArgs} args - Arguments to update one Attention.
     * @example
     * // Update one Attention
     * const attention = await prisma.attention.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttentionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttentionUpdateArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attentions.
     * @param {AttentionDeleteManyArgs} args - Arguments to filter Attentions to delete.
     * @example
     * // Delete a few Attentions
     * const { count } = await prisma.attention.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttentionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttentionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attentions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attentions
     * const attention = await prisma.attention.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttentionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttentionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attention.
     * @param {AttentionUpsertArgs} args - Arguments to update or create a Attention.
     * @example
     * // Update or create a Attention
     * const attention = await prisma.attention.upsert({
     *   create: {
     *     // ... data to create a Attention
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attention we want to update
     *   }
     * })
    **/
    upsert<T extends AttentionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttentionUpsertArgs<ExtArgs>>
    ): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attentions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionCountArgs} args - Arguments to filter Attentions to count.
     * @example
     * // Count the number of Attentions
     * const count = await prisma.attention.count({
     *   where: {
     *     // ... the filter for the Attentions we want to count
     *   }
     * })
    **/
    count<T extends AttentionCountArgs>(
      args?: Subset<T, AttentionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttentionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttentionAggregateArgs>(args: Subset<T, AttentionAggregateArgs>): Prisma.PrismaPromise<GetAttentionAggregateType<T>>

    /**
     * Group by Attention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionGroupByArgs} args - Group by arguments.
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
      T extends AttentionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttentionGroupByArgs['orderBy'] }
        : { orderBy?: AttentionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttentionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttentionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attention model
   */
  readonly fields: AttentionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attention.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttentionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attention model
   */ 
  interface AttentionFieldRefs {
    readonly id: FieldRef<"Attention", 'String'>
    readonly sequence: FieldRef<"Attention", 'Int'>
    readonly patientId: FieldRef<"Attention", 'String'>
    readonly ticketId: FieldRef<"Attention", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attention findUnique
   */
  export type AttentionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * Filter, which Attention to fetch.
     */
    where: AttentionWhereUniqueInput
  }

  /**
   * Attention findUniqueOrThrow
   */
  export type AttentionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * Filter, which Attention to fetch.
     */
    where: AttentionWhereUniqueInput
  }

  /**
   * Attention findFirst
   */
  export type AttentionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * Filter, which Attention to fetch.
     */
    where?: AttentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attentions to fetch.
     */
    orderBy?: AttentionOrderByWithRelationInput | AttentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attentions.
     */
    cursor?: AttentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attentions.
     */
    distinct?: AttentionScalarFieldEnum | AttentionScalarFieldEnum[]
  }

  /**
   * Attention findFirstOrThrow
   */
  export type AttentionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * Filter, which Attention to fetch.
     */
    where?: AttentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attentions to fetch.
     */
    orderBy?: AttentionOrderByWithRelationInput | AttentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attentions.
     */
    cursor?: AttentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attentions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attentions.
     */
    distinct?: AttentionScalarFieldEnum | AttentionScalarFieldEnum[]
  }

  /**
   * Attention findMany
   */
  export type AttentionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * Filter, which Attentions to fetch.
     */
    where?: AttentionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attentions to fetch.
     */
    orderBy?: AttentionOrderByWithRelationInput | AttentionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attentions.
     */
    cursor?: AttentionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attentions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attentions.
     */
    skip?: number
    distinct?: AttentionScalarFieldEnum | AttentionScalarFieldEnum[]
  }

  /**
   * Attention create
   */
  export type AttentionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * The data needed to create a Attention.
     */
    data: XOR<AttentionCreateInput, AttentionUncheckedCreateInput>
  }

  /**
   * Attention createMany
   */
  export type AttentionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attentions.
     */
    data: AttentionCreateManyInput | AttentionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attention createManyAndReturn
   */
  export type AttentionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attentions.
     */
    data: AttentionCreateManyInput | AttentionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attention update
   */
  export type AttentionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * The data needed to update a Attention.
     */
    data: XOR<AttentionUpdateInput, AttentionUncheckedUpdateInput>
    /**
     * Choose, which Attention to update.
     */
    where: AttentionWhereUniqueInput
  }

  /**
   * Attention updateMany
   */
  export type AttentionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attentions.
     */
    data: XOR<AttentionUpdateManyMutationInput, AttentionUncheckedUpdateManyInput>
    /**
     * Filter which Attentions to update
     */
    where?: AttentionWhereInput
  }

  /**
   * Attention upsert
   */
  export type AttentionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * The filter to search for the Attention to update in case it exists.
     */
    where: AttentionWhereUniqueInput
    /**
     * In case the Attention found by the `where` argument doesn't exist, create a new Attention with this data.
     */
    create: XOR<AttentionCreateInput, AttentionUncheckedCreateInput>
    /**
     * In case the Attention was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttentionUpdateInput, AttentionUncheckedUpdateInput>
  }

  /**
   * Attention delete
   */
  export type AttentionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    /**
     * Filter which Attention to delete.
     */
    where: AttentionWhereUniqueInput
  }

  /**
   * Attention deleteMany
   */
  export type AttentionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attentions to delete
     */
    where?: AttentionWhereInput
  }

  /**
   * Attention without action
   */
  export type AttentionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    cidDetail: string | null
    cidItem: string | null
    ccodProdServItem: string | null
    cdescriptItem: string | null
    cindicadoPsItem: string | null
    cvalorVentaUnitaria: string | null
    cprecioVentaUnitarioItem: string | null
    ccantidadItem: string | null
    cValorItem: string | null
    cigvTotalItem: string | null
    ctotalItem: string | null
    ccodSunatProdServItem: string | null
    ccodComercialProdServ: string | null
    cid: string | null
    cfecEd: string | null
    ctipDocEmisor: string | null
    capaminoRazonSocialEmisor: string | null
    cubigeoEmisor: string | null
    cdireccionEmisor: string | null
    cdepartamentoEmisor: string | null
    cprovinciaEmisor: string | null
    cdistritoEmisor: string | null
    cnombreComercialEmisor: string | null
    cTipDoc: string | null
    cnroSerie: string | null
    cnroDoc: string | null
    cinfoDocAdquiriente: string | null
    ctipDocAdquiriente: string | null
    capaminoRazonSocialAdquiriente: string | null
    cmoneda: string | null
    ctotalOperacionesGrav: string | null
    cmontoTotalIgv: string | null
    cmontoTotalPagar: string | null
    cmontoTotalPercep: string | null
    cleyenda: string | null
    cfecCreaFace: string | null
    ccodigoBarras: string | null
    ccodigpQr: string | null
    isValidated: boolean | null
    validatesDate: Date | null
    valitadedBy: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    cidDetail: string | null
    cidItem: string | null
    ccodProdServItem: string | null
    cdescriptItem: string | null
    cindicadoPsItem: string | null
    cvalorVentaUnitaria: string | null
    cprecioVentaUnitarioItem: string | null
    ccantidadItem: string | null
    cValorItem: string | null
    cigvTotalItem: string | null
    ctotalItem: string | null
    ccodSunatProdServItem: string | null
    ccodComercialProdServ: string | null
    cid: string | null
    cfecEd: string | null
    ctipDocEmisor: string | null
    capaminoRazonSocialEmisor: string | null
    cubigeoEmisor: string | null
    cdireccionEmisor: string | null
    cdepartamentoEmisor: string | null
    cprovinciaEmisor: string | null
    cdistritoEmisor: string | null
    cnombreComercialEmisor: string | null
    cTipDoc: string | null
    cnroSerie: string | null
    cnroDoc: string | null
    cinfoDocAdquiriente: string | null
    ctipDocAdquiriente: string | null
    capaminoRazonSocialAdquiriente: string | null
    cmoneda: string | null
    ctotalOperacionesGrav: string | null
    cmontoTotalIgv: string | null
    cmontoTotalPagar: string | null
    cmontoTotalPercep: string | null
    cleyenda: string | null
    cfecCreaFace: string | null
    ccodigoBarras: string | null
    ccodigpQr: string | null
    isValidated: boolean | null
    validatesDate: Date | null
    valitadedBy: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    cidDetail: number
    cidItem: number
    ccodProdServItem: number
    cdescriptItem: number
    cindicadoPsItem: number
    cvalorVentaUnitaria: number
    cprecioVentaUnitarioItem: number
    ccantidadItem: number
    cValorItem: number
    cigvTotalItem: number
    ctotalItem: number
    ccodSunatProdServItem: number
    ccodComercialProdServ: number
    cid: number
    cfecEd: number
    ctipDocEmisor: number
    capaminoRazonSocialEmisor: number
    cubigeoEmisor: number
    cdireccionEmisor: number
    cdepartamentoEmisor: number
    cprovinciaEmisor: number
    cdistritoEmisor: number
    cnombreComercialEmisor: number
    cTipDoc: number
    cnroSerie: number
    cnroDoc: number
    cinfoDocAdquiriente: number
    ctipDocAdquiriente: number
    capaminoRazonSocialAdquiriente: number
    cmoneda: number
    ctotalOperacionesGrav: number
    cmontoTotalIgv: number
    cmontoTotalPagar: number
    cmontoTotalPercep: number
    cleyenda: number
    cfecCreaFace: number
    ccodigoBarras: number
    ccodigpQr: number
    isValidated: number
    validatesDate: number
    valitadedBy: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    cidDetail?: true
    cidItem?: true
    ccodProdServItem?: true
    cdescriptItem?: true
    cindicadoPsItem?: true
    cvalorVentaUnitaria?: true
    cprecioVentaUnitarioItem?: true
    ccantidadItem?: true
    cValorItem?: true
    cigvTotalItem?: true
    ctotalItem?: true
    ccodSunatProdServItem?: true
    ccodComercialProdServ?: true
    cid?: true
    cfecEd?: true
    ctipDocEmisor?: true
    capaminoRazonSocialEmisor?: true
    cubigeoEmisor?: true
    cdireccionEmisor?: true
    cdepartamentoEmisor?: true
    cprovinciaEmisor?: true
    cdistritoEmisor?: true
    cnombreComercialEmisor?: true
    cTipDoc?: true
    cnroSerie?: true
    cnroDoc?: true
    cinfoDocAdquiriente?: true
    ctipDocAdquiriente?: true
    capaminoRazonSocialAdquiriente?: true
    cmoneda?: true
    ctotalOperacionesGrav?: true
    cmontoTotalIgv?: true
    cmontoTotalPagar?: true
    cmontoTotalPercep?: true
    cleyenda?: true
    cfecCreaFace?: true
    ccodigoBarras?: true
    ccodigpQr?: true
    isValidated?: true
    validatesDate?: true
    valitadedBy?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    cidDetail?: true
    cidItem?: true
    ccodProdServItem?: true
    cdescriptItem?: true
    cindicadoPsItem?: true
    cvalorVentaUnitaria?: true
    cprecioVentaUnitarioItem?: true
    ccantidadItem?: true
    cValorItem?: true
    cigvTotalItem?: true
    ctotalItem?: true
    ccodSunatProdServItem?: true
    ccodComercialProdServ?: true
    cid?: true
    cfecEd?: true
    ctipDocEmisor?: true
    capaminoRazonSocialEmisor?: true
    cubigeoEmisor?: true
    cdireccionEmisor?: true
    cdepartamentoEmisor?: true
    cprovinciaEmisor?: true
    cdistritoEmisor?: true
    cnombreComercialEmisor?: true
    cTipDoc?: true
    cnroSerie?: true
    cnroDoc?: true
    cinfoDocAdquiriente?: true
    ctipDocAdquiriente?: true
    capaminoRazonSocialAdquiriente?: true
    cmoneda?: true
    ctotalOperacionesGrav?: true
    cmontoTotalIgv?: true
    cmontoTotalPagar?: true
    cmontoTotalPercep?: true
    cleyenda?: true
    cfecCreaFace?: true
    ccodigoBarras?: true
    ccodigpQr?: true
    isValidated?: true
    validatesDate?: true
    valitadedBy?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    cidDetail?: true
    cidItem?: true
    ccodProdServItem?: true
    cdescriptItem?: true
    cindicadoPsItem?: true
    cvalorVentaUnitaria?: true
    cprecioVentaUnitarioItem?: true
    ccantidadItem?: true
    cValorItem?: true
    cigvTotalItem?: true
    ctotalItem?: true
    ccodSunatProdServItem?: true
    ccodComercialProdServ?: true
    cid?: true
    cfecEd?: true
    ctipDocEmisor?: true
    capaminoRazonSocialEmisor?: true
    cubigeoEmisor?: true
    cdireccionEmisor?: true
    cdepartamentoEmisor?: true
    cprovinciaEmisor?: true
    cdistritoEmisor?: true
    cnombreComercialEmisor?: true
    cTipDoc?: true
    cnroSerie?: true
    cnroDoc?: true
    cinfoDocAdquiriente?: true
    ctipDocAdquiriente?: true
    capaminoRazonSocialAdquiriente?: true
    cmoneda?: true
    ctotalOperacionesGrav?: true
    cmontoTotalIgv?: true
    cmontoTotalPagar?: true
    cmontoTotalPercep?: true
    cleyenda?: true
    cfecCreaFace?: true
    ccodigoBarras?: true
    ccodigpQr?: true
    isValidated?: true
    validatesDate?: true
    valitadedBy?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    cidDetail: string
    cidItem: string
    ccodProdServItem: string
    cdescriptItem: string
    cindicadoPsItem: string
    cvalorVentaUnitaria: string
    cprecioVentaUnitarioItem: string
    ccantidadItem: string
    cValorItem: string
    cigvTotalItem: string
    ctotalItem: string
    ccodSunatProdServItem: string
    ccodComercialProdServ: string
    cid: string
    cfecEd: string
    ctipDocEmisor: string
    capaminoRazonSocialEmisor: string
    cubigeoEmisor: string
    cdireccionEmisor: string
    cdepartamentoEmisor: string
    cprovinciaEmisor: string
    cdistritoEmisor: string
    cnombreComercialEmisor: string
    cTipDoc: string
    cnroSerie: string
    cnroDoc: string
    cinfoDocAdquiriente: string
    ctipDocAdquiriente: string
    capaminoRazonSocialAdquiriente: string
    cmoneda: string
    ctotalOperacionesGrav: string
    cmontoTotalIgv: string
    cmontoTotalPagar: string
    cmontoTotalPercep: string
    cleyenda: string
    cfecCreaFace: string
    ccodigoBarras: string
    ccodigpQr: string
    isValidated: boolean | null
    validatesDate: Date | null
    valitadedBy: string | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidDetail?: boolean
    cidItem?: boolean
    ccodProdServItem?: boolean
    cdescriptItem?: boolean
    cindicadoPsItem?: boolean
    cvalorVentaUnitaria?: boolean
    cprecioVentaUnitarioItem?: boolean
    ccantidadItem?: boolean
    cValorItem?: boolean
    cigvTotalItem?: boolean
    ctotalItem?: boolean
    ccodSunatProdServItem?: boolean
    ccodComercialProdServ?: boolean
    cid?: boolean
    cfecEd?: boolean
    ctipDocEmisor?: boolean
    capaminoRazonSocialEmisor?: boolean
    cubigeoEmisor?: boolean
    cdireccionEmisor?: boolean
    cdepartamentoEmisor?: boolean
    cprovinciaEmisor?: boolean
    cdistritoEmisor?: boolean
    cnombreComercialEmisor?: boolean
    cTipDoc?: boolean
    cnroSerie?: boolean
    cnroDoc?: boolean
    cinfoDocAdquiriente?: boolean
    ctipDocAdquiriente?: boolean
    capaminoRazonSocialAdquiriente?: boolean
    cmoneda?: boolean
    ctotalOperacionesGrav?: boolean
    cmontoTotalIgv?: boolean
    cmontoTotalPagar?: boolean
    cmontoTotalPercep?: boolean
    cleyenda?: boolean
    cfecCreaFace?: boolean
    ccodigoBarras?: boolean
    ccodigpQr?: boolean
    isValidated?: boolean
    validatesDate?: boolean
    valitadedBy?: boolean
    attention?: boolean | Ticket$attentionArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidDetail?: boolean
    cidItem?: boolean
    ccodProdServItem?: boolean
    cdescriptItem?: boolean
    cindicadoPsItem?: boolean
    cvalorVentaUnitaria?: boolean
    cprecioVentaUnitarioItem?: boolean
    ccantidadItem?: boolean
    cValorItem?: boolean
    cigvTotalItem?: boolean
    ctotalItem?: boolean
    ccodSunatProdServItem?: boolean
    ccodComercialProdServ?: boolean
    cid?: boolean
    cfecEd?: boolean
    ctipDocEmisor?: boolean
    capaminoRazonSocialEmisor?: boolean
    cubigeoEmisor?: boolean
    cdireccionEmisor?: boolean
    cdepartamentoEmisor?: boolean
    cprovinciaEmisor?: boolean
    cdistritoEmisor?: boolean
    cnombreComercialEmisor?: boolean
    cTipDoc?: boolean
    cnroSerie?: boolean
    cnroDoc?: boolean
    cinfoDocAdquiriente?: boolean
    ctipDocAdquiriente?: boolean
    capaminoRazonSocialAdquiriente?: boolean
    cmoneda?: boolean
    ctotalOperacionesGrav?: boolean
    cmontoTotalIgv?: boolean
    cmontoTotalPagar?: boolean
    cmontoTotalPercep?: boolean
    cleyenda?: boolean
    cfecCreaFace?: boolean
    ccodigoBarras?: boolean
    ccodigpQr?: boolean
    isValidated?: boolean
    validatesDate?: boolean
    valitadedBy?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    cidDetail?: boolean
    cidItem?: boolean
    ccodProdServItem?: boolean
    cdescriptItem?: boolean
    cindicadoPsItem?: boolean
    cvalorVentaUnitaria?: boolean
    cprecioVentaUnitarioItem?: boolean
    ccantidadItem?: boolean
    cValorItem?: boolean
    cigvTotalItem?: boolean
    ctotalItem?: boolean
    ccodSunatProdServItem?: boolean
    ccodComercialProdServ?: boolean
    cid?: boolean
    cfecEd?: boolean
    ctipDocEmisor?: boolean
    capaminoRazonSocialEmisor?: boolean
    cubigeoEmisor?: boolean
    cdireccionEmisor?: boolean
    cdepartamentoEmisor?: boolean
    cprovinciaEmisor?: boolean
    cdistritoEmisor?: boolean
    cnombreComercialEmisor?: boolean
    cTipDoc?: boolean
    cnroSerie?: boolean
    cnroDoc?: boolean
    cinfoDocAdquiriente?: boolean
    ctipDocAdquiriente?: boolean
    capaminoRazonSocialAdquiriente?: boolean
    cmoneda?: boolean
    ctotalOperacionesGrav?: boolean
    cmontoTotalIgv?: boolean
    cmontoTotalPagar?: boolean
    cmontoTotalPercep?: boolean
    cleyenda?: boolean
    cfecCreaFace?: boolean
    ccodigoBarras?: boolean
    ccodigpQr?: boolean
    isValidated?: boolean
    validatesDate?: boolean
    valitadedBy?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attention?: boolean | Ticket$attentionArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      attention: Prisma.$AttentionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cidDetail: string
      cidItem: string
      ccodProdServItem: string
      cdescriptItem: string
      cindicadoPsItem: string
      cvalorVentaUnitaria: string
      cprecioVentaUnitarioItem: string
      ccantidadItem: string
      cValorItem: string
      cigvTotalItem: string
      ctotalItem: string
      ccodSunatProdServItem: string
      ccodComercialProdServ: string
      cid: string
      cfecEd: string
      ctipDocEmisor: string
      capaminoRazonSocialEmisor: string
      cubigeoEmisor: string
      cdireccionEmisor: string
      cdepartamentoEmisor: string
      cprovinciaEmisor: string
      cdistritoEmisor: string
      cnombreComercialEmisor: string
      cTipDoc: string
      cnroSerie: string
      cnroDoc: string
      cinfoDocAdquiriente: string
      ctipDocAdquiriente: string
      capaminoRazonSocialAdquiriente: string
      cmoneda: string
      ctotalOperacionesGrav: string
      cmontoTotalIgv: string
      cmontoTotalPagar: string
      cmontoTotalPercep: string
      cleyenda: string
      cfecCreaFace: string
      ccodigoBarras: string
      ccodigpQr: string
      isValidated: boolean | null
      validatesDate: Date | null
      valitadedBy: string | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketCreateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attention<T extends Ticket$attentionArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$attentionArgs<ExtArgs>>): Prisma__AttentionClient<$Result.GetResult<Prisma.$AttentionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly cidDetail: FieldRef<"Ticket", 'String'>
    readonly cidItem: FieldRef<"Ticket", 'String'>
    readonly ccodProdServItem: FieldRef<"Ticket", 'String'>
    readonly cdescriptItem: FieldRef<"Ticket", 'String'>
    readonly cindicadoPsItem: FieldRef<"Ticket", 'String'>
    readonly cvalorVentaUnitaria: FieldRef<"Ticket", 'String'>
    readonly cprecioVentaUnitarioItem: FieldRef<"Ticket", 'String'>
    readonly ccantidadItem: FieldRef<"Ticket", 'String'>
    readonly cValorItem: FieldRef<"Ticket", 'String'>
    readonly cigvTotalItem: FieldRef<"Ticket", 'String'>
    readonly ctotalItem: FieldRef<"Ticket", 'String'>
    readonly ccodSunatProdServItem: FieldRef<"Ticket", 'String'>
    readonly ccodComercialProdServ: FieldRef<"Ticket", 'String'>
    readonly cid: FieldRef<"Ticket", 'String'>
    readonly cfecEd: FieldRef<"Ticket", 'String'>
    readonly ctipDocEmisor: FieldRef<"Ticket", 'String'>
    readonly capaminoRazonSocialEmisor: FieldRef<"Ticket", 'String'>
    readonly cubigeoEmisor: FieldRef<"Ticket", 'String'>
    readonly cdireccionEmisor: FieldRef<"Ticket", 'String'>
    readonly cdepartamentoEmisor: FieldRef<"Ticket", 'String'>
    readonly cprovinciaEmisor: FieldRef<"Ticket", 'String'>
    readonly cdistritoEmisor: FieldRef<"Ticket", 'String'>
    readonly cnombreComercialEmisor: FieldRef<"Ticket", 'String'>
    readonly cTipDoc: FieldRef<"Ticket", 'String'>
    readonly cnroSerie: FieldRef<"Ticket", 'String'>
    readonly cnroDoc: FieldRef<"Ticket", 'String'>
    readonly cinfoDocAdquiriente: FieldRef<"Ticket", 'String'>
    readonly ctipDocAdquiriente: FieldRef<"Ticket", 'String'>
    readonly capaminoRazonSocialAdquiriente: FieldRef<"Ticket", 'String'>
    readonly cmoneda: FieldRef<"Ticket", 'String'>
    readonly ctotalOperacionesGrav: FieldRef<"Ticket", 'String'>
    readonly cmontoTotalIgv: FieldRef<"Ticket", 'String'>
    readonly cmontoTotalPagar: FieldRef<"Ticket", 'String'>
    readonly cmontoTotalPercep: FieldRef<"Ticket", 'String'>
    readonly cleyenda: FieldRef<"Ticket", 'String'>
    readonly cfecCreaFace: FieldRef<"Ticket", 'String'>
    readonly ccodigoBarras: FieldRef<"Ticket", 'String'>
    readonly ccodigpQr: FieldRef<"Ticket", 'String'>
    readonly isValidated: FieldRef<"Ticket", 'Boolean'>
    readonly validatesDate: FieldRef<"Ticket", 'DateTime'>
    readonly valitadedBy: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.attention
   */
  export type Ticket$attentionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attention
     */
    select?: AttentionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionInclude<ExtArgs> | null
    where?: AttentionWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TestTicket
   */

  export type AggregateTestTicket = {
    _count: TestTicketCountAggregateOutputType | null
    _avg: TestTicketAvgAggregateOutputType | null
    _sum: TestTicketSumAggregateOutputType | null
    _min: TestTicketMinAggregateOutputType | null
    _max: TestTicketMaxAggregateOutputType | null
  }

  export type TestTicketAvgAggregateOutputType = {
    id: number | null
  }

  export type TestTicketSumAggregateOutputType = {
    id: number | null
  }

  export type TestTicketMinAggregateOutputType = {
    id: number | null
    jsonString: string | null
  }

  export type TestTicketMaxAggregateOutputType = {
    id: number | null
    jsonString: string | null
  }

  export type TestTicketCountAggregateOutputType = {
    id: number
    jsonString: number
    _all: number
  }


  export type TestTicketAvgAggregateInputType = {
    id?: true
  }

  export type TestTicketSumAggregateInputType = {
    id?: true
  }

  export type TestTicketMinAggregateInputType = {
    id?: true
    jsonString?: true
  }

  export type TestTicketMaxAggregateInputType = {
    id?: true
    jsonString?: true
  }

  export type TestTicketCountAggregateInputType = {
    id?: true
    jsonString?: true
    _all?: true
  }

  export type TestTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestTicket to aggregate.
     */
    where?: TestTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTickets to fetch.
     */
    orderBy?: TestTicketOrderByWithRelationInput | TestTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestTickets
    **/
    _count?: true | TestTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestTicketMaxAggregateInputType
  }

  export type GetTestTicketAggregateType<T extends TestTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTestTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestTicket[P]>
      : GetScalarType<T[P], AggregateTestTicket[P]>
  }




  export type TestTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestTicketWhereInput
    orderBy?: TestTicketOrderByWithAggregationInput | TestTicketOrderByWithAggregationInput[]
    by: TestTicketScalarFieldEnum[] | TestTicketScalarFieldEnum
    having?: TestTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestTicketCountAggregateInputType | true
    _avg?: TestTicketAvgAggregateInputType
    _sum?: TestTicketSumAggregateInputType
    _min?: TestTicketMinAggregateInputType
    _max?: TestTicketMaxAggregateInputType
  }

  export type TestTicketGroupByOutputType = {
    id: number
    jsonString: string
    _count: TestTicketCountAggregateOutputType | null
    _avg: TestTicketAvgAggregateOutputType | null
    _sum: TestTicketSumAggregateOutputType | null
    _min: TestTicketMinAggregateOutputType | null
    _max: TestTicketMaxAggregateOutputType | null
  }

  type GetTestTicketGroupByPayload<T extends TestTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestTicketGroupByOutputType[P]>
            : GetScalarType<T[P], TestTicketGroupByOutputType[P]>
        }
      >
    >


  export type TestTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jsonString?: boolean
  }, ExtArgs["result"]["testTicket"]>

  export type TestTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jsonString?: boolean
  }, ExtArgs["result"]["testTicket"]>

  export type TestTicketSelectScalar = {
    id?: boolean
    jsonString?: boolean
  }


  export type $TestTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jsonString: string
    }, ExtArgs["result"]["testTicket"]>
    composites: {}
  }

  type TestTicketGetPayload<S extends boolean | null | undefined | TestTicketDefaultArgs> = $Result.GetResult<Prisma.$TestTicketPayload, S>

  type TestTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestTicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestTicketCountAggregateInputType | true
    }

  export interface TestTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestTicket'], meta: { name: 'TestTicket' } }
    /**
     * Find zero or one TestTicket that matches the filter.
     * @param {TestTicketFindUniqueArgs} args - Arguments to find a TestTicket
     * @example
     * // Get one TestTicket
     * const testTicket = await prisma.testTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestTicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TestTicketFindUniqueArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TestTicket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestTicketFindUniqueOrThrowArgs} args - Arguments to find a TestTicket
     * @example
     * // Get one TestTicket
     * const testTicket = await prisma.testTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestTicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TestTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketFindFirstArgs} args - Arguments to find a TestTicket
     * @example
     * // Get one TestTicket
     * const testTicket = await prisma.testTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestTicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketFindFirstArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TestTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketFindFirstOrThrowArgs} args - Arguments to find a TestTicket
     * @example
     * // Get one TestTicket
     * const testTicket = await prisma.testTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestTicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TestTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestTickets
     * const testTickets = await prisma.testTicket.findMany()
     * 
     * // Get first 10 TestTickets
     * const testTickets = await prisma.testTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testTicketWithIdOnly = await prisma.testTicket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestTicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TestTicket.
     * @param {TestTicketCreateArgs} args - Arguments to create a TestTicket.
     * @example
     * // Create one TestTicket
     * const TestTicket = await prisma.testTicket.create({
     *   data: {
     *     // ... data to create a TestTicket
     *   }
     * })
     * 
    **/
    create<T extends TestTicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TestTicketCreateArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TestTickets.
     * @param {TestTicketCreateManyArgs} args - Arguments to create many TestTickets.
     * @example
     * // Create many TestTickets
     * const testTicket = await prisma.testTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TestTicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestTickets and returns the data saved in the database.
     * @param {TestTicketCreateManyAndReturnArgs} args - Arguments to create many TestTickets.
     * @example
     * // Create many TestTickets
     * const testTicket = await prisma.testTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestTickets and only return the `id`
     * const testTicketWithIdOnly = await prisma.testTicket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TestTicketCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TestTicket.
     * @param {TestTicketDeleteArgs} args - Arguments to delete one TestTicket.
     * @example
     * // Delete one TestTicket
     * const TestTicket = await prisma.testTicket.delete({
     *   where: {
     *     // ... filter to delete one TestTicket
     *   }
     * })
     * 
    **/
    delete<T extends TestTicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TestTicketDeleteArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TestTicket.
     * @param {TestTicketUpdateArgs} args - Arguments to update one TestTicket.
     * @example
     * // Update one TestTicket
     * const testTicket = await prisma.testTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestTicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TestTicketUpdateArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TestTickets.
     * @param {TestTicketDeleteManyArgs} args - Arguments to filter TestTickets to delete.
     * @example
     * // Delete a few TestTickets
     * const { count } = await prisma.testTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestTicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestTicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestTickets
     * const testTicket = await prisma.testTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestTicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TestTicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestTicket.
     * @param {TestTicketUpsertArgs} args - Arguments to update or create a TestTicket.
     * @example
     * // Update or create a TestTicket
     * const testTicket = await prisma.testTicket.upsert({
     *   create: {
     *     // ... data to create a TestTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestTicket we want to update
     *   }
     * })
    **/
    upsert<T extends TestTicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TestTicketUpsertArgs<ExtArgs>>
    ): Prisma__TestTicketClient<$Result.GetResult<Prisma.$TestTicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TestTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketCountArgs} args - Arguments to filter TestTickets to count.
     * @example
     * // Count the number of TestTickets
     * const count = await prisma.testTicket.count({
     *   where: {
     *     // ... the filter for the TestTickets we want to count
     *   }
     * })
    **/
    count<T extends TestTicketCountArgs>(
      args?: Subset<T, TestTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestTicketAggregateArgs>(args: Subset<T, TestTicketAggregateArgs>): Prisma.PrismaPromise<GetTestTicketAggregateType<T>>

    /**
     * Group by TestTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestTicketGroupByArgs} args - Group by arguments.
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
      T extends TestTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestTicketGroupByArgs['orderBy'] }
        : { orderBy?: TestTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestTicket model
   */
  readonly fields: TestTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TestTicket model
   */ 
  interface TestTicketFieldRefs {
    readonly id: FieldRef<"TestTicket", 'Int'>
    readonly jsonString: FieldRef<"TestTicket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestTicket findUnique
   */
  export type TestTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * Filter, which TestTicket to fetch.
     */
    where: TestTicketWhereUniqueInput
  }

  /**
   * TestTicket findUniqueOrThrow
   */
  export type TestTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * Filter, which TestTicket to fetch.
     */
    where: TestTicketWhereUniqueInput
  }

  /**
   * TestTicket findFirst
   */
  export type TestTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * Filter, which TestTicket to fetch.
     */
    where?: TestTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTickets to fetch.
     */
    orderBy?: TestTicketOrderByWithRelationInput | TestTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestTickets.
     */
    cursor?: TestTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestTickets.
     */
    distinct?: TestTicketScalarFieldEnum | TestTicketScalarFieldEnum[]
  }

  /**
   * TestTicket findFirstOrThrow
   */
  export type TestTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * Filter, which TestTicket to fetch.
     */
    where?: TestTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTickets to fetch.
     */
    orderBy?: TestTicketOrderByWithRelationInput | TestTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestTickets.
     */
    cursor?: TestTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestTickets.
     */
    distinct?: TestTicketScalarFieldEnum | TestTicketScalarFieldEnum[]
  }

  /**
   * TestTicket findMany
   */
  export type TestTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * Filter, which TestTickets to fetch.
     */
    where?: TestTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestTickets to fetch.
     */
    orderBy?: TestTicketOrderByWithRelationInput | TestTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestTickets.
     */
    cursor?: TestTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestTickets.
     */
    skip?: number
    distinct?: TestTicketScalarFieldEnum | TestTicketScalarFieldEnum[]
  }

  /**
   * TestTicket create
   */
  export type TestTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * The data needed to create a TestTicket.
     */
    data: XOR<TestTicketCreateInput, TestTicketUncheckedCreateInput>
  }

  /**
   * TestTicket createMany
   */
  export type TestTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestTickets.
     */
    data: TestTicketCreateManyInput | TestTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestTicket createManyAndReturn
   */
  export type TestTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestTickets.
     */
    data: TestTicketCreateManyInput | TestTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestTicket update
   */
  export type TestTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * The data needed to update a TestTicket.
     */
    data: XOR<TestTicketUpdateInput, TestTicketUncheckedUpdateInput>
    /**
     * Choose, which TestTicket to update.
     */
    where: TestTicketWhereUniqueInput
  }

  /**
   * TestTicket updateMany
   */
  export type TestTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestTickets.
     */
    data: XOR<TestTicketUpdateManyMutationInput, TestTicketUncheckedUpdateManyInput>
    /**
     * Filter which TestTickets to update
     */
    where?: TestTicketWhereInput
  }

  /**
   * TestTicket upsert
   */
  export type TestTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * The filter to search for the TestTicket to update in case it exists.
     */
    where: TestTicketWhereUniqueInput
    /**
     * In case the TestTicket found by the `where` argument doesn't exist, create a new TestTicket with this data.
     */
    create: XOR<TestTicketCreateInput, TestTicketUncheckedCreateInput>
    /**
     * In case the TestTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestTicketUpdateInput, TestTicketUncheckedUpdateInput>
  }

  /**
   * TestTicket delete
   */
  export type TestTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
    /**
     * Filter which TestTicket to delete.
     */
    where: TestTicketWhereUniqueInput
  }

  /**
   * TestTicket deleteMany
   */
  export type TestTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestTickets to delete
     */
    where?: TestTicketWhereInput
  }

  /**
   * TestTicket without action
   */
  export type TestTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestTicket
     */
    select?: TestTicketSelect<ExtArgs> | null
  }


  /**
   * Model TicketInfo
   */

  export type AggregateTicketInfo = {
    _count: TicketInfoCountAggregateOutputType | null
    _avg: TicketInfoAvgAggregateOutputType | null
    _sum: TicketInfoSumAggregateOutputType | null
    _min: TicketInfoMinAggregateOutputType | null
    _max: TicketInfoMaxAggregateOutputType | null
  }

  export type TicketInfoAvgAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_MONTO_TOTAL_IGV: number | null
    C_MONTO_PAGAR: number | null
    C_MONTO_TOTAL_PERCEP: number | null
    C_TOTAL_OPERACIONES_GRAV: number | null
  }

  export type TicketInfoSumAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_MONTO_TOTAL_IGV: number | null
    C_MONTO_PAGAR: number | null
    C_MONTO_TOTAL_PERCEP: number | null
    C_TOTAL_OPERACIONES_GRAV: number | null
  }

  export type TicketInfoMinAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_FEC_ED: Date | null
    C_TIP_DOC_EMISOR: string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR: string | null
    C_UBIGEO_EMISOR: string | null
    C_DIRECCION_EMISOR: string | null
    C_DEPARTAMENTO_EMISOR: string | null
    C_PROVINCIA_EMISOR: string | null
    C_DISTRITO_EMISOR: string | null
    C_NOMBRE_COMERCIAL_EMISOR: string | null
    C_TIP_DOC: string | null
    C_NRO_SERIE: string | null
    C_NRO_DOC: string | null
    C_NRO_DOC_ADQUIRIENTE: string | null
    C_MONEDA: string | null
    C_MONTO_TOTAL_IGV: number | null
    C_MONTO_PAGAR: number | null
    C_MONTO_TOTAL_PERCEP: number | null
    C_LEYENDA: string | null
    C_FEC_CREA_FACE: Date | null
    C_RUCE: string | null
    C_TIP_DOC_ADQUIRIENTE: string | null
    C_TOTAL_OPERACIONES_GRAV: number | null
    isValidated: boolean | null
    valitadedBy: string | null
    validatedDate: Date | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string | null
  }

  export type TicketInfoMaxAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_FEC_ED: Date | null
    C_TIP_DOC_EMISOR: string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR: string | null
    C_UBIGEO_EMISOR: string | null
    C_DIRECCION_EMISOR: string | null
    C_DEPARTAMENTO_EMISOR: string | null
    C_PROVINCIA_EMISOR: string | null
    C_DISTRITO_EMISOR: string | null
    C_NOMBRE_COMERCIAL_EMISOR: string | null
    C_TIP_DOC: string | null
    C_NRO_SERIE: string | null
    C_NRO_DOC: string | null
    C_NRO_DOC_ADQUIRIENTE: string | null
    C_MONEDA: string | null
    C_MONTO_TOTAL_IGV: number | null
    C_MONTO_PAGAR: number | null
    C_MONTO_TOTAL_PERCEP: number | null
    C_LEYENDA: string | null
    C_FEC_CREA_FACE: Date | null
    C_RUCE: string | null
    C_TIP_DOC_ADQUIRIENTE: string | null
    C_TOTAL_OPERACIONES_GRAV: number | null
    isValidated: boolean | null
    valitadedBy: string | null
    validatedDate: Date | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string | null
  }

  export type TicketInfoCountAggregateOutputType = {
    id: number
    C_ID: number
    C_FEC_ED: number
    C_TIP_DOC_EMISOR: number
    C_APAMNO_RAZON_SOCIAL_EMISOR: number
    C_UBIGEO_EMISOR: number
    C_DIRECCION_EMISOR: number
    C_DEPARTAMENTO_EMISOR: number
    C_PROVINCIA_EMISOR: number
    C_DISTRITO_EMISOR: number
    C_NOMBRE_COMERCIAL_EMISOR: number
    C_TIP_DOC: number
    C_NRO_SERIE: number
    C_NRO_DOC: number
    C_NRO_DOC_ADQUIRIENTE: number
    C_MONEDA: number
    C_MONTO_TOTAL_IGV: number
    C_MONTO_PAGAR: number
    C_MONTO_TOTAL_PERCEP: number
    C_LEYENDA: number
    C_FEC_CREA_FACE: number
    C_RUCE: number
    C_TIP_DOC_ADQUIRIENTE: number
    C_TOTAL_OPERACIONES_GRAV: number
    isValidated: number
    valitadedBy: number
    validatedDate: number
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: number
    services: number
    _all: number
  }


  export type TicketInfoAvgAggregateInputType = {
    id?: true
    C_ID?: true
    C_MONTO_TOTAL_IGV?: true
    C_MONTO_PAGAR?: true
    C_MONTO_TOTAL_PERCEP?: true
    C_TOTAL_OPERACIONES_GRAV?: true
  }

  export type TicketInfoSumAggregateInputType = {
    id?: true
    C_ID?: true
    C_MONTO_TOTAL_IGV?: true
    C_MONTO_PAGAR?: true
    C_MONTO_TOTAL_PERCEP?: true
    C_TOTAL_OPERACIONES_GRAV?: true
  }

  export type TicketInfoMinAggregateInputType = {
    id?: true
    C_ID?: true
    C_FEC_ED?: true
    C_TIP_DOC_EMISOR?: true
    C_APAMNO_RAZON_SOCIAL_EMISOR?: true
    C_UBIGEO_EMISOR?: true
    C_DIRECCION_EMISOR?: true
    C_DEPARTAMENTO_EMISOR?: true
    C_PROVINCIA_EMISOR?: true
    C_DISTRITO_EMISOR?: true
    C_NOMBRE_COMERCIAL_EMISOR?: true
    C_TIP_DOC?: true
    C_NRO_SERIE?: true
    C_NRO_DOC?: true
    C_NRO_DOC_ADQUIRIENTE?: true
    C_MONEDA?: true
    C_MONTO_TOTAL_IGV?: true
    C_MONTO_PAGAR?: true
    C_MONTO_TOTAL_PERCEP?: true
    C_LEYENDA?: true
    C_FEC_CREA_FACE?: true
    C_RUCE?: true
    C_TIP_DOC_ADQUIRIENTE?: true
    C_TOTAL_OPERACIONES_GRAV?: true
    isValidated?: true
    valitadedBy?: true
    validatedDate?: true
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: true
  }

  export type TicketInfoMaxAggregateInputType = {
    id?: true
    C_ID?: true
    C_FEC_ED?: true
    C_TIP_DOC_EMISOR?: true
    C_APAMNO_RAZON_SOCIAL_EMISOR?: true
    C_UBIGEO_EMISOR?: true
    C_DIRECCION_EMISOR?: true
    C_DEPARTAMENTO_EMISOR?: true
    C_PROVINCIA_EMISOR?: true
    C_DISTRITO_EMISOR?: true
    C_NOMBRE_COMERCIAL_EMISOR?: true
    C_TIP_DOC?: true
    C_NRO_SERIE?: true
    C_NRO_DOC?: true
    C_NRO_DOC_ADQUIRIENTE?: true
    C_MONEDA?: true
    C_MONTO_TOTAL_IGV?: true
    C_MONTO_PAGAR?: true
    C_MONTO_TOTAL_PERCEP?: true
    C_LEYENDA?: true
    C_FEC_CREA_FACE?: true
    C_RUCE?: true
    C_TIP_DOC_ADQUIRIENTE?: true
    C_TOTAL_OPERACIONES_GRAV?: true
    isValidated?: true
    valitadedBy?: true
    validatedDate?: true
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: true
  }

  export type TicketInfoCountAggregateInputType = {
    id?: true
    C_ID?: true
    C_FEC_ED?: true
    C_TIP_DOC_EMISOR?: true
    C_APAMNO_RAZON_SOCIAL_EMISOR?: true
    C_UBIGEO_EMISOR?: true
    C_DIRECCION_EMISOR?: true
    C_DEPARTAMENTO_EMISOR?: true
    C_PROVINCIA_EMISOR?: true
    C_DISTRITO_EMISOR?: true
    C_NOMBRE_COMERCIAL_EMISOR?: true
    C_TIP_DOC?: true
    C_NRO_SERIE?: true
    C_NRO_DOC?: true
    C_NRO_DOC_ADQUIRIENTE?: true
    C_MONEDA?: true
    C_MONTO_TOTAL_IGV?: true
    C_MONTO_PAGAR?: true
    C_MONTO_TOTAL_PERCEP?: true
    C_LEYENDA?: true
    C_FEC_CREA_FACE?: true
    C_RUCE?: true
    C_TIP_DOC_ADQUIRIENTE?: true
    C_TOTAL_OPERACIONES_GRAV?: true
    isValidated?: true
    valitadedBy?: true
    validatedDate?: true
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: true
    services?: true
    _all?: true
  }

  export type TicketInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketInfo to aggregate.
     */
    where?: TicketInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfos to fetch.
     */
    orderBy?: TicketInfoOrderByWithRelationInput | TicketInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketInfos
    **/
    _count?: true | TicketInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketInfoMaxAggregateInputType
  }

  export type GetTicketInfoAggregateType<T extends TicketInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketInfo[P]>
      : GetScalarType<T[P], AggregateTicketInfo[P]>
  }




  export type TicketInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketInfoWhereInput
    orderBy?: TicketInfoOrderByWithAggregationInput | TicketInfoOrderByWithAggregationInput[]
    by: TicketInfoScalarFieldEnum[] | TicketInfoScalarFieldEnum
    having?: TicketInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketInfoCountAggregateInputType | true
    _avg?: TicketInfoAvgAggregateInputType
    _sum?: TicketInfoSumAggregateInputType
    _min?: TicketInfoMinAggregateInputType
    _max?: TicketInfoMaxAggregateInputType
  }

  export type TicketInfoGroupByOutputType = {
    id: number
    C_ID: number
    C_FEC_ED: Date
    C_TIP_DOC_EMISOR: string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR: string
    C_UBIGEO_EMISOR: string | null
    C_DIRECCION_EMISOR: string | null
    C_DEPARTAMENTO_EMISOR: string | null
    C_PROVINCIA_EMISOR: string | null
    C_DISTRITO_EMISOR: string | null
    C_NOMBRE_COMERCIAL_EMISOR: string | null
    C_TIP_DOC: string | null
    C_NRO_SERIE: string
    C_NRO_DOC: string
    C_NRO_DOC_ADQUIRIENTE: string | null
    C_MONEDA: string
    C_MONTO_TOTAL_IGV: number
    C_MONTO_PAGAR: number
    C_MONTO_TOTAL_PERCEP: number | null
    C_LEYENDA: string | null
    C_FEC_CREA_FACE: Date
    C_RUCE: string
    C_TIP_DOC_ADQUIRIENTE: string | null
    C_TOTAL_OPERACIONES_GRAV: number | null
    isValidated: boolean | null
    valitadedBy: string | null
    validatedDate: Date | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string | null
    services: string[]
    _count: TicketInfoCountAggregateOutputType | null
    _avg: TicketInfoAvgAggregateOutputType | null
    _sum: TicketInfoSumAggregateOutputType | null
    _min: TicketInfoMinAggregateOutputType | null
    _max: TicketInfoMaxAggregateOutputType | null
  }

  type GetTicketInfoGroupByPayload<T extends TicketInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TicketInfoGroupByOutputType[P]>
        }
      >
    >


  export type TicketInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_ID?: boolean
    C_FEC_ED?: boolean
    C_TIP_DOC_EMISOR?: boolean
    C_APAMNO_RAZON_SOCIAL_EMISOR?: boolean
    C_UBIGEO_EMISOR?: boolean
    C_DIRECCION_EMISOR?: boolean
    C_DEPARTAMENTO_EMISOR?: boolean
    C_PROVINCIA_EMISOR?: boolean
    C_DISTRITO_EMISOR?: boolean
    C_NOMBRE_COMERCIAL_EMISOR?: boolean
    C_TIP_DOC?: boolean
    C_NRO_SERIE?: boolean
    C_NRO_DOC?: boolean
    C_NRO_DOC_ADQUIRIENTE?: boolean
    C_MONEDA?: boolean
    C_MONTO_TOTAL_IGV?: boolean
    C_MONTO_PAGAR?: boolean
    C_MONTO_TOTAL_PERCEP?: boolean
    C_LEYENDA?: boolean
    C_FEC_CREA_FACE?: boolean
    C_RUCE?: boolean
    C_TIP_DOC_ADQUIRIENTE?: boolean
    C_TOTAL_OPERACIONES_GRAV?: boolean
    isValidated?: boolean
    valitadedBy?: boolean
    validatedDate?: boolean
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: boolean
    services?: boolean
  }, ExtArgs["result"]["ticketInfo"]>

  export type TicketInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_ID?: boolean
    C_FEC_ED?: boolean
    C_TIP_DOC_EMISOR?: boolean
    C_APAMNO_RAZON_SOCIAL_EMISOR?: boolean
    C_UBIGEO_EMISOR?: boolean
    C_DIRECCION_EMISOR?: boolean
    C_DEPARTAMENTO_EMISOR?: boolean
    C_PROVINCIA_EMISOR?: boolean
    C_DISTRITO_EMISOR?: boolean
    C_NOMBRE_COMERCIAL_EMISOR?: boolean
    C_TIP_DOC?: boolean
    C_NRO_SERIE?: boolean
    C_NRO_DOC?: boolean
    C_NRO_DOC_ADQUIRIENTE?: boolean
    C_MONEDA?: boolean
    C_MONTO_TOTAL_IGV?: boolean
    C_MONTO_PAGAR?: boolean
    C_MONTO_TOTAL_PERCEP?: boolean
    C_LEYENDA?: boolean
    C_FEC_CREA_FACE?: boolean
    C_RUCE?: boolean
    C_TIP_DOC_ADQUIRIENTE?: boolean
    C_TOTAL_OPERACIONES_GRAV?: boolean
    isValidated?: boolean
    valitadedBy?: boolean
    validatedDate?: boolean
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: boolean
    services?: boolean
  }, ExtArgs["result"]["ticketInfo"]>

  export type TicketInfoSelectScalar = {
    id?: boolean
    C_ID?: boolean
    C_FEC_ED?: boolean
    C_TIP_DOC_EMISOR?: boolean
    C_APAMNO_RAZON_SOCIAL_EMISOR?: boolean
    C_UBIGEO_EMISOR?: boolean
    C_DIRECCION_EMISOR?: boolean
    C_DEPARTAMENTO_EMISOR?: boolean
    C_PROVINCIA_EMISOR?: boolean
    C_DISTRITO_EMISOR?: boolean
    C_NOMBRE_COMERCIAL_EMISOR?: boolean
    C_TIP_DOC?: boolean
    C_NRO_SERIE?: boolean
    C_NRO_DOC?: boolean
    C_NRO_DOC_ADQUIRIENTE?: boolean
    C_MONEDA?: boolean
    C_MONTO_TOTAL_IGV?: boolean
    C_MONTO_PAGAR?: boolean
    C_MONTO_TOTAL_PERCEP?: boolean
    C_LEYENDA?: boolean
    C_FEC_CREA_FACE?: boolean
    C_RUCE?: boolean
    C_TIP_DOC_ADQUIRIENTE?: boolean
    C_TOTAL_OPERACIONES_GRAV?: boolean
    isValidated?: boolean
    valitadedBy?: boolean
    validatedDate?: boolean
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: boolean
    services?: boolean
  }


  export type $TicketInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      C_ID: number
      C_FEC_ED: Date
      C_TIP_DOC_EMISOR: string | null
      C_APAMNO_RAZON_SOCIAL_EMISOR: string
      C_UBIGEO_EMISOR: string | null
      C_DIRECCION_EMISOR: string | null
      C_DEPARTAMENTO_EMISOR: string | null
      C_PROVINCIA_EMISOR: string | null
      C_DISTRITO_EMISOR: string | null
      C_NOMBRE_COMERCIAL_EMISOR: string | null
      C_TIP_DOC: string | null
      C_NRO_SERIE: string
      C_NRO_DOC: string
      C_NRO_DOC_ADQUIRIENTE: string | null
      C_MONEDA: string
      C_MONTO_TOTAL_IGV: number
      C_MONTO_PAGAR: number
      C_MONTO_TOTAL_PERCEP: number | null
      C_LEYENDA: string | null
      C_FEC_CREA_FACE: Date
      C_RUCE: string
      C_TIP_DOC_ADQUIRIENTE: string | null
      C_TOTAL_OPERACIONES_GRAV: number | null
      isValidated: boolean | null
      valitadedBy: string | null
      validatedDate: Date | null
      C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string | null
      services: string[]
    }, ExtArgs["result"]["ticketInfo"]>
    composites: {}
  }

  type TicketInfoGetPayload<S extends boolean | null | undefined | TicketInfoDefaultArgs> = $Result.GetResult<Prisma.$TicketInfoPayload, S>

  type TicketInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketInfoCountAggregateInputType | true
    }

  export interface TicketInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketInfo'], meta: { name: 'TicketInfo' } }
    /**
     * Find zero or one TicketInfo that matches the filter.
     * @param {TicketInfoFindUniqueArgs} args - Arguments to find a TicketInfo
     * @example
     * // Get one TicketInfo
     * const ticketInfo = await prisma.ticketInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketInfoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TicketInfo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketInfoFindUniqueOrThrowArgs} args - Arguments to find a TicketInfo
     * @example
     * // Get one TicketInfo
     * const ticketInfo = await prisma.ticketInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketInfoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TicketInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoFindFirstArgs} args - Arguments to find a TicketInfo
     * @example
     * // Get one TicketInfo
     * const ticketInfo = await prisma.ticketInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketInfoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoFindFirstArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TicketInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoFindFirstOrThrowArgs} args - Arguments to find a TicketInfo
     * @example
     * // Get one TicketInfo
     * const ticketInfo = await prisma.ticketInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketInfoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TicketInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketInfos
     * const ticketInfos = await prisma.ticketInfo.findMany()
     * 
     * // Get first 10 TicketInfos
     * const ticketInfos = await prisma.ticketInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketInfoWithIdOnly = await prisma.ticketInfo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketInfoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TicketInfo.
     * @param {TicketInfoCreateArgs} args - Arguments to create a TicketInfo.
     * @example
     * // Create one TicketInfo
     * const TicketInfo = await prisma.ticketInfo.create({
     *   data: {
     *     // ... data to create a TicketInfo
     *   }
     * })
     * 
    **/
    create<T extends TicketInfoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoCreateArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TicketInfos.
     * @param {TicketInfoCreateManyArgs} args - Arguments to create many TicketInfos.
     * @example
     * // Create many TicketInfos
     * const ticketInfo = await prisma.ticketInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TicketInfoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketInfos and returns the data saved in the database.
     * @param {TicketInfoCreateManyAndReturnArgs} args - Arguments to create many TicketInfos.
     * @example
     * // Create many TicketInfos
     * const ticketInfo = await prisma.ticketInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketInfos and only return the `id`
     * const ticketInfoWithIdOnly = await prisma.ticketInfo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TicketInfoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TicketInfo.
     * @param {TicketInfoDeleteArgs} args - Arguments to delete one TicketInfo.
     * @example
     * // Delete one TicketInfo
     * const TicketInfo = await prisma.ticketInfo.delete({
     *   where: {
     *     // ... filter to delete one TicketInfo
     *   }
     * })
     * 
    **/
    delete<T extends TicketInfoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDeleteArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TicketInfo.
     * @param {TicketInfoUpdateArgs} args - Arguments to update one TicketInfo.
     * @example
     * // Update one TicketInfo
     * const ticketInfo = await prisma.ticketInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketInfoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoUpdateArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TicketInfos.
     * @param {TicketInfoDeleteManyArgs} args - Arguments to filter TicketInfos to delete.
     * @example
     * // Delete a few TicketInfos
     * const { count } = await prisma.ticketInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketInfoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketInfos
     * const ticketInfo = await prisma.ticketInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketInfoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketInfo.
     * @param {TicketInfoUpsertArgs} args - Arguments to update or create a TicketInfo.
     * @example
     * // Update or create a TicketInfo
     * const ticketInfo = await prisma.ticketInfo.upsert({
     *   create: {
     *     // ... data to create a TicketInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketInfo we want to update
     *   }
     * })
    **/
    upsert<T extends TicketInfoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoUpsertArgs<ExtArgs>>
    ): Prisma__TicketInfoClient<$Result.GetResult<Prisma.$TicketInfoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TicketInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoCountArgs} args - Arguments to filter TicketInfos to count.
     * @example
     * // Count the number of TicketInfos
     * const count = await prisma.ticketInfo.count({
     *   where: {
     *     // ... the filter for the TicketInfos we want to count
     *   }
     * })
    **/
    count<T extends TicketInfoCountArgs>(
      args?: Subset<T, TicketInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketInfoAggregateArgs>(args: Subset<T, TicketInfoAggregateArgs>): Prisma.PrismaPromise<GetTicketInfoAggregateType<T>>

    /**
     * Group by TicketInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoGroupByArgs} args - Group by arguments.
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
      T extends TicketInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketInfoGroupByArgs['orderBy'] }
        : { orderBy?: TicketInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketInfo model
   */
  readonly fields: TicketInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TicketInfo model
   */ 
  interface TicketInfoFieldRefs {
    readonly id: FieldRef<"TicketInfo", 'Int'>
    readonly C_ID: FieldRef<"TicketInfo", 'Int'>
    readonly C_FEC_ED: FieldRef<"TicketInfo", 'DateTime'>
    readonly C_TIP_DOC_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_APAMNO_RAZON_SOCIAL_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_UBIGEO_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_DIRECCION_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_DEPARTAMENTO_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_PROVINCIA_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_DISTRITO_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_NOMBRE_COMERCIAL_EMISOR: FieldRef<"TicketInfo", 'String'>
    readonly C_TIP_DOC: FieldRef<"TicketInfo", 'String'>
    readonly C_NRO_SERIE: FieldRef<"TicketInfo", 'String'>
    readonly C_NRO_DOC: FieldRef<"TicketInfo", 'String'>
    readonly C_NRO_DOC_ADQUIRIENTE: FieldRef<"TicketInfo", 'String'>
    readonly C_MONEDA: FieldRef<"TicketInfo", 'String'>
    readonly C_MONTO_TOTAL_IGV: FieldRef<"TicketInfo", 'Int'>
    readonly C_MONTO_PAGAR: FieldRef<"TicketInfo", 'Int'>
    readonly C_MONTO_TOTAL_PERCEP: FieldRef<"TicketInfo", 'Int'>
    readonly C_LEYENDA: FieldRef<"TicketInfo", 'String'>
    readonly C_FEC_CREA_FACE: FieldRef<"TicketInfo", 'DateTime'>
    readonly C_RUCE: FieldRef<"TicketInfo", 'String'>
    readonly C_TIP_DOC_ADQUIRIENTE: FieldRef<"TicketInfo", 'String'>
    readonly C_TOTAL_OPERACIONES_GRAV: FieldRef<"TicketInfo", 'Int'>
    readonly isValidated: FieldRef<"TicketInfo", 'Boolean'>
    readonly valitadedBy: FieldRef<"TicketInfo", 'String'>
    readonly validatedDate: FieldRef<"TicketInfo", 'DateTime'>
    readonly C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: FieldRef<"TicketInfo", 'String'>
    readonly services: FieldRef<"TicketInfo", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TicketInfo findUnique
   */
  export type TicketInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfo to fetch.
     */
    where: TicketInfoWhereUniqueInput
  }

  /**
   * TicketInfo findUniqueOrThrow
   */
  export type TicketInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfo to fetch.
     */
    where: TicketInfoWhereUniqueInput
  }

  /**
   * TicketInfo findFirst
   */
  export type TicketInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfo to fetch.
     */
    where?: TicketInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfos to fetch.
     */
    orderBy?: TicketInfoOrderByWithRelationInput | TicketInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketInfos.
     */
    cursor?: TicketInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketInfos.
     */
    distinct?: TicketInfoScalarFieldEnum | TicketInfoScalarFieldEnum[]
  }

  /**
   * TicketInfo findFirstOrThrow
   */
  export type TicketInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfo to fetch.
     */
    where?: TicketInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfos to fetch.
     */
    orderBy?: TicketInfoOrderByWithRelationInput | TicketInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketInfos.
     */
    cursor?: TicketInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketInfos.
     */
    distinct?: TicketInfoScalarFieldEnum | TicketInfoScalarFieldEnum[]
  }

  /**
   * TicketInfo findMany
   */
  export type TicketInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfos to fetch.
     */
    where?: TicketInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfos to fetch.
     */
    orderBy?: TicketInfoOrderByWithRelationInput | TicketInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketInfos.
     */
    cursor?: TicketInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfos.
     */
    skip?: number
    distinct?: TicketInfoScalarFieldEnum | TicketInfoScalarFieldEnum[]
  }

  /**
   * TicketInfo create
   */
  export type TicketInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * The data needed to create a TicketInfo.
     */
    data: XOR<TicketInfoCreateInput, TicketInfoUncheckedCreateInput>
  }

  /**
   * TicketInfo createMany
   */
  export type TicketInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketInfos.
     */
    data: TicketInfoCreateManyInput | TicketInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketInfo createManyAndReturn
   */
  export type TicketInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketInfos.
     */
    data: TicketInfoCreateManyInput | TicketInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketInfo update
   */
  export type TicketInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * The data needed to update a TicketInfo.
     */
    data: XOR<TicketInfoUpdateInput, TicketInfoUncheckedUpdateInput>
    /**
     * Choose, which TicketInfo to update.
     */
    where: TicketInfoWhereUniqueInput
  }

  /**
   * TicketInfo updateMany
   */
  export type TicketInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketInfos.
     */
    data: XOR<TicketInfoUpdateManyMutationInput, TicketInfoUncheckedUpdateManyInput>
    /**
     * Filter which TicketInfos to update
     */
    where?: TicketInfoWhereInput
  }

  /**
   * TicketInfo upsert
   */
  export type TicketInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * The filter to search for the TicketInfo to update in case it exists.
     */
    where: TicketInfoWhereUniqueInput
    /**
     * In case the TicketInfo found by the `where` argument doesn't exist, create a new TicketInfo with this data.
     */
    create: XOR<TicketInfoCreateInput, TicketInfoUncheckedCreateInput>
    /**
     * In case the TicketInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketInfoUpdateInput, TicketInfoUncheckedUpdateInput>
  }

  /**
   * TicketInfo delete
   */
  export type TicketInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
    /**
     * Filter which TicketInfo to delete.
     */
    where: TicketInfoWhereUniqueInput
  }

  /**
   * TicketInfo deleteMany
   */
  export type TicketInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketInfos to delete
     */
    where?: TicketInfoWhereInput
  }

  /**
   * TicketInfo without action
   */
  export type TicketInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfo
     */
    select?: TicketInfoSelect<ExtArgs> | null
  }


  /**
   * Model TicketInfoDetail
   */

  export type AggregateTicketInfoDetail = {
    _count: TicketInfoDetailCountAggregateOutputType | null
    _avg: TicketInfoDetailAvgAggregateOutputType | null
    _sum: TicketInfoDetailSumAggregateOutputType | null
    _min: TicketInfoDetailMinAggregateOutputType | null
    _max: TicketInfoDetailMaxAggregateOutputType | null
  }

  export type TicketInfoDetailAvgAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_VALOR_VENTA_UNITARIA: number | null
    C_CANTIDAD_ITEM: number | null
    C_IGV_TOTAL_ITEM: number | null
    C_ID_ITEM: number | null
    C_PRECIO_VENTA_UNITARIO_ITEM: number | null
    C_TOTAL_ITEM: number | null
    C_VALOR_ITEM: number | null
  }

  export type TicketInfoDetailSumAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_VALOR_VENTA_UNITARIA: number | null
    C_CANTIDAD_ITEM: number | null
    C_IGV_TOTAL_ITEM: number | null
    C_ID_ITEM: number | null
    C_PRECIO_VENTA_UNITARIO_ITEM: number | null
    C_TOTAL_ITEM: number | null
    C_VALOR_ITEM: number | null
  }

  export type TicketInfoDetailMinAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_DESCRIP_ITEM: string | null
    C_VALOR_VENTA_UNITARIA: number | null
    C_CANTIDAD_ITEM: number | null
    C_IGV_TOTAL_ITEM: number | null
    C_COD_SUNAT_PROD_SERV_ITEM: string | null
    C_ID_ITEM: number | null
    C_COD_COMERCIAL_PROD_SERV: string | null
    C_COD_PROD_SERV_ITEM: string | null
    C_INDICADOR_PS_ITEM: string | null
    C_PRECIO_VENTA_UNITARIO_ITEM: number | null
    C_TOTAL_ITEM: number | null
    C_VALOR_ITEM: number | null
  }

  export type TicketInfoDetailMaxAggregateOutputType = {
    id: number | null
    C_ID: number | null
    C_DESCRIP_ITEM: string | null
    C_VALOR_VENTA_UNITARIA: number | null
    C_CANTIDAD_ITEM: number | null
    C_IGV_TOTAL_ITEM: number | null
    C_COD_SUNAT_PROD_SERV_ITEM: string | null
    C_ID_ITEM: number | null
    C_COD_COMERCIAL_PROD_SERV: string | null
    C_COD_PROD_SERV_ITEM: string | null
    C_INDICADOR_PS_ITEM: string | null
    C_PRECIO_VENTA_UNITARIO_ITEM: number | null
    C_TOTAL_ITEM: number | null
    C_VALOR_ITEM: number | null
  }

  export type TicketInfoDetailCountAggregateOutputType = {
    id: number
    C_ID: number
    C_DESCRIP_ITEM: number
    C_VALOR_VENTA_UNITARIA: number
    C_CANTIDAD_ITEM: number
    C_IGV_TOTAL_ITEM: number
    C_COD_SUNAT_PROD_SERV_ITEM: number
    C_ID_ITEM: number
    C_COD_COMERCIAL_PROD_SERV: number
    C_COD_PROD_SERV_ITEM: number
    C_INDICADOR_PS_ITEM: number
    C_PRECIO_VENTA_UNITARIO_ITEM: number
    C_TOTAL_ITEM: number
    C_VALOR_ITEM: number
    _all: number
  }


  export type TicketInfoDetailAvgAggregateInputType = {
    id?: true
    C_ID?: true
    C_VALOR_VENTA_UNITARIA?: true
    C_CANTIDAD_ITEM?: true
    C_IGV_TOTAL_ITEM?: true
    C_ID_ITEM?: true
    C_PRECIO_VENTA_UNITARIO_ITEM?: true
    C_TOTAL_ITEM?: true
    C_VALOR_ITEM?: true
  }

  export type TicketInfoDetailSumAggregateInputType = {
    id?: true
    C_ID?: true
    C_VALOR_VENTA_UNITARIA?: true
    C_CANTIDAD_ITEM?: true
    C_IGV_TOTAL_ITEM?: true
    C_ID_ITEM?: true
    C_PRECIO_VENTA_UNITARIO_ITEM?: true
    C_TOTAL_ITEM?: true
    C_VALOR_ITEM?: true
  }

  export type TicketInfoDetailMinAggregateInputType = {
    id?: true
    C_ID?: true
    C_DESCRIP_ITEM?: true
    C_VALOR_VENTA_UNITARIA?: true
    C_CANTIDAD_ITEM?: true
    C_IGV_TOTAL_ITEM?: true
    C_COD_SUNAT_PROD_SERV_ITEM?: true
    C_ID_ITEM?: true
    C_COD_COMERCIAL_PROD_SERV?: true
    C_COD_PROD_SERV_ITEM?: true
    C_INDICADOR_PS_ITEM?: true
    C_PRECIO_VENTA_UNITARIO_ITEM?: true
    C_TOTAL_ITEM?: true
    C_VALOR_ITEM?: true
  }

  export type TicketInfoDetailMaxAggregateInputType = {
    id?: true
    C_ID?: true
    C_DESCRIP_ITEM?: true
    C_VALOR_VENTA_UNITARIA?: true
    C_CANTIDAD_ITEM?: true
    C_IGV_TOTAL_ITEM?: true
    C_COD_SUNAT_PROD_SERV_ITEM?: true
    C_ID_ITEM?: true
    C_COD_COMERCIAL_PROD_SERV?: true
    C_COD_PROD_SERV_ITEM?: true
    C_INDICADOR_PS_ITEM?: true
    C_PRECIO_VENTA_UNITARIO_ITEM?: true
    C_TOTAL_ITEM?: true
    C_VALOR_ITEM?: true
  }

  export type TicketInfoDetailCountAggregateInputType = {
    id?: true
    C_ID?: true
    C_DESCRIP_ITEM?: true
    C_VALOR_VENTA_UNITARIA?: true
    C_CANTIDAD_ITEM?: true
    C_IGV_TOTAL_ITEM?: true
    C_COD_SUNAT_PROD_SERV_ITEM?: true
    C_ID_ITEM?: true
    C_COD_COMERCIAL_PROD_SERV?: true
    C_COD_PROD_SERV_ITEM?: true
    C_INDICADOR_PS_ITEM?: true
    C_PRECIO_VENTA_UNITARIO_ITEM?: true
    C_TOTAL_ITEM?: true
    C_VALOR_ITEM?: true
    _all?: true
  }

  export type TicketInfoDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketInfoDetail to aggregate.
     */
    where?: TicketInfoDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfoDetails to fetch.
     */
    orderBy?: TicketInfoDetailOrderByWithRelationInput | TicketInfoDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketInfoDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfoDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfoDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketInfoDetails
    **/
    _count?: true | TicketInfoDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketInfoDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketInfoDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketInfoDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketInfoDetailMaxAggregateInputType
  }

  export type GetTicketInfoDetailAggregateType<T extends TicketInfoDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketInfoDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketInfoDetail[P]>
      : GetScalarType<T[P], AggregateTicketInfoDetail[P]>
  }




  export type TicketInfoDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketInfoDetailWhereInput
    orderBy?: TicketInfoDetailOrderByWithAggregationInput | TicketInfoDetailOrderByWithAggregationInput[]
    by: TicketInfoDetailScalarFieldEnum[] | TicketInfoDetailScalarFieldEnum
    having?: TicketInfoDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketInfoDetailCountAggregateInputType | true
    _avg?: TicketInfoDetailAvgAggregateInputType
    _sum?: TicketInfoDetailSumAggregateInputType
    _min?: TicketInfoDetailMinAggregateInputType
    _max?: TicketInfoDetailMaxAggregateInputType
  }

  export type TicketInfoDetailGroupByOutputType = {
    id: number
    C_ID: number
    C_DESCRIP_ITEM: string
    C_VALOR_VENTA_UNITARIA: number
    C_CANTIDAD_ITEM: number
    C_IGV_TOTAL_ITEM: number
    C_COD_SUNAT_PROD_SERV_ITEM: string
    C_ID_ITEM: number
    C_COD_COMERCIAL_PROD_SERV: string
    C_COD_PROD_SERV_ITEM: string
    C_INDICADOR_PS_ITEM: string
    C_PRECIO_VENTA_UNITARIO_ITEM: number
    C_TOTAL_ITEM: number
    C_VALOR_ITEM: number
    _count: TicketInfoDetailCountAggregateOutputType | null
    _avg: TicketInfoDetailAvgAggregateOutputType | null
    _sum: TicketInfoDetailSumAggregateOutputType | null
    _min: TicketInfoDetailMinAggregateOutputType | null
    _max: TicketInfoDetailMaxAggregateOutputType | null
  }

  type GetTicketInfoDetailGroupByPayload<T extends TicketInfoDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketInfoDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketInfoDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketInfoDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TicketInfoDetailGroupByOutputType[P]>
        }
      >
    >


  export type TicketInfoDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_ID?: boolean
    C_DESCRIP_ITEM?: boolean
    C_VALOR_VENTA_UNITARIA?: boolean
    C_CANTIDAD_ITEM?: boolean
    C_IGV_TOTAL_ITEM?: boolean
    C_COD_SUNAT_PROD_SERV_ITEM?: boolean
    C_ID_ITEM?: boolean
    C_COD_COMERCIAL_PROD_SERV?: boolean
    C_COD_PROD_SERV_ITEM?: boolean
    C_INDICADOR_PS_ITEM?: boolean
    C_PRECIO_VENTA_UNITARIO_ITEM?: boolean
    C_TOTAL_ITEM?: boolean
    C_VALOR_ITEM?: boolean
  }, ExtArgs["result"]["ticketInfoDetail"]>

  export type TicketInfoDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_ID?: boolean
    C_DESCRIP_ITEM?: boolean
    C_VALOR_VENTA_UNITARIA?: boolean
    C_CANTIDAD_ITEM?: boolean
    C_IGV_TOTAL_ITEM?: boolean
    C_COD_SUNAT_PROD_SERV_ITEM?: boolean
    C_ID_ITEM?: boolean
    C_COD_COMERCIAL_PROD_SERV?: boolean
    C_COD_PROD_SERV_ITEM?: boolean
    C_INDICADOR_PS_ITEM?: boolean
    C_PRECIO_VENTA_UNITARIO_ITEM?: boolean
    C_TOTAL_ITEM?: boolean
    C_VALOR_ITEM?: boolean
  }, ExtArgs["result"]["ticketInfoDetail"]>

  export type TicketInfoDetailSelectScalar = {
    id?: boolean
    C_ID?: boolean
    C_DESCRIP_ITEM?: boolean
    C_VALOR_VENTA_UNITARIA?: boolean
    C_CANTIDAD_ITEM?: boolean
    C_IGV_TOTAL_ITEM?: boolean
    C_COD_SUNAT_PROD_SERV_ITEM?: boolean
    C_ID_ITEM?: boolean
    C_COD_COMERCIAL_PROD_SERV?: boolean
    C_COD_PROD_SERV_ITEM?: boolean
    C_INDICADOR_PS_ITEM?: boolean
    C_PRECIO_VENTA_UNITARIO_ITEM?: boolean
    C_TOTAL_ITEM?: boolean
    C_VALOR_ITEM?: boolean
  }


  export type $TicketInfoDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketInfoDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      C_ID: number
      C_DESCRIP_ITEM: string
      C_VALOR_VENTA_UNITARIA: number
      C_CANTIDAD_ITEM: number
      C_IGV_TOTAL_ITEM: number
      C_COD_SUNAT_PROD_SERV_ITEM: string
      C_ID_ITEM: number
      C_COD_COMERCIAL_PROD_SERV: string
      C_COD_PROD_SERV_ITEM: string
      C_INDICADOR_PS_ITEM: string
      C_PRECIO_VENTA_UNITARIO_ITEM: number
      C_TOTAL_ITEM: number
      C_VALOR_ITEM: number
    }, ExtArgs["result"]["ticketInfoDetail"]>
    composites: {}
  }

  type TicketInfoDetailGetPayload<S extends boolean | null | undefined | TicketInfoDetailDefaultArgs> = $Result.GetResult<Prisma.$TicketInfoDetailPayload, S>

  type TicketInfoDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketInfoDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketInfoDetailCountAggregateInputType | true
    }

  export interface TicketInfoDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketInfoDetail'], meta: { name: 'TicketInfoDetail' } }
    /**
     * Find zero or one TicketInfoDetail that matches the filter.
     * @param {TicketInfoDetailFindUniqueArgs} args - Arguments to find a TicketInfoDetail
     * @example
     * // Get one TicketInfoDetail
     * const ticketInfoDetail = await prisma.ticketInfoDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketInfoDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TicketInfoDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketInfoDetailFindUniqueOrThrowArgs} args - Arguments to find a TicketInfoDetail
     * @example
     * // Get one TicketInfoDetail
     * const ticketInfoDetail = await prisma.ticketInfoDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketInfoDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TicketInfoDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailFindFirstArgs} args - Arguments to find a TicketInfoDetail
     * @example
     * // Get one TicketInfoDetail
     * const ticketInfoDetail = await prisma.ticketInfoDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketInfoDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailFindFirstArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TicketInfoDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailFindFirstOrThrowArgs} args - Arguments to find a TicketInfoDetail
     * @example
     * // Get one TicketInfoDetail
     * const ticketInfoDetail = await prisma.ticketInfoDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketInfoDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TicketInfoDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketInfoDetails
     * const ticketInfoDetails = await prisma.ticketInfoDetail.findMany()
     * 
     * // Get first 10 TicketInfoDetails
     * const ticketInfoDetails = await prisma.ticketInfoDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketInfoDetailWithIdOnly = await prisma.ticketInfoDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketInfoDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TicketInfoDetail.
     * @param {TicketInfoDetailCreateArgs} args - Arguments to create a TicketInfoDetail.
     * @example
     * // Create one TicketInfoDetail
     * const TicketInfoDetail = await prisma.ticketInfoDetail.create({
     *   data: {
     *     // ... data to create a TicketInfoDetail
     *   }
     * })
     * 
    **/
    create<T extends TicketInfoDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDetailCreateArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TicketInfoDetails.
     * @param {TicketInfoDetailCreateManyArgs} args - Arguments to create many TicketInfoDetails.
     * @example
     * // Create many TicketInfoDetails
     * const ticketInfoDetail = await prisma.ticketInfoDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TicketInfoDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketInfoDetails and returns the data saved in the database.
     * @param {TicketInfoDetailCreateManyAndReturnArgs} args - Arguments to create many TicketInfoDetails.
     * @example
     * // Create many TicketInfoDetails
     * const ticketInfoDetail = await prisma.ticketInfoDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketInfoDetails and only return the `id`
     * const ticketInfoDetailWithIdOnly = await prisma.ticketInfoDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TicketInfoDetailCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TicketInfoDetail.
     * @param {TicketInfoDetailDeleteArgs} args - Arguments to delete one TicketInfoDetail.
     * @example
     * // Delete one TicketInfoDetail
     * const TicketInfoDetail = await prisma.ticketInfoDetail.delete({
     *   where: {
     *     // ... filter to delete one TicketInfoDetail
     *   }
     * })
     * 
    **/
    delete<T extends TicketInfoDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDetailDeleteArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TicketInfoDetail.
     * @param {TicketInfoDetailUpdateArgs} args - Arguments to update one TicketInfoDetail.
     * @example
     * // Update one TicketInfoDetail
     * const ticketInfoDetail = await prisma.ticketInfoDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketInfoDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDetailUpdateArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TicketInfoDetails.
     * @param {TicketInfoDetailDeleteManyArgs} args - Arguments to filter TicketInfoDetails to delete.
     * @example
     * // Delete a few TicketInfoDetails
     * const { count } = await prisma.ticketInfoDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketInfoDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketInfoDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketInfoDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketInfoDetails
     * const ticketInfoDetail = await prisma.ticketInfoDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketInfoDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketInfoDetail.
     * @param {TicketInfoDetailUpsertArgs} args - Arguments to update or create a TicketInfoDetail.
     * @example
     * // Update or create a TicketInfoDetail
     * const ticketInfoDetail = await prisma.ticketInfoDetail.upsert({
     *   create: {
     *     // ... data to create a TicketInfoDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketInfoDetail we want to update
     *   }
     * })
    **/
    upsert<T extends TicketInfoDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketInfoDetailUpsertArgs<ExtArgs>>
    ): Prisma__TicketInfoDetailClient<$Result.GetResult<Prisma.$TicketInfoDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TicketInfoDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailCountArgs} args - Arguments to filter TicketInfoDetails to count.
     * @example
     * // Count the number of TicketInfoDetails
     * const count = await prisma.ticketInfoDetail.count({
     *   where: {
     *     // ... the filter for the TicketInfoDetails we want to count
     *   }
     * })
    **/
    count<T extends TicketInfoDetailCountArgs>(
      args?: Subset<T, TicketInfoDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketInfoDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketInfoDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketInfoDetailAggregateArgs>(args: Subset<T, TicketInfoDetailAggregateArgs>): Prisma.PrismaPromise<GetTicketInfoDetailAggregateType<T>>

    /**
     * Group by TicketInfoDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketInfoDetailGroupByArgs} args - Group by arguments.
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
      T extends TicketInfoDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketInfoDetailGroupByArgs['orderBy'] }
        : { orderBy?: TicketInfoDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketInfoDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketInfoDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketInfoDetail model
   */
  readonly fields: TicketInfoDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketInfoDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketInfoDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TicketInfoDetail model
   */ 
  interface TicketInfoDetailFieldRefs {
    readonly id: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_ID: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_DESCRIP_ITEM: FieldRef<"TicketInfoDetail", 'String'>
    readonly C_VALOR_VENTA_UNITARIA: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_CANTIDAD_ITEM: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_IGV_TOTAL_ITEM: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_COD_SUNAT_PROD_SERV_ITEM: FieldRef<"TicketInfoDetail", 'String'>
    readonly C_ID_ITEM: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_COD_COMERCIAL_PROD_SERV: FieldRef<"TicketInfoDetail", 'String'>
    readonly C_COD_PROD_SERV_ITEM: FieldRef<"TicketInfoDetail", 'String'>
    readonly C_INDICADOR_PS_ITEM: FieldRef<"TicketInfoDetail", 'String'>
    readonly C_PRECIO_VENTA_UNITARIO_ITEM: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_TOTAL_ITEM: FieldRef<"TicketInfoDetail", 'Int'>
    readonly C_VALOR_ITEM: FieldRef<"TicketInfoDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TicketInfoDetail findUnique
   */
  export type TicketInfoDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfoDetail to fetch.
     */
    where: TicketInfoDetailWhereUniqueInput
  }

  /**
   * TicketInfoDetail findUniqueOrThrow
   */
  export type TicketInfoDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfoDetail to fetch.
     */
    where: TicketInfoDetailWhereUniqueInput
  }

  /**
   * TicketInfoDetail findFirst
   */
  export type TicketInfoDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfoDetail to fetch.
     */
    where?: TicketInfoDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfoDetails to fetch.
     */
    orderBy?: TicketInfoDetailOrderByWithRelationInput | TicketInfoDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketInfoDetails.
     */
    cursor?: TicketInfoDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfoDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfoDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketInfoDetails.
     */
    distinct?: TicketInfoDetailScalarFieldEnum | TicketInfoDetailScalarFieldEnum[]
  }

  /**
   * TicketInfoDetail findFirstOrThrow
   */
  export type TicketInfoDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfoDetail to fetch.
     */
    where?: TicketInfoDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfoDetails to fetch.
     */
    orderBy?: TicketInfoDetailOrderByWithRelationInput | TicketInfoDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketInfoDetails.
     */
    cursor?: TicketInfoDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfoDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfoDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketInfoDetails.
     */
    distinct?: TicketInfoDetailScalarFieldEnum | TicketInfoDetailScalarFieldEnum[]
  }

  /**
   * TicketInfoDetail findMany
   */
  export type TicketInfoDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * Filter, which TicketInfoDetails to fetch.
     */
    where?: TicketInfoDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketInfoDetails to fetch.
     */
    orderBy?: TicketInfoDetailOrderByWithRelationInput | TicketInfoDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketInfoDetails.
     */
    cursor?: TicketInfoDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketInfoDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketInfoDetails.
     */
    skip?: number
    distinct?: TicketInfoDetailScalarFieldEnum | TicketInfoDetailScalarFieldEnum[]
  }

  /**
   * TicketInfoDetail create
   */
  export type TicketInfoDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * The data needed to create a TicketInfoDetail.
     */
    data: XOR<TicketInfoDetailCreateInput, TicketInfoDetailUncheckedCreateInput>
  }

  /**
   * TicketInfoDetail createMany
   */
  export type TicketInfoDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketInfoDetails.
     */
    data: TicketInfoDetailCreateManyInput | TicketInfoDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketInfoDetail createManyAndReturn
   */
  export type TicketInfoDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketInfoDetails.
     */
    data: TicketInfoDetailCreateManyInput | TicketInfoDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketInfoDetail update
   */
  export type TicketInfoDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * The data needed to update a TicketInfoDetail.
     */
    data: XOR<TicketInfoDetailUpdateInput, TicketInfoDetailUncheckedUpdateInput>
    /**
     * Choose, which TicketInfoDetail to update.
     */
    where: TicketInfoDetailWhereUniqueInput
  }

  /**
   * TicketInfoDetail updateMany
   */
  export type TicketInfoDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketInfoDetails.
     */
    data: XOR<TicketInfoDetailUpdateManyMutationInput, TicketInfoDetailUncheckedUpdateManyInput>
    /**
     * Filter which TicketInfoDetails to update
     */
    where?: TicketInfoDetailWhereInput
  }

  /**
   * TicketInfoDetail upsert
   */
  export type TicketInfoDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * The filter to search for the TicketInfoDetail to update in case it exists.
     */
    where: TicketInfoDetailWhereUniqueInput
    /**
     * In case the TicketInfoDetail found by the `where` argument doesn't exist, create a new TicketInfoDetail with this data.
     */
    create: XOR<TicketInfoDetailCreateInput, TicketInfoDetailUncheckedCreateInput>
    /**
     * In case the TicketInfoDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketInfoDetailUpdateInput, TicketInfoDetailUncheckedUpdateInput>
  }

  /**
   * TicketInfoDetail delete
   */
  export type TicketInfoDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
    /**
     * Filter which TicketInfoDetail to delete.
     */
    where: TicketInfoDetailWhereUniqueInput
  }

  /**
   * TicketInfoDetail deleteMany
   */
  export type TicketInfoDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketInfoDetails to delete
     */
    where?: TicketInfoDetailWhereInput
  }

  /**
   * TicketInfoDetail without action
   */
  export type TicketInfoDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketInfoDetail
     */
    select?: TicketInfoDetailSelect<ExtArgs> | null
  }


  /**
   * Model Service2
   */

  export type AggregateService2 = {
    _count: Service2CountAggregateOutputType | null
    _avg: Service2AvgAggregateOutputType | null
    _sum: Service2SumAggregateOutputType | null
    _min: Service2MinAggregateOutputType | null
    _max: Service2MaxAggregateOutputType | null
  }

  export type Service2AvgAggregateOutputType = {
    id: number | null
  }

  export type Service2SumAggregateOutputType = {
    id: number | null
  }

  export type Service2MinAggregateOutputType = {
    id: number | null
    RucE: string | null
    Cd_Srv: string | null
    CodCo: string | null
    Nombre: string | null
    Descrip: string | null
    Cta1: string | null
    Cta2: string | null
    Img: string | null
    Cd_GS: string | null
    Cd_CGP: string | null
    Cd_CC: string | null
    Cd_SC: string | null
    Cd_SS: string | null
    IC_TipServ: string | null
    UsuCrea: string | null
    UsuMdf: string | null
    FecReg: Date | null
    FecMdf: Date | null
    CA01: string | null
    CA02: string | null
    CA03: string | null
    CA04: string | null
    CA05: string | null
    CA06: string | null
    CA07: string | null
    CA08: string | null
    CA09: string | null
    CA10: string | null
    Cta3: string | null
    Cta4: string | null
    Cta5: string | null
    Cta6: string | null
    Cta7: string | null
    Cta8: string | null
    Cta9: string | null
    Cta10: string | null
    Cta11: string | null
    Cta12: string | null
    C_CD_SRV_INAFECTO: string | null
    C_CD_SRV_AFECTO: string | null
    C_COD_BBSS: string | null
    C_CD_SERV_ADICIONAL: string | null
    C_PORCENTAJE_AFECTADO: string | null
    C_CODIGO_HOMOLOGACION: string | null
    C_IB_MULTIEMPRESA: string | null
    NCorto: string | null
    Estado: boolean | null
    IB_LF: boolean | null
    IB_ActivoFijo: boolean | null
    C_IB_LC: boolean | null
    C_IB_SOBRE_TASA: boolean | null
    C_IB_ES_OBLIGATORIO: boolean | null
    C_IB_INCLUYE_IGV: boolean | null
    C_IB_CRM: boolean | null
  }

  export type Service2MaxAggregateOutputType = {
    id: number | null
    RucE: string | null
    Cd_Srv: string | null
    CodCo: string | null
    Nombre: string | null
    Descrip: string | null
    Cta1: string | null
    Cta2: string | null
    Img: string | null
    Cd_GS: string | null
    Cd_CGP: string | null
    Cd_CC: string | null
    Cd_SC: string | null
    Cd_SS: string | null
    IC_TipServ: string | null
    UsuCrea: string | null
    UsuMdf: string | null
    FecReg: Date | null
    FecMdf: Date | null
    CA01: string | null
    CA02: string | null
    CA03: string | null
    CA04: string | null
    CA05: string | null
    CA06: string | null
    CA07: string | null
    CA08: string | null
    CA09: string | null
    CA10: string | null
    Cta3: string | null
    Cta4: string | null
    Cta5: string | null
    Cta6: string | null
    Cta7: string | null
    Cta8: string | null
    Cta9: string | null
    Cta10: string | null
    Cta11: string | null
    Cta12: string | null
    C_CD_SRV_INAFECTO: string | null
    C_CD_SRV_AFECTO: string | null
    C_COD_BBSS: string | null
    C_CD_SERV_ADICIONAL: string | null
    C_PORCENTAJE_AFECTADO: string | null
    C_CODIGO_HOMOLOGACION: string | null
    C_IB_MULTIEMPRESA: string | null
    NCorto: string | null
    Estado: boolean | null
    IB_LF: boolean | null
    IB_ActivoFijo: boolean | null
    C_IB_LC: boolean | null
    C_IB_SOBRE_TASA: boolean | null
    C_IB_ES_OBLIGATORIO: boolean | null
    C_IB_INCLUYE_IGV: boolean | null
    C_IB_CRM: boolean | null
  }

  export type Service2CountAggregateOutputType = {
    id: number
    RucE: number
    Cd_Srv: number
    CodCo: number
    Nombre: number
    Descrip: number
    Cta1: number
    Cta2: number
    Img: number
    Cd_GS: number
    Cd_CGP: number
    Cd_CC: number
    Cd_SC: number
    Cd_SS: number
    IC_TipServ: number
    UsuCrea: number
    UsuMdf: number
    FecReg: number
    FecMdf: number
    CA01: number
    CA02: number
    CA03: number
    CA04: number
    CA05: number
    CA06: number
    CA07: number
    CA08: number
    CA09: number
    CA10: number
    Cta3: number
    Cta4: number
    Cta5: number
    Cta6: number
    Cta7: number
    Cta8: number
    Cta9: number
    Cta10: number
    Cta11: number
    Cta12: number
    C_CD_SRV_INAFECTO: number
    C_CD_SRV_AFECTO: number
    C_COD_BBSS: number
    C_CD_SERV_ADICIONAL: number
    C_PORCENTAJE_AFECTADO: number
    C_CODIGO_HOMOLOGACION: number
    C_IB_MULTIEMPRESA: number
    NCorto: number
    Estado: number
    IB_LF: number
    IB_ActivoFijo: number
    C_IB_LC: number
    C_IB_SOBRE_TASA: number
    C_IB_ES_OBLIGATORIO: number
    C_IB_INCLUYE_IGV: number
    C_IB_CRM: number
    _all: number
  }


  export type Service2AvgAggregateInputType = {
    id?: true
  }

  export type Service2SumAggregateInputType = {
    id?: true
  }

  export type Service2MinAggregateInputType = {
    id?: true
    RucE?: true
    Cd_Srv?: true
    CodCo?: true
    Nombre?: true
    Descrip?: true
    Cta1?: true
    Cta2?: true
    Img?: true
    Cd_GS?: true
    Cd_CGP?: true
    Cd_CC?: true
    Cd_SC?: true
    Cd_SS?: true
    IC_TipServ?: true
    UsuCrea?: true
    UsuMdf?: true
    FecReg?: true
    FecMdf?: true
    CA01?: true
    CA02?: true
    CA03?: true
    CA04?: true
    CA05?: true
    CA06?: true
    CA07?: true
    CA08?: true
    CA09?: true
    CA10?: true
    Cta3?: true
    Cta4?: true
    Cta5?: true
    Cta6?: true
    Cta7?: true
    Cta8?: true
    Cta9?: true
    Cta10?: true
    Cta11?: true
    Cta12?: true
    C_CD_SRV_INAFECTO?: true
    C_CD_SRV_AFECTO?: true
    C_COD_BBSS?: true
    C_CD_SERV_ADICIONAL?: true
    C_PORCENTAJE_AFECTADO?: true
    C_CODIGO_HOMOLOGACION?: true
    C_IB_MULTIEMPRESA?: true
    NCorto?: true
    Estado?: true
    IB_LF?: true
    IB_ActivoFijo?: true
    C_IB_LC?: true
    C_IB_SOBRE_TASA?: true
    C_IB_ES_OBLIGATORIO?: true
    C_IB_INCLUYE_IGV?: true
    C_IB_CRM?: true
  }

  export type Service2MaxAggregateInputType = {
    id?: true
    RucE?: true
    Cd_Srv?: true
    CodCo?: true
    Nombre?: true
    Descrip?: true
    Cta1?: true
    Cta2?: true
    Img?: true
    Cd_GS?: true
    Cd_CGP?: true
    Cd_CC?: true
    Cd_SC?: true
    Cd_SS?: true
    IC_TipServ?: true
    UsuCrea?: true
    UsuMdf?: true
    FecReg?: true
    FecMdf?: true
    CA01?: true
    CA02?: true
    CA03?: true
    CA04?: true
    CA05?: true
    CA06?: true
    CA07?: true
    CA08?: true
    CA09?: true
    CA10?: true
    Cta3?: true
    Cta4?: true
    Cta5?: true
    Cta6?: true
    Cta7?: true
    Cta8?: true
    Cta9?: true
    Cta10?: true
    Cta11?: true
    Cta12?: true
    C_CD_SRV_INAFECTO?: true
    C_CD_SRV_AFECTO?: true
    C_COD_BBSS?: true
    C_CD_SERV_ADICIONAL?: true
    C_PORCENTAJE_AFECTADO?: true
    C_CODIGO_HOMOLOGACION?: true
    C_IB_MULTIEMPRESA?: true
    NCorto?: true
    Estado?: true
    IB_LF?: true
    IB_ActivoFijo?: true
    C_IB_LC?: true
    C_IB_SOBRE_TASA?: true
    C_IB_ES_OBLIGATORIO?: true
    C_IB_INCLUYE_IGV?: true
    C_IB_CRM?: true
  }

  export type Service2CountAggregateInputType = {
    id?: true
    RucE?: true
    Cd_Srv?: true
    CodCo?: true
    Nombre?: true
    Descrip?: true
    Cta1?: true
    Cta2?: true
    Img?: true
    Cd_GS?: true
    Cd_CGP?: true
    Cd_CC?: true
    Cd_SC?: true
    Cd_SS?: true
    IC_TipServ?: true
    UsuCrea?: true
    UsuMdf?: true
    FecReg?: true
    FecMdf?: true
    CA01?: true
    CA02?: true
    CA03?: true
    CA04?: true
    CA05?: true
    CA06?: true
    CA07?: true
    CA08?: true
    CA09?: true
    CA10?: true
    Cta3?: true
    Cta4?: true
    Cta5?: true
    Cta6?: true
    Cta7?: true
    Cta8?: true
    Cta9?: true
    Cta10?: true
    Cta11?: true
    Cta12?: true
    C_CD_SRV_INAFECTO?: true
    C_CD_SRV_AFECTO?: true
    C_COD_BBSS?: true
    C_CD_SERV_ADICIONAL?: true
    C_PORCENTAJE_AFECTADO?: true
    C_CODIGO_HOMOLOGACION?: true
    C_IB_MULTIEMPRESA?: true
    NCorto?: true
    Estado?: true
    IB_LF?: true
    IB_ActivoFijo?: true
    C_IB_LC?: true
    C_IB_SOBRE_TASA?: true
    C_IB_ES_OBLIGATORIO?: true
    C_IB_INCLUYE_IGV?: true
    C_IB_CRM?: true
    _all?: true
  }

  export type Service2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service2 to aggregate.
     */
    where?: Service2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service2s to fetch.
     */
    orderBy?: Service2OrderByWithRelationInput | Service2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Service2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Service2s
    **/
    _count?: true | Service2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Service2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Service2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Service2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Service2MaxAggregateInputType
  }

  export type GetService2AggregateType<T extends Service2AggregateArgs> = {
        [P in keyof T & keyof AggregateService2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService2[P]>
      : GetScalarType<T[P], AggregateService2[P]>
  }




  export type Service2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service2WhereInput
    orderBy?: Service2OrderByWithAggregationInput | Service2OrderByWithAggregationInput[]
    by: Service2ScalarFieldEnum[] | Service2ScalarFieldEnum
    having?: Service2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Service2CountAggregateInputType | true
    _avg?: Service2AvgAggregateInputType
    _sum?: Service2SumAggregateInputType
    _min?: Service2MinAggregateInputType
    _max?: Service2MaxAggregateInputType
  }

  export type Service2GroupByOutputType = {
    id: number
    RucE: string | null
    Cd_Srv: string
    CodCo: string | null
    Nombre: string | null
    Descrip: string | null
    Cta1: string | null
    Cta2: string | null
    Img: string | null
    Cd_GS: string | null
    Cd_CGP: string | null
    Cd_CC: string | null
    Cd_SC: string | null
    Cd_SS: string | null
    IC_TipServ: string | null
    UsuCrea: string | null
    UsuMdf: string | null
    FecReg: Date | null
    FecMdf: Date | null
    CA01: string | null
    CA02: string | null
    CA03: string | null
    CA04: string | null
    CA05: string | null
    CA06: string | null
    CA07: string | null
    CA08: string | null
    CA09: string | null
    CA10: string | null
    Cta3: string | null
    Cta4: string | null
    Cta5: string | null
    Cta6: string | null
    Cta7: string | null
    Cta8: string | null
    Cta9: string | null
    Cta10: string | null
    Cta11: string | null
    Cta12: string | null
    C_CD_SRV_INAFECTO: string | null
    C_CD_SRV_AFECTO: string | null
    C_COD_BBSS: string | null
    C_CD_SERV_ADICIONAL: string | null
    C_PORCENTAJE_AFECTADO: string | null
    C_CODIGO_HOMOLOGACION: string | null
    C_IB_MULTIEMPRESA: string | null
    NCorto: string | null
    Estado: boolean | null
    IB_LF: boolean | null
    IB_ActivoFijo: boolean | null
    C_IB_LC: boolean | null
    C_IB_SOBRE_TASA: boolean | null
    C_IB_ES_OBLIGATORIO: boolean | null
    C_IB_INCLUYE_IGV: boolean | null
    C_IB_CRM: boolean | null
    _count: Service2CountAggregateOutputType | null
    _avg: Service2AvgAggregateOutputType | null
    _sum: Service2SumAggregateOutputType | null
    _min: Service2MinAggregateOutputType | null
    _max: Service2MaxAggregateOutputType | null
  }

  type GetService2GroupByPayload<T extends Service2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Service2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Service2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Service2GroupByOutputType[P]>
            : GetScalarType<T[P], Service2GroupByOutputType[P]>
        }
      >
    >


  export type Service2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RucE?: boolean
    Cd_Srv?: boolean
    CodCo?: boolean
    Nombre?: boolean
    Descrip?: boolean
    Cta1?: boolean
    Cta2?: boolean
    Img?: boolean
    Cd_GS?: boolean
    Cd_CGP?: boolean
    Cd_CC?: boolean
    Cd_SC?: boolean
    Cd_SS?: boolean
    IC_TipServ?: boolean
    UsuCrea?: boolean
    UsuMdf?: boolean
    FecReg?: boolean
    FecMdf?: boolean
    CA01?: boolean
    CA02?: boolean
    CA03?: boolean
    CA04?: boolean
    CA05?: boolean
    CA06?: boolean
    CA07?: boolean
    CA08?: boolean
    CA09?: boolean
    CA10?: boolean
    Cta3?: boolean
    Cta4?: boolean
    Cta5?: boolean
    Cta6?: boolean
    Cta7?: boolean
    Cta8?: boolean
    Cta9?: boolean
    Cta10?: boolean
    Cta11?: boolean
    Cta12?: boolean
    C_CD_SRV_INAFECTO?: boolean
    C_CD_SRV_AFECTO?: boolean
    C_COD_BBSS?: boolean
    C_CD_SERV_ADICIONAL?: boolean
    C_PORCENTAJE_AFECTADO?: boolean
    C_CODIGO_HOMOLOGACION?: boolean
    C_IB_MULTIEMPRESA?: boolean
    NCorto?: boolean
    Estado?: boolean
    IB_LF?: boolean
    IB_ActivoFijo?: boolean
    C_IB_LC?: boolean
    C_IB_SOBRE_TASA?: boolean
    C_IB_ES_OBLIGATORIO?: boolean
    C_IB_INCLUYE_IGV?: boolean
    C_IB_CRM?: boolean
  }, ExtArgs["result"]["service2"]>

  export type Service2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RucE?: boolean
    Cd_Srv?: boolean
    CodCo?: boolean
    Nombre?: boolean
    Descrip?: boolean
    Cta1?: boolean
    Cta2?: boolean
    Img?: boolean
    Cd_GS?: boolean
    Cd_CGP?: boolean
    Cd_CC?: boolean
    Cd_SC?: boolean
    Cd_SS?: boolean
    IC_TipServ?: boolean
    UsuCrea?: boolean
    UsuMdf?: boolean
    FecReg?: boolean
    FecMdf?: boolean
    CA01?: boolean
    CA02?: boolean
    CA03?: boolean
    CA04?: boolean
    CA05?: boolean
    CA06?: boolean
    CA07?: boolean
    CA08?: boolean
    CA09?: boolean
    CA10?: boolean
    Cta3?: boolean
    Cta4?: boolean
    Cta5?: boolean
    Cta6?: boolean
    Cta7?: boolean
    Cta8?: boolean
    Cta9?: boolean
    Cta10?: boolean
    Cta11?: boolean
    Cta12?: boolean
    C_CD_SRV_INAFECTO?: boolean
    C_CD_SRV_AFECTO?: boolean
    C_COD_BBSS?: boolean
    C_CD_SERV_ADICIONAL?: boolean
    C_PORCENTAJE_AFECTADO?: boolean
    C_CODIGO_HOMOLOGACION?: boolean
    C_IB_MULTIEMPRESA?: boolean
    NCorto?: boolean
    Estado?: boolean
    IB_LF?: boolean
    IB_ActivoFijo?: boolean
    C_IB_LC?: boolean
    C_IB_SOBRE_TASA?: boolean
    C_IB_ES_OBLIGATORIO?: boolean
    C_IB_INCLUYE_IGV?: boolean
    C_IB_CRM?: boolean
  }, ExtArgs["result"]["service2"]>

  export type Service2SelectScalar = {
    id?: boolean
    RucE?: boolean
    Cd_Srv?: boolean
    CodCo?: boolean
    Nombre?: boolean
    Descrip?: boolean
    Cta1?: boolean
    Cta2?: boolean
    Img?: boolean
    Cd_GS?: boolean
    Cd_CGP?: boolean
    Cd_CC?: boolean
    Cd_SC?: boolean
    Cd_SS?: boolean
    IC_TipServ?: boolean
    UsuCrea?: boolean
    UsuMdf?: boolean
    FecReg?: boolean
    FecMdf?: boolean
    CA01?: boolean
    CA02?: boolean
    CA03?: boolean
    CA04?: boolean
    CA05?: boolean
    CA06?: boolean
    CA07?: boolean
    CA08?: boolean
    CA09?: boolean
    CA10?: boolean
    Cta3?: boolean
    Cta4?: boolean
    Cta5?: boolean
    Cta6?: boolean
    Cta7?: boolean
    Cta8?: boolean
    Cta9?: boolean
    Cta10?: boolean
    Cta11?: boolean
    Cta12?: boolean
    C_CD_SRV_INAFECTO?: boolean
    C_CD_SRV_AFECTO?: boolean
    C_COD_BBSS?: boolean
    C_CD_SERV_ADICIONAL?: boolean
    C_PORCENTAJE_AFECTADO?: boolean
    C_CODIGO_HOMOLOGACION?: boolean
    C_IB_MULTIEMPRESA?: boolean
    NCorto?: boolean
    Estado?: boolean
    IB_LF?: boolean
    IB_ActivoFijo?: boolean
    C_IB_LC?: boolean
    C_IB_SOBRE_TASA?: boolean
    C_IB_ES_OBLIGATORIO?: boolean
    C_IB_INCLUYE_IGV?: boolean
    C_IB_CRM?: boolean
  }


  export type $Service2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      RucE: string | null
      Cd_Srv: string
      CodCo: string | null
      Nombre: string | null
      Descrip: string | null
      Cta1: string | null
      Cta2: string | null
      Img: string | null
      Cd_GS: string | null
      Cd_CGP: string | null
      Cd_CC: string | null
      Cd_SC: string | null
      Cd_SS: string | null
      IC_TipServ: string | null
      UsuCrea: string | null
      UsuMdf: string | null
      FecReg: Date | null
      FecMdf: Date | null
      CA01: string | null
      CA02: string | null
      CA03: string | null
      CA04: string | null
      CA05: string | null
      CA06: string | null
      CA07: string | null
      CA08: string | null
      CA09: string | null
      CA10: string | null
      Cta3: string | null
      Cta4: string | null
      Cta5: string | null
      Cta6: string | null
      Cta7: string | null
      Cta8: string | null
      Cta9: string | null
      Cta10: string | null
      Cta11: string | null
      Cta12: string | null
      C_CD_SRV_INAFECTO: string | null
      C_CD_SRV_AFECTO: string | null
      C_COD_BBSS: string | null
      C_CD_SERV_ADICIONAL: string | null
      C_PORCENTAJE_AFECTADO: string | null
      C_CODIGO_HOMOLOGACION: string | null
      C_IB_MULTIEMPRESA: string | null
      NCorto: string | null
      Estado: boolean | null
      IB_LF: boolean | null
      IB_ActivoFijo: boolean | null
      C_IB_LC: boolean | null
      C_IB_SOBRE_TASA: boolean | null
      C_IB_ES_OBLIGATORIO: boolean | null
      C_IB_INCLUYE_IGV: boolean | null
      C_IB_CRM: boolean | null
    }, ExtArgs["result"]["service2"]>
    composites: {}
  }

  type Service2GetPayload<S extends boolean | null | undefined | Service2DefaultArgs> = $Result.GetResult<Prisma.$Service2Payload, S>

  type Service2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Service2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Service2CountAggregateInputType | true
    }

  export interface Service2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service2'], meta: { name: 'Service2' } }
    /**
     * Find zero or one Service2 that matches the filter.
     * @param {Service2FindUniqueArgs} args - Arguments to find a Service2
     * @example
     * // Get one Service2
     * const service2 = await prisma.service2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Service2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Service2FindUniqueArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Service2 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Service2FindUniqueOrThrowArgs} args - Arguments to find a Service2
     * @example
     * // Get one Service2
     * const service2 = await prisma.service2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Service2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Service2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2FindFirstArgs} args - Arguments to find a Service2
     * @example
     * // Get one Service2
     * const service2 = await prisma.service2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Service2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2FindFirstArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Service2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2FindFirstOrThrowArgs} args - Arguments to find a Service2
     * @example
     * // Get one Service2
     * const service2 = await prisma.service2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Service2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Service2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service2s
     * const service2s = await prisma.service2.findMany()
     * 
     * // Get first 10 Service2s
     * const service2s = await prisma.service2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const service2WithIdOnly = await prisma.service2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Service2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Service2.
     * @param {Service2CreateArgs} args - Arguments to create a Service2.
     * @example
     * // Create one Service2
     * const Service2 = await prisma.service2.create({
     *   data: {
     *     // ... data to create a Service2
     *   }
     * })
     * 
    **/
    create<T extends Service2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, Service2CreateArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Service2s.
     * @param {Service2CreateManyArgs} args - Arguments to create many Service2s.
     * @example
     * // Create many Service2s
     * const service2 = await prisma.service2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends Service2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Service2s and returns the data saved in the database.
     * @param {Service2CreateManyAndReturnArgs} args - Arguments to create many Service2s.
     * @example
     * // Create many Service2s
     * const service2 = await prisma.service2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Service2s and only return the `id`
     * const service2WithIdOnly = await prisma.service2.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends Service2CreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2CreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Service2.
     * @param {Service2DeleteArgs} args - Arguments to delete one Service2.
     * @example
     * // Delete one Service2
     * const Service2 = await prisma.service2.delete({
     *   where: {
     *     // ... filter to delete one Service2
     *   }
     * })
     * 
    **/
    delete<T extends Service2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Service2DeleteArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Service2.
     * @param {Service2UpdateArgs} args - Arguments to update one Service2.
     * @example
     * // Update one Service2
     * const service2 = await prisma.service2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Service2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Service2UpdateArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Service2s.
     * @param {Service2DeleteManyArgs} args - Arguments to filter Service2s to delete.
     * @example
     * // Delete a few Service2s
     * const { count } = await prisma.service2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Service2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Service2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service2s
     * const service2 = await prisma.service2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Service2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Service2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service2.
     * @param {Service2UpsertArgs} args - Arguments to update or create a Service2.
     * @example
     * // Update or create a Service2
     * const service2 = await prisma.service2.upsert({
     *   create: {
     *     // ... data to create a Service2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service2 we want to update
     *   }
     * })
    **/
    upsert<T extends Service2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Service2UpsertArgs<ExtArgs>>
    ): Prisma__Service2Client<$Result.GetResult<Prisma.$Service2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Service2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2CountArgs} args - Arguments to filter Service2s to count.
     * @example
     * // Count the number of Service2s
     * const count = await prisma.service2.count({
     *   where: {
     *     // ... the filter for the Service2s we want to count
     *   }
     * })
    **/
    count<T extends Service2CountArgs>(
      args?: Subset<T, Service2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Service2AggregateArgs>(args: Subset<T, Service2AggregateArgs>): Prisma.PrismaPromise<GetService2AggregateType<T>>

    /**
     * Group by Service2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service2GroupByArgs} args - Group by arguments.
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
      T extends Service2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Service2GroupByArgs['orderBy'] }
        : { orderBy?: Service2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Service2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetService2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service2 model
   */
  readonly fields: Service2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Service2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Service2 model
   */ 
  interface Service2FieldRefs {
    readonly id: FieldRef<"Service2", 'Int'>
    readonly RucE: FieldRef<"Service2", 'String'>
    readonly Cd_Srv: FieldRef<"Service2", 'String'>
    readonly CodCo: FieldRef<"Service2", 'String'>
    readonly Nombre: FieldRef<"Service2", 'String'>
    readonly Descrip: FieldRef<"Service2", 'String'>
    readonly Cta1: FieldRef<"Service2", 'String'>
    readonly Cta2: FieldRef<"Service2", 'String'>
    readonly Img: FieldRef<"Service2", 'String'>
    readonly Cd_GS: FieldRef<"Service2", 'String'>
    readonly Cd_CGP: FieldRef<"Service2", 'String'>
    readonly Cd_CC: FieldRef<"Service2", 'String'>
    readonly Cd_SC: FieldRef<"Service2", 'String'>
    readonly Cd_SS: FieldRef<"Service2", 'String'>
    readonly IC_TipServ: FieldRef<"Service2", 'String'>
    readonly UsuCrea: FieldRef<"Service2", 'String'>
    readonly UsuMdf: FieldRef<"Service2", 'String'>
    readonly FecReg: FieldRef<"Service2", 'DateTime'>
    readonly FecMdf: FieldRef<"Service2", 'DateTime'>
    readonly CA01: FieldRef<"Service2", 'String'>
    readonly CA02: FieldRef<"Service2", 'String'>
    readonly CA03: FieldRef<"Service2", 'String'>
    readonly CA04: FieldRef<"Service2", 'String'>
    readonly CA05: FieldRef<"Service2", 'String'>
    readonly CA06: FieldRef<"Service2", 'String'>
    readonly CA07: FieldRef<"Service2", 'String'>
    readonly CA08: FieldRef<"Service2", 'String'>
    readonly CA09: FieldRef<"Service2", 'String'>
    readonly CA10: FieldRef<"Service2", 'String'>
    readonly Cta3: FieldRef<"Service2", 'String'>
    readonly Cta4: FieldRef<"Service2", 'String'>
    readonly Cta5: FieldRef<"Service2", 'String'>
    readonly Cta6: FieldRef<"Service2", 'String'>
    readonly Cta7: FieldRef<"Service2", 'String'>
    readonly Cta8: FieldRef<"Service2", 'String'>
    readonly Cta9: FieldRef<"Service2", 'String'>
    readonly Cta10: FieldRef<"Service2", 'String'>
    readonly Cta11: FieldRef<"Service2", 'String'>
    readonly Cta12: FieldRef<"Service2", 'String'>
    readonly C_CD_SRV_INAFECTO: FieldRef<"Service2", 'String'>
    readonly C_CD_SRV_AFECTO: FieldRef<"Service2", 'String'>
    readonly C_COD_BBSS: FieldRef<"Service2", 'String'>
    readonly C_CD_SERV_ADICIONAL: FieldRef<"Service2", 'String'>
    readonly C_PORCENTAJE_AFECTADO: FieldRef<"Service2", 'String'>
    readonly C_CODIGO_HOMOLOGACION: FieldRef<"Service2", 'String'>
    readonly C_IB_MULTIEMPRESA: FieldRef<"Service2", 'String'>
    readonly NCorto: FieldRef<"Service2", 'String'>
    readonly Estado: FieldRef<"Service2", 'Boolean'>
    readonly IB_LF: FieldRef<"Service2", 'Boolean'>
    readonly IB_ActivoFijo: FieldRef<"Service2", 'Boolean'>
    readonly C_IB_LC: FieldRef<"Service2", 'Boolean'>
    readonly C_IB_SOBRE_TASA: FieldRef<"Service2", 'Boolean'>
    readonly C_IB_ES_OBLIGATORIO: FieldRef<"Service2", 'Boolean'>
    readonly C_IB_INCLUYE_IGV: FieldRef<"Service2", 'Boolean'>
    readonly C_IB_CRM: FieldRef<"Service2", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Service2 findUnique
   */
  export type Service2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * Filter, which Service2 to fetch.
     */
    where: Service2WhereUniqueInput
  }

  /**
   * Service2 findUniqueOrThrow
   */
  export type Service2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * Filter, which Service2 to fetch.
     */
    where: Service2WhereUniqueInput
  }

  /**
   * Service2 findFirst
   */
  export type Service2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * Filter, which Service2 to fetch.
     */
    where?: Service2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service2s to fetch.
     */
    orderBy?: Service2OrderByWithRelationInput | Service2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service2s.
     */
    cursor?: Service2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service2s.
     */
    distinct?: Service2ScalarFieldEnum | Service2ScalarFieldEnum[]
  }

  /**
   * Service2 findFirstOrThrow
   */
  export type Service2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * Filter, which Service2 to fetch.
     */
    where?: Service2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service2s to fetch.
     */
    orderBy?: Service2OrderByWithRelationInput | Service2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service2s.
     */
    cursor?: Service2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service2s.
     */
    distinct?: Service2ScalarFieldEnum | Service2ScalarFieldEnum[]
  }

  /**
   * Service2 findMany
   */
  export type Service2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * Filter, which Service2s to fetch.
     */
    where?: Service2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service2s to fetch.
     */
    orderBy?: Service2OrderByWithRelationInput | Service2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Service2s.
     */
    cursor?: Service2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service2s.
     */
    skip?: number
    distinct?: Service2ScalarFieldEnum | Service2ScalarFieldEnum[]
  }

  /**
   * Service2 create
   */
  export type Service2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * The data needed to create a Service2.
     */
    data: XOR<Service2CreateInput, Service2UncheckedCreateInput>
  }

  /**
   * Service2 createMany
   */
  export type Service2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Service2s.
     */
    data: Service2CreateManyInput | Service2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service2 createManyAndReturn
   */
  export type Service2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Service2s.
     */
    data: Service2CreateManyInput | Service2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service2 update
   */
  export type Service2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * The data needed to update a Service2.
     */
    data: XOR<Service2UpdateInput, Service2UncheckedUpdateInput>
    /**
     * Choose, which Service2 to update.
     */
    where: Service2WhereUniqueInput
  }

  /**
   * Service2 updateMany
   */
  export type Service2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Service2s.
     */
    data: XOR<Service2UpdateManyMutationInput, Service2UncheckedUpdateManyInput>
    /**
     * Filter which Service2s to update
     */
    where?: Service2WhereInput
  }

  /**
   * Service2 upsert
   */
  export type Service2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * The filter to search for the Service2 to update in case it exists.
     */
    where: Service2WhereUniqueInput
    /**
     * In case the Service2 found by the `where` argument doesn't exist, create a new Service2 with this data.
     */
    create: XOR<Service2CreateInput, Service2UncheckedCreateInput>
    /**
     * In case the Service2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Service2UpdateInput, Service2UncheckedUpdateInput>
  }

  /**
   * Service2 delete
   */
  export type Service2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
    /**
     * Filter which Service2 to delete.
     */
    where: Service2WhereUniqueInput
  }

  /**
   * Service2 deleteMany
   */
  export type Service2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service2s to delete
     */
    where?: Service2WhereInput
  }

  /**
   * Service2 without action
   */
  export type Service2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service2
     */
    select?: Service2Select<ExtArgs> | null
  }


  /**
   * Model Cliente2
   */

  export type AggregateCliente2 = {
    _count: Cliente2CountAggregateOutputType | null
    _avg: Cliente2AvgAggregateOutputType | null
    _sum: Cliente2SumAggregateOutputType | null
    _min: Cliente2MinAggregateOutputType | null
    _max: Cliente2MaxAggregateOutputType | null
  }

  export type Cliente2AvgAggregateOutputType = {
    id: number | null
    SaldoAFavor: Decimal | null
    C_DIASCOBRO: number | null
    C_DIAS_TOLERANCIA_CREDITO: number | null
    C_ESTADO_LINEA_CREDITO: number | null
    IB_AgRet: number | null
    IB_AgPercep: number | null
    IB_BuenContrib: number | null
    EsExtranjero: number | null
    DefinirDiasCredito: number | null
    IB_ConsumidorFinal: number | null
    C_IB_PAGO_DESTINO: number | null
    C_IB_AGENTE: number | null
    Estado: number | null
  }

  export type Cliente2SumAggregateOutputType = {
    id: number | null
    SaldoAFavor: Decimal | null
    C_DIASCOBRO: number | null
    C_DIAS_TOLERANCIA_CREDITO: number | null
    C_ESTADO_LINEA_CREDITO: number | null
    IB_AgRet: number | null
    IB_AgPercep: number | null
    IB_BuenContrib: number | null
    EsExtranjero: number | null
    DefinirDiasCredito: number | null
    IB_ConsumidorFinal: number | null
    C_IB_PAGO_DESTINO: number | null
    C_IB_AGENTE: number | null
    Estado: number | null
  }

  export type Cliente2MinAggregateOutputType = {
    id: number | null
    RucE: string | null
    Cd_Clt: string | null
    Cd_TDI: string | null
    NDoc: string | null
    RSocial: string | null
    ApPat: string | null
    ApMat: string | null
    Nom: string | null
    Cd_Pais: string | null
    CodPost: string | null
    Ubigeo: string | null
    Direc: string | null
    Telf1: string | null
    Telf2: string | null
    Fax: string | null
    Correo: string | null
    PWeb: string | null
    Obs: string | null
    CtaCtb: string | null
    DiasCbr: string | null
    PerCbr: string | null
    CtaCte: string | null
    Cd_CGC: string | null
    CA01: string | null
    CA02: string | null
    CA03: string | null
    CA04: string | null
    CA05: string | null
    CA06: string | null
    CA07: string | null
    CA08: string | null
    CA09: string | null
    CA10: string | null
    Cd_Aux: string | null
    Cd_TClt: string | null
    FecReg: Date | null
    UsuCrea: string | null
    FecMdf: Date | null
    UsuMdf: string | null
    NComercial: string | null
    Cd_Vdr: string | null
    SaldoAFavor: Decimal | null
    Msj_Alert: string | null
    EnvioDocVtaAuto: boolean | null
    EnvioDocVtaAdjto: boolean | null
    PassWeb: string | null
    CodEAN: string | null
    C_CD_CC: string | null
    C_FEC_GEN_PASS: Date | null
    C_USU_GEN_PASS: string | null
    C_CORREO_ENV_PASS: string | null
    C_FORMACOBRO: string | null
    C_DIASCOBRO: number | null
    C_FEC_AMPLIACION_LINEA_CRED: Date | null
    C_MOTIVO_AMPLIACION_LINEA_CRED: string | null
    C_CD_CCOSTOS: string | null
    C_CD_SCCOSTOS: string | null
    C_CD_SSCCOSTOS: string | null
    C_DIAS_TOLERANCIA_CREDITO: number | null
    C_FECHA_INGRESO: Date | null
    C_CODIGO_HOMOLOGACION: string | null
    C_IB_MULTIEMPRESA: boolean | null
    C_URBANIZACION: string | null
    C_ESTADO_LINEA_CREDITO: number | null
    IB_AgRet: number | null
    IB_AgPercep: number | null
    IB_BuenContrib: number | null
    EsExtranjero: number | null
    DefinirDiasCredito: number | null
    IB_ConsumidorFinal: number | null
    C_IB_PAGO_DESTINO: number | null
    C_IB_AGENTE: number | null
    Estado: number | null
    C_CONTRASENA_WEB: string | null
  }

  export type Cliente2MaxAggregateOutputType = {
    id: number | null
    RucE: string | null
    Cd_Clt: string | null
    Cd_TDI: string | null
    NDoc: string | null
    RSocial: string | null
    ApPat: string | null
    ApMat: string | null
    Nom: string | null
    Cd_Pais: string | null
    CodPost: string | null
    Ubigeo: string | null
    Direc: string | null
    Telf1: string | null
    Telf2: string | null
    Fax: string | null
    Correo: string | null
    PWeb: string | null
    Obs: string | null
    CtaCtb: string | null
    DiasCbr: string | null
    PerCbr: string | null
    CtaCte: string | null
    Cd_CGC: string | null
    CA01: string | null
    CA02: string | null
    CA03: string | null
    CA04: string | null
    CA05: string | null
    CA06: string | null
    CA07: string | null
    CA08: string | null
    CA09: string | null
    CA10: string | null
    Cd_Aux: string | null
    Cd_TClt: string | null
    FecReg: Date | null
    UsuCrea: string | null
    FecMdf: Date | null
    UsuMdf: string | null
    NComercial: string | null
    Cd_Vdr: string | null
    SaldoAFavor: Decimal | null
    Msj_Alert: string | null
    EnvioDocVtaAuto: boolean | null
    EnvioDocVtaAdjto: boolean | null
    PassWeb: string | null
    CodEAN: string | null
    C_CD_CC: string | null
    C_FEC_GEN_PASS: Date | null
    C_USU_GEN_PASS: string | null
    C_CORREO_ENV_PASS: string | null
    C_FORMACOBRO: string | null
    C_DIASCOBRO: number | null
    C_FEC_AMPLIACION_LINEA_CRED: Date | null
    C_MOTIVO_AMPLIACION_LINEA_CRED: string | null
    C_CD_CCOSTOS: string | null
    C_CD_SCCOSTOS: string | null
    C_CD_SSCCOSTOS: string | null
    C_DIAS_TOLERANCIA_CREDITO: number | null
    C_FECHA_INGRESO: Date | null
    C_CODIGO_HOMOLOGACION: string | null
    C_IB_MULTIEMPRESA: boolean | null
    C_URBANIZACION: string | null
    C_ESTADO_LINEA_CREDITO: number | null
    IB_AgRet: number | null
    IB_AgPercep: number | null
    IB_BuenContrib: number | null
    EsExtranjero: number | null
    DefinirDiasCredito: number | null
    IB_ConsumidorFinal: number | null
    C_IB_PAGO_DESTINO: number | null
    C_IB_AGENTE: number | null
    Estado: number | null
    C_CONTRASENA_WEB: string | null
  }

  export type Cliente2CountAggregateOutputType = {
    id: number
    RucE: number
    Cd_Clt: number
    Cd_TDI: number
    NDoc: number
    RSocial: number
    ApPat: number
    ApMat: number
    Nom: number
    Cd_Pais: number
    CodPost: number
    Ubigeo: number
    Direc: number
    Telf1: number
    Telf2: number
    Fax: number
    Correo: number
    PWeb: number
    Obs: number
    CtaCtb: number
    DiasCbr: number
    PerCbr: number
    CtaCte: number
    Cd_CGC: number
    CA01: number
    CA02: number
    CA03: number
    CA04: number
    CA05: number
    CA06: number
    CA07: number
    CA08: number
    CA09: number
    CA10: number
    Cd_Aux: number
    Cd_TClt: number
    FecReg: number
    UsuCrea: number
    FecMdf: number
    UsuMdf: number
    NComercial: number
    Cd_Vdr: number
    SaldoAFavor: number
    Msj_Alert: number
    EnvioDocVtaAuto: number
    EnvioDocVtaAdjto: number
    PassWeb: number
    CodEAN: number
    C_CD_CC: number
    C_FEC_GEN_PASS: number
    C_USU_GEN_PASS: number
    C_CORREO_ENV_PASS: number
    C_FORMACOBRO: number
    C_DIASCOBRO: number
    C_FEC_AMPLIACION_LINEA_CRED: number
    C_MOTIVO_AMPLIACION_LINEA_CRED: number
    C_CD_CCOSTOS: number
    C_CD_SCCOSTOS: number
    C_CD_SSCCOSTOS: number
    C_DIAS_TOLERANCIA_CREDITO: number
    C_FECHA_INGRESO: number
    C_CODIGO_HOMOLOGACION: number
    C_IB_MULTIEMPRESA: number
    C_URBANIZACION: number
    C_ESTADO_LINEA_CREDITO: number
    IB_AgRet: number
    IB_AgPercep: number
    IB_BuenContrib: number
    EsExtranjero: number
    DefinirDiasCredito: number
    IB_ConsumidorFinal: number
    C_IB_PAGO_DESTINO: number
    C_IB_AGENTE: number
    Estado: number
    C_CONTRASENA_WEB: number
    _all: number
  }


  export type Cliente2AvgAggregateInputType = {
    id?: true
    SaldoAFavor?: true
    C_DIASCOBRO?: true
    C_DIAS_TOLERANCIA_CREDITO?: true
    C_ESTADO_LINEA_CREDITO?: true
    IB_AgRet?: true
    IB_AgPercep?: true
    IB_BuenContrib?: true
    EsExtranjero?: true
    DefinirDiasCredito?: true
    IB_ConsumidorFinal?: true
    C_IB_PAGO_DESTINO?: true
    C_IB_AGENTE?: true
    Estado?: true
  }

  export type Cliente2SumAggregateInputType = {
    id?: true
    SaldoAFavor?: true
    C_DIASCOBRO?: true
    C_DIAS_TOLERANCIA_CREDITO?: true
    C_ESTADO_LINEA_CREDITO?: true
    IB_AgRet?: true
    IB_AgPercep?: true
    IB_BuenContrib?: true
    EsExtranjero?: true
    DefinirDiasCredito?: true
    IB_ConsumidorFinal?: true
    C_IB_PAGO_DESTINO?: true
    C_IB_AGENTE?: true
    Estado?: true
  }

  export type Cliente2MinAggregateInputType = {
    id?: true
    RucE?: true
    Cd_Clt?: true
    Cd_TDI?: true
    NDoc?: true
    RSocial?: true
    ApPat?: true
    ApMat?: true
    Nom?: true
    Cd_Pais?: true
    CodPost?: true
    Ubigeo?: true
    Direc?: true
    Telf1?: true
    Telf2?: true
    Fax?: true
    Correo?: true
    PWeb?: true
    Obs?: true
    CtaCtb?: true
    DiasCbr?: true
    PerCbr?: true
    CtaCte?: true
    Cd_CGC?: true
    CA01?: true
    CA02?: true
    CA03?: true
    CA04?: true
    CA05?: true
    CA06?: true
    CA07?: true
    CA08?: true
    CA09?: true
    CA10?: true
    Cd_Aux?: true
    Cd_TClt?: true
    FecReg?: true
    UsuCrea?: true
    FecMdf?: true
    UsuMdf?: true
    NComercial?: true
    Cd_Vdr?: true
    SaldoAFavor?: true
    Msj_Alert?: true
    EnvioDocVtaAuto?: true
    EnvioDocVtaAdjto?: true
    PassWeb?: true
    CodEAN?: true
    C_CD_CC?: true
    C_FEC_GEN_PASS?: true
    C_USU_GEN_PASS?: true
    C_CORREO_ENV_PASS?: true
    C_FORMACOBRO?: true
    C_DIASCOBRO?: true
    C_FEC_AMPLIACION_LINEA_CRED?: true
    C_MOTIVO_AMPLIACION_LINEA_CRED?: true
    C_CD_CCOSTOS?: true
    C_CD_SCCOSTOS?: true
    C_CD_SSCCOSTOS?: true
    C_DIAS_TOLERANCIA_CREDITO?: true
    C_FECHA_INGRESO?: true
    C_CODIGO_HOMOLOGACION?: true
    C_IB_MULTIEMPRESA?: true
    C_URBANIZACION?: true
    C_ESTADO_LINEA_CREDITO?: true
    IB_AgRet?: true
    IB_AgPercep?: true
    IB_BuenContrib?: true
    EsExtranjero?: true
    DefinirDiasCredito?: true
    IB_ConsumidorFinal?: true
    C_IB_PAGO_DESTINO?: true
    C_IB_AGENTE?: true
    Estado?: true
    C_CONTRASENA_WEB?: true
  }

  export type Cliente2MaxAggregateInputType = {
    id?: true
    RucE?: true
    Cd_Clt?: true
    Cd_TDI?: true
    NDoc?: true
    RSocial?: true
    ApPat?: true
    ApMat?: true
    Nom?: true
    Cd_Pais?: true
    CodPost?: true
    Ubigeo?: true
    Direc?: true
    Telf1?: true
    Telf2?: true
    Fax?: true
    Correo?: true
    PWeb?: true
    Obs?: true
    CtaCtb?: true
    DiasCbr?: true
    PerCbr?: true
    CtaCte?: true
    Cd_CGC?: true
    CA01?: true
    CA02?: true
    CA03?: true
    CA04?: true
    CA05?: true
    CA06?: true
    CA07?: true
    CA08?: true
    CA09?: true
    CA10?: true
    Cd_Aux?: true
    Cd_TClt?: true
    FecReg?: true
    UsuCrea?: true
    FecMdf?: true
    UsuMdf?: true
    NComercial?: true
    Cd_Vdr?: true
    SaldoAFavor?: true
    Msj_Alert?: true
    EnvioDocVtaAuto?: true
    EnvioDocVtaAdjto?: true
    PassWeb?: true
    CodEAN?: true
    C_CD_CC?: true
    C_FEC_GEN_PASS?: true
    C_USU_GEN_PASS?: true
    C_CORREO_ENV_PASS?: true
    C_FORMACOBRO?: true
    C_DIASCOBRO?: true
    C_FEC_AMPLIACION_LINEA_CRED?: true
    C_MOTIVO_AMPLIACION_LINEA_CRED?: true
    C_CD_CCOSTOS?: true
    C_CD_SCCOSTOS?: true
    C_CD_SSCCOSTOS?: true
    C_DIAS_TOLERANCIA_CREDITO?: true
    C_FECHA_INGRESO?: true
    C_CODIGO_HOMOLOGACION?: true
    C_IB_MULTIEMPRESA?: true
    C_URBANIZACION?: true
    C_ESTADO_LINEA_CREDITO?: true
    IB_AgRet?: true
    IB_AgPercep?: true
    IB_BuenContrib?: true
    EsExtranjero?: true
    DefinirDiasCredito?: true
    IB_ConsumidorFinal?: true
    C_IB_PAGO_DESTINO?: true
    C_IB_AGENTE?: true
    Estado?: true
    C_CONTRASENA_WEB?: true
  }

  export type Cliente2CountAggregateInputType = {
    id?: true
    RucE?: true
    Cd_Clt?: true
    Cd_TDI?: true
    NDoc?: true
    RSocial?: true
    ApPat?: true
    ApMat?: true
    Nom?: true
    Cd_Pais?: true
    CodPost?: true
    Ubigeo?: true
    Direc?: true
    Telf1?: true
    Telf2?: true
    Fax?: true
    Correo?: true
    PWeb?: true
    Obs?: true
    CtaCtb?: true
    DiasCbr?: true
    PerCbr?: true
    CtaCte?: true
    Cd_CGC?: true
    CA01?: true
    CA02?: true
    CA03?: true
    CA04?: true
    CA05?: true
    CA06?: true
    CA07?: true
    CA08?: true
    CA09?: true
    CA10?: true
    Cd_Aux?: true
    Cd_TClt?: true
    FecReg?: true
    UsuCrea?: true
    FecMdf?: true
    UsuMdf?: true
    NComercial?: true
    Cd_Vdr?: true
    SaldoAFavor?: true
    Msj_Alert?: true
    EnvioDocVtaAuto?: true
    EnvioDocVtaAdjto?: true
    PassWeb?: true
    CodEAN?: true
    C_CD_CC?: true
    C_FEC_GEN_PASS?: true
    C_USU_GEN_PASS?: true
    C_CORREO_ENV_PASS?: true
    C_FORMACOBRO?: true
    C_DIASCOBRO?: true
    C_FEC_AMPLIACION_LINEA_CRED?: true
    C_MOTIVO_AMPLIACION_LINEA_CRED?: true
    C_CD_CCOSTOS?: true
    C_CD_SCCOSTOS?: true
    C_CD_SSCCOSTOS?: true
    C_DIAS_TOLERANCIA_CREDITO?: true
    C_FECHA_INGRESO?: true
    C_CODIGO_HOMOLOGACION?: true
    C_IB_MULTIEMPRESA?: true
    C_URBANIZACION?: true
    C_ESTADO_LINEA_CREDITO?: true
    IB_AgRet?: true
    IB_AgPercep?: true
    IB_BuenContrib?: true
    EsExtranjero?: true
    DefinirDiasCredito?: true
    IB_ConsumidorFinal?: true
    C_IB_PAGO_DESTINO?: true
    C_IB_AGENTE?: true
    Estado?: true
    C_CONTRASENA_WEB?: true
    _all?: true
  }

  export type Cliente2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente2 to aggregate.
     */
    where?: Cliente2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cliente2s to fetch.
     */
    orderBy?: Cliente2OrderByWithRelationInput | Cliente2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Cliente2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cliente2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cliente2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cliente2s
    **/
    _count?: true | Cliente2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cliente2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cliente2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cliente2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cliente2MaxAggregateInputType
  }

  export type GetCliente2AggregateType<T extends Cliente2AggregateArgs> = {
        [P in keyof T & keyof AggregateCliente2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente2[P]>
      : GetScalarType<T[P], AggregateCliente2[P]>
  }




  export type Cliente2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Cliente2WhereInput
    orderBy?: Cliente2OrderByWithAggregationInput | Cliente2OrderByWithAggregationInput[]
    by: Cliente2ScalarFieldEnum[] | Cliente2ScalarFieldEnum
    having?: Cliente2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cliente2CountAggregateInputType | true
    _avg?: Cliente2AvgAggregateInputType
    _sum?: Cliente2SumAggregateInputType
    _min?: Cliente2MinAggregateInputType
    _max?: Cliente2MaxAggregateInputType
  }

  export type Cliente2GroupByOutputType = {
    id: number
    RucE: string
    Cd_Clt: string
    Cd_TDI: string
    NDoc: string | null
    RSocial: string | null
    ApPat: string | null
    ApMat: string | null
    Nom: string | null
    Cd_Pais: string | null
    CodPost: string | null
    Ubigeo: string | null
    Direc: string | null
    Telf1: string | null
    Telf2: string | null
    Fax: string | null
    Correo: string | null
    PWeb: string | null
    Obs: string | null
    CtaCtb: string | null
    DiasCbr: string | null
    PerCbr: string | null
    CtaCte: string | null
    Cd_CGC: string | null
    CA01: string | null
    CA02: string | null
    CA03: string | null
    CA04: string | null
    CA05: string | null
    CA06: string | null
    CA07: string | null
    CA08: string | null
    CA09: string | null
    CA10: string | null
    Cd_Aux: string | null
    Cd_TClt: string | null
    FecReg: Date | null
    UsuCrea: string | null
    FecMdf: Date | null
    UsuMdf: string | null
    NComercial: string | null
    Cd_Vdr: string | null
    SaldoAFavor: Decimal | null
    Msj_Alert: string | null
    EnvioDocVtaAuto: boolean | null
    EnvioDocVtaAdjto: boolean | null
    PassWeb: string | null
    CodEAN: string | null
    C_CD_CC: string | null
    C_FEC_GEN_PASS: Date | null
    C_USU_GEN_PASS: string | null
    C_CORREO_ENV_PASS: string | null
    C_FORMACOBRO: string | null
    C_DIASCOBRO: number | null
    C_FEC_AMPLIACION_LINEA_CRED: Date | null
    C_MOTIVO_AMPLIACION_LINEA_CRED: string | null
    C_CD_CCOSTOS: string | null
    C_CD_SCCOSTOS: string | null
    C_CD_SSCCOSTOS: string | null
    C_DIAS_TOLERANCIA_CREDITO: number | null
    C_FECHA_INGRESO: Date | null
    C_CODIGO_HOMOLOGACION: string | null
    C_IB_MULTIEMPRESA: boolean | null
    C_URBANIZACION: string | null
    C_ESTADO_LINEA_CREDITO: number | null
    IB_AgRet: number | null
    IB_AgPercep: number | null
    IB_BuenContrib: number | null
    EsExtranjero: number | null
    DefinirDiasCredito: number | null
    IB_ConsumidorFinal: number | null
    C_IB_PAGO_DESTINO: number | null
    C_IB_AGENTE: number | null
    Estado: number | null
    C_CONTRASENA_WEB: string | null
    _count: Cliente2CountAggregateOutputType | null
    _avg: Cliente2AvgAggregateOutputType | null
    _sum: Cliente2SumAggregateOutputType | null
    _min: Cliente2MinAggregateOutputType | null
    _max: Cliente2MaxAggregateOutputType | null
  }

  type GetCliente2GroupByPayload<T extends Cliente2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cliente2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cliente2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cliente2GroupByOutputType[P]>
            : GetScalarType<T[P], Cliente2GroupByOutputType[P]>
        }
      >
    >


  export type Cliente2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RucE?: boolean
    Cd_Clt?: boolean
    Cd_TDI?: boolean
    NDoc?: boolean
    RSocial?: boolean
    ApPat?: boolean
    ApMat?: boolean
    Nom?: boolean
    Cd_Pais?: boolean
    CodPost?: boolean
    Ubigeo?: boolean
    Direc?: boolean
    Telf1?: boolean
    Telf2?: boolean
    Fax?: boolean
    Correo?: boolean
    PWeb?: boolean
    Obs?: boolean
    CtaCtb?: boolean
    DiasCbr?: boolean
    PerCbr?: boolean
    CtaCte?: boolean
    Cd_CGC?: boolean
    CA01?: boolean
    CA02?: boolean
    CA03?: boolean
    CA04?: boolean
    CA05?: boolean
    CA06?: boolean
    CA07?: boolean
    CA08?: boolean
    CA09?: boolean
    CA10?: boolean
    Cd_Aux?: boolean
    Cd_TClt?: boolean
    FecReg?: boolean
    UsuCrea?: boolean
    FecMdf?: boolean
    UsuMdf?: boolean
    NComercial?: boolean
    Cd_Vdr?: boolean
    SaldoAFavor?: boolean
    Msj_Alert?: boolean
    EnvioDocVtaAuto?: boolean
    EnvioDocVtaAdjto?: boolean
    PassWeb?: boolean
    CodEAN?: boolean
    C_CD_CC?: boolean
    C_FEC_GEN_PASS?: boolean
    C_USU_GEN_PASS?: boolean
    C_CORREO_ENV_PASS?: boolean
    C_FORMACOBRO?: boolean
    C_DIASCOBRO?: boolean
    C_FEC_AMPLIACION_LINEA_CRED?: boolean
    C_MOTIVO_AMPLIACION_LINEA_CRED?: boolean
    C_CD_CCOSTOS?: boolean
    C_CD_SCCOSTOS?: boolean
    C_CD_SSCCOSTOS?: boolean
    C_DIAS_TOLERANCIA_CREDITO?: boolean
    C_FECHA_INGRESO?: boolean
    C_CODIGO_HOMOLOGACION?: boolean
    C_IB_MULTIEMPRESA?: boolean
    C_URBANIZACION?: boolean
    C_ESTADO_LINEA_CREDITO?: boolean
    IB_AgRet?: boolean
    IB_AgPercep?: boolean
    IB_BuenContrib?: boolean
    EsExtranjero?: boolean
    DefinirDiasCredito?: boolean
    IB_ConsumidorFinal?: boolean
    C_IB_PAGO_DESTINO?: boolean
    C_IB_AGENTE?: boolean
    Estado?: boolean
    C_CONTRASENA_WEB?: boolean
  }, ExtArgs["result"]["cliente2"]>

  export type Cliente2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    RucE?: boolean
    Cd_Clt?: boolean
    Cd_TDI?: boolean
    NDoc?: boolean
    RSocial?: boolean
    ApPat?: boolean
    ApMat?: boolean
    Nom?: boolean
    Cd_Pais?: boolean
    CodPost?: boolean
    Ubigeo?: boolean
    Direc?: boolean
    Telf1?: boolean
    Telf2?: boolean
    Fax?: boolean
    Correo?: boolean
    PWeb?: boolean
    Obs?: boolean
    CtaCtb?: boolean
    DiasCbr?: boolean
    PerCbr?: boolean
    CtaCte?: boolean
    Cd_CGC?: boolean
    CA01?: boolean
    CA02?: boolean
    CA03?: boolean
    CA04?: boolean
    CA05?: boolean
    CA06?: boolean
    CA07?: boolean
    CA08?: boolean
    CA09?: boolean
    CA10?: boolean
    Cd_Aux?: boolean
    Cd_TClt?: boolean
    FecReg?: boolean
    UsuCrea?: boolean
    FecMdf?: boolean
    UsuMdf?: boolean
    NComercial?: boolean
    Cd_Vdr?: boolean
    SaldoAFavor?: boolean
    Msj_Alert?: boolean
    EnvioDocVtaAuto?: boolean
    EnvioDocVtaAdjto?: boolean
    PassWeb?: boolean
    CodEAN?: boolean
    C_CD_CC?: boolean
    C_FEC_GEN_PASS?: boolean
    C_USU_GEN_PASS?: boolean
    C_CORREO_ENV_PASS?: boolean
    C_FORMACOBRO?: boolean
    C_DIASCOBRO?: boolean
    C_FEC_AMPLIACION_LINEA_CRED?: boolean
    C_MOTIVO_AMPLIACION_LINEA_CRED?: boolean
    C_CD_CCOSTOS?: boolean
    C_CD_SCCOSTOS?: boolean
    C_CD_SSCCOSTOS?: boolean
    C_DIAS_TOLERANCIA_CREDITO?: boolean
    C_FECHA_INGRESO?: boolean
    C_CODIGO_HOMOLOGACION?: boolean
    C_IB_MULTIEMPRESA?: boolean
    C_URBANIZACION?: boolean
    C_ESTADO_LINEA_CREDITO?: boolean
    IB_AgRet?: boolean
    IB_AgPercep?: boolean
    IB_BuenContrib?: boolean
    EsExtranjero?: boolean
    DefinirDiasCredito?: boolean
    IB_ConsumidorFinal?: boolean
    C_IB_PAGO_DESTINO?: boolean
    C_IB_AGENTE?: boolean
    Estado?: boolean
    C_CONTRASENA_WEB?: boolean
  }, ExtArgs["result"]["cliente2"]>

  export type Cliente2SelectScalar = {
    id?: boolean
    RucE?: boolean
    Cd_Clt?: boolean
    Cd_TDI?: boolean
    NDoc?: boolean
    RSocial?: boolean
    ApPat?: boolean
    ApMat?: boolean
    Nom?: boolean
    Cd_Pais?: boolean
    CodPost?: boolean
    Ubigeo?: boolean
    Direc?: boolean
    Telf1?: boolean
    Telf2?: boolean
    Fax?: boolean
    Correo?: boolean
    PWeb?: boolean
    Obs?: boolean
    CtaCtb?: boolean
    DiasCbr?: boolean
    PerCbr?: boolean
    CtaCte?: boolean
    Cd_CGC?: boolean
    CA01?: boolean
    CA02?: boolean
    CA03?: boolean
    CA04?: boolean
    CA05?: boolean
    CA06?: boolean
    CA07?: boolean
    CA08?: boolean
    CA09?: boolean
    CA10?: boolean
    Cd_Aux?: boolean
    Cd_TClt?: boolean
    FecReg?: boolean
    UsuCrea?: boolean
    FecMdf?: boolean
    UsuMdf?: boolean
    NComercial?: boolean
    Cd_Vdr?: boolean
    SaldoAFavor?: boolean
    Msj_Alert?: boolean
    EnvioDocVtaAuto?: boolean
    EnvioDocVtaAdjto?: boolean
    PassWeb?: boolean
    CodEAN?: boolean
    C_CD_CC?: boolean
    C_FEC_GEN_PASS?: boolean
    C_USU_GEN_PASS?: boolean
    C_CORREO_ENV_PASS?: boolean
    C_FORMACOBRO?: boolean
    C_DIASCOBRO?: boolean
    C_FEC_AMPLIACION_LINEA_CRED?: boolean
    C_MOTIVO_AMPLIACION_LINEA_CRED?: boolean
    C_CD_CCOSTOS?: boolean
    C_CD_SCCOSTOS?: boolean
    C_CD_SSCCOSTOS?: boolean
    C_DIAS_TOLERANCIA_CREDITO?: boolean
    C_FECHA_INGRESO?: boolean
    C_CODIGO_HOMOLOGACION?: boolean
    C_IB_MULTIEMPRESA?: boolean
    C_URBANIZACION?: boolean
    C_ESTADO_LINEA_CREDITO?: boolean
    IB_AgRet?: boolean
    IB_AgPercep?: boolean
    IB_BuenContrib?: boolean
    EsExtranjero?: boolean
    DefinirDiasCredito?: boolean
    IB_ConsumidorFinal?: boolean
    C_IB_PAGO_DESTINO?: boolean
    C_IB_AGENTE?: boolean
    Estado?: boolean
    C_CONTRASENA_WEB?: boolean
  }


  export type $Cliente2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      RucE: string
      Cd_Clt: string
      Cd_TDI: string
      NDoc: string | null
      RSocial: string | null
      ApPat: string | null
      ApMat: string | null
      Nom: string | null
      Cd_Pais: string | null
      CodPost: string | null
      Ubigeo: string | null
      Direc: string | null
      Telf1: string | null
      Telf2: string | null
      Fax: string | null
      Correo: string | null
      PWeb: string | null
      Obs: string | null
      CtaCtb: string | null
      DiasCbr: string | null
      PerCbr: string | null
      CtaCte: string | null
      Cd_CGC: string | null
      CA01: string | null
      CA02: string | null
      CA03: string | null
      CA04: string | null
      CA05: string | null
      CA06: string | null
      CA07: string | null
      CA08: string | null
      CA09: string | null
      CA10: string | null
      Cd_Aux: string | null
      Cd_TClt: string | null
      FecReg: Date | null
      UsuCrea: string | null
      FecMdf: Date | null
      UsuMdf: string | null
      NComercial: string | null
      Cd_Vdr: string | null
      SaldoAFavor: Prisma.Decimal | null
      Msj_Alert: string | null
      EnvioDocVtaAuto: boolean | null
      EnvioDocVtaAdjto: boolean | null
      PassWeb: string | null
      CodEAN: string | null
      C_CD_CC: string | null
      C_FEC_GEN_PASS: Date | null
      C_USU_GEN_PASS: string | null
      C_CORREO_ENV_PASS: string | null
      C_FORMACOBRO: string | null
      C_DIASCOBRO: number | null
      C_FEC_AMPLIACION_LINEA_CRED: Date | null
      C_MOTIVO_AMPLIACION_LINEA_CRED: string | null
      C_CD_CCOSTOS: string | null
      C_CD_SCCOSTOS: string | null
      C_CD_SSCCOSTOS: string | null
      C_DIAS_TOLERANCIA_CREDITO: number | null
      C_FECHA_INGRESO: Date | null
      C_CODIGO_HOMOLOGACION: string | null
      C_IB_MULTIEMPRESA: boolean | null
      C_URBANIZACION: string | null
      C_ESTADO_LINEA_CREDITO: number | null
      IB_AgRet: number | null
      IB_AgPercep: number | null
      IB_BuenContrib: number | null
      EsExtranjero: number | null
      DefinirDiasCredito: number | null
      IB_ConsumidorFinal: number | null
      C_IB_PAGO_DESTINO: number | null
      C_IB_AGENTE: number | null
      Estado: number | null
      C_CONTRASENA_WEB: string | null
    }, ExtArgs["result"]["cliente2"]>
    composites: {}
  }

  type Cliente2GetPayload<S extends boolean | null | undefined | Cliente2DefaultArgs> = $Result.GetResult<Prisma.$Cliente2Payload, S>

  type Cliente2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Cliente2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Cliente2CountAggregateInputType | true
    }

  export interface Cliente2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente2'], meta: { name: 'Cliente2' } }
    /**
     * Find zero or one Cliente2 that matches the filter.
     * @param {Cliente2FindUniqueArgs} args - Arguments to find a Cliente2
     * @example
     * // Get one Cliente2
     * const cliente2 = await prisma.cliente2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Cliente2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Cliente2FindUniqueArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cliente2 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Cliente2FindUniqueOrThrowArgs} args - Arguments to find a Cliente2
     * @example
     * // Get one Cliente2
     * const cliente2 = await prisma.cliente2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Cliente2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cliente2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2FindFirstArgs} args - Arguments to find a Cliente2
     * @example
     * // Get one Cliente2
     * const cliente2 = await prisma.cliente2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Cliente2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2FindFirstArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cliente2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2FindFirstOrThrowArgs} args - Arguments to find a Cliente2
     * @example
     * // Get one Cliente2
     * const cliente2 = await prisma.cliente2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Cliente2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cliente2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cliente2s
     * const cliente2s = await prisma.cliente2.findMany()
     * 
     * // Get first 10 Cliente2s
     * const cliente2s = await prisma.cliente2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cliente2WithIdOnly = await prisma.cliente2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Cliente2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cliente2.
     * @param {Cliente2CreateArgs} args - Arguments to create a Cliente2.
     * @example
     * // Create one Cliente2
     * const Cliente2 = await prisma.cliente2.create({
     *   data: {
     *     // ... data to create a Cliente2
     *   }
     * })
     * 
    **/
    create<T extends Cliente2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, Cliente2CreateArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cliente2s.
     * @param {Cliente2CreateManyArgs} args - Arguments to create many Cliente2s.
     * @example
     * // Create many Cliente2s
     * const cliente2 = await prisma.cliente2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends Cliente2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cliente2s and returns the data saved in the database.
     * @param {Cliente2CreateManyAndReturnArgs} args - Arguments to create many Cliente2s.
     * @example
     * // Create many Cliente2s
     * const cliente2 = await prisma.cliente2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cliente2s and only return the `id`
     * const cliente2WithIdOnly = await prisma.cliente2.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends Cliente2CreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2CreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Cliente2.
     * @param {Cliente2DeleteArgs} args - Arguments to delete one Cliente2.
     * @example
     * // Delete one Cliente2
     * const Cliente2 = await prisma.cliente2.delete({
     *   where: {
     *     // ... filter to delete one Cliente2
     *   }
     * })
     * 
    **/
    delete<T extends Cliente2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Cliente2DeleteArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cliente2.
     * @param {Cliente2UpdateArgs} args - Arguments to update one Cliente2.
     * @example
     * // Update one Cliente2
     * const cliente2 = await prisma.cliente2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Cliente2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Cliente2UpdateArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cliente2s.
     * @param {Cliente2DeleteManyArgs} args - Arguments to filter Cliente2s to delete.
     * @example
     * // Delete a few Cliente2s
     * const { count } = await prisma.cliente2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Cliente2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Cliente2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cliente2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cliente2s
     * const cliente2 = await prisma.cliente2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Cliente2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Cliente2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente2.
     * @param {Cliente2UpsertArgs} args - Arguments to update or create a Cliente2.
     * @example
     * // Update or create a Cliente2
     * const cliente2 = await prisma.cliente2.upsert({
     *   create: {
     *     // ... data to create a Cliente2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente2 we want to update
     *   }
     * })
    **/
    upsert<T extends Cliente2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Cliente2UpsertArgs<ExtArgs>>
    ): Prisma__Cliente2Client<$Result.GetResult<Prisma.$Cliente2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cliente2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2CountArgs} args - Arguments to filter Cliente2s to count.
     * @example
     * // Count the number of Cliente2s
     * const count = await prisma.cliente2.count({
     *   where: {
     *     // ... the filter for the Cliente2s we want to count
     *   }
     * })
    **/
    count<T extends Cliente2CountArgs>(
      args?: Subset<T, Cliente2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cliente2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cliente2AggregateArgs>(args: Subset<T, Cliente2AggregateArgs>): Prisma.PrismaPromise<GetCliente2AggregateType<T>>

    /**
     * Group by Cliente2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cliente2GroupByArgs} args - Group by arguments.
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
      T extends Cliente2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Cliente2GroupByArgs['orderBy'] }
        : { orderBy?: Cliente2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Cliente2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCliente2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente2 model
   */
  readonly fields: Cliente2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Cliente2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cliente2 model
   */ 
  interface Cliente2FieldRefs {
    readonly id: FieldRef<"Cliente2", 'Int'>
    readonly RucE: FieldRef<"Cliente2", 'String'>
    readonly Cd_Clt: FieldRef<"Cliente2", 'String'>
    readonly Cd_TDI: FieldRef<"Cliente2", 'String'>
    readonly NDoc: FieldRef<"Cliente2", 'String'>
    readonly RSocial: FieldRef<"Cliente2", 'String'>
    readonly ApPat: FieldRef<"Cliente2", 'String'>
    readonly ApMat: FieldRef<"Cliente2", 'String'>
    readonly Nom: FieldRef<"Cliente2", 'String'>
    readonly Cd_Pais: FieldRef<"Cliente2", 'String'>
    readonly CodPost: FieldRef<"Cliente2", 'String'>
    readonly Ubigeo: FieldRef<"Cliente2", 'String'>
    readonly Direc: FieldRef<"Cliente2", 'String'>
    readonly Telf1: FieldRef<"Cliente2", 'String'>
    readonly Telf2: FieldRef<"Cliente2", 'String'>
    readonly Fax: FieldRef<"Cliente2", 'String'>
    readonly Correo: FieldRef<"Cliente2", 'String'>
    readonly PWeb: FieldRef<"Cliente2", 'String'>
    readonly Obs: FieldRef<"Cliente2", 'String'>
    readonly CtaCtb: FieldRef<"Cliente2", 'String'>
    readonly DiasCbr: FieldRef<"Cliente2", 'String'>
    readonly PerCbr: FieldRef<"Cliente2", 'String'>
    readonly CtaCte: FieldRef<"Cliente2", 'String'>
    readonly Cd_CGC: FieldRef<"Cliente2", 'String'>
    readonly CA01: FieldRef<"Cliente2", 'String'>
    readonly CA02: FieldRef<"Cliente2", 'String'>
    readonly CA03: FieldRef<"Cliente2", 'String'>
    readonly CA04: FieldRef<"Cliente2", 'String'>
    readonly CA05: FieldRef<"Cliente2", 'String'>
    readonly CA06: FieldRef<"Cliente2", 'String'>
    readonly CA07: FieldRef<"Cliente2", 'String'>
    readonly CA08: FieldRef<"Cliente2", 'String'>
    readonly CA09: FieldRef<"Cliente2", 'String'>
    readonly CA10: FieldRef<"Cliente2", 'String'>
    readonly Cd_Aux: FieldRef<"Cliente2", 'String'>
    readonly Cd_TClt: FieldRef<"Cliente2", 'String'>
    readonly FecReg: FieldRef<"Cliente2", 'DateTime'>
    readonly UsuCrea: FieldRef<"Cliente2", 'String'>
    readonly FecMdf: FieldRef<"Cliente2", 'DateTime'>
    readonly UsuMdf: FieldRef<"Cliente2", 'String'>
    readonly NComercial: FieldRef<"Cliente2", 'String'>
    readonly Cd_Vdr: FieldRef<"Cliente2", 'String'>
    readonly SaldoAFavor: FieldRef<"Cliente2", 'Decimal'>
    readonly Msj_Alert: FieldRef<"Cliente2", 'String'>
    readonly EnvioDocVtaAuto: FieldRef<"Cliente2", 'Boolean'>
    readonly EnvioDocVtaAdjto: FieldRef<"Cliente2", 'Boolean'>
    readonly PassWeb: FieldRef<"Cliente2", 'String'>
    readonly CodEAN: FieldRef<"Cliente2", 'String'>
    readonly C_CD_CC: FieldRef<"Cliente2", 'String'>
    readonly C_FEC_GEN_PASS: FieldRef<"Cliente2", 'DateTime'>
    readonly C_USU_GEN_PASS: FieldRef<"Cliente2", 'String'>
    readonly C_CORREO_ENV_PASS: FieldRef<"Cliente2", 'String'>
    readonly C_FORMACOBRO: FieldRef<"Cliente2", 'String'>
    readonly C_DIASCOBRO: FieldRef<"Cliente2", 'Int'>
    readonly C_FEC_AMPLIACION_LINEA_CRED: FieldRef<"Cliente2", 'DateTime'>
    readonly C_MOTIVO_AMPLIACION_LINEA_CRED: FieldRef<"Cliente2", 'String'>
    readonly C_CD_CCOSTOS: FieldRef<"Cliente2", 'String'>
    readonly C_CD_SCCOSTOS: FieldRef<"Cliente2", 'String'>
    readonly C_CD_SSCCOSTOS: FieldRef<"Cliente2", 'String'>
    readonly C_DIAS_TOLERANCIA_CREDITO: FieldRef<"Cliente2", 'Int'>
    readonly C_FECHA_INGRESO: FieldRef<"Cliente2", 'DateTime'>
    readonly C_CODIGO_HOMOLOGACION: FieldRef<"Cliente2", 'String'>
    readonly C_IB_MULTIEMPRESA: FieldRef<"Cliente2", 'Boolean'>
    readonly C_URBANIZACION: FieldRef<"Cliente2", 'String'>
    readonly C_ESTADO_LINEA_CREDITO: FieldRef<"Cliente2", 'Int'>
    readonly IB_AgRet: FieldRef<"Cliente2", 'Int'>
    readonly IB_AgPercep: FieldRef<"Cliente2", 'Int'>
    readonly IB_BuenContrib: FieldRef<"Cliente2", 'Int'>
    readonly EsExtranjero: FieldRef<"Cliente2", 'Int'>
    readonly DefinirDiasCredito: FieldRef<"Cliente2", 'Int'>
    readonly IB_ConsumidorFinal: FieldRef<"Cliente2", 'Int'>
    readonly C_IB_PAGO_DESTINO: FieldRef<"Cliente2", 'Int'>
    readonly C_IB_AGENTE: FieldRef<"Cliente2", 'Int'>
    readonly Estado: FieldRef<"Cliente2", 'Int'>
    readonly C_CONTRASENA_WEB: FieldRef<"Cliente2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente2 findUnique
   */
  export type Cliente2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * Filter, which Cliente2 to fetch.
     */
    where: Cliente2WhereUniqueInput
  }

  /**
   * Cliente2 findUniqueOrThrow
   */
  export type Cliente2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * Filter, which Cliente2 to fetch.
     */
    where: Cliente2WhereUniqueInput
  }

  /**
   * Cliente2 findFirst
   */
  export type Cliente2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * Filter, which Cliente2 to fetch.
     */
    where?: Cliente2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cliente2s to fetch.
     */
    orderBy?: Cliente2OrderByWithRelationInput | Cliente2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cliente2s.
     */
    cursor?: Cliente2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cliente2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cliente2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cliente2s.
     */
    distinct?: Cliente2ScalarFieldEnum | Cliente2ScalarFieldEnum[]
  }

  /**
   * Cliente2 findFirstOrThrow
   */
  export type Cliente2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * Filter, which Cliente2 to fetch.
     */
    where?: Cliente2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cliente2s to fetch.
     */
    orderBy?: Cliente2OrderByWithRelationInput | Cliente2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cliente2s.
     */
    cursor?: Cliente2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cliente2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cliente2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cliente2s.
     */
    distinct?: Cliente2ScalarFieldEnum | Cliente2ScalarFieldEnum[]
  }

  /**
   * Cliente2 findMany
   */
  export type Cliente2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * Filter, which Cliente2s to fetch.
     */
    where?: Cliente2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cliente2s to fetch.
     */
    orderBy?: Cliente2OrderByWithRelationInput | Cliente2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cliente2s.
     */
    cursor?: Cliente2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cliente2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cliente2s.
     */
    skip?: number
    distinct?: Cliente2ScalarFieldEnum | Cliente2ScalarFieldEnum[]
  }

  /**
   * Cliente2 create
   */
  export type Cliente2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * The data needed to create a Cliente2.
     */
    data: XOR<Cliente2CreateInput, Cliente2UncheckedCreateInput>
  }

  /**
   * Cliente2 createMany
   */
  export type Cliente2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cliente2s.
     */
    data: Cliente2CreateManyInput | Cliente2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente2 createManyAndReturn
   */
  export type Cliente2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cliente2s.
     */
    data: Cliente2CreateManyInput | Cliente2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente2 update
   */
  export type Cliente2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * The data needed to update a Cliente2.
     */
    data: XOR<Cliente2UpdateInput, Cliente2UncheckedUpdateInput>
    /**
     * Choose, which Cliente2 to update.
     */
    where: Cliente2WhereUniqueInput
  }

  /**
   * Cliente2 updateMany
   */
  export type Cliente2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cliente2s.
     */
    data: XOR<Cliente2UpdateManyMutationInput, Cliente2UncheckedUpdateManyInput>
    /**
     * Filter which Cliente2s to update
     */
    where?: Cliente2WhereInput
  }

  /**
   * Cliente2 upsert
   */
  export type Cliente2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * The filter to search for the Cliente2 to update in case it exists.
     */
    where: Cliente2WhereUniqueInput
    /**
     * In case the Cliente2 found by the `where` argument doesn't exist, create a new Cliente2 with this data.
     */
    create: XOR<Cliente2CreateInput, Cliente2UncheckedCreateInput>
    /**
     * In case the Cliente2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Cliente2UpdateInput, Cliente2UncheckedUpdateInput>
  }

  /**
   * Cliente2 delete
   */
  export type Cliente2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
    /**
     * Filter which Cliente2 to delete.
     */
    where: Cliente2WhereUniqueInput
  }

  /**
   * Cliente2 deleteMany
   */
  export type Cliente2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente2s to delete
     */
    where?: Cliente2WhereInput
  }

  /**
   * Cliente2 without action
   */
  export type Cliente2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente2
     */
    select?: Cliente2Select<ExtArgs> | null
  }


  /**
   * Model ManualSearch
   */

  export type AggregateManualSearch = {
    _count: ManualSearchCountAggregateOutputType | null
    _avg: ManualSearchAvgAggregateOutputType | null
    _sum: ManualSearchSumAggregateOutputType | null
    _min: ManualSearchMinAggregateOutputType | null
    _max: ManualSearchMaxAggregateOutputType | null
  }

  export type ManualSearchAvgAggregateOutputType = {
    id: number | null
  }

  export type ManualSearchSumAggregateOutputType = {
    id: number | null
  }

  export type ManualSearchMinAggregateOutputType = {
    id: number | null
    C_ID: string | null
    dateConsulted: Date | null
    status: $Enums.ManualSearchStatus | null
  }

  export type ManualSearchMaxAggregateOutputType = {
    id: number | null
    C_ID: string | null
    dateConsulted: Date | null
    status: $Enums.ManualSearchStatus | null
  }

  export type ManualSearchCountAggregateOutputType = {
    id: number
    C_ID: number
    dateConsulted: number
    status: number
    _all: number
  }


  export type ManualSearchAvgAggregateInputType = {
    id?: true
  }

  export type ManualSearchSumAggregateInputType = {
    id?: true
  }

  export type ManualSearchMinAggregateInputType = {
    id?: true
    C_ID?: true
    dateConsulted?: true
    status?: true
  }

  export type ManualSearchMaxAggregateInputType = {
    id?: true
    C_ID?: true
    dateConsulted?: true
    status?: true
  }

  export type ManualSearchCountAggregateInputType = {
    id?: true
    C_ID?: true
    dateConsulted?: true
    status?: true
    _all?: true
  }

  export type ManualSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManualSearch to aggregate.
     */
    where?: ManualSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualSearches to fetch.
     */
    orderBy?: ManualSearchOrderByWithRelationInput | ManualSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManualSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManualSearches
    **/
    _count?: true | ManualSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManualSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManualSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManualSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManualSearchMaxAggregateInputType
  }

  export type GetManualSearchAggregateType<T extends ManualSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateManualSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManualSearch[P]>
      : GetScalarType<T[P], AggregateManualSearch[P]>
  }




  export type ManualSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualSearchWhereInput
    orderBy?: ManualSearchOrderByWithAggregationInput | ManualSearchOrderByWithAggregationInput[]
    by: ManualSearchScalarFieldEnum[] | ManualSearchScalarFieldEnum
    having?: ManualSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManualSearchCountAggregateInputType | true
    _avg?: ManualSearchAvgAggregateInputType
    _sum?: ManualSearchSumAggregateInputType
    _min?: ManualSearchMinAggregateInputType
    _max?: ManualSearchMaxAggregateInputType
  }

  export type ManualSearchGroupByOutputType = {
    id: number
    C_ID: string
    dateConsulted: Date
    status: $Enums.ManualSearchStatus
    _count: ManualSearchCountAggregateOutputType | null
    _avg: ManualSearchAvgAggregateOutputType | null
    _sum: ManualSearchSumAggregateOutputType | null
    _min: ManualSearchMinAggregateOutputType | null
    _max: ManualSearchMaxAggregateOutputType | null
  }

  type GetManualSearchGroupByPayload<T extends ManualSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManualSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManualSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManualSearchGroupByOutputType[P]>
            : GetScalarType<T[P], ManualSearchGroupByOutputType[P]>
        }
      >
    >


  export type ManualSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_ID?: boolean
    dateConsulted?: boolean
    status?: boolean
  }, ExtArgs["result"]["manualSearch"]>

  export type ManualSearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    C_ID?: boolean
    dateConsulted?: boolean
    status?: boolean
  }, ExtArgs["result"]["manualSearch"]>

  export type ManualSearchSelectScalar = {
    id?: boolean
    C_ID?: boolean
    dateConsulted?: boolean
    status?: boolean
  }


  export type $ManualSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManualSearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      C_ID: string
      dateConsulted: Date
      status: $Enums.ManualSearchStatus
    }, ExtArgs["result"]["manualSearch"]>
    composites: {}
  }

  type ManualSearchGetPayload<S extends boolean | null | undefined | ManualSearchDefaultArgs> = $Result.GetResult<Prisma.$ManualSearchPayload, S>

  type ManualSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManualSearchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ManualSearchCountAggregateInputType | true
    }

  export interface ManualSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManualSearch'], meta: { name: 'ManualSearch' } }
    /**
     * Find zero or one ManualSearch that matches the filter.
     * @param {ManualSearchFindUniqueArgs} args - Arguments to find a ManualSearch
     * @example
     * // Get one ManualSearch
     * const manualSearch = await prisma.manualSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManualSearchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManualSearchFindUniqueArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ManualSearch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ManualSearchFindUniqueOrThrowArgs} args - Arguments to find a ManualSearch
     * @example
     * // Get one ManualSearch
     * const manualSearch = await prisma.manualSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManualSearchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ManualSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchFindFirstArgs} args - Arguments to find a ManualSearch
     * @example
     * // Get one ManualSearch
     * const manualSearch = await prisma.manualSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManualSearchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchFindFirstArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ManualSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchFindFirstOrThrowArgs} args - Arguments to find a ManualSearch
     * @example
     * // Get one ManualSearch
     * const manualSearch = await prisma.manualSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManualSearchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ManualSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManualSearches
     * const manualSearches = await prisma.manualSearch.findMany()
     * 
     * // Get first 10 ManualSearches
     * const manualSearches = await prisma.manualSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manualSearchWithIdOnly = await prisma.manualSearch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ManualSearchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ManualSearch.
     * @param {ManualSearchCreateArgs} args - Arguments to create a ManualSearch.
     * @example
     * // Create one ManualSearch
     * const ManualSearch = await prisma.manualSearch.create({
     *   data: {
     *     // ... data to create a ManualSearch
     *   }
     * })
     * 
    **/
    create<T extends ManualSearchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManualSearchCreateArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ManualSearches.
     * @param {ManualSearchCreateManyArgs} args - Arguments to create many ManualSearches.
     * @example
     * // Create many ManualSearches
     * const manualSearch = await prisma.manualSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ManualSearchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManualSearches and returns the data saved in the database.
     * @param {ManualSearchCreateManyAndReturnArgs} args - Arguments to create many ManualSearches.
     * @example
     * // Create many ManualSearches
     * const manualSearch = await prisma.manualSearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManualSearches and only return the `id`
     * const manualSearchWithIdOnly = await prisma.manualSearch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ManualSearchCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ManualSearch.
     * @param {ManualSearchDeleteArgs} args - Arguments to delete one ManualSearch.
     * @example
     * // Delete one ManualSearch
     * const ManualSearch = await prisma.manualSearch.delete({
     *   where: {
     *     // ... filter to delete one ManualSearch
     *   }
     * })
     * 
    **/
    delete<T extends ManualSearchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManualSearchDeleteArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ManualSearch.
     * @param {ManualSearchUpdateArgs} args - Arguments to update one ManualSearch.
     * @example
     * // Update one ManualSearch
     * const manualSearch = await prisma.manualSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManualSearchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManualSearchUpdateArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ManualSearches.
     * @param {ManualSearchDeleteManyArgs} args - Arguments to filter ManualSearches to delete.
     * @example
     * // Delete a few ManualSearches
     * const { count } = await prisma.manualSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManualSearchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManualSearchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManualSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManualSearches
     * const manualSearch = await prisma.manualSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManualSearchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManualSearchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManualSearch.
     * @param {ManualSearchUpsertArgs} args - Arguments to update or create a ManualSearch.
     * @example
     * // Update or create a ManualSearch
     * const manualSearch = await prisma.manualSearch.upsert({
     *   create: {
     *     // ... data to create a ManualSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManualSearch we want to update
     *   }
     * })
    **/
    upsert<T extends ManualSearchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManualSearchUpsertArgs<ExtArgs>>
    ): Prisma__ManualSearchClient<$Result.GetResult<Prisma.$ManualSearchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ManualSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchCountArgs} args - Arguments to filter ManualSearches to count.
     * @example
     * // Count the number of ManualSearches
     * const count = await prisma.manualSearch.count({
     *   where: {
     *     // ... the filter for the ManualSearches we want to count
     *   }
     * })
    **/
    count<T extends ManualSearchCountArgs>(
      args?: Subset<T, ManualSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManualSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManualSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManualSearchAggregateArgs>(args: Subset<T, ManualSearchAggregateArgs>): Prisma.PrismaPromise<GetManualSearchAggregateType<T>>

    /**
     * Group by ManualSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualSearchGroupByArgs} args - Group by arguments.
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
      T extends ManualSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManualSearchGroupByArgs['orderBy'] }
        : { orderBy?: ManualSearchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManualSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManualSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManualSearch model
   */
  readonly fields: ManualSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManualSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManualSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ManualSearch model
   */ 
  interface ManualSearchFieldRefs {
    readonly id: FieldRef<"ManualSearch", 'Int'>
    readonly C_ID: FieldRef<"ManualSearch", 'String'>
    readonly dateConsulted: FieldRef<"ManualSearch", 'DateTime'>
    readonly status: FieldRef<"ManualSearch", 'ManualSearchStatus'>
  }
    

  // Custom InputTypes
  /**
   * ManualSearch findUnique
   */
  export type ManualSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * Filter, which ManualSearch to fetch.
     */
    where: ManualSearchWhereUniqueInput
  }

  /**
   * ManualSearch findUniqueOrThrow
   */
  export type ManualSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * Filter, which ManualSearch to fetch.
     */
    where: ManualSearchWhereUniqueInput
  }

  /**
   * ManualSearch findFirst
   */
  export type ManualSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * Filter, which ManualSearch to fetch.
     */
    where?: ManualSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualSearches to fetch.
     */
    orderBy?: ManualSearchOrderByWithRelationInput | ManualSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManualSearches.
     */
    cursor?: ManualSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManualSearches.
     */
    distinct?: ManualSearchScalarFieldEnum | ManualSearchScalarFieldEnum[]
  }

  /**
   * ManualSearch findFirstOrThrow
   */
  export type ManualSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * Filter, which ManualSearch to fetch.
     */
    where?: ManualSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualSearches to fetch.
     */
    orderBy?: ManualSearchOrderByWithRelationInput | ManualSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManualSearches.
     */
    cursor?: ManualSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManualSearches.
     */
    distinct?: ManualSearchScalarFieldEnum | ManualSearchScalarFieldEnum[]
  }

  /**
   * ManualSearch findMany
   */
  export type ManualSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * Filter, which ManualSearches to fetch.
     */
    where?: ManualSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualSearches to fetch.
     */
    orderBy?: ManualSearchOrderByWithRelationInput | ManualSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManualSearches.
     */
    cursor?: ManualSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualSearches.
     */
    skip?: number
    distinct?: ManualSearchScalarFieldEnum | ManualSearchScalarFieldEnum[]
  }

  /**
   * ManualSearch create
   */
  export type ManualSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * The data needed to create a ManualSearch.
     */
    data: XOR<ManualSearchCreateInput, ManualSearchUncheckedCreateInput>
  }

  /**
   * ManualSearch createMany
   */
  export type ManualSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManualSearches.
     */
    data: ManualSearchCreateManyInput | ManualSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManualSearch createManyAndReturn
   */
  export type ManualSearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ManualSearches.
     */
    data: ManualSearchCreateManyInput | ManualSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManualSearch update
   */
  export type ManualSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * The data needed to update a ManualSearch.
     */
    data: XOR<ManualSearchUpdateInput, ManualSearchUncheckedUpdateInput>
    /**
     * Choose, which ManualSearch to update.
     */
    where: ManualSearchWhereUniqueInput
  }

  /**
   * ManualSearch updateMany
   */
  export type ManualSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManualSearches.
     */
    data: XOR<ManualSearchUpdateManyMutationInput, ManualSearchUncheckedUpdateManyInput>
    /**
     * Filter which ManualSearches to update
     */
    where?: ManualSearchWhereInput
  }

  /**
   * ManualSearch upsert
   */
  export type ManualSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * The filter to search for the ManualSearch to update in case it exists.
     */
    where: ManualSearchWhereUniqueInput
    /**
     * In case the ManualSearch found by the `where` argument doesn't exist, create a new ManualSearch with this data.
     */
    create: XOR<ManualSearchCreateInput, ManualSearchUncheckedCreateInput>
    /**
     * In case the ManualSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManualSearchUpdateInput, ManualSearchUncheckedUpdateInput>
  }

  /**
   * ManualSearch delete
   */
  export type ManualSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
    /**
     * Filter which ManualSearch to delete.
     */
    where: ManualSearchWhereUniqueInput
  }

  /**
   * ManualSearch deleteMany
   */
  export type ManualSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManualSearches to delete
     */
    where?: ManualSearchWhereInput
  }

  /**
   * ManualSearch without action
   */
  export type ManualSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualSearch
     */
    select?: ManualSearchSelect<ExtArgs> | null
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


  export const PatientScalarFieldEnum: {
    id: 'id',
    sequence: 'sequence',
    firstName: 'firstName',
    lastName: 'lastName',
    dni: 'dni',
    age: 'age',
    sex: 'sex',
    createdAt: 'createdAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const AttentionScalarFieldEnum: {
    id: 'id',
    sequence: 'sequence',
    patientId: 'patientId',
    ticketId: 'ticketId'
  };

  export type AttentionScalarFieldEnum = (typeof AttentionScalarFieldEnum)[keyof typeof AttentionScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    cidDetail: 'cidDetail',
    cidItem: 'cidItem',
    ccodProdServItem: 'ccodProdServItem',
    cdescriptItem: 'cdescriptItem',
    cindicadoPsItem: 'cindicadoPsItem',
    cvalorVentaUnitaria: 'cvalorVentaUnitaria',
    cprecioVentaUnitarioItem: 'cprecioVentaUnitarioItem',
    ccantidadItem: 'ccantidadItem',
    cValorItem: 'cValorItem',
    cigvTotalItem: 'cigvTotalItem',
    ctotalItem: 'ctotalItem',
    ccodSunatProdServItem: 'ccodSunatProdServItem',
    ccodComercialProdServ: 'ccodComercialProdServ',
    cid: 'cid',
    cfecEd: 'cfecEd',
    ctipDocEmisor: 'ctipDocEmisor',
    capaminoRazonSocialEmisor: 'capaminoRazonSocialEmisor',
    cubigeoEmisor: 'cubigeoEmisor',
    cdireccionEmisor: 'cdireccionEmisor',
    cdepartamentoEmisor: 'cdepartamentoEmisor',
    cprovinciaEmisor: 'cprovinciaEmisor',
    cdistritoEmisor: 'cdistritoEmisor',
    cnombreComercialEmisor: 'cnombreComercialEmisor',
    cTipDoc: 'cTipDoc',
    cnroSerie: 'cnroSerie',
    cnroDoc: 'cnroDoc',
    cinfoDocAdquiriente: 'cinfoDocAdquiriente',
    ctipDocAdquiriente: 'ctipDocAdquiriente',
    capaminoRazonSocialAdquiriente: 'capaminoRazonSocialAdquiriente',
    cmoneda: 'cmoneda',
    ctotalOperacionesGrav: 'ctotalOperacionesGrav',
    cmontoTotalIgv: 'cmontoTotalIgv',
    cmontoTotalPagar: 'cmontoTotalPagar',
    cmontoTotalPercep: 'cmontoTotalPercep',
    cleyenda: 'cleyenda',
    cfecCreaFace: 'cfecCreaFace',
    ccodigoBarras: 'ccodigoBarras',
    ccodigpQr: 'ccodigpQr',
    isValidated: 'isValidated',
    validatesDate: 'validatesDate',
    valitadedBy: 'valitadedBy'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TestTicketScalarFieldEnum: {
    id: 'id',
    jsonString: 'jsonString'
  };

  export type TestTicketScalarFieldEnum = (typeof TestTicketScalarFieldEnum)[keyof typeof TestTicketScalarFieldEnum]


  export const TicketInfoScalarFieldEnum: {
    id: 'id',
    C_ID: 'C_ID',
    C_FEC_ED: 'C_FEC_ED',
    C_TIP_DOC_EMISOR: 'C_TIP_DOC_EMISOR',
    C_APAMNO_RAZON_SOCIAL_EMISOR: 'C_APAMNO_RAZON_SOCIAL_EMISOR',
    C_UBIGEO_EMISOR: 'C_UBIGEO_EMISOR',
    C_DIRECCION_EMISOR: 'C_DIRECCION_EMISOR',
    C_DEPARTAMENTO_EMISOR: 'C_DEPARTAMENTO_EMISOR',
    C_PROVINCIA_EMISOR: 'C_PROVINCIA_EMISOR',
    C_DISTRITO_EMISOR: 'C_DISTRITO_EMISOR',
    C_NOMBRE_COMERCIAL_EMISOR: 'C_NOMBRE_COMERCIAL_EMISOR',
    C_TIP_DOC: 'C_TIP_DOC',
    C_NRO_SERIE: 'C_NRO_SERIE',
    C_NRO_DOC: 'C_NRO_DOC',
    C_NRO_DOC_ADQUIRIENTE: 'C_NRO_DOC_ADQUIRIENTE',
    C_MONEDA: 'C_MONEDA',
    C_MONTO_TOTAL_IGV: 'C_MONTO_TOTAL_IGV',
    C_MONTO_PAGAR: 'C_MONTO_PAGAR',
    C_MONTO_TOTAL_PERCEP: 'C_MONTO_TOTAL_PERCEP',
    C_LEYENDA: 'C_LEYENDA',
    C_FEC_CREA_FACE: 'C_FEC_CREA_FACE',
    C_RUCE: 'C_RUCE',
    C_TIP_DOC_ADQUIRIENTE: 'C_TIP_DOC_ADQUIRIENTE',
    C_TOTAL_OPERACIONES_GRAV: 'C_TOTAL_OPERACIONES_GRAV',
    isValidated: 'isValidated',
    valitadedBy: 'valitadedBy',
    validatedDate: 'validatedDate',
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: 'C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE',
    services: 'services'
  };

  export type TicketInfoScalarFieldEnum = (typeof TicketInfoScalarFieldEnum)[keyof typeof TicketInfoScalarFieldEnum]


  export const TicketInfoDetailScalarFieldEnum: {
    id: 'id',
    C_ID: 'C_ID',
    C_DESCRIP_ITEM: 'C_DESCRIP_ITEM',
    C_VALOR_VENTA_UNITARIA: 'C_VALOR_VENTA_UNITARIA',
    C_CANTIDAD_ITEM: 'C_CANTIDAD_ITEM',
    C_IGV_TOTAL_ITEM: 'C_IGV_TOTAL_ITEM',
    C_COD_SUNAT_PROD_SERV_ITEM: 'C_COD_SUNAT_PROD_SERV_ITEM',
    C_ID_ITEM: 'C_ID_ITEM',
    C_COD_COMERCIAL_PROD_SERV: 'C_COD_COMERCIAL_PROD_SERV',
    C_COD_PROD_SERV_ITEM: 'C_COD_PROD_SERV_ITEM',
    C_INDICADOR_PS_ITEM: 'C_INDICADOR_PS_ITEM',
    C_PRECIO_VENTA_UNITARIO_ITEM: 'C_PRECIO_VENTA_UNITARIO_ITEM',
    C_TOTAL_ITEM: 'C_TOTAL_ITEM',
    C_VALOR_ITEM: 'C_VALOR_ITEM'
  };

  export type TicketInfoDetailScalarFieldEnum = (typeof TicketInfoDetailScalarFieldEnum)[keyof typeof TicketInfoDetailScalarFieldEnum]


  export const Service2ScalarFieldEnum: {
    id: 'id',
    RucE: 'RucE',
    Cd_Srv: 'Cd_Srv',
    CodCo: 'CodCo',
    Nombre: 'Nombre',
    Descrip: 'Descrip',
    Cta1: 'Cta1',
    Cta2: 'Cta2',
    Img: 'Img',
    Cd_GS: 'Cd_GS',
    Cd_CGP: 'Cd_CGP',
    Cd_CC: 'Cd_CC',
    Cd_SC: 'Cd_SC',
    Cd_SS: 'Cd_SS',
    IC_TipServ: 'IC_TipServ',
    UsuCrea: 'UsuCrea',
    UsuMdf: 'UsuMdf',
    FecReg: 'FecReg',
    FecMdf: 'FecMdf',
    CA01: 'CA01',
    CA02: 'CA02',
    CA03: 'CA03',
    CA04: 'CA04',
    CA05: 'CA05',
    CA06: 'CA06',
    CA07: 'CA07',
    CA08: 'CA08',
    CA09: 'CA09',
    CA10: 'CA10',
    Cta3: 'Cta3',
    Cta4: 'Cta4',
    Cta5: 'Cta5',
    Cta6: 'Cta6',
    Cta7: 'Cta7',
    Cta8: 'Cta8',
    Cta9: 'Cta9',
    Cta10: 'Cta10',
    Cta11: 'Cta11',
    Cta12: 'Cta12',
    C_CD_SRV_INAFECTO: 'C_CD_SRV_INAFECTO',
    C_CD_SRV_AFECTO: 'C_CD_SRV_AFECTO',
    C_COD_BBSS: 'C_COD_BBSS',
    C_CD_SERV_ADICIONAL: 'C_CD_SERV_ADICIONAL',
    C_PORCENTAJE_AFECTADO: 'C_PORCENTAJE_AFECTADO',
    C_CODIGO_HOMOLOGACION: 'C_CODIGO_HOMOLOGACION',
    C_IB_MULTIEMPRESA: 'C_IB_MULTIEMPRESA',
    NCorto: 'NCorto',
    Estado: 'Estado',
    IB_LF: 'IB_LF',
    IB_ActivoFijo: 'IB_ActivoFijo',
    C_IB_LC: 'C_IB_LC',
    C_IB_SOBRE_TASA: 'C_IB_SOBRE_TASA',
    C_IB_ES_OBLIGATORIO: 'C_IB_ES_OBLIGATORIO',
    C_IB_INCLUYE_IGV: 'C_IB_INCLUYE_IGV',
    C_IB_CRM: 'C_IB_CRM'
  };

  export type Service2ScalarFieldEnum = (typeof Service2ScalarFieldEnum)[keyof typeof Service2ScalarFieldEnum]


  export const Cliente2ScalarFieldEnum: {
    id: 'id',
    RucE: 'RucE',
    Cd_Clt: 'Cd_Clt',
    Cd_TDI: 'Cd_TDI',
    NDoc: 'NDoc',
    RSocial: 'RSocial',
    ApPat: 'ApPat',
    ApMat: 'ApMat',
    Nom: 'Nom',
    Cd_Pais: 'Cd_Pais',
    CodPost: 'CodPost',
    Ubigeo: 'Ubigeo',
    Direc: 'Direc',
    Telf1: 'Telf1',
    Telf2: 'Telf2',
    Fax: 'Fax',
    Correo: 'Correo',
    PWeb: 'PWeb',
    Obs: 'Obs',
    CtaCtb: 'CtaCtb',
    DiasCbr: 'DiasCbr',
    PerCbr: 'PerCbr',
    CtaCte: 'CtaCte',
    Cd_CGC: 'Cd_CGC',
    CA01: 'CA01',
    CA02: 'CA02',
    CA03: 'CA03',
    CA04: 'CA04',
    CA05: 'CA05',
    CA06: 'CA06',
    CA07: 'CA07',
    CA08: 'CA08',
    CA09: 'CA09',
    CA10: 'CA10',
    Cd_Aux: 'Cd_Aux',
    Cd_TClt: 'Cd_TClt',
    FecReg: 'FecReg',
    UsuCrea: 'UsuCrea',
    FecMdf: 'FecMdf',
    UsuMdf: 'UsuMdf',
    NComercial: 'NComercial',
    Cd_Vdr: 'Cd_Vdr',
    SaldoAFavor: 'SaldoAFavor',
    Msj_Alert: 'Msj_Alert',
    EnvioDocVtaAuto: 'EnvioDocVtaAuto',
    EnvioDocVtaAdjto: 'EnvioDocVtaAdjto',
    PassWeb: 'PassWeb',
    CodEAN: 'CodEAN',
    C_CD_CC: 'C_CD_CC',
    C_FEC_GEN_PASS: 'C_FEC_GEN_PASS',
    C_USU_GEN_PASS: 'C_USU_GEN_PASS',
    C_CORREO_ENV_PASS: 'C_CORREO_ENV_PASS',
    C_FORMACOBRO: 'C_FORMACOBRO',
    C_DIASCOBRO: 'C_DIASCOBRO',
    C_FEC_AMPLIACION_LINEA_CRED: 'C_FEC_AMPLIACION_LINEA_CRED',
    C_MOTIVO_AMPLIACION_LINEA_CRED: 'C_MOTIVO_AMPLIACION_LINEA_CRED',
    C_CD_CCOSTOS: 'C_CD_CCOSTOS',
    C_CD_SCCOSTOS: 'C_CD_SCCOSTOS',
    C_CD_SSCCOSTOS: 'C_CD_SSCCOSTOS',
    C_DIAS_TOLERANCIA_CREDITO: 'C_DIAS_TOLERANCIA_CREDITO',
    C_FECHA_INGRESO: 'C_FECHA_INGRESO',
    C_CODIGO_HOMOLOGACION: 'C_CODIGO_HOMOLOGACION',
    C_IB_MULTIEMPRESA: 'C_IB_MULTIEMPRESA',
    C_URBANIZACION: 'C_URBANIZACION',
    C_ESTADO_LINEA_CREDITO: 'C_ESTADO_LINEA_CREDITO',
    IB_AgRet: 'IB_AgRet',
    IB_AgPercep: 'IB_AgPercep',
    IB_BuenContrib: 'IB_BuenContrib',
    EsExtranjero: 'EsExtranjero',
    DefinirDiasCredito: 'DefinirDiasCredito',
    IB_ConsumidorFinal: 'IB_ConsumidorFinal',
    C_IB_PAGO_DESTINO: 'C_IB_PAGO_DESTINO',
    C_IB_AGENTE: 'C_IB_AGENTE',
    Estado: 'Estado',
    C_CONTRASENA_WEB: 'C_CONTRASENA_WEB'
  };

  export type Cliente2ScalarFieldEnum = (typeof Cliente2ScalarFieldEnum)[keyof typeof Cliente2ScalarFieldEnum]


  export const ManualSearchScalarFieldEnum: {
    id: 'id',
    C_ID: 'C_ID',
    dateConsulted: 'dateConsulted',
    status: 'status'
  };

  export type ManualSearchScalarFieldEnum = (typeof ManualSearchScalarFieldEnum)[keyof typeof ManualSearchScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ManualSearchStatus'
   */
  export type EnumManualSearchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManualSearchStatus'>
    


  /**
   * Reference to a field of type 'ManualSearchStatus[]'
   */
  export type ListEnumManualSearchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManualSearchStatus[]'>
    


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


  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    sequence?: IntFilter<"Patient"> | number
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    sex?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    attentions?: AttentionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    sequence?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    attentions?: AttentionOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    sequence?: IntFilter<"Patient"> | number
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    sex?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    attentions?: AttentionListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    sequence?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    sequence?: IntWithAggregatesFilter<"Patient"> | number
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    dni?: StringWithAggregatesFilter<"Patient"> | string
    age?: IntWithAggregatesFilter<"Patient"> | number
    sex?: StringWithAggregatesFilter<"Patient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type AttentionWhereInput = {
    AND?: AttentionWhereInput | AttentionWhereInput[]
    OR?: AttentionWhereInput[]
    NOT?: AttentionWhereInput | AttentionWhereInput[]
    id?: StringFilter<"Attention"> | string
    sequence?: IntFilter<"Attention"> | number
    patientId?: StringFilter<"Attention"> | string
    ticketId?: IntFilter<"Attention"> | number
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type AttentionOrderByWithRelationInput = {
    id?: SortOrder
    sequence?: SortOrder
    patientId?: SortOrder
    ticketId?: SortOrder
    patient?: PatientOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type AttentionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketId?: number
    AND?: AttentionWhereInput | AttentionWhereInput[]
    OR?: AttentionWhereInput[]
    NOT?: AttentionWhereInput | AttentionWhereInput[]
    sequence?: IntFilter<"Attention"> | number
    patientId?: StringFilter<"Attention"> | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id" | "ticketId">

  export type AttentionOrderByWithAggregationInput = {
    id?: SortOrder
    sequence?: SortOrder
    patientId?: SortOrder
    ticketId?: SortOrder
    _count?: AttentionCountOrderByAggregateInput
    _avg?: AttentionAvgOrderByAggregateInput
    _max?: AttentionMaxOrderByAggregateInput
    _min?: AttentionMinOrderByAggregateInput
    _sum?: AttentionSumOrderByAggregateInput
  }

  export type AttentionScalarWhereWithAggregatesInput = {
    AND?: AttentionScalarWhereWithAggregatesInput | AttentionScalarWhereWithAggregatesInput[]
    OR?: AttentionScalarWhereWithAggregatesInput[]
    NOT?: AttentionScalarWhereWithAggregatesInput | AttentionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attention"> | string
    sequence?: IntWithAggregatesFilter<"Attention"> | number
    patientId?: StringWithAggregatesFilter<"Attention"> | string
    ticketId?: IntWithAggregatesFilter<"Attention"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    cidDetail?: StringFilter<"Ticket"> | string
    cidItem?: StringFilter<"Ticket"> | string
    ccodProdServItem?: StringFilter<"Ticket"> | string
    cdescriptItem?: StringFilter<"Ticket"> | string
    cindicadoPsItem?: StringFilter<"Ticket"> | string
    cvalorVentaUnitaria?: StringFilter<"Ticket"> | string
    cprecioVentaUnitarioItem?: StringFilter<"Ticket"> | string
    ccantidadItem?: StringFilter<"Ticket"> | string
    cValorItem?: StringFilter<"Ticket"> | string
    cigvTotalItem?: StringFilter<"Ticket"> | string
    ctotalItem?: StringFilter<"Ticket"> | string
    ccodSunatProdServItem?: StringFilter<"Ticket"> | string
    ccodComercialProdServ?: StringFilter<"Ticket"> | string
    cid?: StringFilter<"Ticket"> | string
    cfecEd?: StringFilter<"Ticket"> | string
    ctipDocEmisor?: StringFilter<"Ticket"> | string
    capaminoRazonSocialEmisor?: StringFilter<"Ticket"> | string
    cubigeoEmisor?: StringFilter<"Ticket"> | string
    cdireccionEmisor?: StringFilter<"Ticket"> | string
    cdepartamentoEmisor?: StringFilter<"Ticket"> | string
    cprovinciaEmisor?: StringFilter<"Ticket"> | string
    cdistritoEmisor?: StringFilter<"Ticket"> | string
    cnombreComercialEmisor?: StringFilter<"Ticket"> | string
    cTipDoc?: StringFilter<"Ticket"> | string
    cnroSerie?: StringFilter<"Ticket"> | string
    cnroDoc?: StringFilter<"Ticket"> | string
    cinfoDocAdquiriente?: StringFilter<"Ticket"> | string
    ctipDocAdquiriente?: StringFilter<"Ticket"> | string
    capaminoRazonSocialAdquiriente?: StringFilter<"Ticket"> | string
    cmoneda?: StringFilter<"Ticket"> | string
    ctotalOperacionesGrav?: StringFilter<"Ticket"> | string
    cmontoTotalIgv?: StringFilter<"Ticket"> | string
    cmontoTotalPagar?: StringFilter<"Ticket"> | string
    cmontoTotalPercep?: StringFilter<"Ticket"> | string
    cleyenda?: StringFilter<"Ticket"> | string
    cfecCreaFace?: StringFilter<"Ticket"> | string
    ccodigoBarras?: StringFilter<"Ticket"> | string
    ccodigpQr?: StringFilter<"Ticket"> | string
    isValidated?: BoolNullableFilter<"Ticket"> | boolean | null
    validatesDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    valitadedBy?: StringNullableFilter<"Ticket"> | string | null
    attention?: XOR<AttentionNullableRelationFilter, AttentionWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    cidDetail?: SortOrder
    cidItem?: SortOrder
    ccodProdServItem?: SortOrder
    cdescriptItem?: SortOrder
    cindicadoPsItem?: SortOrder
    cvalorVentaUnitaria?: SortOrder
    cprecioVentaUnitarioItem?: SortOrder
    ccantidadItem?: SortOrder
    cValorItem?: SortOrder
    cigvTotalItem?: SortOrder
    ctotalItem?: SortOrder
    ccodSunatProdServItem?: SortOrder
    ccodComercialProdServ?: SortOrder
    cid?: SortOrder
    cfecEd?: SortOrder
    ctipDocEmisor?: SortOrder
    capaminoRazonSocialEmisor?: SortOrder
    cubigeoEmisor?: SortOrder
    cdireccionEmisor?: SortOrder
    cdepartamentoEmisor?: SortOrder
    cprovinciaEmisor?: SortOrder
    cdistritoEmisor?: SortOrder
    cnombreComercialEmisor?: SortOrder
    cTipDoc?: SortOrder
    cnroSerie?: SortOrder
    cnroDoc?: SortOrder
    cinfoDocAdquiriente?: SortOrder
    ctipDocAdquiriente?: SortOrder
    capaminoRazonSocialAdquiriente?: SortOrder
    cmoneda?: SortOrder
    ctotalOperacionesGrav?: SortOrder
    cmontoTotalIgv?: SortOrder
    cmontoTotalPagar?: SortOrder
    cmontoTotalPercep?: SortOrder
    cleyenda?: SortOrder
    cfecCreaFace?: SortOrder
    ccodigoBarras?: SortOrder
    ccodigpQr?: SortOrder
    isValidated?: SortOrderInput | SortOrder
    validatesDate?: SortOrderInput | SortOrder
    valitadedBy?: SortOrderInput | SortOrder
    attention?: AttentionOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    cidDetail?: StringFilter<"Ticket"> | string
    cidItem?: StringFilter<"Ticket"> | string
    ccodProdServItem?: StringFilter<"Ticket"> | string
    cdescriptItem?: StringFilter<"Ticket"> | string
    cindicadoPsItem?: StringFilter<"Ticket"> | string
    cvalorVentaUnitaria?: StringFilter<"Ticket"> | string
    cprecioVentaUnitarioItem?: StringFilter<"Ticket"> | string
    ccantidadItem?: StringFilter<"Ticket"> | string
    cValorItem?: StringFilter<"Ticket"> | string
    cigvTotalItem?: StringFilter<"Ticket"> | string
    ctotalItem?: StringFilter<"Ticket"> | string
    ccodSunatProdServItem?: StringFilter<"Ticket"> | string
    ccodComercialProdServ?: StringFilter<"Ticket"> | string
    cid?: StringFilter<"Ticket"> | string
    cfecEd?: StringFilter<"Ticket"> | string
    ctipDocEmisor?: StringFilter<"Ticket"> | string
    capaminoRazonSocialEmisor?: StringFilter<"Ticket"> | string
    cubigeoEmisor?: StringFilter<"Ticket"> | string
    cdireccionEmisor?: StringFilter<"Ticket"> | string
    cdepartamentoEmisor?: StringFilter<"Ticket"> | string
    cprovinciaEmisor?: StringFilter<"Ticket"> | string
    cdistritoEmisor?: StringFilter<"Ticket"> | string
    cnombreComercialEmisor?: StringFilter<"Ticket"> | string
    cTipDoc?: StringFilter<"Ticket"> | string
    cnroSerie?: StringFilter<"Ticket"> | string
    cnroDoc?: StringFilter<"Ticket"> | string
    cinfoDocAdquiriente?: StringFilter<"Ticket"> | string
    ctipDocAdquiriente?: StringFilter<"Ticket"> | string
    capaminoRazonSocialAdquiriente?: StringFilter<"Ticket"> | string
    cmoneda?: StringFilter<"Ticket"> | string
    ctotalOperacionesGrav?: StringFilter<"Ticket"> | string
    cmontoTotalIgv?: StringFilter<"Ticket"> | string
    cmontoTotalPagar?: StringFilter<"Ticket"> | string
    cmontoTotalPercep?: StringFilter<"Ticket"> | string
    cleyenda?: StringFilter<"Ticket"> | string
    cfecCreaFace?: StringFilter<"Ticket"> | string
    ccodigoBarras?: StringFilter<"Ticket"> | string
    ccodigpQr?: StringFilter<"Ticket"> | string
    isValidated?: BoolNullableFilter<"Ticket"> | boolean | null
    validatesDate?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    valitadedBy?: StringNullableFilter<"Ticket"> | string | null
    attention?: XOR<AttentionNullableRelationFilter, AttentionWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    cidDetail?: SortOrder
    cidItem?: SortOrder
    ccodProdServItem?: SortOrder
    cdescriptItem?: SortOrder
    cindicadoPsItem?: SortOrder
    cvalorVentaUnitaria?: SortOrder
    cprecioVentaUnitarioItem?: SortOrder
    ccantidadItem?: SortOrder
    cValorItem?: SortOrder
    cigvTotalItem?: SortOrder
    ctotalItem?: SortOrder
    ccodSunatProdServItem?: SortOrder
    ccodComercialProdServ?: SortOrder
    cid?: SortOrder
    cfecEd?: SortOrder
    ctipDocEmisor?: SortOrder
    capaminoRazonSocialEmisor?: SortOrder
    cubigeoEmisor?: SortOrder
    cdireccionEmisor?: SortOrder
    cdepartamentoEmisor?: SortOrder
    cprovinciaEmisor?: SortOrder
    cdistritoEmisor?: SortOrder
    cnombreComercialEmisor?: SortOrder
    cTipDoc?: SortOrder
    cnroSerie?: SortOrder
    cnroDoc?: SortOrder
    cinfoDocAdquiriente?: SortOrder
    ctipDocAdquiriente?: SortOrder
    capaminoRazonSocialAdquiriente?: SortOrder
    cmoneda?: SortOrder
    ctotalOperacionesGrav?: SortOrder
    cmontoTotalIgv?: SortOrder
    cmontoTotalPagar?: SortOrder
    cmontoTotalPercep?: SortOrder
    cleyenda?: SortOrder
    cfecCreaFace?: SortOrder
    ccodigoBarras?: SortOrder
    ccodigpQr?: SortOrder
    isValidated?: SortOrderInput | SortOrder
    validatesDate?: SortOrderInput | SortOrder
    valitadedBy?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    cidDetail?: StringWithAggregatesFilter<"Ticket"> | string
    cidItem?: StringWithAggregatesFilter<"Ticket"> | string
    ccodProdServItem?: StringWithAggregatesFilter<"Ticket"> | string
    cdescriptItem?: StringWithAggregatesFilter<"Ticket"> | string
    cindicadoPsItem?: StringWithAggregatesFilter<"Ticket"> | string
    cvalorVentaUnitaria?: StringWithAggregatesFilter<"Ticket"> | string
    cprecioVentaUnitarioItem?: StringWithAggregatesFilter<"Ticket"> | string
    ccantidadItem?: StringWithAggregatesFilter<"Ticket"> | string
    cValorItem?: StringWithAggregatesFilter<"Ticket"> | string
    cigvTotalItem?: StringWithAggregatesFilter<"Ticket"> | string
    ctotalItem?: StringWithAggregatesFilter<"Ticket"> | string
    ccodSunatProdServItem?: StringWithAggregatesFilter<"Ticket"> | string
    ccodComercialProdServ?: StringWithAggregatesFilter<"Ticket"> | string
    cid?: StringWithAggregatesFilter<"Ticket"> | string
    cfecEd?: StringWithAggregatesFilter<"Ticket"> | string
    ctipDocEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    capaminoRazonSocialEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cubigeoEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cdireccionEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cdepartamentoEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cprovinciaEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cdistritoEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cnombreComercialEmisor?: StringWithAggregatesFilter<"Ticket"> | string
    cTipDoc?: StringWithAggregatesFilter<"Ticket"> | string
    cnroSerie?: StringWithAggregatesFilter<"Ticket"> | string
    cnroDoc?: StringWithAggregatesFilter<"Ticket"> | string
    cinfoDocAdquiriente?: StringWithAggregatesFilter<"Ticket"> | string
    ctipDocAdquiriente?: StringWithAggregatesFilter<"Ticket"> | string
    capaminoRazonSocialAdquiriente?: StringWithAggregatesFilter<"Ticket"> | string
    cmoneda?: StringWithAggregatesFilter<"Ticket"> | string
    ctotalOperacionesGrav?: StringWithAggregatesFilter<"Ticket"> | string
    cmontoTotalIgv?: StringWithAggregatesFilter<"Ticket"> | string
    cmontoTotalPagar?: StringWithAggregatesFilter<"Ticket"> | string
    cmontoTotalPercep?: StringWithAggregatesFilter<"Ticket"> | string
    cleyenda?: StringWithAggregatesFilter<"Ticket"> | string
    cfecCreaFace?: StringWithAggregatesFilter<"Ticket"> | string
    ccodigoBarras?: StringWithAggregatesFilter<"Ticket"> | string
    ccodigpQr?: StringWithAggregatesFilter<"Ticket"> | string
    isValidated?: BoolNullableWithAggregatesFilter<"Ticket"> | boolean | null
    validatesDate?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    valitadedBy?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
  }

  export type TestTicketWhereInput = {
    AND?: TestTicketWhereInput | TestTicketWhereInput[]
    OR?: TestTicketWhereInput[]
    NOT?: TestTicketWhereInput | TestTicketWhereInput[]
    id?: IntFilter<"TestTicket"> | number
    jsonString?: StringFilter<"TestTicket"> | string
  }

  export type TestTicketOrderByWithRelationInput = {
    id?: SortOrder
    jsonString?: SortOrder
  }

  export type TestTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestTicketWhereInput | TestTicketWhereInput[]
    OR?: TestTicketWhereInput[]
    NOT?: TestTicketWhereInput | TestTicketWhereInput[]
    jsonString?: StringFilter<"TestTicket"> | string
  }, "id">

  export type TestTicketOrderByWithAggregationInput = {
    id?: SortOrder
    jsonString?: SortOrder
    _count?: TestTicketCountOrderByAggregateInput
    _avg?: TestTicketAvgOrderByAggregateInput
    _max?: TestTicketMaxOrderByAggregateInput
    _min?: TestTicketMinOrderByAggregateInput
    _sum?: TestTicketSumOrderByAggregateInput
  }

  export type TestTicketScalarWhereWithAggregatesInput = {
    AND?: TestTicketScalarWhereWithAggregatesInput | TestTicketScalarWhereWithAggregatesInput[]
    OR?: TestTicketScalarWhereWithAggregatesInput[]
    NOT?: TestTicketScalarWhereWithAggregatesInput | TestTicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestTicket"> | number
    jsonString?: StringWithAggregatesFilter<"TestTicket"> | string
  }

  export type TicketInfoWhereInput = {
    AND?: TicketInfoWhereInput | TicketInfoWhereInput[]
    OR?: TicketInfoWhereInput[]
    NOT?: TicketInfoWhereInput | TicketInfoWhereInput[]
    id?: IntFilter<"TicketInfo"> | number
    C_ID?: IntFilter<"TicketInfo"> | number
    C_FEC_ED?: DateTimeFilter<"TicketInfo"> | Date | string
    C_TIP_DOC_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringFilter<"TicketInfo"> | string
    C_UBIGEO_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_DIRECCION_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_DEPARTAMENTO_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_PROVINCIA_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_DISTRITO_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_TIP_DOC?: StringNullableFilter<"TicketInfo"> | string | null
    C_NRO_SERIE?: StringFilter<"TicketInfo"> | string
    C_NRO_DOC?: StringFilter<"TicketInfo"> | string
    C_NRO_DOC_ADQUIRIENTE?: StringNullableFilter<"TicketInfo"> | string | null
    C_MONEDA?: StringFilter<"TicketInfo"> | string
    C_MONTO_TOTAL_IGV?: IntFilter<"TicketInfo"> | number
    C_MONTO_PAGAR?: IntFilter<"TicketInfo"> | number
    C_MONTO_TOTAL_PERCEP?: IntNullableFilter<"TicketInfo"> | number | null
    C_LEYENDA?: StringNullableFilter<"TicketInfo"> | string | null
    C_FEC_CREA_FACE?: DateTimeFilter<"TicketInfo"> | Date | string
    C_RUCE?: StringFilter<"TicketInfo"> | string
    C_TIP_DOC_ADQUIRIENTE?: StringNullableFilter<"TicketInfo"> | string | null
    C_TOTAL_OPERACIONES_GRAV?: IntNullableFilter<"TicketInfo"> | number | null
    isValidated?: BoolNullableFilter<"TicketInfo"> | boolean | null
    valitadedBy?: StringNullableFilter<"TicketInfo"> | string | null
    validatedDate?: DateTimeNullableFilter<"TicketInfo"> | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: StringNullableFilter<"TicketInfo"> | string | null
    services?: StringNullableListFilter<"TicketInfo">
  }

  export type TicketInfoOrderByWithRelationInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_FEC_ED?: SortOrder
    C_TIP_DOC_EMISOR?: SortOrderInput | SortOrder
    C_APAMNO_RAZON_SOCIAL_EMISOR?: SortOrder
    C_UBIGEO_EMISOR?: SortOrderInput | SortOrder
    C_DIRECCION_EMISOR?: SortOrderInput | SortOrder
    C_DEPARTAMENTO_EMISOR?: SortOrderInput | SortOrder
    C_PROVINCIA_EMISOR?: SortOrderInput | SortOrder
    C_DISTRITO_EMISOR?: SortOrderInput | SortOrder
    C_NOMBRE_COMERCIAL_EMISOR?: SortOrderInput | SortOrder
    C_TIP_DOC?: SortOrderInput | SortOrder
    C_NRO_SERIE?: SortOrder
    C_NRO_DOC?: SortOrder
    C_NRO_DOC_ADQUIRIENTE?: SortOrderInput | SortOrder
    C_MONEDA?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrderInput | SortOrder
    C_LEYENDA?: SortOrderInput | SortOrder
    C_FEC_CREA_FACE?: SortOrder
    C_RUCE?: SortOrder
    C_TIP_DOC_ADQUIRIENTE?: SortOrderInput | SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrderInput | SortOrder
    isValidated?: SortOrderInput | SortOrder
    valitadedBy?: SortOrderInput | SortOrder
    validatedDate?: SortOrderInput | SortOrder
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: SortOrderInput | SortOrder
    services?: SortOrder
  }

  export type TicketInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    C_ID?: number
    AND?: TicketInfoWhereInput | TicketInfoWhereInput[]
    OR?: TicketInfoWhereInput[]
    NOT?: TicketInfoWhereInput | TicketInfoWhereInput[]
    C_FEC_ED?: DateTimeFilter<"TicketInfo"> | Date | string
    C_TIP_DOC_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringFilter<"TicketInfo"> | string
    C_UBIGEO_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_DIRECCION_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_DEPARTAMENTO_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_PROVINCIA_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_DISTRITO_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: StringNullableFilter<"TicketInfo"> | string | null
    C_TIP_DOC?: StringNullableFilter<"TicketInfo"> | string | null
    C_NRO_SERIE?: StringFilter<"TicketInfo"> | string
    C_NRO_DOC?: StringFilter<"TicketInfo"> | string
    C_NRO_DOC_ADQUIRIENTE?: StringNullableFilter<"TicketInfo"> | string | null
    C_MONEDA?: StringFilter<"TicketInfo"> | string
    C_MONTO_TOTAL_IGV?: IntFilter<"TicketInfo"> | number
    C_MONTO_PAGAR?: IntFilter<"TicketInfo"> | number
    C_MONTO_TOTAL_PERCEP?: IntNullableFilter<"TicketInfo"> | number | null
    C_LEYENDA?: StringNullableFilter<"TicketInfo"> | string | null
    C_FEC_CREA_FACE?: DateTimeFilter<"TicketInfo"> | Date | string
    C_RUCE?: StringFilter<"TicketInfo"> | string
    C_TIP_DOC_ADQUIRIENTE?: StringNullableFilter<"TicketInfo"> | string | null
    C_TOTAL_OPERACIONES_GRAV?: IntNullableFilter<"TicketInfo"> | number | null
    isValidated?: BoolNullableFilter<"TicketInfo"> | boolean | null
    valitadedBy?: StringNullableFilter<"TicketInfo"> | string | null
    validatedDate?: DateTimeNullableFilter<"TicketInfo"> | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: StringNullableFilter<"TicketInfo"> | string | null
    services?: StringNullableListFilter<"TicketInfo">
  }, "id" | "C_ID">

  export type TicketInfoOrderByWithAggregationInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_FEC_ED?: SortOrder
    C_TIP_DOC_EMISOR?: SortOrderInput | SortOrder
    C_APAMNO_RAZON_SOCIAL_EMISOR?: SortOrder
    C_UBIGEO_EMISOR?: SortOrderInput | SortOrder
    C_DIRECCION_EMISOR?: SortOrderInput | SortOrder
    C_DEPARTAMENTO_EMISOR?: SortOrderInput | SortOrder
    C_PROVINCIA_EMISOR?: SortOrderInput | SortOrder
    C_DISTRITO_EMISOR?: SortOrderInput | SortOrder
    C_NOMBRE_COMERCIAL_EMISOR?: SortOrderInput | SortOrder
    C_TIP_DOC?: SortOrderInput | SortOrder
    C_NRO_SERIE?: SortOrder
    C_NRO_DOC?: SortOrder
    C_NRO_DOC_ADQUIRIENTE?: SortOrderInput | SortOrder
    C_MONEDA?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrderInput | SortOrder
    C_LEYENDA?: SortOrderInput | SortOrder
    C_FEC_CREA_FACE?: SortOrder
    C_RUCE?: SortOrder
    C_TIP_DOC_ADQUIRIENTE?: SortOrderInput | SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrderInput | SortOrder
    isValidated?: SortOrderInput | SortOrder
    valitadedBy?: SortOrderInput | SortOrder
    validatedDate?: SortOrderInput | SortOrder
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: SortOrderInput | SortOrder
    services?: SortOrder
    _count?: TicketInfoCountOrderByAggregateInput
    _avg?: TicketInfoAvgOrderByAggregateInput
    _max?: TicketInfoMaxOrderByAggregateInput
    _min?: TicketInfoMinOrderByAggregateInput
    _sum?: TicketInfoSumOrderByAggregateInput
  }

  export type TicketInfoScalarWhereWithAggregatesInput = {
    AND?: TicketInfoScalarWhereWithAggregatesInput | TicketInfoScalarWhereWithAggregatesInput[]
    OR?: TicketInfoScalarWhereWithAggregatesInput[]
    NOT?: TicketInfoScalarWhereWithAggregatesInput | TicketInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketInfo"> | number
    C_ID?: IntWithAggregatesFilter<"TicketInfo"> | number
    C_FEC_ED?: DateTimeWithAggregatesFilter<"TicketInfo"> | Date | string
    C_TIP_DOC_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringWithAggregatesFilter<"TicketInfo"> | string
    C_UBIGEO_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_DIRECCION_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_DEPARTAMENTO_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_PROVINCIA_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_DISTRITO_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_TIP_DOC?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_NRO_SERIE?: StringWithAggregatesFilter<"TicketInfo"> | string
    C_NRO_DOC?: StringWithAggregatesFilter<"TicketInfo"> | string
    C_NRO_DOC_ADQUIRIENTE?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_MONEDA?: StringWithAggregatesFilter<"TicketInfo"> | string
    C_MONTO_TOTAL_IGV?: IntWithAggregatesFilter<"TicketInfo"> | number
    C_MONTO_PAGAR?: IntWithAggregatesFilter<"TicketInfo"> | number
    C_MONTO_TOTAL_PERCEP?: IntNullableWithAggregatesFilter<"TicketInfo"> | number | null
    C_LEYENDA?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_FEC_CREA_FACE?: DateTimeWithAggregatesFilter<"TicketInfo"> | Date | string
    C_RUCE?: StringWithAggregatesFilter<"TicketInfo"> | string
    C_TIP_DOC_ADQUIRIENTE?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    C_TOTAL_OPERACIONES_GRAV?: IntNullableWithAggregatesFilter<"TicketInfo"> | number | null
    isValidated?: BoolNullableWithAggregatesFilter<"TicketInfo"> | boolean | null
    valitadedBy?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    validatedDate?: DateTimeNullableWithAggregatesFilter<"TicketInfo"> | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: StringNullableWithAggregatesFilter<"TicketInfo"> | string | null
    services?: StringNullableListFilter<"TicketInfo">
  }

  export type TicketInfoDetailWhereInput = {
    AND?: TicketInfoDetailWhereInput | TicketInfoDetailWhereInput[]
    OR?: TicketInfoDetailWhereInput[]
    NOT?: TicketInfoDetailWhereInput | TicketInfoDetailWhereInput[]
    id?: IntFilter<"TicketInfoDetail"> | number
    C_ID?: IntFilter<"TicketInfoDetail"> | number
    C_DESCRIP_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_VALOR_VENTA_UNITARIA?: IntFilter<"TicketInfoDetail"> | number
    C_CANTIDAD_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_IGV_TOTAL_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_ID_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_COD_COMERCIAL_PROD_SERV?: StringFilter<"TicketInfoDetail"> | string
    C_COD_PROD_SERV_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_INDICADOR_PS_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_TOTAL_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_VALOR_ITEM?: IntFilter<"TicketInfoDetail"> | number
  }

  export type TicketInfoDetailOrderByWithRelationInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_DESCRIP_ITEM?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_COD_SUNAT_PROD_SERV_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_COD_COMERCIAL_PROD_SERV?: SortOrder
    C_COD_PROD_SERV_ITEM?: SortOrder
    C_INDICADOR_PS_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
  }

  export type TicketInfoDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketInfoDetailWhereInput | TicketInfoDetailWhereInput[]
    OR?: TicketInfoDetailWhereInput[]
    NOT?: TicketInfoDetailWhereInput | TicketInfoDetailWhereInput[]
    C_ID?: IntFilter<"TicketInfoDetail"> | number
    C_DESCRIP_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_VALOR_VENTA_UNITARIA?: IntFilter<"TicketInfoDetail"> | number
    C_CANTIDAD_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_IGV_TOTAL_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_ID_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_COD_COMERCIAL_PROD_SERV?: StringFilter<"TicketInfoDetail"> | string
    C_COD_PROD_SERV_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_INDICADOR_PS_ITEM?: StringFilter<"TicketInfoDetail"> | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_TOTAL_ITEM?: IntFilter<"TicketInfoDetail"> | number
    C_VALOR_ITEM?: IntFilter<"TicketInfoDetail"> | number
  }, "id">

  export type TicketInfoDetailOrderByWithAggregationInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_DESCRIP_ITEM?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_COD_SUNAT_PROD_SERV_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_COD_COMERCIAL_PROD_SERV?: SortOrder
    C_COD_PROD_SERV_ITEM?: SortOrder
    C_INDICADOR_PS_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
    _count?: TicketInfoDetailCountOrderByAggregateInput
    _avg?: TicketInfoDetailAvgOrderByAggregateInput
    _max?: TicketInfoDetailMaxOrderByAggregateInput
    _min?: TicketInfoDetailMinOrderByAggregateInput
    _sum?: TicketInfoDetailSumOrderByAggregateInput
  }

  export type TicketInfoDetailScalarWhereWithAggregatesInput = {
    AND?: TicketInfoDetailScalarWhereWithAggregatesInput | TicketInfoDetailScalarWhereWithAggregatesInput[]
    OR?: TicketInfoDetailScalarWhereWithAggregatesInput[]
    NOT?: TicketInfoDetailScalarWhereWithAggregatesInput | TicketInfoDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_ID?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_DESCRIP_ITEM?: StringWithAggregatesFilter<"TicketInfoDetail"> | string
    C_VALOR_VENTA_UNITARIA?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_CANTIDAD_ITEM?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_IGV_TOTAL_ITEM?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringWithAggregatesFilter<"TicketInfoDetail"> | string
    C_ID_ITEM?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_COD_COMERCIAL_PROD_SERV?: StringWithAggregatesFilter<"TicketInfoDetail"> | string
    C_COD_PROD_SERV_ITEM?: StringWithAggregatesFilter<"TicketInfoDetail"> | string
    C_INDICADOR_PS_ITEM?: StringWithAggregatesFilter<"TicketInfoDetail"> | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_TOTAL_ITEM?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
    C_VALOR_ITEM?: IntWithAggregatesFilter<"TicketInfoDetail"> | number
  }

  export type Service2WhereInput = {
    AND?: Service2WhereInput | Service2WhereInput[]
    OR?: Service2WhereInput[]
    NOT?: Service2WhereInput | Service2WhereInput[]
    id?: IntFilter<"Service2"> | number
    RucE?: StringNullableFilter<"Service2"> | string | null
    Cd_Srv?: StringFilter<"Service2"> | string
    CodCo?: StringNullableFilter<"Service2"> | string | null
    Nombre?: StringNullableFilter<"Service2"> | string | null
    Descrip?: StringNullableFilter<"Service2"> | string | null
    Cta1?: StringNullableFilter<"Service2"> | string | null
    Cta2?: StringNullableFilter<"Service2"> | string | null
    Img?: StringNullableFilter<"Service2"> | string | null
    Cd_GS?: StringNullableFilter<"Service2"> | string | null
    Cd_CGP?: StringNullableFilter<"Service2"> | string | null
    Cd_CC?: StringNullableFilter<"Service2"> | string | null
    Cd_SC?: StringNullableFilter<"Service2"> | string | null
    Cd_SS?: StringNullableFilter<"Service2"> | string | null
    IC_TipServ?: StringNullableFilter<"Service2"> | string | null
    UsuCrea?: StringNullableFilter<"Service2"> | string | null
    UsuMdf?: StringNullableFilter<"Service2"> | string | null
    FecReg?: DateTimeNullableFilter<"Service2"> | Date | string | null
    FecMdf?: DateTimeNullableFilter<"Service2"> | Date | string | null
    CA01?: StringNullableFilter<"Service2"> | string | null
    CA02?: StringNullableFilter<"Service2"> | string | null
    CA03?: StringNullableFilter<"Service2"> | string | null
    CA04?: StringNullableFilter<"Service2"> | string | null
    CA05?: StringNullableFilter<"Service2"> | string | null
    CA06?: StringNullableFilter<"Service2"> | string | null
    CA07?: StringNullableFilter<"Service2"> | string | null
    CA08?: StringNullableFilter<"Service2"> | string | null
    CA09?: StringNullableFilter<"Service2"> | string | null
    CA10?: StringNullableFilter<"Service2"> | string | null
    Cta3?: StringNullableFilter<"Service2"> | string | null
    Cta4?: StringNullableFilter<"Service2"> | string | null
    Cta5?: StringNullableFilter<"Service2"> | string | null
    Cta6?: StringNullableFilter<"Service2"> | string | null
    Cta7?: StringNullableFilter<"Service2"> | string | null
    Cta8?: StringNullableFilter<"Service2"> | string | null
    Cta9?: StringNullableFilter<"Service2"> | string | null
    Cta10?: StringNullableFilter<"Service2"> | string | null
    Cta11?: StringNullableFilter<"Service2"> | string | null
    Cta12?: StringNullableFilter<"Service2"> | string | null
    C_CD_SRV_INAFECTO?: StringNullableFilter<"Service2"> | string | null
    C_CD_SRV_AFECTO?: StringNullableFilter<"Service2"> | string | null
    C_COD_BBSS?: StringNullableFilter<"Service2"> | string | null
    C_CD_SERV_ADICIONAL?: StringNullableFilter<"Service2"> | string | null
    C_PORCENTAJE_AFECTADO?: StringNullableFilter<"Service2"> | string | null
    C_CODIGO_HOMOLOGACION?: StringNullableFilter<"Service2"> | string | null
    C_IB_MULTIEMPRESA?: StringNullableFilter<"Service2"> | string | null
    NCorto?: StringNullableFilter<"Service2"> | string | null
    Estado?: BoolNullableFilter<"Service2"> | boolean | null
    IB_LF?: BoolNullableFilter<"Service2"> | boolean | null
    IB_ActivoFijo?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_LC?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_SOBRE_TASA?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_ES_OBLIGATORIO?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_INCLUYE_IGV?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_CRM?: BoolNullableFilter<"Service2"> | boolean | null
  }

  export type Service2OrderByWithRelationInput = {
    id?: SortOrder
    RucE?: SortOrderInput | SortOrder
    Cd_Srv?: SortOrder
    CodCo?: SortOrderInput | SortOrder
    Nombre?: SortOrderInput | SortOrder
    Descrip?: SortOrderInput | SortOrder
    Cta1?: SortOrderInput | SortOrder
    Cta2?: SortOrderInput | SortOrder
    Img?: SortOrderInput | SortOrder
    Cd_GS?: SortOrderInput | SortOrder
    Cd_CGP?: SortOrderInput | SortOrder
    Cd_CC?: SortOrderInput | SortOrder
    Cd_SC?: SortOrderInput | SortOrder
    Cd_SS?: SortOrderInput | SortOrder
    IC_TipServ?: SortOrderInput | SortOrder
    UsuCrea?: SortOrderInput | SortOrder
    UsuMdf?: SortOrderInput | SortOrder
    FecReg?: SortOrderInput | SortOrder
    FecMdf?: SortOrderInput | SortOrder
    CA01?: SortOrderInput | SortOrder
    CA02?: SortOrderInput | SortOrder
    CA03?: SortOrderInput | SortOrder
    CA04?: SortOrderInput | SortOrder
    CA05?: SortOrderInput | SortOrder
    CA06?: SortOrderInput | SortOrder
    CA07?: SortOrderInput | SortOrder
    CA08?: SortOrderInput | SortOrder
    CA09?: SortOrderInput | SortOrder
    CA10?: SortOrderInput | SortOrder
    Cta3?: SortOrderInput | SortOrder
    Cta4?: SortOrderInput | SortOrder
    Cta5?: SortOrderInput | SortOrder
    Cta6?: SortOrderInput | SortOrder
    Cta7?: SortOrderInput | SortOrder
    Cta8?: SortOrderInput | SortOrder
    Cta9?: SortOrderInput | SortOrder
    Cta10?: SortOrderInput | SortOrder
    Cta11?: SortOrderInput | SortOrder
    Cta12?: SortOrderInput | SortOrder
    C_CD_SRV_INAFECTO?: SortOrderInput | SortOrder
    C_CD_SRV_AFECTO?: SortOrderInput | SortOrder
    C_COD_BBSS?: SortOrderInput | SortOrder
    C_CD_SERV_ADICIONAL?: SortOrderInput | SortOrder
    C_PORCENTAJE_AFECTADO?: SortOrderInput | SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrderInput | SortOrder
    C_IB_MULTIEMPRESA?: SortOrderInput | SortOrder
    NCorto?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    IB_LF?: SortOrderInput | SortOrder
    IB_ActivoFijo?: SortOrderInput | SortOrder
    C_IB_LC?: SortOrderInput | SortOrder
    C_IB_SOBRE_TASA?: SortOrderInput | SortOrder
    C_IB_ES_OBLIGATORIO?: SortOrderInput | SortOrder
    C_IB_INCLUYE_IGV?: SortOrderInput | SortOrder
    C_IB_CRM?: SortOrderInput | SortOrder
  }

  export type Service2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Cd_Srv?: string
    AND?: Service2WhereInput | Service2WhereInput[]
    OR?: Service2WhereInput[]
    NOT?: Service2WhereInput | Service2WhereInput[]
    RucE?: StringNullableFilter<"Service2"> | string | null
    CodCo?: StringNullableFilter<"Service2"> | string | null
    Nombre?: StringNullableFilter<"Service2"> | string | null
    Descrip?: StringNullableFilter<"Service2"> | string | null
    Cta1?: StringNullableFilter<"Service2"> | string | null
    Cta2?: StringNullableFilter<"Service2"> | string | null
    Img?: StringNullableFilter<"Service2"> | string | null
    Cd_GS?: StringNullableFilter<"Service2"> | string | null
    Cd_CGP?: StringNullableFilter<"Service2"> | string | null
    Cd_CC?: StringNullableFilter<"Service2"> | string | null
    Cd_SC?: StringNullableFilter<"Service2"> | string | null
    Cd_SS?: StringNullableFilter<"Service2"> | string | null
    IC_TipServ?: StringNullableFilter<"Service2"> | string | null
    UsuCrea?: StringNullableFilter<"Service2"> | string | null
    UsuMdf?: StringNullableFilter<"Service2"> | string | null
    FecReg?: DateTimeNullableFilter<"Service2"> | Date | string | null
    FecMdf?: DateTimeNullableFilter<"Service2"> | Date | string | null
    CA01?: StringNullableFilter<"Service2"> | string | null
    CA02?: StringNullableFilter<"Service2"> | string | null
    CA03?: StringNullableFilter<"Service2"> | string | null
    CA04?: StringNullableFilter<"Service2"> | string | null
    CA05?: StringNullableFilter<"Service2"> | string | null
    CA06?: StringNullableFilter<"Service2"> | string | null
    CA07?: StringNullableFilter<"Service2"> | string | null
    CA08?: StringNullableFilter<"Service2"> | string | null
    CA09?: StringNullableFilter<"Service2"> | string | null
    CA10?: StringNullableFilter<"Service2"> | string | null
    Cta3?: StringNullableFilter<"Service2"> | string | null
    Cta4?: StringNullableFilter<"Service2"> | string | null
    Cta5?: StringNullableFilter<"Service2"> | string | null
    Cta6?: StringNullableFilter<"Service2"> | string | null
    Cta7?: StringNullableFilter<"Service2"> | string | null
    Cta8?: StringNullableFilter<"Service2"> | string | null
    Cta9?: StringNullableFilter<"Service2"> | string | null
    Cta10?: StringNullableFilter<"Service2"> | string | null
    Cta11?: StringNullableFilter<"Service2"> | string | null
    Cta12?: StringNullableFilter<"Service2"> | string | null
    C_CD_SRV_INAFECTO?: StringNullableFilter<"Service2"> | string | null
    C_CD_SRV_AFECTO?: StringNullableFilter<"Service2"> | string | null
    C_COD_BBSS?: StringNullableFilter<"Service2"> | string | null
    C_CD_SERV_ADICIONAL?: StringNullableFilter<"Service2"> | string | null
    C_PORCENTAJE_AFECTADO?: StringNullableFilter<"Service2"> | string | null
    C_CODIGO_HOMOLOGACION?: StringNullableFilter<"Service2"> | string | null
    C_IB_MULTIEMPRESA?: StringNullableFilter<"Service2"> | string | null
    NCorto?: StringNullableFilter<"Service2"> | string | null
    Estado?: BoolNullableFilter<"Service2"> | boolean | null
    IB_LF?: BoolNullableFilter<"Service2"> | boolean | null
    IB_ActivoFijo?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_LC?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_SOBRE_TASA?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_ES_OBLIGATORIO?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_INCLUYE_IGV?: BoolNullableFilter<"Service2"> | boolean | null
    C_IB_CRM?: BoolNullableFilter<"Service2"> | boolean | null
  }, "id" | "Cd_Srv">

  export type Service2OrderByWithAggregationInput = {
    id?: SortOrder
    RucE?: SortOrderInput | SortOrder
    Cd_Srv?: SortOrder
    CodCo?: SortOrderInput | SortOrder
    Nombre?: SortOrderInput | SortOrder
    Descrip?: SortOrderInput | SortOrder
    Cta1?: SortOrderInput | SortOrder
    Cta2?: SortOrderInput | SortOrder
    Img?: SortOrderInput | SortOrder
    Cd_GS?: SortOrderInput | SortOrder
    Cd_CGP?: SortOrderInput | SortOrder
    Cd_CC?: SortOrderInput | SortOrder
    Cd_SC?: SortOrderInput | SortOrder
    Cd_SS?: SortOrderInput | SortOrder
    IC_TipServ?: SortOrderInput | SortOrder
    UsuCrea?: SortOrderInput | SortOrder
    UsuMdf?: SortOrderInput | SortOrder
    FecReg?: SortOrderInput | SortOrder
    FecMdf?: SortOrderInput | SortOrder
    CA01?: SortOrderInput | SortOrder
    CA02?: SortOrderInput | SortOrder
    CA03?: SortOrderInput | SortOrder
    CA04?: SortOrderInput | SortOrder
    CA05?: SortOrderInput | SortOrder
    CA06?: SortOrderInput | SortOrder
    CA07?: SortOrderInput | SortOrder
    CA08?: SortOrderInput | SortOrder
    CA09?: SortOrderInput | SortOrder
    CA10?: SortOrderInput | SortOrder
    Cta3?: SortOrderInput | SortOrder
    Cta4?: SortOrderInput | SortOrder
    Cta5?: SortOrderInput | SortOrder
    Cta6?: SortOrderInput | SortOrder
    Cta7?: SortOrderInput | SortOrder
    Cta8?: SortOrderInput | SortOrder
    Cta9?: SortOrderInput | SortOrder
    Cta10?: SortOrderInput | SortOrder
    Cta11?: SortOrderInput | SortOrder
    Cta12?: SortOrderInput | SortOrder
    C_CD_SRV_INAFECTO?: SortOrderInput | SortOrder
    C_CD_SRV_AFECTO?: SortOrderInput | SortOrder
    C_COD_BBSS?: SortOrderInput | SortOrder
    C_CD_SERV_ADICIONAL?: SortOrderInput | SortOrder
    C_PORCENTAJE_AFECTADO?: SortOrderInput | SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrderInput | SortOrder
    C_IB_MULTIEMPRESA?: SortOrderInput | SortOrder
    NCorto?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    IB_LF?: SortOrderInput | SortOrder
    IB_ActivoFijo?: SortOrderInput | SortOrder
    C_IB_LC?: SortOrderInput | SortOrder
    C_IB_SOBRE_TASA?: SortOrderInput | SortOrder
    C_IB_ES_OBLIGATORIO?: SortOrderInput | SortOrder
    C_IB_INCLUYE_IGV?: SortOrderInput | SortOrder
    C_IB_CRM?: SortOrderInput | SortOrder
    _count?: Service2CountOrderByAggregateInput
    _avg?: Service2AvgOrderByAggregateInput
    _max?: Service2MaxOrderByAggregateInput
    _min?: Service2MinOrderByAggregateInput
    _sum?: Service2SumOrderByAggregateInput
  }

  export type Service2ScalarWhereWithAggregatesInput = {
    AND?: Service2ScalarWhereWithAggregatesInput | Service2ScalarWhereWithAggregatesInput[]
    OR?: Service2ScalarWhereWithAggregatesInput[]
    NOT?: Service2ScalarWhereWithAggregatesInput | Service2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service2"> | number
    RucE?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cd_Srv?: StringWithAggregatesFilter<"Service2"> | string
    CodCo?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Nombre?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Descrip?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta1?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta2?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Img?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cd_GS?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cd_CGP?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cd_CC?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cd_SC?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cd_SS?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    IC_TipServ?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    UsuCrea?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    UsuMdf?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    FecReg?: DateTimeNullableWithAggregatesFilter<"Service2"> | Date | string | null
    FecMdf?: DateTimeNullableWithAggregatesFilter<"Service2"> | Date | string | null
    CA01?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA02?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA03?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA04?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA05?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA06?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA07?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA08?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA09?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    CA10?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta3?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta4?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta5?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta6?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta7?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta8?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta9?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta10?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta11?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Cta12?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_CD_SRV_INAFECTO?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_CD_SRV_AFECTO?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_COD_BBSS?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_CD_SERV_ADICIONAL?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_PORCENTAJE_AFECTADO?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_CODIGO_HOMOLOGACION?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    C_IB_MULTIEMPRESA?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    NCorto?: StringNullableWithAggregatesFilter<"Service2"> | string | null
    Estado?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    IB_LF?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    IB_ActivoFijo?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    C_IB_LC?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    C_IB_SOBRE_TASA?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    C_IB_ES_OBLIGATORIO?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    C_IB_INCLUYE_IGV?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
    C_IB_CRM?: BoolNullableWithAggregatesFilter<"Service2"> | boolean | null
  }

  export type Cliente2WhereInput = {
    AND?: Cliente2WhereInput | Cliente2WhereInput[]
    OR?: Cliente2WhereInput[]
    NOT?: Cliente2WhereInput | Cliente2WhereInput[]
    id?: IntFilter<"Cliente2"> | number
    RucE?: StringFilter<"Cliente2"> | string
    Cd_Clt?: StringFilter<"Cliente2"> | string
    Cd_TDI?: StringFilter<"Cliente2"> | string
    NDoc?: StringNullableFilter<"Cliente2"> | string | null
    RSocial?: StringNullableFilter<"Cliente2"> | string | null
    ApPat?: StringNullableFilter<"Cliente2"> | string | null
    ApMat?: StringNullableFilter<"Cliente2"> | string | null
    Nom?: StringNullableFilter<"Cliente2"> | string | null
    Cd_Pais?: StringNullableFilter<"Cliente2"> | string | null
    CodPost?: StringNullableFilter<"Cliente2"> | string | null
    Ubigeo?: StringNullableFilter<"Cliente2"> | string | null
    Direc?: StringNullableFilter<"Cliente2"> | string | null
    Telf1?: StringNullableFilter<"Cliente2"> | string | null
    Telf2?: StringNullableFilter<"Cliente2"> | string | null
    Fax?: StringNullableFilter<"Cliente2"> | string | null
    Correo?: StringNullableFilter<"Cliente2"> | string | null
    PWeb?: StringNullableFilter<"Cliente2"> | string | null
    Obs?: StringNullableFilter<"Cliente2"> | string | null
    CtaCtb?: StringNullableFilter<"Cliente2"> | string | null
    DiasCbr?: StringNullableFilter<"Cliente2"> | string | null
    PerCbr?: StringNullableFilter<"Cliente2"> | string | null
    CtaCte?: StringNullableFilter<"Cliente2"> | string | null
    Cd_CGC?: StringNullableFilter<"Cliente2"> | string | null
    CA01?: StringNullableFilter<"Cliente2"> | string | null
    CA02?: StringNullableFilter<"Cliente2"> | string | null
    CA03?: StringNullableFilter<"Cliente2"> | string | null
    CA04?: StringNullableFilter<"Cliente2"> | string | null
    CA05?: StringNullableFilter<"Cliente2"> | string | null
    CA06?: StringNullableFilter<"Cliente2"> | string | null
    CA07?: StringNullableFilter<"Cliente2"> | string | null
    CA08?: StringNullableFilter<"Cliente2"> | string | null
    CA09?: StringNullableFilter<"Cliente2"> | string | null
    CA10?: StringNullableFilter<"Cliente2"> | string | null
    Cd_Aux?: StringNullableFilter<"Cliente2"> | string | null
    Cd_TClt?: StringNullableFilter<"Cliente2"> | string | null
    FecReg?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    UsuCrea?: StringNullableFilter<"Cliente2"> | string | null
    FecMdf?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    UsuMdf?: StringNullableFilter<"Cliente2"> | string | null
    NComercial?: StringNullableFilter<"Cliente2"> | string | null
    Cd_Vdr?: StringNullableFilter<"Cliente2"> | string | null
    SaldoAFavor?: DecimalNullableFilter<"Cliente2"> | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: StringNullableFilter<"Cliente2"> | string | null
    EnvioDocVtaAuto?: BoolNullableFilter<"Cliente2"> | boolean | null
    EnvioDocVtaAdjto?: BoolNullableFilter<"Cliente2"> | boolean | null
    PassWeb?: StringNullableFilter<"Cliente2"> | string | null
    CodEAN?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_CC?: StringNullableFilter<"Cliente2"> | string | null
    C_FEC_GEN_PASS?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    C_USU_GEN_PASS?: StringNullableFilter<"Cliente2"> | string | null
    C_CORREO_ENV_PASS?: StringNullableFilter<"Cliente2"> | string | null
    C_FORMACOBRO?: StringNullableFilter<"Cliente2"> | string | null
    C_DIASCOBRO?: IntNullableFilter<"Cliente2"> | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_CCOSTOS?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_SCCOSTOS?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_SSCCOSTOS?: StringNullableFilter<"Cliente2"> | string | null
    C_DIAS_TOLERANCIA_CREDITO?: IntNullableFilter<"Cliente2"> | number | null
    C_FECHA_INGRESO?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    C_CODIGO_HOMOLOGACION?: StringNullableFilter<"Cliente2"> | string | null
    C_IB_MULTIEMPRESA?: BoolNullableFilter<"Cliente2"> | boolean | null
    C_URBANIZACION?: StringNullableFilter<"Cliente2"> | string | null
    C_ESTADO_LINEA_CREDITO?: IntNullableFilter<"Cliente2"> | number | null
    IB_AgRet?: IntNullableFilter<"Cliente2"> | number | null
    IB_AgPercep?: IntNullableFilter<"Cliente2"> | number | null
    IB_BuenContrib?: IntNullableFilter<"Cliente2"> | number | null
    EsExtranjero?: IntNullableFilter<"Cliente2"> | number | null
    DefinirDiasCredito?: IntNullableFilter<"Cliente2"> | number | null
    IB_ConsumidorFinal?: IntNullableFilter<"Cliente2"> | number | null
    C_IB_PAGO_DESTINO?: IntNullableFilter<"Cliente2"> | number | null
    C_IB_AGENTE?: IntNullableFilter<"Cliente2"> | number | null
    Estado?: IntNullableFilter<"Cliente2"> | number | null
    C_CONTRASENA_WEB?: StringNullableFilter<"Cliente2"> | string | null
  }

  export type Cliente2OrderByWithRelationInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Clt?: SortOrder
    Cd_TDI?: SortOrder
    NDoc?: SortOrderInput | SortOrder
    RSocial?: SortOrderInput | SortOrder
    ApPat?: SortOrderInput | SortOrder
    ApMat?: SortOrderInput | SortOrder
    Nom?: SortOrderInput | SortOrder
    Cd_Pais?: SortOrderInput | SortOrder
    CodPost?: SortOrderInput | SortOrder
    Ubigeo?: SortOrderInput | SortOrder
    Direc?: SortOrderInput | SortOrder
    Telf1?: SortOrderInput | SortOrder
    Telf2?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Correo?: SortOrderInput | SortOrder
    PWeb?: SortOrderInput | SortOrder
    Obs?: SortOrderInput | SortOrder
    CtaCtb?: SortOrderInput | SortOrder
    DiasCbr?: SortOrderInput | SortOrder
    PerCbr?: SortOrderInput | SortOrder
    CtaCte?: SortOrderInput | SortOrder
    Cd_CGC?: SortOrderInput | SortOrder
    CA01?: SortOrderInput | SortOrder
    CA02?: SortOrderInput | SortOrder
    CA03?: SortOrderInput | SortOrder
    CA04?: SortOrderInput | SortOrder
    CA05?: SortOrderInput | SortOrder
    CA06?: SortOrderInput | SortOrder
    CA07?: SortOrderInput | SortOrder
    CA08?: SortOrderInput | SortOrder
    CA09?: SortOrderInput | SortOrder
    CA10?: SortOrderInput | SortOrder
    Cd_Aux?: SortOrderInput | SortOrder
    Cd_TClt?: SortOrderInput | SortOrder
    FecReg?: SortOrderInput | SortOrder
    UsuCrea?: SortOrderInput | SortOrder
    FecMdf?: SortOrderInput | SortOrder
    UsuMdf?: SortOrderInput | SortOrder
    NComercial?: SortOrderInput | SortOrder
    Cd_Vdr?: SortOrderInput | SortOrder
    SaldoAFavor?: SortOrderInput | SortOrder
    Msj_Alert?: SortOrderInput | SortOrder
    EnvioDocVtaAuto?: SortOrderInput | SortOrder
    EnvioDocVtaAdjto?: SortOrderInput | SortOrder
    PassWeb?: SortOrderInput | SortOrder
    CodEAN?: SortOrderInput | SortOrder
    C_CD_CC?: SortOrderInput | SortOrder
    C_FEC_GEN_PASS?: SortOrderInput | SortOrder
    C_USU_GEN_PASS?: SortOrderInput | SortOrder
    C_CORREO_ENV_PASS?: SortOrderInput | SortOrder
    C_FORMACOBRO?: SortOrderInput | SortOrder
    C_DIASCOBRO?: SortOrderInput | SortOrder
    C_FEC_AMPLIACION_LINEA_CRED?: SortOrderInput | SortOrder
    C_MOTIVO_AMPLIACION_LINEA_CRED?: SortOrderInput | SortOrder
    C_CD_CCOSTOS?: SortOrderInput | SortOrder
    C_CD_SCCOSTOS?: SortOrderInput | SortOrder
    C_CD_SSCCOSTOS?: SortOrderInput | SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrderInput | SortOrder
    C_FECHA_INGRESO?: SortOrderInput | SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrderInput | SortOrder
    C_IB_MULTIEMPRESA?: SortOrderInput | SortOrder
    C_URBANIZACION?: SortOrderInput | SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrderInput | SortOrder
    IB_AgRet?: SortOrderInput | SortOrder
    IB_AgPercep?: SortOrderInput | SortOrder
    IB_BuenContrib?: SortOrderInput | SortOrder
    EsExtranjero?: SortOrderInput | SortOrder
    DefinirDiasCredito?: SortOrderInput | SortOrder
    IB_ConsumidorFinal?: SortOrderInput | SortOrder
    C_IB_PAGO_DESTINO?: SortOrderInput | SortOrder
    C_IB_AGENTE?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    C_CONTRASENA_WEB?: SortOrderInput | SortOrder
  }

  export type Cliente2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Cd_Clt?: string
    AND?: Cliente2WhereInput | Cliente2WhereInput[]
    OR?: Cliente2WhereInput[]
    NOT?: Cliente2WhereInput | Cliente2WhereInput[]
    RucE?: StringFilter<"Cliente2"> | string
    Cd_TDI?: StringFilter<"Cliente2"> | string
    NDoc?: StringNullableFilter<"Cliente2"> | string | null
    RSocial?: StringNullableFilter<"Cliente2"> | string | null
    ApPat?: StringNullableFilter<"Cliente2"> | string | null
    ApMat?: StringNullableFilter<"Cliente2"> | string | null
    Nom?: StringNullableFilter<"Cliente2"> | string | null
    Cd_Pais?: StringNullableFilter<"Cliente2"> | string | null
    CodPost?: StringNullableFilter<"Cliente2"> | string | null
    Ubigeo?: StringNullableFilter<"Cliente2"> | string | null
    Direc?: StringNullableFilter<"Cliente2"> | string | null
    Telf1?: StringNullableFilter<"Cliente2"> | string | null
    Telf2?: StringNullableFilter<"Cliente2"> | string | null
    Fax?: StringNullableFilter<"Cliente2"> | string | null
    Correo?: StringNullableFilter<"Cliente2"> | string | null
    PWeb?: StringNullableFilter<"Cliente2"> | string | null
    Obs?: StringNullableFilter<"Cliente2"> | string | null
    CtaCtb?: StringNullableFilter<"Cliente2"> | string | null
    DiasCbr?: StringNullableFilter<"Cliente2"> | string | null
    PerCbr?: StringNullableFilter<"Cliente2"> | string | null
    CtaCte?: StringNullableFilter<"Cliente2"> | string | null
    Cd_CGC?: StringNullableFilter<"Cliente2"> | string | null
    CA01?: StringNullableFilter<"Cliente2"> | string | null
    CA02?: StringNullableFilter<"Cliente2"> | string | null
    CA03?: StringNullableFilter<"Cliente2"> | string | null
    CA04?: StringNullableFilter<"Cliente2"> | string | null
    CA05?: StringNullableFilter<"Cliente2"> | string | null
    CA06?: StringNullableFilter<"Cliente2"> | string | null
    CA07?: StringNullableFilter<"Cliente2"> | string | null
    CA08?: StringNullableFilter<"Cliente2"> | string | null
    CA09?: StringNullableFilter<"Cliente2"> | string | null
    CA10?: StringNullableFilter<"Cliente2"> | string | null
    Cd_Aux?: StringNullableFilter<"Cliente2"> | string | null
    Cd_TClt?: StringNullableFilter<"Cliente2"> | string | null
    FecReg?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    UsuCrea?: StringNullableFilter<"Cliente2"> | string | null
    FecMdf?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    UsuMdf?: StringNullableFilter<"Cliente2"> | string | null
    NComercial?: StringNullableFilter<"Cliente2"> | string | null
    Cd_Vdr?: StringNullableFilter<"Cliente2"> | string | null
    SaldoAFavor?: DecimalNullableFilter<"Cliente2"> | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: StringNullableFilter<"Cliente2"> | string | null
    EnvioDocVtaAuto?: BoolNullableFilter<"Cliente2"> | boolean | null
    EnvioDocVtaAdjto?: BoolNullableFilter<"Cliente2"> | boolean | null
    PassWeb?: StringNullableFilter<"Cliente2"> | string | null
    CodEAN?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_CC?: StringNullableFilter<"Cliente2"> | string | null
    C_FEC_GEN_PASS?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    C_USU_GEN_PASS?: StringNullableFilter<"Cliente2"> | string | null
    C_CORREO_ENV_PASS?: StringNullableFilter<"Cliente2"> | string | null
    C_FORMACOBRO?: StringNullableFilter<"Cliente2"> | string | null
    C_DIASCOBRO?: IntNullableFilter<"Cliente2"> | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_CCOSTOS?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_SCCOSTOS?: StringNullableFilter<"Cliente2"> | string | null
    C_CD_SSCCOSTOS?: StringNullableFilter<"Cliente2"> | string | null
    C_DIAS_TOLERANCIA_CREDITO?: IntNullableFilter<"Cliente2"> | number | null
    C_FECHA_INGRESO?: DateTimeNullableFilter<"Cliente2"> | Date | string | null
    C_CODIGO_HOMOLOGACION?: StringNullableFilter<"Cliente2"> | string | null
    C_IB_MULTIEMPRESA?: BoolNullableFilter<"Cliente2"> | boolean | null
    C_URBANIZACION?: StringNullableFilter<"Cliente2"> | string | null
    C_ESTADO_LINEA_CREDITO?: IntNullableFilter<"Cliente2"> | number | null
    IB_AgRet?: IntNullableFilter<"Cliente2"> | number | null
    IB_AgPercep?: IntNullableFilter<"Cliente2"> | number | null
    IB_BuenContrib?: IntNullableFilter<"Cliente2"> | number | null
    EsExtranjero?: IntNullableFilter<"Cliente2"> | number | null
    DefinirDiasCredito?: IntNullableFilter<"Cliente2"> | number | null
    IB_ConsumidorFinal?: IntNullableFilter<"Cliente2"> | number | null
    C_IB_PAGO_DESTINO?: IntNullableFilter<"Cliente2"> | number | null
    C_IB_AGENTE?: IntNullableFilter<"Cliente2"> | number | null
    Estado?: IntNullableFilter<"Cliente2"> | number | null
    C_CONTRASENA_WEB?: StringNullableFilter<"Cliente2"> | string | null
  }, "id" | "Cd_Clt">

  export type Cliente2OrderByWithAggregationInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Clt?: SortOrder
    Cd_TDI?: SortOrder
    NDoc?: SortOrderInput | SortOrder
    RSocial?: SortOrderInput | SortOrder
    ApPat?: SortOrderInput | SortOrder
    ApMat?: SortOrderInput | SortOrder
    Nom?: SortOrderInput | SortOrder
    Cd_Pais?: SortOrderInput | SortOrder
    CodPost?: SortOrderInput | SortOrder
    Ubigeo?: SortOrderInput | SortOrder
    Direc?: SortOrderInput | SortOrder
    Telf1?: SortOrderInput | SortOrder
    Telf2?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Correo?: SortOrderInput | SortOrder
    PWeb?: SortOrderInput | SortOrder
    Obs?: SortOrderInput | SortOrder
    CtaCtb?: SortOrderInput | SortOrder
    DiasCbr?: SortOrderInput | SortOrder
    PerCbr?: SortOrderInput | SortOrder
    CtaCte?: SortOrderInput | SortOrder
    Cd_CGC?: SortOrderInput | SortOrder
    CA01?: SortOrderInput | SortOrder
    CA02?: SortOrderInput | SortOrder
    CA03?: SortOrderInput | SortOrder
    CA04?: SortOrderInput | SortOrder
    CA05?: SortOrderInput | SortOrder
    CA06?: SortOrderInput | SortOrder
    CA07?: SortOrderInput | SortOrder
    CA08?: SortOrderInput | SortOrder
    CA09?: SortOrderInput | SortOrder
    CA10?: SortOrderInput | SortOrder
    Cd_Aux?: SortOrderInput | SortOrder
    Cd_TClt?: SortOrderInput | SortOrder
    FecReg?: SortOrderInput | SortOrder
    UsuCrea?: SortOrderInput | SortOrder
    FecMdf?: SortOrderInput | SortOrder
    UsuMdf?: SortOrderInput | SortOrder
    NComercial?: SortOrderInput | SortOrder
    Cd_Vdr?: SortOrderInput | SortOrder
    SaldoAFavor?: SortOrderInput | SortOrder
    Msj_Alert?: SortOrderInput | SortOrder
    EnvioDocVtaAuto?: SortOrderInput | SortOrder
    EnvioDocVtaAdjto?: SortOrderInput | SortOrder
    PassWeb?: SortOrderInput | SortOrder
    CodEAN?: SortOrderInput | SortOrder
    C_CD_CC?: SortOrderInput | SortOrder
    C_FEC_GEN_PASS?: SortOrderInput | SortOrder
    C_USU_GEN_PASS?: SortOrderInput | SortOrder
    C_CORREO_ENV_PASS?: SortOrderInput | SortOrder
    C_FORMACOBRO?: SortOrderInput | SortOrder
    C_DIASCOBRO?: SortOrderInput | SortOrder
    C_FEC_AMPLIACION_LINEA_CRED?: SortOrderInput | SortOrder
    C_MOTIVO_AMPLIACION_LINEA_CRED?: SortOrderInput | SortOrder
    C_CD_CCOSTOS?: SortOrderInput | SortOrder
    C_CD_SCCOSTOS?: SortOrderInput | SortOrder
    C_CD_SSCCOSTOS?: SortOrderInput | SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrderInput | SortOrder
    C_FECHA_INGRESO?: SortOrderInput | SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrderInput | SortOrder
    C_IB_MULTIEMPRESA?: SortOrderInput | SortOrder
    C_URBANIZACION?: SortOrderInput | SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrderInput | SortOrder
    IB_AgRet?: SortOrderInput | SortOrder
    IB_AgPercep?: SortOrderInput | SortOrder
    IB_BuenContrib?: SortOrderInput | SortOrder
    EsExtranjero?: SortOrderInput | SortOrder
    DefinirDiasCredito?: SortOrderInput | SortOrder
    IB_ConsumidorFinal?: SortOrderInput | SortOrder
    C_IB_PAGO_DESTINO?: SortOrderInput | SortOrder
    C_IB_AGENTE?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    C_CONTRASENA_WEB?: SortOrderInput | SortOrder
    _count?: Cliente2CountOrderByAggregateInput
    _avg?: Cliente2AvgOrderByAggregateInput
    _max?: Cliente2MaxOrderByAggregateInput
    _min?: Cliente2MinOrderByAggregateInput
    _sum?: Cliente2SumOrderByAggregateInput
  }

  export type Cliente2ScalarWhereWithAggregatesInput = {
    AND?: Cliente2ScalarWhereWithAggregatesInput | Cliente2ScalarWhereWithAggregatesInput[]
    OR?: Cliente2ScalarWhereWithAggregatesInput[]
    NOT?: Cliente2ScalarWhereWithAggregatesInput | Cliente2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente2"> | number
    RucE?: StringWithAggregatesFilter<"Cliente2"> | string
    Cd_Clt?: StringWithAggregatesFilter<"Cliente2"> | string
    Cd_TDI?: StringWithAggregatesFilter<"Cliente2"> | string
    NDoc?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    RSocial?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    ApPat?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    ApMat?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Nom?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Cd_Pais?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CodPost?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Ubigeo?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Direc?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Telf1?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Telf2?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Correo?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    PWeb?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Obs?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CtaCtb?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    DiasCbr?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    PerCbr?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CtaCte?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Cd_CGC?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA01?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA02?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA03?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA04?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA05?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA06?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA07?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA08?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA09?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CA10?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Cd_Aux?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Cd_TClt?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    FecReg?: DateTimeNullableWithAggregatesFilter<"Cliente2"> | Date | string | null
    UsuCrea?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    FecMdf?: DateTimeNullableWithAggregatesFilter<"Cliente2"> | Date | string | null
    UsuMdf?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    NComercial?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    Cd_Vdr?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    SaldoAFavor?: DecimalNullableWithAggregatesFilter<"Cliente2"> | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    EnvioDocVtaAuto?: BoolNullableWithAggregatesFilter<"Cliente2"> | boolean | null
    EnvioDocVtaAdjto?: BoolNullableWithAggregatesFilter<"Cliente2"> | boolean | null
    PassWeb?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    CodEAN?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_CD_CC?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_FEC_GEN_PASS?: DateTimeNullableWithAggregatesFilter<"Cliente2"> | Date | string | null
    C_USU_GEN_PASS?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_CORREO_ENV_PASS?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_FORMACOBRO?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_DIASCOBRO?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: DateTimeNullableWithAggregatesFilter<"Cliente2"> | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_CD_CCOSTOS?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_CD_SCCOSTOS?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_CD_SSCCOSTOS?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_DIAS_TOLERANCIA_CREDITO?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    C_FECHA_INGRESO?: DateTimeNullableWithAggregatesFilter<"Cliente2"> | Date | string | null
    C_CODIGO_HOMOLOGACION?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_IB_MULTIEMPRESA?: BoolNullableWithAggregatesFilter<"Cliente2"> | boolean | null
    C_URBANIZACION?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
    C_ESTADO_LINEA_CREDITO?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    IB_AgRet?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    IB_AgPercep?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    IB_BuenContrib?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    EsExtranjero?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    DefinirDiasCredito?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    IB_ConsumidorFinal?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    C_IB_PAGO_DESTINO?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    C_IB_AGENTE?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    Estado?: IntNullableWithAggregatesFilter<"Cliente2"> | number | null
    C_CONTRASENA_WEB?: StringNullableWithAggregatesFilter<"Cliente2"> | string | null
  }

  export type ManualSearchWhereInput = {
    AND?: ManualSearchWhereInput | ManualSearchWhereInput[]
    OR?: ManualSearchWhereInput[]
    NOT?: ManualSearchWhereInput | ManualSearchWhereInput[]
    id?: IntFilter<"ManualSearch"> | number
    C_ID?: StringFilter<"ManualSearch"> | string
    dateConsulted?: DateTimeFilter<"ManualSearch"> | Date | string
    status?: EnumManualSearchStatusFilter<"ManualSearch"> | $Enums.ManualSearchStatus
  }

  export type ManualSearchOrderByWithRelationInput = {
    id?: SortOrder
    C_ID?: SortOrder
    dateConsulted?: SortOrder
    status?: SortOrder
  }

  export type ManualSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    C_ID?: string
    AND?: ManualSearchWhereInput | ManualSearchWhereInput[]
    OR?: ManualSearchWhereInput[]
    NOT?: ManualSearchWhereInput | ManualSearchWhereInput[]
    dateConsulted?: DateTimeFilter<"ManualSearch"> | Date | string
    status?: EnumManualSearchStatusFilter<"ManualSearch"> | $Enums.ManualSearchStatus
  }, "id" | "C_ID">

  export type ManualSearchOrderByWithAggregationInput = {
    id?: SortOrder
    C_ID?: SortOrder
    dateConsulted?: SortOrder
    status?: SortOrder
    _count?: ManualSearchCountOrderByAggregateInput
    _avg?: ManualSearchAvgOrderByAggregateInput
    _max?: ManualSearchMaxOrderByAggregateInput
    _min?: ManualSearchMinOrderByAggregateInput
    _sum?: ManualSearchSumOrderByAggregateInput
  }

  export type ManualSearchScalarWhereWithAggregatesInput = {
    AND?: ManualSearchScalarWhereWithAggregatesInput | ManualSearchScalarWhereWithAggregatesInput[]
    OR?: ManualSearchScalarWhereWithAggregatesInput[]
    NOT?: ManualSearchScalarWhereWithAggregatesInput | ManualSearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ManualSearch"> | number
    C_ID?: StringWithAggregatesFilter<"ManualSearch"> | string
    dateConsulted?: DateTimeWithAggregatesFilter<"ManualSearch"> | Date | string
    status?: EnumManualSearchStatusWithAggregatesFilter<"ManualSearch"> | $Enums.ManualSearchStatus
  }

  export type PatientCreateInput = {
    id?: string
    sequence?: number
    firstName: string
    lastName: string
    dni: string
    age: number
    sex: string
    createdAt?: Date | string
    attentions?: AttentionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    sequence?: number
    firstName: string
    lastName: string
    dni: string
    age: number
    sex: string
    createdAt?: Date | string
    attentions?: AttentionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attentions?: AttentionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attentions?: AttentionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    sequence?: number
    firstName: string
    lastName: string
    dni: string
    age: number
    sex: string
    createdAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionCreateInput = {
    id?: string
    sequence?: number
    patient: PatientCreateNestedOneWithoutAttentionsInput
    ticket: TicketCreateNestedOneWithoutAttentionInput
  }

  export type AttentionUncheckedCreateInput = {
    id?: string
    sequence?: number
    patientId: string
    ticketId: number
  }

  export type AttentionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    patient?: PatientUpdateOneRequiredWithoutAttentionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutAttentionNestedInput
  }

  export type AttentionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
  }

  export type AttentionCreateManyInput = {
    id?: string
    sequence?: number
    patientId: string
    ticketId: number
  }

  export type AttentionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type AttentionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    cidDetail: string
    cidItem: string
    ccodProdServItem: string
    cdescriptItem: string
    cindicadoPsItem: string
    cvalorVentaUnitaria: string
    cprecioVentaUnitarioItem: string
    ccantidadItem: string
    cValorItem: string
    cigvTotalItem: string
    ctotalItem: string
    ccodSunatProdServItem: string
    ccodComercialProdServ: string
    cid: string
    cfecEd: string
    ctipDocEmisor: string
    capaminoRazonSocialEmisor: string
    cubigeoEmisor: string
    cdireccionEmisor: string
    cdepartamentoEmisor: string
    cprovinciaEmisor: string
    cdistritoEmisor: string
    cnombreComercialEmisor: string
    cTipDoc: string
    cnroSerie: string
    cnroDoc: string
    cinfoDocAdquiriente: string
    ctipDocAdquiriente: string
    capaminoRazonSocialAdquiriente: string
    cmoneda: string
    ctotalOperacionesGrav: string
    cmontoTotalIgv: string
    cmontoTotalPagar: string
    cmontoTotalPercep: string
    cleyenda: string
    cfecCreaFace: string
    ccodigoBarras: string
    ccodigpQr: string
    isValidated?: boolean | null
    validatesDate?: Date | string | null
    valitadedBy?: string | null
    attention?: AttentionCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    cidDetail: string
    cidItem: string
    ccodProdServItem: string
    cdescriptItem: string
    cindicadoPsItem: string
    cvalorVentaUnitaria: string
    cprecioVentaUnitarioItem: string
    ccantidadItem: string
    cValorItem: string
    cigvTotalItem: string
    ctotalItem: string
    ccodSunatProdServItem: string
    ccodComercialProdServ: string
    cid: string
    cfecEd: string
    ctipDocEmisor: string
    capaminoRazonSocialEmisor: string
    cubigeoEmisor: string
    cdireccionEmisor: string
    cdepartamentoEmisor: string
    cprovinciaEmisor: string
    cdistritoEmisor: string
    cnombreComercialEmisor: string
    cTipDoc: string
    cnroSerie: string
    cnroDoc: string
    cinfoDocAdquiriente: string
    ctipDocAdquiriente: string
    capaminoRazonSocialAdquiriente: string
    cmoneda: string
    ctotalOperacionesGrav: string
    cmontoTotalIgv: string
    cmontoTotalPagar: string
    cmontoTotalPercep: string
    cleyenda: string
    cfecCreaFace: string
    ccodigoBarras: string
    ccodigpQr: string
    isValidated?: boolean | null
    validatesDate?: Date | string | null
    valitadedBy?: string | null
    attention?: AttentionUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    cidDetail?: StringFieldUpdateOperationsInput | string
    cidItem?: StringFieldUpdateOperationsInput | string
    ccodProdServItem?: StringFieldUpdateOperationsInput | string
    cdescriptItem?: StringFieldUpdateOperationsInput | string
    cindicadoPsItem?: StringFieldUpdateOperationsInput | string
    cvalorVentaUnitaria?: StringFieldUpdateOperationsInput | string
    cprecioVentaUnitarioItem?: StringFieldUpdateOperationsInput | string
    ccantidadItem?: StringFieldUpdateOperationsInput | string
    cValorItem?: StringFieldUpdateOperationsInput | string
    cigvTotalItem?: StringFieldUpdateOperationsInput | string
    ctotalItem?: StringFieldUpdateOperationsInput | string
    ccodSunatProdServItem?: StringFieldUpdateOperationsInput | string
    ccodComercialProdServ?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    cfecEd?: StringFieldUpdateOperationsInput | string
    ctipDocEmisor?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialEmisor?: StringFieldUpdateOperationsInput | string
    cubigeoEmisor?: StringFieldUpdateOperationsInput | string
    cdireccionEmisor?: StringFieldUpdateOperationsInput | string
    cdepartamentoEmisor?: StringFieldUpdateOperationsInput | string
    cprovinciaEmisor?: StringFieldUpdateOperationsInput | string
    cdistritoEmisor?: StringFieldUpdateOperationsInput | string
    cnombreComercialEmisor?: StringFieldUpdateOperationsInput | string
    cTipDoc?: StringFieldUpdateOperationsInput | string
    cnroSerie?: StringFieldUpdateOperationsInput | string
    cnroDoc?: StringFieldUpdateOperationsInput | string
    cinfoDocAdquiriente?: StringFieldUpdateOperationsInput | string
    ctipDocAdquiriente?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialAdquiriente?: StringFieldUpdateOperationsInput | string
    cmoneda?: StringFieldUpdateOperationsInput | string
    ctotalOperacionesGrav?: StringFieldUpdateOperationsInput | string
    cmontoTotalIgv?: StringFieldUpdateOperationsInput | string
    cmontoTotalPagar?: StringFieldUpdateOperationsInput | string
    cmontoTotalPercep?: StringFieldUpdateOperationsInput | string
    cleyenda?: StringFieldUpdateOperationsInput | string
    cfecCreaFace?: StringFieldUpdateOperationsInput | string
    ccodigoBarras?: StringFieldUpdateOperationsInput | string
    ccodigpQr?: StringFieldUpdateOperationsInput | string
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validatesDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    attention?: AttentionUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidDetail?: StringFieldUpdateOperationsInput | string
    cidItem?: StringFieldUpdateOperationsInput | string
    ccodProdServItem?: StringFieldUpdateOperationsInput | string
    cdescriptItem?: StringFieldUpdateOperationsInput | string
    cindicadoPsItem?: StringFieldUpdateOperationsInput | string
    cvalorVentaUnitaria?: StringFieldUpdateOperationsInput | string
    cprecioVentaUnitarioItem?: StringFieldUpdateOperationsInput | string
    ccantidadItem?: StringFieldUpdateOperationsInput | string
    cValorItem?: StringFieldUpdateOperationsInput | string
    cigvTotalItem?: StringFieldUpdateOperationsInput | string
    ctotalItem?: StringFieldUpdateOperationsInput | string
    ccodSunatProdServItem?: StringFieldUpdateOperationsInput | string
    ccodComercialProdServ?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    cfecEd?: StringFieldUpdateOperationsInput | string
    ctipDocEmisor?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialEmisor?: StringFieldUpdateOperationsInput | string
    cubigeoEmisor?: StringFieldUpdateOperationsInput | string
    cdireccionEmisor?: StringFieldUpdateOperationsInput | string
    cdepartamentoEmisor?: StringFieldUpdateOperationsInput | string
    cprovinciaEmisor?: StringFieldUpdateOperationsInput | string
    cdistritoEmisor?: StringFieldUpdateOperationsInput | string
    cnombreComercialEmisor?: StringFieldUpdateOperationsInput | string
    cTipDoc?: StringFieldUpdateOperationsInput | string
    cnroSerie?: StringFieldUpdateOperationsInput | string
    cnroDoc?: StringFieldUpdateOperationsInput | string
    cinfoDocAdquiriente?: StringFieldUpdateOperationsInput | string
    ctipDocAdquiriente?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialAdquiriente?: StringFieldUpdateOperationsInput | string
    cmoneda?: StringFieldUpdateOperationsInput | string
    ctotalOperacionesGrav?: StringFieldUpdateOperationsInput | string
    cmontoTotalIgv?: StringFieldUpdateOperationsInput | string
    cmontoTotalPagar?: StringFieldUpdateOperationsInput | string
    cmontoTotalPercep?: StringFieldUpdateOperationsInput | string
    cleyenda?: StringFieldUpdateOperationsInput | string
    cfecCreaFace?: StringFieldUpdateOperationsInput | string
    ccodigoBarras?: StringFieldUpdateOperationsInput | string
    ccodigpQr?: StringFieldUpdateOperationsInput | string
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validatesDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    attention?: AttentionUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    cidDetail: string
    cidItem: string
    ccodProdServItem: string
    cdescriptItem: string
    cindicadoPsItem: string
    cvalorVentaUnitaria: string
    cprecioVentaUnitarioItem: string
    ccantidadItem: string
    cValorItem: string
    cigvTotalItem: string
    ctotalItem: string
    ccodSunatProdServItem: string
    ccodComercialProdServ: string
    cid: string
    cfecEd: string
    ctipDocEmisor: string
    capaminoRazonSocialEmisor: string
    cubigeoEmisor: string
    cdireccionEmisor: string
    cdepartamentoEmisor: string
    cprovinciaEmisor: string
    cdistritoEmisor: string
    cnombreComercialEmisor: string
    cTipDoc: string
    cnroSerie: string
    cnroDoc: string
    cinfoDocAdquiriente: string
    ctipDocAdquiriente: string
    capaminoRazonSocialAdquiriente: string
    cmoneda: string
    ctotalOperacionesGrav: string
    cmontoTotalIgv: string
    cmontoTotalPagar: string
    cmontoTotalPercep: string
    cleyenda: string
    cfecCreaFace: string
    ccodigoBarras: string
    ccodigpQr: string
    isValidated?: boolean | null
    validatesDate?: Date | string | null
    valitadedBy?: string | null
  }

  export type TicketUpdateManyMutationInput = {
    cidDetail?: StringFieldUpdateOperationsInput | string
    cidItem?: StringFieldUpdateOperationsInput | string
    ccodProdServItem?: StringFieldUpdateOperationsInput | string
    cdescriptItem?: StringFieldUpdateOperationsInput | string
    cindicadoPsItem?: StringFieldUpdateOperationsInput | string
    cvalorVentaUnitaria?: StringFieldUpdateOperationsInput | string
    cprecioVentaUnitarioItem?: StringFieldUpdateOperationsInput | string
    ccantidadItem?: StringFieldUpdateOperationsInput | string
    cValorItem?: StringFieldUpdateOperationsInput | string
    cigvTotalItem?: StringFieldUpdateOperationsInput | string
    ctotalItem?: StringFieldUpdateOperationsInput | string
    ccodSunatProdServItem?: StringFieldUpdateOperationsInput | string
    ccodComercialProdServ?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    cfecEd?: StringFieldUpdateOperationsInput | string
    ctipDocEmisor?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialEmisor?: StringFieldUpdateOperationsInput | string
    cubigeoEmisor?: StringFieldUpdateOperationsInput | string
    cdireccionEmisor?: StringFieldUpdateOperationsInput | string
    cdepartamentoEmisor?: StringFieldUpdateOperationsInput | string
    cprovinciaEmisor?: StringFieldUpdateOperationsInput | string
    cdistritoEmisor?: StringFieldUpdateOperationsInput | string
    cnombreComercialEmisor?: StringFieldUpdateOperationsInput | string
    cTipDoc?: StringFieldUpdateOperationsInput | string
    cnroSerie?: StringFieldUpdateOperationsInput | string
    cnroDoc?: StringFieldUpdateOperationsInput | string
    cinfoDocAdquiriente?: StringFieldUpdateOperationsInput | string
    ctipDocAdquiriente?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialAdquiriente?: StringFieldUpdateOperationsInput | string
    cmoneda?: StringFieldUpdateOperationsInput | string
    ctotalOperacionesGrav?: StringFieldUpdateOperationsInput | string
    cmontoTotalIgv?: StringFieldUpdateOperationsInput | string
    cmontoTotalPagar?: StringFieldUpdateOperationsInput | string
    cmontoTotalPercep?: StringFieldUpdateOperationsInput | string
    cleyenda?: StringFieldUpdateOperationsInput | string
    cfecCreaFace?: StringFieldUpdateOperationsInput | string
    ccodigoBarras?: StringFieldUpdateOperationsInput | string
    ccodigpQr?: StringFieldUpdateOperationsInput | string
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validatesDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidDetail?: StringFieldUpdateOperationsInput | string
    cidItem?: StringFieldUpdateOperationsInput | string
    ccodProdServItem?: StringFieldUpdateOperationsInput | string
    cdescriptItem?: StringFieldUpdateOperationsInput | string
    cindicadoPsItem?: StringFieldUpdateOperationsInput | string
    cvalorVentaUnitaria?: StringFieldUpdateOperationsInput | string
    cprecioVentaUnitarioItem?: StringFieldUpdateOperationsInput | string
    ccantidadItem?: StringFieldUpdateOperationsInput | string
    cValorItem?: StringFieldUpdateOperationsInput | string
    cigvTotalItem?: StringFieldUpdateOperationsInput | string
    ctotalItem?: StringFieldUpdateOperationsInput | string
    ccodSunatProdServItem?: StringFieldUpdateOperationsInput | string
    ccodComercialProdServ?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    cfecEd?: StringFieldUpdateOperationsInput | string
    ctipDocEmisor?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialEmisor?: StringFieldUpdateOperationsInput | string
    cubigeoEmisor?: StringFieldUpdateOperationsInput | string
    cdireccionEmisor?: StringFieldUpdateOperationsInput | string
    cdepartamentoEmisor?: StringFieldUpdateOperationsInput | string
    cprovinciaEmisor?: StringFieldUpdateOperationsInput | string
    cdistritoEmisor?: StringFieldUpdateOperationsInput | string
    cnombreComercialEmisor?: StringFieldUpdateOperationsInput | string
    cTipDoc?: StringFieldUpdateOperationsInput | string
    cnroSerie?: StringFieldUpdateOperationsInput | string
    cnroDoc?: StringFieldUpdateOperationsInput | string
    cinfoDocAdquiriente?: StringFieldUpdateOperationsInput | string
    ctipDocAdquiriente?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialAdquiriente?: StringFieldUpdateOperationsInput | string
    cmoneda?: StringFieldUpdateOperationsInput | string
    ctotalOperacionesGrav?: StringFieldUpdateOperationsInput | string
    cmontoTotalIgv?: StringFieldUpdateOperationsInput | string
    cmontoTotalPagar?: StringFieldUpdateOperationsInput | string
    cmontoTotalPercep?: StringFieldUpdateOperationsInput | string
    cleyenda?: StringFieldUpdateOperationsInput | string
    cfecCreaFace?: StringFieldUpdateOperationsInput | string
    ccodigoBarras?: StringFieldUpdateOperationsInput | string
    ccodigpQr?: StringFieldUpdateOperationsInput | string
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validatesDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestTicketCreateInput = {
    jsonString: string
  }

  export type TestTicketUncheckedCreateInput = {
    id?: number
    jsonString: string
  }

  export type TestTicketUpdateInput = {
    jsonString?: StringFieldUpdateOperationsInput | string
  }

  export type TestTicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jsonString?: StringFieldUpdateOperationsInput | string
  }

  export type TestTicketCreateManyInput = {
    id?: number
    jsonString: string
  }

  export type TestTicketUpdateManyMutationInput = {
    jsonString?: StringFieldUpdateOperationsInput | string
  }

  export type TestTicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jsonString?: StringFieldUpdateOperationsInput | string
  }

  export type TicketInfoCreateInput = {
    C_ID: number
    C_FEC_ED: Date | string
    C_TIP_DOC_EMISOR?: string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR: string
    C_UBIGEO_EMISOR?: string | null
    C_DIRECCION_EMISOR?: string | null
    C_DEPARTAMENTO_EMISOR?: string | null
    C_PROVINCIA_EMISOR?: string | null
    C_DISTRITO_EMISOR?: string | null
    C_NOMBRE_COMERCIAL_EMISOR?: string | null
    C_TIP_DOC?: string | null
    C_NRO_SERIE: string
    C_NRO_DOC: string
    C_NRO_DOC_ADQUIRIENTE?: string | null
    C_MONEDA: string
    C_MONTO_TOTAL_IGV: number
    C_MONTO_PAGAR: number
    C_MONTO_TOTAL_PERCEP?: number | null
    C_LEYENDA?: string | null
    C_FEC_CREA_FACE: Date | string
    C_RUCE: string
    C_TIP_DOC_ADQUIRIENTE?: string | null
    C_TOTAL_OPERACIONES_GRAV?: number | null
    isValidated?: boolean | null
    valitadedBy?: string | null
    validatedDate?: Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: string | null
    services?: TicketInfoCreateservicesInput | string[]
  }

  export type TicketInfoUncheckedCreateInput = {
    id?: number
    C_ID: number
    C_FEC_ED: Date | string
    C_TIP_DOC_EMISOR?: string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR: string
    C_UBIGEO_EMISOR?: string | null
    C_DIRECCION_EMISOR?: string | null
    C_DEPARTAMENTO_EMISOR?: string | null
    C_PROVINCIA_EMISOR?: string | null
    C_DISTRITO_EMISOR?: string | null
    C_NOMBRE_COMERCIAL_EMISOR?: string | null
    C_TIP_DOC?: string | null
    C_NRO_SERIE: string
    C_NRO_DOC: string
    C_NRO_DOC_ADQUIRIENTE?: string | null
    C_MONEDA: string
    C_MONTO_TOTAL_IGV: number
    C_MONTO_PAGAR: number
    C_MONTO_TOTAL_PERCEP?: number | null
    C_LEYENDA?: string | null
    C_FEC_CREA_FACE: Date | string
    C_RUCE: string
    C_TIP_DOC_ADQUIRIENTE?: string | null
    C_TOTAL_OPERACIONES_GRAV?: number | null
    isValidated?: boolean | null
    valitadedBy?: string | null
    validatedDate?: Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: string | null
    services?: TicketInfoCreateservicesInput | string[]
  }

  export type TicketInfoUpdateInput = {
    C_ID?: IntFieldUpdateOperationsInput | number
    C_FEC_ED?: DateTimeFieldUpdateOperationsInput | Date | string
    C_TIP_DOC_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringFieldUpdateOperationsInput | string
    C_UBIGEO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIRECCION_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DEPARTAMENTO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_PROVINCIA_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DISTRITO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_TIP_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    C_NRO_SERIE?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_MONEDA?: StringFieldUpdateOperationsInput | string
    C_MONTO_TOTAL_IGV?: IntFieldUpdateOperationsInput | number
    C_MONTO_PAGAR?: IntFieldUpdateOperationsInput | number
    C_MONTO_TOTAL_PERCEP?: NullableIntFieldUpdateOperationsInput | number | null
    C_LEYENDA?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_CREA_FACE?: DateTimeFieldUpdateOperationsInput | Date | string
    C_RUCE?: StringFieldUpdateOperationsInput | string
    C_TIP_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_TOTAL_OPERACIONES_GRAV?: NullableIntFieldUpdateOperationsInput | number | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    services?: TicketInfoUpdateservicesInput | string[]
  }

  export type TicketInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_ID?: IntFieldUpdateOperationsInput | number
    C_FEC_ED?: DateTimeFieldUpdateOperationsInput | Date | string
    C_TIP_DOC_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringFieldUpdateOperationsInput | string
    C_UBIGEO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIRECCION_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DEPARTAMENTO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_PROVINCIA_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DISTRITO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_TIP_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    C_NRO_SERIE?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_MONEDA?: StringFieldUpdateOperationsInput | string
    C_MONTO_TOTAL_IGV?: IntFieldUpdateOperationsInput | number
    C_MONTO_PAGAR?: IntFieldUpdateOperationsInput | number
    C_MONTO_TOTAL_PERCEP?: NullableIntFieldUpdateOperationsInput | number | null
    C_LEYENDA?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_CREA_FACE?: DateTimeFieldUpdateOperationsInput | Date | string
    C_RUCE?: StringFieldUpdateOperationsInput | string
    C_TIP_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_TOTAL_OPERACIONES_GRAV?: NullableIntFieldUpdateOperationsInput | number | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    services?: TicketInfoUpdateservicesInput | string[]
  }

  export type TicketInfoCreateManyInput = {
    id?: number
    C_ID: number
    C_FEC_ED: Date | string
    C_TIP_DOC_EMISOR?: string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR: string
    C_UBIGEO_EMISOR?: string | null
    C_DIRECCION_EMISOR?: string | null
    C_DEPARTAMENTO_EMISOR?: string | null
    C_PROVINCIA_EMISOR?: string | null
    C_DISTRITO_EMISOR?: string | null
    C_NOMBRE_COMERCIAL_EMISOR?: string | null
    C_TIP_DOC?: string | null
    C_NRO_SERIE: string
    C_NRO_DOC: string
    C_NRO_DOC_ADQUIRIENTE?: string | null
    C_MONEDA: string
    C_MONTO_TOTAL_IGV: number
    C_MONTO_PAGAR: number
    C_MONTO_TOTAL_PERCEP?: number | null
    C_LEYENDA?: string | null
    C_FEC_CREA_FACE: Date | string
    C_RUCE: string
    C_TIP_DOC_ADQUIRIENTE?: string | null
    C_TOTAL_OPERACIONES_GRAV?: number | null
    isValidated?: boolean | null
    valitadedBy?: string | null
    validatedDate?: Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: string | null
    services?: TicketInfoCreateservicesInput | string[]
  }

  export type TicketInfoUpdateManyMutationInput = {
    C_ID?: IntFieldUpdateOperationsInput | number
    C_FEC_ED?: DateTimeFieldUpdateOperationsInput | Date | string
    C_TIP_DOC_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringFieldUpdateOperationsInput | string
    C_UBIGEO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIRECCION_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DEPARTAMENTO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_PROVINCIA_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DISTRITO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_TIP_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    C_NRO_SERIE?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_MONEDA?: StringFieldUpdateOperationsInput | string
    C_MONTO_TOTAL_IGV?: IntFieldUpdateOperationsInput | number
    C_MONTO_PAGAR?: IntFieldUpdateOperationsInput | number
    C_MONTO_TOTAL_PERCEP?: NullableIntFieldUpdateOperationsInput | number | null
    C_LEYENDA?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_CREA_FACE?: DateTimeFieldUpdateOperationsInput | Date | string
    C_RUCE?: StringFieldUpdateOperationsInput | string
    C_TIP_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_TOTAL_OPERACIONES_GRAV?: NullableIntFieldUpdateOperationsInput | number | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    services?: TicketInfoUpdateservicesInput | string[]
  }

  export type TicketInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_ID?: IntFieldUpdateOperationsInput | number
    C_FEC_ED?: DateTimeFieldUpdateOperationsInput | Date | string
    C_TIP_DOC_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_APAMNO_RAZON_SOCIAL_EMISOR?: StringFieldUpdateOperationsInput | string
    C_UBIGEO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIRECCION_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DEPARTAMENTO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_PROVINCIA_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_DISTRITO_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_NOMBRE_COMERCIAL_EMISOR?: NullableStringFieldUpdateOperationsInput | string | null
    C_TIP_DOC?: NullableStringFieldUpdateOperationsInput | string | null
    C_NRO_SERIE?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC?: StringFieldUpdateOperationsInput | string
    C_NRO_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_MONEDA?: StringFieldUpdateOperationsInput | string
    C_MONTO_TOTAL_IGV?: IntFieldUpdateOperationsInput | number
    C_MONTO_PAGAR?: IntFieldUpdateOperationsInput | number
    C_MONTO_TOTAL_PERCEP?: NullableIntFieldUpdateOperationsInput | number | null
    C_LEYENDA?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_CREA_FACE?: DateTimeFieldUpdateOperationsInput | Date | string
    C_RUCE?: StringFieldUpdateOperationsInput | string
    C_TIP_DOC_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    C_TOTAL_OPERACIONES_GRAV?: NullableIntFieldUpdateOperationsInput | number | null
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    validatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    services?: TicketInfoUpdateservicesInput | string[]
  }

  export type TicketInfoDetailCreateInput = {
    C_ID: number
    C_DESCRIP_ITEM: string
    C_VALOR_VENTA_UNITARIA: number
    C_CANTIDAD_ITEM: number
    C_IGV_TOTAL_ITEM: number
    C_COD_SUNAT_PROD_SERV_ITEM: string
    C_ID_ITEM: number
    C_COD_COMERCIAL_PROD_SERV: string
    C_COD_PROD_SERV_ITEM: string
    C_INDICADOR_PS_ITEM: string
    C_PRECIO_VENTA_UNITARIO_ITEM: number
    C_TOTAL_ITEM: number
    C_VALOR_ITEM: number
  }

  export type TicketInfoDetailUncheckedCreateInput = {
    id?: number
    C_ID: number
    C_DESCRIP_ITEM: string
    C_VALOR_VENTA_UNITARIA: number
    C_CANTIDAD_ITEM: number
    C_IGV_TOTAL_ITEM: number
    C_COD_SUNAT_PROD_SERV_ITEM: string
    C_ID_ITEM: number
    C_COD_COMERCIAL_PROD_SERV: string
    C_COD_PROD_SERV_ITEM: string
    C_INDICADOR_PS_ITEM: string
    C_PRECIO_VENTA_UNITARIO_ITEM: number
    C_TOTAL_ITEM: number
    C_VALOR_ITEM: number
  }

  export type TicketInfoDetailUpdateInput = {
    C_ID?: IntFieldUpdateOperationsInput | number
    C_DESCRIP_ITEM?: StringFieldUpdateOperationsInput | string
    C_VALOR_VENTA_UNITARIA?: IntFieldUpdateOperationsInput | number
    C_CANTIDAD_ITEM?: IntFieldUpdateOperationsInput | number
    C_IGV_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_ID_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_COMERCIAL_PROD_SERV?: StringFieldUpdateOperationsInput | string
    C_COD_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_INDICADOR_PS_ITEM?: StringFieldUpdateOperationsInput | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntFieldUpdateOperationsInput | number
    C_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_VALOR_ITEM?: IntFieldUpdateOperationsInput | number
  }

  export type TicketInfoDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_ID?: IntFieldUpdateOperationsInput | number
    C_DESCRIP_ITEM?: StringFieldUpdateOperationsInput | string
    C_VALOR_VENTA_UNITARIA?: IntFieldUpdateOperationsInput | number
    C_CANTIDAD_ITEM?: IntFieldUpdateOperationsInput | number
    C_IGV_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_ID_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_COMERCIAL_PROD_SERV?: StringFieldUpdateOperationsInput | string
    C_COD_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_INDICADOR_PS_ITEM?: StringFieldUpdateOperationsInput | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntFieldUpdateOperationsInput | number
    C_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_VALOR_ITEM?: IntFieldUpdateOperationsInput | number
  }

  export type TicketInfoDetailCreateManyInput = {
    id?: number
    C_ID: number
    C_DESCRIP_ITEM: string
    C_VALOR_VENTA_UNITARIA: number
    C_CANTIDAD_ITEM: number
    C_IGV_TOTAL_ITEM: number
    C_COD_SUNAT_PROD_SERV_ITEM: string
    C_ID_ITEM: number
    C_COD_COMERCIAL_PROD_SERV: string
    C_COD_PROD_SERV_ITEM: string
    C_INDICADOR_PS_ITEM: string
    C_PRECIO_VENTA_UNITARIO_ITEM: number
    C_TOTAL_ITEM: number
    C_VALOR_ITEM: number
  }

  export type TicketInfoDetailUpdateManyMutationInput = {
    C_ID?: IntFieldUpdateOperationsInput | number
    C_DESCRIP_ITEM?: StringFieldUpdateOperationsInput | string
    C_VALOR_VENTA_UNITARIA?: IntFieldUpdateOperationsInput | number
    C_CANTIDAD_ITEM?: IntFieldUpdateOperationsInput | number
    C_IGV_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_ID_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_COMERCIAL_PROD_SERV?: StringFieldUpdateOperationsInput | string
    C_COD_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_INDICADOR_PS_ITEM?: StringFieldUpdateOperationsInput | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntFieldUpdateOperationsInput | number
    C_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_VALOR_ITEM?: IntFieldUpdateOperationsInput | number
  }

  export type TicketInfoDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_ID?: IntFieldUpdateOperationsInput | number
    C_DESCRIP_ITEM?: StringFieldUpdateOperationsInput | string
    C_VALOR_VENTA_UNITARIA?: IntFieldUpdateOperationsInput | number
    C_CANTIDAD_ITEM?: IntFieldUpdateOperationsInput | number
    C_IGV_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_SUNAT_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_ID_ITEM?: IntFieldUpdateOperationsInput | number
    C_COD_COMERCIAL_PROD_SERV?: StringFieldUpdateOperationsInput | string
    C_COD_PROD_SERV_ITEM?: StringFieldUpdateOperationsInput | string
    C_INDICADOR_PS_ITEM?: StringFieldUpdateOperationsInput | string
    C_PRECIO_VENTA_UNITARIO_ITEM?: IntFieldUpdateOperationsInput | number
    C_TOTAL_ITEM?: IntFieldUpdateOperationsInput | number
    C_VALOR_ITEM?: IntFieldUpdateOperationsInput | number
  }

  export type Service2CreateInput = {
    RucE?: string | null
    Cd_Srv: string
    CodCo?: string | null
    Nombre?: string | null
    Descrip?: string | null
    Cta1?: string | null
    Cta2?: string | null
    Img?: string | null
    Cd_GS?: string | null
    Cd_CGP?: string | null
    Cd_CC?: string | null
    Cd_SC?: string | null
    Cd_SS?: string | null
    IC_TipServ?: string | null
    UsuCrea?: string | null
    UsuMdf?: string | null
    FecReg?: Date | string | null
    FecMdf?: Date | string | null
    CA01?: string | null
    CA02?: string | null
    CA03?: string | null
    CA04?: string | null
    CA05?: string | null
    CA06?: string | null
    CA07?: string | null
    CA08?: string | null
    CA09?: string | null
    CA10?: string | null
    Cta3?: string | null
    Cta4?: string | null
    Cta5?: string | null
    Cta6?: string | null
    Cta7?: string | null
    Cta8?: string | null
    Cta9?: string | null
    Cta10?: string | null
    Cta11?: string | null
    Cta12?: string | null
    C_CD_SRV_INAFECTO?: string | null
    C_CD_SRV_AFECTO?: string | null
    C_COD_BBSS?: string | null
    C_CD_SERV_ADICIONAL?: string | null
    C_PORCENTAJE_AFECTADO?: string | null
    C_CODIGO_HOMOLOGACION?: string | null
    C_IB_MULTIEMPRESA?: string | null
    NCorto?: string | null
    Estado?: boolean | null
    IB_LF?: boolean | null
    IB_ActivoFijo?: boolean | null
    C_IB_LC?: boolean | null
    C_IB_SOBRE_TASA?: boolean | null
    C_IB_ES_OBLIGATORIO?: boolean | null
    C_IB_INCLUYE_IGV?: boolean | null
    C_IB_CRM?: boolean | null
  }

  export type Service2UncheckedCreateInput = {
    id?: number
    RucE?: string | null
    Cd_Srv: string
    CodCo?: string | null
    Nombre?: string | null
    Descrip?: string | null
    Cta1?: string | null
    Cta2?: string | null
    Img?: string | null
    Cd_GS?: string | null
    Cd_CGP?: string | null
    Cd_CC?: string | null
    Cd_SC?: string | null
    Cd_SS?: string | null
    IC_TipServ?: string | null
    UsuCrea?: string | null
    UsuMdf?: string | null
    FecReg?: Date | string | null
    FecMdf?: Date | string | null
    CA01?: string | null
    CA02?: string | null
    CA03?: string | null
    CA04?: string | null
    CA05?: string | null
    CA06?: string | null
    CA07?: string | null
    CA08?: string | null
    CA09?: string | null
    CA10?: string | null
    Cta3?: string | null
    Cta4?: string | null
    Cta5?: string | null
    Cta6?: string | null
    Cta7?: string | null
    Cta8?: string | null
    Cta9?: string | null
    Cta10?: string | null
    Cta11?: string | null
    Cta12?: string | null
    C_CD_SRV_INAFECTO?: string | null
    C_CD_SRV_AFECTO?: string | null
    C_COD_BBSS?: string | null
    C_CD_SERV_ADICIONAL?: string | null
    C_PORCENTAJE_AFECTADO?: string | null
    C_CODIGO_HOMOLOGACION?: string | null
    C_IB_MULTIEMPRESA?: string | null
    NCorto?: string | null
    Estado?: boolean | null
    IB_LF?: boolean | null
    IB_ActivoFijo?: boolean | null
    C_IB_LC?: boolean | null
    C_IB_SOBRE_TASA?: boolean | null
    C_IB_ES_OBLIGATORIO?: boolean | null
    C_IB_INCLUYE_IGV?: boolean | null
    C_IB_CRM?: boolean | null
  }

  export type Service2UpdateInput = {
    RucE?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Srv?: StringFieldUpdateOperationsInput | string
    CodCo?: NullableStringFieldUpdateOperationsInput | string | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Descrip?: NullableStringFieldUpdateOperationsInput | string | null
    Cta1?: NullableStringFieldUpdateOperationsInput | string | null
    Cta2?: NullableStringFieldUpdateOperationsInput | string | null
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_GS?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGP?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SS?: NullableStringFieldUpdateOperationsInput | string | null
    IC_TipServ?: NullableStringFieldUpdateOperationsInput | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta3?: NullableStringFieldUpdateOperationsInput | string | null
    Cta4?: NullableStringFieldUpdateOperationsInput | string | null
    Cta5?: NullableStringFieldUpdateOperationsInput | string | null
    Cta6?: NullableStringFieldUpdateOperationsInput | string | null
    Cta7?: NullableStringFieldUpdateOperationsInput | string | null
    Cta8?: NullableStringFieldUpdateOperationsInput | string | null
    Cta9?: NullableStringFieldUpdateOperationsInput | string | null
    Cta10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta11?: NullableStringFieldUpdateOperationsInput | string | null
    Cta12?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_INAFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_AFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_COD_BBSS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SERV_ADICIONAL?: NullableStringFieldUpdateOperationsInput | string | null
    C_PORCENTAJE_AFECTADO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    NCorto?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_LF?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_ActivoFijo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_LC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_SOBRE_TASA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_ES_OBLIGATORIO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_INCLUYE_IGV?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_CRM?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Service2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    RucE?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Srv?: StringFieldUpdateOperationsInput | string
    CodCo?: NullableStringFieldUpdateOperationsInput | string | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Descrip?: NullableStringFieldUpdateOperationsInput | string | null
    Cta1?: NullableStringFieldUpdateOperationsInput | string | null
    Cta2?: NullableStringFieldUpdateOperationsInput | string | null
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_GS?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGP?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SS?: NullableStringFieldUpdateOperationsInput | string | null
    IC_TipServ?: NullableStringFieldUpdateOperationsInput | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta3?: NullableStringFieldUpdateOperationsInput | string | null
    Cta4?: NullableStringFieldUpdateOperationsInput | string | null
    Cta5?: NullableStringFieldUpdateOperationsInput | string | null
    Cta6?: NullableStringFieldUpdateOperationsInput | string | null
    Cta7?: NullableStringFieldUpdateOperationsInput | string | null
    Cta8?: NullableStringFieldUpdateOperationsInput | string | null
    Cta9?: NullableStringFieldUpdateOperationsInput | string | null
    Cta10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta11?: NullableStringFieldUpdateOperationsInput | string | null
    Cta12?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_INAFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_AFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_COD_BBSS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SERV_ADICIONAL?: NullableStringFieldUpdateOperationsInput | string | null
    C_PORCENTAJE_AFECTADO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    NCorto?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_LF?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_ActivoFijo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_LC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_SOBRE_TASA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_ES_OBLIGATORIO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_INCLUYE_IGV?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_CRM?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Service2CreateManyInput = {
    id?: number
    RucE?: string | null
    Cd_Srv: string
    CodCo?: string | null
    Nombre?: string | null
    Descrip?: string | null
    Cta1?: string | null
    Cta2?: string | null
    Img?: string | null
    Cd_GS?: string | null
    Cd_CGP?: string | null
    Cd_CC?: string | null
    Cd_SC?: string | null
    Cd_SS?: string | null
    IC_TipServ?: string | null
    UsuCrea?: string | null
    UsuMdf?: string | null
    FecReg?: Date | string | null
    FecMdf?: Date | string | null
    CA01?: string | null
    CA02?: string | null
    CA03?: string | null
    CA04?: string | null
    CA05?: string | null
    CA06?: string | null
    CA07?: string | null
    CA08?: string | null
    CA09?: string | null
    CA10?: string | null
    Cta3?: string | null
    Cta4?: string | null
    Cta5?: string | null
    Cta6?: string | null
    Cta7?: string | null
    Cta8?: string | null
    Cta9?: string | null
    Cta10?: string | null
    Cta11?: string | null
    Cta12?: string | null
    C_CD_SRV_INAFECTO?: string | null
    C_CD_SRV_AFECTO?: string | null
    C_COD_BBSS?: string | null
    C_CD_SERV_ADICIONAL?: string | null
    C_PORCENTAJE_AFECTADO?: string | null
    C_CODIGO_HOMOLOGACION?: string | null
    C_IB_MULTIEMPRESA?: string | null
    NCorto?: string | null
    Estado?: boolean | null
    IB_LF?: boolean | null
    IB_ActivoFijo?: boolean | null
    C_IB_LC?: boolean | null
    C_IB_SOBRE_TASA?: boolean | null
    C_IB_ES_OBLIGATORIO?: boolean | null
    C_IB_INCLUYE_IGV?: boolean | null
    C_IB_CRM?: boolean | null
  }

  export type Service2UpdateManyMutationInput = {
    RucE?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Srv?: StringFieldUpdateOperationsInput | string
    CodCo?: NullableStringFieldUpdateOperationsInput | string | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Descrip?: NullableStringFieldUpdateOperationsInput | string | null
    Cta1?: NullableStringFieldUpdateOperationsInput | string | null
    Cta2?: NullableStringFieldUpdateOperationsInput | string | null
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_GS?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGP?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SS?: NullableStringFieldUpdateOperationsInput | string | null
    IC_TipServ?: NullableStringFieldUpdateOperationsInput | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta3?: NullableStringFieldUpdateOperationsInput | string | null
    Cta4?: NullableStringFieldUpdateOperationsInput | string | null
    Cta5?: NullableStringFieldUpdateOperationsInput | string | null
    Cta6?: NullableStringFieldUpdateOperationsInput | string | null
    Cta7?: NullableStringFieldUpdateOperationsInput | string | null
    Cta8?: NullableStringFieldUpdateOperationsInput | string | null
    Cta9?: NullableStringFieldUpdateOperationsInput | string | null
    Cta10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta11?: NullableStringFieldUpdateOperationsInput | string | null
    Cta12?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_INAFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_AFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_COD_BBSS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SERV_ADICIONAL?: NullableStringFieldUpdateOperationsInput | string | null
    C_PORCENTAJE_AFECTADO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    NCorto?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_LF?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_ActivoFijo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_LC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_SOBRE_TASA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_ES_OBLIGATORIO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_INCLUYE_IGV?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_CRM?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Service2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    RucE?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Srv?: StringFieldUpdateOperationsInput | string
    CodCo?: NullableStringFieldUpdateOperationsInput | string | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Descrip?: NullableStringFieldUpdateOperationsInput | string | null
    Cta1?: NullableStringFieldUpdateOperationsInput | string | null
    Cta2?: NullableStringFieldUpdateOperationsInput | string | null
    Img?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_GS?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGP?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SC?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_SS?: NullableStringFieldUpdateOperationsInput | string | null
    IC_TipServ?: NullableStringFieldUpdateOperationsInput | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta3?: NullableStringFieldUpdateOperationsInput | string | null
    Cta4?: NullableStringFieldUpdateOperationsInput | string | null
    Cta5?: NullableStringFieldUpdateOperationsInput | string | null
    Cta6?: NullableStringFieldUpdateOperationsInput | string | null
    Cta7?: NullableStringFieldUpdateOperationsInput | string | null
    Cta8?: NullableStringFieldUpdateOperationsInput | string | null
    Cta9?: NullableStringFieldUpdateOperationsInput | string | null
    Cta10?: NullableStringFieldUpdateOperationsInput | string | null
    Cta11?: NullableStringFieldUpdateOperationsInput | string | null
    Cta12?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_INAFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SRV_AFECTO?: NullableStringFieldUpdateOperationsInput | string | null
    C_COD_BBSS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SERV_ADICIONAL?: NullableStringFieldUpdateOperationsInput | string | null
    C_PORCENTAJE_AFECTADO?: NullableStringFieldUpdateOperationsInput | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    NCorto?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_LF?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IB_ActivoFijo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_LC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_SOBRE_TASA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_ES_OBLIGATORIO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_INCLUYE_IGV?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_IB_CRM?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Cliente2CreateInput = {
    RucE: string
    Cd_Clt: string
    Cd_TDI: string
    NDoc?: string | null
    RSocial?: string | null
    ApPat?: string | null
    ApMat?: string | null
    Nom?: string | null
    Cd_Pais?: string | null
    CodPost?: string | null
    Ubigeo?: string | null
    Direc?: string | null
    Telf1?: string | null
    Telf2?: string | null
    Fax?: string | null
    Correo?: string | null
    PWeb?: string | null
    Obs?: string | null
    CtaCtb?: string | null
    DiasCbr?: string | null
    PerCbr?: string | null
    CtaCte?: string | null
    Cd_CGC?: string | null
    CA01?: string | null
    CA02?: string | null
    CA03?: string | null
    CA04?: string | null
    CA05?: string | null
    CA06?: string | null
    CA07?: string | null
    CA08?: string | null
    CA09?: string | null
    CA10?: string | null
    Cd_Aux?: string | null
    Cd_TClt?: string | null
    FecReg?: Date | string | null
    UsuCrea?: string | null
    FecMdf?: Date | string | null
    UsuMdf?: string | null
    NComercial?: string | null
    Cd_Vdr?: string | null
    SaldoAFavor?: Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: string | null
    EnvioDocVtaAuto?: boolean | null
    EnvioDocVtaAdjto?: boolean | null
    PassWeb?: string | null
    CodEAN?: string | null
    C_CD_CC?: string | null
    C_FEC_GEN_PASS?: Date | string | null
    C_USU_GEN_PASS?: string | null
    C_CORREO_ENV_PASS?: string | null
    C_FORMACOBRO?: string | null
    C_DIASCOBRO?: number | null
    C_FEC_AMPLIACION_LINEA_CRED?: Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: string | null
    C_CD_CCOSTOS?: string | null
    C_CD_SCCOSTOS?: string | null
    C_CD_SSCCOSTOS?: string | null
    C_DIAS_TOLERANCIA_CREDITO?: number | null
    C_FECHA_INGRESO?: Date | string | null
    C_CODIGO_HOMOLOGACION?: string | null
    C_IB_MULTIEMPRESA?: boolean | null
    C_URBANIZACION?: string | null
    C_ESTADO_LINEA_CREDITO?: number | null
    IB_AgRet?: number | null
    IB_AgPercep?: number | null
    IB_BuenContrib?: number | null
    EsExtranjero?: number | null
    DefinirDiasCredito?: number | null
    IB_ConsumidorFinal?: number | null
    C_IB_PAGO_DESTINO?: number | null
    C_IB_AGENTE?: number | null
    Estado?: number | null
    C_CONTRASENA_WEB?: string | null
  }

  export type Cliente2UncheckedCreateInput = {
    id?: number
    RucE: string
    Cd_Clt: string
    Cd_TDI: string
    NDoc?: string | null
    RSocial?: string | null
    ApPat?: string | null
    ApMat?: string | null
    Nom?: string | null
    Cd_Pais?: string | null
    CodPost?: string | null
    Ubigeo?: string | null
    Direc?: string | null
    Telf1?: string | null
    Telf2?: string | null
    Fax?: string | null
    Correo?: string | null
    PWeb?: string | null
    Obs?: string | null
    CtaCtb?: string | null
    DiasCbr?: string | null
    PerCbr?: string | null
    CtaCte?: string | null
    Cd_CGC?: string | null
    CA01?: string | null
    CA02?: string | null
    CA03?: string | null
    CA04?: string | null
    CA05?: string | null
    CA06?: string | null
    CA07?: string | null
    CA08?: string | null
    CA09?: string | null
    CA10?: string | null
    Cd_Aux?: string | null
    Cd_TClt?: string | null
    FecReg?: Date | string | null
    UsuCrea?: string | null
    FecMdf?: Date | string | null
    UsuMdf?: string | null
    NComercial?: string | null
    Cd_Vdr?: string | null
    SaldoAFavor?: Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: string | null
    EnvioDocVtaAuto?: boolean | null
    EnvioDocVtaAdjto?: boolean | null
    PassWeb?: string | null
    CodEAN?: string | null
    C_CD_CC?: string | null
    C_FEC_GEN_PASS?: Date | string | null
    C_USU_GEN_PASS?: string | null
    C_CORREO_ENV_PASS?: string | null
    C_FORMACOBRO?: string | null
    C_DIASCOBRO?: number | null
    C_FEC_AMPLIACION_LINEA_CRED?: Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: string | null
    C_CD_CCOSTOS?: string | null
    C_CD_SCCOSTOS?: string | null
    C_CD_SSCCOSTOS?: string | null
    C_DIAS_TOLERANCIA_CREDITO?: number | null
    C_FECHA_INGRESO?: Date | string | null
    C_CODIGO_HOMOLOGACION?: string | null
    C_IB_MULTIEMPRESA?: boolean | null
    C_URBANIZACION?: string | null
    C_ESTADO_LINEA_CREDITO?: number | null
    IB_AgRet?: number | null
    IB_AgPercep?: number | null
    IB_BuenContrib?: number | null
    EsExtranjero?: number | null
    DefinirDiasCredito?: number | null
    IB_ConsumidorFinal?: number | null
    C_IB_PAGO_DESTINO?: number | null
    C_IB_AGENTE?: number | null
    Estado?: number | null
    C_CONTRASENA_WEB?: string | null
  }

  export type Cliente2UpdateInput = {
    RucE?: StringFieldUpdateOperationsInput | string
    Cd_Clt?: StringFieldUpdateOperationsInput | string
    Cd_TDI?: StringFieldUpdateOperationsInput | string
    NDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ApPat?: NullableStringFieldUpdateOperationsInput | string | null
    ApMat?: NullableStringFieldUpdateOperationsInput | string | null
    Nom?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Pais?: NullableStringFieldUpdateOperationsInput | string | null
    CodPost?: NullableStringFieldUpdateOperationsInput | string | null
    Ubigeo?: NullableStringFieldUpdateOperationsInput | string | null
    Direc?: NullableStringFieldUpdateOperationsInput | string | null
    Telf1?: NullableStringFieldUpdateOperationsInput | string | null
    Telf2?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    PWeb?: NullableStringFieldUpdateOperationsInput | string | null
    Obs?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCtb?: NullableStringFieldUpdateOperationsInput | string | null
    DiasCbr?: NullableStringFieldUpdateOperationsInput | string | null
    PerCbr?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCte?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGC?: NullableStringFieldUpdateOperationsInput | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Aux?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_TClt?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    NComercial?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Vdr?: NullableStringFieldUpdateOperationsInput | string | null
    SaldoAFavor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: NullableStringFieldUpdateOperationsInput | string | null
    EnvioDocVtaAuto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnvioDocVtaAdjto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PassWeb?: NullableStringFieldUpdateOperationsInput | string | null
    CodEAN?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CC?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_GEN_PASS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_USU_GEN_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CORREO_ENV_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_FORMACOBRO?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIASCOBRO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SSCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIAS_TOLERANCIA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FECHA_INGRESO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_URBANIZACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_ESTADO_LINEA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgRet?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgPercep?: NullableIntFieldUpdateOperationsInput | number | null
    IB_BuenContrib?: NullableIntFieldUpdateOperationsInput | number | null
    EsExtranjero?: NullableIntFieldUpdateOperationsInput | number | null
    DefinirDiasCredito?: NullableIntFieldUpdateOperationsInput | number | null
    IB_ConsumidorFinal?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_PAGO_DESTINO?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_AGENTE?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: NullableIntFieldUpdateOperationsInput | number | null
    C_CONTRASENA_WEB?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Cliente2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    RucE?: StringFieldUpdateOperationsInput | string
    Cd_Clt?: StringFieldUpdateOperationsInput | string
    Cd_TDI?: StringFieldUpdateOperationsInput | string
    NDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ApPat?: NullableStringFieldUpdateOperationsInput | string | null
    ApMat?: NullableStringFieldUpdateOperationsInput | string | null
    Nom?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Pais?: NullableStringFieldUpdateOperationsInput | string | null
    CodPost?: NullableStringFieldUpdateOperationsInput | string | null
    Ubigeo?: NullableStringFieldUpdateOperationsInput | string | null
    Direc?: NullableStringFieldUpdateOperationsInput | string | null
    Telf1?: NullableStringFieldUpdateOperationsInput | string | null
    Telf2?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    PWeb?: NullableStringFieldUpdateOperationsInput | string | null
    Obs?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCtb?: NullableStringFieldUpdateOperationsInput | string | null
    DiasCbr?: NullableStringFieldUpdateOperationsInput | string | null
    PerCbr?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCte?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGC?: NullableStringFieldUpdateOperationsInput | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Aux?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_TClt?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    NComercial?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Vdr?: NullableStringFieldUpdateOperationsInput | string | null
    SaldoAFavor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: NullableStringFieldUpdateOperationsInput | string | null
    EnvioDocVtaAuto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnvioDocVtaAdjto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PassWeb?: NullableStringFieldUpdateOperationsInput | string | null
    CodEAN?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CC?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_GEN_PASS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_USU_GEN_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CORREO_ENV_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_FORMACOBRO?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIASCOBRO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SSCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIAS_TOLERANCIA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FECHA_INGRESO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_URBANIZACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_ESTADO_LINEA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgRet?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgPercep?: NullableIntFieldUpdateOperationsInput | number | null
    IB_BuenContrib?: NullableIntFieldUpdateOperationsInput | number | null
    EsExtranjero?: NullableIntFieldUpdateOperationsInput | number | null
    DefinirDiasCredito?: NullableIntFieldUpdateOperationsInput | number | null
    IB_ConsumidorFinal?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_PAGO_DESTINO?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_AGENTE?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: NullableIntFieldUpdateOperationsInput | number | null
    C_CONTRASENA_WEB?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Cliente2CreateManyInput = {
    id?: number
    RucE: string
    Cd_Clt: string
    Cd_TDI: string
    NDoc?: string | null
    RSocial?: string | null
    ApPat?: string | null
    ApMat?: string | null
    Nom?: string | null
    Cd_Pais?: string | null
    CodPost?: string | null
    Ubigeo?: string | null
    Direc?: string | null
    Telf1?: string | null
    Telf2?: string | null
    Fax?: string | null
    Correo?: string | null
    PWeb?: string | null
    Obs?: string | null
    CtaCtb?: string | null
    DiasCbr?: string | null
    PerCbr?: string | null
    CtaCte?: string | null
    Cd_CGC?: string | null
    CA01?: string | null
    CA02?: string | null
    CA03?: string | null
    CA04?: string | null
    CA05?: string | null
    CA06?: string | null
    CA07?: string | null
    CA08?: string | null
    CA09?: string | null
    CA10?: string | null
    Cd_Aux?: string | null
    Cd_TClt?: string | null
    FecReg?: Date | string | null
    UsuCrea?: string | null
    FecMdf?: Date | string | null
    UsuMdf?: string | null
    NComercial?: string | null
    Cd_Vdr?: string | null
    SaldoAFavor?: Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: string | null
    EnvioDocVtaAuto?: boolean | null
    EnvioDocVtaAdjto?: boolean | null
    PassWeb?: string | null
    CodEAN?: string | null
    C_CD_CC?: string | null
    C_FEC_GEN_PASS?: Date | string | null
    C_USU_GEN_PASS?: string | null
    C_CORREO_ENV_PASS?: string | null
    C_FORMACOBRO?: string | null
    C_DIASCOBRO?: number | null
    C_FEC_AMPLIACION_LINEA_CRED?: Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: string | null
    C_CD_CCOSTOS?: string | null
    C_CD_SCCOSTOS?: string | null
    C_CD_SSCCOSTOS?: string | null
    C_DIAS_TOLERANCIA_CREDITO?: number | null
    C_FECHA_INGRESO?: Date | string | null
    C_CODIGO_HOMOLOGACION?: string | null
    C_IB_MULTIEMPRESA?: boolean | null
    C_URBANIZACION?: string | null
    C_ESTADO_LINEA_CREDITO?: number | null
    IB_AgRet?: number | null
    IB_AgPercep?: number | null
    IB_BuenContrib?: number | null
    EsExtranjero?: number | null
    DefinirDiasCredito?: number | null
    IB_ConsumidorFinal?: number | null
    C_IB_PAGO_DESTINO?: number | null
    C_IB_AGENTE?: number | null
    Estado?: number | null
    C_CONTRASENA_WEB?: string | null
  }

  export type Cliente2UpdateManyMutationInput = {
    RucE?: StringFieldUpdateOperationsInput | string
    Cd_Clt?: StringFieldUpdateOperationsInput | string
    Cd_TDI?: StringFieldUpdateOperationsInput | string
    NDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ApPat?: NullableStringFieldUpdateOperationsInput | string | null
    ApMat?: NullableStringFieldUpdateOperationsInput | string | null
    Nom?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Pais?: NullableStringFieldUpdateOperationsInput | string | null
    CodPost?: NullableStringFieldUpdateOperationsInput | string | null
    Ubigeo?: NullableStringFieldUpdateOperationsInput | string | null
    Direc?: NullableStringFieldUpdateOperationsInput | string | null
    Telf1?: NullableStringFieldUpdateOperationsInput | string | null
    Telf2?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    PWeb?: NullableStringFieldUpdateOperationsInput | string | null
    Obs?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCtb?: NullableStringFieldUpdateOperationsInput | string | null
    DiasCbr?: NullableStringFieldUpdateOperationsInput | string | null
    PerCbr?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCte?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGC?: NullableStringFieldUpdateOperationsInput | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Aux?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_TClt?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    NComercial?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Vdr?: NullableStringFieldUpdateOperationsInput | string | null
    SaldoAFavor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: NullableStringFieldUpdateOperationsInput | string | null
    EnvioDocVtaAuto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnvioDocVtaAdjto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PassWeb?: NullableStringFieldUpdateOperationsInput | string | null
    CodEAN?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CC?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_GEN_PASS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_USU_GEN_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CORREO_ENV_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_FORMACOBRO?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIASCOBRO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SSCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIAS_TOLERANCIA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FECHA_INGRESO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_URBANIZACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_ESTADO_LINEA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgRet?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgPercep?: NullableIntFieldUpdateOperationsInput | number | null
    IB_BuenContrib?: NullableIntFieldUpdateOperationsInput | number | null
    EsExtranjero?: NullableIntFieldUpdateOperationsInput | number | null
    DefinirDiasCredito?: NullableIntFieldUpdateOperationsInput | number | null
    IB_ConsumidorFinal?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_PAGO_DESTINO?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_AGENTE?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: NullableIntFieldUpdateOperationsInput | number | null
    C_CONTRASENA_WEB?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Cliente2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    RucE?: StringFieldUpdateOperationsInput | string
    Cd_Clt?: StringFieldUpdateOperationsInput | string
    Cd_TDI?: StringFieldUpdateOperationsInput | string
    NDoc?: NullableStringFieldUpdateOperationsInput | string | null
    RSocial?: NullableStringFieldUpdateOperationsInput | string | null
    ApPat?: NullableStringFieldUpdateOperationsInput | string | null
    ApMat?: NullableStringFieldUpdateOperationsInput | string | null
    Nom?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Pais?: NullableStringFieldUpdateOperationsInput | string | null
    CodPost?: NullableStringFieldUpdateOperationsInput | string | null
    Ubigeo?: NullableStringFieldUpdateOperationsInput | string | null
    Direc?: NullableStringFieldUpdateOperationsInput | string | null
    Telf1?: NullableStringFieldUpdateOperationsInput | string | null
    Telf2?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Correo?: NullableStringFieldUpdateOperationsInput | string | null
    PWeb?: NullableStringFieldUpdateOperationsInput | string | null
    Obs?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCtb?: NullableStringFieldUpdateOperationsInput | string | null
    DiasCbr?: NullableStringFieldUpdateOperationsInput | string | null
    PerCbr?: NullableStringFieldUpdateOperationsInput | string | null
    CtaCte?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_CGC?: NullableStringFieldUpdateOperationsInput | string | null
    CA01?: NullableStringFieldUpdateOperationsInput | string | null
    CA02?: NullableStringFieldUpdateOperationsInput | string | null
    CA03?: NullableStringFieldUpdateOperationsInput | string | null
    CA04?: NullableStringFieldUpdateOperationsInput | string | null
    CA05?: NullableStringFieldUpdateOperationsInput | string | null
    CA06?: NullableStringFieldUpdateOperationsInput | string | null
    CA07?: NullableStringFieldUpdateOperationsInput | string | null
    CA08?: NullableStringFieldUpdateOperationsInput | string | null
    CA09?: NullableStringFieldUpdateOperationsInput | string | null
    CA10?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Aux?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_TClt?: NullableStringFieldUpdateOperationsInput | string | null
    FecReg?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuCrea?: NullableStringFieldUpdateOperationsInput | string | null
    FecMdf?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UsuMdf?: NullableStringFieldUpdateOperationsInput | string | null
    NComercial?: NullableStringFieldUpdateOperationsInput | string | null
    Cd_Vdr?: NullableStringFieldUpdateOperationsInput | string | null
    SaldoAFavor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Msj_Alert?: NullableStringFieldUpdateOperationsInput | string | null
    EnvioDocVtaAuto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EnvioDocVtaAdjto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PassWeb?: NullableStringFieldUpdateOperationsInput | string | null
    CodEAN?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CC?: NullableStringFieldUpdateOperationsInput | string | null
    C_FEC_GEN_PASS?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_USU_GEN_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CORREO_ENV_PASS?: NullableStringFieldUpdateOperationsInput | string | null
    C_FORMACOBRO?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIASCOBRO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FEC_AMPLIACION_LINEA_CRED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_MOTIVO_AMPLIACION_LINEA_CRED?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_CCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_CD_SSCCOSTOS?: NullableStringFieldUpdateOperationsInput | string | null
    C_DIAS_TOLERANCIA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    C_FECHA_INGRESO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    C_CODIGO_HOMOLOGACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_IB_MULTIEMPRESA?: NullableBoolFieldUpdateOperationsInput | boolean | null
    C_URBANIZACION?: NullableStringFieldUpdateOperationsInput | string | null
    C_ESTADO_LINEA_CREDITO?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgRet?: NullableIntFieldUpdateOperationsInput | number | null
    IB_AgPercep?: NullableIntFieldUpdateOperationsInput | number | null
    IB_BuenContrib?: NullableIntFieldUpdateOperationsInput | number | null
    EsExtranjero?: NullableIntFieldUpdateOperationsInput | number | null
    DefinirDiasCredito?: NullableIntFieldUpdateOperationsInput | number | null
    IB_ConsumidorFinal?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_PAGO_DESTINO?: NullableIntFieldUpdateOperationsInput | number | null
    C_IB_AGENTE?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: NullableIntFieldUpdateOperationsInput | number | null
    C_CONTRASENA_WEB?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManualSearchCreateInput = {
    C_ID: string
    dateConsulted?: Date | string
    status?: $Enums.ManualSearchStatus
  }

  export type ManualSearchUncheckedCreateInput = {
    id?: number
    C_ID: string
    dateConsulted?: Date | string
    status?: $Enums.ManualSearchStatus
  }

  export type ManualSearchUpdateInput = {
    C_ID?: StringFieldUpdateOperationsInput | string
    dateConsulted?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumManualSearchStatusFieldUpdateOperationsInput | $Enums.ManualSearchStatus
  }

  export type ManualSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_ID?: StringFieldUpdateOperationsInput | string
    dateConsulted?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumManualSearchStatusFieldUpdateOperationsInput | $Enums.ManualSearchStatus
  }

  export type ManualSearchCreateManyInput = {
    id?: number
    C_ID: string
    dateConsulted?: Date | string
    status?: $Enums.ManualSearchStatus
  }

  export type ManualSearchUpdateManyMutationInput = {
    C_ID?: StringFieldUpdateOperationsInput | string
    dateConsulted?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumManualSearchStatusFieldUpdateOperationsInput | $Enums.ManualSearchStatus
  }

  export type ManualSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    C_ID?: StringFieldUpdateOperationsInput | string
    dateConsulted?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumManualSearchStatusFieldUpdateOperationsInput | $Enums.ManualSearchStatus
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

  export type AttentionListRelationFilter = {
    every?: AttentionWhereInput
    some?: AttentionWhereInput
    none?: AttentionWhereInput
  }

  export type AttentionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    sequence?: SortOrder
    age?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    sequence?: SortOrder
    age?: SortOrder
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

  export type PatientRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type AttentionCountOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    patientId?: SortOrder
    ticketId?: SortOrder
  }

  export type AttentionAvgOrderByAggregateInput = {
    sequence?: SortOrder
    ticketId?: SortOrder
  }

  export type AttentionMaxOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    patientId?: SortOrder
    ticketId?: SortOrder
  }

  export type AttentionMinOrderByAggregateInput = {
    id?: SortOrder
    sequence?: SortOrder
    patientId?: SortOrder
    ticketId?: SortOrder
  }

  export type AttentionSumOrderByAggregateInput = {
    sequence?: SortOrder
    ticketId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type AttentionNullableRelationFilter = {
    is?: AttentionWhereInput | null
    isNot?: AttentionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    cidDetail?: SortOrder
    cidItem?: SortOrder
    ccodProdServItem?: SortOrder
    cdescriptItem?: SortOrder
    cindicadoPsItem?: SortOrder
    cvalorVentaUnitaria?: SortOrder
    cprecioVentaUnitarioItem?: SortOrder
    ccantidadItem?: SortOrder
    cValorItem?: SortOrder
    cigvTotalItem?: SortOrder
    ctotalItem?: SortOrder
    ccodSunatProdServItem?: SortOrder
    ccodComercialProdServ?: SortOrder
    cid?: SortOrder
    cfecEd?: SortOrder
    ctipDocEmisor?: SortOrder
    capaminoRazonSocialEmisor?: SortOrder
    cubigeoEmisor?: SortOrder
    cdireccionEmisor?: SortOrder
    cdepartamentoEmisor?: SortOrder
    cprovinciaEmisor?: SortOrder
    cdistritoEmisor?: SortOrder
    cnombreComercialEmisor?: SortOrder
    cTipDoc?: SortOrder
    cnroSerie?: SortOrder
    cnroDoc?: SortOrder
    cinfoDocAdquiriente?: SortOrder
    ctipDocAdquiriente?: SortOrder
    capaminoRazonSocialAdquiriente?: SortOrder
    cmoneda?: SortOrder
    ctotalOperacionesGrav?: SortOrder
    cmontoTotalIgv?: SortOrder
    cmontoTotalPagar?: SortOrder
    cmontoTotalPercep?: SortOrder
    cleyenda?: SortOrder
    cfecCreaFace?: SortOrder
    ccodigoBarras?: SortOrder
    ccodigpQr?: SortOrder
    isValidated?: SortOrder
    validatesDate?: SortOrder
    valitadedBy?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    cidDetail?: SortOrder
    cidItem?: SortOrder
    ccodProdServItem?: SortOrder
    cdescriptItem?: SortOrder
    cindicadoPsItem?: SortOrder
    cvalorVentaUnitaria?: SortOrder
    cprecioVentaUnitarioItem?: SortOrder
    ccantidadItem?: SortOrder
    cValorItem?: SortOrder
    cigvTotalItem?: SortOrder
    ctotalItem?: SortOrder
    ccodSunatProdServItem?: SortOrder
    ccodComercialProdServ?: SortOrder
    cid?: SortOrder
    cfecEd?: SortOrder
    ctipDocEmisor?: SortOrder
    capaminoRazonSocialEmisor?: SortOrder
    cubigeoEmisor?: SortOrder
    cdireccionEmisor?: SortOrder
    cdepartamentoEmisor?: SortOrder
    cprovinciaEmisor?: SortOrder
    cdistritoEmisor?: SortOrder
    cnombreComercialEmisor?: SortOrder
    cTipDoc?: SortOrder
    cnroSerie?: SortOrder
    cnroDoc?: SortOrder
    cinfoDocAdquiriente?: SortOrder
    ctipDocAdquiriente?: SortOrder
    capaminoRazonSocialAdquiriente?: SortOrder
    cmoneda?: SortOrder
    ctotalOperacionesGrav?: SortOrder
    cmontoTotalIgv?: SortOrder
    cmontoTotalPagar?: SortOrder
    cmontoTotalPercep?: SortOrder
    cleyenda?: SortOrder
    cfecCreaFace?: SortOrder
    ccodigoBarras?: SortOrder
    ccodigpQr?: SortOrder
    isValidated?: SortOrder
    validatesDate?: SortOrder
    valitadedBy?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    cidDetail?: SortOrder
    cidItem?: SortOrder
    ccodProdServItem?: SortOrder
    cdescriptItem?: SortOrder
    cindicadoPsItem?: SortOrder
    cvalorVentaUnitaria?: SortOrder
    cprecioVentaUnitarioItem?: SortOrder
    ccantidadItem?: SortOrder
    cValorItem?: SortOrder
    cigvTotalItem?: SortOrder
    ctotalItem?: SortOrder
    ccodSunatProdServItem?: SortOrder
    ccodComercialProdServ?: SortOrder
    cid?: SortOrder
    cfecEd?: SortOrder
    ctipDocEmisor?: SortOrder
    capaminoRazonSocialEmisor?: SortOrder
    cubigeoEmisor?: SortOrder
    cdireccionEmisor?: SortOrder
    cdepartamentoEmisor?: SortOrder
    cprovinciaEmisor?: SortOrder
    cdistritoEmisor?: SortOrder
    cnombreComercialEmisor?: SortOrder
    cTipDoc?: SortOrder
    cnroSerie?: SortOrder
    cnroDoc?: SortOrder
    cinfoDocAdquiriente?: SortOrder
    ctipDocAdquiriente?: SortOrder
    capaminoRazonSocialAdquiriente?: SortOrder
    cmoneda?: SortOrder
    ctotalOperacionesGrav?: SortOrder
    cmontoTotalIgv?: SortOrder
    cmontoTotalPagar?: SortOrder
    cmontoTotalPercep?: SortOrder
    cleyenda?: SortOrder
    cfecCreaFace?: SortOrder
    ccodigoBarras?: SortOrder
    ccodigpQr?: SortOrder
    isValidated?: SortOrder
    validatesDate?: SortOrder
    valitadedBy?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type TestTicketCountOrderByAggregateInput = {
    id?: SortOrder
    jsonString?: SortOrder
  }

  export type TestTicketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    jsonString?: SortOrder
  }

  export type TestTicketMinOrderByAggregateInput = {
    id?: SortOrder
    jsonString?: SortOrder
  }

  export type TestTicketSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TicketInfoCountOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_FEC_ED?: SortOrder
    C_TIP_DOC_EMISOR?: SortOrder
    C_APAMNO_RAZON_SOCIAL_EMISOR?: SortOrder
    C_UBIGEO_EMISOR?: SortOrder
    C_DIRECCION_EMISOR?: SortOrder
    C_DEPARTAMENTO_EMISOR?: SortOrder
    C_PROVINCIA_EMISOR?: SortOrder
    C_DISTRITO_EMISOR?: SortOrder
    C_NOMBRE_COMERCIAL_EMISOR?: SortOrder
    C_TIP_DOC?: SortOrder
    C_NRO_SERIE?: SortOrder
    C_NRO_DOC?: SortOrder
    C_NRO_DOC_ADQUIRIENTE?: SortOrder
    C_MONEDA?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrder
    C_LEYENDA?: SortOrder
    C_FEC_CREA_FACE?: SortOrder
    C_RUCE?: SortOrder
    C_TIP_DOC_ADQUIRIENTE?: SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrder
    isValidated?: SortOrder
    valitadedBy?: SortOrder
    validatedDate?: SortOrder
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: SortOrder
    services?: SortOrder
  }

  export type TicketInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrder
  }

  export type TicketInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_FEC_ED?: SortOrder
    C_TIP_DOC_EMISOR?: SortOrder
    C_APAMNO_RAZON_SOCIAL_EMISOR?: SortOrder
    C_UBIGEO_EMISOR?: SortOrder
    C_DIRECCION_EMISOR?: SortOrder
    C_DEPARTAMENTO_EMISOR?: SortOrder
    C_PROVINCIA_EMISOR?: SortOrder
    C_DISTRITO_EMISOR?: SortOrder
    C_NOMBRE_COMERCIAL_EMISOR?: SortOrder
    C_TIP_DOC?: SortOrder
    C_NRO_SERIE?: SortOrder
    C_NRO_DOC?: SortOrder
    C_NRO_DOC_ADQUIRIENTE?: SortOrder
    C_MONEDA?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrder
    C_LEYENDA?: SortOrder
    C_FEC_CREA_FACE?: SortOrder
    C_RUCE?: SortOrder
    C_TIP_DOC_ADQUIRIENTE?: SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrder
    isValidated?: SortOrder
    valitadedBy?: SortOrder
    validatedDate?: SortOrder
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: SortOrder
  }

  export type TicketInfoMinOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_FEC_ED?: SortOrder
    C_TIP_DOC_EMISOR?: SortOrder
    C_APAMNO_RAZON_SOCIAL_EMISOR?: SortOrder
    C_UBIGEO_EMISOR?: SortOrder
    C_DIRECCION_EMISOR?: SortOrder
    C_DEPARTAMENTO_EMISOR?: SortOrder
    C_PROVINCIA_EMISOR?: SortOrder
    C_DISTRITO_EMISOR?: SortOrder
    C_NOMBRE_COMERCIAL_EMISOR?: SortOrder
    C_TIP_DOC?: SortOrder
    C_NRO_SERIE?: SortOrder
    C_NRO_DOC?: SortOrder
    C_NRO_DOC_ADQUIRIENTE?: SortOrder
    C_MONEDA?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrder
    C_LEYENDA?: SortOrder
    C_FEC_CREA_FACE?: SortOrder
    C_RUCE?: SortOrder
    C_TIP_DOC_ADQUIRIENTE?: SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrder
    isValidated?: SortOrder
    valitadedBy?: SortOrder
    validatedDate?: SortOrder
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE?: SortOrder
  }

  export type TicketInfoSumOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_MONTO_TOTAL_IGV?: SortOrder
    C_MONTO_PAGAR?: SortOrder
    C_MONTO_TOTAL_PERCEP?: SortOrder
    C_TOTAL_OPERACIONES_GRAV?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TicketInfoDetailCountOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_DESCRIP_ITEM?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_COD_SUNAT_PROD_SERV_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_COD_COMERCIAL_PROD_SERV?: SortOrder
    C_COD_PROD_SERV_ITEM?: SortOrder
    C_INDICADOR_PS_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
  }

  export type TicketInfoDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
  }

  export type TicketInfoDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_DESCRIP_ITEM?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_COD_SUNAT_PROD_SERV_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_COD_COMERCIAL_PROD_SERV?: SortOrder
    C_COD_PROD_SERV_ITEM?: SortOrder
    C_INDICADOR_PS_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
  }

  export type TicketInfoDetailMinOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_DESCRIP_ITEM?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_COD_SUNAT_PROD_SERV_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_COD_COMERCIAL_PROD_SERV?: SortOrder
    C_COD_PROD_SERV_ITEM?: SortOrder
    C_INDICADOR_PS_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
  }

  export type TicketInfoDetailSumOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    C_VALOR_VENTA_UNITARIA?: SortOrder
    C_CANTIDAD_ITEM?: SortOrder
    C_IGV_TOTAL_ITEM?: SortOrder
    C_ID_ITEM?: SortOrder
    C_PRECIO_VENTA_UNITARIO_ITEM?: SortOrder
    C_TOTAL_ITEM?: SortOrder
    C_VALOR_ITEM?: SortOrder
  }

  export type Service2CountOrderByAggregateInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Srv?: SortOrder
    CodCo?: SortOrder
    Nombre?: SortOrder
    Descrip?: SortOrder
    Cta1?: SortOrder
    Cta2?: SortOrder
    Img?: SortOrder
    Cd_GS?: SortOrder
    Cd_CGP?: SortOrder
    Cd_CC?: SortOrder
    Cd_SC?: SortOrder
    Cd_SS?: SortOrder
    IC_TipServ?: SortOrder
    UsuCrea?: SortOrder
    UsuMdf?: SortOrder
    FecReg?: SortOrder
    FecMdf?: SortOrder
    CA01?: SortOrder
    CA02?: SortOrder
    CA03?: SortOrder
    CA04?: SortOrder
    CA05?: SortOrder
    CA06?: SortOrder
    CA07?: SortOrder
    CA08?: SortOrder
    CA09?: SortOrder
    CA10?: SortOrder
    Cta3?: SortOrder
    Cta4?: SortOrder
    Cta5?: SortOrder
    Cta6?: SortOrder
    Cta7?: SortOrder
    Cta8?: SortOrder
    Cta9?: SortOrder
    Cta10?: SortOrder
    Cta11?: SortOrder
    Cta12?: SortOrder
    C_CD_SRV_INAFECTO?: SortOrder
    C_CD_SRV_AFECTO?: SortOrder
    C_COD_BBSS?: SortOrder
    C_CD_SERV_ADICIONAL?: SortOrder
    C_PORCENTAJE_AFECTADO?: SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrder
    C_IB_MULTIEMPRESA?: SortOrder
    NCorto?: SortOrder
    Estado?: SortOrder
    IB_LF?: SortOrder
    IB_ActivoFijo?: SortOrder
    C_IB_LC?: SortOrder
    C_IB_SOBRE_TASA?: SortOrder
    C_IB_ES_OBLIGATORIO?: SortOrder
    C_IB_INCLUYE_IGV?: SortOrder
    C_IB_CRM?: SortOrder
  }

  export type Service2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Service2MaxOrderByAggregateInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Srv?: SortOrder
    CodCo?: SortOrder
    Nombre?: SortOrder
    Descrip?: SortOrder
    Cta1?: SortOrder
    Cta2?: SortOrder
    Img?: SortOrder
    Cd_GS?: SortOrder
    Cd_CGP?: SortOrder
    Cd_CC?: SortOrder
    Cd_SC?: SortOrder
    Cd_SS?: SortOrder
    IC_TipServ?: SortOrder
    UsuCrea?: SortOrder
    UsuMdf?: SortOrder
    FecReg?: SortOrder
    FecMdf?: SortOrder
    CA01?: SortOrder
    CA02?: SortOrder
    CA03?: SortOrder
    CA04?: SortOrder
    CA05?: SortOrder
    CA06?: SortOrder
    CA07?: SortOrder
    CA08?: SortOrder
    CA09?: SortOrder
    CA10?: SortOrder
    Cta3?: SortOrder
    Cta4?: SortOrder
    Cta5?: SortOrder
    Cta6?: SortOrder
    Cta7?: SortOrder
    Cta8?: SortOrder
    Cta9?: SortOrder
    Cta10?: SortOrder
    Cta11?: SortOrder
    Cta12?: SortOrder
    C_CD_SRV_INAFECTO?: SortOrder
    C_CD_SRV_AFECTO?: SortOrder
    C_COD_BBSS?: SortOrder
    C_CD_SERV_ADICIONAL?: SortOrder
    C_PORCENTAJE_AFECTADO?: SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrder
    C_IB_MULTIEMPRESA?: SortOrder
    NCorto?: SortOrder
    Estado?: SortOrder
    IB_LF?: SortOrder
    IB_ActivoFijo?: SortOrder
    C_IB_LC?: SortOrder
    C_IB_SOBRE_TASA?: SortOrder
    C_IB_ES_OBLIGATORIO?: SortOrder
    C_IB_INCLUYE_IGV?: SortOrder
    C_IB_CRM?: SortOrder
  }

  export type Service2MinOrderByAggregateInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Srv?: SortOrder
    CodCo?: SortOrder
    Nombre?: SortOrder
    Descrip?: SortOrder
    Cta1?: SortOrder
    Cta2?: SortOrder
    Img?: SortOrder
    Cd_GS?: SortOrder
    Cd_CGP?: SortOrder
    Cd_CC?: SortOrder
    Cd_SC?: SortOrder
    Cd_SS?: SortOrder
    IC_TipServ?: SortOrder
    UsuCrea?: SortOrder
    UsuMdf?: SortOrder
    FecReg?: SortOrder
    FecMdf?: SortOrder
    CA01?: SortOrder
    CA02?: SortOrder
    CA03?: SortOrder
    CA04?: SortOrder
    CA05?: SortOrder
    CA06?: SortOrder
    CA07?: SortOrder
    CA08?: SortOrder
    CA09?: SortOrder
    CA10?: SortOrder
    Cta3?: SortOrder
    Cta4?: SortOrder
    Cta5?: SortOrder
    Cta6?: SortOrder
    Cta7?: SortOrder
    Cta8?: SortOrder
    Cta9?: SortOrder
    Cta10?: SortOrder
    Cta11?: SortOrder
    Cta12?: SortOrder
    C_CD_SRV_INAFECTO?: SortOrder
    C_CD_SRV_AFECTO?: SortOrder
    C_COD_BBSS?: SortOrder
    C_CD_SERV_ADICIONAL?: SortOrder
    C_PORCENTAJE_AFECTADO?: SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrder
    C_IB_MULTIEMPRESA?: SortOrder
    NCorto?: SortOrder
    Estado?: SortOrder
    IB_LF?: SortOrder
    IB_ActivoFijo?: SortOrder
    C_IB_LC?: SortOrder
    C_IB_SOBRE_TASA?: SortOrder
    C_IB_ES_OBLIGATORIO?: SortOrder
    C_IB_INCLUYE_IGV?: SortOrder
    C_IB_CRM?: SortOrder
  }

  export type Service2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Cliente2CountOrderByAggregateInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Clt?: SortOrder
    Cd_TDI?: SortOrder
    NDoc?: SortOrder
    RSocial?: SortOrder
    ApPat?: SortOrder
    ApMat?: SortOrder
    Nom?: SortOrder
    Cd_Pais?: SortOrder
    CodPost?: SortOrder
    Ubigeo?: SortOrder
    Direc?: SortOrder
    Telf1?: SortOrder
    Telf2?: SortOrder
    Fax?: SortOrder
    Correo?: SortOrder
    PWeb?: SortOrder
    Obs?: SortOrder
    CtaCtb?: SortOrder
    DiasCbr?: SortOrder
    PerCbr?: SortOrder
    CtaCte?: SortOrder
    Cd_CGC?: SortOrder
    CA01?: SortOrder
    CA02?: SortOrder
    CA03?: SortOrder
    CA04?: SortOrder
    CA05?: SortOrder
    CA06?: SortOrder
    CA07?: SortOrder
    CA08?: SortOrder
    CA09?: SortOrder
    CA10?: SortOrder
    Cd_Aux?: SortOrder
    Cd_TClt?: SortOrder
    FecReg?: SortOrder
    UsuCrea?: SortOrder
    FecMdf?: SortOrder
    UsuMdf?: SortOrder
    NComercial?: SortOrder
    Cd_Vdr?: SortOrder
    SaldoAFavor?: SortOrder
    Msj_Alert?: SortOrder
    EnvioDocVtaAuto?: SortOrder
    EnvioDocVtaAdjto?: SortOrder
    PassWeb?: SortOrder
    CodEAN?: SortOrder
    C_CD_CC?: SortOrder
    C_FEC_GEN_PASS?: SortOrder
    C_USU_GEN_PASS?: SortOrder
    C_CORREO_ENV_PASS?: SortOrder
    C_FORMACOBRO?: SortOrder
    C_DIASCOBRO?: SortOrder
    C_FEC_AMPLIACION_LINEA_CRED?: SortOrder
    C_MOTIVO_AMPLIACION_LINEA_CRED?: SortOrder
    C_CD_CCOSTOS?: SortOrder
    C_CD_SCCOSTOS?: SortOrder
    C_CD_SSCCOSTOS?: SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrder
    C_FECHA_INGRESO?: SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrder
    C_IB_MULTIEMPRESA?: SortOrder
    C_URBANIZACION?: SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrder
    IB_AgRet?: SortOrder
    IB_AgPercep?: SortOrder
    IB_BuenContrib?: SortOrder
    EsExtranjero?: SortOrder
    DefinirDiasCredito?: SortOrder
    IB_ConsumidorFinal?: SortOrder
    C_IB_PAGO_DESTINO?: SortOrder
    C_IB_AGENTE?: SortOrder
    Estado?: SortOrder
    C_CONTRASENA_WEB?: SortOrder
  }

  export type Cliente2AvgOrderByAggregateInput = {
    id?: SortOrder
    SaldoAFavor?: SortOrder
    C_DIASCOBRO?: SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrder
    IB_AgRet?: SortOrder
    IB_AgPercep?: SortOrder
    IB_BuenContrib?: SortOrder
    EsExtranjero?: SortOrder
    DefinirDiasCredito?: SortOrder
    IB_ConsumidorFinal?: SortOrder
    C_IB_PAGO_DESTINO?: SortOrder
    C_IB_AGENTE?: SortOrder
    Estado?: SortOrder
  }

  export type Cliente2MaxOrderByAggregateInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Clt?: SortOrder
    Cd_TDI?: SortOrder
    NDoc?: SortOrder
    RSocial?: SortOrder
    ApPat?: SortOrder
    ApMat?: SortOrder
    Nom?: SortOrder
    Cd_Pais?: SortOrder
    CodPost?: SortOrder
    Ubigeo?: SortOrder
    Direc?: SortOrder
    Telf1?: SortOrder
    Telf2?: SortOrder
    Fax?: SortOrder
    Correo?: SortOrder
    PWeb?: SortOrder
    Obs?: SortOrder
    CtaCtb?: SortOrder
    DiasCbr?: SortOrder
    PerCbr?: SortOrder
    CtaCte?: SortOrder
    Cd_CGC?: SortOrder
    CA01?: SortOrder
    CA02?: SortOrder
    CA03?: SortOrder
    CA04?: SortOrder
    CA05?: SortOrder
    CA06?: SortOrder
    CA07?: SortOrder
    CA08?: SortOrder
    CA09?: SortOrder
    CA10?: SortOrder
    Cd_Aux?: SortOrder
    Cd_TClt?: SortOrder
    FecReg?: SortOrder
    UsuCrea?: SortOrder
    FecMdf?: SortOrder
    UsuMdf?: SortOrder
    NComercial?: SortOrder
    Cd_Vdr?: SortOrder
    SaldoAFavor?: SortOrder
    Msj_Alert?: SortOrder
    EnvioDocVtaAuto?: SortOrder
    EnvioDocVtaAdjto?: SortOrder
    PassWeb?: SortOrder
    CodEAN?: SortOrder
    C_CD_CC?: SortOrder
    C_FEC_GEN_PASS?: SortOrder
    C_USU_GEN_PASS?: SortOrder
    C_CORREO_ENV_PASS?: SortOrder
    C_FORMACOBRO?: SortOrder
    C_DIASCOBRO?: SortOrder
    C_FEC_AMPLIACION_LINEA_CRED?: SortOrder
    C_MOTIVO_AMPLIACION_LINEA_CRED?: SortOrder
    C_CD_CCOSTOS?: SortOrder
    C_CD_SCCOSTOS?: SortOrder
    C_CD_SSCCOSTOS?: SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrder
    C_FECHA_INGRESO?: SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrder
    C_IB_MULTIEMPRESA?: SortOrder
    C_URBANIZACION?: SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrder
    IB_AgRet?: SortOrder
    IB_AgPercep?: SortOrder
    IB_BuenContrib?: SortOrder
    EsExtranjero?: SortOrder
    DefinirDiasCredito?: SortOrder
    IB_ConsumidorFinal?: SortOrder
    C_IB_PAGO_DESTINO?: SortOrder
    C_IB_AGENTE?: SortOrder
    Estado?: SortOrder
    C_CONTRASENA_WEB?: SortOrder
  }

  export type Cliente2MinOrderByAggregateInput = {
    id?: SortOrder
    RucE?: SortOrder
    Cd_Clt?: SortOrder
    Cd_TDI?: SortOrder
    NDoc?: SortOrder
    RSocial?: SortOrder
    ApPat?: SortOrder
    ApMat?: SortOrder
    Nom?: SortOrder
    Cd_Pais?: SortOrder
    CodPost?: SortOrder
    Ubigeo?: SortOrder
    Direc?: SortOrder
    Telf1?: SortOrder
    Telf2?: SortOrder
    Fax?: SortOrder
    Correo?: SortOrder
    PWeb?: SortOrder
    Obs?: SortOrder
    CtaCtb?: SortOrder
    DiasCbr?: SortOrder
    PerCbr?: SortOrder
    CtaCte?: SortOrder
    Cd_CGC?: SortOrder
    CA01?: SortOrder
    CA02?: SortOrder
    CA03?: SortOrder
    CA04?: SortOrder
    CA05?: SortOrder
    CA06?: SortOrder
    CA07?: SortOrder
    CA08?: SortOrder
    CA09?: SortOrder
    CA10?: SortOrder
    Cd_Aux?: SortOrder
    Cd_TClt?: SortOrder
    FecReg?: SortOrder
    UsuCrea?: SortOrder
    FecMdf?: SortOrder
    UsuMdf?: SortOrder
    NComercial?: SortOrder
    Cd_Vdr?: SortOrder
    SaldoAFavor?: SortOrder
    Msj_Alert?: SortOrder
    EnvioDocVtaAuto?: SortOrder
    EnvioDocVtaAdjto?: SortOrder
    PassWeb?: SortOrder
    CodEAN?: SortOrder
    C_CD_CC?: SortOrder
    C_FEC_GEN_PASS?: SortOrder
    C_USU_GEN_PASS?: SortOrder
    C_CORREO_ENV_PASS?: SortOrder
    C_FORMACOBRO?: SortOrder
    C_DIASCOBRO?: SortOrder
    C_FEC_AMPLIACION_LINEA_CRED?: SortOrder
    C_MOTIVO_AMPLIACION_LINEA_CRED?: SortOrder
    C_CD_CCOSTOS?: SortOrder
    C_CD_SCCOSTOS?: SortOrder
    C_CD_SSCCOSTOS?: SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrder
    C_FECHA_INGRESO?: SortOrder
    C_CODIGO_HOMOLOGACION?: SortOrder
    C_IB_MULTIEMPRESA?: SortOrder
    C_URBANIZACION?: SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrder
    IB_AgRet?: SortOrder
    IB_AgPercep?: SortOrder
    IB_BuenContrib?: SortOrder
    EsExtranjero?: SortOrder
    DefinirDiasCredito?: SortOrder
    IB_ConsumidorFinal?: SortOrder
    C_IB_PAGO_DESTINO?: SortOrder
    C_IB_AGENTE?: SortOrder
    Estado?: SortOrder
    C_CONTRASENA_WEB?: SortOrder
  }

  export type Cliente2SumOrderByAggregateInput = {
    id?: SortOrder
    SaldoAFavor?: SortOrder
    C_DIASCOBRO?: SortOrder
    C_DIAS_TOLERANCIA_CREDITO?: SortOrder
    C_ESTADO_LINEA_CREDITO?: SortOrder
    IB_AgRet?: SortOrder
    IB_AgPercep?: SortOrder
    IB_BuenContrib?: SortOrder
    EsExtranjero?: SortOrder
    DefinirDiasCredito?: SortOrder
    IB_ConsumidorFinal?: SortOrder
    C_IB_PAGO_DESTINO?: SortOrder
    C_IB_AGENTE?: SortOrder
    Estado?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumManualSearchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ManualSearchStatus | EnumManualSearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumManualSearchStatusFilter<$PrismaModel> | $Enums.ManualSearchStatus
  }

  export type ManualSearchCountOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    dateConsulted?: SortOrder
    status?: SortOrder
  }

  export type ManualSearchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ManualSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    dateConsulted?: SortOrder
    status?: SortOrder
  }

  export type ManualSearchMinOrderByAggregateInput = {
    id?: SortOrder
    C_ID?: SortOrder
    dateConsulted?: SortOrder
    status?: SortOrder
  }

  export type ManualSearchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumManualSearchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManualSearchStatus | EnumManualSearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumManualSearchStatusWithAggregatesFilter<$PrismaModel> | $Enums.ManualSearchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManualSearchStatusFilter<$PrismaModel>
    _max?: NestedEnumManualSearchStatusFilter<$PrismaModel>
  }

  export type AttentionCreateNestedManyWithoutPatientInput = {
    create?: XOR<AttentionCreateWithoutPatientInput, AttentionUncheckedCreateWithoutPatientInput> | AttentionCreateWithoutPatientInput[] | AttentionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AttentionCreateOrConnectWithoutPatientInput | AttentionCreateOrConnectWithoutPatientInput[]
    createMany?: AttentionCreateManyPatientInputEnvelope
    connect?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
  }

  export type AttentionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AttentionCreateWithoutPatientInput, AttentionUncheckedCreateWithoutPatientInput> | AttentionCreateWithoutPatientInput[] | AttentionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AttentionCreateOrConnectWithoutPatientInput | AttentionCreateOrConnectWithoutPatientInput[]
    createMany?: AttentionCreateManyPatientInputEnvelope
    connect?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AttentionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AttentionCreateWithoutPatientInput, AttentionUncheckedCreateWithoutPatientInput> | AttentionCreateWithoutPatientInput[] | AttentionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AttentionCreateOrConnectWithoutPatientInput | AttentionCreateOrConnectWithoutPatientInput[]
    upsert?: AttentionUpsertWithWhereUniqueWithoutPatientInput | AttentionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AttentionCreateManyPatientInputEnvelope
    set?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    disconnect?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    delete?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    connect?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    update?: AttentionUpdateWithWhereUniqueWithoutPatientInput | AttentionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AttentionUpdateManyWithWhereWithoutPatientInput | AttentionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AttentionScalarWhereInput | AttentionScalarWhereInput[]
  }

  export type AttentionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AttentionCreateWithoutPatientInput, AttentionUncheckedCreateWithoutPatientInput> | AttentionCreateWithoutPatientInput[] | AttentionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AttentionCreateOrConnectWithoutPatientInput | AttentionCreateOrConnectWithoutPatientInput[]
    upsert?: AttentionUpsertWithWhereUniqueWithoutPatientInput | AttentionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AttentionCreateManyPatientInputEnvelope
    set?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    disconnect?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    delete?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    connect?: AttentionWhereUniqueInput | AttentionWhereUniqueInput[]
    update?: AttentionUpdateWithWhereUniqueWithoutPatientInput | AttentionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AttentionUpdateManyWithWhereWithoutPatientInput | AttentionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AttentionScalarWhereInput | AttentionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAttentionsInput = {
    create?: XOR<PatientCreateWithoutAttentionsInput, PatientUncheckedCreateWithoutAttentionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAttentionsInput
    connect?: PatientWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutAttentionInput = {
    create?: XOR<TicketCreateWithoutAttentionInput, TicketUncheckedCreateWithoutAttentionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttentionInput
    connect?: TicketWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutAttentionsNestedInput = {
    create?: XOR<PatientCreateWithoutAttentionsInput, PatientUncheckedCreateWithoutAttentionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAttentionsInput
    upsert?: PatientUpsertWithoutAttentionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAttentionsInput, PatientUpdateWithoutAttentionsInput>, PatientUncheckedUpdateWithoutAttentionsInput>
  }

  export type TicketUpdateOneRequiredWithoutAttentionNestedInput = {
    create?: XOR<TicketCreateWithoutAttentionInput, TicketUncheckedCreateWithoutAttentionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttentionInput
    upsert?: TicketUpsertWithoutAttentionInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAttentionInput, TicketUpdateWithoutAttentionInput>, TicketUncheckedUpdateWithoutAttentionInput>
  }

  export type AttentionCreateNestedOneWithoutTicketInput = {
    create?: XOR<AttentionCreateWithoutTicketInput, AttentionUncheckedCreateWithoutTicketInput>
    connectOrCreate?: AttentionCreateOrConnectWithoutTicketInput
    connect?: AttentionWhereUniqueInput
  }

  export type AttentionUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<AttentionCreateWithoutTicketInput, AttentionUncheckedCreateWithoutTicketInput>
    connectOrCreate?: AttentionCreateOrConnectWithoutTicketInput
    connect?: AttentionWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AttentionUpdateOneWithoutTicketNestedInput = {
    create?: XOR<AttentionCreateWithoutTicketInput, AttentionUncheckedCreateWithoutTicketInput>
    connectOrCreate?: AttentionCreateOrConnectWithoutTicketInput
    upsert?: AttentionUpsertWithoutTicketInput
    disconnect?: AttentionWhereInput | boolean
    delete?: AttentionWhereInput | boolean
    connect?: AttentionWhereUniqueInput
    update?: XOR<XOR<AttentionUpdateToOneWithWhereWithoutTicketInput, AttentionUpdateWithoutTicketInput>, AttentionUncheckedUpdateWithoutTicketInput>
  }

  export type AttentionUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<AttentionCreateWithoutTicketInput, AttentionUncheckedCreateWithoutTicketInput>
    connectOrCreate?: AttentionCreateOrConnectWithoutTicketInput
    upsert?: AttentionUpsertWithoutTicketInput
    disconnect?: AttentionWhereInput | boolean
    delete?: AttentionWhereInput | boolean
    connect?: AttentionWhereUniqueInput
    update?: XOR<XOR<AttentionUpdateToOneWithWhereWithoutTicketInput, AttentionUpdateWithoutTicketInput>, AttentionUncheckedUpdateWithoutTicketInput>
  }

  export type TicketInfoCreateservicesInput = {
    set: string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketInfoUpdateservicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumManualSearchStatusFieldUpdateOperationsInput = {
    set?: $Enums.ManualSearchStatus
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumManualSearchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ManualSearchStatus | EnumManualSearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumManualSearchStatusFilter<$PrismaModel> | $Enums.ManualSearchStatus
  }

  export type NestedEnumManualSearchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManualSearchStatus | EnumManualSearchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ManualSearchStatus[] | ListEnumManualSearchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumManualSearchStatusWithAggregatesFilter<$PrismaModel> | $Enums.ManualSearchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManualSearchStatusFilter<$PrismaModel>
    _max?: NestedEnumManualSearchStatusFilter<$PrismaModel>
  }

  export type AttentionCreateWithoutPatientInput = {
    id?: string
    sequence?: number
    ticket: TicketCreateNestedOneWithoutAttentionInput
  }

  export type AttentionUncheckedCreateWithoutPatientInput = {
    id?: string
    sequence?: number
    ticketId: number
  }

  export type AttentionCreateOrConnectWithoutPatientInput = {
    where: AttentionWhereUniqueInput
    create: XOR<AttentionCreateWithoutPatientInput, AttentionUncheckedCreateWithoutPatientInput>
  }

  export type AttentionCreateManyPatientInputEnvelope = {
    data: AttentionCreateManyPatientInput | AttentionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AttentionUpsertWithWhereUniqueWithoutPatientInput = {
    where: AttentionWhereUniqueInput
    update: XOR<AttentionUpdateWithoutPatientInput, AttentionUncheckedUpdateWithoutPatientInput>
    create: XOR<AttentionCreateWithoutPatientInput, AttentionUncheckedCreateWithoutPatientInput>
  }

  export type AttentionUpdateWithWhereUniqueWithoutPatientInput = {
    where: AttentionWhereUniqueInput
    data: XOR<AttentionUpdateWithoutPatientInput, AttentionUncheckedUpdateWithoutPatientInput>
  }

  export type AttentionUpdateManyWithWhereWithoutPatientInput = {
    where: AttentionScalarWhereInput
    data: XOR<AttentionUpdateManyMutationInput, AttentionUncheckedUpdateManyWithoutPatientInput>
  }

  export type AttentionScalarWhereInput = {
    AND?: AttentionScalarWhereInput | AttentionScalarWhereInput[]
    OR?: AttentionScalarWhereInput[]
    NOT?: AttentionScalarWhereInput | AttentionScalarWhereInput[]
    id?: StringFilter<"Attention"> | string
    sequence?: IntFilter<"Attention"> | number
    patientId?: StringFilter<"Attention"> | string
    ticketId?: IntFilter<"Attention"> | number
  }

  export type PatientCreateWithoutAttentionsInput = {
    id?: string
    sequence?: number
    firstName: string
    lastName: string
    dni: string
    age: number
    sex: string
    createdAt?: Date | string
  }

  export type PatientUncheckedCreateWithoutAttentionsInput = {
    id?: string
    sequence?: number
    firstName: string
    lastName: string
    dni: string
    age: number
    sex: string
    createdAt?: Date | string
  }

  export type PatientCreateOrConnectWithoutAttentionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAttentionsInput, PatientUncheckedCreateWithoutAttentionsInput>
  }

  export type TicketCreateWithoutAttentionInput = {
    cidDetail: string
    cidItem: string
    ccodProdServItem: string
    cdescriptItem: string
    cindicadoPsItem: string
    cvalorVentaUnitaria: string
    cprecioVentaUnitarioItem: string
    ccantidadItem: string
    cValorItem: string
    cigvTotalItem: string
    ctotalItem: string
    ccodSunatProdServItem: string
    ccodComercialProdServ: string
    cid: string
    cfecEd: string
    ctipDocEmisor: string
    capaminoRazonSocialEmisor: string
    cubigeoEmisor: string
    cdireccionEmisor: string
    cdepartamentoEmisor: string
    cprovinciaEmisor: string
    cdistritoEmisor: string
    cnombreComercialEmisor: string
    cTipDoc: string
    cnroSerie: string
    cnroDoc: string
    cinfoDocAdquiriente: string
    ctipDocAdquiriente: string
    capaminoRazonSocialAdquiriente: string
    cmoneda: string
    ctotalOperacionesGrav: string
    cmontoTotalIgv: string
    cmontoTotalPagar: string
    cmontoTotalPercep: string
    cleyenda: string
    cfecCreaFace: string
    ccodigoBarras: string
    ccodigpQr: string
    isValidated?: boolean | null
    validatesDate?: Date | string | null
    valitadedBy?: string | null
  }

  export type TicketUncheckedCreateWithoutAttentionInput = {
    id?: number
    cidDetail: string
    cidItem: string
    ccodProdServItem: string
    cdescriptItem: string
    cindicadoPsItem: string
    cvalorVentaUnitaria: string
    cprecioVentaUnitarioItem: string
    ccantidadItem: string
    cValorItem: string
    cigvTotalItem: string
    ctotalItem: string
    ccodSunatProdServItem: string
    ccodComercialProdServ: string
    cid: string
    cfecEd: string
    ctipDocEmisor: string
    capaminoRazonSocialEmisor: string
    cubigeoEmisor: string
    cdireccionEmisor: string
    cdepartamentoEmisor: string
    cprovinciaEmisor: string
    cdistritoEmisor: string
    cnombreComercialEmisor: string
    cTipDoc: string
    cnroSerie: string
    cnroDoc: string
    cinfoDocAdquiriente: string
    ctipDocAdquiriente: string
    capaminoRazonSocialAdquiriente: string
    cmoneda: string
    ctotalOperacionesGrav: string
    cmontoTotalIgv: string
    cmontoTotalPagar: string
    cmontoTotalPercep: string
    cleyenda: string
    cfecCreaFace: string
    ccodigoBarras: string
    ccodigpQr: string
    isValidated?: boolean | null
    validatesDate?: Date | string | null
    valitadedBy?: string | null
  }

  export type TicketCreateOrConnectWithoutAttentionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAttentionInput, TicketUncheckedCreateWithoutAttentionInput>
  }

  export type PatientUpsertWithoutAttentionsInput = {
    update: XOR<PatientUpdateWithoutAttentionsInput, PatientUncheckedUpdateWithoutAttentionsInput>
    create: XOR<PatientCreateWithoutAttentionsInput, PatientUncheckedCreateWithoutAttentionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAttentionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAttentionsInput, PatientUncheckedUpdateWithoutAttentionsInput>
  }

  export type PatientUpdateWithoutAttentionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateWithoutAttentionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithoutAttentionInput = {
    update: XOR<TicketUpdateWithoutAttentionInput, TicketUncheckedUpdateWithoutAttentionInput>
    create: XOR<TicketCreateWithoutAttentionInput, TicketUncheckedCreateWithoutAttentionInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAttentionInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAttentionInput, TicketUncheckedUpdateWithoutAttentionInput>
  }

  export type TicketUpdateWithoutAttentionInput = {
    cidDetail?: StringFieldUpdateOperationsInput | string
    cidItem?: StringFieldUpdateOperationsInput | string
    ccodProdServItem?: StringFieldUpdateOperationsInput | string
    cdescriptItem?: StringFieldUpdateOperationsInput | string
    cindicadoPsItem?: StringFieldUpdateOperationsInput | string
    cvalorVentaUnitaria?: StringFieldUpdateOperationsInput | string
    cprecioVentaUnitarioItem?: StringFieldUpdateOperationsInput | string
    ccantidadItem?: StringFieldUpdateOperationsInput | string
    cValorItem?: StringFieldUpdateOperationsInput | string
    cigvTotalItem?: StringFieldUpdateOperationsInput | string
    ctotalItem?: StringFieldUpdateOperationsInput | string
    ccodSunatProdServItem?: StringFieldUpdateOperationsInput | string
    ccodComercialProdServ?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    cfecEd?: StringFieldUpdateOperationsInput | string
    ctipDocEmisor?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialEmisor?: StringFieldUpdateOperationsInput | string
    cubigeoEmisor?: StringFieldUpdateOperationsInput | string
    cdireccionEmisor?: StringFieldUpdateOperationsInput | string
    cdepartamentoEmisor?: StringFieldUpdateOperationsInput | string
    cprovinciaEmisor?: StringFieldUpdateOperationsInput | string
    cdistritoEmisor?: StringFieldUpdateOperationsInput | string
    cnombreComercialEmisor?: StringFieldUpdateOperationsInput | string
    cTipDoc?: StringFieldUpdateOperationsInput | string
    cnroSerie?: StringFieldUpdateOperationsInput | string
    cnroDoc?: StringFieldUpdateOperationsInput | string
    cinfoDocAdquiriente?: StringFieldUpdateOperationsInput | string
    ctipDocAdquiriente?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialAdquiriente?: StringFieldUpdateOperationsInput | string
    cmoneda?: StringFieldUpdateOperationsInput | string
    ctotalOperacionesGrav?: StringFieldUpdateOperationsInput | string
    cmontoTotalIgv?: StringFieldUpdateOperationsInput | string
    cmontoTotalPagar?: StringFieldUpdateOperationsInput | string
    cmontoTotalPercep?: StringFieldUpdateOperationsInput | string
    cleyenda?: StringFieldUpdateOperationsInput | string
    cfecCreaFace?: StringFieldUpdateOperationsInput | string
    ccodigoBarras?: StringFieldUpdateOperationsInput | string
    ccodigpQr?: StringFieldUpdateOperationsInput | string
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validatesDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUncheckedUpdateWithoutAttentionInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidDetail?: StringFieldUpdateOperationsInput | string
    cidItem?: StringFieldUpdateOperationsInput | string
    ccodProdServItem?: StringFieldUpdateOperationsInput | string
    cdescriptItem?: StringFieldUpdateOperationsInput | string
    cindicadoPsItem?: StringFieldUpdateOperationsInput | string
    cvalorVentaUnitaria?: StringFieldUpdateOperationsInput | string
    cprecioVentaUnitarioItem?: StringFieldUpdateOperationsInput | string
    ccantidadItem?: StringFieldUpdateOperationsInput | string
    cValorItem?: StringFieldUpdateOperationsInput | string
    cigvTotalItem?: StringFieldUpdateOperationsInput | string
    ctotalItem?: StringFieldUpdateOperationsInput | string
    ccodSunatProdServItem?: StringFieldUpdateOperationsInput | string
    ccodComercialProdServ?: StringFieldUpdateOperationsInput | string
    cid?: StringFieldUpdateOperationsInput | string
    cfecEd?: StringFieldUpdateOperationsInput | string
    ctipDocEmisor?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialEmisor?: StringFieldUpdateOperationsInput | string
    cubigeoEmisor?: StringFieldUpdateOperationsInput | string
    cdireccionEmisor?: StringFieldUpdateOperationsInput | string
    cdepartamentoEmisor?: StringFieldUpdateOperationsInput | string
    cprovinciaEmisor?: StringFieldUpdateOperationsInput | string
    cdistritoEmisor?: StringFieldUpdateOperationsInput | string
    cnombreComercialEmisor?: StringFieldUpdateOperationsInput | string
    cTipDoc?: StringFieldUpdateOperationsInput | string
    cnroSerie?: StringFieldUpdateOperationsInput | string
    cnroDoc?: StringFieldUpdateOperationsInput | string
    cinfoDocAdquiriente?: StringFieldUpdateOperationsInput | string
    ctipDocAdquiriente?: StringFieldUpdateOperationsInput | string
    capaminoRazonSocialAdquiriente?: StringFieldUpdateOperationsInput | string
    cmoneda?: StringFieldUpdateOperationsInput | string
    ctotalOperacionesGrav?: StringFieldUpdateOperationsInput | string
    cmontoTotalIgv?: StringFieldUpdateOperationsInput | string
    cmontoTotalPagar?: StringFieldUpdateOperationsInput | string
    cmontoTotalPercep?: StringFieldUpdateOperationsInput | string
    cleyenda?: StringFieldUpdateOperationsInput | string
    cfecCreaFace?: StringFieldUpdateOperationsInput | string
    ccodigoBarras?: StringFieldUpdateOperationsInput | string
    ccodigpQr?: StringFieldUpdateOperationsInput | string
    isValidated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validatesDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valitadedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttentionCreateWithoutTicketInput = {
    id?: string
    sequence?: number
    patient: PatientCreateNestedOneWithoutAttentionsInput
  }

  export type AttentionUncheckedCreateWithoutTicketInput = {
    id?: string
    sequence?: number
    patientId: string
  }

  export type AttentionCreateOrConnectWithoutTicketInput = {
    where: AttentionWhereUniqueInput
    create: XOR<AttentionCreateWithoutTicketInput, AttentionUncheckedCreateWithoutTicketInput>
  }

  export type AttentionUpsertWithoutTicketInput = {
    update: XOR<AttentionUpdateWithoutTicketInput, AttentionUncheckedUpdateWithoutTicketInput>
    create: XOR<AttentionCreateWithoutTicketInput, AttentionUncheckedCreateWithoutTicketInput>
    where?: AttentionWhereInput
  }

  export type AttentionUpdateToOneWithWhereWithoutTicketInput = {
    where?: AttentionWhereInput
    data: XOR<AttentionUpdateWithoutTicketInput, AttentionUncheckedUpdateWithoutTicketInput>
  }

  export type AttentionUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    patient?: PatientUpdateOneRequiredWithoutAttentionsNestedInput
  }

  export type AttentionUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
  }

  export type AttentionCreateManyPatientInput = {
    id?: string
    sequence?: number
    ticketId: number
  }

  export type AttentionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    ticket?: TicketUpdateOneRequiredWithoutAttentionNestedInput
  }

  export type AttentionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
  }

  export type AttentionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PatientCountOutputTypeDefaultArgs instead
     */
    export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttentionDefaultArgs instead
     */
    export type AttentionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttentionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestTicketDefaultArgs instead
     */
    export type TestTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestTicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketInfoDefaultArgs instead
     */
    export type TicketInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketInfoDetailDefaultArgs instead
     */
    export type TicketInfoDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketInfoDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Service2DefaultArgs instead
     */
    export type Service2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Service2DefaultArgs<ExtArgs>
    /**
     * @deprecated Use Cliente2DefaultArgs instead
     */
    export type Cliente2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Cliente2DefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManualSearchDefaultArgs instead
     */
    export type ManualSearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManualSearchDefaultArgs<ExtArgs>

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