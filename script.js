document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const suggestionsContainer = document.getElementById('suggestions');

    const suggestions = [
        "abajur",
        "anime",
        "açucar",
        "amarelo",
        "azul",
        "Água",
        "agulha",
        "alfinete",
        "algema",
        "alicate",
        "almofada",
        "anel",
        "apagador",
        "arco",
        "armadura",
        "banana",
        "bacia",
        "balaio",
        "balança",
        "balde",
        "bambolê",
        "banco",
        "bandeira",
        "bandolim",
        "batuta",
        "bazuca",
        "bengala",
        "berço",
        "berimbau",
        "bicicleta",
        "bidê",
        "bigorna",
        "binóculo",
        "biruta",
        "bisturi",
        "boi",
        "bola",
        "boneca",
        "borracha",
        "botão",
        "botija",
        "brinco",
        "bule",
        "bumerangue",
        "bússola",
        "Cereja",
        "Data",
        "Desenvolvedor",
        "Everson",
        "Everson Sousa",
        "echarpe",
        "edredom",
        "elástico",
        "envelope",
        "enxada",
        "escada",
        "escopeta",
        "escorredor",
        "escova",
        "escudo",
        "escumadeira",
        "esfregão",
        "esmalte",
        "espada",
        "espanador",
        "esparadrapo",
        "espátula",
        "espelho",
        "espingarda",
        "espiral",
        "esponja",
        "espremedor",
        "esquadro",
        "estátua",
        "esteira",
        "estetoscópio",
        "estojo",
        "estribo",
        "etiqueta",
        "extintor",
        "faca",
        "fantoche",
        "farol",
        "fax",
        "ferradura",
        "ferro",
        "fichário",
        "filmadora",
        "filtro",
        "fio",
        "fita",
        "fivela",
        "flauta",
        "flecha",
        "floreira",
        "focinheira",
        "fogão",
        "foguete",
        "foice",
        "folha",
        "fórceps",
        "frasco",
        "freezer",
        "frigideira",
        "frigobar",
        "fritadeira",
        "fruteira",
        "funil",
        "furadeira",
        "Garrafa Pet",
        "helicóptero",
        "Iceberg",
        "Isabele",
        "janela",
        "Josuely",
        "Kiwi",
        "karaokê",
        "Laís",
        "Linda",
        "Linda Isabele",
        "Limão",
        "Laís Cipriano",
        "Maçã",
        "Manga",
        "Nescal",
        "Oração",
        "Ovo",
        "Papaya",
        "Queijo",
        "Raposa",
        "Script",
        "Tomate",
        "Terezinha",
        "Terezinha Josuely",
        "Uva",
        "Urso",
        "Vermelho",
        "Verde",
        "Webcam",
        "Xadrez",
        "Yellow",
        "Zabumba",
        "zíper",
    ];

    searchBar.addEventListener('input', function() {
        const input = searchBar.value.toLowerCase();
        suggestionsContainer.innerHTML = '';
        if (input) {
            const filteredSuggestions = suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(input)
            );
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', function() {
                    searchBar.value = suggestion;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(suggestionItem);
            });
            suggestionsContainer.style.display = filteredSuggestions.length ? 'block' : 'none';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});
