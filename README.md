# Decodificação FBI

## Índice

* [1. Introdução](#1-introdução)
* [2. Instalação](#2-instalação)
* [3. Uso](#3-uso)
* [4. Decisões Tomadas](#5-decisões-tomadas)
* [5. Futuras Melhorias](#5-futuras-melhorias)

***

## 1. Introdução
A Cifra de César é um método simples de criptografia em que cada letra de uma mensagem é substituída por outra letra que se encontra um número fixo de posições à frente no alfabeto. Por exemplo, se a chave for 3, a letra A é substituída pela letra D, a letra B pela letra E, e assim por diante.

Este método de criptografia foi utilizado pelo Imperador Romano Júlio César para enviar mensagens secretas aos seus generais em tempos de guerra, daí o seu nome.

Embora a Cifra de César seja fácil de entender e implementar, ela é facilmente decifrada por meio de técnicas de análise de frequência, tornando-a inadequada para a criptografia de dados sensíveis. No entanto, ela é frequentemente utilizada em jogos e desafios criptográficos, bem como um exemplo introdutório em cursos de segurança da informação.

A ideia inicial deste aplicativo foi gerar um sistema que permitisse aos agentes do FBI a digitação de uma mensagem e um valor de deslocamento, que determina quantas posições cada letra deve ser deslocada na cifra, possibilitando a resolução de mensagens recebidas ou encontradas em evidências de forma mais ágil. É possível então escolher se deseja criptografar ou descriptografar a mensagem, e o resultado será exibido.

## 2. Instalação

Para instalar este aplicativo, você precisará ter um navegador web moderno instalado. Você pode simplesmente baixar o código-fonte deste repositório e abrir o arquivo index.html no seu navegador para executar o aplicativo. Ou visualizar o link disponibilizado do GitHub Pages.

## 3. Uso

Para usar a Decodificação FBI, basta digitar uma mensagem e um valor de deslocamento nos campos de entrada e clicar no botão "Codificar" ou "Decodificar" para criptografar ou descriptografar a mensagem, respectivamente. O resultado será exibido no campo de saída.

O aplicativo só funciona com letras maiúsculas, então todas as letras minúsculas serão convertidas em maiúsculas automaticamente.

## 4. Decisões Tomadas

Ao projetar este aplicativo, várias decisões foram tomadas:

* A Cifra de César foi escolhida como o método de criptografia devido à sua simplicidade e facilidade de implementação.
* O aplicativo foi projetado para funcionar apenas com letras maiúsculas para simplificar o código e reduzir o risco de erros.
* A interface do usuário foi projetada com um esquema de cores azul/vermelho/amarelo para seguir o logotipo do FBI.
* Caixas arredondadas foram usadas para tornar as seções de mensagens e resultados visualmente mais atraentes e distinguir dos campos de entrada.
* Botões responsivos foram usados para melhorar a experiência do usuário em diferentes dispositivos e tamanhos de tela.
* Uma imagem de fundo foi adicionada para criar um efeito de marca d'água e dar ao aplicativo uma aparência mais profissional.

## 5. Futuras Melhorias

Aqui estão algumas ideias para futuras melhorias no aplicativo:

* Permitir que o usuário escolha entre diferentes cifras, como a Cifra de César ou a Cifra de Vigenere.
* Adicionar suporte para letras minúsculas, números e símbolos.
* Melhorar a interface do usuário com estilização e animações mais avançadas.
* Adicionar um botão de cópia para a área de transferência para facilitar a cópia da mensagem criptografada ou descriptografada.
* Adicionar um botão "redefinir" para limpar os campos de entrada e saída.
