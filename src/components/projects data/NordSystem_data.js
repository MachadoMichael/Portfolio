module.exports = {
    name: 'NordSystem',
    description: `A ideia para este projeto veio de uma necessidade familiar. Meu pai e irmão são
    empreendedores donos de pizzaria e eles sempre tiveram dificuldade em organizar financeiramente
    as empresas. Logo eu pensei em contribuir e como as lojas já utilizam um sistema
    para caixa, estoque e entregas. Resolvi desenvolver um código que auxilia no cálculo do 
    custo e valor de venda de cada produto. Então nesse site o usuário pode criar diversos
    ingredientes cadastrando em quantidade unitária ou peso(gramas). Na tela de custo todos os ingredientes
    ficam listados com um input para acrescentar a quantidade usada no produto especifico, no final 
    retorna os valores custo de cada item, custo total e valor de venda (custo total + margem).
    Além dos ingredientes e margem, ainda temos dois campos adicionais, que são 'nome' e 'tipo'.
    O campo de nome serve para salvar os produtos de forma individual e o campo 'tipo' para facilitar
    a filtragem na próxima página (exemplo de tipo: burger, pizza). Para entrar no sistema criei
    uma verificação de login e senha rodando no backend com node. No momento
    o projeto consta com dois usuários disponíveis, sendo um para uso da empresa Nord e outro para
    teste. Cada usuário conta com pastas diferentes no banco de dados, tornando a experiencia de cada
    um individual.
    Usuário para teste => 
    User: Skynet
    Password: 123
      `,

    techs: ['React', 'Redux', 'Node', 'Mongoose'],
    github: 'https://github.com/MachadoMichael/NordSystem',
    site: 'https://nordsystem.herokuapp.com/',

}