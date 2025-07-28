const casos = [
    {

         id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "Homicídio no centro",
        descricao: "Vítima foi encontrada na praça central após denúncias.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    }
];

//função  para achar todos os casos 
function findAll() {
    return casos;
}
//Metodo para criar casos
function create(caso){
    casos.push(caso);
    return caso;
}

// Metodo para achar os casos por id
function findById(id) {
    return casos.find(caso => caso.id === id);
}

// Método para atualizar os casos
function update(id, updatedData) {
    const index = casos.findIndex(caso => caso.id === id);
    if (index === -1) return null;

    casos[index] = { id, ...updatedData };

    return casos[index];
}

// Método para atualizar parcialmente os dados de um caso 
function partialUpdate(id, data) {
    const index = casos.findIndex(caso => caso.id === id);
    if(index === -1) return null;

    casos[index] = { ...casos[index], ...data };
    return casos[index];
}

// Método para remover casos 
function remove(id) {
    const index = casos.findIndex(caso => caso.id === id);

    if (index === -1) return false;

    casos.splice(index, 1);
    return true;
}


module.exports = {
    findAll,
    create,
    findById,
    update,
    partialUpdate,
    remove
};