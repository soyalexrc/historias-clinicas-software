export interface TicketForReports {
    id: number;
    C_ID: number;
    C_FEC_ED: Date | string;
    C_TIP_DOC_EMISOR: string;
    C_APAMNO_RAZON_SOCIAL_EMISOR: string;
    C_UBIGEO_EMISOR: string;
    C_DIRECCION_EMISOR: string;
    C_DEPARTAMENTO_EMISOR: string;
    C_PROVINCIA_EMISOR: string;
    C_DISTRITO_EMISOR: string;
    C_NOMBRE_COMERCIAL_EMISOR: string;
    C_TIP_DOC: string;
    C_NRO_SERIE: string;
    C_NRO_DOC: string;
    C_NRO_DOC_ADQUIRIENTE: string;
    C_TIP_DOC_ADQUIRIENTE: string;
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string;
    C_MONEDA: string;
    C_RUCE: string;
    C_MONTO_TOTAL_IGV: number;
    C_TOTAL_OPERACIONES_GRAV: number;
    C_MONTO_PAGAR: number;
    C_MONTO_TOTAL_PERCEP: number;
    C_LEYENDA: string;
    C_FEC_CREA_FACE: Date | string;
    isValidated: boolean;
    validatedDate: null;
    valitadedBy: null;
    services: string[];
    details: Detail[];
}

export interface Detail {
    id: number;
    C_ID: number;
    C_ID_ITEM: number;
    C_DESCRIP_ITEM: string;
    C_COD_PROD_SERV_ITEM: string;
    C_VALOR_VENTA_UNITARIA: number;
    C_INDICADOR_PS_ITEM: string;
    C_PRECIO_VENTA_UNITARIO_ITEM: number;
    C_CANTIDAD_ITEM: number;
    C_IGV_TOTAL_ITEM: number;
    C_TOTAL_ITEM: number;
    C_VALOR_ITEM: number;
    C_COD_SUNAT_PROD_SERV_ITEM: string;
    C_COD_COMERCIAL_PROD_SERV: string;
    service: Service;
}

export interface Service {
    Cd_Srv: string;
    id: number;
    CA01: string;
    CA02: string;
    CodCo: string;
    Descrip: string;
    Nombre: string;
}
