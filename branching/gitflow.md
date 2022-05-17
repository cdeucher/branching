
![GitFlow](img/gitflow.png)
![GitFlow](img/gitflow2.png)

## 
 - Main/Master: Código em produção.
 - Develop: Pré-produção.
 - Feature: Novas features começa e termina obrigatoriamente a partir da develop.
 - Release: Agrupador de features(histórias) para ser lançado em produção.
 - Hotfix: Correção de problema no ambiente de produção.
 - Bugfix: Correção de problema em release.


## Main/Master
Deve refletir exatamente o que está em produção. 
O lançamento em produção deve ocorrer através de TAGs criadas na master após merge da release.
A branch master é a branch de trabalho da Infra.

## Release
Deve ser criada a partir da develop no formato "release/\d+\.\d+.\d+".
As branches de release são branches de trabalho de QA.

## Feature
- Deve ser criada a partir da develop no formato "feature/.+".
- As branches features são branches de trabalho dos Devs.
- Deve-se executar Code Quality.
- Deve-se executar Code Lint.
- Deve-se executar Review, manual e automático.
- Deve-se executar SAST/.+.

## Links
- Post original (Vincent Driessen) criação gitflow.
  - https://nvie.com/posts/a-successful-git-branching-model/
- https://blog.betrybe.com/git/git-flow/
- https://www.flagship.io/git-branching-strategies/
