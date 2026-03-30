import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


export const FileName = styled.span`
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
`;

export const FileSizeText = styled.span`
  font-size: 10px;
  color: #a9b2c4;
  margin-top: 2px;
`;

export const ProcessingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const ProcessingText = styled.span`
  font-size: 12px;
  color: #1c69ff;
  margin-left: 5px;
`;

export const RemoveButton = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  top: 0px;
  right: -5px;
`;

export const SmallSpinner = styled.div`
  border: 2px solid rgba(28,105,255,0.3);
  border-top: 2px solid #1c69ff;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: ${spin} 1s linear infinite;
`;


export const AttachedFileBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  position: relative;
`;

export const SendButton = styled.div<{ disabled: boolean; isLoading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 55%;
  height: 56px;
  margin-top: 40px;
  border-radius: 5px;
  background: ${props => props.disabled ? '#a1c0ff' : 'linear-gradient(to right, #1c68ff, #053cf0)'};
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  position: relative;
  &:hover {
    background: ${props => props.disabled ? '#a1c0ff' : '#0d5aff'};
  }
`;

export const AttachButton = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: solid 1px #1c69ff;
  background: white;
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  &:hover {
    background: ${props => props.disabled ? 'white' : '#f0f0f0'};
  }
`;


export const InputText = styled.textarea.attrs({
  maxLength: 10000, // 최대 입력 글자수 300자
})`
  width: 100%;
  // max-height: 30px;
  background-color: transparent;
  resize: none;          /* 크기 조절 불가 */
  overflow: auto;        /* 필요시 스크롤 표시 */
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
    color: black;      /* 글자 색상 */
    font-size: 18px;      /* 글자 크기 */
    font-weight: 600;     /* 글자 두께 */
  &::placeholder {
    color: #BAC1CF;      /* 글자 색상 */
    font-size: 15px;      /* 글자 크기 */
    font-weight: normal;     /* 글자 두께 */
  }
`;