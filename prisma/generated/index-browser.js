
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.1
 * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
 */
Prisma.prismaVersion = {
  client: "5.15.1",
  engine: "5675a3182f972f1a8f31d16eee6abf4fd54910e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PatientScalarFieldEnum = {
  id: 'id',
  sequence: 'sequence',
  firstName: 'firstName',
  lastName: 'lastName',
  dni: 'dni',
  age: 'age',
  sex: 'sex',
  createdAt: 'createdAt'
};

exports.Prisma.AttentionScalarFieldEnum = {
  id: 'id',
  sequence: 'sequence',
  patientId: 'patientId',
  ticketId: 'ticketId'
};

exports.Prisma.TicketScalarFieldEnum = {
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

exports.Prisma.TestTicketScalarFieldEnum = {
  id: 'id',
  jsonString: 'jsonString'
};

exports.Prisma.TicketInfoScalarFieldEnum = {
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

exports.Prisma.TicketInfoDetailScalarFieldEnum = {
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

exports.Prisma.Service2ScalarFieldEnum = {
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

exports.Prisma.Cliente2ScalarFieldEnum = {
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

exports.Prisma.ManualSearchScalarFieldEnum = {
  id: 'id',
  C_ID: 'C_ID',
  dateConsulted: 'dateConsulted',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ManualSearchStatus = exports.$Enums.ManualSearchStatus = {
  PENDING: 'PENDING',
  NOT_FOUND: 'NOT_FOUND'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
