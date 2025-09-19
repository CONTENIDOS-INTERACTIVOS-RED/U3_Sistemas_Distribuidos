<template lang="pug">
  .curso-main-container.creditos-vista
    BannerInterno(subTitulo="SÍNTESIS")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p(data-aos="fade-up").mb-5 La unidad 3: Tolerancia a fallos y replicación, introduce a los estudiantes en los principios fundamentales que rigen el diseño, funcionamiento y coordinación de sistemas compuestos por múltiples procesos que operan de forma autónoma y concurrente. A través del estudio de conceptos clave como la ausencia de un reloj global, la necesidad de coordinación entre procesos, los relojes lógicos de Lamport y los relojes vectoriales, la unidad permite comprender cómo se preserva la causalidad y el orden de los eventos en entornos distribuidos. Además, se exploran comparaciones entre distintos mecanismos de sincronización y sus aplicaciones prácticas en la industria, como en el análisis de logs, la replicación de datos y los sistemas de control de versiones. Este conocimiento proporciona una base sólida para enfrentar los desafíos técnicos de la programación distribuida, y prepara a los estudiantes para implementar soluciones eficientes y coherentes en escenarios reales de alta complejidad.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis.svg', alt='', data-aos="zoom-in")
</template>
