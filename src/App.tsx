import { useState, useEffect } from "react";
import * as S from "./App.styles";
import { Item } from "./types/Items";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {

    setFilteredList( filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>

        {/** Área de informações*/}


        {/** Área de inserção*/}
        
        
        <TableArea />

      </S.Body>
    </S.Container>
  );
};

export default App;
