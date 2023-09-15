# AngularHandleError

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

Este proyecto muestra como gestionar errores y enviarlos a Azure Application Insights en Angular.

## Comandos para generar el proyecto

            ng new {nombre_proyecto} --no-create-application
            ng new generate application app-web
            ng new generate library app-lib

## Librerias

En este proyecto hemos instalado las siguientes librerias:

- [Material](https://www.npmjs.com/package/@angular/material)

            npm install @angular/material

- [Application Insights Angular Plugin](https://www.npmjs.com/package/@microsoft/applicationinsights-angularplugin-js)

            npm install @microsoft/applicationinsight-angularplugin-js

- [Application Insights Web](https://www.npmjs.com/package/@microsoft/applicationinsights-web)

            npm install @microsoft/applicationinsight-web

## Servicios

### HandleError

Servicio personalizado que hereda de HandleError del modulo @angular/core. Este servicio será el encargado de llamar al servicio Insights para registrar el error en Azure Application Insights. Es necesario poner nuestro servicio como proveedor en el fichero app.module.ts. 

            @NgModule({
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    MatButtonModule
                ],
                providers: [{ provide: ErrorHandler, useClass: ErrorHandleService}],
                bootstrap: [AppComponent]
            })
            export class AppModule { }

### Insights

Este servicio se conecta con el servicio Application Insights de Azure para proporcionar métodos de registro de logs, trazas, metricas y excepciones. 