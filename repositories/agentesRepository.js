//Array para armazenar os agentes
const agentes = [
    {
        id: "401bccf5-2b1c-4f3a-8d5e-6f0b7c9e1a2b",
        nome: "Rommel Carneiro",
        dataDeInicio: "1993-01-15",
        cargo: "Delegado"
    },
    {
        id:"a2b3c4d5-e6f7-8a9b-0c1d-2e3f4g5h6i7j",
        nome: "Ana Paula Silva",
        dataDeInicio: "2005-06-20",
        cargo: "Inspetora"
    },
    {
        id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6",
        nome: "Carlos Alberto",
        dataDeInicio: "2010-03-10",
        cargo: "Agente"
    }
];
// Função para encontrar todos os agentes
function findAll() {
    return agentes;
}
// Exportando a função para ser usada em outros módulos
module.exports = {
    findAll
};

//Função que busca um agente 
function findById(id) {
    return agentes.find(agente => agente.id === id);
}

//Criar um novo agente 
function create(agente) {
    agentes.push(agente);
    return agente;
}


//Função para atualizar completa o dados do agente
function update(id, updatedData){
    const index = agentes.findIndex(agente => agente.id === id);
    if(index === -1) return null;

    agentes[index] = { ...agentes[index], ...updatedData };//Matém o mesmo ID
    
    return agentes[index];

}

//função para atualização parcial dos dados do agente
function partialUpdate(id, partialData){
    const agente = agentes.find(agente => agente.id === id);
    if (!agente) return null;

    Object.assign(agente, partialData);
    return agente;
}

//Função para deletar 
function remove(id) {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index === -1) return false;

    agentes.splice(index, 1);
    return true;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    partialUpdate,
    remove
};