import config  from "../utils/env";
import swaggerJSDoc from "swagger-jsdoc";

const option: swaggerJSDoc.Options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'E COMMERCE Yami API DOCUMENTATION',
            version:'1.0.0',
            description:'Dokumnetasi Lengkap API E-Commerce',
            contact:{
                name:'Backend developer'
            },
        },
        servers:[
        {
            url:`http://${config.HOST}:${config.PORT}/api`,
            description:'Development'
        }
        ],
        components:{
            securitySchemes:{
                bearerAuth:{
                    type:'http',
                    scheme:'bearer',
                    bearerFormat:'JWT'
                }
            }
        },
        security:[
            {
                bearerAuth:[],
            },
        ],
    },
    apis:['src/routes/*.ts']
}

const swaggerSpec = swaggerJSDoc(option)

export default swaggerSpec