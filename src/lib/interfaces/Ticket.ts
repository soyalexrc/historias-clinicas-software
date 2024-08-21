export interface TicketForReports {
    id: number;
    C_ID: string;
    C_FEC_CREA_FACE: string;
    C_NRO_SERIE: string;
    C_NRO_DOC: string;
    C_NRO_DOC_ADQUIRIENTE: string;
    C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE: string;
    C_MONTO_TOTAL_IGV: number;
    C_MONTO_PAGAR: number;
    C_MONEDA: string;
    details: TicketForReportsDetail[];
}

export interface TicketForReportsDetail {
    id: number;
    C_DESRIP_ITEM: string;
    C_VALOR_VENTA_UNITARIA: string;
    C_PRECIO_VENTA_UNITARIO_ITEM: string;
    C_VALOR_ITEM: string;
    C_TOTAL_ITEM: string;
    C_IGV_TOTAL_ITEM: string;
    C_COD_COMERCIAL_PROD_SERV: string;
    C_COD_PROD_SERV_ITEM: string;
    C_CANTIDAD_ITEM: string;
    sid: number;
    Cd_Srv: string;
    CodCo: string;
    Nombre: string;
    Descrip: string;
    CA01: string;
    CA02: string;
}
