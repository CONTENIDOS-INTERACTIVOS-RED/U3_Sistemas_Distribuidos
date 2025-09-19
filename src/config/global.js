export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Tolerancia a fallos y replicación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias de replicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos de la replicación en sistemas distribuidos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos de consistencia en entornos replicados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de replicación: activas y pasivas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Protocolos de actualización de réplicas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Desafíos y mejores prácticas en la implementación de réplicas',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Algoritmos de consenso (Paxos, Raft)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Introducción al problema del consenso en sistemas distribuidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios fundamentales del algoritmo Paxos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Algoritmo Raft: comprensión y diseño estructurado',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Comparación entre Paxos y Raft',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Aplicaciones prácticas del consenso distribuido',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recuperación ante fallos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de fallos en sistemas distribuidos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Detección y modelado de fallos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas de tolerancia y recuperación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Protocolos de recuperación coordinada y no coordinada',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Herramientas y casos reales de recuperación ante fallos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arboledas Brihuega, D. (2015). Administración de redes telemáticas: ( ed.). RA-MA Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106471 ',
    },
    {
      referencia:
        'Robledo Sosa, C. (2002). Redes de computadoras: ( ed.). Instituto Politécnico Nacional.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101803',
    },
    {
      referencia:
        'Muñoz Escoí, F. D. (2013). Concurrencia y sistemas distribuidos: ( ed.). Editorial de la Universidad Politécnica de Valencia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57365',
    },
    {
      referencia:
        'Takada, M. (2013). Distributed systems for fun and profit. Mixu’s Node Book. ',
      link: ' https://book.mixu.net/distsys/ ',
    },
    {
      referencia:
        'Urbano López, M. D. P. (2015). Administración y auditoría de los servicios Web. IFCT0509: ( ed.). IC Editorial. ',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/45242',
    },
    {
      referencia:
        'Costas Santos, J. (2015). Mantenimiento de la seguridad en sistemas informáticos: ( ed.). RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62472',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo Paxos',
      significado:
        'Mecanismo de consenso distribuido diseñado para lograr acuerdo entre nodos, incluso en presencia de fallos. Se basa en la comunicación entre proposers, acceptors y learners, y garantiza la consistencia en entornos asíncronos.',
    },
    {
      termino: 'Algoritmo Raft',
      significado:
        'Algoritmo de consenso que simplifica la implementación y comprensión del proceso de elección de líderes, replicación de logs y mantenimiento de consistencia entre nodos en sistemas distribuidos.',
    },
    {
      termino: '<em>Checkpointing</em>',
      significado:
        'Técnica que consiste en guardar periódicamente el estado de un proceso o sistema, permitiendo su restauración desde ese punto en caso de fallo, reduciendo la necesidad de reiniciar desde cero.',
    },
    {
      termino: 'Consenso distribuido',
      significado:
        'Proceso mediante el cual varios nodos de un sistema distribuidos acuerdan un único valor o decisión, incluso si algunos de ellos fallan o se comunican de forma errática.',
    },
    {
      termino: 'Efecto dominó',
      significado:
        'Problema que puede ocurrir en la recuperación no coordinada, donde la necesidad de reiniciar un proceso obliga a que otros procesos también retrocedan en sus estados, generando una cadena de rollbacks.',
    },
    {
      termino: 'Líder (en consenso)',
      significado:
        'Nodo seleccionado dentro de un grupo distribuido para coordinar operaciones, proponer valores o controlar la replicación. Es clave en algoritmos como Raft, donde el líder organiza el flujo de información.',
    },
    {
      termino: 'Quorum',
      significado:
        'Conjunto mínimo de nodos cuya participación es necesaria para que una operación distribuida (como una votación o actualización) sea considerada válida. Garantiza consistencia a pesar de fallos parciales.',
    },
    {
      termino: 'Recuperación coordinada',
      significado:
        'Estrategia de recuperación ante fallos en la que todos los procesos del sistema toman <em>checkpoints</em> sincronizados, asegurando la coherencia del estado global tras una restauración.',
    },
    {
      termino: 'Recuperación no coordinada',
      significado:
        'Técnica donde cada proceso guarda su estado de forma independiente, lo cual mejora el rendimiento, pero puede derivar en inconsistencias y en el efecto dominó durante la recuperación.',
    },
    {
      termino: 'Réplica activa',
      significado:
        'Modelo de replicación en el que todas las réplicas ejecutan las mismas operaciones simultáneamente, garantizando disponibilidad inmediata, pero con mayores requerimientos de sincronización.',
    },
    {
      termino: 'Replica pasiva',
      significado:
        'Enfoque donde solo una réplica activa ejecuta operaciones y las demás se actualizan posteriormente. Permite una gestión más simple del estado, aunque con mayor tiempo de recuperación en caso de fallo.',
    },
    {
      termino: 'Tolerancia a fallos',
      significado:
        'Capacidad del sistema para continuar operando correctamente ante la presencia de errores o fallas parciales, utilizando mecanismos como replicación, redundancia y detección automática de errores.',
    },
  ],
}
