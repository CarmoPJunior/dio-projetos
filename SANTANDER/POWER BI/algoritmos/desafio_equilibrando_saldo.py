# saldo_atual = float(input())
# valor_deposito = float(input())
# valor_retirada = float(input())

saldo_atual = float(1000)
valor_deposito = float(500)
valor_retirada = float(200)

# TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.

saldo_atual += valor_deposito
saldo_atual -= valor_retirada
# TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
print(f'Saldo atualizado na conta: {saldo_atual}')
