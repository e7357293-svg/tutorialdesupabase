/**
 * Datos del informe: «Lo que aprendí del video»
 * Colegio Asunción Escalada
 * Análisis del tutorial de Fazt Code: "Supabase, Tutorial Práctico y Overview (REST API)"
 */

export interface QuestionItem {
  id: number;
  question: string;
  category: string;
  summaryAnswer: string;
  fullAnswer: string;
  materialExample: string;
  keyPoints: string[];
}

export interface ConceptItem {
  id: string;
  name: string;
  tag: string;
  definition: string;
  howItWorks: string;
  importance: string;
}

export const STUDENT_INFO = {
  title: "Lo que aprendí del video",
  subtitle: "Supabase, Tutorial Práctico y Overview (REST API) — Análisis de Fazt Code",
  institution: "Colegio Asunción Escalada",
  videoUrl: "https://www.youtube.com/watch?v=pi33WDrgfpI",
  videoAuthor: "Fazt Code",
  videoDuration: "Aprox. 45 minutos"
};

export const INTRODUCTION_TEXT = {
  briefSummary: `En este trabajo estuve mirando el tutorial de Fazt Code sobre Supabase. Básicamente el video te enseña cómo armar una base de datos en internet sin tener que complicarte la vida programando todo un backend desde cero en Node o Express. Fazt muestra cómo registrarte en Supabase, cómo crear una tabla como si fuera una hoja de cálculo con filas y columnas usando PostgreSQL, y lo mejor de todo es que la misma página te genera los enlaces (la API REST) para que puedas consultar, guardar y borrar datos mandando peticiones con JSON desde cualquier página web.`,
  whatStoodOut: `Lo que más me sorprendió es que no estás atado a bases de datos raras o cerradas; tenés un PostgreSQL real que podés mudar cuando quieras. Encima, cada vez que creás una columna en la tabla, el panel te redacta solo el código en JavaScript y cURL listo para usar.`,
  coreObjective: `Organicé toda la información contestando las 12 preguntas que nos pidieron, resumiendo los 5 conceptos clave que me quedaron grabados, mostrando una prueba práctica de cómo mandar las peticiones y mi conclusión sobre cómo esto me sirve para proyectos futuros del colegio.`
};

export const FUNDAMENTAL_CONCEPTS: ConceptItem[] = [
  {
    id: "baas",
    name: "BaaS (Backend as a Service)",
    tag: "Servicio en la Nube",
    definition: "Es tener todo el servidor ya resuelto y listo en internet. Te entregan la base de datos, el sistema de usuarios y las conexiones para que vos te enfoques solamente en diseñar y programar la parte visual de tu web.",
    howItWorks: "En vez de contratar un servidor, instalar Linux y programar cada ruta a mano, el proveedor se ocupa del mantenimiento y te da una dirección web y claves para conectarte desde el navegador.",
    importance: "Te ahorra días enteros de trabajo repetitivo y te permite tener un proyecto funcionando en minutos."
  },
  {
    id: "postgresql",
    name: "PostgreSQL en la Nube",
    tag: "Base de Datos",
    definition: "Es el motor de base de datos que corre por detrás en Supabase. Guarda todo de forma organizada en tablas con filas, columnas y tipos de datos que no se pueden romper.",
    howItWorks: "Supabase te levanta un servidor de PostgreSQL de verdad. Podés definir campos de texto, números, fechas o booleanos (verdadero/falso), y relacionar tablas entre sí usando claves.",
    importance: "Asegura que los datos estén bien estructurados y protegidos, sin el desorden que a veces pasa cuando se usan bases de datos no relacionales."
  },
  {
    id: "postgrest",
    name: "REST API Autogenerada (PostgREST)",
    tag: "Conexión Web",
    definition: "Es la herramienta que hace la magia de traducir tus tablas de la base de datos a direcciones web (endpoints) para que puedas pedir o guardar datos directamente por HTTP.",
    howItWorks: "Si creás una tabla llamada 'tareas', el sistema te habilita al instante la dirección '/rest/v1/tareas'. Cuando le mandás un GET te devuelve la lista en JSON, y con un POST te guarda un registro nuevo.",
    importance: "Te evita tener que escribir controladores, rutas y funciones de servidor a mano para cada cosa que quieras guardar."
  },
  {
    id: "api-keys-rls",
    name: "API Keys y Row Level Security (RLS)",
    tag: "Seguridad y Accesos",
    definition: "Es el sistema de llaves y reglas que controla quién puede mirar o modificar las cosas guardadas en la base de datos.",
    howItWorks: "Tenés una llave pública (anon key) que va en la página web, y una secreta (service_role) para el servidor. Con el RLS le ponés condiciones a cada fila, como por ejemplo que cada alumno solo pueda ver o cambiar sus propias tareas y no las de los demás.",
    importance: "Evita que cualquier persona que mire el código de tu web pueda borrarte o robarte la información de la base de datos."
  },
  {
    id: "crud-json",
    name: "CRUD mediante HTTP y JSON",
    tag: "Intercambio de Datos",
    definition: "Son las cuatro acciones típicas que se hacen con la información: crear (POST), leer (GET), actualizar (PATCH) y borrar (DELETE), usando mensajitos de texto en formato JSON.",
    howItWorks: "Tu página le manda un paquete con datos como { 'titulo': 'Comprar cuadernos', 'completada': false }, el servidor lo procesa y te contesta si salió todo bien con códigos como 200 OK o 201 Created.",
    importance: "Es el estándar con el que funciona prácticamente todo internet hoy en día, así que cualquier aplicación puede conectarse sin problemas."
  }
];

