# Desafio
# Imagine que você está desenvolvendo um aplicativo para um banco que deseja calcular os juros compostos de um investimento. Seu objetivo é criar uma função que receba três parâmetros: o valor inicial do investimento, a taxa de juros anual e o período de tempo em anos. A função deve calcular e retornar o valor final do investimento após o período determinado, levando em consideração os juros compostos.

# Entrada:
# A função deve receber os seguintes parâmetros:

# valor_inicial: um número inteiro ou decimal representando o valor inicial do investimento.

# taxa_juros: um número decimal representando a taxa de juros anual. Por exemplo, se a taxa for de 5%, o valor passado será 0.05.

# periodo: um número inteiro representando a quantidade de anos do investimento.

# Saída:
# A função deve retornar o valor final do investimento após o período determinado, considerando os juros compostos. O valor final deve ser arredondado para duas casas decimais.

# Exemplos:
# Entrada	            Saída
# 5000                Valor final do investimento: R$ 7346.64
# 0.08
# 5
# ------------------------------------------------------------------
# Entrada	            Saída
# 1000                Valor final do investimento: R$ 1191.02
# 0.06
# 3

# Fórmula juros composto:
# A = P (1 + i) ^ t
#  ------------------------------
# A = valor final;
# P = valor inicial depositado;
# i = taxa de juros;
# t = tempo do investimento.


# valor_inicial = float(input())
# taxa_juros = float(input())
# periodo = int(input())

valor_inicial = float(5000)
taxa_juros = float(0.08)
periodo = int(5)

# TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
valor_final = valor_inicial * (1 + taxa_juros) ** periodo

print(f'Valor final do investimento: R$ {valor_final:.2f}')
