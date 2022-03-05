Scenario: Exibir listagem de pessoas interessadas em realizar um serviço
Given Eu estou na página "Buscar por serviço"
When Eu pesquiso por "Desenvolvimento mobile em Swift"
Then Eu consigo ver o nome "Maria Antônia da Conceição" na listagem de pessoas interessadas em realizar o serviço
And Eu consigo ver que "Maria Antônia da Conceição" tem uma avaliação de "4" pontos
And Eu consigo ver "maria_ios@gmail.com" como seu e-mail

Scenario: Não há pessoas cadastradas interessadas em realizar um serviço
Given Eu estou na página "Buscar por serviço"
When Eu pesquiso por "Cantor de ópera infantil"
Then Eu recebo uma mensagem informando que não existe pessoas cadastradas interessadas em realizar o serviço de  "Cantor de ópera infantil"
And Eu consigo realizar uma nova busca

Scenario: O usuário filtra a listagem por preço do serviço
Given Eu estou com a listagem de pessoas interessadas em "Pintar uma parede"
And Existem preços variados para realização desse serviço
When Eu filtro o valor máximo em "R$100"
Then Eu vejo uma listagem menor de pessoas interessadas em realizar o serviço
And Eu vejo que os preços para realizar o serviço custam no máximo "R$100"

Scenario: O usuário ordena a listagem de pessoas interessadas em realizar o serviço baseado na nota de avaliação
Given Eu estou com a listagem de pessoas interessadas em "Montar um guarda-roupa"
And A listagem apresenta a nota de avaliação de cada pessoa interessada de forma não ordenada
When Eu ordeno a listagem por "nota de avaliação"
Then Eu vejo uma listagem com as mesmas pessoas da listagem não ordenada
And A listagem atual está ordenada por "nota de avaliação" da mais alta para mais baixa