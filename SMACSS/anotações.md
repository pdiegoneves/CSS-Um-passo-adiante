# SMACSS

## Base
Seletor de elemento, seletor descedente, seletor filho
Classes genericas que podem se usadas em qualquer lugar do projeto e que pegam principalmente elementos.
Estruturas gerais do projeto.
Resets css

## Layout
Abrangência de peças do layout -> visual
Partes maiores, mais abrangentes do site
```
l-class #id
```

## Modulos
O cerne do frontend
O que mais será usado, os mais númerosos
Componentes mais específicos, estarão geralmente dentro dos layouts

#### Características principais
. Independente -> não depende de outro componente
. Intercambiável -> pode trocar de lugar(página ou layout) sem nenhum ajuste

Evitar usar elementos dentro do modulo -> use uma classe para o elemento que será estilizado
Não se usa ids nos módulos

## Estados
Indicam que determinado elemento está em determinado estado
Incrementa ou modifica determinado elemento usa o prefixo is-
Geralmento associados ao javascript e inseridos dinamicamente

## Tema
Conjunto de cores, imagens e elementos.
prefixo: theme-

