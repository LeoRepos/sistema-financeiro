import { Item } from "../../types/Items";
import * as S from "./styles"

type InputAreaProps = {
    onAdd: (item: Item) => void; 
}

export const InputArea = ({ onAdd }: InputAreaProps) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 9, 20), 
            category: 'food', 
            title: 'Item de Teste',
            value: 250.25
        };
        onAdd(newItem);
    };

    return (
        <S.InputAreaContainer>
            <button onClick={handleAddEvent}>Adicionar</button>
        </S.InputAreaContainer>
    )
};