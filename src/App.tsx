import { useState, useEffect } from "react";
import * as S from "./App.styles";
import { Item } from "./types/Items";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0; 
    let expenseCount = 0; 
    
    for (let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount); 
    setExpense(expenseCount);
  }, [filteredList])

  const handleMOnthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  };

  const handleAddItem = (item: Item) => {
    let newList  = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMOnthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>        
        
        <TableArea list={filteredList}/>

      </S.Body>
    </S.Container>
  );
};

export default App;
