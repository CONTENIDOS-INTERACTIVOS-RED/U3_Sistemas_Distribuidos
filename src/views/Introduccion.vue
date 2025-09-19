<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el ámbito de los sistemas distribuidos, la capacidad de mantener la continuidad operativa frente a errores y fallos, se ha convertido en una cualidad esencial para garantizar la fiabilidad de aplicaciones modernas. Esta unidad se centra en dotar al estudiante de un conocimiento profundo sobre los mecanismos y estrategias que permiten que un sistema distribuido funcione correctamente, incluso en presencia de fallos parciales, caídas de nodos o interrupciones en la comunicación. El enfoque de esta unidad busca consolidar la comprensión de cómo los sistemas distribuidos alcanzan altos niveles de disponibilidad, consistencia y resiliencia a través de técnicas avanzadas de replicación y consenso.
    
        .bg-color-3.p-4(data-aos="fade-left").mb-5
          p.mb-0 El propósito de esta unidad es que el estudiante comprenda las principales estrategias de replicación, las cuales permiten mantener múltiples copias de los datos o servicios en diferentes nodos del sistema, garantizando su disponibilidad y fiabilidad. A partir del análisis de los modelos de consistencia y sincronización entre réplicas, se abordan enfoques como la replicación activa y pasiva, evaluando sus beneficios, limitaciones y contextos de aplicación. Esta base es fundamental para enfrentar escenarios reales donde se deben asegurar transacciones consistentes y respuestas rápidas, incluso cuando uno o más componentes del sistema fallan.
        P Además, se introduce al estudiante en los algoritmos de consenso distribuidos, esenciales para que múltiples procesos en diferentes nodos lleguen a acuerdos comunes, aun en presencia de fallos o mensajes retrasados. 
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-2.p-4(data-aos="fade-left").mb-5
              p En este contexto, se estudian de forma comparativa los algoritmos Paxos y Raft, reconociendo su importancia en sistemas como bases de datos distribuidas, sistemas de archivos y plataformas de microservicios. Comprender estos algoritmos permitirá al estudiante identificar las condiciones bajo las cuales se puede garantizar la validez y persistencia de decisiones en un entorno no confiable.
              p.mb-0 La unidad también profundiza en las técnicas de recuperación ante fallos, las cuales permiten detectar, modelar y mitigar errores en tiempo de ejecución. Se abordan métodos de tolerancia a fallos, mecanismos de recuperación coordinada y no coordinada, así como herramientas ampliamente utilizadas en entornos productivos que automatizan este tipo de procesos. La integración de estos mecanismos es clave para reducir el impacto de los errores y mejorar la disponibilidad de las aplicaciones distribuidas.
            p Esta unidad se estructura en tres ejes temáticos: 

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" alt="" style="width: 90px")
              h5.text-center Tema 1
              p.mb-0.text-center Se estudian las estrategias de replicación y sus modelos de consistencia
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
              h5.text-center Tema 2
              p.mb-0.text-center Se analizan los algoritmos de consenso, abordando su lógica interna y utilidad práctica
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
              h5.text-center Tema 3
              p.mb-0.text-center Se exploran las técnicas de recuperación ante fallos, enfocadas en mantener la operatividad y confiabilidad de los sistemas distribuidos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          p A lo largo del proceso de aprendizaje, el estudiante será guiado mediante casos prácticos, esquemas de análisis y ejercicios aplicados que fortalecerán su capacidad de diseño y evaluación de sistemas resilientes.
          p.mb-0 Con este aprendizaje, se espera que el estudiante desarrolle competencias avanzadas para implementar soluciones distribuidas robustas, identificando riesgos potenciales y aplicando mecanismos de réplica, consenso y recuperación que respondan a las exigencias actuales del desarrollo de software crítico, escalable y tolerante a fallos.

</template>
