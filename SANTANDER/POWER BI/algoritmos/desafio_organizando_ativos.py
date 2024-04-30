# Entrada
# 3
# Financiamento de Imovel
# Deposito
# Reservas Bancarias
# ------------
# Saída
# Deposito
# Financiamento de Imovel
# Reservas Bancarias

ativos = []

# Entrada da quantidade de ativos
# quantidadeAtivos = int(input())
quantidadeAtivos = int(3)

# Entrada dos códigos dos ativos
for _ in range(quantidadeAtivos):
    codigoAtivo = input()
    ativos.append(codigoAtivo)

# TODO: Ordenar os ativos em ordem alfabética.
ativos.sort()

# TODO: Imprimir a lista de ativos ordenada, conforme a tabela de exemplos.
for ativo in ativos:
    print(ativo)
