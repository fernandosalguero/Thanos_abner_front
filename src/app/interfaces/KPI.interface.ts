export interface KPIinterface {
    REP: string;
    DNI: number;
    Mes: string;
    Porcentaje_SATI: number;
    Cuartil_Sati:number;
    Porcentaje_NPS: number;
    Cuartil_NPS: string;
    Porcentaje_Resolucion: number;
    Cuartil_Resolucion: string;
    Encuestas: number;
    Porcentaje_Insatisfaccion: number;
    Atentidos_Totales: number;
    Horas_Producidas: number;
    Casos_X_Hora: number;
    Cuartil_CXH: string;
    Utilizacion: number;
    CV_Utilizacion: number;
    Deslogueo: number;
    Porcentaje_Deslogueo: number;
    CV_Deslogueo: number;
    Deslogueo_Real: number;
    Porcentaje_Deslogueo_Real: number;
    Cuartil_Deslogueo: number;
    Ausentismo_C_Covid: string;
    Ausentismo_S_Covid: string;
    Ausentismo_sin_Covid: string;
    Licencia_Prolongada: string;
    Llegadas_Tarde: number;
    Premios: string;

    Fecha: string;
    IDdeCaso: number;
    Grupo: string;
    ASESOR: string;
    Respuesta: number;
    Satisfaccion: string;
    NPS: string;
}