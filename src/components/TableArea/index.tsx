import { Item } from "../../types/Items";
import { TableItem } from "../TableItem";
import * as S from "./style";

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props ) => {
    return (
        <S.Table>
            <thead>
                <tr>
                    <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
                    <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
                    <S.TableHeadColumn>Título</S.TableHeadColumn>
                    <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index)=> (
                        <TableItem key={index} item={item}/>

                    ))
                }
                
            </tbody>
        </S.Table>
    );
};