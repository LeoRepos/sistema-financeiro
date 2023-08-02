import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Items";
import * as S from "./styles";

type Props = {
    item: Item
}

export const  TableItem = ({item}: Props ) => {
    return (
        <S.TableLine>
            <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
                <S.Category
                    backgroundColor={categories[item.category].color}
                >                    
                    {categories[item.category].title}
                </S.Category>
            <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>
                <S.Value 
                    color={categories[item.category].expense ? "red" : "green"}
                >
                    R$ {item.value}
                </S.Value>
            </S.TableColumn>
        </S.TableLine>
    );
}