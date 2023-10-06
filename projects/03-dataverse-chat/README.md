# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)
* [7. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [8. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [9. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Preámbulo

En nuestro día a día, las aplicaciones web son como amigas
inseparables. Desde las redes sociales hasta las herramientas de
trabajo, las usamos todo el tiempo. Pero lo que hace que este
momento sea realmente especial es que estas aplicaciones nos pueden
abrir una puerta a algo asombroso: la interacción con inteligencia
artificial.

¿Qué tal si pudiéramos conversar con alguien que vivió hace más de
cien años o incluso con los personajes de nuestras series y
películas favoritas o con entidades que normalmente no pueden hablar
como por ejemplo planetas o animales? La inteligencia artificial nos
puede ayudar a entender el pasado y a conectarnos con figuras
históricas, así como a sumergirnos en mundos ficticios.

![Preview app](https://github.com/Laboratoria/curriculum/assets/123121338/2bd1477b-15ef-49d4-9fcb-226b3263c46a)

## 2. Resumen del proyecto

Este proyecto tiene como objetivo principal tomar lo que hiciste
en Dataverse para llevarlo al siguiente nivel permitiendo a las
usuarias _conversar_ con un conjunto de datos generado con
técnicas y herramientas de inteligencia artificial.

La aplicación ofrecerá detalles individualizados de cada personaje o entidad
y la posibilidad de interactuar con ellos a través de un sistema de chat
impulsado por la [API de OpenAI](https://openai.com/product). Además, se
implementará un "Panel" que permitirá a las usuarias realizar
consultas simultáneas a todos los personajes.

El proyecto proporciona una valiosa oportunidad de aprendizaje en Desarrollo
Web Dinámico, Integración de API's y el entendimiento de la asincronía en
JavaScript. Esto a través de la transformación de un aplicación web estática
en una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application).
Además, de poder comprender cómo integrar la
[API de OpenAI](https://openai.com/product) para enriquecer tus
aplicaciones con AI.
Este proceso implica la comprensión de cómo enviar solicitudes asíncronas
a la API, procesar y guardar las respuestas para darle contexto a
futuras interacciones, y finalmente mostrar el resultado final de la
interacción a la usuaria en la aplicación web.

## 3. Consideraciones generales

* Este proyecto se debe resolver en duplas.

* El rango de tiempo estimado para completar el proyecto es de 4 a 6 Sprints.

* Implementar un router para la navegación entre las diferentes vistas
  de la aplicación.

* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando cualquiera de estas opciones:
  [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).

## 4. Funcionalidades

Como entregable final tendrás una Single Page Application (SPA) que permita,
además de **visualizar la data, filtrarla, ordenarla y calcular alguna
estadística** tal como se hizo en Dataverse, acceder a una página de detalle
de cada personaje y poder _interactuar_ con
los personajes o entidades del set de data que utilizaste anteriormente.
Aquí definimos en más detalle las funcionalidades mínimas que debe tener:

* Transforma tu proyecto en una Single Page Application (SPA) más interactiva,
  reemplazando el contenido estático HTML por contenido dinámico mediante la
  implementación de Web APIs. Al hacer clic en una tarjeta de personaje, las
  usuarias serán redirigidas a una página exclusiva que muestra detalles
  completos sobre ese personaje en particular. Esto mejorará la experiencia
  de la usuaria y hará que la página web sea más dinámica y funcional.

* Además de mostrar los detalles completos de cada personaje en sus páginas
  dedicadas, las usuarias podrán interactuar con esos personajes a través de
  un sistema de chat incorporado. Como lo muestra la siguiente imagen:
  
  ![Chat Ada Lovelace](https://github.com/Laboratoria/curriculum/assets/123121338/40fdc476-2a24-4aa5-a19d-3d83143b104c)

  También puede revisar esta [implementación](https://laboratoria-dataverse-talks.netlify.app/)
  de ejemplo, cuyo principal objetivo es mostrarte cómo se vería la
  funcionalidad de chat en tu aplicación, más no tomes el diseño como
  referencia para tu proyecto, siente libre de hacer volar tu imaginación
  diseñando tu propia interfaz.
  
  Lo anterior, lo lograrás mediante la integración de
  la API de OpenAI, esto para gestionar la comunicación y la aplicación de
  inteligencia artificial (AI) para generar respuestas inteligentes y
  personalizadas.

  Supongamos que las usuarias han accedido a la página de detalle de
  [Ada Lovelace](https://es.wikipedia.org/wiki/Ada_Lovelace), donde pueden
  conocer más sobre su vida y logros. En esa página, también encontrarán un
  cuadro de chat que les permite interactuar con Ada.
  
  ```plaintext
  Usuaria: "Hola, Ada. Cuéntame más sobre tus contribuciones a la informática."

  Ada Lovelace (AI de OpenAI): "¡Hola! Claro, estaré encantada de hablar sobre eso. Mis contribuciones más destacadas se relacionan con el trabajo junto a Charles Babbage en el diseño de la Máquina Analítica. Este diseño se considera como el precursor de la computadora moderna y yo propuse la idea de usar tarjetas perforadas para programarla. Además, desarrollé el primer algoritmo destinado a ser procesado por una máquina, lo que me convierte en la primera programadora de la historia. 
  ¿Hay algo más en particular que te gustaría saber?"

  Usuaria: "¡Eso es fascinante! ¿Qué desafíos enfrentaste en ese tiempo?"

  Ada Lovelace (AI de OpenAI): "En ese tiempo, enfrenté varios desafíos, uno de los principales fue la limitación de recursos y la falta de reconocimiento del potencial de la Máquina Analítica. También tuve que superar las restricciones sociales de la época, ya que las mujeres tenían un acceso limitado a la educación en matemáticas y ciencias. Sin embargo, mi pasión por la matemática y la visión de lo que estas máquinas podrían lograr me impulsaron a seguir adelante."

  ```
  
  Este ejemplo muestra cómo las usuarias pueden entablar una conversación
  interactiva con Ada Lovelace a través del sistema de chat, obteniendo
  información sobre sus logros, desafíos y contribuciones a la informática.
  La inteligencia artificial de OpenAI permite que las respuestas sean
  informativas y personalizadas según las preguntas de los usuarios.

* Se agregará una página llamada "Panel" que permitirá a las usuarias
  realizar una misma consulta a todos los personajes de manera simultánea.
  Esto se logrará mediante técnicas de asincronía y gestión eficiente de las
  solicitudes para brindar una experiencia fluida y eficaz. LA ruta para esta
  nueva página deberá ser `/panel`. En la siguiente
  imagen se muestra un ejemplo de cómo se vería esta funcionalidad:

  ![Chat grupal](https://github.com/Laboratoria/curriculum/assets/123121338/52bd7e39-caba-4d15-adb2-2e94de619244)

  Supongamos que una usuaria está interesada en obtener opiniones de todos los
  personajes sobre un tema en particular. En lugar de tener que visitar las
  páginas de detalle de cada personaje de forma individual, puede acceder al
  "Panel" y realizar su consulta en un solo lugar.

  **Ejemplo de Uso:**
  1. La usuaria ingresa al "Panel."

  2. Encuentra un cuadro de texto donde puede ingresar su pregunta o tema de interés.

  3. La usuaria escribe su consulta, por ejemplo: "¿Qué opinan sobre la
  tecnología del siglo XIX?"

  4. A continuación, presiona el botón de "Enviar."

  5. El sistema envía la misma solicitud a todos los personajes o
  entidades de manera simultánea.

  6. Cada personaje recibe la consulta y genera su propia respuesta
  basada en su personalidad y conocimiento. Para esto, es necesario ajustar
  el prompt para que los personajes tengan contexto y se comporten de manera
  diferenciada. Por ejemplo en el caso de personajes de la historia, sabiendo
  el lugar de naciemiento y el año, podemos dar contexto relevante o
  condicionar su comportamiento, por ejemplo diciendole que no conoce ningún
  descubrimiento de la ciencia posterior al año de su muerte.

  7. Las respuestas de todos los personajes se muestran de manera ordenada en
  el "Panel", lo que permite a la usuaria obtener una variedad de
  perspectivas en un solo lugar. Ten en cuenta que las respuestas se ordenarán
  de según el orden de respuesta y no necesariamente por el orden de
  solicitud.

  8. Implementar una funcionalidad que muestre un indicador visual cuando
  uno o varios personajes están escribiendo en tiempo real. Esto proporcionará
  una experiencia más interactiva y en tiempo real a los usuarias, lo que les
  permitirá saber cuándo otros están redactando un mensaje en la conversación.

  9. Implementar un manejo efectivo de errores que puedan surgir al interactuar
  con la API. Esto incluye situaciones como alcanzar la cuota de tokens por
  minuto o cualquier otro error relacionado con la API. Debería proporcionarse
  retroalimentación a la usuaria en caso de un error, junto con una descripción
  clara de la causa del problema y posibles soluciones.

* Para que los chats anteriores puedan funcionar, es esencial que la
  aplicación se integre con la IA a través de la API de OpenAI. Para ello,
  deberá existir una página con un formulario que permita a la usuaria
  proveer la API Key a usar. El equipo de Laboratoria te proporcionará
  una API Key que la usuaria
  deberá poder ingresar en la aplicación que tu construirás.

* La aplicación será _responsive_, es decir, debe visualizarse sin problemas
  desde distintos tamaños de pantallas: móviles, tablets y desktops.
  
## 5. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── src
|  ├── components 
|  ├── data
|  |  └── data.json (La que hayas generado con la IA)
|  ├── lib
|  ├── views
|  ├── dataFunctions.js
|  ├── index.html
|  ├── main.js
|  ├── views.js
|  └── style.css
├── test
|  └── data.js
|  └── dataFunctions.spec.js
|  └── tests-read-only
├── README.md
└── package.json

```

### `src/components`

Esta carpeta contendrá archivos JavaScript y/o archivos de plantillas HTML
que representan componentes reutilizables de tu aplicación. Estos componentes
pueden ser elementos de la interfaz de usuario que se utilizan en varias partes
de tu aplicación. Organizar tus componentes de esta manera ayuda a mantener un
código más modular y reutilizable.

### `src/data`

En esta carpeta están los datos con los que vas a trabajar (los datos de ejemplo
o los datos que generarías con ayuda de la inteligencia artificial).

### `src/lib`

En esta carpeta almacerás los módulos que te permitan conterte con la inteligencia
artificial.

### `src/views`

Esta carpeta generalmente contiene archivos que representan las diferentes
vistas o páginas de tu aplicación. Cada vista puede tener su propio archivo
JavaScript, HTML y CSS. Organizar tus vistas de esta manera facilita la
navegación y la gestión de la lógica de la interfaz de usuario.

### `src/dataFunctions.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Este archivo va a contener toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, filterBy, value)`: esta función recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `value`, indica el valor de campo que queremos filtrar.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada, esta función debe usar el método reduce.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que la usuaria interactúe
(click, filtrado, ordenado, ...).

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará a la usuaria. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_).

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ listos para _cargar_
las diferentes fuentes de datos.

Por ejemplo, lost datos con los que vas a trabajar,
los encontrarás en la siguiente línea:

```js
import data from './data/dataset.js';
```

### `test/data.js`

En esta archivo puedes construir y exportar data "mock" para usar en los tests.
Es mas fácil probar un arreglo de 5 elementos de un arreglo de 24, por eso
vas a crear una muestra de la data que quieres probar. Como mínimo
debes exportar un variable se llama `data`, pero puedes definir y exportar mas
si sea necesario para tus tests.

### `test/dataFunctions.spec.js`

En este archivo tendrás hacer pruebas unitarias de las funciones
implementadas en el archivo `dataFunctions.js`. (`filterBy`, `sortBy`, etc.)

### `src/view.js`

Para alcanzar mejor separación de responsabilidades en el código este
archivo debe tener todas las funciones que utilizara para renderizar
los elementos dinámicamente.

Al menos se requeriere una función obligatoria:

* `renderItems(data)`: esta función recibe el arreglo de data para renderizar
  los elementos de cada item, y debería volver un elemento DOM o
  un string de HTML.

## 6. Criterios de aceptación mínimos del proyecto

### Criterios del proyecto

#### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuaria.

#### Historias de usuaria

Una vez que entiendas las necesidades de tus usuarias, escribe las [Historias
de Usuaria](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuaria** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuaria para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuaria antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios
de Aceptación).

#### Diseño de la Interfaz de Usuaria

##### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.

##### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuaria (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarias,
y con base en los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

#### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuaria deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar.

Revisa [las funcionalidades](#3-funcionalidades) que el proyecto pide del interfaz.

#### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Este proyecto usa
el framework [Jest](https://jestjs.io/) para ejecutar las pruebas unitarias por lo
que te recomendamos consultar su documentación.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/dataFunctions.js` que contenga tus funciones y
está detallado en la sección de [Consideraciones técnicas](#src/data.js).

## 7. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Súmate al canal de Slack
[#project-dataverse](https://claseslaboratoria.slack.com/archives/C03MV35EP5M)
para conversar y pedir ayuda del proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Desarrollo Front-end

* [Topicos en la curricula de sitio Laboratoria](https://curriculum.laboratoria.la/es/web-dev/topics)
  testing, arreglos, objetos, funciones, DOM en Browser Javascript.
* [Promesas](https://es.javascript.info/promise-basics)
* [Haciendo peticiones con Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
* [Almacenamiento con LocalStorage](https://es.javascript.info/localstorage)
* [Creando un router SPA con vanilla Javascript](https://www.youtube.com/watch?v=vFh18oo2Cu4)

#### Inteligencia Artificial y Prompting

* [Learn Prompting](https://learnprompting.org/es/docs/category/-basic-applications)
* [Prompt Engineering Roadmap](https://roadmap.sh/prompt-engineering)
* [OpenAI Playground](https://beta.openai.com/playground)
* [Making requests](https://platform.openai.com/docs/api-reference/making-requests)
* [Chat with AI](https://platform.openai.com/docs/api-reference/chat/object)

#### Herramientas

* [Jest](https://jestjs.io/)
* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)

## 9. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [ ] Está subido a GitHub y desplegado en Netlify o Vercel.
* Tiene un `README.md` con la siguente:
      - [ ] _Definición del producto_ clara e informativa
      - [ ] Historias de usuaria
      - [ ] Un _sketch_ de la solución (prototipo de baja fidelidad) y
        _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
      - [ ] El listado de problemas que detectaste a través de tests
        de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [ ] Permite ver toda la data en la pantalla principal con opciones para
    filtrar y ordenar.
  - [ ] Permite ingresar un API Key a través de un formulario.
  - [ ] Permite ver una página con más detalles de cada entidad. En esta página
    se puede iniciar el chat.
  - [ ] Permite conversar con el personaje o entidad de la data a través
    de un chat.
  - [ ] Permite chatear de forma grupal con todas las entidades de la data.
  - [ ] Es _responsive_

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.
