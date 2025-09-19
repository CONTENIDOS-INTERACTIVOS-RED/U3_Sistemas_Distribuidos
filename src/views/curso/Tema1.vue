<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estrategias de replicación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las estrategias de replicación en sistemas distribuidos permiten mantener múltiples copias de los datos o servicios en diferentes nodos con el fin de mejorar la disponibilidad, tolerancia a fallos y rendimiento general del sistema. A través de mecanismos como la replicación síncrona, que garantiza consistencia inmediata, o la replicación asíncrona, que prioriza la eficiencia, se busca asegurar que el sistema continúe operando incluso ante fallos parciales. Estas estrategias deben ser cuidadosamente diseñadas, considerando el equilibrio entre consistencia, latencia y escalabilidad, especialmente en entornos dinámicos y altamente concurrentes (Arboledas Brihuega, 2015).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Fundamentos de la replicación en sistemas distribuidos
    
    p.mb-5 La replicación es un principio clave en el diseño de sistemas distribuidos, ya que permite garantizar la continuidad del servicio, incluso ante fallos o altos niveles de demanda.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Fundamentos de la replicación en sistemas distribuidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Fundamentos de la replicación en sistemas distribuidos</b>, se presentan los conceptos esenciales de este mecanismo, explicando su utilidad, los tipos de replicación existentes (síncrona y asíncrona), sus principales desafíos y diversas aplicaciones prácticas en entornos reales de alta disponibilidad y escalabilidad.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Fundamentos de la replicación en sistemas distribuidos.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Fundamentos de la replicación en sistemas distribuidos
    
    .row.justify-content-center.align-items-center.bg-color-6.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-4.order-2
            p En los sistemas distribuidos que emplean replicación, la consistencia define hasta qué punto las réplicas de un dato coinciden entre sí en un instante determinado (Robledo Sosa, 2002). La existencia de múltiples copias de los mismos datos plantea un desafío esencial: ¿qué tan pronto deben reflejarse los cambios en todas las réplicas? Esta pregunta da origen a los modelos de consistencia, los cuales determinan el comportamiento observable de las operaciones de lectura y escritura desde la perspectiva del cliente.
            p.mb-0 Seleccionar un modelo de consistencia adecuado implica tomar decisiones que afectan la latencia, disponibilidad y complejidad del sistema. No existe un modelo perfecto para todos los casos; cada uno ofrece beneficios y sacrificios particulares, según el contexto de aplicación.
          .col-lg-3(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") ¿Qué es la consistencia en replicación?
    p.mb-5 La consistencia en entornos replicados se refiere a la coherencia de los datos almacenados en diferentes nodos del sistema. Cuando un cliente escribe o actualiza un valor en una réplica, se espera que esa modificación eventualmente se propague al resto. Sin embargo, el momento y la forma en que esta actualización se refleja en las otras réplicas depende del modelo de consistencia adoptado.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Consistencia fuerte (<em>strong consistency</em>)")
            p En este modelo, una vez que una operación de escritura se completa, cualquier lectura posterior refleja inmediatamente el nuevo valor en todas las réplicas. El sistema actúa como si existiera una sola copia actualizada de los datos, lo que garantiza precisión y previsibilidad (Arboledas Brihuega, 2015).
            p <b>Ejemplo</b>. En un sistema bancario, si un cliente transfiere $100 de una cuenta a otra, cualquier consulta posterior debe reflejar los saldos actualizados, sin excepciones.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ventajas</b>: garantiza integridad y ausencia de estados intermedios.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Desventajas</b>: aumenta la latencia, requiere sincronización inmediata entre réplicas y reduce la disponibilidad en caso de fallos.
          .div(titulo="Consistencia eventual (<em>eventual consistency</em>)")
            p Bajo este modelo, se permite que las réplicas están temporalmente desincronizadas, con la expectativa de que eventualmente convergen al mismo valor si no hay más escrituras. Es ampliamente utilizado en sistemas distribuidos de gran escala.
            p <b>Ejemplo</b>. En una red social, si un usuario cambia su foto de perfil, algunos contactos pueden ver la imagen anterior durante unos segundos antes de que todas las réplicas se actualicen.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ventajas</b>: excelente rendimiento, alta disponibilidad y escalabilidad.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Desventajas</b>: los usuarios pueden recibir datos desactualizados o inconsistentes en el corto plazo.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Consistencia causal (<em>causal consistency</em>)")
            p Este modelo garantiza que las operaciones que están causalmente relacionadas se observen en el mismo orden por todos los procesos, pero no impone orden para operaciones independientes. Preserva relaciones de dependencia lógica entre eventos (Arboledas Brihuega, 2015).
            p <b>Ejemplo</b>. Si el usuario A publica un comentario y luego B responde a ese comentario, cualquier cliente debe ver primero el comentario de A, antes de ver la respuesta de B.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ventajas</b>: mantiene relaciones lógicas entre eventos distribuidos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Desventajas</b>: más complejo de implementar, requiere rastrear dependencias.
          .div(titulo="Consistencia transaccional o serializable")
            p Este modelo simula una ejecución secuencial de las operaciones, donde las transacciones parecen ejecutarse una tras otra, respetando aislamiento completo. Es común en bases de datos con soporte ACID (Arboledas Brihuega, 2015).
            p <b>Ejemplo</b>. En una compra en línea, el inventario y la facturación deben actualizarse como una única unidad atómica, sin interferencias.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ventajas</b>: garantiza integridad total en escenarios críticos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Desventajas</b>: limita la concurrencia, mayor carga de procesamiento.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación general de modelos
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-white Modelo
            th.bg-color-4.text-white Precisión
            th.bg-color-4.text-white Rendimiento
            th.bg-color-4.text-white Complejidad
            th.bg-color-4.text-white Uso típico
        tbody.bg-color-8
          tr
            td Fuerte.
            td Alta.
            td Baja.
            td Alta.
            td Finanzas, control de acceso.
          tr
            td Eventual.
            td Baja.
            td Alta.
            td Baja.
            td Redes sociales, cachés distribuidos.
          tr
            td Causal.
            td Media.
            td Media.
            td Media.
            td Colaboración, mensajería distribuida.
          tr
            td Transaccional.
            td Muy alta.
            td Baja.
            td Muy alta.
            td Sistemas críticos con consistencia ACID.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La selección del modelo debe basarse en el equilibrio entre los requisitos del sistema (precisión vs velocidad), las expectativas del usuario final y la naturaleza de la aplicación. En muchos casos, se adoptan modelos híbridos o configurables, según las necesidades de cada componente del sistema.
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Modos de consistencia
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/7.svg", data-aos="zoom-in")
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Técnicas de replicación: activas y pasivas
    
    p.mb-5 La elección de una técnica de replicación adecuada es crucial para asegurar el correcto funcionamiento de los sistemas distribuidos frente a fallos y demandas de consistencia.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Técnicas de replicación: activas y pasivas
            p.mb-4(data-aos="fade-right") En el PDF <b>Técnicas de replicación</b>, se presentan los principios, ventajas, desventajas y casos de uso de ambos enfoques, analizando cómo cada uno responde a diferentes necesidades de rendimiento, tolerancia a fallos y complejidad operativa en entornos distribuidos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Técnicas de replicación: activas y pasivas.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Protocolos de actualización de réplicas
    
    p.mb-5 La correcta actualización de réplicas es un aspecto clave para mantener la coherencia, disponibilidad y confiabilidad en sistemas distribuidos que implementan replicación.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Protocolos de actualización de réplicas
            p.mb-4(data-aos="fade-right") En el PDF <b>Protocolos de actualización de réplicas</b>, se exploran diferentes enfoques como Primary-Backup, quorum y gossip, detallando cómo cada uno gestiona la propagación de cambios entre nodos y responde ante fallos o concurrencia. Este análisis permite comprender las implicaciones técnicas de cada protocolo y facilita la elección del más adecuado según las necesidades del sistema.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Protocolos de actualización de réplicas.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Desafíos y mejores prácticas en la implementación de réplicas
    
    p.mb-5 El diseño e implementación de réplicas en sistemas distribuidos es una estrategia clave para lograr alta disponibilidad, tolerancia a fallos y rendimiento eficiente. Sin embargo, alcanzar estos objetivos conlleva enfrentar importantes desafíos técnicos y arquitectónicos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Desafíos y mejores prácticas en la implementación de réplicas
            p.mb-4(data-aos="fade-right") En el PDF <b>Desafíos y mejores prácticas en la implementación de réplicas</b>, se analizan los principales problemas que surgen al replicar datos entre múltiples nodos —como la inconsistencia, los conflictos de actualización o la latencia—, así como las prácticas recomendadas para enfrentarlos. Esta revisión permite comprender los criterios técnicos necesarios para implementar una replicación robusta, adaptable y alineada con los objetivos de cada sistema distribuido.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Desafíos y mejores prácticas en la implementación de réplicas.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/10.png', alt='')
    





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/62506 " target="_blank" rel="noopener noreferrer") Santos González, M. (2015). Diseño de redes telemáticas: ( ed.). RA-MA Editorial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arpitbhayani.me/blogs/replication-strategies/" target="_blank" rel="noopener noreferrer") Bhayani, A. (2021). Replication Strategies - Synchronous, Asynchronous, and Semi-Synchronous.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=mBUCF1WGI_I " target="_blank" rel="noopener noreferrer") Kleppmann, M. (2020, 28 de octubre). Sistemas distribuidos 5.1: replicación.  [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
