const etapas = {
  etapa_01: {
    descricao: "configurar o arquivo de parametrização config/parametros.js"
  },
  etapa_02: {
    descricao: "gerar o mock da turma",
    comando: "node mock.js"
  },
  etapa_03: {
    descricao: "executar pior caso, instanciar pelo menos 10x",
    comando: "node random_pior_caso.js -i turmas/152.json -o grupos -q 6 -s 1",
    arquivo_gerado: "verificar arquivo gerado no diretorio informado, no caso grupos"
  },
  etapa_04: {
    descricao: "Definir e validar metodologia",
    comando: "node melhor_caso.js -i turmas/153.json -o grupos -q 4 -s 1",
    arquivo_gerado: "deve ser no mesmo local do arquivo da etapa 03"
  },
  etapa_05: {
    descricao: "Executar a performance, e acurácia dos grupos criados nas etapas 03 e 04",
    comando: "node analyzer.js -i grupos/111_1.json -o analises",
    arquivo_gerado: "será criada uma análise no diretório de output informado no comando acima"
  }
}

const GAP = (maior_valor - valor_analise) / (maior_valor - menor_valor)
// 0 - Melhor Performance
// 1 - Pior Performance
// Mais próximo da extremidade zero tende ao melhor, do contrário próximo a um tende ao pior