export const QUESTIONNAIRE_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: "¿Cuál es el tema principal del video? Explica de qué trata.",
    category: "Tema Central",
    summaryAnswer: "Trata sobre Supabase como alternativa libre a Firebase y cómo usar su REST API sobre PostgreSQL.",
    fullAnswer: "El video trata sobre Supabase, que es una plataforma de código abierto que sirve como alternativa a Firebase. Fazt muestra cómo crear una cuenta, levantar una base de datos en la nube basada en PostgreSQL y crear tablas desde una interfaz visual muy fácil de usar. Lo principal que enseña es cómo la plataforma genera de forma automática una API REST completa para que podamos consultar, guardar y modificar datos desde nuestra página web sin tener que programar ningún servidor a mano.",
    materialExample: "En el video, Fazt entra al sitio oficial de Supabase, crea un proyecto nuevo y arma una tabla llamada 'tasks' para mostrar cómo se conecta de inmediato a internet.",
    keyPoints: [
      "Plataforma libre que compite con Firebase",
      "Base de datos PostgreSQL real en la nube",
      "Crea endpoints REST de forma automática",
      "Panel visual para armar tablas sin comandos complicados"
    ]
  },
  {
    id: 2,
    question: "¿Qué problema o necesidad tecnológica se aborda?",
    category: "Problema Tecnológico",
    summaryAnswer: "El dolor de cabeza de tener que montar servidores y programar APIs manuales desde cero para cada proyecto.",
    fullAnswer: "Aborda el problema de todo el tiempo y trabajo que cuesta armar la infraestructura de backend cada vez que uno quiere hacer una aplicación. Normalmente tenés que alquilar un servidor, instalar Node.js, configurar la base de datos, escribir las rutas para recibir peticiones, pelear con los permisos y recién ahí empezar a programar la web. Para proyectos escolares o prototipos rápidos, todo eso te hace perder semanas; Supabase soluciona esto dándote la base de datos y la API funcionando en 5 minutos.",
    materialExample: "Fazt comenta que muchas veces uno solo quiere hacer una aplicación sencilla y que tener que programar todo el servidor desde cero es algo repetitivo e innecesario.",
    keyPoints: [
      "Ahorra semanas de configuración de servidores",
      "Elimina código repetitivo de rutas y controladores",
      "Permite lanzar prototipos y proyectos al instante",
      "Evita depender de servicios cerrados como Firebase"
    ]
  },
  {
    id: 3,
    question: "¿Cuáles son los cinco conceptos más importantes? Define cada uno.",
    category: "Conceptos Clave",
    summaryAnswer: "BaaS, PostgreSQL, PostgREST, API Keys con RLS y operaciones CRUD en JSON.",
    fullAnswer: "Los cinco puntos más importantes son: 1) BaaS (Backend as a Service), que es tener los servicios de servidor empaquetados en la nube; 2) PostgreSQL, el motor de base de datos relacional que guarda todo en tablas ordenadas; 3) PostgREST, la herramienta interna que genera las rutas HTTP de forma automática al crear tablas; 4) Las API Keys y el RLS (Row Level Security), que son las llaves de acceso y las reglas de seguridad fila por fila; y 5) Las operaciones CRUD con JSON, que es la forma estándar de crear, leer, actualizar y borrar datos mediante peticiones web.",
    materialExample: "Fazt va recorriendo el panel y muestra la sección del Table Editor (PostgreSQL), la pestaña de API (PostgREST y llaves anon/service) y las opciones de seguridad.",
    keyPoints: [
      "1. BaaS: Servidor listo en la nube",
      "2. PostgreSQL: Base de datos estructurada con tablas",
      "3. PostgREST: Generador de rutas REST automáticas",
      "4. API Keys y RLS: Llaves y reglas de seguridad",
      "5. CRUD y JSON: Consultas y formato de datos estándar"
    ]
  },
  {
    id: 4,
    question: "¿Qué herramientas, programas o tecnologías se mencionan y para qué sirven?",
    category: "Herramientas",
    summaryAnswer: "Supabase Cloud, PostgreSQL, Postman / cURL, PostgREST y la librería de JavaScript.",
    fullAnswer: "En el video se usan varias herramientas: la plataforma de Supabase Cloud para administrar proyectos y tablas; PostgreSQL como motor donde se guardan físicamente los datos; PostgREST que funciona por detrás para publicar los endpoints de la API; herramientas como Postman o cURL para mandar peticiones HTTP y probar que todo responda bien; y la librería oficial de JavaScript de Supabase (@supabase/supabase-js) para conectar páginas web de forma directa.",
    materialExample: "Fazt abre una herramienta de peticiones HTTP en su computadora y envía comandos con cURL directamente a la dirección de Supabase para ver qué datos le responde.",
    keyPoints: [
      "Supabase Cloud: Panel de control en el navegador",
      "PostgreSQL: Almacén seguro de los datos",
      "PostgREST: Puente automático entre la base y la web",
      "Postman / cURL: Para hacer pruebas de envío y recepción",
      "Supabase JS: Librería para conectar el código del frontend"
    ]
  },
  {
    id: 5,
    question: "¿Qué procedimientos o pasos se explican? Preséntalos en orden.",
    category: "Procedimientos",
    summaryAnswer: "Crear cuenta -> Nuevo proyecto -> Crear tabla en Table Editor -> Configurar RLS -> Ver API Docs -> Probar HTTP -> Filtrar.",
    fullAnswer: "El paso a paso que enseña Fazt es muy ordenado: 1) Te creás la cuenta en Supabase con GitHub y armás un proyecto nuevo con su nombre, contraseña de base de datos y región; 2) Entrás al Table Editor y creás la tabla (en el video crea 'tasks') definiendo las columnas y sus tipos de datos; 3) Revisás la seguridad y el RLS; 4) Vas a la pestaña de 'API' para copiar la URL del proyecto y la anon_key pública; 5) Abrís una herramienta para mandar peticiones y hacés un GET para consultar los registros; 6) Mandás un POST con un JSON para guardar una fila nueva; y 7) Agregás parámetros en la URL para ordenar y filtrar la información.",
    materialExample: "Fazt primero diseña la tabla con columnas id, name e is_complete, copia la apikey del panel, y en su cliente HTTP manda la consulta comprobando que aparezca el resultado.",
    keyPoints: [
      "Paso 1: Alta del proyecto en Supabase",
      "Paso 2: Creación visual de la tabla y columnas",
      "Paso 3: Definición de clave primaria y tipos",
      "Paso 4: Copia de credenciales en la pestaña API",
      "Paso 5: Envío de consultas GET y POST",
      "Paso 6: Uso de filtros en la dirección web"
    ]
  },
  {
    id: 6,
    question: "¿Qué ejemplos prácticos aparecen? Explica uno detalladamente.",
    category: "Casos Prácticos",
    summaryAnswer: "La creación de una lista de tareas (tasks) y su manejo completo con peticiones REST.",
    fullAnswer: "El ejemplo principal que hace en el video es una lista de tareas ('tasks'). Fazt entra al Table Editor y agrega la tabla con tres columnas: 'id' (número autoincremental que sirve de clave única), 'name' (texto para el nombre de la tarea) y 'is_complete' (booleano que arranca en falso). Para probarla, abre su cliente de peticiones y hace un POST mandando en la cabecera la 'apikey' y en el cuerpo un JSON con { 'name': 'Aprender Supabase', 'is_complete': false }. Al instante el servidor le devuelve código 201 Created y la tarea aparece en la tabla del panel sin recargar. Luego hace un GET con el filtro '?is_complete=eq.false' y le devuelve únicamente las tareas que están pendientes.",
    materialExample: "Fazt muestra cómo al enviar el POST desde el cliente de pruebas, la fila aparece sola en el panel de Supabase en tiempo real, demostrando que ya está guardada en la base de datos.",
    keyPoints: [
      "Tabla 'tasks' con id, name e is_complete",
      "Petición POST con cuerpo JSON para guardar",
      "Respuesta del servidor con código 201 Created",
      "Consulta GET filtrada por '?is_complete=eq.false'",
      "Verificación inmediata en la tabla del panel"
    ]
  },
  {
    id: 7,
    question: "¿Qué conocimientos previos son necesarios para comprender lo explicado?",
    category: "Requisitos Previos",
    summaryAnswer: "Bases de datos básicas, conceptos de HTTP/REST, formato JSON y un poco de JavaScript.",
    fullAnswer: "Para entender el video se necesitan cosas básicas: entender qué es una tabla en una base de datos (filas, columnas, tipos de datos como texto o números y qué es una clave primaria); saber qué son los métodos HTTP (que GET es para pedir, POST para guardar, DELETE para borrar y qué son los códigos como 200 o 404); entender cómo se escribe un objeto JSON con llaves y comillas; y un poco de noción de JavaScript para darse cuenta de cómo se conectaría todo en una página web real.",
    materialExample: "Fazt va escribiendo JSON con clave y valor y asume que el que mira el video sabe qué es un header de autorización como 'Bearer' y por qué se usa.",
    keyPoints: [
      "Estructura de tablas y tipos de datos en bases de datos",
      "Métodos HTTP habituales (GET, POST, PATCH, DELETE)",
      "Formato de texto JSON con clave y valor",
      "Conceptos elementales de programación web"
    ]
  },
  {
    id: 8,
    question: "¿Qué ventajas o beneficios ofrece la tecnología o procedimiento?",
    category: "Ventajas",
    summaryAnswer: "Velocidad total, base de datos SQL libre sin ataduras, documentación que se hace sola y capa gratuita.",
    fullAnswer: "Las ventajas que más se notan son: primero, la rapidez, porque pasás de tardar días armando servidores a tener todo listo en 5 minutos; segundo, que no estás atado a una empresa porque es código abierto basado en PostgreSQL estándar y te podés llevar tus datos cuando quieras; tercero, que la documentación se escribe sola en vivo cada vez que agregás una tabla nueva; cuarto, que tenés que escribir mucho menos código de backend y por ende cometés menos errores; y quinto, que la versión gratuita es muy completa para proyectos escolares y personales.",
    materialExample: "Fazt compara esto con Firebase y destaca que en Supabase tenés toda la potencia de SQL y relaciones entre tablas en vez de documentos NoSQL que a veces complican las cosas.",
    keyPoints: [
      "Ahorro gigante de tiempo de desarrollo",
      "Código abierto sin quedar encerrado en un proveedor",
      "Base de datos PostgreSQL real y profesional",
      "Documentación interactiva que se actualiza sola",
      "Plan gratuito ideal para estudiar y prototipar"
    ]
  },
  {
    id: 9,
    question: "¿Qué dificultades, errores o precauciones deben considerarse?",
    category: "Precauciones",
    summaryAnswer: "Cuidar la seguridad de RLS, jamás publicar la service_role key y pensar bien las tablas antes de empezar.",
    fullAnswer: "Hay que tener cuidado con tres cosas importantes: primero, el RLS (Row Level Security); si lo desactivás para probar y te olvidás de prenderlo antes de subir tu web, cualquier persona que copie tu clave pública puede borrarte toda la base de datos; segundo, jamás poner la 'service_role key' en el código de la web que ve el usuario, porque esa llave tiene permisos de administrador total y salta todas las reglas; y tercero, diseñar bien las columnas y tipos de datos desde el comienzo, porque en bases de datos relacionales cambiar cosas con datos ya cargados puede ser molesto.",
    materialExample: "Fazt muestra una advertencia roja en pantalla cuando una tabla no tiene políticas de RLS activadas, avisando que para aplicaciones públicas es obligatorio poner reglas.",
    keyPoints: [
      "Activar siempre las reglas de RLS antes de publicar",
      "Guardar la service_role key solo en lugares seguros",
      "Planificar bien las columnas y nombres de antemano",
      "Tener en cuenta que proyectos inactivos gratuitos pueden pausarse"
    ]
  },
  {
    id: 10,
    question: "¿Cómo aplicarías lo aprendido en un proyecto informático real?",
    category: "Aplicación Real",
    summaryAnswer: "Haciendo una app escolar para la biblioteca o para entrega de tareas conectada directo a Supabase.",
    fullAnswer: "Lo aplicaría armando un sistema para el colegio, por ejemplo para gestionar los préstamos de libros de la biblioteca o una app para organizar entregas de trabajos prácticos. En vez de pasar días peleando con un servidor local que solo anda en mi máquina, creo el proyecto en Supabase en 5 minutos, armo las tablas de 'libros', 'alumnos' y 'prestamos', le pongo una regla de RLS para que nadie modifique cosas de otros, y conecto la página web en React directamente con la librería de Supabase. Así queda funcionando en la nube para que cualquiera entre desde su celular o su computadora.",
    materialExample: "Usando las funciones como supabase.from('libros').select('*') que muestra Fazt, en menos de diez líneas de código ya tenés la web mostrando los datos de la base.",
    keyPoints: [
      "Sistema escolar accesible desde cualquier navegador",
      "Conexión directa desde la web sin servidor intermedio",
      "Permisos diferenciados con reglas de seguridad",
      "Despliegue rápido y sin costo en la nube"
    ]
  },
  {
    id: 11,
    question: "¿Qué parte del video consideras más importante y por qué?",
    category: "Reflexión Crítica",
    summaryAnswer: "Cuando muestra la pestaña de API interactiva y explica las cabeceras de autorización.",
    fullAnswer: "Para mí la parte más importante es cuando Fazt entra a la pestaña 'API Docs' del panel y muestra cómo Supabase te redacta toda la documentación automáticamente con tus tablas, explicándote cómo usar las cabeceras apikey y Authorization. Me parece la parte clave porque ahí es donde uno entiende de verdad la ventaja de la plataforma: ver cómo una tabla que acabás de inventar se transforma al instante en un servicio web listo con ejemplos de código en cURL y JavaScript para copiar y pegar.",
    materialExample: "En ese momento, Fazt destaca que no hace falta adivinar cómo se llama la ruta ni qué filtros acepta, porque la misma página te da el código exacto listo para usar.",
    keyPoints: [
      "Demostración de la API creada al instante",
      "Claridad sobre cómo viajan las cabeceras de seguridad",
      "Ejemplos de código adaptados a las tablas que creaste",
      "El momento donde se ve claramente el ahorro de tiempo"
    ]
  },
  {
    id: 12,
    question: "¿Qué conocimientos nuevos adquiriste y cómo los explicarías a otra persona?",
    category: "Aprendizaje Nuevo",
    summaryAnswer: "Conocí que existe Supabase con SQL real y cómo funciona PostgREST para filtrar datos por URL.",
    fullAnswer: "Lo nuevo que aprendí es que no hace falta resignar la estructura prolija de SQL para tener la rapidez de Firebase, y también cómo funciona PostgREST para filtrar datos poniendo cosas como '?campo=eq.valor' directo en el enlace. Si se lo tuviera que explicar a un compañero de clase, le diría: 'Es como armar una tabla en una hoja de cálculo, pero que en un segundo se conecta a internet y te genera una dirección secreta a la que le podés pedir datos o guardarle cosas desde tu página web sin tener que programar ningún servidor'.",
    materialExample: "La comparación de Fazt mostrando la facilidad de crear la tabla y consumirla al instante mediante HTTP me ayudó a entender cómo se desarrollan aplicaciones hoy en día.",
    keyPoints: [
      "Descubrimiento de Supabase como alternativa libre a Firebase",
      "Comprensión de PostgREST y filtrado directo en la URL",
      "Forma sencilla de explicar conceptos con analogías cotidianas",
      "Visión moderna de cómo conectar una web con una base de datos"
    ]
  }
];

