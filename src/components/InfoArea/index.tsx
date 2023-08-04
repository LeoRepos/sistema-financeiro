import LeftArrowSVG from "../../assets/LeftArrowSVG";
import RightArrowSVG from "../../assets/RightArrowSVG";
import * as S from "./styles";


export const InfoArea = () => {
    return (
        <S.Container>
            <S.MonthArea>
                <S.MonthArrow>
                    <LeftArrowSVG />
                </S.MonthArrow>
                <S.MonthTitle>
                </S.MonthTitle>
                <S.MonthArrow>
                    <RightArrowSVG />
                </S.MonthArrow>
            </S.MonthArea>
            <S.ResumeArea>...</S.ResumeArea>
        </S.Container>
    );
};