import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { pathEnum } from "../../common/enums";
import { Button } from "../../components";

function StartButton() {
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    (event) => {
      event.preventDefault();
      navigate(pathEnum.MAZE);
    },
    [navigate]
  );

  return <Button onClick={handleOnClick}>Start solving!</Button>;
}

export default StartButton;
