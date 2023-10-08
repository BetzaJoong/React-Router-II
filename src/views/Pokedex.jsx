import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './estilo.css';

export default function Pokedex() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (name) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error en la respuesta de la API');
                    }
                    return response.json();
                })
                .then((data) => setPokemon(data))
                .catch((error) => {
                    console.error('Error al cargar el Pokémon:', error);
                    setPokemon(null);
                });
        } else {
            setPokemon(null);
        }
    }, [name]);

    const volverAlBuscador = () => {
        navigate('/pokemones');
    };

    return (
        <div>
            {pokemon ? (
                <div className="pokedex-card">
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="pokedex-image"
                    />
                    <ul className="pokedex-details">
                        <h1 className="pokedex-title">{pokemon.name}</h1>
                        <li>Altura: {pokemon.height} dm</li>
                        <li>Peso: {pokemon.weight} hg</li>
                        <li>HP: {pokemon.stats[0].base_stat}</li>
                        <li>Ataque: {pokemon.stats[1].base_stat}</li>
                        <li>Defensa: {pokemon.stats[2].base_stat}</li>
                        <li>Ataque Especial: {pokemon.stats[3].base_stat}</li>
                        <li>Defensa Especial: {pokemon.stats[4].base_stat}</li>
                        <li>Velocidad: {pokemon.stats[5].base_stat}</li>                        
                        <li>Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}</li>
                    </ul>
                    <button
                        onClick={volverAlBuscador} className='boton'
                    >
                        Volver al Buscador
                    </button>
                </div>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
}

