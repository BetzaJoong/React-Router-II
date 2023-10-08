import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './estilobuscador.css';

export default function Buscador() {
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const [availablePokemon, setAvailablePokemon] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
            .then((response) => response.json())
            .then((data) => {
                const pokemonNames = data.results.map((pokemon, index) => ({
                    name: pokemon.name,
                    index: index + 1, // Agregar 1 para el número de inicio
                }));
                setAvailablePokemon(pokemonNames);
            })
            .catch((error) => {
                console.error('Error al cargar la lista de Pokémon:', error);
            });
    }, []);

    const buscarPokemon = () => {
        if (selectedPokemon) {
            navigate(`/pokemones/${selectedPokemon}`);
        } else {
            alert('Selecciona un Pokémon');
        }
    };

    return (
        <div className="buscador-container">
            <div className="buscador-title-container">
                <h1 className="buscador-title">Selecciona un Pokémon</h1>
            </div>
            <select
                value={selectedPokemon}
                onChange={({ target }) => setSelectedPokemon(target.value)}
                className="buscador-select"
            >
                <option value="">Pokémones</option>
                {availablePokemon.map((pokemon) => (
                    <option key={pokemon.name} value={pokemon.name}>
                        {`${pokemon.index} . ${pokemon.name}`}
                    </option>
                ))}
            </select>
            <button onClick={buscarPokemon} className="buscador-button">
                Ver detalle
            </button>
        </div>
    );
}

