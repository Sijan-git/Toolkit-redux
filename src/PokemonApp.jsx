import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { Button, CircularProgress, List, ListItem, Typography } from '@mui/material';


export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

  const palabrasporpagina = 15;
  const inicio = (page - 1) * palabrasporpagina;
  const final = inicio + palabrasporpagina;

  return (
    <>
      <Typography variant="h1">PokemonApp</Typography>
      <hr />
      <Typography variant="subtitle1">Loading: {isLoading ? 'True' : 'False'}</Typography>

      {isLoading && <CircularProgress />}

      <List>
        {pokemons.slice(inicio, final).map(({ name }) => (
          <ListItem key={name}>
            {name}
          </ListItem>
        ))}
      </List>

      <Button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </Button>
    </>
  );
};
