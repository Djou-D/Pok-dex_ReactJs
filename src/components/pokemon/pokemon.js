import React from "react";
import Catcher from "../context/catcher";
import { Pokebola } from "../styles/pokebola-style";
import * as S from "./styled";

import InfoModal from "../modal/infoModal";
import Progress from "../progress_bar/progress";
import { Container } from "../modal/styled";



const Pokemon = (props) => {
  const { catchPokemons, updateCatchPokemons } = React.useContext(Catcher);
  const { description, pokemon } = props;
  const [isModal, setIsModal] = React.useState(false);

  const onCatchPokemon = () => {
    updateCatchPokemons(pokemon.name);
  };

  //metodo para setar a cor do card de acordo com o tipo do pokémon.
  const pokemonType = pokemon.types.map(
    (type) => type.type.name[0].toUpperCase() + type.type.name.slice(1)
  );


  // Metodo para bloquear a tela aoo abrir o modal
  const overflow = document.getElementById('root');
  const openModal = () => {
    setIsModal(true);
    overflow.classList.add('overflow');
  };

  const closeModal = () => {
    setIsModal(false);
    overflow.classList.remove('overflow');

  }

  //calculando o valor total das abilidade do pokémons
  const stats = [
    pokemon.stats[0].base_stat,
    pokemon.stats[1].base_stat,
    pokemon.stats[2].base_stat,
    pokemon.stats[3].base_stat,
    pokemon.stats[4].base_stat,
    pokemon.stats[5].base_stat,
  ];
  const totalFeature = stats.reduce((totalStats, i) => {
    return totalStats + i;
  });

  //acrecentando zeros ao id
  const id = ("000" + pokemon.id).slice(-3);

  return (
    <>
      <S.Card  className={pokemonType[0]}>
        <S.CardBody>
          <S.Header>
            <h3>{pokemon.name}</h3>
            <h3>#{id}</h3>
          </S.Header>

          <S.Center>
            <div>
              {pokemon.types.map((type, index) => {
                return <h4 key={index}>{type.type.name}</h4>;
              })}
            </div>
            <div onClick={openModal}>
              <img
                alt={pokemon.name}
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </div>
          </S.Center>
          <S.CardFooter>
            <Pokebola onClick={onCatchPokemon}>
              <div></div>
            </Pokebola>

            {catchPokemons.includes(pokemon.name) ? (
              <span>Capturado!</span>
            ) : (
              <span>...</span>
            )}
          </S.CardFooter>
        </S.CardBody>
      </S.Card>

      {isModal ? (
        <InfoModal onClose={closeModal}>
          {/* Iniciando estrutura do modal */}
          <Container className={pokemonType[0]}>
            <div className="header">
              <div className="name">
                <h3>{pokemon.name}</h3>
                <p>#{id}</p>
              </div>
              <div className="type">
                {pokemon.types.map((type, index) => {
                  return <p key={index}>{type.type.name}</p>;
                })}
              </div>
              <div className="image">
                <img
                  alt={pokemon.name}
                  src={pokemon.sprites.other.dream_world.front_default}
                />
              </div>
            </div>
          
          <section className="boty">
            <div className="description">
              <h3>Descrição</h3>

              {description.map((desc, key) => {
                return <p key={key}>{desc}</p>
              })}

              {/* <p> */}
                {/* {description} */}
                {/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. */}
              {/* </p> */}
            </div>
            <section className="info">
              <div>
                <p><i className="fa fa-anchor" aria-hidden="true"></i> {pokemon.weight / 10}</p>
                <small>Peso</small>
              </div>
              <div>
                <p><i className="fa fa-arrows-v" aria-hidden="true"></i> {pokemon.height / 10}</p>
                <small>Altura</small>
              </div>
              <div>
                <p>{pokemon.abilities[0].ability.name}</p>
                <small>Habilidade</small>
              </div>
            </section>
            <section className="features">
              <h3>Características</h3>
              <div>
                <div className="statsTitle">
                  <p>Gênero</p>
                </div>
                <div className="statsValue">
                <p className="mars"><i className="fa fa-mars" aria-hidden="true"></i></p>
                </div>
                <p className="venus"><i className="fa fa-venus" aria-hidden="true"></i></p>
              </div>
              <div>
                <div className="statsTitle">
                  <p>Saúde</p>
                </div>
                <div className="statsValue">
                <p>{pokemon.stats[0].base_stat}</p>
                </div>
                <Progress bgColor="#FFA500" progress={pokemon.stats[0].base_stat} />
              </div>
              <div>
                <div className="statsTitle">
                  <p>Ataque</p>
                </div>
                <div className="statsValue">
                <p>{pokemon.stats[1].base_stat}</p>
                </div>
                <Progress bgColor="#FF8C00" progress={pokemon.stats[1].base_stat} />
              </div>
              <div>
                <div className="statsTitle">
                  <p>Defesa</p>
                </div>
                <div className="statsValue">
                <p>{pokemon.stats[2].base_stat}</p>
                </div>
                <Progress bgColor="#FFA500" progress={pokemon.stats[2].base_stat} />
              </div>
              <div>
                <div className="statsTitle">
                  <p>Sp.Ataque</p>
                </div>
                <div className="statsValue">
                <p>{pokemon.stats[3].base_stat}</p>
                </div>
                <Progress bgColor="#FF4500" progress={pokemon.stats[3].base_stat} />
              </div>
              <div>
                <div className="statsTitle">
                  <p>Sp.Defesa</p>
                </div>
                <div className="statsValue">
                <p>{pokemon.stats[4].base_stat}</p>
                </div>
                <Progress bgColor="#FF8C00" progress={pokemon.stats[4].base_stat} />
              </div>
              <div>
                <div className="statsTitle">
                  <p>Velocidade</p>
                </div>
                <div className="statsValue">
                <p>{pokemon.stats[5].base_stat}</p>
                </div>
                <Progress bgColor="#FFA500" progress={pokemon.stats[5].base_stat} />
              </div>
              <div>
                <div className="statsTitle">
                  <p>Total</p>
                </div>
                <div className="statsValue">
                  <p>{totalFeature}</p>
                </div>
                <Progress bgColor="#FF4500" progress={totalFeature} />
              </div>
            </section>
          </section>
          </Container>
        </InfoModal>
      ) : null}
    </>
  );
};

export default Pokemon;
