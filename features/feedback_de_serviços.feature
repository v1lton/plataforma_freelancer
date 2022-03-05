Scenario: Envio de feedback positivo completo
Given O usuário contratante contratou um serviço de "Desenvolvimento mobile"
When O usuário contratante marca o serviço como concluído
And O usuário contratante atribui uma nota "5/5" ao serviço
And O usuário contratante não adiciona comentários
And O usuário contratante envia a avaliação
Then O usuário contratante recebe uma mensagem de confirmação
And A nota geral do usuário contratado é recalculada considerando a nova nota atribuída

Scenario: Envio de feedback sem nota
Given O usuário contratante contratou um serviço de "Desenvolvimento mobile"
When O usuário contratante marca o serviço como concluído
And O usuário contratante não atribui uma nota ao serviço
And O usuário contratante não adiciona comentários
And O usuário contratante envia a avaliação
Then O usuário contratante recebe uma mensagem de erro
And O usuário contratante é direcionado novamente para a sessão de feedbacks

Scenario: Usuário não deseja dar o feedback
Given O usuário contratante contratou um serviço de "Desenvolvimento mobile"
When O usuário contratante marca o serviço como concluído
And O usuário contratante opta por não dar feedbacks
Then O usuário contratante recebe uma mensagem de confirmação
And A nota do usuário contratado não é alterada

Scenario: Envio de feedback com nota baixa
Given O usuário contratante contratou um serviço de "Desenvolvimento mobile"
When O usuário contratante marca o serviço como concluído
And O usuário contratante atribui uma nota "1/5" ao serviço
And O usuário contratante não adiciona comentários
And O usuário contratante envia a avaliação
Then O usuário contratante recebe uma mensagem de de erro afirmando que notas baixas necessitam de comentário
And O usuário contratante é direcionado novamente para a sessão de feedbacks