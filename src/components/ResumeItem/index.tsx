import * as S from "./styles"

type ResumeItemProps = {
    title: string; 
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: ResumeItemProps) => {
    return (
        <S.ResumeItemContainer>
            <S.Title>{title}</S.Title>
            <S.Info color={color} >R$ {value}</S.Info>
        </S.ResumeItemContainer>
    )
}