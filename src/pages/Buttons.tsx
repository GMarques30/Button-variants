import { Button } from "../components/Button";
import * as S from "./styles";

export const Buttons = () => {
  return (
    <S.Container>
      <S.Variant>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </S.Variant>
      <S.Size>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </S.Size>
      <S.Color>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="sucess">Sucess</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
      </S.Color>

      <Button size="large" variant="contained" color="error">
        Cancel
      </Button>
      <Button size="large" variant="contained" color="sucess">
        Confirm
      </Button>
    </S.Container>
  );
};