export const PRACTICAL_STEPS = [
  {
    number: "01",
    title: "Creación de la Tabla en PostgreSQL",
    description: "Desde el Table Editor de Supabase creamos la tabla 'tareas' con las columnas: id (int8 autoincrement), titulo (text), completada (boolean) y fecha_creacion (timestamptz).",
    codeSnippet: `CREATE TABLE tareas (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  titulo text NOT NULL,
  completada boolean DEFAULT false,
  fecha_creacion timestamptz DEFAULT now()
);`
  },
  {
    number: "02",
    title: "Obtención de Credenciales y Endpoint",
    description: "Copiamos desde la pestaña 'Project Settings > API' la URL del proyecto y la anon_key pública para autorizar las solicitudes.",
    codeSnippet: `// Variables de configuración de Supabase
const SUPABASE_URL = "https://proyecto-demo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";`
  },
  {
    number: "03",
    title: "Consulta de Datos con Petición GET",
    description: "Solicitamos las tareas pendientes filtrando mediante el parámetro 'completada=eq.false' y ordenando por fecha.",
    codeSnippet: `// Petición HTTP directa usando fetch
const response = await fetch(\`\${SUPABASE_URL}/rest/v1/tareas?completada=eq.false&order=id.desc\`, {
  headers: {
    "apikey": SUPABASE_ANON_KEY,
    "Authorization": \`Bearer \${SUPABASE_ANON_KEY}\`
  }
});
const tareas = await response.json();`
  },
  {
    number: "04",
    title: "Inserción de un Nuevo Registro con POST",
    description: "Enviamos un nuevo objeto en formato JSON con la cabecera 'Content-Type: application/json' y 'Prefer: return=representation' para recibir el registro creado.",
    codeSnippet: `// Guardar nueva tarea
const nuevoRegistro = await fetch(\`\${SUPABASE_URL}/rest/v1/tareas\`, {
  method: "POST",
  headers: {
    "apikey": SUPABASE_ANON_KEY,
    "Authorization": \`Bearer \${SUPABASE_ANON_KEY}\`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  },
  body: JSON.stringify({
    titulo: "Estudiar para el examen de Informática",
    completada: false
  })
});`
  }
];

export const EXACT_SOURCES = [
  {
    id: 1,
    title: "Video Original: Supabase, Tutorial Práctico y Overview (REST API)",
    author: "Fazt Code",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=pi33WDrgfpI",
    description: "Video tutorial completo analizado para este informe, donde Fazt explica paso a paso la arquitectura de Supabase, la creación de proyectos y el consumo de la API REST autogenerada."
  },
  {
    id: 2,
    title: "Documentación Oficial de Supabase — Guías y REST API",
    author: "Supabase Docs",
    platform: "Sitio Web Oficial",
    url: "https://supabase.com/docs",
    description: "Referencia técnica oficial sobre la arquitectura BaaS, el uso de PostgREST, configuración de Row Level Security (RLS) y librerías cliente en JavaScript/TypeScript."
  },
  {
    id: 3,
    title: "Documentación Oficial de PostgreSQL",
    author: "The PostgreSQL Global Development Group",
    platform: "Sitio Web Oficial",
    url: "https://www.postgresql.org/docs/",
    description: "Manual y especificaciones del motor de base de datos relacional PostgreSQL, que sustenta el almacenamiento, integridad y tipos de datos en Supabase."
  }
];
