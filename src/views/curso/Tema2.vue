<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Algoritmos de consenso (Paxos, Raft)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.bg-color-1.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-4
            p Los algoritmos de consenso, como Paxos y Raft, representan la base para garantizar la coherencia en sistemas distribuidos donde múltiples nodos deben acordar un mismo valor, incluso en presencia de fallos. Paxos, aunque teóricamente sólido, se caracteriza por su complejidad, mientras que Raft fue diseñado para ser más comprensible y práctico en implementaciones reales.
            p.mb-0 Ambos algoritmos permiten coordinar decisiones distribuidas sin un único punto de fallo, asegurando que los datos sean consistentes entre réplicas y que las operaciones se ejecuten de manera ordenada y confiable, incluso cuando algunos nodos del sistema no están disponibles.
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        #t_2_1.titulo-segundo(data-aos="flip-up")
          h2 #[span 2.1] Introducción al problema del consenso en sistemas distribuidos

        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left").mb-4 Para estudiar esta temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    h2(data-aos="fade-left").mb-5 Mecanismos para lograr consenso

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5 Dada su complejidad, se han diseñado múltiples algoritmos para alcanzar consenso (Takada, 2013). Algunos de los más conocidos y aplicados incluyen:
        .bg-color-13.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Paxos</b>: diseñado por Leslie Lamport, garantiza seguridad incluso en presencia de fallos arbitrarios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Raft</b>: más comprensible que Paxos, usado en sistemas modernos como etcd y Consul.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b><em>Viewstamped Replication</em> y PBFT (<em>Practical Byzantine Fault Tolerance</em>)</b>: usados en entornos con nodos maliciosos.
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Cada uno de estos mecanismos tiene sus propios supuestos, niveles de tolerancia a fallos y características de rendimiento, los cuales se estudian en profundidad en subtemas posteriores.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Comparación de entornos con y sin consenso
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-white Característica
            th.bg-color-4.text-white Con protocolo de consenso
            th.bg-color-4.text-white Sin protocolo de consenso
        tbody.bg-color-8
          tr
            td Actualización de datos replicados.
            td Coordinada y ordenada.
            td Posible inconsistencia.
          tr
            td Fallo de un nodo.
            td No afecta la decisión común.
            td Puede causar conflictos.
          tr
            td Elección de líder automático.
            td Sí, con recuperación rápida.
            td No, requiere intervención.
          tr
            td Complejidad técnica.
            td Alta.
            td Menor, pero más riesgo.

    .titulo-figura.mb-4
      h5 Figura 2.
      span Consenso
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Principios fundamentales del algoritmo Paxos
    
    p.mb-5 El consenso es un problema central en el diseño de sistemas distribuidos, especialmente cuando los nodos pueden fallar o actuar de forma asíncrona.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Principios fundamentales del algoritmo Paxos
            p.mb-4(data-aos="fade-right") En el PDF <b>Principios fundamentales del algoritmo Paxos</b>, se presenta una exploración detallada de este algoritmo esencial, que permite alcanzar acuerdos seguros en entornos donde la fiabilidad no está garantizada. A través de una lógica basada en propuestas, mayorías y tolerancia a fallos, Paxos asegura que los procesos distribuidos logren una única decisión válida, aún en condiciones adversas. Este recurso brinda una base teórica sólida para comprender el funcionamiento interno del algoritmo y su aplicación en sistemas críticos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principios fundamentales del algoritmo Paxos.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Algoritmo Raft: comprensión y diseño estructurado     
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El algoritmo Raft fue introducido en 2014 por Diego Ongaro y John Ousterhout, como una alternativa más comprensible a Paxos. A diferencia de Paxos reconocido por su complejidad teórica, Raft fue diseñado desde el principio con una meta adicional: la claridad. A través de una división modular de responsabilidades, este algoritmo facilita la implementación práctica de consenso en sistemas distribuidos que requieren replicación confiable de logs o entradas críticas (Takada, 2013).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Raft permite que un grupo de nodos acuerde sobre una secuencia de comandos o entradas, incluso si algunos de ellos fallan, siempre y cuando exista una mayoría operativa. Su adopción ha sido extensa en bases de datos distribuidas modernas como etcd, Consul y RethinkDB.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in" style="max-width: 90px")

    h2(data-aos="fade-left") Fundamentos del algoritmo Raft
    p.mb-5 Raft se basa en la premisa de mantener un log replicado de comandos, donde todos los nodos del sistema acuerdan la misma secuencia de operaciones (Takada, 2013). Para lograr esto, divide el proceso de consenso en tres componentes bien definidos:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/8.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="79%" y="20.5%" numero="+")
                h5 1.
                p Elección de líder (Leader Election).
    
              .bg-color-white.box-shadow.p-3(x="15%" y="75.5%" numero="+")
                h5 2.
                p Replicación del log (Log Replication).
    
              .bg-color-white.box-shadow.p-3(x="88%" y="73%" numero="+")
                h5 3.
                p Seguridad del log (Log Safety).
    
    p.mb-5 Este diseño estructurado facilita tanto su comprensión como su implementación en la práctica.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Elección de líder")
            p Raft opera en rondas llamadas términos. En cada término, los nodos pueden asumir uno de tres roles:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Líder (<em>Leader</em>):</b> gestiona las decisiones y coordina la replicación.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Seguidor (<em>Follower</em>):</b> responde pasivamente a peticiones.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Candidato (<em>Candidate</em>):</b> compite por convertirse en líder si no hay uno vigente.
            p Cuando un seguidor no recibe comunicación del líder por un periodo determinado (timeout), se convierte en candidato y solicita votos para asumir el liderazgo. Si obtiene una mayoría, se convierte en líder. De lo contrario, espera un nuevo intento.
            p <b>Ejemplo</b>. En un clúster de cinco nodos, si el líder actual falla, uno de los seguidores detectará su ausencia y se postulará como candidato. Si logra tres votos (mayoría), será elegido nuevo líder.
          .div(titulo="Replicación del log")
            p Una vez elegido, el líder es el único nodo autorizado para recibir nuevas entradas (Takada, 2013). Cada vez que recibe un comando (por ejemplo, una operación de escritura en una base de datos), lo añade a su log local y lo replica hacia los seguidores mediante mensajes de tipo AppendEntries.
            p Solo cuando una mayoría de nodos ha confirmado la entrada, el líder la considera comprometida y la aplica al estado del sistema. Luego, ordena a los seguidores que hagan lo mismo.
            p Este mecanismo garantiza que todos los nodos apliquen los mismos comandos en el mismo orden, cumpliendo así con la consistencia secuencial.
          .div(titulo="Seguridad del log")
            p Raft asegura que ningún nodo aplique una entrada de log que no esté previamente confirmada por la mayoría. Además, cuando un nuevo líder es elegido, garantiza que su log esté al menos tan actualizado como el de cualquier otro nodo, evitando que datos antiguos sobrescriban información más reciente (Takada, 2013).
            p Esta propiedad se conoce como seguridad del log (log safety) y es crucial para la integridad del consenso.
    
    .titulo-figura.mb-4
      h5 Tabla 3.
      span Comparación conceptual con Paxos
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-white Característica
            th.bg-color-4.text-white Raft
            th.bg-color-4.text-white Paxos
        tbody.bg-color-8
          tr
            td Claridad de diseño.
            td Alta, modular.
            td Baja, abstracto.
          tr
            td Elección de líder.
            td Explícita y determinista.
            td Implícita, difusa.
          tr
            td Replicación de logs.
            td Directa, ordenada.
            td Indirecta, mediante promesas.
          tr
            td Facilidad de implementación.
            td Mayor.
            td Menor.

    h2(data-aos="fade-left") Aplicación práctica
    p.mb-5 Raft se utiliza ampliamente en sistemas de configuración distribuida y almacenamiento confiable. Por ejemplo, etcd base de datos claves/valor empleada en Kubernetes utiliza Raft para mantener la consistencia de configuración del clúster. Cada cambio de estado (como el alta de un nodo) se registra como una entrada en el log de Raft, asegurando que todos los nodos observen el mismo historial.

    .titulo-figura.mb-4
      h5 Figura 3.
      span Algoritmo de Consenso Raft
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/10.svg", data-aos="zoom-in")
    

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Comparación entre Paxos y Raft
    
    p.mb-5 La elección del algoritmo de consenso adecuado es una decisión crítica en el diseño de sistemas distribuidos resilientes.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white.order-2
            h2.mb-4(data-aos="flip-up") Comparación entre Paxos y Raft
            p.mb-4(data-aos="fade-right") En el PDF Comparación entre Paxos y Raft, se examinan las similitudes y diferencias entre estos dos algoritmos ampliamente utilizados, resaltando sus enfoques conceptuales, niveles de complejidad y escenarios de aplicación. Este análisis comparativo permite comprender cómo cada algoritmo aborda el consenso en condiciones de fallos y asincronía, brindando a los estudiantes herramientas para seleccionar el modelo más apropiado según las necesidades específicas de un sistema distribuido.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparación entre Paxos y Raft.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')


    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Aplicaciones prácticas del consenso distribuido
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El consenso distribuido no es una abstracción teórica aislada, sino un mecanismo esencial en numerosos sistemas tecnológicos que sustentan la infraestructura digital contemporánea. 
    
        .bg-color-2.p-4(data-aos="fade-left").mb-5
          p Desde la replicación de bases de datos hasta la validación de transacciones en cadenas de bloques, el consenso permite que múltiples nodos coordinados acuerden decisiones críticas sin la necesidad de un único punto de control.
          p.mb-0 Esta propiedad lo convierte en un componente indispensable en entornos donde la confiabilidad, la consistencia y la tolerancia a fallos son innegociables (Muñoz Escoí, 2013).
        
        p A lo largo de este subtema se abordan las principales aplicaciones prácticas del consenso distribuido, destacando su impacto en sistemas reales, arquitecturas actuales y plataformas ampliamente adoptadas.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Replicación consistente de bases de datos")
            p Una de las aplicaciones más extendidas del consenso es en la replicación de bases de datos distribuidas. En este contexto, algoritmos como Raft o Multi-Paxos se utilizan para asegurar que todas las instancias de una base de datos compartida mantengan el mismo estado, incluso en presencia de fallos o particiones de red (Muñoz Escoí, 2013).
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo práctico</b>. El sistema de configuración etcd, utilizado por Kubernetes para almacenar el estado del clúster, emplea Raft para mantener la coherencia entre los nodos de control. Cada cambio (como agregar un nuevo nodo o modificar una política) se registra en un log replicado consensuado, garantizando que todos los participantes vean la misma secuencia de eventos.
          .div(titulo="Tolerancia a fallos en sistemas críticos")
            p Los sistemas financieros, aeronáuticos o industriales no pueden depender de un único servidor para tomar decisiones. Por ello, los algoritmos de consenso permiten que varios nodos voten sobre el estado del sistema o la ejecución de acciones críticas, logrando decisiones confiables sin puntos únicos de falla.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo práctico</b>. En un sistema bancario que procesa transferencias electrónicas, se requiere consenso entre réplicas para validar la ejecución de una transacción antes de registrarla como definitiva. Esto evita la duplicación o pérdida de movimientos en caso de desconexiones repentinas.
          .div(titulo="<em>Blockchain</em> y criptomonedas")
            p Las redes blockchain representan una aplicación descentralizada del consenso, donde nodos distribuidos (sin confianza mutua previa) deben acordar la validez de cada bloque de transacciones (Muñoz Escoí, 2013). A diferencia de Raft o Paxos, aquí se emplean algoritmos como Proof of Work (PoW), Proof of Stake (PoS) o Practical Byzantine Fault Tolerance (PBFT).
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo práctico</b>. En Bitcoin, miles de nodos compiten para resolver un problema criptográfico y así “ganar” el derecho a registrar el siguiente bloque. El consenso se alcanza cuando la mayoría de la red acepta ese bloque como válido.
          .div(titulo="Elección de líderes y coordinación de tareas")
            p En arquitecturas distribuidas es común que un nodo actúe como coordinador o líder temporal, encargado de asignar tareas, sincronizar procesos o tomar decisiones globales. Los algoritmos de consenso permiten que ese líder sea elegido automáticamente en condiciones seguras y replicables.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo práctico</b>. El servicio de orquestación Apache ZooKeeper, utilizado para gestionar clústeres de aplicaciones como Hadoop o Kafka, utiliza un protocolo de consenso interno para seleccionar un líder entre sus nodos y asegurar operaciones coordinadas.
          .div(titulo="Sistemas de archivos distribuidos")
            p En soluciones como Google Chubby, Ceph o Amazon DynamoDB, se requiere mantener una vista global coherente del sistema de archivos o claves distribuidas. El consenso es vital para asegurar que las operaciones (lecturas/escrituras) se realicen en el orden correcto y sobre datos válidos (Muñoz Escoí, 2013).
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo práctico</b>. Google Chubby utiliza una variante de Paxos para asegurar que las operaciones sobre archivos compartidos entre servicios (como bloqueos, permisos o actualizaciones) sean consistentes, incluso en presencia de múltiples clientes concurrentes.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La implementación de algoritmos de consenso en sistemas distribuidos, trasciende lo teórico y se materializa en herramientas esenciales para la estabilidad de plataformas modernas. Sin ellos, servicios como Kubernetes, bases de datos NoSQL, redes blockchain o sistemas de archivos compartidos carecerán de la confianza, la coherencia y la seguridad necesarias para operar a gran escala.



              
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://raft.github.io/ " target="_blank" rel="noopener noreferrer") Ongaro, D., & Ousterhout, J. (2014). In Search of an Understandable Consensus Algorithm (Extended Version). 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://medium.com/@mani.saksham12/raft-and-paxos-consensus-algorithms-for-distributed-systems-138cd7c2d35a " target="_blank" rel="noopener noreferrer") Aggarwal, S. (2023, agosto 7). Raft and Paxos: Consensus Algorithms for Distributed Systems. 





            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3GdCkBNrHyI&t=279s " target="_blank" rel="noopener noreferrer") Cloud Native México. (2018, 11 de octubre). Meetup 5: Introducción al algoritmo Raft.  [Vídeo]. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
