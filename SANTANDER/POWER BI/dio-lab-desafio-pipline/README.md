
# Bootcamp DIO - Santander 2023 (ETL com Python)


## **Objetivo:** 

Esse projeto visa colocar em prática o conteúdo aprendido no bootcamp da DIO Santader 2023 sobre ETL com Python.
Para isso vou utilizar a API de previsão do tempo do INPE, para obter os dados de previsão do tempo para os próximos 4 dias de cada cidade que se encontra no arquivo csv.


## **Passos a serem executados:**

1. Ler a planilha em formato CSV ('codCidades.csv'), com uma lista de cod das cidades :
  ```
cidade,cod
São Paulo,244
Salvador, 255
  ```
2. Consumir o endpoint de previsão do tempo do INPE`GET http://servicos.cptec.inpe.br/XML/cidade/{codCidade}/previsao.xml` para obter os dados de previsão do tempo para os próximos 4 dias de cada cidade.
3. Depois vou tratar as informações obtidas da API do INPE.
4. Gravar as informações em um arquivo csv no formato abaixo:
  ```
Cidade,Data,Tempo,Máxima,Mínima
São Paulo,25/08/2023,pn,21,16,8.0
São Paulo,26/08/2023,c,17,13,8.0
São Paulo,27/08/2023,c,16,12,8.0
São Paulo,28/08/2023,pn,16,12,8.0
  ```



## Bibliotecas utilizadas:

- requests
- pandas
- csv
- datetime
- xml.etree.ElementTree


## Criar ambiente virtual

```
python -m venv venv
```


## Instalação das libs

```
pip install pandas
pip install requests
```


## Url API INPE previsão do Tempo

> <http://servicos.cptec.inpe.br/XML/cidade/{codCidade}/previsao.xml>



## Referências

> API INPE CPTEC: <http://servicos.cptec.inpe.br/XML/>


