<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Recuperación ante fallos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 La recuperación ante fallos en sistemas distribuidos constituye un mecanismo esencial que permite restablecer el funcionamiento del sistema tras la ocurrencia de errores o interrupciones inesperadas. 
    
        .bg-color-12.p-4(data-aos="fade-left")
          p Esta capacidad se basa en la detección temprana de fallos, la replicación de datos críticos y la aplicación de estrategias como los puntos de control (checkpoints) y los registros de logs para restaurar el estado previo al fallo. 
          p.mb-0 Desde una perspectiva técnica, su implementación asegura la continuidad del servicio, minimiza la pérdida de información y fortalece la resiliencia del sistema frente a eventos adversos (Urbano López, 2015).

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tipos de fallos en sistemas distribuidos
    
    p.mb-5 La comprensión de los posibles fallos en sistemas distribuidos es fundamental para garantizar su diseño robusto y su correcto funcionamiento frente a condiciones adversas.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Tipos de fallos en sistemas distribuidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Tipos de fallos en sistemas distribuidos</b>, se expone una clasificación detallada de los errores más comunes que pueden presentarse en este tipo de entornos, como omisiones, fallos de tiempo, de estado, por parada y bizantinos. A través de ejemplos prácticos y explicaciones técnicas, este material permite identificar el impacto que estos fallos pueden tener en la disponibilidad, consistencia y confiabilidad del sistema, al tiempo que ofrece orientaciones sobre mecanismos de detección y estrategias de tolerancia a fallos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de fallos en sistemas distribuidos.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Detección y modelado de fallos
    
    p.mb-5 La capacidad para identificar y representar adecuadamente los fallos en sistemas distribuidos es esencial para garantizar su correcto funcionamiento en contextos de incertidumbre, como redes inestables o nodos autónomos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Detección y modelado de fallos
            p.mb-4(data-aos="fade-right") En el PDF <em>Detección y modelado de fallos</em>, se presentan los principales mecanismos utilizados para inferir fallos en procesos remotos, así como los modelos conceptuales que permiten categorizar estos eventos y diseñar algoritmos resilientes. A través del análisis de herramientas como los heartbeats, timeouts y detectores de fallos, junto con modelos como el de parada, omisión o bizantino, se ofrece una base teórica y práctica para comprender cómo responder eficazmente a eventos inesperados en entornos distribuidos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Detección y modelado de fallos.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Técnicas de tolerancia y recuperación
    
    p.mb-5 Garantizar la continuidad operativa y la recuperación eficiente ante fallos es una exigencia crítica en el diseño de sistemas distribuidos modernos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Técnicas de tolerancia y recuperación
            p.mb-4(data-aos="fade-right") En el PDF <b>Técnicas de tolerancia y recuperación</b>, se exploran los principales mecanismos que permiten a estos sistemas enfrentar errores inevitables sin comprometer su funcionamiento. Se abordan estrategias tanto para evitar que las fallas afecten la disponibilidad del servicio (como la replicación, el uso de quorum o la redundancia), como para restablecer el estado del sistema tras una interrupción (mediante puntos de control, logs o reintentos automáticos). Esta revisión integral permite comprender cómo combinar diferentes enfoques para lograr una infraestructura distribuida resiliente, adaptable y confiable.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Técnicas de tolerancia y recuperación.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Protocolos de recuperación coordinada y no coordinada     
    
    .row.justify-content-center.align-items-center.bg-color-1.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-4.order-2
            p Cuando un fallo interrumpe la ejecución de un sistema distribuido, restaurar su funcionamiento de forma ordenada y coherente es una tarea crítica. Para ello, los sistemas emplean protocolos de recuperación, los cuales definen cómo volver a un estado válido sin perder integridad ni consistencia. Estos protocolos pueden clasificarse en dos grandes enfoques: recuperación coordinada y recuperación no coordinada. Cada uno responde a diferentes necesidades de sincronización, complejidad y rendimiento, y su elección depende en gran medida de la arquitectura del sistema y la criticidad de las operaciones (Urbano López, 2015).
            p.mb-0 Este subtema aborda los principios, funcionamiento, ventajas y limitaciones de ambos tipos de protocolos, ilustrando su uso mediante ejemplos concretos.
          .col-lg-3(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema3/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Recuperación coordinada
    p.mb-5 La recuperación coordinada se basa en el principio de que todos los procesos involucrados en una operación distribuida cooperan para tomar puntos de recuperación consistentes, conocidos como <em>checkpoints</em> globales consistentes. Esto implica sincronización entre procesos para evitar inconsistencias, como que uno se recupere de un estado más reciente mientras otro lo hace desde uno anterior.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Funcionamiento
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Un coordinador (centralizado o distribuido) indica a todos los procesos que tomen un <em>checkpoint</em> al mismo tiempo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Se bloquea temporalmente la ejecución de los procesos hasta que todos hayan completado el <em>checkpoint</em>.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Si ocurre un fallo, todos los procesos vuelven al último punto global consistente para reiniciar la operación.
              p <b>Ejemplo</b>. En una simulación científica distribuida, cada nodo guarda su estado cuando el coordinador emite la orden. Si una máquina falla, todos los nodos retroceden al mismo instante y repiten la simulación desde allí, garantizando coherencia en los datos
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ventajas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Elimina el problema de dominó (cascada de <em>rollbacks</em> entre procesos).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Facilita la recuperación sin necesidad de reconstrucción compleja del estado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desventajas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Puede generar retardo por la necesidad de sincronización.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Requiere mecanismos de coordinación explícitos, lo cual puede afectar la escalabilidad.
    
    h2(data-aos="fade-left") Recuperación no coordinada
    p.mb-5 En contraste, la recuperación no coordinada permite que cada proceso tome checkpoints de manera independiente, sin sincronizarse con los demás. Esto mejora el rendimiento y la escalabilidad, pero introduce desafíos relacionados con la consistencia global tras una recuperación (Urbano López, 2015).

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Funcionamiento")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Cada proceso registra su estado local periódicamente, sin coordinar el momento exacto con los otros procesos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 En caso de fallo, solo el proceso afectado se restaura desde su último <em>checkpoint</em>.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Los demás procesos continúan funcionando normalmente, pero puede surgir la necesidad de deshacer acciones dependientes.
            p <b>Ejemplo</b>. En un sistema de monitoreo distribuido, cada sensor guarda su estado cada minuto. Si uno falla, se reinicia desde su último <em>checkpoint</em> sin afectar a los demás, aunque algunas correlaciones pueden perderse.
    
          .div(titulo="Ventajas")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mayor eficiencia y menor latencia, ya que no requiere bloquear procesos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Escalable en sistemas grandes o heterogéneos.
          .div(titulo="Desventajas")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Posibilidad de inconsistencias al recuperar estados no sincronizados.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Riesgo del efecto dominó, donde múltiples procesos deben deshacer su progreso para mantener coherencia.

    h2(data-aos="fade-left").mb-5 El problema del efecto dominó

    
    .bg-color-2.p-4(data-aos="fade-left").mb-5
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El efecto dominó es un fenómeno asociado a la recuperación no coordinada, en el que el rollback de un proceso obliga a otros a deshacer sus acciones, lo que puede propagar retrocesos indefinidamente. Esto representa una amenaza grave para la eficiencia del sistema y se mitiga con técnicas complementarias como el registro de mensajes o la identificación de dependencias.

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Comparación resumida
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-white Característica
            th.bg-color-4.text-white Recuperación Coordinada
            th.bg-color-4.text-white Recuperación No Coordinada
        tbody.bg-color-8
          tr
            td Sincronización entre procesos.
            td Requerida.
            td No requerida.
          tr
            td Efecto dominó.
            td No ocurre.
            td Puede ocurrir.
          tr
            td Costo de implementación.
            td Alto (por sincronización).
            td Bajo (más simple).
          tr
            td Tiempo de recuperación.
            td Mayor, pero más seguro.
            td Más rápido, pero menos predecible.
          tr
            td Escalabilidad.
            td Limitada.
            td Alta.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.text-white.py-4.px-5(data-aos="fade-left")
          p.mb-0 Los protocolos de recuperación coordinada y no coordinada ofrecen estrategias contrastantes para enfrentar fallos en sistemas distribuidos. La recuperación coordinada asegura consistencia fuerte a cambio de mayor complejidad y latencia, mientras que la no coordinada favorece el rendimiento, pero con riesgos de inconsistencia. La elección entre uno u otro depende del tipo de aplicación, la criticidad de los datos y los requisitos de disponibilidad. En sistemas modernos, incluso pueden combinarse elementos de ambos enfoques para lograr un equilibrio entre eficiencia y confiabilidad (Costas Santos, 2015).

    .titulo-figura.mb-4
      h5 Figura 4.
      span Recuperación
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/12.svg", data-aos="zoom-in")

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Herramientas y casos reales de recuperación ante fallos
    
    p.mb-5 La recuperación ante fallos representa un componente esencial en la gestión y sostenibilidad de los sistemas distribuidos, especialmente en entornos donde la disponibilidad continua del servicio es crítica.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Herramientas y casos reales de recuperación ante fallos
            p.mb-4(data-aos="fade-right") En el PDF Herramientas y casos reales de recuperación ante fallos, se presentan soluciones tecnológicas ampliamente utilizadas que permiten automatizar la detección de errores, restaurar el funcionamiento del sistema y preservar la integridad de los datos ante eventos inesperados. A través del análisis de herramientas como ZooKeeper, etcd, Consul, AWS Auto Scaling y Kubernetes, así como de casos reales de empresas como Netflix, GitHub y plataformas bancarias, se ilustra cómo las estrategias de recuperación son implementadas exitosamente en escenarios del mundo real, ofreciendo valiosas lecciones sobre la importancia de la resiliencia, la automatización y la verificación constante en infraestructuras distribuidas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas y casos reales de recuperación ante fallos.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='')





    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/277393 " target="_blank" rel="noopener noreferrer") Coronado García, B. (2024). Administración y auditoría de los servicios web. UF1272: (1 ed.). Editorial Tutor Formación. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.sofwancoder.com/fault-tolerance-in-distributed-systems " target="_blank" rel="noopener noreferrer") Sofwancoder. (2023, febrero 10). Fault tolerance in distributed systems. 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sTkolTRuPlE " target="_blank" rel="noopener noreferrer") Orozco, V. (2021, 8 de febrero). Tolerancia a fallas con MicroProfile, Quarkus y Docker.  [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe correctamente el funcionamiento de una réplica pasiva en un sistema distribuido?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Todas las réplicas ejecutan operaciones simultáneamente para garantizar coherencia.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Solo una réplica ejecuta operaciones y las demás se actualizan después.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Cada réplica ejecuta solo las operaciones de lectura.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Todas las réplicas están desconectadas entre sí y operan en paralelo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la principal ventaja de aplicar una estrategia de recuperación coordinada en sistemas distribuidos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Disminuye el uso de almacenamiento para <em>checkpoints</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Permite recuperar solo los procesos que fallaron sin afectar a los demás.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Garantiza la coherencia global del sistema tras la recuperación.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Evita completamente la necesidad de replicación.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué función cumple el “quorum” en un algoritmo de consenso como Paxos o Raft?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir la cantidad de nodos activos en el sistema.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar que una decisión sea válida sólo si es aceptada por una mayoría.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sincronizar los relojes físicos de los nodos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Definir los permisos de acceso a recursos compartidos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Un sistema distribuido implementa el algoritmo Raft. ¿Cuál es la principal responsabilidad del nodo líder dentro del clúster?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Detectar fallos en el hardware y reiniciar nodos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Realizar la replicación de logs y coordinar las entradas de los seguidores.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sincronizar el reloj global del sistema.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Cifrar la información para mejorar la seguridad.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el efecto dominó en la recuperación no coordinada?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una cadena de backups automáticos mal configurados.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un error de seguridad que replica información sensible.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La necesidad de retroceder múltiples procesos a estados anteriores por inconsistencias.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un tipo de replicación basado en tolerancia a fallos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
